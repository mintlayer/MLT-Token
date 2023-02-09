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

  if(!tree) {
    if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid');

    tree = new VestingTree({
      users: VESTING_USERS,
      allocations: ALLOCATIONS,
      vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
      balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
      treasurers: TREASURERS,
    });
  }

  const accounts = await getNamedAccounts() as Accounts;

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

    tree.vestingSchedules.forEach((vestingSchedule) => {
      const timestampTMP = VESTING_TIMESTAMP.add(vestingSchedule.vestingCliff).toNumber();

      if(currentTimestamp <= timestampTMP) {
        currentTimestamp = timestampTMP;
      }
    })

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
    const treasurerData1 = TREASURERS[2];
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
      ).to.revertedWith('Initial root not valid');
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

    it('Should failf if root hash already exists', async () => {
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
  })
})