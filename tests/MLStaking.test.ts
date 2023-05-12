import { mine } from '@nomicfoundation/hardhat-network-helpers';
import { deployments, ethers, getNamedAccounts } from 'hardhat';

import { assert, expect } from './utils/chaiSetup';

/* types */
import type { Accounts } from '../typescript/hardhat';
import type { ERC20Mock, MLStaking as IMLStaking } from 'build/types';
import { formatEther, parseEther } from 'ethers/lib/utils';

interface Contracts {
  USDC: ERC20Mock;
  MLStaking: IMLStaking;
}

async function setup() {
  await deployments.fixture(['MLStaking', 'USDC']);

  const accounts = await getNamedAccounts() as Accounts;

  const [ USDC, MLStaking ] = await Promise.all([
    ethers.getContract<ERC20Mock>('USDC'),
    ethers.getContract<IMLStaking>('MLStaking'),
  ])

  return {
    accounts,
    contracts: {
      USDC,
      MLStaking,
    }
  }
}

interface UpdateRewardToDistributeParams extends Contracts {
  rewardAmount: number;
  lockMonths?: number;
}

async function updateRewardToDistribute(params: UpdateRewardToDistributeParams) {
  const { MLStaking, USDC, rewardAmount, lockMonths = null } = params;

  const rewardAmountBN = parseEther(`${rewardAmount}`);

  if(lockMonths) {
    const rewardTokenSupplyBefore = await MLStaking.rewardTokenSum();
    const MLStakingBalanceBefore = await USDC.balanceOf(MLStaking.address);

    await expect(MLStaking.updateRewardToDistribute(0))
      .to.revertedWith('Reward token amount cannot be 0');

    await expect(MLStaking.updateRewardToDistribute(rewardAmountBN))
      .to.revertedWith('ERC20: insufficient allowance');

    await USDC.increaseAllowance(MLStaking.address, rewardAmountBN);

    await MLStaking.updateRewardToDistribute(rewardAmountBN);

    const MLStakingBalance = await USDC.balanceOf(MLStaking.address);
    const rewardTokenSupply = await MLStaking.rewardTokenSum();

    expect(MLStakingBalance).to.be.equal(MLStakingBalanceBefore.add(rewardAmountBN));
    expect(rewardTokenSupply).to.be.equal(rewardTokenSupplyBefore.add(rewardAmountBN));
  }

  if(!lockMonths) {
    const rewardTokenSupplyBefore = await MLStaking.rewardTokenSum();
    const MLStakingBalanceBefore = await USDC.balanceOf(MLStaking.address);

    await expect(MLStaking.updateRewardToDistribute(0))
      .to.revertedWith('Reward token amount cannot be 0');

    await expect(MLStaking.updateRewardToDistribute(rewardAmountBN))
      .to.revertedWith('ERC20: insufficient allowance');

    await USDC.increaseAllowance(MLStaking.address, rewardAmountBN);

    await MLStaking.updateRewardToDistribute(rewardAmountBN);

    const MLStakingBalance = await USDC.balanceOf(MLStaking.address);
    const rewardTokenSupply = await MLStaking.rewardTokenSum();

    expect(MLStakingBalance).to.be.equal(MLStakingBalanceBefore.add(rewardAmountBN));
    expect(rewardTokenSupply).to.be.equal(rewardTokenSupplyBefore.add(rewardAmountBN));
  }
}

interface StakeParams extends Contracts, Accounts {
  lockMonths?: number;
  stakeAmount?: number;
}

async function stake(params: StakeParams) {
  const { MLStaking, USDC, deployer, stakeAmount = 500, lockMonths = 0 } = params;

  const STAKE_AMOUNT = stakeAmount;

  const totalSupplyStakedBefore = await MLStaking.totalStakedLockSum(lockMonths);
  const balanceStakedBefore = await MLStaking.balanceStakedLockOf(deployer, lockMonths);

  await expect(MLStaking.stake(0, lockMonths)).to.revertedWith('Cannot stake 0');

  const stakeAmountBn = parseEther(`${STAKE_AMOUNT}`);

  await expect(
    MLStaking.stake(stakeAmountBn, lockMonths)
  ).to.revertedWith('ERC20: insufficient allowance');

  await USDC.increaseAllowance(MLStaking.address, stakeAmountBn);

  await expect(
    MLStaking.stake(stakeAmountBn, lockMonths)
  ).to.be.emit(MLStaking, 'Staked');

  const totalSupplyStaked = await MLStaking.totalStakedLockSum(lockMonths);
  const balanceStaked = await MLStaking.balanceStakedLockOf(deployer, lockMonths);

  expect(balanceStaked).to.be.equal(balanceStakedBefore.add(stakeAmountBn));
  expect(totalSupplyStaked).to.be.equal(totalSupplyStakedBefore.add(stakeAmountBn));
}

