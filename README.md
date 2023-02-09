# MLT Token

## Getting Started

1. Clone the repo

2. Install dependencies with `yarn --frozen-lockfile`

3. Create or copy the `.env.example` file to `.env` and fill in all listed variables. All are mandatory for proper functioning
```bash
cp .env.example .env
```

4. Generate all TypeScript files with `yarn typechain`

5. Run all tests to verify that everything works correctly `yarn test`

NOTE: Tests may take more than 20 minutes, be patient and do not close the console until the process is completed.

## Considerations when deploying to mainnet

When deploying to mainnet, modifications must be made to different files to set the correct values for mainnet. Make sure to make the changes before executing the command for the deploy. The following is a list of files to modify and the necessary modifications:

- `./hardhat.config.ts` => in the constant `config` add to the key `networks` the data of the mainnet network where the deploy will be made

- `./constants.ts`
  - In this file, the constant `IS_PRODUCTIVE` must be changed to `true`. This will cause several security validations to be activated throughout the deployment process to ensure that the relevant checks are made before going to production
  - When `IS_PRODUCTIVE` is set to `true`, an `if` statement is entered that throws an error with a message similar to the following: "Before moving to productive environment run a double validation of the variables/settings and then remove this error" if you are ready to go to production and have configured all the values correctly or are in that process, you can remove the lines of code that throw this message
  - Verify that the constant `ALLOCATION_TOTAL_SUPPLY` has the correct value. This represents the number of tokens that will be minted at the time of the deploy, keep in mind that this will be the total token supply and cannot be modified once the contract is deployed as there is no minting method
  - Verify that the constant `VESTING_START_TIMESTAMP` has the correct value. This represents the date from which the TGE release dates will begin to be counted
  - Verify that the constant `VESTING_TYPES` has the correct values. The information that is currently set in this constant is theoretically the same as what is shown in the documentation https://docs.mintlayer.org/whitepaper/6-token-and-public-sale#62-token-distribution--
  - Verify that the constant `POOLS_SUPPLY` has the correct values. The information that is currently set in this constant is theoretically the same as what is shown in the documentation https://docs.mintlayer.org/whitepaper/6-token-and-public-sale#62-token-distribution--
  - Verify that the constant `ALLOCATIONS` has the correct values. The information that is currently set in this constant is theoretically the same as what is shown in the documentation https://docs.mintlayer.org/whitepaper/6-token-and-public-sale#62-token-distribution--
  - Add to the constant `NETWORKS` the data corresponding to the mainnet network in which the deploy will be made

- `./addressbook/vestingAddressesMainnet.ts`

  - Verify that the constant `VESTING_USERS_MAINNET` has the correct values. You can see an example of how the data should look in the file `./addressbook/vestingAddressesTestnet.ts`. Make sure that the addresses of the treasurers with the corresponding amounts that will be assigned to them to manage are added to the constant `VESTING_USERS_MAINNET` as well as the group to which they belong.

- `./addressbook/vestingAddresses.ts`

  - Verify that the constant `TREASURERS_MAINNET` has the correct values. Ensure that the treasurers are properly configured as there is no function to add new treasurers once the deploy is done.

- `./deploy/001_deploy_MLTToken.ts`

  - This is where the deploy occurs, there is a validation similar to the following:
  ```bash
  if(!network.tags.local && !network.tags.staging) {
    throw new Error('Before moving to productive environment run a double validation of the variables/settings and then remove this error');
  }
  ```

if you are ready to move to production and have configured all the values correctly or are in the process of doing so, you can remove this code fragment.

NOTE: Once you have followed all the instructions above, it is highly recommended that you run all tests to ensure that they all pass successfully before doing the deploy. To run the tests, you can run the following command:
```bash
yarn test
```

After successfully completing everything, it is ready to deploy, you can do it by executing the following command:
```bash
yarn deploy --network mainnet --tags MLTToken
```

NOTE: in the network flag, put the name of the main network that you configured in the `./hardhat.config.ts` file

## What to do after deploy to mainnet?

After you have deployed to mainnet, the next thing you should do is update the data of the [Backend](https://github.com/mintlayer/MLT-Token-Vesting-API) and the [Dapp](https://github.com/mintlayer/MLT-Token-Vesting-UI)

There is a custom hardhat task that is responsible for creating a `.ts` with the necessary information to update both repositories (Backend and Dapp). Follow these steps:

1. Run the command `yarn task --network mainnet merkletree` where the network flag should be set to the name of the main network configured in the `./hardhat.config.ts` file.

2. The above command will display several options, you must select the last one that says "Export data for the dapp".

3. After the task is successfully executed, two files should have been generated in the root of the project with the following names: `vesting_data_api.ts` and `vesting_data_dapp.ts`.

4. To update the [Backend](https://github.com/mintlayer/MLT-Token-Vesting-API) data, you must copy the following files:

  4.1 Copy the file `./vesting_data_api.ts` to the [Backend](https://github.com/mintlayer/MLT-Token-Vesting-API) repository at the path `./src/database/seeders/vesting_data_api.ts`

  4.2 Copy the file `./build/types/contracts/MLTToken.ts` to the [Backend](https://github.com/mintlayer/MLT-Token-Vesting-API) repository at the path `./src/types/contracts/MLTToken.ts`

  4.3 Copy the file `./build/types/common.ts` to the [Backend](https://github.com/mintlayer/MLT-Token-Vesting-API) repository at the path `./src/types/common.ts`

  4.4 In the [Backend](https://github.com/mintlayer/MLT-Token-Vesting-API) repository, there is a file that stores the contract ABI at the following path `./src/contracts/MLTTokenABI.ts` that must be updated with the new ABI generated after the deploy which is generated in this same repository at the following path `./deployments/<mainnet>/MLTToken.json` where the mainnet folder may vary depending on how the main network is configured in the file `./hardhat.config.ts`. Do not copy the entire file as it has unnecessary information, only copy the fragment of the array where the ABI information is.

5. To update the data of the [Dapp](https://github.com/mintlayer/MLT-Token-Vesting-UI) you must copy the following files.

  5.1 Copy the file `vesting_data_dapp.ts` to the [Dapp](https://github.com/mintlayer/MLT-Token-Vesting-UI) repository at the path `./src/data/vesting_data_dapp.ts`

  5.2 Copy the file `./build/types/contracts/MLTToken.ts` to the [Dapp](https://github.com/mintlayer/MLT-Token-Vesting-UI) repository at the path `./src/types/contracts/MLTToken.ts`

  5.3 Copy the file `./build/types/common.ts` to the [Dapp](https://github.com/mintlayer/MLT-Token-Vesting-UI) repository at the path `./src/types/common.ts`

  5.4 In the [Dapp](https://github.com/mintlayer/MLT-Token-Vesting-UI) repository there is a file that stores the contract ABI at the following path `./src/contracts/MLTTokenABI.ts` which must be updated with the new ABI generated after the deploy which is generated in this same repository at the following path `./deployments/<mainnet>/MLTToken.json` where the mainnet folder may vary depending on how the main network is configured in the file `./hardhat.config.ts`. Do not copy the entire file as it has unnecessary information, only copy the fragment of the array where the ABI information is.

