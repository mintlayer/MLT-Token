import { Accounts } from 'typescript/hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  // Contract used for testing purposes only
  await deploy('MLTToken', {
    log: true,
    from: deployer,
    args: [
      'Token MLT', // string memory name_
      'MLT', // string memory symbol_
    ],
    contract: 'ERC20Mock'
  })
}

func.tags = ['MLTTokenMock'];

export default func;