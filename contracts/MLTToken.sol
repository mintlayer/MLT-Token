/// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';

contract MLTToken is ERC20, Ownable {
	struct User {
		address beneficiary;
		uint256 amount;
		uint256 cliff;
		bytes32[] proof;
	}

	/* BEGIN VARIABLES */
	/**
	 * @dev Record of user withdrawals by cliff
	 * leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff))
	 * leaf => claimed
	**/
	mapping(bytes32 => bool) public vestingClaimed;

	/**
	 * @dev Total balance of vesting tree by root hash
	 * Root hash => balance
	**/
	mapping(bytes32 => uint256) public balanceByRootHash;

	/**
	 * @dev Timestamp start of the allocation as seconds since the Unix epoch by root hash
	 * Root hash => timestamp
	**/
	mapping(bytes32 => uint256) public startTimestampByRootHash;

	/**
	 * @dev Root hash record of valid vesting trees
	 * Root hash => valid
	**/
	mapping(bytes32 => bool) public rootWhitelist;
	/* END VARIABLES */

	/**
	 * @dev Throws if is not valid root
	**/
	modifier validRoot(bytes32 _root) {
		require(rootWhitelist[_root], "Is not valid root");
		_;
	}

	event VestedTokenGrant(bytes32 indexed leafHash);

	/**
	 * @param _name Name of ERC20 token
	 * @param _symbol Symbol of ERC20 token
	 * @param _supply Supply of ERC20 token
	 * @param _vestingTreeRoot Vesting tree root hash
	 * @param _vestingStartTimestamp Timestamp of vesting start as seconds since the Unix epoch
	 * @param _proofBalance Proof of total balance
	 **/
	constructor(
		string memory _name,
		string memory _symbol,
		uint256 _supply,
		bytes32 _vestingTreeRoot,
		uint256 _vestingStartTimestamp,
		bytes32[] memory _proofBalance
	) ERC20(_name, _symbol) {
		uint256 supply = _supply * uint256(10)**decimals();

		bytes32 _leaf = keccak256(abi.encodePacked(supply));

		require(
			MerkleProof.verify(_proofBalance, _vestingTreeRoot, _leaf),
			'The total supply of the contract does not match that of the merketree'
		);

		rootWhitelist[_vestingTreeRoot] = true;
		balanceByRootHash[_vestingTreeRoot] = supply;
		startTimestampByRootHash[_vestingTreeRoot] = _vestingStartTimestamp;

		_mint(address(this), supply);
	}

	/**
	 * @dev Verify the validity of merkle proof associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _amount Amount vested tokens to be released
	 * @param _cliff Lock delay for release
	 * @param _root Merkle tree root
	 * @param _proof Merkle proof
	**/
	function verifyProof(
		address _beneficiary,
		uint256 _amount,
		uint256 _cliff,
		bytes32 _root,
		bytes32[] calldata _proof
	) external view returns(bool) {
		if(!rootWhitelist[_root]) return false;
		bytes32 _leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff));
		return MerkleProof.verify(_proof, _root, _leaf);
	}

	/**
	 * @dev Add a new merkle tree hash
	 * @param _root Merkle tree root
	 * @param _amount Balance that is assigned to merkle tree
	 * @param _startTimestamp Timestamp of vesting start as seconds since the Unix epoch
	 * @param _proofBalance Merkle proof
	**/
	function addRoot(
		bytes32 _root,
		uint256 _amount,
		uint256 _startTimestamp,
		bytes32[] calldata _proofBalance
	) external {
		bytes32 _leaf = keccak256(abi.encodePacked(_amount));
		require(
			MerkleProof.verify(_proofBalance, _root, _leaf),
			'The supply sent does not match that of the merketree'
		);

		require(_amount <= balanceOf(msg.sender), 'Amount exceeds balance');
		require(!rootWhitelist[_root], 'Root hash already exists');

		rootWhitelist[_root] = true;
		balanceByRootHash[_root] = _amount;
		startTimestampByRootHash[_root] = _startTimestamp;
	}

	/**
	 * @dev Release vesting in batches
	 * @param _users Array of users
	 * @param _root Merkle tree root
	**/
	function batchReleaseVested(User[] calldata _users, bytes32 _root) external {
		for(uint256 i = 0; i < _users.length; i++) {
			(
				address beneficiary,
				uint256 amount,
				uint256 cliff,
				bytes32[] calldata proof
			) = _splitUser(_users[i]);

			bytes32 _leaf = keccak256(abi.encodePacked(beneficiary, amount, cliff));
			if(!vestingClaimed[_leaf]) _releaseVested(beneficiary, amount, cliff, _root, proof);
		}
	}

	/**
	 * @dev Release vesting associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _amount Amount vested tokens to be released
	 * @param _cliff Lock delay for release
	 * @param _root Merkle tree root
	 * @param _proof Merkle proof
	**/
	function releaseVested(
		address _beneficiary,
		uint256 _amount,
		uint256 _cliff,
		bytes32 _root,
		bytes32[] calldata _proof
	) external {
		_releaseVested(_beneficiary, _amount, _cliff, _root, _proof);
	}

	/**
	 * @dev Release vesting associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _amount Amount vested tokens to be released
	 * @param _cliff Lock delay for release
	 * @param _root Merkle tree root
	 * @param _proof Merkle proof
	**/
	function _releaseVested(
		address _beneficiary,
		uint256 _amount,
		uint256 _cliff,
		bytes32 _root,
		bytes32[] calldata _proof
	) internal validRoot(_root) {
		bytes32 _leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff));

		require(
			MerkleProof.verify(_proof, _root, _leaf), 'Invalid merkle proof'
		);

		require(!vestingClaimed[_leaf], 'Tokens already claimed');
		require(balanceByRootHash[_root] >= _amount, 'Supply is not enough to claim allocation');
		require(
			block.timestamp >= startTimestampByRootHash[_root] + _cliff,
			"The release date has not yet arrived"
		);

		vestingClaimed[_leaf] = true;
		balanceByRootHash[_root] -= _amount;
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
