import { ALLOCATIONS, IS_PRODUCTIVE } from '../constants';
import { VESTING_USERS_MAINNET, TREASURY_MAINNET } from './vestingAddressesMainnet';
import { VESTING_USERS_TESTNET, TREASURY_TESTNET } from './vestingAddressesTestnet';

/* types */
import { TreasurerData, VestingUsers } from "@mintlayer/vesting-tree/dist/types";

// Once the development is finished and the corresponding tests for testnet are done, the process must be repeated for the mainnet addresses.
export const VESTING_USERS: VestingUsers[] = IS_PRODUCTIVE
  ? VESTING_USERS_MAINNET
  : VESTING_USERS_TESTNET;

export const TREASURERS: TreasurerData[] = [];
const _treasurers = IS_PRODUCTIVE ? TREASURY_MAINNET : TREASURY_TESTNET;

for(const { address, allocationsType } of _treasurers) {
  const vestingType = ALLOCATIONS[allocationsType].vestingInfo;

  if(vestingType == 'unlocked') continue;
  TREASURERS.push({ address, vestingType });
}