interface UnstakedParams extends Contracts, Accounts {
  amount: number;
  lockMonths?: number;
}

async function unstaked(params: UnstakedParams) {
  const { MLStaking, deployer, amount, lockMonths = 0 } = params;

  const totalSupplyStakedBefore = await MLStaking.totalStakedLockSum(lockMonths);
  const balanceStakedBefore = await MLStaking.balanceStakedLockOf(deployer, lockMonths);

  await expect(MLStaking.unstakedLock(0, lockMonths)).to.revertedWith('Cannot withdraw 0');

  const unstakedAmount = parseEther(`${amount}`);

  await expect(
    MLStaking.unstakedLock(unstakedAmount, lockMonths)
  ).to.be.emit(MLStaking, 'Unstaked');

  const totalSupplyStaked = await MLStaking.totalStakedLockSum(lockMonths);
  const balanceStaked = await MLStaking.balanceStakedLockOf(deployer, lockMonths);

  expect(balanceStaked).to.be.equal(balanceStakedBefore.sub(unstakedAmount));
  expect(totalSupplyStaked).to.be.equal(totalSupplyStakedBefore.sub(unstakedAmount));
}

interface GetRewardParams extends Contracts, Accounts {}

async function getReward(params: GetRewardParams) {
  const { MLStaking, USDC, deployer } = params;

  const balanceBefore = await USDC.balanceOf(deployer);
  const balanceRewardBefore = await MLStaking.balanceOf(deployer);

  await expect(MLStaking.getReward()).to.be.emit(MLStaking, 'RewardPaid');

  await mine(10);

  await expect(MLStaking.getReward()).to.be.emit(MLStaking, 'Transfer');

  await mine(10);

  await expect(MLStaking.getReward()).to.emit(USDC, 'Transfer');

  const balance = await USDC.balanceOf(deployer);
  const balanceReward = await MLStaking.balanceOf(deployer);

  console.log('balance', formatEther(balance));
  console.log('balanceBefore', formatEther(balanceBefore));

  expect(balance).to.be.gt(balanceBefore);
  expect(balanceReward).to.be.gt(balanceRewardBefore);
}

describe('MLStaking contract', () => {
  it('MLStaking contract must be deployed', async () => {
    const { contracts: { MLStaking }} = await setup();
    assert.ok(MLStaking.address);
  });

  it('Should update the reward to be distributed', async () => {
    const { contracts: { MLStaking, USDC }} = await setup();

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
  })

  it(
    'You should be able to stake locked tokens for a month, claim rewards and withdraw',
    async () => {
      const { accounts, contracts: { MLStaking, USDC } } = await setup();

      const lockMonths = 1;

      await expect(MLStaking.getReward()).to.not.emit(USDC, 'Transfer');
      await expect(MLStaking.getReward()).to.not.emit(MLStaking, 'Transfer');
      await expect(MLStaking.getReward()).to.not.emit(MLStaking, 'RewardPaid');

      await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000, lockMonths });

      await mine(200);

      await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 100_000, lockMonths });

      await stake({ MLStaking, USDC, ...accounts, lockMonths });

      await mine(200);

      await stake({ MLStaking, USDC, ...accounts, lockMonths });

      await mine(20000000000);

      await unstaked({ MLStaking, USDC, ...accounts, amount: 100, lockMonths });

      // await mine(200);

      // await getReward({ MLStaking, USDC, ...accounts });

      // await stake({ MLStaking, USDC, ...accounts });
      // await stake({ MLStaking, USDC, ...accounts });

      // await MLStaking.exit();
    }
  )
})