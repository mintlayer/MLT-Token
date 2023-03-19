import { BigNumber } from 'ethers';
import { randomHex } from 'web3-utils';
import { parseEther } from 'ethers/lib/utils';
import { VestingTree } from '@mintlayer/vesting-tree';
import { deployments, ethers, getNamedAccounts } from 'hardhat';

import { setupUser } from '../helpers/ethers';
import { assert, expect } from './utils/chaiSetup';
import { TREASURERS, VESTING_USERS } from '../addressbook/vestingAddresses';
import {
  GAS_LIMIT,
  BATCH_SIZE,
  ALLOCATIONS,
  ALLOCATION_TOTAL_SUPPLY,
  VESTING_START_TIMESTAMP,
} from '../constants';

/* types */
import type { Accounts } from '../typescript/hardhat';
import type { MLTToken as IMLTToken } from 'build/types';
import type {
  Allocation,
  VestingUsers,
  PartialRecord,
  AllocationsType,
} from '@mintlayer/vesting-tree/dist/types';

let tree: VestingTree | null = null;

async function setup() {
  await deployments.fixture(['MLTToken']);

  const accounts = await getNamedAccounts() as Accounts;


  if(!tree) {
    if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid');

    tree = new VestingTree({
      users: VESTING_USERS,
      allocations: ALLOCATIONS,
      vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
      balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
      treasurers: TREASURERS,
      ownerAddress: accounts.deployer
    });
  }

  const [ MLTToken ] = await Promise.all([
    ethers.getContract<IMLTToken>('MLTToken'),
  ])

  return {
    accounts,
    contracts: {
      MLTToken
    }
  }
}

