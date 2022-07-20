import { ALLOCATIONS } from "../constants";
import type { Options } from "merkletreejs/dist/MerkleTree";

export type AllocationsType = keyof typeof ALLOCATIONS;

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
  address: string;
  allocationsType: AllocationsType;
}

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type UserCountByVestingType = PartialRecord<AllocationsType, number>;

export type GroupedUsers = Record<string, VestingSchedule[]>;

export interface VestingSchedule {
  address: string; // Address of beneficiary
  amount: number; // Amount of tokens to be released
  vestingCliff: number; // Lock delay for release
}

export interface VestingTreeParams {
  users: VestingUsers[];
}