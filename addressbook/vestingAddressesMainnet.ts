import { VestingUsers } from "../typescript/vestingTree";

const VC: VestingUsers[] = [];
const CONTRIBUTORS: VestingUsers[] = [];
const BUYERS: VestingUsers[] = [];
const PROFILED_USERS: VestingUsers[] = [];

export const VESTING_USERS_MAINNET: VestingUsers[] = [
  ...VC,
  ...BUYERS,
  ...CONTRIBUTORS,
  ...PROFILED_USERS,
]