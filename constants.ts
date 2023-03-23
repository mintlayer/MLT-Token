import * as dotenv from 'dotenv';
dotenv.config();

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

import { parseEther } from 'ethers/lib/utils';

/* types */
import type { NetworksInfo } from './typescript/constants';
import type {
  Allocation,
  AllocationsType,
  PoolsSupply,
  VestingTypes
} from "@mintlayer/vesting-tree/dist/types";

export const {
  REPORT_GAS,
  TYPECHAIN_ON,
  WALLET_PRIVKEY = '',
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API,
  ETHERSCAN_FTM_API_KEY = '',
  ETHERSCAN_FUJI_API_KEY = '',
  MUMBAI_ALCHEMY_API_KEY,
  TREASURER_WALLET_PRIVKEY = '',
  ETHERSCAN_MUMBAI_API_KEY = '',
  ETHERSCAN_MAINNET_API_KEY = '',
  ETH_MAINNET_ALCHEMY_API_KEY,
} = process.env;

export const IS_PRODUCTIVE = true;

export const BATCH_SIZE = 50;
export const GAS_LIMIT = 3_000_000;

export const ALLOCATION_TOTAL_SUPPLY = 400_000_000;

// Timestamp of vesting start as seconds since the Unix epoch
export const VESTING_START_TIMESTAMP = IS_PRODUCTIVE
  ? dayjs.utc('2023-03-21 08:00:00')
  : dayjs.utc('2023-03-21 00:00:00');

if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid');

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
    // 4 months represented in seconds. Months of 30 days are assumed.
    cliff: VESTING_START_TIMESTAMP.add(4, 'months').diff(VESTING_START_TIMESTAMP, 'seconds'),
    label: '4',
  },
  type5: {
    unlocking: 0, // 0%
    monthly: [0.02, 0.04], // 2% monthly over 10 months, then 4% over 20 months
    months: [10, 20],
    // 4 months represented in seconds. Months of 30 days are assumed.
    cliff: VESTING_START_TIMESTAMP.add(4, 'months').diff(VESTING_START_TIMESTAMP, 'seconds'),
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

type Allocations = Record<AllocationsType, Allocation & { label: string }>;

export const ALLOCATIONS: Allocations = {
  preSeed: {
    percentage: parseEther(`${POOLS_SUPPLY.preSeed / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type4,
    label: 'Pre-Seed'
  },
  seed: {
    percentage: parseEther(`${POOLS_SUPPLY.seed / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type2,
    label: 'Seed'
  },
  marketing: {
    percentage: parseEther(`${POOLS_SUPPLY.marketing / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type1,
    label: 'Marketing'
  },
  longVesting: {
    percentage: parseEther(`${POOLS_SUPPLY.longVesting / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type5,
    label: 'Strategic sale - Long Vesting'
  },
  shortVesting: {
    percentage: parseEther(`${POOLS_SUPPLY.shortVesting / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type2,
    label: 'Strategic sale - Short Vesting'
  },
  development: {
    percentage: parseEther(`${POOLS_SUPPLY.development / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type4,
    label: 'Development'
  },
  community: {
    percentage: parseEther(`${POOLS_SUPPLY.community / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type3,
    label: 'Community'
  },
  companyReserve: {
    percentage: parseEther(`${POOLS_SUPPLY.companyReserve / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type5,
    label: 'Company Reserve'
  },
  teamAndAdvisors: {
    percentage: parseEther(`${POOLS_SUPPLY.teamAndAdvisors / ALLOCATION_TOTAL_SUPPLY}`),
    vestingInfo: VESTING_TYPES.type4,
    label: 'Team & Advisors'
  },
}

export const NETWORKS: NetworksInfo = {
  mainnet: {
    name: 'Red principal de Ethereum',
    blockExplorerUrl: 'https://etherscan.io',
    rpcUrl: '',
    chainId: 1,
    nativeCurrency: {
      decimals: 18,
      name: 'ETH',
      symbol: 'ETH'
    }
  },
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
  },
  mumbai: {
    name: 'Polygon Mumbai',
    blockExplorerUrl: 'https://mumbai.polygonscan.com',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    chainId: 80001,
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC'
    }
  },
  hardhat: {
    name: 'harhat',
    blockExplorerUrl: '',
    rpcUrl: 'http://127.0.0.1:8545',
    chainId: 0,
    nativeCurrency: {
      decimals: 18,
      name: 'ETH',
      symbol: 'ETH'
    }
  },
}