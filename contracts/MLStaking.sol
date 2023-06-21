/// SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

import 'hardhat/console.sol';

contract MLStaking is ERC20, Ownable, ReentrancyGuard {
	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	/********
	* INDEX *
	*********/
	// 1. Type declarations.
	// 2. Constants and variables.
	// 3. Mappings.
	// 4. Modifiers.
	// 5. Events.
	// 6. Functions.

	/***********************
	* 1. TYPE DECLARATIONS *
	************************/
	struct StakeData {
		uint256 amount;
		uint256 amountVirtual;
		uint256[] amounts;
		uint256[] unlockDates;
		uint256[] amountsVirtual;
		uint256 rewardToken1;
		uint256 rewardToken2;
	}

	/*****************************
	* 2. CONSTANTS AND VARIABLES *
	******************************/
	uint256[] private _enabledMonths = [ 0, 1, 2, 3, 4, 5, 6 ];

	/// @dev Address of the token to partially pay rewards.
	IERC20 constant STAKING_TOKEN = IERC20(0x281E2Cc83bD4A9930903AAa0a8cd1B521c1eB562);
	// IERC20 constant STAKING_TOKEN = IERC20(0x0C703e0cD79107354934F87743ff26B0d87B7905);

	/// @dev Duration of rewards to be paid out (in seconds)
	uint256 public duration;

	/// @dev Timestamp of when the rewards finish
	uint256 public finishAt;

	/// @dev Minimum of last updated time and reward finish time
	uint256 public updatedAt;

	/// @dev Reward to be paid out per second
	uint256 public rewardRate;

	/// @dev Total stakers.
	uint256 public totalStakers;

	/// @dev Accumulated rewards per token staked up to the current block.timestamp.
	uint256 public rewardPerToken1Stored;

	/// @dev Total sum of the token distributed as a reward.
	uint256 public rewardTokenDistributed;

	/// @dev Total amount of token claimed.
	uint256 public rewardTokenClaimed;

	/// @dev Total token sum to be distributed as rewards.
	uint256 public rewardTokenSum;

	/// @dev Total sum of staked tokens.
	uint256 public totalSumStaked;

	/// @dev Total sum of accumulated rewards.
	uint256 public sumAccumulatedRewardsToken2;

	/**
	 * @dev Total amount of tokens staked virtual. This is used to be able to calculate rewards
	 * with a multiplier when a user locks their stake for N amount of months
	**/
	uint256 public totalSumStakedVirtual;

	/**
	 * @dev Each token staked must be divided by this `tokenRewardDivider` value and multiplied
	 * by each elapsed block to calculate the rewards in TML
	**/
	uint256 tokenRewardDivider;

	/**************
	* 3. MAPPINGS *
	***************/
	/**
	 * @dev This represents the accumulated reward per token staked up to the moment of the
	 * last (see: updatedAt) update for a specific account.
	 * account => rewardCache
	**/
	mapping(address => uint256) public userRewardPaidPerToken1;

	mapping(address => bool) private _alreadyRegisteredStaker;

	/**
	 * @dev The balance staked by an account.
	 * account => balance
	**/
	mapping(address => uint256) private _balancesStaked;

	/// @dev total sum of staked tokens with lock for months.
	// month => staked
	mapping(uint256 => uint256) private _totalSumStakedByLock;

	/// @dev enabled blocked months: months => enabled?
	mapping(uint256 => bool) private _monthsOfBlockingEnabled;

	/// @dev account => months => StakeData
	mapping(address => mapping(uint256 => StakeData)) private _accountsWithStakeLocked;

	/// @dev account => cumulative token rewards 2.
	mapping(address => uint256) public accumulatedRewardsToken2;

	/***************
	* 4. MODIFIERS *
	****************/
	/**
	 * @param account_ represents the current user interacting with the contract.
	**/
	modifier updateRewardLock(address account_) {
		rewardPerToken1Stored = rewardPerToken1();
		uint256 rewardPerToken2Multiplier = getRewardPerToken2Multiplier();

		updatedAt = lastTimeRewardApplicable();

		if(account_ != address(0)) {
			for(uint256 i = 0; i < _enabledMonths.length; i++) {
				StakeData storage stakeData = _accountsWithStakeLocked[account_][_enabledMonths[i]];
				uint256 reward = 0;

				for(uint256 j = 0; j < stakeData.amounts.length; j++) {
					reward = reward.add(earnedLockToken1(account_, _enabledMonths[i], j));
				}

				stakeData.rewardToken1 = reward;

				stakeData.rewardToken2 = rewardPerToken2Multiplier.mul(
					stakeData.amount.add(stakeData.amountVirtual).div(tokenRewardDivider)
				);
			}

			userRewardPaidPerToken1[account_] = rewardPerToken1Stored;
		}
		_;
	}

	modifier validBlockingMonth(uint256 lockMonths_) {
		require(_monthsOfBlockingEnabled[lockMonths_], 'Invalid lock months');
		_;
	}

	/************
	* 5. EVENTS *
	*************/
	event Unstaked(address indexed account_, uint256 amount_);
	event RewardPaid(address indexed account_, uint256 reward_);
	event Staked(
		address indexed account_,
		uint256 amount_,
		uint256 lockMonths_,
		uint256 unlockDate_
	);

	/***************
	* 6. FUNCTIONS *
	****************/
	/**
	 * @param name_ Name of ERC20 reward token
	 * @param symbol_ Symbol of ERC20 reward token
	 **/
	constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
		tokenRewardDivider = 200_000;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			_monthsOfBlockingEnabled[_enabledMonths[i]] = true;
		}
	}

	function updateTokenRewardDivider(uint256 divider_) external onlyOwner {
		require(divider_ > 0, 'Divider cannot be 0');
		tokenRewardDivider = divider_;
	}

	function updateDuration(uint256 duration_) external onlyOwner {
		require(duration_ > 0, 'Duration = 0');
		require(finishAt < block.timestamp, 'reward duration not finished');
		duration = duration_;
	}

	function updateRewardToDistribute(
		uint256 amount_
	) external onlyOwner updateRewardLock(address(0)) {
		require(duration > 0, 'Duration = 0');
		require(amount_ > 0, 'Reward token amount cannot be 0');

		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amount_);

		if(block.timestamp >= finishAt) {
			rewardRate = amount_ / duration;
		} else {
			uint256 remainingRewards = (finishAt - block.timestamp) * rewardRate;
			rewardRate = (amount_ + remainingRewards) / duration;
		}

		require(rewardRate > 0, "reward rate = 0");

		updatedAt = block.timestamp;
		finishAt = block.timestamp + duration;
		rewardTokenSum = rewardTokenSum.add(amount_);
		rewardTokenDistributed += rewardTokenSum;
	}

	/**
	 * @dev Staked tokens to receive rewards.
	 * @param amount_ Amount of tokens to be staked.
	 * @param lockMonths_ lockdown months.
	**/
	function stake(uint256 amount_, uint256 lockMonths_) external nonReentrant {
		_stake(amount_, lockMonths_);
	}

	/**
	 * @dev Withdraw staked tokens.
	**/
	function unstaked() external nonReentrant {
		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			StakeData storage stakeData = _accountsWithStakeLocked[msg.sender][_enabledMonths[i]];
			for(uint256 j = 0; j < stakeData.amounts.length; j++) {
				if(
					stakeData.amounts[j] > 0 &&
					(block.timestamp > stakeData.unlockDates[j] || block.timestamp > finishAt)
				) {
					_unstakedLock(stakeData.amounts[j], _enabledMonths[i], j);
				}
			}
		}
	}

	/**
	 * @dev Withdraw staked tokens.
	 * @param amount_ Amount of tokens to be withdrawn.
	 * @param lockMonths_ lockdown months.
	 * @param stakeDataIndex_ index to access data for a specific stake `amount` `unlockDate`.
	**/
	function unstakedLock(
		uint256 amount_,
		uint256 lockMonths_,
		uint256 stakeDataIndex_
	) external nonReentrant {
		_unstakedLock(amount_, lockMonths_, stakeDataIndex_);
	}

	/// @dev Claim the accumulated rewards.
	function getReward(bool compose_) external nonReentrant {
		uint256 _reward = 0;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			_reward += _getRewardLock(_enabledMonths[i], compose_);
		}

		if(compose_) {
			STAKING_TOKEN.safeTransfer(msg.sender, _reward);
			_stake(_reward, 0);
		}
	}

	/// @dev Withdraw all the staked tokens and claim earned rewards.
	function exit() external nonReentrant {
		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			_getRewardLock(_enabledMonths[i], false);

			StakeData storage stakeData = _accountsWithStakeLocked[msg.sender][_enabledMonths[i]];

			for(uint256 j = 0; j < stakeData.amounts.length; j++) {
				if(
					stakeData.amounts[j] > 0 &&
					(block.timestamp > stakeData.unlockDates[j] || block.timestamp > finishAt)
				) {
					_unstakedLock(stakeData.amounts[j], _enabledMonths[i], j);
				}
			}
		}
	}

	function earnedToken1(address account_) external view returns(uint256) {
		uint256 reward = 0;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			StakeData storage stakeData = _accountsWithStakeLocked[account_][_enabledMonths[i]];
			for(uint256 j = 0; j < stakeData.amounts.length; j++) {
				reward = reward.add(earnedLockToken1(account_, _enabledMonths[i], j));
			}
		}

		return reward;
	}

	function earnedToken2(address account_) external view returns(uint256) {
		uint256 reward = 0;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			reward = reward.add(earnedLockToken2(account_, _enabledMonths[i]));
		}

		return reward;
	}

	function totalStakedLockSum(uint256 lockMonths_) external view returns (uint256) {
		return _totalSumStakedByLock[lockMonths_];
	}

	function balanceStakedOf(address account) external view returns (uint256) {
		return _balancesStaked[account];
	}

	function stakeDataOfByLock(
		address account,
		uint256 lockMonths_
	) external view returns (StakeData memory) {
		return _accountsWithStakeLocked[account][lockMonths_];
	}

	function balanceStakedLockOf(
		address account_,
		uint256 lockMonths_
	) external view returns (uint256) {
		return _accountsWithStakeLocked[account_][lockMonths_].amount;
	}

	function withdrawUnclaimedRewards() external nonReentrant onlyOwner {
		if(block.timestamp > finishAt && rewardTokenSum > 0) {
			uint256 remainder = rewardTokenSum;
			rewardTokenSum = 0;

			STAKING_TOKEN.safeTransfer(msg.sender, remainder);
		}
	}

	function deliverRewards(address account_) external nonReentrant onlyOwner {
		uint256 rewards = accumulatedRewardsToken2[account_];

		if(rewards > 0) {
			accumulatedRewardsToken2[account_] = 0;
			_mint(account_, rewards);
		}
	}

	function lastTimeRewardApplicable() public view returns (uint256) {
		return _min(finishAt, block.timestamp);
	}

	/**
	 * @dev Calculate the rewards accumulated per token staked up to the current time.
	**/
	function rewardPerToken1() public view returns (uint256) {
		if(totalSumStaked == 0) {
			return rewardPerToken1Stored;
		}

		return rewardPerToken1Stored.add(
			lastTimeRewardApplicable()
				.sub(updatedAt).mul(rewardRate).mul(1e18).div(
					totalSumStaked.add(totalSumStakedVirtual)
				)
		);
	}

	/**
	 * @dev Calculate the reward multiplier for the second token
	**/
	function getRewardPerToken2Multiplier() public view returns (uint256) {
		if(totalSumStaked == 0) {
			return 0;
		}

		return lastTimeRewardApplicable().sub(updatedAt);
	}

	function earnedLockToken1(
		address account_,
		uint256 lockMonths_,
		uint256 index_
	) public view validBlockingMonth(lockMonths_) returns (uint256 earned) {
		StakeData storage stakeData = _accountsWithStakeLocked[account_][lockMonths_];

		return _earnedLockToken1(
			index_,
			stakeData,
			userRewardPaidPerToken1[account_],
			calculateMultiplier(block.timestamp > stakeData.unlockDates[index_] ? 0 : lockMonths_)
		);

		// return _accountsWithStakeLocked[account_][lockMonths_].amounts[index_].mul(
		// 	rewardPerToken1().sub(userRewardPaidPerToken1[account_])
		// ).mul(_multiplier).div(100).div(1e18).add(
		// 	_accountsWithStakeLocked[account_][lockMonths_].rewardToken1
		// );
	}

	function _earnedLockToken1(
		uint256 index_,
		StakeData storage stakeData_,
		uint256 rewardPaid_,
		uint256 multiplier_
	) internal view returns (uint256) {
		return stakeData_.amounts[index_].mul(
			rewardPerToken1().sub(rewardPaid_)
		).mul(multiplier_).div(100).div(1e18).add(stakeData_.rewardToken1);
	}

	function earnedLockToken2(
		address account_,
		uint256 lockMonths_
	) public view validBlockingMonth(lockMonths_) returns (uint256) {
		uint256 rewardPerToken2Multiplier = getRewardPerToken2Multiplier();

		return rewardPerToken2Multiplier.mul(
			_accountsWithStakeLocked[account_][lockMonths_].amount.add(
				_accountsWithStakeLocked[account_][lockMonths_].amountVirtual
			).div(tokenRewardDivider)
		);
	}

	/**
	 * @dev Staked tokens to receive rewards.
	 * @param amount_ Amount of tokens to be staked.
	 * @param lockMonths_ lockdown months.
	**/
	function _stake(uint256 amount_, uint256 lockMonths_)
		internal
		validBlockingMonth(lockMonths_)
		updateRewardLock(msg.sender)
	{
		require(amount_ > 0, 'Cannot stake 0');

		uint256 _amountVirtual = amount_.mul(calculateMultiplier(lockMonths_)).div(100).sub(amount_);

		totalSumStakedVirtual = totalSumStakedVirtual.add(_amountVirtual);

		totalSumStaked = totalSumStaked.add(amount_);
		_totalSumStakedByLock[lockMonths_] = _totalSumStakedByLock[lockMonths_].add(amount_);

		_balancesStaked[msg.sender] = _balancesStaked[msg.sender].add(amount_);

		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amount_);

		StakeData storage stakeData = _accountsWithStakeLocked[msg.sender][lockMonths_];

		stakeData.amount += amount_;
		stakeData.amountVirtual += _amountVirtual;

		uint256 _unlockDate = block.timestamp.add(lockMonths_ * 30 days);

		stakeData.amounts.push(amount_);
		stakeData.unlockDates.push(_unlockDate);
		stakeData.amountsVirtual.push(_amountVirtual);

		if(!_alreadyRegisteredStaker[msg.sender]) {
			totalStakers += 1;
			_alreadyRegisteredStaker[msg.sender] = true;
		}

		emit Staked(msg.sender, amount_, lockMonths_, _unlockDate);
	}

	/// @dev Claim accumulated rewards.
	function _getRewardLock(
		uint256 lockMonths_,
		bool compose_
	) internal validBlockingMonth(lockMonths_) updateRewardLock(msg.sender) returns(uint256) {
		uint256 result = 0;
		StakeData storage stakeData = _accountsWithStakeLocked[msg.sender][lockMonths_];

		uint256 _rewardToken1 = stakeData.rewardToken1;
		uint256 _rewardToken2 = stakeData.rewardToken2;

		if(_rewardToken2 > 0) {
			stakeData.rewardToken2 = 0;

			sumAccumulatedRewardsToken2 += _rewardToken2;
			accumulatedRewardsToken2[msg.sender] += _rewardToken2;
		}

		if(
			_rewardToken1 > 0 &&
			STAKING_TOKEN.balanceOf(address(this)).sub(totalSumStaked) >= _rewardToken1
		) {
			rewardTokenSum -= _rewardToken1;
			rewardTokenClaimed += _rewardToken1;
			stakeData.rewardToken1 -= _rewardToken1;

			if(compose_) {
				result = _rewardToken1;
			} else {
				STAKING_TOKEN.safeTransfer(msg.sender, _rewardToken1);
			}

			emit RewardPaid(msg.sender, _rewardToken1);
		}

		return result;
	}

	/**
	 * @dev Withdraw staked tokens.
	 * @param amount_ Amount of tokens to be withdrawn.
	 * @param lockMonths_ lockdown months.
	 * @param stakeDataIndex_ index to access data for a specific stake `amount` `unlockDate`.
	**/
	function _unstakedLock(
		uint256 amount_,
		uint256 lockMonths_,
		uint256 stakeDataIndex_
	) internal validBlockingMonth(lockMonths_) updateRewardLock(msg.sender) {
		require(amount_ > 0, 'Cannot withdraw 0');

		StakeData storage stakeData = _accountsWithStakeLocked[msg.sender][lockMonths_];

		require(amount_ <= stakeData.amounts[stakeDataIndex_], 'insufficient balance');
		require(
			block.timestamp > finishAt ||
			stakeData.unlockDates[stakeDataIndex_] < block.timestamp,
			'The blocking time has not yet expired'
		);

		uint256 _amountVirtual = amount_.mul(calculateMultiplier(lockMonths_)).div(100).sub(amount_);

		totalSumStakedVirtual = totalSumStakedVirtual.sub(_amountVirtual);

		totalSumStaked = totalSumStaked.sub(amount_);
		_totalSumStakedByLock[lockMonths_] = _totalSumStakedByLock[lockMonths_].sub(amount_);

		_balancesStaked[msg.sender] = _balancesStaked[msg.sender].sub(amount_);

		stakeData.amount -= amount_;
		stakeData.amountVirtual -= _amountVirtual;
		stakeData.unlockDates[stakeDataIndex_] = 0;
		stakeData.amounts[stakeDataIndex_] -= amount_;
		stakeData.amountsVirtual[stakeDataIndex_] -= _amountVirtual;

		if(_balancesStaked[msg.sender] == 0) {
			totalStakers -= 1;
			_alreadyRegisteredStaker[msg.sender] = false;

			delete stakeData.amounts;
			delete stakeData.unlockDates;
			delete stakeData.amountsVirtual;
		}

		STAKING_TOKEN.safeTransfer(msg.sender, amount_);
		emit Unstaked(msg.sender, amount_);
	}

	function calculateMultiplier(uint256 lockMonths_) private pure returns(uint256) {
		return lockMonths_ * 25 + 100;
	}

	function _min(uint x, uint y) private pure returns (uint) {
		return x <= y ? x : y;
	}
}

