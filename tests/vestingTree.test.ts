import { deployments, ethers } from 'hardhat';
import { formatEther } from 'ethers/lib/utils';
import { assert, expect } from './utils/chaiSetup';
import { ALLOCATIONS, VESTING_TYPES } from '../constants';
import { VESTING_USERS } from '../addressbook/vestingAddresses';

import { VestingTree } from '../helpers/VestingTree';

/* types */
import type { MLTTokenV1 as IMLTToken } from 'build/types';

let tree: VestingTree | null = null;

async function setup() {
  await deployments.fixture(['MLTTokenV1']);

  if(!tree) {
    tree = new VestingTree({ users: VESTING_USERS });
  }

  const MLTToken = await ethers.getContract<IMLTToken>('MLTTokenV1');

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
      const [ key, value ] = current;
      return prev + (value.percentage * 100);
    }, 0);

    expect(vestingTotal).to.be.equal(100);
  })

  it('Total supply of allocations should match with the sum of the merkle tree', async () => {
    const { tree, contracts: { MLTToken }} = await setup();

    const totalAllocations = tree.vestingSchedules.reduce((prev, currentSchedule) => {
      return prev + currentSchedule.amount;
    }, 0);

    const totalSupplyBN = await MLTToken.totalSupply();
    const totalSupply = parseFloat(formatEther(totalSupplyBN));

    // When the distribution of allocations is made, decimal residues may remain. In order to
    // pass the test, you must have a tolerance margin.
    const TOLERANCE = 0.1;

    expect(totalAllocations).to.be.within(totalSupply - TOLERANCE, totalSupply)
  });

  it('A merkle proof should be checked on the chain', async () => {
    const { tree, contracts: { MLTToken }} = await setup();

    const schedule = tree.vestingSchedules[0];
    const proof = tree.getHexProofWithMetadata(schedule);
    const verify = await MLTToken.verifyProof(schedule.address, proof);
    assert.ok(verify);
  });
})