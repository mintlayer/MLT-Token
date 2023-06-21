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

contract MLStakingCore {
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
	uint256[] internal _enabledMonths = [ 0, 1, 2, 3, 4, 5, 6 ];
	/// @dev Address of the token to partially pay rewards.
	
	IERC20 constant STAKING_TOKEN = IERC20(0x281E2Cc83bD4A9930903AAa0a8cd1B521c1eB562);
	// IERC20 constant STAKING_TOKEN = IERC20(0x0C703e0cD79107354934F87743ff26B0d87B7905);

	/**
	 * `finishingBlockNumber` will store the block number to determine until which block the
	 * rewards will continue to be generated. It is calculated based on the number of tokens
	 * to be distributed as rewards that are deposited into the contract.
	**/
	uint256 public finishingBlockNumber;

	/// @dev Block number of the last time the reward was received.
	uint256 public lastUpdateBlockNumber;

	/// @dev Total stakers.
	uint256 public totalStakers;

	/// @dev Accumulated rewards per token staked up to the current block.number.
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

	/// @dev Amount of reward tokens that will be distributed for each token staked.
	uint256 public rewardPerBlock;

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
	 * last (see: lastUpdateBlockNumber) update for a specific account.
	 * account => rewardCache
	**/
	mapping(address => uint256) public userRewardPaidPerToken1;

	mapping(address => bool) internal _alreadyRegisteredStaker;

	/**
	 * @dev The balance staked by an account.
	 * account => balance
	**/
	mapping(address => uint256) internal _balancesStaked;

	/// @dev total sum of staked tokens with lock for months.
	// month => staked
	mapping(uint256 => uint256) internal _totalSumStakedByLock;

	/// @dev enabled blocked months: months => enabled?
	mapping(uint256 => bool) internal _monthsOfBlockingEnabled;

	/// @dev account => months => StakeData
	mapping(address => mapping(uint256 => StakeData)) internal _accountsWithStakeLocked;

	/// @dev account => cumulative token rewards 2.
	mapping(address => uint256) public accumulatedRewardsToken2;
	
	constructor() {}
}

