import { ALLOCATIONS, IS_PRODUCTIVE } from '../constants';
import { VESTING_USERS_TESTNET } from './vestingAddressesTestnet';
import { VESTING_USERS_MAINNET } from './vestingAddressesMainnet';

/* types */
import { TreasurerData, VestingType, VestingUsers } from "@mintlayer/vesting-tree/dist/types";

// Once the development is finished and the corresponding tests for testnet are done, the process must be repeated for the mainnet addresses.
export const VESTING_USERS: VestingUsers[] = IS_PRODUCTIVE
  ? VESTING_USERS_MAINNET
  : VESTING_USERS_TESTNET;

const preSeed = ALLOCATIONS.preSeed.vestingInfo as VestingType;
const seed = ALLOCATIONS.seed.vestingInfo as VestingType;
const longVesting = ALLOCATIONS.longVesting.vestingInfo as VestingType;
const shortVesting = ALLOCATIONS.shortVesting.vestingInfo as VestingType;
const marketing = ALLOCATIONS.marketing.vestingInfo as VestingType;
const development = ALLOCATIONS.development.vestingInfo as VestingType;
const community = ALLOCATIONS.community.vestingInfo as VestingType;
const teamAndAdvisors = ALLOCATIONS.teamAndAdvisors.vestingInfo as VestingType;
const companyReserve = ALLOCATIONS.companyReserve.vestingInfo as VestingType;

export const TREASURERS_TESTNET: TreasurerData[] = [
  { // Fatima - preSeed
    address: '0x8504bc7f590DB73b423BdC866102a8e77722d41e',
    vestingType: preSeed,
  },
  { // Fatima - preSeed
    address: '0x929289F5D75D03c0716bdC520282d616FF796FdE',
    vestingType: preSeed,
  },
  { // Fatima - Seed
    address: '0xBc67849Ae7A1dc56b457eC4FAA504023f6cBDDb5',
    vestingType: seed,
  },
  { // Fatima - longVesting
    address: '0xF904533b0e43cF092d4FF33faD2c7cB5EA64a692',
    vestingType: longVesting,
  },
  { // Fatima - shortVesting
    address: '0x1a6FbD3a97c0B736E0d4D54c7a337883D0E73C8e',
    vestingType: shortVesting,
  },
  { // Fatima - marketing
    address: '0x71adb24619B83bE30cf2f3D2bcb9269e1706EC6C',
    vestingType: marketing,
  },
  { // Fatima - development
    address: '0x4DdDa2300f0DaCE473A7A988C75C2EfbFA7faB42',
    vestingType: development,
  },
  { // Fatima - community
    address: '0x99717EB70c74C85518838C421B2123e4592b9554',
    vestingType: community,
  },
  { // Fatima - teamAndAdvisors
    address: '0x75ba58d8CB7E506B72DBaf03980304c87695ebbA',
    vestingType: teamAndAdvisors,
  },
  { // Fatima - companyReserve
    address: '0x371BADd68F0A4B48119C71A98E93f91D460E5458',
    vestingType: companyReserve,
  },
  {
    address: '0xC076fDba9aC2c1144f52ee2aC9BD4f3317F79182',
    vestingType: preSeed,
  },
  {
    address: '0xe2A234EfF72C66B5Fa77D22449DaDcDC5f6558a9',
    vestingType: seed,
  },
  {
    address: '0x7179fDEf7bcC5a81ca87809068E56235b2A98225',
    vestingType: longVesting,
  },
  {
    address: '0x974F4D27550df2a89f682aB9A3e64920293a300d',
    vestingType: shortVesting,
  },
  {
    address: '0xd51c8fccbd3CdC5484baaac3B7cEaF8b2b364a24',
    vestingType: marketing,
  },
  {
    address: '0x4a5F795eD0905019c947C8BcC3d026498DE0B849',
    vestingType: development,
  },
  {
    address: '0x95CB237CEbcDeEfF8862727c874B2B4d7225bE2A',
    vestingType: community,
  },
  {
    address: '0x5ae5851Bb09e99e7c19e12986142B5A8053bdC8e',
    vestingType: teamAndAdvisors,
  },
  {
    address: '0x2392EEEfcfcC42118cB11ACE7e6dB3cAA6Dc4E0C',
    vestingType: companyReserve,
  },
];

export const TREASURERS_MAINNET: TreasurerData[] = [];

export const TREASURERS: TreasurerData[] = IS_PRODUCTIVE ? TREASURERS_MAINNET : TREASURERS_TESTNET;