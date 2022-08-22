import { Accounts } from 'typescript/hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  if(!network.tags.local && !network.tags.staging) {
    throw new Error('Before moving to productive environment run a double validation of the variables/settings and then remove this error');
  }

  // Contract used for testing purposes only
  await deploy('USDC', {
    log: true,
    from: deployer,
    args: [
      'Token USDC', // string memory name_
      'USDC', // string memory symbol_
    ],
    contract: 'ERC20Mock'
  })
}

func.tags = ['USDC'];

export default func;