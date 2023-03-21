/* plugins */
import 'hardhat-deploy';
import 'solidity-coverage';
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
  IS_PRODUCTIVE,
  WALLET_PRIVKEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API,
  ETHERSCAN_FTM_API_KEY,
  ETHERSCAN_FUJI_API_KEY,
  MUMBAI_ALCHEMY_API_KEY,
  TREASURER_WALLET_PRIVKEY,
  ETHERSCAN_MUMBAI_API_KEY,
  ETH_MAINNET_ALCHEMY_API_KEY,
} from './constants';

/* tasks */
if(!TYPECHAIN_ON) {
  require('./tasks/helpers');
  require('./tasks/merkletree');
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
        version: '0.8.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: '0.8.0',
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
    mainnet: {
      loggingEnabled: false,
      accounts: [ WALLET_PRIVKEY, TREASURER_WALLET_PRIVKEY ],
      url: `https://eth-mainnet.g.alchemy.com/v2/${ETH_MAINNET_ALCHEMY_API_KEY}`,
    },
    hardhat: {
      tags: ['local'],
      loggingEnabled: false,
      accounts: [
        {
          privateKey: WALLET_PRIVKEY,
          balance: '100000000000000000000000',
        },
        {
          privateKey: TREASURER_WALLET_PRIVKEY,
          balance: '100000000000000000000000',
        },
      ],
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ETH_MAINNET_ALCHEMY_API_KEY}`,
      }
    },
    fuji: {
      chainId: 43113,
      tags: ['staging'],
      loggingEnabled: true,
      accounts: [ WALLET_PRIVKEY, TREASURER_WALLET_PRIVKEY ],
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
    },
    fantomtestnet: {
      chainId: 4002,
      tags: ['staging'],
      loggingEnabled: true,
      url: "https://rpc.testnet.fantom.network",
      accounts: [ WALLET_PRIVKEY, TREASURER_WALLET_PRIVKEY ],
    },
    mumbai: {
      chainId: 80001,
      tags: ['staging'],
      url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_ALCHEMY_API_KEY}`,
      accounts: [ WALLET_PRIVKEY, TREASURER_WALLET_PRIVKEY ],
    }
  },
  typechain: {
    target: 'ethers-v5',
    outDir: 'build/types',
  },
  etherscan: {
    apiKey: {
      ftmTestnet: ETHERSCAN_FTM_API_KEY,
      avalancheFujiTestnet: ETHERSCAN_FUJI_API_KEY,
      polygonMumbai: ETHERSCAN_MUMBAI_API_KEY,
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
    treasurer1: 1,
    user1: 2,
    user2: 3,
    user3: 4,
  },
  mocha: {
    timeout: 1000 * 60 * 60 * 1, // 1 hour in milliseconds
  }
}

export default config;
