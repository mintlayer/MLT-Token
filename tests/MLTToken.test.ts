import { deployments, ethers, getNamedAccounts } from 'hardhat';

import { assert, expect } from './utils/chaiSetup';
import { BATCH_SIZE, GAS_LIMIT } from '../constants';
import { VestingTree } from '../helpers/VestingTree';
import { VESTING_USERS } from '../addressbook/vestingAddresses';

/* types */
import type { Accounts } from '../typescript/hardhat';
import type { MLTToken as IMLTToken } from 'build/types';

let tree: VestingTree | null = null;

async function setup() {
  await deployments.fixture(['MLTToken']);

  if(!tree) {
    tree = new VestingTree({ users: VESTING_USERS });
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

    await expect(MLTToken.releaseVested(ethers.constants.AddressZero, 0, 0, []))
    .to.revertedWith('Invalid merkle proof');
  });

  it('Should fail if it is not yet the release date', async () => {
    const { contracts: { MLTToken } } = await setup();

    const VESTING_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();

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
          tree.getHexProof(tree.hash(vestingSchedule))
        )
      )
      .to.revertedWith("The release date has not yet arrived");
    }
  });

  it('Successfully claim vesting. It will fail if you try to claim multiple times', async () => {
      const { contracts: { MLTToken } } = await setup();

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

      const releaseVestedTx = MLTToken.releaseVested(
        vestingSchedule.address,
        vestingSchedule.amount,
        vestingSchedule.vestingCliff,
        proof
      );

      await expect(releaseVestedTx).to.be.emit(MLTToken, 'VestedTokenGrant');

      const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

      expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

      await expect(MLTToken.releaseVested(
        vestingSchedule.address,
        vestingSchedule.amount,
        vestingSchedule.vestingCliff,
        proof
      ))
      .to.revertedWith('Tokens already claimed');
  });

  it('All vesting should be released', async () => {
    const { contracts: { MLTToken } } = await setup();

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

    const vestingSchedulePromises: Promise<any>[] = [];

    for(const key in tree.groupedByUsers) {
      const user = tree.groupedByUsers[key];

      vestingSchedulePromises.push(new Promise(async (resolve) => {
        for(const vestingSchedule of user) {
          const { address, amount, vestingCliff } = vestingSchedule;

          const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);

          await MLTToken.releaseVested(
            address,
            amount,
            vestingCliff,
            tree.getHexProof(tree.hash(vestingSchedule))
          );

          const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

          expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

          await expect(
            MLTToken.releaseVested(
              address,
              amount,
              vestingCliff,
              tree.getHexProof(tree.hash(vestingSchedule))
            )
          ).to.revertedWith('Tokens already claimed');
        }

        resolve(true);
      }))
    }

    await Promise.all(vestingSchedulePromises);

    const allocationBalance = await MLTToken.balanceOf(MLTToken.address);

    expect(allocationBalance).to.be.equal(0);
  });

  it('Batches release', async () => {
    const { contracts: { MLTToken } } = await setup();

    const batches: IMLTToken.UserStruct[][] = [];

    const VESTING_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();

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
      return MLTToken.batchReleaseVested(users, { gasLimit: GAS_LIMIT });
    })

    await Promise.all(batchesPromises);
  })
})