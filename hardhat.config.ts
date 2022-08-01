import * as dotenv from 'dotenv';
dotenv.config();

import { HardhatUserConfig } from 'hardhat/types';

// Plugins
import 'hardhat-deploy';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/hardhat-upgrades';

const {
  REPORT_GAS,
  TYPECHAIN_ON,
  INFURA_API_KEY,
  WALLET_PRIVKEY,
  ALCHEMY_API_KEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API,
} = process.env;

// Tasks
if(!TYPECHAIN_ON) {
  require('./tasks/helpers');
  require('./tasks/merketree');
}


function getProviderInfuraURL(network: string) {
  return `https://${network}.infura.io/v3/${INFURA_API_KEY}`
}

// Config
const config: HardhatUserConfig = {
  paths: {
    tests: 'tests',
    deploy: 'deploy',
    sources: 'contracts',
    deployments: 'deployments',
    artifacts: 'build/contracts',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.8',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      tags: ['local'],
      loggingEnabled: false,
      forking: {
        blockNumber: 15200000,
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      }
    },
    ropsten: {
      tags: ['local'],
      loggingEnabled: false,
      accounts: [ WALLET_PRIVKEY ],
      url: getProviderInfuraURL('ropsten'),
    },
    rinkeby: {
      tags: ['local'],
      accounts: [ WALLET_PRIVKEY ],
      url: getProviderInfuraURL('rinkeby'),
    },
  },
  typechain: {
    target: 'ethers-v5',
    outDir: 'build/types',
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: 'USD',
    showTimeSpent: true,
    coinmarketcap: COINMARKETCAP_API,
    enabled: REPORT_GAS ? true : false,
  },
  namedAccounts: {
    deployer: 0,
    user1: 1,
    user2: 2,
    user3: 3,
    user4: 4,
  },
  mocha: {
    timeout: 1000 * 60 * 60 * 1, // 1 hour in milliseconds
  }
}

export default config;
