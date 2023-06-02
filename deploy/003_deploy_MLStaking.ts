/* types */
import type { Accounts } from 'typescript/hardhat';
import type { DeployFunction } from 'hardhat-deploy/types';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  await deploy('MLStaking', {
    log: true,
    from: deployer,
    args: [
      // string memory _name
      'Testnet TML',
      // string memory _symbol
      'TML',
    ],
  })
}

func.tags = ['MLStaking'];

export default func;