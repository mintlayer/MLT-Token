/// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/cryptography/MerkleProof.sol';

contract MLTTokenV1 is ERC20, Ownable {
	using SafeMath for uint256;

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

	/**
	 * @param _name Name of ERC20 token
	 * @param _symbol Symbol of ERC20 token
	 * @param _supply Supply of ERC20 token
	 * @param _vestingTreeRoot Vesting tree root hash
	 * @param _vestingStartTimestamp Timestamp of vesting start as seconds since the Unix epoch
	 **/
	constructor(
		string memory _name,
		string memory _symbol,
		uint256 _supply,
		bytes32 _vestingTreeRoot,
		uint256 _vestingStartTimestamp
	) ERC20(_name, _symbol) public {
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
		return MerkleProof.verify(_proof, VESTING_TREE_ROOT, _leaf);
	}

	/**
	 * @dev Release vesting in batches
	 * @param _users Array of users
	**/
	function batchReleaseVested(User[] calldata _users) external {
		for(uint256 i = 0; i < _users.length; i++) {
			(
				address beneficiary,
				uint256 amount,
				uint256 cliff,
				bytes32[] calldata proof
			) = _splitUser(_users[i]);

			bytes32 _leaf = keccak256(abi.encodePacked(beneficiary, amount, cliff));
			if(!vestingClaimed[_leaf]) _releaseVested(beneficiary, amount, cliff, proof);
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
			MerkleProof.verify(_proof, VESTING_TREE_ROOT, _leaf), 'Invalid merkle proof'
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

	function _splitUser(User calldata _user) internal pure returns(
		address beneficiary,
		uint256 amount,
		uint256 cliff,
		bytes32[] calldata proof
	) {
		return (_user.beneficiary, _user.amount, _user.cliff, _user.proof);
	}
}
