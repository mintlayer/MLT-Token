import { BigNumber } from "ethers";
import { POOLS_SUPPLY } from "../constants";

export type AllocationsType = keyof typeof POOLS_SUPPLY;

export type UserCountByVestingType = PartialRecord<AllocationsType, number>;

export type Allocations = Record<AllocationsType, {
  percentage: BigNumber;
  vestingInfo: VestingType | 'unlocked';
}>

export interface VestingType {
  unlocking: number; // percentage represented in floating point numbers
  monthly: number[]; // monthly release percentage list. The order is important in relation to "months"
  months: number[]; // List of number of months to release. The order is important in relation to "monthly"
  cliff: number; // Blocking delay at the time of TGE. In seconds
}

export type VestingTypeKeys =
  | 'type1'
  | 'type2'
  | 'type3'
  | 'type4'
  | 'type5'
  | 'unlocked';

export type VestingTypes = Record<VestingTypeKeys, VestingType | 'unlocked'>;

export interface VestingUsers {
  weight?: BigNumber; // Percentage that corresponds to the user
  amount?: BigNumber; // Amount of tokens to be awarded. IMPORTANT: if this value is present it must have priority over the weight (%)
  address: string;
  allocationsType: AllocationsType;
}

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type GroupedByUsers = Record<string, VestingSchedule[]>;
export type GroupedByCliff = Record<string, VestingSchedule[]>;
export type AllocationTypeMapCliff = PartialRecord<AllocationsType, GroupedByCliff>;

export interface VestingSchedule {
  address: string; // Address of beneficiary
  amount: string; // Amount of tokens to be released
  vestingCliff: number; // Lock delay for release
  allocationsType: AllocationsType;
}

export interface VestingTreeParams {
  users: VestingUsers[];
}

export interface VestingScheduleWithProof extends VestingSchedule {
  hash: string;
  proof: string[];
  transactionHash?: string;
}

// Information of a user for the dapp
export interface UserDapp {
  totalVesting: string;
  endDateTimestamp: number;
  allocationsType: AllocationsType;
  vestingSchedules: VestingScheduleWithProof[];
}

export interface VestingData {
  contractAddress: string;
  startDateTimestamp: number;
  endDateTimestamp: number;
  vestingSchedules: VestingScheduleWithProof[];
  usersByAddress: Record<string, UserDapp>;
}