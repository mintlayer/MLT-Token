import { IS_PRODUCTION } from '../constants';
import { VESTING_USERS_TESTNET } from './vestingAddressesTestnet';
import { VESTING_USERS_MAINNET } from './vestingAddressesMainnet';

/* types */
import { VestingUsers } from "../typescript/vestingTree";

// Once the development is finished and the corresponding tests for testnet are done, the process must be repeated for the mainnet addresses.
export const VESTING_USERS: VestingUsers[] = IS_PRODUCTION
  ? VESTING_USERS_MAINNET
  : VESTING_USERS_TESTNET;