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
  VestingSchedule,
  VestingTreeParams,
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
  vestingSchedules: VestingSchedule[] = [];

  constructor(params: VestingTreeParams) {
    const { users } = params;

    const userNodes: VestingUsers[] = [];
    const groupedByUsers: GroupedByUsers = {};
    const vestingSchedules: VestingSchedule[] = [];

    const leaves: string[] = [];

    for(const user of users) {
      try {
        userNodes.push(user);
        const { allocationsType, address, weight = BigNumber.from(0) } = user;

        const _vestingSchedule: VestingSchedule = {
          address,
          amount: '0',
          vestingCliff: 0,
          allocationsType,
        }

        /**
         * Amount of tokens to be awarded.
         * IMPORTANT: if this value exists and is greater than zero, it must have priority over
         * the weight (%)
         */
        const _amount = user.amount || BigNumber.from(0);

        // Initializing group by user
        if(!groupedByUsers.hasOwnProperty(address)) {
          groupedByUsers[address] = [];
        }

        // Multiplier to prevent underflow for numbers too small to use with BigNumber
        const DENOMINATOR = 10_000;

        const { percentage, vestingInfo } = ALLOCATIONS[allocationsType];

        // Divide by 1 ETH which is the pool percentage multiplier
        const poolShareBN = percentage.mul(ALLOCATION_TOTAL_SUPPLY).div(parseEther('1'));

        if(vestingInfo == 'unlocked') {
          let amount = '';

          if(_amount.gt(0)) {
            amount = _amount.toString();
          } else {
            amount = poolShareBN.mul(weight).toString();
          }

          _vestingSchedule.amount = amount;

          vestingSchedules.push(_vestingSchedule);
          groupedByUsers[address].push(_vestingSchedule);
          leaves.push(vestingScheduleHash(_vestingSchedule));
        }

        if(vestingInfo != 'unlocked') {
          const { cliff, monthly, months, unlocking } = vestingInfo;

          if(unlocking > 0) {
            let amount = '';

            if(_amount.gt(0)) {
              amount = _amount.mul(unlocking * DENOMINATOR).div(DENOMINATOR).toString();
            } else {
              let amountPerUser = poolShareBN.mul(unlocking * DENOMINATOR).mul(weight);
              amount = amountPerUser.div(DENOMINATOR).toString();
            }

            _vestingSchedule.amount = amount;

            vestingSchedules.push(_vestingSchedule);
            groupedByUsers[address].push(_vestingSchedule);
            leaves.push(vestingScheduleHash(_vestingSchedule));
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

              const vestingCliff = cliff + (ONE_MONTH_IN_SECONDS * (cycle + prevCycle));

              const _vestingSchedule = {
                amount,
                address,
                vestingCliff,
                allocationsType,
              }

              vestingSchedules.push(_vestingSchedule);
              groupedByUsers[address].push(_vestingSchedule);
              leaves.push(vestingScheduleHash(_vestingSchedule));
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
    this.groupedByUsers = groupedByUsers;
    this.vestingSchedules = vestingSchedules;
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