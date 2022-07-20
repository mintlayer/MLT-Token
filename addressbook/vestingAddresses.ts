import { VestingUsers } from "../typescript/vestingTree";
import { VESTING_USERS_TESTNET } from './vestingAddressesTestnet';

// Once the development is finished and the corresponding tests for testnet are done, the process must be repeated for the mainnet addresses.
export const VESTING_USERS: VestingUsers[] = VESTING_USERS_TESTNET;