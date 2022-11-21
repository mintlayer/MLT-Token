import { randomHex } from 'web3-utils';
import { parseEther } from 'ethers/lib/utils';
import { VestingTree } from '@mintlayer/vesting-tree';
import { deployments, ethers, getNamedAccounts } from 'hardhat';

import { setupUser } from '../helpers/ethers';
import { assert, expect } from './utils/chaiSetup';
import { VESTING_USERS } from '../addressbook/vestingAddresses';
import {
  GAS_LIMIT,
  BATCH_SIZE,
  ALLOCATIONS,
  ALLOCATION_TOTAL_SUPPLY,
  VESTING_START_TIMESTAMP,
  ONE_MONTH_IN_SECONDS,
} from '../constants';

/* types */
import type { Accounts } from '../typescript/hardhat';
import type { MLTToken as IMLTToken } from 'build/types';
import type { VestingUsers } from '@mintlayer/vesting-tree/dist/types';

let tree: VestingTree | null = null;

async function setup() {
  await deployments.fixture(['MLTToken']);

  if(!tree) {
    tree = new VestingTree({
      users: VESTING_USERS,
      allocations: ALLOCATIONS,
      balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
      oneMothInSeconds: ONE_MONTH_IN_SECONDS
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

    const root = tree.getHexRoot();

    await expect(MLTToken.releaseVested(ethers.constants.AddressZero, 0, 0, root, []))
    .to.revertedWith('Invalid merkle proof');

    await expect(MLTToken.releaseVested(ethers.constants.AddressZero, 0, 0, randomHex(32), []))
    .to.revertedWith('Is not valid root');
  });

  it('Should fail if it is not yet the release date', async () => {
    const { contracts: { MLTToken } } = await setup();

    const root = tree.getHexRoot();
    const VESTING_TIMESTAMP = await MLTToken.startTimestampByRootHash(root);

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);
    const blockTimestamp = block.timestamp;

    const vestingSchedule = tree.vestingSchedules.find((item) => {
      return blockTimestamp < VESTING_TIMESTAMP.add(item.vestingCliff).toNumber();
    });

    if(vestingSchedule) {
      await expect(
        MLTToken.releaseVested(
          vestingSchedule.address,
          vestingSchedule.amount,
          vestingSchedule.vestingCliff,
          root,
          tree.getHexProof(tree.hash(vestingSchedule))
        )
      )
      .to.revertedWith("The release date has not yet arrived");

      await expect(
        MLTToken.releaseVested(
          vestingSchedule.address,
          vestingSchedule.amount,
          vestingSchedule.vestingCliff,
          randomHex(32),
          tree.getHexProof(tree.hash(vestingSchedule))
        )
      )
      .to.revertedWith("Is not valid root");
    }
  });

  it('Successfully claim vesting. It will fail if you try to claim multiple times', async () => {
      const { contracts: { MLTToken } } = await setup();

      const root = tree.getHexRoot();

      const VESTING_TIMESTAMP = await MLTToken.startTimestampByRootHash(root);

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

      await expect(
        MLTToken.releaseVested(
          vestingSchedule.address,
          vestingSchedule.amount,
          vestingSchedule.vestingCliff,
          randomHex(32),
          proof
        )
      ).to.revertedWith("Is not valid root");

      const releaseVestedTx = MLTToken.releaseVested(
        vestingSchedule.address,
        vestingSchedule.amount,
        vestingSchedule.vestingCliff,
        root,
        proof
      );

      await expect(releaseVestedTx).to.be.emit(MLTToken, 'VestedTokenGrant');

      const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

      expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

      await expect(MLTToken.releaseVested(
        vestingSchedule.address,
        vestingSchedule.amount,
        vestingSchedule.vestingCliff,
        root,
        proof
      ))
      .to.revertedWith('Tokens already claimed');
  });

  it('All vesting should be released', async () => {
    const { contracts: { MLTToken } } = await setup();

    const root = tree.getHexRoot();

    const VESTING_TIMESTAMP = await MLTToken.startTimestampByRootHash(root);

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

    const vestingSchedulePromises: Promise<any>[] = [];

    for(const key in tree.groupedByUsers) {
      const user = tree.groupedByUsers[key];

      vestingSchedulePromises.push(new Promise(async (resolve) => {
        for(const vestingSchedule of user) {
          const { address, amount, vestingCliff } = vestingSchedule;

          const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

          const proof = tree.getHexProof(tree.hash(vestingSchedule));

          await expect(
            MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof)
          ).to.revertedWith("Is not valid root");

          await MLTToken.releaseVested(address, amount, vestingCliff, root, proof);

          const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

          expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

          await expect(
            MLTToken.releaseVested(address, amount, vestingCliff, root, proof)
          ).to.revertedWith('Tokens already claimed');
        }

        resolve(true);
      }))
    }

    await Promise.all(vestingSchedulePromises);

    const allocationBalance = await MLTToken.balanceByRootHash(root);

    expect(allocationBalance).to.be.equal(0);
  });

  it('Batches release', async () => {
    const { contracts: { MLTToken } } = await setup();

    const batches: IMLTToken.UserStruct[][] = [];

    const root = tree.getHexRoot();

    const VESTING_TIMESTAMP = await MLTToken.startTimestampByRootHash(root);

    const nextBlockTimestamp = VESTING_TIMESTAMP.mul(2).toNumber();
    await ethers.provider.send('evm_setNextBlockTimestamp', [ nextBlockTimestamp ]);
    await ethers.provider.send('evm_mine', []);

    for(let i = 0; i < tree.vestingSchedules.length; i += BATCH_SIZE) {
      const users: IMLTToken.UserStruct[] = [];

      tree.vestingSchedules.slice(i, i + BATCH_SIZE).forEach((vestingSchedule) => {
        const { address, amount, vestingCliff } = vestingSchedule;

        users.push({
          beneficiary: address,
          amount,
          cliff: vestingCliff,
          proof: tree.getHexProof(tree.hash(vestingSchedule))
        })
      })

      batches.push(users);
    }

    const batchesPromises = batches.map((users) => {
      return MLTToken.batchReleaseVested(users, root, { gasLimit: GAS_LIMIT });
    })

    await Promise.all(batchesPromises);

    const allocationBalance = await MLTToken.balanceByRootHash(root);

    expect(allocationBalance).to.be.equal(0);
  })

  it('After TGE', async () => {
    const { contracts, accounts } = await setup();
    const { treasurer1 } = accounts;

    const contractsConnect = await setupUser(treasurer1, contracts);
    const MLTToken = contractsConnect.MLTToken;

    const root = tree.getHexRoot();
    const VESTING_TIMESTAMP = await MLTToken.startTimestampByRootHash(root);

    let currentTimestamp = VESTING_TIMESTAMP.toNumber();

    // You must be a user who is a group treasurer to test creating a new merkle tree
    const user = tree.groupedByUsers[treasurer1];

    // Find the latest release date to update the timestamp of the last block
    user.forEach((vestingSchedule) => {
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

    await new Promise(async (resolve) => {
      for(const vestingSchedule of user) {
        const { address, amount, vestingCliff } = vestingSchedule;

        const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

        const proof = tree.getHexProof(tree.hash(vestingSchedule));

        await expect(
          MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof)
        ).to.revertedWith("Is not valid root");

        await MLTToken.releaseVested(address, amount, vestingCliff, root, proof);

        const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

        expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

        await expect(
          MLTToken.releaseVested(address, amount, vestingCliff, root, proof)
        ).to.revertedWith('Tokens already claimed');
      }

      resolve(true);
    })

    const userBal = await MLTToken.balanceOf(treasurer1);

    expect(userBal).to.be.gt(0);

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
    ]

    const allocations = {
      seed: {
        percentage: parseEther('1'),
        vestingInfo: {
          unlocking: 0.1,
          monthly: [0.06],
          months: [15],
          cliff: 0,
        }
      }
    };

    // Validate that the balance 'require' are correctly evaluated
    {
      const balance = userBal.mul(2);
      const treeAfterTGE = new VestingTree({
        balance,
        users: usersTGE,
        allocations,
        oneMothInSeconds: ONE_MONTH_IN_SECONDS
      });

      const rootTreeAfterTGE = treeAfterTGE.getHexRoot();
      const proofRoot = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(balance));

      await expect(
        MLTToken.addRoot(rootTreeAfterTGE, 0, VESTING_START_TIMESTAMP, proofRoot)
      ).to.revertedWith("The supply sent does not match that of the merketree");

      await expect(
        MLTToken.addRoot(rootTreeAfterTGE, balance, VESTING_START_TIMESTAMP, proofRoot)
      ).to.revertedWith("Amount exceeds balance");
    }

    const treeAfterTGE = new VestingTree({
      balance: userBal,
      users: usersTGE,
      allocations,
      oneMothInSeconds: ONE_MONTH_IN_SECONDS
    });
    const rootTreeAfterTGE = treeAfterTGE.getHexRoot();
    const proofRoot = treeAfterTGE.getHexProof(treeAfterTGE.balancehash(userBal));

    await MLTToken.addRoot(rootTreeAfterTGE, userBal, VESTING_START_TIMESTAMP, proofRoot);

    await expect(
      MLTToken.addRoot(rootTreeAfterTGE, userBal, VESTING_START_TIMESTAMP, proofRoot)
    ).to.revertedWith("Root hash already exists");


    const { AddressZero } = ethers.constants;

    // Should fail if the merkle proof is invalid
    await expect(MLTToken.releaseVested(AddressZero, 0, 0, rootTreeAfterTGE, []))
    .to.revertedWith('Invalid merkle proof');

    // Successfully claim vesting. It will fail if you try to claim multiple times
    {
      const timestampTreeAfterTGE = await MLTToken.startTimestampByRootHash(rootTreeAfterTGE);

      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);
      const blockTimestamp = block.timestamp;

      const vestingSchedule = treeAfterTGE.vestingSchedules[0];
      const { address, amount, vestingCliff } = vestingSchedule;

      const proof = treeAfterTGE.getHexProof(treeAfterTGE.hash(vestingSchedule));

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

      await expect(MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof))
        .to.revertedWith("Is not valid root");

      const vestingSchedulePromises: Promise<any>[] = [];

      for(const key in treeAfterTGE.groupedByUsers) {
        const user = treeAfterTGE.groupedByUsers[key];

        vestingSchedulePromises.push(new Promise(async (resolve) => {
          for(const vestingSchedule of user) {
            const { address, amount, vestingCliff } = vestingSchedule;

            const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

            const proof = treeAfterTGE.getHexProof(treeAfterTGE.hash(vestingSchedule));

            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, randomHex(32), proof)
            ).to.revertedWith("Is not valid root");

            await MLTToken.releaseVested(address, amount, vestingCliff, rootTreeAfterTGE, proof);

            const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

            expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

            await expect(
              MLTToken.releaseVested(address, amount, vestingCliff, rootTreeAfterTGE, proof)
            ).to.revertedWith('Tokens already claimed');
          }

          resolve(true);
        }))
      }

      await Promise.all(vestingSchedulePromises);

      const allocationBalance = await MLTToken.balanceByRootHash(rootTreeAfterTGE);

      expect(allocationBalance).to.be.equal(0);
    }
  })
})