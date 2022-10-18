import keccak256 from 'keccak256';
import { BigNumber } from 'ethers';
import { BN } from 'ethereumjs-util';
import { MerkleTree } from 'merkletreejs';
import { parseEther } from 'ethers/lib/utils';
import { hexToBytes, soliditySha3 } from 'web3-utils';

import {
  ALLOCATIONS,
  ONE_MONTH_IN_SECONDS,
  ALLOCATION_TOTAL_SUPPLY,
} from '../constants';

import type {
  VestingUsers,
  GroupedByUsers,
  GroupedByCliff,
  VestingSchedule,
  VestingTreeParams,
  UserCountByVestingType,
  AllocationTypeMapCliff,
} from '../typescript/vestingTree';

function vestingScheduleHash(item: VestingSchedule) {
  if(!item) return '';

  const hash = soliditySha3(
    { t: 'address', v: item.address },
    { t: "uint256", v: item.amount },
    { t: "uint256", v: item.vestingCliff },
  )

  return hash;
}

export class VestingTree extends MerkleTree {
  userNodes: VestingUsers[] = [];
  groupedByUsers: GroupedByUsers = {};
  groupedByCliff: GroupedByCliff = {};
  vestingSchedules: VestingSchedule[] = [];
  allocationTypeMapCliff: AllocationTypeMapCliff = {};

