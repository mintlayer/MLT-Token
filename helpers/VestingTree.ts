import keccak256 from 'keccak256';
import { BN } from 'ethereumjs-util';
import { MerkleTree } from 'merkletreejs';
import { hexToBytes, soliditySha3 } from 'web3-utils';

import {
  ALLOCATIONS,
  ONE_MONTH_IN_SECONDS,
  ALLOCATION_TOTAL_SUPPLY,
} from '../constants';

import type {
  VestingUsers,
  GroupedUsers,
  VestingSchedule,
  VestingTreeParams,
  UserCountByVestingType,
} from '../typescript/vestingTree';

function vestingScheduleHash(item: VestingSchedule) {
  if(!item) return '';

  const hash = soliditySha3(
    { t: 'address', v: item.address },
    {t: "uint256", v: item.amount },
    {t: "uint256", v: item.vestingCliff },
  )

  return hash;
}

export class VestingTree extends MerkleTree {
  userNodes: VestingUsers[] = [];
  groupedUsers: GroupedUsers = {};
  vestingSchedules: VestingSchedule[] = [];

  constructor(params: VestingTreeParams) {
    const { users } = params;

    const userNodes: VestingUsers[] = [];
    const groupedUsers: GroupedUsers = {};
    const vestingSchedules: VestingSchedule[] = [];

    const userCountByVestingType: UserCountByVestingType = {};

    // Calculate the number of existing users for each allocation type
    users.forEach((user) => {
      const { address, allocationsType } = user;

      // Initializing group by user
      groupedUsers[address] = [];

      if(!userCountByVestingType[allocationsType]) {
        userCountByVestingType[allocationsType] = 1;
      } else {
        userCountByVestingType[allocationsType] += 1;
      }
    })

    const leaves: string[] = [];

    users.forEach((user) => {
      userNodes.push(user);

      const { allocationsType, address } = user;
      const { percentage, vestingInfo } = ALLOCATIONS[allocationsType];

      const vestingShare = ALLOCATION_TOTAL_SUPPLY * percentage;

      // Total users for current allocation type
      const TOTAL_USERS = userCountByVestingType[allocationsType];

      if(vestingInfo == 'unlocked') {
        const amount = vestingShare / TOTAL_USERS;

        const _vestingSchedule = {
          amount,
          address,
          vestingCliff: 0,
        }

        vestingSchedules.push(_vestingSchedule);
        groupedUsers[address].push(_vestingSchedule);
        leaves.push(vestingScheduleHash(_vestingSchedule));
      }

      if(vestingInfo != 'unlocked') {
        const { cliff, monthly, months, unlocking } = vestingInfo;

        if(unlocking > 0) {
          const amount = vestingShare * unlocking / TOTAL_USERS;

          const _vestingSchedule = {
            amount,
            address,
            vestingCliff: 0,
          }

          vestingSchedules.push(_vestingSchedule);
          groupedUsers[address].push(_vestingSchedule);
          leaves.push(vestingScheduleHash(_vestingSchedule));
        }

        months.map((month, monthIndex) => {
          // Array with the length of the months in which the allocation releases will be made
          [...new Array(month).keys()].forEach((cycle) => {
            const _monthly = monthly[monthIndex];
            const amount = vestingShare * _monthly / TOTAL_USERS;

            const vestingCliff = cliff + (ONE_MONTH_IN_SECONDS * cycle);

            const _vestingSchedule = {
              amount,
              address,
              vestingCliff,
            }

            vestingSchedules.push(_vestingSchedule);
            groupedUsers[address].push(_vestingSchedule);
            leaves.push(vestingScheduleHash(_vestingSchedule));
          })
        })
      }
    })

    super(leaves, keccak256, { sortPairs: true });
    this.userNodes = userNodes;
    this.groupedUsers = groupedUsers;
    this.vestingSchedules = vestingSchedules;
  }

  getUserAllocations(address: string) {
    return this.groupedUsers[address] || [];
  }

  hash(item: VestingSchedule) {
    return vestingScheduleHash(item);
  }

  getHexProofWithMetadata(item: VestingSchedule) {
    const { amount, vestingCliff } = item;

    const leaf = this.hash(item);
    const proof = this.getHexProof(leaf);

    const amountBN = new BN(amount);
    const vestingCliffBN = new BN(vestingCliff);

    const prefix = [
      amountBN.toBuffer(null, 32),
      vestingCliffBN.toBuffer(null, 32),
    ];

    const proofBuffer = proof.map((el) => Buffer.from(hexToBytes(el)));
    const prefixWithProof = prefix.concat(proofBuffer);

    return this.bufArrToHex(prefixWithProof);
  }

  bufArrToHex(arr: Buffer[]) {
    if(arr.some(el => !Buffer.isBuffer(el))) {
      throw new Error('Array is not an array of buffers');
    }

    return '0x' + arr.map(el => el.toString('hex')).join('');
  }
}