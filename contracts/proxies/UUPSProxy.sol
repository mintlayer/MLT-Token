/// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

/**
 * @dev this proxy is just a wrapper to make ERC1967Proxy compatible with hardhat-deploy
**/
contract UUPSProxy is ERC1967Proxy {
	constructor(
		address _logic,
		address,
		bytes memory _data
	) ERC1967Proxy(_logic, _data) {} // solhint-disable-line
}