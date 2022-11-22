import * as dotenv from 'dotenv';
dotenv.config();

import { parseEther } from 'ethers/lib/utils';

/* types */
import type { NetworksInfo } from './typescript/constants';
import type { Allocations, PoolsSupply, VestingTypes } from "@mintlayer/vesting-tree/dist/types";

export const {
  REPORT_GAS,
  TYPECHAIN_ON,
  INFURA_API_KEY,
  WALLET_PRIVKEY,
  ALCHEMY_API_KEY,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API,
  ETHERSCAN_FTM_API_KEY,
  ETHERSCAN_FUJI_API_KEY,
  TREASURER_WALLET_PRIVKEY,
} = process.env;

export const IS_PRODUCTION = false;

if(IS_PRODUCTION) {
  throw new Error('Before moving to productive environment run a double validation of the variables/settings and then remove this error');
}

export const BATCH_SIZE = 50;
export const GAS_LIMIT = 3_000_000;

export const ONE_MONTH_IN_SECONDS = IS_PRODUCTION
  // (2592000) A month of 30 days is assumed.
  ? 60 * 60 * 24 * 30
  // (360) For testing/simulation purposes, a month is represented as an hour. With the
  // following scalar representation we can have a period of 12 months (one year) in 12 hours
  : 60 * 60 * 24;

export const ALLOCATION_TOTAL_SUPPLY = 400_000_000;

// Timestamp of vesting start as seconds since the Unix epoch
export const VESTING_START_TIMESTAMP = IS_PRODUCTION
  ? null
  : Math.ceil(+new Date() / 1000);

if(IS_PRODUCTION && !VESTING_START_TIMESTAMP) {
  throw new Error('No date was defined to start the vesting');
}

export const VESTING_TYPES: VestingTypes = {
  unlocked: 'unlocked',
  type1: {
    unlocking: 0.12, // 12%
    monthly: [0.08], // 8% monthly over 11 months
    months: [11],
    cliff: 0,
    label: '1',
  },
  type2: {
    unlocking: 0.1, // 10%
    monthly: [0.06], // 6% monthly over 15 months
    months: [15],
    cliff: 0,
    label: '2',
  },
  type3: {
    unlocking: 0.1, // 10%
    monthly: [0.05], // 5% monthly over 18 months
    months: [18],
    cliff: 0,
    label: '3',
  },
  type4: {
    unlocking: 0, // 0%
    monthly: [0.05], // 5% monthly over 20 months
    months: [20],
    cliff: ONE_MONTH_IN_SECONDS * 4, // 4 months represented in milliseconds. Months of 30 days are assumed.
    label: '4',
  },
  type5: {
    unlocking: 0, // 0%
    monthly: [0.02, 0.04], // 2% monthly over 10 months, then 4% over 20 months
    months: [10, 20],
    cliff: ONE_MONTH_IN_SECONDS * 4, // 4 months represented in milliseconds. Months of 30 days are assumed.
    label: '5',
  },
}

export const POOLS_SUPPLY: PoolsSupply = {
  preSeed: 2_500_000,
  seed: 54_600_000,
  longVesting: 52_000_000,
  shortVesting: 26_000_000,
  marketing: 48_000_000,
  development: 40_000_000,
  community: 20_000_000,
  teamAndAdvisors: 50_000_000,
  companyReserve: 106_900_000,
}

export const ALLOCATIONS: Allocations = {
  preSeed: {
    percentage: parseEther(`${POOLS_SUPPLY.preSeed / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type4
  },
  seed: {
    percentage: parseEther(`${POOLS_SUPPLY.seed / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type2
  },
  marketing: {
    percentage: parseEther(`${POOLS_SUPPLY.marketing / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type1
  },
  longVesting: {
    percentage: parseEther(`${POOLS_SUPPLY.longVesting / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type5
  },
  shortVesting: {
    percentage: parseEther(`${POOLS_SUPPLY.shortVesting / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type2
  },
  development: {
    percentage: parseEther(`${POOLS_SUPPLY.development / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type4
  },
  community: {
    percentage: parseEther(`${POOLS_SUPPLY.community / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type3
  },
  companyReserve: {
    percentage: parseEther(`${POOLS_SUPPLY.companyReserve / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type5
  },
  teamAndAdvisors: {
    percentage: parseEther(`${POOLS_SUPPLY.teamAndAdvisors / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type4
  },
}

export const NETWORKS: NetworksInfo = {
  fuji: {
    name: 'Avalanche Fuji Testnet',
    blockExplorerUrl: 'https://testnet.snowtrace.io',
    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    chainId: 43113,
    nativeCurrency: {
      decimals: 18,
      name: 'AVAX',
      symbol: 'AVAX'
    }
  }
}