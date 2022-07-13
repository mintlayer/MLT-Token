import { Accounts } from 'typescript/hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

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
          ],
        }
      }
    }
  })
}

func.tags = ['MLTTokenV1'];

export default func;