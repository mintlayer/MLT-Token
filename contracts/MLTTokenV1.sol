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
	 * @param _proofWithMetadata Merkle proof with the metadata to reconstruct the leaf hash
	**/
	function verifyProof(
		address _beneficiary,
		bytes calldata _proofWithMetadata
	) external view returns(bool) {
		bytes32[] memory meta;
		bytes32[] memory proof;
		(meta, proof) = splitIntoBytes32(_proofWithMetadata, 2);

		uint256 _amount = uint256(meta[0]);
		uint256 _cliff = uint256(meta[1]);
		bytes32 _leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff));

		return MerkleProofUpgradeable.verify(proof, VESTING_TREE_ROOT, _leaf);
	}

	/**
	 * @dev Release vesting in batches
	 * @param _beneficiaries An array of beneficiaries addresses
	 * @param _proofs An array of merkle proof
	**/
	function batchReleaseVested(
		address[] calldata _beneficiaries,
		bytes[] calldata _proofs
	) external {
		for(uint256 i = 0; i < _proofs.length; i++) {
			try this.releaseVested(_beneficiaries[i], _proofs[i]) {} catch {}
		}
	}

	/**
	 * @dev Release vesting associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _proofWithMetadata Merkle proof with the metadata to reconstruct the leaf hash
	**/
	function releaseVested(address _beneficiary, bytes calldata _proofWithMetadata) external {
		_releaseVested(_beneficiary, _proofWithMetadata);
	}

	/**
	 * @dev Release vesting associated with an address
	 * @param _beneficiary Address of beneficiary
	 * @param _proofWithMetadata Merkle proof with the metadata to reconstruct the leaf hash
	**/
	function _releaseVested(address _beneficiary, bytes calldata _proofWithMetadata) internal {
		require(_beneficiary != address(0), 'Cannot withdraw to zero address');

		bytes32[] memory meta;
		bytes32[] memory proof;

		require(_proofWithMetadata.length >= 96, "Byte array too short");
		(meta, proof) = splitIntoBytes32(_proofWithMetadata, 2);

		uint256 _amount = uint256(meta[0]);
		uint256 _cliff = uint256(meta[1]);
		bytes32 _leaf = keccak256(abi.encodePacked(_beneficiary, _amount, _cliff));

		require(
			MerkleProofUpgradeable.verify(proof, VESTING_TREE_ROOT, _leaf), 'Invalid merkle proof'
		);

		_cliff = VESTING_START_TIMESTAMP.add(_cliff);

		require(!vestingClaimed[_leaf], 'Tokens already claimed');
		require(block.timestamp >= _cliff, "The release date has not yet arrived");

		vestingClaimed[_leaf] = true;
		_transfer(address(this), _beneficiary, _amount);
	}

	/**
	 * @dev Split `_byteArray` into two arrays of bytes32 where the first array will be of size
	 * `_numBytes32` and the remainder will be stored in the second array
	 * @param _byteArray bytes to be split
	 * @param _numBytes32 array size
	**/
	function splitIntoBytes32(bytes memory _byteArray, uint256 _numBytes32)
		internal
		pure
		returns (bytes32[] memory bytes32Array, bytes32[] memory remainder)
	{
		require(_byteArray.length <= 1600, "Byte array too big");

		bytes32 _bytes32;
		bytes32Array = new bytes32[](_numBytes32);
		remainder = new bytes32[](_byteArray.length.sub(_numBytes32.mul(32)).div(32));

		for(uint256 k = 32; k <= _byteArray.length; k = k.add(32)) {
			assembly { _bytes32 := mload(add(_byteArray, k)) }
			if (k <= _numBytes32 * 32) {
				bytes32Array[k.sub(32).div(32)] = _bytes32;
			} else {
				remainder[k.sub(_numBytes32.add(1).mul(32)).div(32)] = _bytes32;
			}
		}
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}
}
