import keccak256 from 'keccak256';
import MerkleTree from 'merkletreejs';
import { soliditySha3, randomHex } from 'web3-utils';
import { formatEther, parseEther } from 'ethers/lib/utils';
import { deployments, ethers, getNamedAccounts } from 'hardhat';
import { mine, time, mineUpTo } from '@nomicfoundation/hardhat-network-helpers';

import { setupUser } from '../helpers/ethers';
import { assert, expect } from './utils/chaiSetup';

/* types */
import type { Accounts } from '../typescript/hardhat';
import type { ERC20Mock, MLStaking as IMLStaking } from 'build/types';

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
}

async function updateRewardToDistribute(params: UpdateRewardToDistributeParams) {
  const { MLStaking, USDC, rewardAmount } = params;

  const rewardAmountBN = parseEther(`${rewardAmount}`);

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

interface StakeParams extends Contracts {
  userAddress: string;
  lockMonths?: number;
  stakeAmount?: number;
  root: string;
  proof: string[];
}

async function stake(params: StakeParams) {
  const { MLStaking, USDC, userAddress, stakeAmount = 500, lockMonths = 0, root, proof } = params;

  const STAKE_AMOUNT = stakeAmount;

  const [
    totalStakedSumBefore,
    balanceStakedBefore,
    totalStakedLockSumBefore,
    balanceStakedLockBefore,
  ] = await Promise.all([
    MLStaking.totalSumStaked(),
    MLStaking.balanceStakedOf(userAddress),
    MLStaking.totalStakedLockSum(lockMonths),
    MLStaking.balanceStakedLockOf(userAddress, lockMonths),
  ]);

  await expect(MLStaking.stake(0, lockMonths, root, proof)).to.revertedWith('Cannot stake 0');

  const stakeAmountBn = parseEther(`${STAKE_AMOUNT}`);

  await expect(
    MLStaking.stake(stakeAmountBn, lockMonths, root, proof)
  ).to.revertedWith('ERC20: insufficient allowance');

  await USDC.increaseAllowance(MLStaking.address, stakeAmountBn);

  await expect(
    MLStaking.stake(stakeAmountBn, lockMonths, root, proof)
  ).to.be.emit(MLStaking, 'Staked');

  const [
    totalSumStaked,
    balanceStaked,
    totalStakedLockSum,
    balanceStakedLock,
  ] = await Promise.all([
    MLStaking.totalSumStaked(),
    MLStaking.balanceStakedOf(userAddress),
    MLStaking.totalStakedLockSum(lockMonths),
    MLStaking.balanceStakedLockOf(userAddress, lockMonths),
  ]);

  expect(balanceStaked).to.be.equal(balanceStakedBefore.add(stakeAmountBn));
  expect(totalSumStaked).to.be.equal(totalStakedSumBefore.add(stakeAmountBn));
  expect(balanceStakedLock).to.be.equal(balanceStakedLockBefore.add(stakeAmountBn));
  expect(totalStakedLockSum).to.be.equal(totalStakedLockSumBefore.add(stakeAmountBn));
}

interface UnstakedByLockParams extends Contracts {
  amount: number;
  lockMonths?: number;
  userAddress: string;
  stakeDataIndex: number;
}

async function unstakedByLock(params: UnstakedByLockParams) {
  const { MLStaking, userAddress, amount, stakeDataIndex, lockMonths = 0 } = params;

  const [
    totalStakedSumBefore,
    balanceStakedBefore,
    totalStakedLockSumBefore,
    balanceStakedLockBefore,
  ] = await Promise.all([
    MLStaking.totalSumStaked(),
    MLStaking.balanceStakedOf(userAddress),
    MLStaking.totalStakedLockSum(lockMonths),
    MLStaking.balanceStakedLockOf(userAddress, lockMonths),
  ]);

  await expect(
    MLStaking.unstakedLock(0, lockMonths, stakeDataIndex)
  ).to.revertedWith('Cannot withdraw 0');

  const unstakedAmount = parseEther(`${amount}`);

  await expect(
    MLStaking.unstakedLock(unstakedAmount, lockMonths, stakeDataIndex)
  ).to.be.emit(MLStaking, 'Unstaked');

  const [
    totalSumStaked,
    balanceStaked,
    totalStakedLockSum,
    balanceStakedLock,
  ] = await Promise.all([
    MLStaking.totalSumStaked(),
    MLStaking.balanceStakedOf(userAddress),
    MLStaking.totalStakedLockSum(lockMonths),
    MLStaking.balanceStakedLockOf(userAddress, lockMonths),
  ]);

  expect(balanceStaked).to.be.equal(balanceStakedBefore.sub(unstakedAmount));
  expect(totalSumStaked).to.be.equal(totalStakedSumBefore.sub(unstakedAmount));
  expect(balanceStakedLock).to.be.equal(balanceStakedLockBefore.sub(unstakedAmount));
  expect(totalStakedLockSum).to.be.equal(totalStakedLockSumBefore.sub(unstakedAmount));
}

interface UnstakedParams extends Contracts {
  userAddress: string;
}

async function unstaked(params: UnstakedParams) {
  const { MLStaking, userAddress } = params;

  const [ totalStakedSumBefore, balanceStakedBefore ] = await Promise.all([
    MLStaking.totalSumStaked(),
    MLStaking.balanceStakedOf(userAddress),
  ]);

  await expect(MLStaking.unstaked()).to.be.emit(MLStaking, 'Unstaked');

  const [ totalSumStaked, balanceStaked ] = await Promise.all([
    MLStaking.totalSumStaked(),
    MLStaking.balanceStakedOf(userAddress),
  ]);

  expect(balanceStaked).to.be.lt(balanceStakedBefore);
  expect(totalSumStaked).to.be.lt(totalStakedSumBefore);

  for(let i = 0; i < 6; i++) {
    const stakeData = await MLStaking.stakeDataOfByLock(userAddress, i);

    const {
      amount,
      amountVirtual,
      amounts,
      unlockDates,
    } = stakeData;

    expect(amount).to.be.eq(0);
    expect(amountVirtual).to.be.eq(0);
    for(const amount of amounts) expect(amount).to.be.eq(0);
    for(const unlockDate of unlockDates) expect(unlockDate).to.be.eq(0);
  }
}

interface GetRewardParams extends Contracts {
  userAddress: string;
  evaluateRewardPaid?: boolean;
}

async function getReward(params: GetRewardParams) {
  const { MLStaking, USDC, userAddress, evaluateRewardPaid = false } = params;

  const balanceBefore = await USDC.balanceOf(userAddress);

  if(evaluateRewardPaid) {
    await expect(MLStaking.getReward(false, randomHex(32), [])).to.be.emit(MLStaking, 'RewardPaid');
  }

  await mine(10);

  if(evaluateRewardPaid) {
    await expect(MLStaking.getReward(false, randomHex(32), [])).to.not.emit(MLStaking, 'Transfer');
  }

  await mine(10);

  if(evaluateRewardPaid) {
    await expect(MLStaking.getReward(false, randomHex(32), [])).to.emit(USDC, 'Transfer');
  }

  const balance = await USDC.balanceOf(userAddress);

  if(evaluateRewardPaid) {
    expect(balance).to.be.gt(balanceBefore);
  }

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

  it('Only the owner can update the divisor of token 2', async () => {
    const { contracts, accounts} = await setup();
    const { MLStaking, USDC } = contracts;
    const { user1 } = accounts;

    const conectUser1 = await setupUser(user1, contracts);

    await expect(
      conectUser1.MLStaking.updateTokenRewardDivider(0)
    ).to.have.revertedWith('Ownable: caller is not the owner');

    await expect(MLStaking.updateTokenRewardDivider(0)).to.revertedWith('Divider cannot be 0');

    await MLStaking.updateTokenRewardDivider(100_000);

    expect(await MLStaking.tokenRewardDivider()).to.be.eq(100_000);
  })

  it('Should be able to withdraw unclaimed rewards', async () => {
    const { contracts: { MLStaking, USDC }} = await setup();

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });

    const newRewardPerBlock = parseEther('100');
    await MLStaking.updateRewardPerBlock(newRewardPerBlock);

    const rewardPerBlock = await MLStaking.rewardPerBlock();

    expect(rewardPerBlock).to.be.equal(newRewardPerBlock);

    const finishingBlockNumber = await MLStaking.finishingBlockNumber();

    await expect(MLStaking.withdrawUnclaimedRewards()).to.not.emit(USDC, 'Transfer');
    await expect(MLStaking.withdrawUnclaimedRewards()).to.not.emit(MLStaking, 'Transfer');

    await mine(finishingBlockNumber.toNumber() + 500);

    await expect(MLStaking.withdrawUnclaimedRewards()).to.emit(USDC, 'Transfer');
  })

  it('You should be able to stake tokens, claim rewards and withdraw', async () => {
    const { accounts, contracts: { MLStaking, USDC } } = await setup();

    const userAddress = accounts.deployer;

    const leaf = soliditySha3({ t: 'address', v: userAddress }) as string;
    const tree = new MerkleTree([leaf], keccak256, { sortPairs: true });
    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaf);

    await MLStaking.addRoot(root, '');

    {
      const root = randomHex(32);
      await expect(MLStaking.getReward(false, root, [])).to.not.emit(USDC, 'Transfer');
      await expect(MLStaking.getReward(false, root, [])).to.not.emit(MLStaking, 'Transfer');
      await expect(MLStaking.getReward(false, root, [])).to.not.emit(MLStaking, 'RewardPaid');
    }

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });

    await mine(200);

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 100_000 });

    await stake({ MLStaking, USDC, userAddress, root, proof });

    await mine(200);

    await stake({ MLStaking, USDC, userAddress, root, proof });

    await mine(200);

    await unstakedByLock({
      MLStaking,
      USDC,
      userAddress,
      amount: 100,
      lockMonths: 0,
      stakeDataIndex: 0
    });

    await mine(200);

    await getReward({ MLStaking, USDC, userAddress, evaluateRewardPaid: true });

    await expect(MLStaking.deliverRewards(userAddress)).to.be.emit(MLStaking, 'Transfer');

    expect(await MLStaking.accumulatedRewardsToken2(userAddress)).to.be.eq(0);

    await stake({ MLStaking, USDC, userAddress, root, proof });
    await stake({ MLStaking, USDC, userAddress, root, proof });

    await mine(200);

    await MLStaking.exit();
  })

  it(
    'You should be able to stake locked tokens for a month, claim rewards and withdraw',
    async () => {
      const { accounts, contracts: { MLStaking, USDC } } = await setup();

      const userAddress = accounts.deployer;

      const leaf = soliditySha3({ t: 'address', v: userAddress }) as string;
      const tree = new MerkleTree([leaf], keccak256, { sortPairs: true });
      const root = tree.getHexRoot();
      const proof = tree.getHexProof(leaf);

      await MLStaking.addRoot(root, '');

      const lockMonths = 1;

      {
        const root = randomHex(32);
        await expect(MLStaking.getReward(false, root, [])).to.not.emit(USDC, 'Transfer');
        await expect(MLStaking.getReward(false, root, [])).to.not.emit(MLStaking, 'Transfer');
        await expect(MLStaking.getReward(false, root, [])).to.not.emit(MLStaking, 'RewardPaid');
      }

      await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });

      await mine(200);

      await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 100_000 });

      await stake({ MLStaking, USDC, userAddress, lockMonths, root, proof });

      await mine(200);

      await stake({ MLStaking, USDC, userAddress, lockMonths, root, proof });

      await mine(20000000000);

      await unstakedByLock({
        MLStaking,
        USDC,
        userAddress,
        amount: 100,
        lockMonths,
        stakeDataIndex: 0
      });

      await unstakedByLock({
        MLStaking,
        USDC,
        userAddress,
        amount: 100,
        lockMonths,
        stakeDataIndex: 1
      });

      await mine(200);

      await getReward({ MLStaking, USDC, userAddress });

      await MLStaking.exit();
    }
  )

  it('2 users stake tokens at different times', async () => {
    const { accounts, contracts } = await setup();
    const { user1, user2 } = accounts;
    const { MLStaking, USDC } = contracts;

    const leaves = [user1, user2].map(x => soliditySha3({ t: 'address', v: x }));
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const root = tree.getHexRoot();
    const user1proof = tree.getHexProof(leaves[0] as string);
    const user2proof = tree.getHexProof(leaves[1] as string);

    await MLStaking.addRoot(root, '');

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
    await MLStaking.updateRewardPerBlock(parseEther('10'));

    const conectUser1 = await setupUser(user1, contracts);
    const conectUser2 = await setupUser(user2, contracts);

    await USDC.transfer(user1, parseEther('10'));
    await USDC.transfer(user2, parseEther('90'));

    await conectUser1.USDC.increaseAllowance(MLStaking.address, ethers.constants.MaxUint256);
    await conectUser2.USDC.increaseAllowance(MLStaking.address, ethers.constants.MaxUint256);

    await conectUser1.MLStaking.stake(parseEther('10'), 0, root, user1proof);

    await mine(5);

    expect(await MLStaking.earnedToken1(user1)).to.be.equal(parseEther('50'));
    expect(await MLStaking.earnedToken2(user1)).to.be.equal(parseEther('0.00025'));

    await conectUser2.MLStaking.stake(parseEther('90'), 0, root, user2proof);

    await mine(15);

    const [
      earnedToken1User1,
      earnedToken2User1,
      earnedToken1User2,
      earnedToken2User2,
    ] = await Promise.all([
      MLStaking.earnedToken1(user1),
      MLStaking.earnedToken2(user1),
      MLStaking.earnedToken1(user2),
      MLStaking.earnedToken2(user2),
    ]);

    expect(earnedToken1User1).to.be.equal(parseEther('75'));
    expect(earnedToken2User1).to.be.equal(parseEther('0.00105'));

    expect(earnedToken1User2).to.be.equal(parseEther('135'));
    expect(earnedToken2User2).to.be.equal(parseEther('0.00675'));
  })

  it('2 users stake tokens at different times and with blocking', async () => {
    const { accounts, contracts } = await setup();
    const { user1, user2 } = accounts;
    const { MLStaking, USDC } = contracts;

    const leaves = [user1, user2].map(x => soliditySha3({ t: 'address', v: x }));
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const root = tree.getHexRoot();
    const user1proof = tree.getHexProof(leaves[0] as string);
    const user2proof = tree.getHexProof(leaves[1] as string);

    await MLStaking.addRoot(root, '');

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
    await MLStaking.updateRewardPerBlock(parseEther('10'));

    const conectUser1 = await setupUser(user1, contracts);
    const conectUser2 = await setupUser(user2, contracts);

    await USDC.transfer(user1, parseEther('10'));
    await USDC.transfer(user2, parseEther('90'));


    await stake({
      stakeAmount: 10,
      root,
      proof: user1proof,
      userAddress: user1,
      USDC: conectUser1.USDC,
      MLStaking: conectUser1.MLStaking,
    });

    await mine(5);

    expect(await MLStaking.earnedToken1(user1)).to.be.equal(parseEther('50'));
    expect(await MLStaking.earnedToken2(user1)).to.be.equal(parseEther('0.00025'));

    await stake({
      lockMonths: 2,
      stakeAmount: 90,
      root,
      proof: user2proof,
      userAddress: user2,
      USDC: conectUser2.USDC,
      MLStaking: conectUser2.MLStaking,
    });

    await mine(15);

    const [
      earnedToken1User1,
      earnedToken2User1,
      earnedToken1User2,
      earnedToken2User2,
    ] = await Promise.all([
      MLStaking.earnedToken1(user1),
      MLStaking.earnedToken2(user1),
      MLStaking.earnedToken1(user2),
      MLStaking.earnedLockToken2(user2, 2),
    ]);

    expect(earnedToken1User1).to.be.equal(parseEther('100.344827586206896550'));
    expect(earnedToken2User1).to.be.equal(parseEther('0.00120'));

    expect(earnedToken1User2).to.be.equal(parseEther('139.655172413793103425'));
    expect(earnedToken2User2).to.be.equal(parseEther('0.010125'));

    await unstaked({
      MLStaking: conectUser1.MLStaking,
      USDC: conectUser1.USDC,
      userAddress: user1
    })

    await conectUser1.MLStaking.unstaked();

    const stakeData = await MLStaking.stakeDataOfByLock(user2, 2);

    await time.increase(stakeData.unlockDates[0].toNumber() + 100);

    await conectUser2.MLStaking.exit();
  })

  it('As a profiled user I can compound (claim and stake) my tokens', async () => {
    const { accounts, contracts } = await setup();
    const { user1 } = accounts;
    const { MLStaking, USDC } = contracts;

    const leaf = soliditySha3({ t: 'address', v: user1 }) as string;
    const tree = new MerkleTree([leaf], keccak256, { sortPairs: true });
    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaf);

    await MLStaking.addRoot(root, '');

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
    await MLStaking.updateRewardPerBlock(parseEther('10'));

    const conectUser1 = await setupUser(user1, contracts);

    await USDC.transfer(user1, parseEther('100'));

    await stake({
      stakeAmount: 100,
      userAddress: user1,
      root,
      proof,
      USDC: conectUser1.USDC,
      MLStaking: conectUser1.MLStaking,
    });

    await mine(5);

    expect(await MLStaking.earnedToken1(user1)).to.be.equal(parseEther('50'));
    expect(await MLStaking.earnedToken2(user1)).to.be.equal(parseEther('0.0025'));

    await mine(15);

    await conectUser1.USDC.increaseAllowance(MLStaking.address, ethers.constants.MaxInt256);
    await expect(
      conectUser1.MLStaking.getReward(true, root, proof)
    ).to.be.emit(MLStaking, 'Staked');
  })

  it(
    'Ability to stake multiple times with lockup, while maintaining the release dates, ' +
    'will be preserved.',
    async () => {
      const { accounts, contracts } = await setup();
      const { user1 } = accounts;
      const { MLStaking, USDC } = contracts;

      const leaf = soliditySha3({ t: 'address', v: user1 }) as string;
      const tree = new MerkleTree([leaf], keccak256, { sortPairs: true });
      const root = tree.getHexRoot();
      const proof = tree.getHexProof(leaf);

      await MLStaking.addRoot(root, '');

      await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
      await MLStaking.updateRewardPerBlock(parseEther('10'));

      const conectUser1 = await setupUser(user1, contracts);

      await USDC.transfer(user1, parseEther('1000000'));

      for(let i = 0; i < 100; i++) {
        await stake({
          lockMonths: 1,
          stakeAmount: 10 + i,
          root,
          proof,
          userAddress: user1,
          USDC: conectUser1.USDC,
          MLStaking: conectUser1.MLStaking,
        });

        await time.increase(60 * 60 * 24);
      }

      const stakeData = await conectUser1.MLStaking.stakeDataOfByLock(user1, 1);

      await time.increase(
        stakeData.unlockDates[stakeData.unlockDates.length - 1].toNumber() + 60 * 60 * 24 * 30
      )

      await unstaked({
        USDC: conectUser1.USDC,
        MLStaking: conectUser1.MLStaking,
        userAddress: user1,
      })
    }
  )

  it('Possibility of unstaking if the period has ended even if you have locked tokens', async () => {
    const { accounts, contracts } = await setup();
    const { user1 } = accounts;
    const { MLStaking, USDC } = contracts;

    const leaf = soliditySha3({ t: 'address', v: user1 }) as string;
    const tree = new MerkleTree([leaf], keccak256, { sortPairs: true });
    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaf);

    await MLStaking.addRoot(root, '');

    await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
    await MLStaking.updateRewardPerBlock(parseEther('10'));

    const conectUser1 = await setupUser(user1, contracts);

    await USDC.transfer(user1, parseEther('10'));

    await conectUser1.USDC.increaseAllowance(MLStaking.address, ethers.constants.MaxUint256);
    await conectUser1.MLStaking.stake(parseEther('10'), 6, root, proof);

    await mine(5);

    expect(await MLStaking.earnedToken1(user1)).to.be.equal(parseEther('50'));
    expect(await MLStaking.earnedToken2(user1)).to.be.equal(parseEther('0.000625'));

    const finishingBlockNumber = await MLStaking.finishingBlockNumber();
    await mineUpTo(finishingBlockNumber.toNumber());

    await conectUser1.MLStaking.exit();
  })

  it(
    'when making multiple non-blocking stakes they must be stored in the same StakeData struct',
    async () => {
      const { accounts, contracts } = await setup();
      const { user1 } = accounts;
      const { MLStaking, USDC } = contracts;

      const leaf = soliditySha3({ t: 'address', v: user1 }) as string;
      const tree = new MerkleTree([leaf], keccak256, { sortPairs: true });
      const root = tree.getHexRoot();
      const proof = tree.getHexProof(leaf);

      await MLStaking.addRoot(root, '');

      await updateRewardToDistribute({ MLStaking, USDC, rewardAmount: 600_000 });
      await MLStaking.updateRewardPerBlock(parseEther('10'));

      const conectUser1 = await setupUser(user1, contracts);

      await USDC.transfer(user1, parseEther('100'));
      await conectUser1.USDC.increaseAllowance(MLStaking.address, ethers.constants.MaxUint256);

      await conectUser1.MLStaking.stake(parseEther('10'), 0, root, proof);

      await mine(5);

      await conectUser1.MLStaking.stake(parseEther('10'), 0, root, proof);

      await mine(5);

      await conectUser1.MLStaking.stake(parseEther('10'), 0, root, proof);

      await mine(5);

      await conectUser1.MLStaking.stake(parseEther('10'), 0, root, proof);

      const stakeDatas = await MLStaking.stakeDataOfByLock(user1, 0);

      expect(stakeDatas.amounts.length).to.be.equal(1);
    }
  )

  it('Only an admin can update the whitelist and there can be no duplicate root', async () => {
    const { accounts, contracts } = await setup();
    const { MLStaking } = contracts;
    const { user1, user2 } = accounts;

    const conectUser1 = await setupUser(user1, contracts);

    const leaves = [user1, user2].map(x => soliditySha3({ t: 'address', v: x }))
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

    const root = tree.getHexRoot();

    await expect(
      conectUser1.MLStaking.addRoot(root, '')
    ).to.be.revertedWith('Caller is not an admin');

    await expect(
      MLStaking.addAdmin(ethers.constants.AddressZero)
    ).to.be.revertedWith('zero address');

    await MLStaking.addAdmin(user1);
    await expect(conectUser1.MLStaking.addRoot(root, '')).to.be.emit(MLStaking, 'AddedRoot');

    await expect(
      conectUser1.MLStaking.addRoot(root, '')
    ).to.be.revertedWith('Root hash already exists');

    await expect(
      MLStaking.removeAdmin(ethers.constants.AddressZero)
    ).to.be.revertedWith('zero address');

    await MLStaking.removeAdmin(user1)
  })
})