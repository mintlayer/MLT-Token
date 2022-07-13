/// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

contract MLTTokenV1 is ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @custom:oz-upgrades-unsafe-allow constructor
	constructor() {
		_disableInitializers();
	}

	/**
	 * @param _name name of ERC20 token
	 * @param _symbol symbol of ERC20 token
	 * @param _supply supply of ERC20 token
	 **/
	function initialize(
		string memory _name,
		string memory _symbol,
		uint256 _supply
	) external initializer {
		__ERC20_init(_name, _symbol);
		__Ownable_init();
		__UUPSUpgradeable_init();

		_mint(msg.sender, uint256(_supply).mul(uint256(10)**decimals()));
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}
}
