import { parseEther } from 'ethers/lib/utils';
import { VestingTree } from '@mintlayer/vesting-tree';

import { VESTING_USERS } from '../addressbook/vestingAddresses';
import {
  ALLOCATIONS,
  ALLOCATION_TOTAL_SUPPLY,
  VESTING_START_TIMESTAMP,
} from '../constants';

/* types */
import type { Accounts } from 'typescript/hardhat';
import type { DeployFunction } from 'hardhat-deploy/types';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  const tree = new VestingTree({
    users: VESTING_USERS,
    allocations: ALLOCATIONS,
    balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
    vestingStartTimestamp: VESTING_START_TIMESTAMP
  });
  const ROOT = tree.getHexRoot();

  const proofSupply = tree.getHexProof(
    tree.balancehash(parseEther(ALLOCATION_TOTAL_SUPPLY.toString()))
  );

  if(!network.tags.local && !network.tags.staging) {
    throw new Error('Before moving to productive environment run a double validation of the variables/settings and then remove this error');
  }

  await deploy('MLTToken', {
    log: true,
    from: deployer,
    args: [
      // string memory _name
      'MLTToken',
      // string memory _symbol
      'MLT',
      // string memory _supply
      ALLOCATION_TOTAL_SUPPLY,
      // _vestingTreeRoot Vesting tree root hash.
      ROOT,
      // _vestingStartTimestamp Timestamp of vesting start as seconds since the Unix epoch
      VESTING_START_TIMESTAMP,
      // _proofSupply Proof of total supply
      proofSupply,
    ],
  })
}

func.tags = ['MLTToken'];

export default func;