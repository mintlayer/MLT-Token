/* plugins */
import 'hardhat-deploy';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/hardhat-upgrades';

/* types */
import type { HardhatUserConfig } from 'hardhat/types';

import {
  REPORT_GAS,
  TYPECHAIN_ON,
  IS_PRODUCTION,
  INFURA_API_KEY,
  WALLET_PRIVKEY,
  ALCHEMY_API_KEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API,
  ETHERSCAN_FTM_API_KEY,
  ETHERSCAN_FUJI_API_KEY,
} from './constants';

/* tasks */
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
            runs: 10000,
          },
        },
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: '0.6.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: '0.6.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
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
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      }
    },
    ropsten: {
      tags: ['staging'],
      loggingEnabled: false,
      accounts: [ WALLET_PRIVKEY ],
      url: getProviderInfuraURL('ropsten'),
    },
    rinkeby: {
      tags: ['staging'],
      accounts: [ WALLET_PRIVKEY ],
      url: getProviderInfuraURL('rinkeby'),
    },
    fuji: {
      chainId: 43113,
      tags: ['staging'],
      loggingEnabled: true,
      accounts: [ WALLET_PRIVKEY ],
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
    },
    fantomtestnet: {
      chainId: 4002,
      tags: ['staging'],
      loggingEnabled: true,
      url: "https://rpc.testnet.fantom.network",
      accounts: [ WALLET_PRIVKEY ],
    },
  },
  typechain: {
    target: 'ethers-v5',
    outDir: 'build/types',
  },
  etherscan: {
    apiKey: {
      ftmTestnet: ETHERSCAN_FTM_API_KEY,
      avalancheFujiTestnet: ETHERSCAN_FUJI_API_KEY,
    }
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
