import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

task('signers')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const { ethers, getNamedAccounts } = hre;
    const signers = await ethers.getNamedSigners()
    console.log('signers', signers);
  })

task('createAddress')
  .addParam('amount', 'Number of addresses you want to create')
  .setAction(async (taskArgument: { amount: string }, hre: HardhatRuntimeEnvironment) => {
    const { ethers } = hre;
    const { amount } = taskArgument;
    const _amount = parseInt(amount);

    if(isNaN(_amount)) throw new Error('The "--amount" parameter expects a numeric value');

    const addresses: any[] = [];

    for(let i = 0; i < _amount; i++) {
      const wallet = ethers.Wallet.createRandom();
      addresses.push({
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase,
      })
    }

    console.log(JSON.stringify(addresses, null, 4));
  })