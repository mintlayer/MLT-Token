import { randomHex } from 'web3-utils';
import { deployments, ethers, getNamedAccounts } from 'hardhat';

import { assert, expect } from './utils/chaiSetup';
import { VestingTree } from '../helpers/VestingTree';
import { VESTING_START_TIMESTAMP } from '../constants';
import { VESTING_USERS } from '../addressbook/vestingAddresses';

/* types */
import type { Accounts } from '../typescript/hardhat';
import type { MLTTokenV1 as IMLTToken } from 'build/types';

let tree: VestingTree | null = null;

async function setup() {
  await deployments.fixture(['MLTTokenV1']);

  if(!tree) {
    tree = new VestingTree({ users: VESTING_USERS });
  }

  const accounts = await getNamedAccounts() as Accounts;

  const [ MLTToken ] = await Promise.all([
    ethers.getContract<IMLTToken>('MLTTokenV1'),
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

  it('Should fail if trying to release vesting to address 0x', async () => {
    const { contracts: { MLTToken }} = await setup();

    await expect(MLTToken.releaseVested(ethers.constants.AddressZero, randomHex(32)))
    .to.revertedWith('Cannot withdraw from the zero address')
  });

  it('Should fail if the merkle proof is invalid', async () => {
    const { contracts: { MLTToken }, accounts } = await setup();

    await expect(MLTToken.releaseVested(accounts.deployer, randomHex(32)))
    .to.revertedWith('Byte array too short')

    await expect(MLTToken.releaseVested(accounts.deployer, randomHex(32 * 51)))
    .to.revertedWith('Byte array too big');

    await expect(MLTToken.releaseVested(accounts.deployer, randomHex(32 * 5)))
    .to.revertedWith('Invalid merkle proof');
  });

  it('Should fail if it is not yet the release date', async () => {
    const { contracts: { MLTToken } } = await setup();

    const _VESTING_START_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();
    expect(VESTING_START_TIMESTAMP).to.be.equal(_VESTING_START_TIMESTAMP);

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);
    const blockTimestamp = block.timestamp;

    const vestingSchedule = tree.vestingSchedules.find((item) => {
      return blockTimestamp < VESTING_START_TIMESTAMP + item.vestingCliff;
    });

    const proofWithMetadata = tree.getHexProofWithMetadata(vestingSchedule);

    await expect(MLTToken.releaseVested(vestingSchedule.address, proofWithMetadata))
      .to.revertedWith("It's not a release date yet");
  });

  it('Successfully claim vesting. It will fail if you try to claim multiple times', async () => {
      const { contracts: { MLTToken } } = await setup();

      const _VESTING_START_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();
      expect(VESTING_START_TIMESTAMP).to.be.equal(_VESTING_START_TIMESTAMP);

      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);
      const blockTimestamp = block.timestamp;

      const vestingSchedule = tree.vestingSchedules.find((item) => {
        return blockTimestamp >= VESTING_START_TIMESTAMP + item.vestingCliff;
      });

      const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);
      const proofWithMetadata = tree.getHexProofWithMetadata(vestingSchedule);

      await MLTToken.releaseVested(vestingSchedule.address, proofWithMetadata);

      const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

      expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

      await expect(MLTToken.releaseVested(vestingSchedule.address, proofWithMetadata))
        .to.revertedWith('Tokens already claimed');
  });

  it('All vesting should be released', async () => {
    const { contracts: { MLTToken } } = await setup();

    const _VESTING_START_TIMESTAMP = await MLTToken.VESTING_START_TIMESTAMP();
    expect(VESTING_START_TIMESTAMP).to.be.equal(_VESTING_START_TIMESTAMP);

    let currentTimestamp = VESTING_START_TIMESTAMP;

    tree.vestingSchedules.forEach((vestingSchedule) => {
      const timestampTMP = VESTING_START_TIMESTAMP + vestingSchedule.vestingCliff;

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

    for(const key in tree.groupedUsers) {
      const user = tree.groupedUsers[key];

      vestingSchedulePromises.push(new Promise(async (resolve) => {
        for(const vestingSchedule of user) {
          const userBalBefore = await MLTToken.balanceOf(vestingSchedule.address);
          const proofWithMetadata = tree.getHexProofWithMetadata(vestingSchedule);

          await MLTToken.releaseVested(vestingSchedule.address, proofWithMetadata);

          const userBalAfter = await MLTToken.balanceOf(vestingSchedule.address);

          expect(userBalAfter).to.be.equal(userBalBefore.add(vestingSchedule.amount));

          await expect(MLTToken.releaseVested(vestingSchedule.address, proofWithMetadata))
            .to.revertedWith('Tokens already claimed');
        }

        resolve(true);
      }))
    }

    await Promise.all(vestingSchedulePromises);

    const allocationBalance = await MLTToken.balanceOf(MLTToken.address);

    expect(allocationBalance).to.be.equal(0);
  });
})