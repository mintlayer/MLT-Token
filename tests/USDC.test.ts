import { deployments, ethers } from 'hardhat';

import { assert } from './utils/chaiSetup';

/* types */
import type { ERC20Mock } from 'build/types';

describe('Vesting merkle tree', () => {
  it('MLTToken contract must be deployed', async () => {
    await deployments.fixture(['USDC']);

    const USDC = await ethers.getContract<ERC20Mock>('USDC');
    assert.ok(USDC.address);
  });
})