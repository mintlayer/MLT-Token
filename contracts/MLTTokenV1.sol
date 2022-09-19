/// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/MerkleProofUpgradeable.sol';

contract MLTTokenV1 is ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	struct User {
		address beneficiary;
		uint256 amount;
		uint256 cliff;
		bytes32[] proof;
	}

	/* BEGIN VARIABLES */
	bytes32 public VESTING_TREE_ROOT;
	uint256 public VESTING_START_TIMESTAMP;
	/**
	 * @dev Record of user withdrawals by cliff
	 * leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff))
	 * leaf => claimed
	**/
	mapping(bytes32 => bool) public vestingClaimed;
	/* END VARIABLES */

	event VestedTokenGrant(bytes32 indexed leafHash);

	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() {
		_disableInitializers();
	}

	/**
	 * @param _name Name of ERC20 token
	 * @param _symbol Symbol of ERC20 token
	 * @param _supply Supply of ERC20 token
	 * @param _vestingTreeRoot Vesting tree root hash
	 * @param _vestingStartTimestamp Timestamp of vesting start as seconds since the Unix epoch
	 **/
	function initialize(
		string memory _name,
		string memory _symbol,
		uint256 _supply,
		bytes32 _vestingTreeRoot,
		uint256 _vestingStartTimestamp
	) external initializer {
		__ERC20_init(_name, _symbol);
		__Ownable_init();
		__UUPSUpgradeable_init();

		VESTING_TREE_ROOT = _vestingTreeRoot;
		VESTING_START_TIMESTAMP = _vestingStartTimestamp;

		_mint(address(this), uint256(_supply).mul(uint256(10)**decimals()));
	}

	/**
	 * @dev Verify the validity of merkle proof associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _amount Amount vested tokens to be released
	 * @param _cliff Lock delay for release
	 * @param _proof Merkle proof
	**/
	function verifyProof(
		address _beneficiary,
		uint256 _amount,
		uint256 _cliff,
		bytes32[] calldata _proof
	) external view returns(bool) {
		bytes32 _leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff));
		return MerkleProofUpgradeable.verify(_proof, VESTING_TREE_ROOT, _leaf);
	}

	/**
	 * @dev Release vesting in batches
	 * @param _users Array of users
	**/
	function batchReleaseVested(User[] calldata _users) external {
		for(uint256 i = 0; i < _users.length; i++) {
			User calldata _user = _users[i];
			try this.releaseVested(_user.beneficiary, _user.amount, _user.cliff, _user.proof) {}
			catch {}
		}
	}

	/**
	 * @dev Release vesting associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _amount Amount vested tokens to be released
	 * @param _cliff Lock delay for release
	 * @param _proof Merkle proof
	**/
	function releaseVested(
		address _beneficiary,
		uint256 _amount,
		uint256 _cliff,
		bytes32[] calldata _proof
	) external {
		_releaseVested(_beneficiary, _amount, _cliff, _proof);
	}

	/**
	 * @dev Release vesting associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _amount Amount vested tokens to be released
	 * @param _cliff Lock delay for release
	 * @param _proof Merkle proof
	**/
	function _releaseVested(
		address _beneficiary,
		uint256 _amount,
		uint256 _cliff,
		bytes32[] calldata _proof
	) internal {
		bytes32 _leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff));

		require(
			MerkleProofUpgradeable.verify(_proof, VESTING_TREE_ROOT, _leaf), 'Invalid merkle proof'
		);

		require(!vestingClaimed[_leaf], 'Tokens already claimed');
		require(
			block.timestamp >= VESTING_START_TIMESTAMP.add(_cliff),
			"The release date has not yet arrived"
		);

		vestingClaimed[_leaf] = true;
		_transfer(address(this), _beneficiary, _amount);

		emit VestedTokenGrant(_leaf);
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}
}
