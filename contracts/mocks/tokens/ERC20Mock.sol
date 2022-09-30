// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @dev Contract used for testing purposes only
contract ERC20Mock is ERC20, Ownable {
  constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) public {
		_mint(msg.sender, 400_000_000e18);
	}

  function mint(address to, uint256 amount) external onlyOwner {
    _mint(to, amount);
  }
}
