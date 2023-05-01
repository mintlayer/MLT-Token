/// SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

import 'hardhat/console.sol';

contract MLStaking is ERC20 {
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
	// empty

	/*****************************
	* 2. CONSTANTS AND VARIABLES *
	******************************/
	uint256 constant REWARD_PER_BLOCK = 12.21697345e18;
	/// @dev Address of the token to partially pay rewards.
	IERC20 constant STAKING_TOKEN = IERC20(0x281E2Cc83bD4A9930903AAa0a8cd1B521c1eB562);

	/**
	 * `finishingPeriod` will store a timestamp to determine until which block (in which block)
	 * rewards will continue to be generated. It is calculated based on the amount of tokens
	 * to be distributed as rewards, that are deposited into the contract.
	**/
	uint256 public finishingPeriod;

	/// @dev Timestamp of the last time at which the reward.
	uint256 public lastUpdateTime;
	/// @dev Accumulated rewards per token staked up to the current time (block.timestamp).
	uint256 public rewardPerTokenStored;

	/// @dev total sum of staked tokens.
	uint256 private _totalSumStaked;

	/**************
	* 3. MAPPINGS *
	***************/
	mapping(address => uint256) public rewards;

	/**
	 * @dev This represents the accumulated reward per token staked up to the moment of the
	 * last (see: lastUpdateTime) update for a specific account.
	 * account => rewardCache
	**/
	mapping(address => uint256) public userRewardPaidPerToken;

	/**
	 * @dev The balance staked by an account.
	 * account => balance
	**/
	mapping(address => uint256) private _balancesStaked;

	/***************
	* 4. MODIFIERS *
	****************/
	/**
	 * @param account_ represents the current user interacting with the contract.
	**/
	modifier updateReward(address account_) {
		rewardPerTokenStored = rewardPerToken();
		lastUpdateTime = lastTimeRewardApplicable();

		if(account_ != address(0)) {
			rewards[account_] = earned(account_);
			userRewardPaidPerToken[account_] = rewardPerTokenStored;
		}
		_;
	}

	/************
	* 5. EVENTS *
	*************/
	event Staked(address indexed account_, uint256 amount_);
	event Unstaked(address indexed account_, uint256 amount_);
	event RewardPaid(address indexed account_, uint256 reward_);

	/***************
	* 6. FUNCTIONS *
	****************/
	/**
	 * @param name_ Name of ERC20 reward token
	 * @param symbol_ Symbol of ERC20 reward token
	 **/
	constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {}

	function updateRewardToDistribute(uint256 amountReward_) external updateReward(address(0)) {
		require(amountReward_ > 0, 'Reward token amount cannot be 0');

		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amountReward_);

		finishingPeriod = block.timestamp.add(rewardTokenSum().div(REWARD_PER_BLOCK));
	}

	/**
	 * @dev Staked tokens to receive rewards.
	 * @param amount_ Amount of tokens to be staked.
	**/
	function stake(uint256 amount_) external updateReward(msg.sender) {
		require(amount_ > 0, 'Cannot stake 0');
		_totalSumStaked = _totalSumStaked.add(amount_);
		_balancesStaked[msg.sender] = _balancesStaked[msg.sender].add(amount_);
		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amount_);
		emit Staked(msg.sender, amount_);
	}

	/**
	 * @dev Withdraw staked tokens.
	 * @param amount_ Amount of tokens to be withdrawn.
	**/
	function unstaked(uint256 amount_) external {
		_unstaked(amount_);
	}

	/// @dev Claim the accumulated rewards.
	function getReward() external {
		_getReward();
	}

	/// @dev Withdraw all the staked tokens and claim earned rewards.
	function exit() external {
		_unstaked(_balancesStaked[msg.sender]);
		_getReward();
	}

	/// @dev total token sum to be distributed as rewards.
	function rewardTokenSum() public view returns (uint256) {
		return STAKING_TOKEN.balanceOf(address(this)).sub(_totalSumStaked);
	}

	function totalStakedSum() external view returns (uint256) {
		return _totalSumStaked;
	}

	function balanceStakedOf(address account) external view returns (uint256) {
		return _balancesStaked[account];
	}

	function getTimestamp() external view returns (uint256) {
		return block.timestamp;
	}

	function lastTimeRewardApplicable() public view returns (uint256) {
		// return block.timestamp;
		return block.timestamp < finishingPeriod ? block.timestamp : finishingPeriod;
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
				.sub(lastUpdateTime).mul(REWARD_PER_BLOCK).mul(1e18).div(_totalSumStaked)
		);
	}

	/**
	 * @dev Calculate the rewards accumulated by an account up to the current time.
	**/
	function earned(address account) public view returns (uint256) {
		return _balancesStaked[account].mul(
			rewardPerToken().sub(userRewardPaidPerToken[account])
		).div(1e18).add(rewards[account]);
	}

	/// @dev Claim accumulated rewards.
	function _getReward() internal updateReward(msg.sender) {
		uint256 reward = rewards[msg.sender];
		if(reward > 0) {
			rewards[msg.sender] = 0;
			_mint(msg.sender, reward);
			STAKING_TOKEN.safeTransfer(msg.sender, reward);
			emit RewardPaid(msg.sender, reward);
		}
	}

	/**
	 * @dev Withdraw staked tokens.
	 * @param amount_ Amount of tokens to be withdrawn.
	**/
	function _unstaked(uint256 amount_) internal updateReward(msg.sender) {
		require(amount_ > 0, 'Cannot withdraw 0');
		_totalSumStaked = _totalSumStaked.sub(amount_);
		_balancesStaked[msg.sender] = _balancesStaked[msg.sender].sub(amount_);
		STAKING_TOKEN.safeTransfer(msg.sender, amount_);
		emit Unstaked(msg.sender, amount_);
	}
}