  constructor(params: VestingTreeParams) {
    const { users } = params;

    const userNodes: VestingUsers[] = [];
    const groupedByUsers: GroupedByUsers = {};
    const groupedByCliff: GroupedByCliff = {};
    const vestingSchedules: VestingSchedule[] = [];
    const allocationTypeMapCliff: AllocationTypeMapCliff = {};

    const userCountByVestingType: UserCountByVestingType = {};

    Object.keys(ALLOCATIONS).forEach((el) => {
      // Initializing group by allocation type
      allocationTypeMapCliff[el] = {};
    })

    // Calculate the number of existing users for each allocation type
    users.forEach((user) => {
      const { address, allocationsType } = user;

      // Initializing group by user
      groupedByUsers[address] = [];

      if(!userCountByVestingType[allocationsType]) {
        userCountByVestingType[allocationsType] = 1;
      } else {
        userCountByVestingType[allocationsType] += 1;
      }
    })


    const leaves: string[] = [];

    for(const user of users) {
      try {
        userNodes.push(user);
        const { allocationsType, address, weight = BigNumber.from(0) } = user;

        const vestingCliffDefault = 0;
        const _vestingSchedule: VestingSchedule = {
          address,
          amount: '0',
          vestingCliff: vestingCliffDefault,
          allocationsType,
        }

        /**
         * Amount of tokens to be awarded.
         * IMPORTANT: if this value exists and is greater than zero, it must have priority over
         * the weight (%)
         */
        const _amount = user.amount || BigNumber.from(0);

        // Multiplier to prevent underflow for numbers too small to use with BigNumber
        const DENOMINATOR = 10_000;

        const { percentage, vestingInfo } = ALLOCATIONS[allocationsType];

        // Divide by 1 ETH which is the pool percentage multiplier
        const poolShareBN = percentage.mul(ALLOCATION_TOTAL_SUPPLY).div(parseEther('1'));

        // Total users for current allocation type
        const TOTAL_USERS = BigNumber.from(userCountByVestingType[allocationsType]);

        if(vestingInfo == 'unlocked') {
          let amount = '';

          if(_amount.gt(0)) {
            amount = _amount.toString();
          } else {
            amount = poolShareBN.mul(weight).toString();
          }

          _vestingSchedule.amount = amount;

          if(!groupedByCliff.hasOwnProperty(vestingCliffDefault)) {
            // Initializing group by cliff
            groupedByCliff[vestingCliffDefault] = [];
          }
          
          if(!allocationTypeMapCliff[allocationsType].hasOwnProperty(vestingCliffDefault)) {
            // Initializing group by allocation type and cliff
            allocationTypeMapCliff[allocationsType][vestingCliffDefault] = [];
          }

          vestingSchedules.push(_vestingSchedule);
          groupedByUsers[address].push(_vestingSchedule);
          leaves.push(vestingScheduleHash(_vestingSchedule));
          groupedByCliff[vestingCliffDefault].push(_vestingSchedule);
          allocationTypeMapCliff[allocationsType][vestingCliffDefault].push(_vestingSchedule);
        }

        if(vestingInfo != 'unlocked') {
          const { cliff, monthly, months, unlocking } = vestingInfo;

          if(!groupedByCliff.hasOwnProperty(vestingCliffDefault)) {
            // Initializing group by cliff
            groupedByCliff[vestingCliffDefault] = [];
          }

          if(!allocationTypeMapCliff[allocationsType].hasOwnProperty(vestingCliffDefault)) {
            // Initializing group by allocation type and cliff
            allocationTypeMapCliff[allocationsType][vestingCliffDefault] = [];
          }

          if(unlocking > 0) {
            let amount = '';

            if(_amount.gt(0)) {
              amount = _amount.mul(unlocking * DENOMINATOR)
                .div(DENOMINATOR)
                .toString();
            } else {
              let amountPerUser = poolShareBN.mul(unlocking * DENOMINATOR)
                .div(DENOMINATOR)
                .mul(weight);
              amount = amountPerUser.toString();
            }

            _vestingSchedule.amount = amount;

            vestingSchedules.push(_vestingSchedule);
            groupedByUsers[address].push(_vestingSchedule);
            leaves.push(vestingScheduleHash(_vestingSchedule));
            groupedByCliff[vestingCliffDefault].push(_vestingSchedule);
            allocationTypeMapCliff[allocationsType][vestingCliffDefault].push(_vestingSchedule);
          }

          months.map((month, monthIndex) => {
            const prevCycle = (monthIndex > 0) ? months[monthIndex - 1] : 0;

            // Array with the length of the months in which the allocation releases will be made
            [...new Array(month).keys()].forEach((cycle) => {
              let amount = '';
              const _monthly = monthly[monthIndex];

              if(_amount.gt(0)) {
                amount = _amount.mul(_monthly * DENOMINATOR).div(DENOMINATOR).toString();
              } else {
                const amountPerUser = poolShareBN.mul(_monthly * DENOMINATOR).mul(weight);
                amount = amountPerUser.div(DENOMINATOR).toString();
              }

              // 1 must be added because the cycle starts at 0.
              const vestingCliff = cliff + (ONE_MONTH_IN_SECONDS * (cycle + 1 + prevCycle));

              const _vestingSchedule = {
                amount,
                address,
                vestingCliff,
                allocationsType,
              }

              if(!groupedByCliff.hasOwnProperty(vestingCliff)) {
                // Initializing group by cliff
                groupedByCliff[vestingCliff] = [];
              }

              if(!allocationTypeMapCliff[allocationsType].hasOwnProperty(vestingCliff)) {
                // Initializing group by allocation type and cliff
                allocationTypeMapCliff[allocationsType][vestingCliff] = [];
              }

              vestingSchedules.push(_vestingSchedule);
              groupedByUsers[address].push(_vestingSchedule);
              leaves.push(vestingScheduleHash(_vestingSchedule));
              groupedByCliff[vestingCliff].push(_vestingSchedule);
              allocationTypeMapCliff[allocationsType][vestingCliff].push(_vestingSchedule);
            })
          })
        }
      } catch(error) {
        console.log('> VestingTree - constructor:', error);
        break;
      }
    }

    super(leaves, keccak256, { sortPairs: true });
    this.userNodes = userNodes;
    this.groupedByCliff = groupedByCliff;
    this.groupedByUsers = groupedByUsers;
    this.vestingSchedules = vestingSchedules;
    this.allocationTypeMapCliff = allocationTypeMapCliff;
  }

  getUserAllocations(address: string) {
    return this.groupedByUsers[address] || [];
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

  getCliffs() {
    const _cliff: number[] = [];
    const mappingCliff: { [cliff: string]: boolean } = {};

    this.vestingSchedules.forEach((vestingSchdule) => {
      const { vestingCliff } = vestingSchdule;

      if(!mappingCliff[vestingCliff]) {
        _cliff.push(vestingCliff);
        mappingCliff[vestingCliff] = true;
      }
    });

    return _cliff.sort((a, b) => {
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    })
  }
}