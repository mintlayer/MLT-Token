import { VestingTree } from '../helpers/VestingTree';
import { VESTING_START_TIMESTAMP } from '../constants';
import { VESTING_USERS } from '../addressbook/vestingAddresses';

/* types */
import type { Accounts } from 'typescript/hardhat';
import type { DeployFunction } from 'hardhat-deploy/types';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  const tree = new VestingTree({ users: VESTING_USERS });
  const ROOT = tree.getHexRoot();

  // this contract is upgradeable through uups (EIP-1822)
  await deploy('MLTTokenV1', {
    log: true,
    from: deployer,
    proxy: {
      proxyContract: 'UUPSProxy',
      execute: {
        init: {
          methodName: 'initialize', // method to be execute when the proxy is deployed
          args: [
            'Token MLTToken', // string memory _name
            'MLTToken', // string memory _symbol
            400_000_000, // string memory _supply
            ROOT, // _vestingTreeRoot Vesting tree root hash.
            VESTING_START_TIMESTAMP
          ],
        }
      }
    }
  })
}

func.tags = ['MLTTokenV1'];

export default func;