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
		uint256 rewards;
		uint256 unlockDate;
	}

	/*****************************
	* 2. CONSTANTS AND VARIABLES *
	******************************/
	uint128[] private _enabledMonths = [ 0, 1, 2, 3, 4, 5, 6 ];

	/// @dev Address of the token to partially pay rewards.
	IERC20 constant STAKING_TOKEN = IERC20(0x281E2Cc83bD4A9930903AAa0a8cd1B521c1eB562);

	/**
	 * `finishingBlockNumber` will store the block number to determine until which block the
	 * rewards will continue to be generated. It is calculated based on the number of tokens
	 * to be distributed as rewards that are deposited into the contract.
	**/
	uint256 public finishingBlockNumber;

	/// @dev Block number of the last time the reward was received.
	uint256 public lastUpdateBlockNumber;

	/// @dev Accumulated rewards per token staked up to the current block.number.
	uint256 public rewardPerTokenStored;

	/// @dev Total token sum to be distributed as rewards.
	uint256 private _rewardTokenSum;

	/// @dev Total sum of staked tokens.
	uint256 private _totalSumStaked;

	/**
	 * @dev Total amount of tokens staked virtual. This is used to be able to calculate rewards
	 * with a multiplier when a user locks their stake for N amount of months
	**/
	uint256 private _totalSumStakedVirtual;

	/// @dev Amount of reward tokens that will be distributed for each token staked.
	uint256 public _rewardPerBlock;

	/**************
	* 3. MAPPINGS *
	***************/
	/**
	 * @dev This represents the accumulated reward per token staked up to the moment of the
	 * last (see: lastUpdateBlockNumber) update for a specific account.
	 * account => rewardCache
	**/
	mapping(address => uint256) public userRewardPaidPerToken;

	/**
	 * @dev The balance staked by an account.
	 * account => balance
	**/
	mapping(address => uint256) private _balancesStaked;

	/// @dev total sum of staked tokens with lock for months.
	// month => staked
	mapping(uint128 => uint256) private _totalSumStakedByLock;

	/// @dev enabled blocked months: months => enabled?
	mapping(uint128 => bool) private _monthsOfBlockingEnabled;

	mapping(address => mapping(uint128 => StakeData)) private _accountsWithStakeLocked;

	/***************
	* 4. MODIFIERS *
	****************/
	/**
	 * @param account_ represents the current user interacting with the contract.
	 * @param lockMonths_ represents the months that the stake will be locked.
	**/
	modifier updateRewardLock(address account_, uint128 lockMonths_) {
		rewardPerTokenStored = rewardPerToken();

		lastUpdateBlockNumber = lastTimeRewardApplicable();

		if(account_ != address(0)) {
			_accountsWithStakeLocked[account_][lockMonths_].rewards = earnedLock(
				account_,
				lockMonths_
			);

			userRewardPaidPerToken[account_] = rewardPerTokenStored;
		}
		_;
	}

	modifier validBlockingMonth(uint128 lockMonths_) {
		require(_monthsOfBlockingEnabled[lockMonths_], 'Invalid lock months');
		_;
	}

	/************
	* 5. EVENTS *
	*************/
	event Unstaked(address indexed account_, uint256 amount_);
	event RewardPaid(address indexed account_, uint256 reward_);
	event Staked(address indexed account_, uint256 amount_, uint128 lockMonths_);

	/***************
	* 6. FUNCTIONS *
	****************/
	/**
	 * @param name_ Name of ERC20 reward token
	 * @param symbol_ Symbol of ERC20 reward token
	 **/
	constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
		_rewardPerBlock = 12.21697345e18;

		for(uint128 i = 0; i < _enabledMonths.length; i++) {
			_monthsOfBlockingEnabled[_enabledMonths[i]] = true;
		}
	}

	function rewardPerBlock() external view returns(uint256) {
		return _rewardPerBlock;
	}

	function updateRewardPerBlock(uint256 rewardPerBlock_) external onlyOwner {
		require(rewardPerBlock_ > 0, 'Reward per block cannot be 0');

		_rewardPerBlock = rewardPerBlock_;

		finishingBlockNumber = block.number.add(_rewardTokenSum.div(_rewardPerBlock));
	}

	function updateRewardToDistribute(
		uint256 amountReward_
	) external updateRewardLock(address(0), 0) onlyOwner {
		require(amountReward_ > 0, 'Reward token amount cannot be 0');

		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amountReward_);
		_rewardTokenSum = _rewardTokenSum.add(amountReward_);
		finishingBlockNumber = block.number.add(_rewardTokenSum.div(_rewardPerBlock));
	}

	/**
	 * @dev Staked tokens to receive rewards.
	 * @param amount_ Amount of tokens to be staked.
	 * @param lockMonths_ lockdown months.
	**/
	function stake(
		uint256 amount_,
		uint128 lockMonths_
	) external validBlockingMonth(lockMonths_) updateRewardLock(msg.sender, lockMonths_) {
		require(amount_ > 0, 'Cannot stake 0');

		_totalSumStakedVirtual = _totalSumStakedVirtual.add(
			amount_.mul(calculateMultiplier(lockMonths_)).div(100).sub(amount_)
		);

		_totalSumStaked = _totalSumStaked.add(amount_);
		_totalSumStakedByLock[lockMonths_] = _totalSumStakedByLock[lockMonths_].add(amount_);

		_balancesStaked[msg.sender] = _balancesStaked[msg.sender].add(amount_);

		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amount_);

		StakeData storage stakeData = _accountsWithStakeLocked[msg.sender][lockMonths_];

		stakeData.amount += amount_;
		stakeData.unlockDate = block.timestamp.add(lockMonths_ * 30 days);

		emit Staked(msg.sender, amount_, lockMonths_);
	}

	/**
	 * @dev Withdraw staked tokens.
	**/
	function unstaked() external nonReentrant {
		for(uint128 i = 0; i < _enabledMonths.length; i++) {
			_unstakedLock(
				_accountsWithStakeLocked[msg.sender][_enabledMonths[i]].amount,
				_enabledMonths[i]
			);
		}
	}

	/**
	 * @dev Withdraw staked tokens.
	 * @param amount_ Amount of tokens to be withdrawn.
	 * @param lockMonths_ lockdown months.
	**/
	function unstakedLock(uint256 amount_, uint128 lockMonths_) external nonReentrant {
		_unstakedLock(amount_, lockMonths_);
	}

	/// @dev Claim the accumulated rewards.
	function getReward() external nonReentrant {
		for(uint128 i = 0; i < _enabledMonths.length; i++) {
			_getRewardLock(_enabledMonths[i]);
		}
	}

	/// @dev Withdraw all the staked tokens and claim earned rewards.
	function exit() external nonReentrant {
		for(uint128 i = 0; i < _enabledMonths.length; i++) {
			_getRewardLock(_enabledMonths[i]);

			if(_accountsWithStakeLocked[msg.sender][_enabledMonths[i]].amount > 0) {
				_unstakedLock(
					_accountsWithStakeLocked[msg.sender][_enabledMonths[i]].amount,
					_enabledMonths[i]
				);
			}
		}
	}

	function earned(address account_) external view returns(uint256) {
		uint256 reward = 0;

		for(uint128 i = 0; i < _enabledMonths.length; i++) {
			reward = reward.add(earnedLock(account_, _enabledMonths[i]));
		}

		return reward;
	}

	/// @dev total token sum to be distributed as rewards.
	function rewardTokenSum() external view returns (uint256) {
		return _rewardTokenSum;
	}

	function totalStakedSum() external view returns (uint256) {
		return _totalSumStaked;
	}

	function totalStakedLockSum(uint128 lockMonths_) external view returns (uint256) {
		return _totalSumStakedByLock[lockMonths_];
	}

	function balanceStakedOf(address account) external view returns (uint256) {
		return _balancesStaked[account];
	}

	function balanceStakedLockOf(
		address account,
		uint128 lockMonths_
	) external view returns (uint256) {
		return _accountsWithStakeLocked[account][lockMonths_].amount;
	}

	function withdrawUnclaimedRewards() external nonReentrant onlyOwner {
		if(block.number > finishingBlockNumber && _rewardTokenSum > 0) {
			uint256 remainder = _rewardTokenSum;
			_rewardTokenSum = 0;

			STAKING_TOKEN.safeTransfer(msg.sender, remainder);
		}
	}

	function lastTimeRewardApplicable() public view returns (uint256) {
		return block.number < finishingBlockNumber ? block.number : finishingBlockNumber;
	}

	/**
	 * @dev Calculate the rewards accumulated per token staked up to the current time.
	**/
	function rewardPerToken() public view returns (uint256) {
		if(_totalSumStaked == 0) {
			return rewardPerTokenStored;
		}

		return rewardPerTokenStored.add(
			lastTimeRewardApplicable()
				.sub(lastUpdateBlockNumber).mul(_rewardPerBlock).mul(1e18).div(
					_totalSumStaked.add(_totalSumStakedVirtual)
				)
		);
	}

	function earnedLock(
		address account_,
		uint128 lockMonths_
	) public view validBlockingMonth(lockMonths_) returns (uint256) {
		return _accountsWithStakeLocked[account_][lockMonths_].amount.mul(
			rewardPerToken().sub(userRewardPaidPerToken[account_])
		).mul(calculateMultiplier(lockMonths_)).div(100).div(1e18).add(
			_accountsWithStakeLocked[account_][lockMonths_].rewards
		);
	}

	/// @dev Claim accumulated rewards.
	function _getRewardLock(
		uint128 lockMonths_
	) internal validBlockingMonth(lockMonths_) updateRewardLock(msg.sender, lockMonths_) {
		uint256 reward = _accountsWithStakeLocked[msg.sender][lockMonths_].rewards;

		if(
			reward > 0 &&
			STAKING_TOKEN.balanceOf(address(this)).sub(_totalSumStaked) >= reward &&
			_accountsWithStakeLocked[msg.sender][lockMonths_].unlockDate < block.timestamp
		) {
			_accountsWithStakeLocked[msg.sender][lockMonths_].rewards = 0;
			_mint(msg.sender, reward);
			_rewardTokenSum = _rewardTokenSum.sub(reward);
			STAKING_TOKEN.safeTransfer(msg.sender, reward);
			emit RewardPaid(msg.sender, reward);
		}
	}

	/**
	 * @dev Withdraw staked tokens.
	 * @param amount_ Amount of tokens to be withdrawn.
	 * @param lockMonths_ lockdown months.
	**/
	function _unstakedLock(
		uint256 amount_,
		uint128 lockMonths_
	) internal validBlockingMonth(lockMonths_) updateRewardLock(msg.sender, lockMonths_) {
		require(amount_ > 0, 'Cannot withdraw 0');

		require(
			_accountsWithStakeLocked[msg.sender][lockMonths_].unlockDate < block.timestamp,
			'The blocking time has not yet expired'
		);

		require(
			amount_ <= _accountsWithStakeLocked[msg.sender][lockMonths_].amount,
			'the amount to be withdrawn is greater than that available'
		);

		_totalSumStakedVirtual = _totalSumStakedVirtual.sub(
			amount_.mul(calculateMultiplier(lockMonths_)).div(100).sub(amount_)
		);

		_totalSumStaked = _totalSumStaked.sub(amount_);
		_totalSumStakedByLock[lockMonths_] = _totalSumStakedByLock[lockMonths_].sub(amount_);

		_balancesStaked[msg.sender] = _balancesStaked[msg.sender].sub(amount_);

		_accountsWithStakeLocked[msg.sender][lockMonths_].amount -= amount_;

		STAKING_TOKEN.safeTransfer(msg.sender, amount_);
		emit Unstaked(msg.sender, amount_);
	}

	function calculateMultiplier(uint128 lockMonths_) private pure returns(uint256) {
		return lockMonths_ * 25 + 100;
	}
}

