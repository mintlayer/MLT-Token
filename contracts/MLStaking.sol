/// SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';

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

	/// @dev of URIs for all the Merkle trees added to the contract.
	string[] public rootURIs;

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

	/// @dev Accumulated rewards per token staked up to the current block.number.
	uint256 public rewardPerToken2Stored;

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
	uint256 public tokenRewardDivider;

	/**************
	* 3. MAPPINGS *
	***************/
	/**
	 * URI mapping to IPFS storing whitelist data
	 * root => URI (IPFS)
	**/
	mapping(bytes32 => string) public mapRootURIs;

	/**
	 * @dev Root hash record of valid vesting trees
	 * Root hash => valid
	**/
	mapping(bytes32 => bool) public rootWhitelist;

	/**
	 * @dev This represents the accumulated reward per token staked up to the moment of the
	 * last (see: lastUpdateBlockNumber) update for a specific account.
	 * account => rewardCache
	**/
	mapping(address => uint256) public userRewardPaidPerToken1;
	mapping(address => uint256) public userRewardPaidPerToken2;

	mapping(address => bool) private _alreadyRegisteredStaker;

	mapping(address => bool) private _admins;

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
	 * @dev Throws if root no valid
	**/
	modifier validRoot(bytes32 _root) {
		require(rootWhitelist[_root], "Root no valid");
		_;
	}

	/**
	 * @param account_ represents the current user interacting with the contract.
	**/
	modifier updateRewardLock(address account_) {
		rewardPerToken1Stored = rewardPerToken1();
		rewardPerToken2Stored = rewardPerToken2();
		lastUpdateBlockNumber = lastTimeRewardApplicable();

		if(account_ != address(0)) {
			for(uint256 i = 0; i < _enabledMonths.length; i++) {
				_accountsWithStakeLocked[account_][_enabledMonths[i]].rewardToken1 =
					earnedLockToken1(account_, i);

				_accountsWithStakeLocked[account_][_enabledMonths[i]].rewardToken2 =
					earnedLockToken2(account_, i);
			}

			userRewardPaidPerToken1[account_] = rewardPerToken1Stored;
			userRewardPaidPerToken2[account_] = rewardPerToken2Stored;
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
	event AddedRoot(bytes32 indexed root);
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
		_admins[msg.sender] = true;
		tokenRewardDivider = 200_000;
		rewardPerBlock = 0.4692192192e18;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			_monthsOfBlockingEnabled[_enabledMonths[i]] = true;
		}
	}

	/**
	 * @dev Add a new merkle tree hash.
	 * @param root_ Merkle tree root of treasurer.
	 * @param uriIPFS_ IPFS URI.
	**/
	function addRoot(bytes32 root_, string memory uriIPFS_) external {
		require(_admins[msg.sender], 'Caller is not an admin');
		require(!rootWhitelist[root_], 'Root hash already exists');

		rootURIs.push(uriIPFS_);
		rootWhitelist[root_] = true;
		mapRootURIs[root_] = uriIPFS_;

		emit AddedRoot(root_);
	}

	function addAdmin(address admin_) external onlyOwner {
		require(admin_ != address(0), "zero address");
		_admins[admin_] = true;
	}

	function removeAdmin(address admin_) external onlyOwner {
		require(admin_ != address(0), "zero address");
		_admins[admin_] = false;
	}

	function updateRewardPerBlock(uint256 rewardPerBlock_) external onlyOwner {
		require(rewardPerBlock_ > 0, 'Reward per block cannot be 0');

		rewardPerBlock = rewardPerBlock_;

		finishingBlockNumber = block.number.add(rewardTokenSum.div(rewardPerBlock));
	}

	function updateTokenRewardDivider(uint256 divider_) external onlyOwner {
		require(divider_ > 0, 'Divider cannot be 0');

		tokenRewardDivider = divider_;
	}

	function updateRewardToDistribute(
		uint256 amountReward_
	) external updateRewardLock(address(0)) onlyOwner {
		require(amountReward_ > 0, 'Reward token amount cannot be 0');

		STAKING_TOKEN.safeTransferFrom(msg.sender, address(this), amountReward_);
		rewardTokenSum = rewardTokenSum.add(amountReward_);
		rewardTokenDistributed += rewardTokenSum;
		finishingBlockNumber = block.number.add(rewardTokenSum.div(rewardPerBlock));
	}

	/**
	 * @dev Staked tokens to receive rewards.
	 * @param amount_ Amount of tokens to be staked.
	 * @param lockMonths_ lockdown months.
	 * @param root_ Merkle tree root.
	 * @param proof_ Merkle proof.
	**/
	function stake(
		uint256 amount_,
		uint256 lockMonths_,
		bytes32 root_,
		bytes32[] calldata proof_
	) external nonReentrant {
		_stake(amount_, lockMonths_, root_, proof_);
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
					(block.timestamp > stakeData.unlockDates[j] || block.number > finishingBlockNumber)
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
	function getReward(
		bool compose_,
		bytes32 root_,
		bytes32[] calldata proof_
	) external nonReentrant {
		uint256 _reward = 0;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			_reward += _getRewardLock(_enabledMonths[i], compose_);
		}

		if(compose_) {
			STAKING_TOKEN.safeTransfer(msg.sender, _reward);
			_stake(_reward, 0, root_, proof_);
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
					(block.timestamp > stakeData.unlockDates[j] || block.number > finishingBlockNumber)
				) {
					_unstakedLock(stakeData.amounts[j], _enabledMonths[i], j);
				}
			}
		}
	}

	function earnedToken1(address account_) external view returns(uint256) {
		uint256 reward = 0;

		for(uint256 i = 0; i < _enabledMonths.length; i++) {
			reward = reward.add(earnedLockToken1(account_, _enabledMonths[i]));
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
		if(block.number > finishingBlockNumber && rewardTokenSum > 0) {
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

	/**
	 * @dev Verify the validity of merkle proof associated with an address.
	 * @param staker_ Address of staker.
	 * @param root_ Merkle tree root.
	 * @param proof_ Merkle proof.
	**/
	function verifyProof(
		address staker_,
		bytes32 root_,
		bytes32[] calldata proof_
	) public view validRoot(root_) returns(bool) {
		bytes32 _leaf = keccak256(abi.encodePacked(staker_));
		return MerkleProof.verify(proof_, root_, _leaf);
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
				.sub(lastUpdateBlockNumber).mul(rewardPerBlock).mul(1e18).div(
					totalSumStaked.add(totalSumStakedVirtual)
				)
		);
	}

	function rewardPerToken2() public view returns (uint256) {
		if(totalSumStaked == 0) {
			return rewardPerToken2Stored;
		}

		return rewardPerToken2Stored.add(
			lastTimeRewardApplicable().sub(lastUpdateBlockNumber).mul(1e18).div(tokenRewardDivider)
		);
	}

	function earnedLockToken1(
		address account_,
		uint256 lockMonths_
	) public view validBlockingMonth(lockMonths_) returns (uint256) {
		return _accountsWithStakeLocked[account_][lockMonths_].amount.mul(
			rewardPerToken1().sub(userRewardPaidPerToken1[account_])
		).mul(calculateMultiplier(lockMonths_)).div(100).div(1e18).add(
			_accountsWithStakeLocked[account_][lockMonths_].rewardToken1
		);
	}

	function earnedLockToken2(
		address account_,
		uint256 lockMonths_
	) public view validBlockingMonth(lockMonths_) returns (uint256) {
		return _accountsWithStakeLocked[account_][lockMonths_].amount.mul(
			rewardPerToken2().sub(userRewardPaidPerToken2[account_])
		).mul(calculateMultiplier(lockMonths_)).div(100).div(1e18).add(
			_accountsWithStakeLocked[account_][lockMonths_].rewardToken2
		);
	}

	function lastTimeRewardApplicable() internal view returns (uint256) {
		return block.number < finishingBlockNumber ? block.number : finishingBlockNumber;
	}

	/**
	 * @dev Staked tokens to receive rewards.
	 * @param amount_ Amount of tokens to be staked.
	 * @param lockMonths_ lockdown months.
	 * @param root_ Merkle tree root.
	 * @param proof_ Merkle proof.
	**/
	function _stake(uint256 amount_, uint256 lockMonths_, bytes32 root_, bytes32[] calldata proof_)
		internal
		validBlockingMonth(lockMonths_)
		updateRewardLock(msg.sender)
	{
		require(amount_ > 0, 'Cannot stake 0');
		require(verifyProof(msg.sender, root_, proof_), 'Not whitelisted');
		require(block.number < finishingBlockNumber, 'Reward duration finished');

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

		if(lockMonths_ == 0 && stakeData.amounts.length == 1) {
			stakeData.amounts[0] += amount_;
			stakeData.unlockDates[0] = _unlockDate;
			stakeData.amountsVirtual[0] += _amountVirtual;
		} else {
			stakeData.amounts.push(amount_);
			stakeData.unlockDates.push(_unlockDate);
			stakeData.amountsVirtual.push(_amountVirtual);
		}

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
			block.number > finishingBlockNumber ||
			block.timestamp > stakeData.unlockDates[stakeDataIndex_],
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
}