describe('MLTToken contract', () => {
  it('MLTToken contract must be deployed', async () => {
    const { contracts: { MLTToken }} = await setup();
    assert.ok(MLTToken.address);
  });

  it('Should fail if the merkle proof is invalid', async () => {
    const { contracts: { MLTToken } } = await setup();

    if(!tree) throw new Error('tree invalid!');
    const root = tree.getHexRoot();

    await expect(MLTToken.releaseVested(ethers.constants.AddressZero, 0, 0, root, []))
    .to.revertedWith('Invalid merkle proof');

    await expect(MLTToken.releaseVested(ethers.constants.AddressZero, 0, 0, randomHex(32), []))
    .to.revertedWith('Root no valid');
  });

  it('Successfully claim vesting. It will fail if you try to claim multiple times', async () => {
      const { contracts: { MLTToken } } = await setup();

      if(!tree) throw new Error('tree invalid!');
      const root = tree.getHexRoot();

      const VESTING_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();

      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);
      const blockTimestamp = block.timestamp;

      const vestingSchedule = tree.vestingSchedules[0];

      const timestamp = VESTING_TIMESTAMP.add(vestingSchedule.vestingCliff).toNumber();
      if(blockTimestamp < timestamp) {
        await ethers.provider.send('evm_setNextBlockTimestamp', [ timestamp ]);
        await ethers.provider.send('evm_mine', []);
      }

      const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);
      const proof = tree.getHexProof(tree.hash(vestingSchedule));

      const { address, amount, vestingCliff } = vestingSchedule;

      await expect(
        MLTToken.releaseVested(address, amount, vestingCliff, root, [])
      ).to.revertedWith("Invalid merkle proof");

      await expect(
        MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), [])
      ).to.revertedWith("Root no valid");

      const releaseVestedTx = MLTToken.releaseVested(address, amount, vestingCliff, root, proof);

      await expect(releaseVestedTx).to.be.emit(MLTToken, 'VestedTokenGrant');

      const userBalAfter = await MLTToken.balanceOf(address);

      expect(userBalAfter).to.be.equal(userBalBefore.add(amount));

      await expect(
        MLTToken.releaseVested(address, amount, vestingCliff, root, proof)
      ).to.revertedWith('Tokens already claimed');
  });

  it('All vesting should be released', async () => {
    const { contracts: { MLTToken } } = await setup();

    if(!tree) throw new Error('tree invalid!');
    const root = tree.getHexRoot();

    const VESTING_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();

    let currentTimestamp = VESTING_TIMESTAMP.toNumber();

    for(const vestingSchedule of tree.vestingSchedules) {
      const timestampTMP = VESTING_TIMESTAMP.add(vestingSchedule.vestingCliff).toNumber();

      if(currentTimestamp <= timestampTMP) {
        currentTimestamp = timestampTMP;
      }
    }

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);
    const blockTimestamp = block.timestamp;

    if(blockTimestamp <= currentTimestamp) {
      await ethers.provider.send('evm_setNextBlockTimestamp', [currentTimestamp]);
      await ethers.provider.send('evm_mine', []);
    }

    let treasuryBalance = BigNumber.from(0);
    const vestingSchedulesPromises: Promise<any>[] = [];

    for(const key in tree.groupedByUsers) {
      const vestingSchedules = tree.groupedByUsers[key];

      vestingSchedulesPromises.push(new Promise(async (resolve) => {
        if(!tree) throw new Error('tree invalid!');
        for(const vestingSchedule of vestingSchedules) {
          const { address, amount, vestingCliff } = vestingSchedule;

          const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

          const proof = tree.getHexProof(tree.hash(vestingSchedule));

          await expect(
            MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof)
          ).to.revertedWith("Root no valid");

          await expect(
            MLTToken.releaseVested(address, amount, vestingCliff, root, [])
          ).to.revertedWith("Invalid merkle proof");

          const isTreasurer = await MLTToken.isTreasurer(address);

          if(isTreasurer) {
            treasuryBalance = treasuryBalance.add(amount);
            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, root, proof)
            ).to.be.revertedWith("Treasury addresses cannot claim tokens")
          }

          if(!isTreasurer) {
            await MLTToken.releaseVested(address, amount, vestingCliff, root, proof);

            const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

            expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, root, proof)
            ).to.revertedWith('Tokens already claimed');
          }
        }

        resolve(true);
      }))
    }

    await Promise.all(vestingSchedulesPromises);

    const allocationBalance = await MLTToken.balanceByRootHash(root);

    expect(allocationBalance.sub(treasuryBalance)).to.be.equal(0);
  });

  it('Batches release', async () => {
    const { contracts: { MLTToken } } = await setup();

    const batches: IMLTToken.VestingDataStruct[][] = [];

    if(!tree) throw new Error('tree invalid!');
    const root = tree.getHexRoot();

    const VESTING_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();

    const nextBlockTimestamp = VESTING_TIMESTAMP.mul(2).toNumber();
    await ethers.provider.send('evm_setNextBlockTimestamp', [ nextBlockTimestamp ]);
    await ethers.provider.send('evm_mine', []);

    let treasuryBalance = BigNumber.from(0);

    for(let i = 0; i < tree.vestingSchedules.length; i += BATCH_SIZE) {
      const users: IMLTToken.VestingDataStruct[] = [];

      const vestingSchedulesChunk = tree.vestingSchedules.slice(i, i + BATCH_SIZE);

      for(const vestingSchedule of vestingSchedulesChunk) {
        const { address, amount, vestingCliff } = vestingSchedule;

        const isTreasure = await MLTToken.isTreasurer(address);

        if(isTreasure) {
          treasuryBalance = treasuryBalance.add(amount);
          continue;
        }

        users.push({
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: tree.getHexProof(tree.hash(vestingSchedule))
        })
      }

      batches.push(users);
    }

    const batchesPromises = batches.map((users) => {
      return MLTToken.batchReleaseVested(users, root, { gasLimit: GAS_LIMIT });
    })

    await Promise.all(batchesPromises);

    const allocationBalance = await MLTToken.balanceByRootHash(root);

    expect(allocationBalance.sub(treasuryBalance)).to.be.equal(0);
  })

  describe('After TGE', () => {
    const usersTGE: VestingUsers[] = [
      {
        address: "0xBc67849Ae7A1dc56b457eC4FAA504023f6cBDDb5",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0xDc52fA023D42d500CeE45082cf1cF5BCF3667193",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0x21ed04564eBCBD1268b3819642d2261f2424Ad33",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0x4cDdC75B0A11a38bBd5Af3d9dA9b79730817Df6f",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0x08b679F6C3b1f80C4f191FF0fEc0eDa581626992",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0x43DdDe3FB3E936436F983F48a964eC58E1F82E9F",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0x699590d7019CfcCb32C10f9aA3a878550953BE0f",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0xc2404ECbDbC1AE9e7F1E46B3203D3575f48B6182",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0x1D07Bdd8600eFEB2830B9C34232832BB4388eeAA",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
      {
        address: "0xFB570607960C2fEC2FAAa324325036f91b44e5C9",
        allocationsType: "seed",
        weight: parseEther('0.1'),
      },
    ];

    const dummyRoot = randomHex(32);

    /**
     * IMPORTANT!
     * The treasurerData1 is used in index 1 because it is the address that the private key is
     * set to in the .env file. If you are cloning this repository and you don't have the .env
     * file with the same address, you can set your own address and add the private key to the
     * TREASURER_WALLET_PRIVKEY variable in the .env file.
    */
    const treasurerData1 = TREASURERS[1];
    const { vestingType } = treasurerData1;
    const { unlocking, months, monthly, cliff, label } = vestingType;

    const allocation1_: IMLTToken.AllocationStruct = {
      unlocking: parseEther(`${unlocking}`),
      months: months.map(month => parseEther(`${month}`)),
      monthly: monthly.map(month => parseEther(`${month}`)),
      cliff: parseEther(`${cliff}`),
    }

    const allocations: PartialRecord<AllocationsType, Allocation> = {
      seed: {
        percentage: parseEther('1'),
        vestingInfo: {
          unlocking,
          monthly,
          months,
          cliff,
          label,
        }
      }
    };

    it('Should fail if initial root is not valid', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      await expect(
        MLTToken.addRoot(dummyRoot, dummyRoot, 0, '', allocation1_, [], [], [], [], [])
      ).to.revertedWith('Root no valid');
    });

    it('Should fail if caller is not a treasurer', async () => {
      const { contracts: { MLTToken } } = await setup();

      if(!tree) throw new Error('tree invalid!');
      const root = tree.getHexRoot();

      await expect(
        MLTToken.addRoot(root, dummyRoot, 0, '', allocation1_, [], [], [], [], [])
      ).to.revertedWith('Caller is not a treasurer');
    });

    it('Should fail if the quantity of the allocation of the new Merkle tree is invalid', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');
      const root = tree.getHexRoot();

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      const balance = await MLTToken.totalSupply();
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();

      await expect(
        MLTToken.addRoot(root, rootTreeAfterTGE, balance, '', allocation1_, [], [], [], [], [])
      ).to.revertedWith('The quantity of the allocation of the new Merkle tree is invalid');
    });

    it('Should fail if the allocation type of the new Merkle tree is invalid', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');
      const root = tree.getHexRoot();

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      const balance = await MLTToken.totalSupply();
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();

      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          0,
          '',
          allocation1_,
          [],
          [],
          [],
          allocationQuantityProof_,
          []
        )
      ).to.revertedWith('Allocation type of the new Merkle tree is invalid');
    });

    it('Should fail if the supply sent does not match that of the merketree', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');
      const root = tree.getHexRoot();

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      const balance = await MLTToken.totalSupply();
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();

      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.treasurerHash(treasurerData1)
      );

      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          0,
          '',
          allocation1_,
          [],
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          []
        )
      ).to.revertedWith('The supply sent does not match that of the merketree');
    });

    it('should fail if you try to claim tokens from another user', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');
      const root = tree.getHexRoot();

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      const balance = parseEther('1000');
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();
      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.treasurerHash(treasurerData1)
      );

      const balanceProof_ = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(balance));
      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          balance,
          '',
          allocation1_,
          balanceProof_,
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          [{
            beneficiary: randomHex(20),
            amount: 0,
            cliff: 0,
            proof: []
          }]
        )
      ).to.revertedWith('You cannot claim tokens from another user');
    });

    it('Should fail if the merkle proof is invalid', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');
      const root = tree.getHexRoot();

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      const balance = await MLTToken.totalSupply();
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();
      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.treasurerHash(treasurerData1)
      );

      const balanceProof_ = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(balance));
      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          balance,
          '',
          allocation1_,
          balanceProof_,
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          [{
            beneficiary: treasurer1,
            amount: balance,
            cliff: 0,
            proof: []
          }]
        )
      ).to.revertedWith("Invalid merkle proof");
    });

    it('Should fail if amount is different from balance', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');
      const root = tree.getHexRoot();

      const vestingSchedulesTreasurer = tree.groupedByUsers[treasurer1];

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      const balance = await MLTToken.totalSupply();
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const vestings = vestingSchedulesTreasurer.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        if(!tree) throw new Error('tree invalid!');

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: tree.getHexProof(tree.hash(vestingSchedule))
        }
      })

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();
      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.treasurerHash(treasurerData1)
      );

      const balanceProof_ = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(balance));
      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          balance,
          '',
          allocation1_,
          balanceProof_,
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          vestings
        )
      ).to.revertedWith("Amount is different from balance");
    });

    it('Should fail if root hash already exists', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');

      const root = tree.getHexRoot();

      const vestingSchedulesTreasurer = tree.groupedByUsers[treasurer1];

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      let balance = BigNumber.from(0);

      const vestingSchedules = vestingSchedulesTreasurer.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        balance = balance.add(amount);

        if(!tree) throw new Error('tree invalid!');

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: tree.getHexProof(tree.hash(vestingSchedule))
        }
      })

      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();
      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.treasurerHash(treasurerData1)
      );

      const balanceProof_ = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(balance));
      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          balance,
          '',
          allocation1_,
          balanceProof_,
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          vestingSchedules
        )
      ).to.be.emit(MLTToken, 'AddedRoot');

      await expect(
        MLTToken.addRoot(
          root,
          rootTreeAfterTGE,
          balance,
          '',
          allocation1_,
          balanceProof_,
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          vestingSchedules
        )
      ).to.be.revertedWith('Root hash already exists');
    })

    it('Successfully claim vesting. Should fail if you try to claim multiple times', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      let balance = BigNumber.from(0);

      if(!tree) throw new Error('tree invalid!');
      if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid!');

      const vestingSchedulesTreasurer = tree.groupedByUsers[treasurer1];
      const vestingSchedules = vestingSchedulesTreasurer.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        balance = balance.add(amount);

        if(!tree) throw new Error('tree invalid!');

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: tree.getHexProof(tree.hash(vestingSchedule))
        }
      })

      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const root = tree.getHexRoot();
      const rootAfterTGE = treeAfterTGE.getHexRoot();

      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.treasurerHash(treasurerData1)
      );

      const balanceProof_ = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(balance));
      const allocationQuantityProof_ = treeAfterTGE.getHexProof(
        treeAfterTGE.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootAfterTGE,
          balance,
          '',
          allocation1_,
          balanceProof_,
          initialAllocationProof_,
          newAllocationProof_,
          allocationQuantityProof_,
          vestingSchedules
        )
      ).to.be.emit(MLTToken, 'AddedRoot');

      const timestampTreeAfterTGE = await MLTToken.VESTING_START_TIMESTAMP();

      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);
      const blockTimestamp = block.timestamp;

      let treasuryBalance = BigNumber.from(0);
      let currentTimestamp = timestampTreeAfterTGE.toNumber();

      treeAfterTGE.vestingSchedules.forEach(({ vestingCliff }) => {
        const timestampTMP = timestampTreeAfterTGE.add(vestingCliff).toNumber();

        if(currentTimestamp <= timestampTMP) {
          currentTimestamp = timestampTMP;
        }
      })

      if(blockTimestamp <= currentTimestamp) {
        await ethers.provider.send('evm_setNextBlockTimestamp', [currentTimestamp]);
        await ethers.provider.send('evm_mine', []);
      }

      const vestingSchedulesPromises: Promise<any>[] = [];

      for(const key in treeAfterTGE.groupedByUsers) {
        const vestingSchedules = treeAfterTGE.groupedByUsers[key];

        vestingSchedulesPromises.push(new Promise(async (resolve) => {
          for(const vestingSchedule of vestingSchedules) {
            const { address, amount, vestingCliff } = vestingSchedule;

            const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

            const proof = treeAfterTGE.getHexProof(treeAfterTGE.hash(vestingSchedule));

            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof)
            ).to.revertedWith("Root no valid");


            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE, [])
            ).to.revertedWith("Invalid merkle proof");

            const isTreasurer = await MLTToken.isTreasurer(address);

            if(isTreasurer) {
              treasuryBalance = treasuryBalance.add(amount);
              await expect(
                MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE, proof)
              ).to.be.revertedWith("Treasury addresses cannot claim tokens")
            }

            if(!isTreasurer) {
              await MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE, proof);

              const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

              expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

              await expect(
                MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE, proof)
              ).to.revertedWith('Tokens already claimed');
            }
          }

          resolve(true);
        }))
      }

      await Promise.all(vestingSchedulesPromises);

      const allocationBalance = await MLTToken.balanceByRootHash(rootAfterTGE);

      expect(allocationBalance.sub(treasuryBalance)).to.be.equal(0);
    })

    it('a number of N new merkle trees can be added', async () => {
      const { contracts, accounts } = await setup();
      const { treasurer1 } = accounts;

      const contractsConnect = await setupUser(treasurer1, contracts);
      const MLTToken = contractsConnect.MLTToken;

      let balance1 = BigNumber.from(0);

      if(!tree) throw new Error('invalid tree!');
      if(!VESTING_START_TIMESTAMP) throw new Error('invalid VESTING_START_TIMESTAMP!');

      /****************
      * treeAfterTGE1 *
      *****************/

      const vestingSchedulesTreasurer1 = tree.groupedByUsers[treasurer1];
      const vestingSchedules1 = vestingSchedulesTreasurer1.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        balance1 = balance1.add(amount);

        if(!tree) throw new Error('invalid tree!');

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: tree.getHexProof(tree.hash(vestingSchedule))
        }
      })

      const users1: VestingUsers[] = [
        {
          address: treasurer1,
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0xDc52fA023D42d500CeE45082cf1cF5BCF3667193",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0x21ed04564eBCBD1268b3819642d2261f2424Ad33",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0x4cDdC75B0A11a38bBd5Af3d9dA9b79730817Df6f",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0x08b679F6C3b1f80C4f191FF0fEc0eDa581626992",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0x43DdDe3FB3E936436F983F48a964eC58E1F82E9F",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0x699590d7019CfcCb32C10f9aA3a878550953BE0f",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0xc2404ECbDbC1AE9e7F1E46B3203D3575f48B6182",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0x1D07Bdd8600eFEB2830B9C34232832BB4388eeAA",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
        {
          address: "0xFB570607960C2fEC2FAAa324325036f91b44e5C9",
          allocationsType: "seed",
          weight: parseEther('0.1'),
        },
      ];

      const treeAfterTGE1 = new VestingTree({
        balance: balance1,
        users: users1,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const root = tree.getHexRoot();
      const rootAfterTGE1 = treeAfterTGE1.getHexRoot();

      const initialAllocationProof_ = tree.getHexProof(tree.treasurerHash(treasurerData1));
      const newAllocationProof1_ = treeAfterTGE1.getHexProof(
        treeAfterTGE1.treasurerHash(treasurerData1)
      );

      const balanceProof1_ = treeAfterTGE1.getHexProof(treeAfterTGE1.balancehash(balance1));
      const allocationQuantityProof1_ = treeAfterTGE1.getHexProof(
        treeAfterTGE1.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root,
          rootAfterTGE1,
          balance1,
          '',
          allocation1_,
          balanceProof1_,
          initialAllocationProof_,
          newAllocationProof1_,
          allocationQuantityProof1_,
          vestingSchedules1
        )
      ).to.be.emit(MLTToken, 'AddedRoot');

      const timestampTreeAfterTGE1 = await MLTToken.VESTING_START_TIMESTAMP();

      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);
      const blockTimestamp = block.timestamp;

      let treasuryBalance = BigNumber.from(0);
      let currentTimestamp = timestampTreeAfterTGE1.toNumber();

      treeAfterTGE1.vestingSchedules.forEach(({ vestingCliff }) => {
        const timestampTMP = timestampTreeAfterTGE1.add(vestingCliff).toNumber();

        if(currentTimestamp <= timestampTMP) {
          currentTimestamp = timestampTMP;
        }
      })

      if(blockTimestamp <= currentTimestamp) {
        await ethers.provider.send('evm_setNextBlockTimestamp', [currentTimestamp]);
        await ethers.provider.send('evm_mine', []);
      }

      const vestingSchedulesPromises: Promise<any>[] = [];

      for(const key in treeAfterTGE1.groupedByUsers) {
        const vestingSchedules = treeAfterTGE1.groupedByUsers[key];

        vestingSchedulesPromises.push(new Promise(async (resolve) => {
          for(const vestingSchedule of vestingSchedules) {
            const { address, amount, vestingCliff } = vestingSchedule;

            const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

            const proof = treeAfterTGE1.getHexProof(treeAfterTGE1.hash(vestingSchedule));

            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof)
            ).to.revertedWith("Root no valid");


            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE1, [])
            ).to.revertedWith("Invalid merkle proof");

            const isTreasurer = await MLTToken.isTreasurer(address);

            if(isTreasurer) {
              treasuryBalance = treasuryBalance.add(amount);
              await expect(
                MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE1, proof)
              ).to.be.revertedWith("Treasury addresses cannot claim tokens")
            }

            if(!isTreasurer) {
              await MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE1, proof);

              const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

              expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

              await expect(
                MLTToken.releaseVested(address, amount, vestingCliff, rootAfterTGE1, proof)
              ).to.revertedWith('Tokens already claimed');
            }
          }

          resolve(true);
        }))
      }

      await Promise.all(vestingSchedulesPromises);

      const allocationBalance = await MLTToken.balanceByRootHash(rootAfterTGE1);

      expect(allocationBalance.sub(treasuryBalance)).to.be.equal(0);

      /****************
      * treeAfterTGE2 *
      *****************/
      let balance2 = BigNumber.from(0);

      const vestingSchedulesTreasurer2 = treeAfterTGE1.groupedByUsers[treasurer1];
      const vestingSchedules2 = vestingSchedulesTreasurer2.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        balance2 = balance2.add(amount);

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: treeAfterTGE1.getHexProof(treeAfterTGE1.hash(vestingSchedule))
        }
      })

      const users2: VestingUsers[] = [
        {
          address: treasurer1,
          allocationsType: "seed",
          weight: parseEther('0.5'),
        },
        {
          address: "0xDc52fA023D42d500CeE45082cf1cF5BCF3667193",
          allocationsType: "seed",
          weight: parseEther('0.5'),
        },
      ];

      const treeAfterTGE2 = new VestingTree({
        balance: balance2,
        users: users2,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const root1 = treeAfterTGE1.getHexRoot();
      const rootAfterTGE2 = treeAfterTGE2.getHexRoot();

      const initialAllocationProof1_ = treeAfterTGE1.getHexProof(treeAfterTGE1.treasurerHash(treasurerData1));
      const newAllocationProof2_ = treeAfterTGE2.getHexProof(
        treeAfterTGE2.treasurerHash(treasurerData1)
      );

      const balanceProof2_ = treeAfterTGE2.getHexProof(treeAfterTGE2.balancehash(balance2));
      const allocationQuantityProof2_ = treeAfterTGE2.getHexProof(
        treeAfterTGE2.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root1,
          rootAfterTGE2,
          balance2,
          '',
          allocation1_,
          balanceProof2_,
          initialAllocationProof1_,
          newAllocationProof2_,
          allocationQuantityProof2_,
          vestingSchedules2
        )
      ).to.be.emit(MLTToken, 'AddedRoot');

      /****************
      * treeAfterTGE3 *
      *****************/
      let balance3 = BigNumber.from(0);

      const vestingSchedulesTreasurer3 = treeAfterTGE2.groupedByUsers[treasurer1];
      const vestingSchedules3 = vestingSchedulesTreasurer3.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        balance3 = balance3.add(amount);

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: treeAfterTGE2.getHexProof(treeAfterTGE2.hash(vestingSchedule))
        }
      })

      const users3: VestingUsers[] = [
        {
          address: treasurer1,
          allocationsType: "seed",
          amount: balance3.sub(parseEther('100')),
        },
        {
          address: "0xFB570607960C2fEC2FAAa324325036f91b44e5C9",
          allocationsType: "seed",
          amount: parseEther('100'),
        },
      ];

      const treeAfterTGE3 = new VestingTree({
        balance: balance3,
        users: users3,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const root2 = treeAfterTGE2.getHexRoot();
      const rootAfterTGE3 = treeAfterTGE3.getHexRoot();

      const initialAllocationProof2_ = treeAfterTGE2.getHexProof(treeAfterTGE2.treasurerHash(treasurerData1));
      const newAllocationProof3_ = treeAfterTGE3.getHexProof(
        treeAfterTGE3.treasurerHash(treasurerData1)
      );

      const balanceProof3_ = treeAfterTGE3.getHexProof(treeAfterTGE3.balancehash(balance3));
      const allocationQuantityProof3_ = treeAfterTGE3.getHexProof(
        treeAfterTGE3.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root2,
          rootAfterTGE3,
          balance3,
          '',
          allocation1_,
          balanceProof3_,
          initialAllocationProof2_,
          newAllocationProof3_,
          allocationQuantityProof3_,
          vestingSchedules3
        )
      ).to.be.emit(MLTToken, 'AddedRoot');

      /****************
      * treeAfterTGE4 *
      *****************/
      let balance4 = BigNumber.from(0);

      const vestingSchedulesTreasurer4 = treeAfterTGE3.groupedByUsers[treasurer1];
      const vestingSchedules4 = vestingSchedulesTreasurer4.map((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        balance4 = balance4.add(amount);

        return {
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: treeAfterTGE3.getHexProof(treeAfterTGE3.hash(vestingSchedule))
        }
      })

      const users4: VestingUsers[] = [
        {
          address: treasurer1,
          allocationsType: "seed",
          weight: parseEther('0.5'),
        },
        {
          address: "0xFB570607960C2fEC2FAAa324325036f91b44e5C9",
          allocationsType: "seed",
          weight: parseEther('0.5'),
        },
      ];

      const treeAfterTGE4 = new VestingTree({
        balance: balance4,
        users: users4,
        allocations,
        vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
        treasurers: [treasurerData1]
      });

      const root3 = treeAfterTGE3.getHexRoot();
      const rootAfterTGE4 = treeAfterTGE4.getHexRoot();

      const initialAllocationProof3_ = treeAfterTGE3.getHexProof(treeAfterTGE3.treasurerHash(treasurerData1));
      const newAllocationProof4_ = treeAfterTGE4.getHexProof(
        treeAfterTGE4.treasurerHash(treasurerData1)
      );

      const balanceProof4_ = treeAfterTGE4.getHexProof(treeAfterTGE4.balancehash(balance4));
      const allocationQuantityProof4_ = treeAfterTGE4.getHexProof(
        treeAfterTGE4.allocationQuantityHash()
      );

      await expect(
        MLTToken.addRoot(
          root3,
          rootAfterTGE4,
          balance4,
          '',
          allocation1_,
          balanceProof4_,
          initialAllocationProof3_,
          newAllocationProof4_,
          allocationQuantityProof4_,
          vestingSchedules4
        )
      ).to.be.emit(MLTToken, 'AddedRoot');
    })
  })
})