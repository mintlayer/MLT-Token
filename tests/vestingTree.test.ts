import { BigNumber } from 'ethers';
import { deployments, ethers } from 'hardhat';
import { parseEther } from 'ethers/lib/utils';

import { assert, expect } from './utils/chaiSetup';
import { VestingTree } from '../helpers/VestingTree';
import { VESTING_USERS } from '../addressbook/vestingAddresses';
import {
  ALLOCATIONS,
  POOLS_SUPPLY,
  VESTING_TYPES,
  ONE_MONTH_IN_SECONDS,
  ALLOCATION_TOTAL_SUPPLY,
} from '../constants';

/* types */
import type { MLTToken as IMLTToken } from 'build/types';
import type { PartialRecord, AllocationsType } from 'typescript/vestingTree';

let tree: VestingTree | null = null;

async function setup() {
  await deployments.fixture(['MLTToken']);

  if(!tree) {
    tree = new VestingTree({ users: VESTING_USERS });
  }

  const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');

  return {
    tree,
    contracts: {
      MLTToken
    }
  }
}

describe('Vesting merkle tree', () => {
  it('MLTToken contract must be deployed', async () => {
    const { contracts: { MLTToken }} = await setup();
    assert.ok(MLTToken.address);
  });

  it('The root hash of the Merkle tree should match the hash stored in the contract', async () => {
    const { tree, contracts: { MLTToken }} = await setup();

    const ROOT = tree.getHexRoot();
    const VESTING_TREE_ROOT = await MLTToken.VESTING_TREE_ROOT();

    expect(VESTING_TREE_ROOT).to.be.equal(ROOT);
  });

  it('The corresponding amounts of tokens must be unlocked for each release date', async () => {
    const { tree } = await setup();

    // Multiplier to prevent underflow for numbers too small to use with BigNumber
    const DENOMINATOR = 10_000;

    Object.keys(ALLOCATIONS).map((allocationType: AllocationsType) => {
      const { percentage, vestingInfo } = ALLOCATIONS[allocationType];

      if(vestingInfo !== 'unlocked') {
        const { cliff, unlocking, months, monthly } = vestingInfo;

        // Divide by 1 ETH which is the pool percentage multiplier
        const poolShare = percentage.mul(ALLOCATION_TOTAL_SUPPLY).div(parseEther('1'));

        const unlockedTokensExpected = parseEther(
          poolShare.mul(unlocking * DENOMINATOR).div(DENOMINATOR).toString()
        );

        let unlockedTokensObtained = BigNumber.from(0);

        const vestingSchedules = tree.allocationTypeMapCliff[allocationType]?.[cliff];
        if(vestingSchedules) {
          unlockedTokensObtained = unlockedTokensObtained.add(
            vestingSchedules.reduce((prev, { amount }) => {
              return prev.add(amount);
            }, BigNumber.from(0))
          )
        }

        // Total tokens unlocked at first day of TGE
        expect(unlockedTokensExpected).to.be.equal(unlockedTokensObtained);

        months.forEach((month, monthIndex) => {
          const prevCycle = (monthIndex > 0) ? months[monthIndex - 1] : 0;

          const _monthly = monthly[monthIndex];
          const unlockedTokensExpected = parseEther(
            poolShare.mul(_monthly * month * DENOMINATOR).div(DENOMINATOR).toString()
          );

          let unlockedTokensObtained = BigNumber.from(0);

          // Array with the length of the months in which the allocation releases will be made
          [...new Array(month).keys()].forEach((cycle) => {
            // 1 must be added because the cycle starts at 0.
            const vestingCliff = cliff + (ONE_MONTH_IN_SECONDS * (cycle + 1 + prevCycle))

            const vestingSchedules = tree.allocationTypeMapCliff[allocationType]?.[vestingCliff];
            if(vestingSchedules) {
              unlockedTokensObtained = unlockedTokensObtained.add(
                vestingSchedules.reduce((prev, current) => {
                  const { amount } = current;
                  return prev.add(amount);
                }, BigNumber.from(0))
              )
            }
          })

          // Total tokens unlocked after TGE
          expect(unlockedTokensExpected).to.be.equal(unlockedTokensObtained);
        })
      }
    })
  })

  it('The sum of the percentages for all vesting types must be equal to 100%', async () => {
    Object.entries(VESTING_TYPES).forEach(([ key, value ]) => {
      if(value == 'unlocked') return;

      const { monthly, months, unlocking } = value;

      let total = unlocking * 100;

      months.forEach((month, monthIndex) => {
        total += month * (monthly[monthIndex] * 100);
      });

      expect(total).to.be.equal(100);
    });
  })

  it('The sum of the percentages for all user groups must be equal to 100%', async () => {
    const vestingTotal = Object.entries(ALLOCATIONS).reduce((prev, current) => {
      const [ _, value ] = current;
      return prev.add(value.percentage);
    }, BigNumber.from(0));

    expect(vestingTotal).to.be.equal(parseEther('1'));

    const pools: PartialRecord<keyof typeof POOLS_SUPPLY, {
      weight: BigNumber;
      amount: BigNumber;
    }> = {};

    VESTING_USERS.forEach((user) => {
      const {
        allocationsType,
        weight = BigNumber.from(0),
        amount = BigNumber.from(0),
      } = user;
      if(pools.hasOwnProperty(allocationsType)) {
        pools[allocationsType] = {
          weight: pools[allocationsType].weight.add(weight),
          amount: pools[allocationsType].amount.add(amount)
        };
      } else {
        pools[allocationsType] = { weight, amount };
      }
    });

    Object.entries(pools).map(([key, value]) => {
      const { weight, amount } = value;

      const supply: number = POOLS_SUPPLY[key];
      const remainder = weight.mul(supply);

      expect(remainder.add(amount)).to.be.equal(parseEther(supply.toString()));
    })
  })

  it('Total supply of allocations should match with the sum of the merkle tree', async () => {
    const { tree, contracts: { MLTToken }} = await setup();

    const totalAllocations = tree.vestingSchedules.reduce((prev, currentSchedule) => {
      return prev.add(currentSchedule.amount);
    }, BigNumber.from(0));

    const totalSupply = await MLTToken.totalSupply();

    expect(totalAllocations).to.be.equal(totalSupply);
  });

  it('A merkle proof should be checked on the chain', async () => {
    const { tree, contracts: { MLTToken }} = await setup();

    const schedule = tree.vestingSchedules[0];
    const { address, amount, vestingCliff } = schedule;
    const proof = tree.getHexProof(tree.hash(schedule));
    const verify = await MLTToken.verifyProof(address, amount, vestingCliff, proof);
    assert.ok(verify);
  });
})