import { VestingTree } from '../helpers/VestingTree';
import { VESTING_USERS } from '../addressbook/vestingAddresses';
import { ALLOCATION_TOTAL_SUPPLY, VESTING_START_TIMESTAMP } from '../constants';

/* types */
import type { Accounts } from 'typescript/hardhat';
import type { DeployFunction } from 'hardhat-deploy/types';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  const tree = new VestingTree({ users: VESTING_USERS });
  const ROOT = tree.getHexRoot();

  if(!network.tags.local && !network.tags.staging) {
    throw new Error('Before moving to productive environment run a double validation of the variables/settings and then remove this error');
  }

  await deploy('MLTTokenV1', {
    log: true,
    from: deployer,
    args: [
      'MLTToken', // string memory _name
      'MLT', // string memory _symbol
      ALLOCATION_TOTAL_SUPPLY, // string memory _supply
      ROOT, // _vestingTreeRoot Vesting tree root hash.
      VESTING_START_TIMESTAMP
    ],
  })
}

func.tags = ['MLTTokenV1'];

export default func;