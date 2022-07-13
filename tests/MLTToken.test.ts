import { formatEther, parseEther } from 'ethers/lib/utils';
import { setupUser } from '../helpers/ethers';
import { assert, expect } from './utils/chaiSetup';
import { deployments, ethers, getNamedAccounts } from 'hardhat';

import type { Accounts } from '../typescript/hardhat';
import { MLTTokenV1 as IMLTToken } from 'build/types';
async function setup() {
  await deployments.fixture(['MLTTokenV1']);

  const accounts = await getNamedAccounts() as Accounts;

  const [ MLTToken ] = await Promise.all([
    ethers.getContract<IMLTToken>('MLTTokenV1'),
  ])

  return {
    accounts,
    contracts: {
      MLTToken
    }
  }
}

describe('MLTToken contract', () => {
  it('MLTToken contract must be deployed', async () => {
    const { contracts: { MLTToken }} = await setup();
    assert.ok(MLTToken.address);
  });
  
  it('debugging', async () => {
    const { accounts, contracts: { MLTToken }} = await setup();
    const { deployer } = accounts;

    const deployerBal = await MLTToken.balanceOf(deployer);
    
    console.log('deployerBal', formatEther(deployerBal));
  });
})