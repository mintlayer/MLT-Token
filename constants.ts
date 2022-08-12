import { VestingTypes } from "typescript/vestingTree"

export const BATCH_SIZE = 500;
export const ONE_MONTH_IN_SECONDS = 2592000; // A month of 30 days is assumed.
export const ALLOCATION_TOTAL_SUPPLY = 400_000_000;
export const VESTING_START_TIMESTAMP = 1658450304; // Timestamp of vesting start as seconds since the Unix epoch

export const VESTING_TYPES: VestingTypes = {
  unlocked: 'unlocked',
  type1: {
    unlocking: 0.12, // 12%
    monthly: [0.08], // 8% monthly over 11 months
    months: [11],
    cliff: 0,
  },
  type2: {
    unlocking: 0.1, // 10%
    monthly: [0.06], // 6% monthly over 15 months
    months: [15],
    cliff: 0,
  },
  type3: {
    unlocking: 0.1, // 10%
    monthly: [0.05], // 5% monthly over 18 months
    months: [18],
    cliff: 0,
  },
  type4: {
    unlocking: 0, // 0%
    monthly: [0.05], // 5% monthly over 20 months
    months: [20],
    cliff: ONE_MONTH_IN_SECONDS * 4, // 4 months represented in milliseconds. Months of 30 days are assumed.
  },
  type5: {
    unlocking: 0, // 0%
    monthly: [0.02, 0.04], // 2% monthly over 10 months, then 4% over 20 months
    months: [10, 20],
    cliff: ONE_MONTH_IN_SECONDS * 4, // 4 months represented in milliseconds. Months of 30 days are assumed.
  },
}

export const ALLOCATIONS = {
  preSeed: {
    percentage: 0.0063, // 0.63%
    vestingInfo: VESTING_TYPES.type4
  },
  seed: {
    percentage: 0.1365, // 13.65%
    vestingInfo: VESTING_TYPES.type2
  },
  fairLaunch: {
    percentage: 0.0315, // 3.15%
    vestingInfo: VESTING_TYPES.type2
  },
  publicSale: {
    percentage: 0.055, // 5.5%
    vestingInfo: VESTING_TYPES.unlocked
  },
  marketing: {
    percentage: 0.12, // 12%
    vestingInfo: VESTING_TYPES.type1
  },
  longVesting: {
    percentage: 0.13, // 13%
    vestingInfo: VESTING_TYPES.type5
  },
  shortVesting: {
    percentage: 0.065, // 6.50%
    vestingInfo: VESTING_TYPES.type2
  },
  development: {
    percentage: 0.1, // 10%
    vestingInfo: VESTING_TYPES.type4
  },
  community: {
    percentage: 0.05, // 5%
    vestingInfo: VESTING_TYPES.type3
  },
  companyReserve: {
    percentage: 0.1807, // 18.07%
    vestingInfo: VESTING_TYPES.type5
  },
  teamAndAdvisors: {
    percentage: 0.125, // 12.5%
    vestingInfo: VESTING_TYPES.type4
  },
}
