import XLSX from 'xlsx';
import path from "path";
import chalk from 'chalk';
import { prompt } from 'inquirer';
import { BigNumber } from 'ethers';
import { open } from "fs/promises";
import { formatISO, isFuture } from 'date-fns';
import { subtask, task } from 'hardhat/config';
import { VestingTree } from '@mintlayer/vesting-tree';
import { formatEther, formatUnits, parseEther } from 'ethers/lib/utils';

import { deepCopy } from '../helpers/deepCopy';
import { twirlTimer } from '../helpers/twirlTimer';
import { fetchCoinGeckoPrices } from '../helpers/fetchCoinGeckoPrices';
import { vestingTreeExportData } from '../helpers/vestingTreeExportData';
import { TREASURERS, VESTING_USERS } from '../addressbook/vestingAddresses';
import { getMerkletreeCache, setMerkletreeCache } from '../helpers/merkletreeCache';
import {
  NETWORKS,
  GAS_LIMIT,
  BATCH_SIZE,
  ALLOCATIONS,
  ALLOCATION_TOTAL_SUPPLY,
  VESTING_START_TIMESTAMP,
} from '../constants';

/* colors */
const MSG_RED = chalk.red;
const MSG_BOLD = chalk.bold;
const MSG_BLUE = chalk.blue;
const MSG_GREEN = chalk.green;
const MSG_YELLOW = chalk.yellow;

/* types */
import type { Accounts } from 'typescript/hardhat';
import type { MLTToken as IMLTToken } from '../build/types';
import type { HardhatRuntimeEnvironment } from "hardhat/types";
import axios from 'axios';

let tree: VestingTree | undefined;

/* subtasks */
const MERKLETREE_EXPORT = 'MERKLETREE_EXPORT';
const MERKLETREE_EXPORT_DAPP = 'MERKLETREE_EXPORT_DAPP';
const SUBMIT_RELEASED_VESTING = 'SUBMIT_RELEASED_VESTING';
const MERKLETREE_RELEASE_DATES = 'MERKLETREE_RELEASE_DATES';

task('releases').setAction(async (_, hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts, network, deployments, ethers } = hre;
  const { deployer } = await getNamedAccounts() as Accounts;

  if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid');

  tree = new VestingTree({
    users: VESTING_USERS,
    allocations: ALLOCATIONS,
    balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
    vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
    treasurers: TREASURERS,
    ownerAddress: deployer
  });

  if(network.name == 'hardhat') {
    await deployments.fixture(['MLTToken']);
  }

  const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');

  interface VestingSchedulesIPFS {
    address: string;
    amount: string;
    vestingCliff: number;
    allocationsType: string;
    proof: string;
    hash: string;
  }

  interface ScheduleBatch {
    root: string;
    vestingSchedules: VestingSchedulesIPFS[];
    treasuryAllocationProof: {
      address: string;
      treeRoot: string;
      allocationTypeProof: string;
    }[];
  }

  const scheduleBatch: ScheduleBatch[] = [];

  let rootURIsIndex = 0;
  let foundRootURIsFlag = false;
  const rootURIs: string[] = [];

  while(!foundRootURIsFlag) {
    try {
      const URI = await MLTToken.rootURIs(rootURIsIndex);
      rootURIsIndex++;
      const URI_IPFS = 'https://cloudflare-ipfs.com/ipfs/';
      rootURIs.push(URI.replace('ipfs://', URI_IPFS));

      // delay 2s
      await new Promise((resolve) => setTimeout(resolve, 2000));

    } catch(error) {
      foundRootURIsFlag = true;
    }
  }

  console.log('rootURIs', rootURIs);

  for(const uri of rootURIs) {
    const response = await axios.get(uri, {
      maxBodyLength: 524288000,
      maxContentLength: 524288000,
    });
    const data = response.data as ScheduleBatch;

    // delay 2s
    await new Promise((resolve) => setTimeout(resolve, 2000));

    scheduleBatch.push(data);
  }

  console.log('scheduleBatch', scheduleBatch.length);

  for(const { root, vestingSchedules, treasuryAllocationProof = [] } of scheduleBatch) {
    console.log(/* Line break for better readability of messages */);
    const batches: IMLTToken.VestingDataStruct[][] = [];
    let remainerBatches: IMLTToken.VestingDataStruct[][] = [];
    const gasPrice = await ethers.provider.getGasPrice();
    const gasPriceInETH = formatEther(gasPrice);
    const gasPriceInGwei = formatUnits(gasPrice, 'gwei');

    console.log(/* Line break for better readability of messages */);
    const LENGTH = vestingSchedules.length;
    for(let i = 0; i < vestingSchedules.length; i += BATCH_SIZE) {
      twirlTimer(`Preparing data for transactions ${i} of ${LENGTH}`);

      if(i + BATCH_SIZE >= LENGTH) {
        twirlTimer(`Preparing data for transactions ${LENGTH} of ${LENGTH}`);
      }

      const batch: IMLTToken.VestingDataStruct[] = [];

      for(let j = i; j < i + BATCH_SIZE; j++) {
        const { address, vestingCliff, amount, proof } = vestingSchedules[j];
        batch.push({
          amount: BigNumber.from(amount),
          beneficiary: address,
          cliff: vestingCliff,
          proof: JSON.parse(proof),
        })
      }

      batches.push(batch);
      remainerBatches.push(batch);
    }

    console.log('\r'); // Carriage return for better readability of messages

    console.log(/* Line break for better readability of messages */);
    while(remainerBatches.length > 0) {
      const user = remainerBatches.splice(0, 1)[0];
      twirlTimer(`${batches.length - remainerBatches.length} of ${batches.length} batch released`);

      try {
        const tx = await MLTToken.batchReleaseVested(user, root, {
          gasLimit: GAS_LIMIT
        });
        await tx.wait();

      } catch(error) {
        console.log(error);
        remainerBatches.push(user);
      }
    }

    console.log('\r'); // Line break for better readability of messages
    console.log(`\n${MSG_GREEN('✔')} Successful vesting release 🥳🎉`);
  }
})

task('merkletree').setAction(async (_, hre: HardhatRuntimeEnvironment) => {
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts() as Accounts;

  if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP invalid');

  tree = new VestingTree({
    users: VESTING_USERS,
    allocations: ALLOCATIONS,
    balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
    vestingStartTimestamp: VESTING_START_TIMESTAMP.unix(),
    treasurers: TREASURERS,
    ownerAddress: deployer
  });

  const questions = await prompt({
    type: 'list',
    name: 'subtask',
    message: 'Select a task to run:',
    choices: [
      {
        name: 'Release all vested tokens which are already at release date or later',
        value: SUBMIT_RELEASED_VESTING
      },
      {
        name: 'Show all release dates in a human readable format',
        value: MERKLETREE_RELEASE_DATES
      },
      {
        name: 'Export the vesting list and their respective merkle proof',
        value: MERKLETREE_EXPORT
      },
      {
        name: 'Export data for the dapp',
        value: MERKLETREE_EXPORT_DAPP
      },
    ]
  });

  await hre.run(questions.subtask);
})

subtask(
  SUBMIT_RELEASED_VESTING,
  'Release all vested tokens which are already at release date or later'
)
  .setAction(async (_, hre: HardhatRuntimeEnvironment) => {
    const { ethers, network, deployments } = hre;

    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    const deployer = await ethers.getNamedSigner('deployer');

    if(network.name == 'hardhat') {
      await deployments.fixture(['MLTToken']);
    }

    const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');

    const [ name, symbol, decimals, START_TIMESTAMP ] = await Promise.all([
      MLTToken.name(),
      MLTToken.symbol(),
      MLTToken.decimals(),
      MLTToken.VESTING_START_TIMESTAMP(),
    ]);

    const VESTING_START_TIMESTAMP = START_TIMESTAMP.toNumber();
    const cache = await getMerkletreeCache({ cacheKey: MLTToken.address });

    {
      const TITLE = 'Contract information:';
      const DIVIDER = [...Array(TITLE.length).keys()].map(el => '-').join('');

      console.log(
        `\n${DIVIDER}`,
        `\n${MSG_BOLD(TITLE)}`,
        `\n${DIVIDER}`,
        `\nName: ${MSG_YELLOW(name)}`,
        `\nSymbol: ${MSG_YELLOW(symbol)}`,
        `\nDecimals: ${MSG_YELLOW(decimals)}`,
        `\nAddress: ${MSG_YELLOW(MLTToken.address)}`,
      );

      const questions = await prompt([
        {
          type: 'confirm',
          name: 'continue',
          message: 'Confirm that contract information is correct and you wish to continue:',
        }
      ])

      if(!questions.continue) {
        console.log(`\n${MSG_BLUE('Vesting release was aborted')}`);
        return;
      }
    }

    console.log(MSG_GREEN(
      `\nThe protocol will now validate which vested tokens are available to be released and`,
      `\nhave not yet been claimed. This process may take a few minutes, please be patient and`,
      `\ndo not close your terminal or the process will be canceled.`,
    ));

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);
    const gasLimit = GAS_LIMIT;

    const vestingReadyToRelease: IMLTToken.VestingDataStruct[] = [];

    // Filter the vesting that are already due to be claimed
    const vestingAlreadyOnDate = tree.vestingSchedules.filter((vestingSchdule) => {
      const { vestingCliff } = vestingSchdule;
      const timestamp = (VESTING_START_TIMESTAMP + vestingCliff);
      return block.timestamp > timestamp;
    });

    // Filter the vesting that have already been claimed
    const ALREADY_CLAIMED_BATCH_SIZE = 500;
    let remainer = deepCopy(vestingAlreadyOnDate);

    console.log(/* Line break for better readability of messages */);
    while(remainer.length > 0) {
      const batch = remainer.splice(0, ALREADY_CLAIMED_BATCH_SIZE);
      twirlTimer(`${remainer.length} remaining validations`);

      const result = await Promise.allSettled(
        batch.map(async (vestingSchedule, index) => {
          if(!tree) throw new Error('tree invalid!');

          try {
            const hash = tree.hash(vestingSchedule);

            if(cache.data.vestingClaimed[hash]) {
              return { error: false, isClaimed: true, index, vestingSchedule };
            }

            const isClaimed = await MLTToken.vestingClaimed(tree.hash(vestingSchedule));

            if(isClaimed) {
              cache.data.vestingClaimed[hash] = isClaimed;
            }

            return { error: false, isClaimed, index, vestingSchedule };
          } catch {
            return { error: true, isClaimed: false, index, vestingSchedule };
          }
        })
      );


      result.forEach((item) => {
        if(!tree) throw new Error('tree invalid!');

        if(item.status == 'fulfilled') {
          if(item.value.error) {
            remainer.push(batch[item.value.index]);
            return;
          }

          if(!item.value.isClaimed) {
            const { vestingSchedule } = item.value;
            const { address, amount, vestingCliff } = vestingSchedule;

            vestingReadyToRelease.push({
              beneficiary: address,
              amount,
              cliff: vestingCliff,
              proof: tree.getHexProof(tree.hash(vestingSchedule))
            });
          }
        }
      })
    }

    await setMerkletreeCache({ cacheKey: MLTToken.address, cacheToUpdate: cache.data });

    {
      console.log('\r'); // Line break for better readability of messages
      const TITLE = 'successful validation:';
      const VESTED_TOKENS = vestingAlreadyOnDate.length - vestingReadyToRelease.length;
      const msgs = [
        `Vested tokens that already be claimed: ${MSG_YELLOW(vestingAlreadyOnDate.length)}`,
        `Vested tokens that were already claimed: ${MSG_YELLOW(VESTED_TOKENS)}`,
        `Vested tokens that will be released now: ${MSG_YELLOW(vestingReadyToRelease.length)}`,
      ];

      const DIVIDER = [...Array(TITLE.length).keys()].map(el => '-').join('');

      console.log(
        `\n${DIVIDER}`,
        `\n${TITLE}`,
        `\n${DIVIDER}`,
        `\n${msgs.join('\n')}`,
      )
    }

    const batches: IMLTToken.VestingDataStruct[][] = [];
    const gasPrice = await ethers.provider.getGasPrice();
    const gasPriceInETH = formatEther(gasPrice);
    const gasPriceInGwei = formatUnits(gasPrice, 'gwei');

    {
      console.log(/* Line break for better readability of messages */);
      const LENGTH = vestingReadyToRelease.length;
      for(let i = 0; i < vestingReadyToRelease.length; i += BATCH_SIZE) {
        twirlTimer(`Preparing data for transactions ${i} of ${LENGTH}`);

        if(i + BATCH_SIZE >= LENGTH) {
          twirlTimer(`Preparing data for transactions ${LENGTH} of ${LENGTH}`);
        }

        batches.push(vestingReadyToRelease.slice(i, i + BATCH_SIZE));
      }
    }

    console.log('\r'); // Carriage return for better readability of messages

    let estimateGasPerBatch: BigNumber;

    if(batches.length) {
      estimateGasPerBatch = await MLTToken.estimateGas.batchReleaseVested(
        batches[0], tree.getHexRoot(), { gasLimit }
      );

    } else {
      console.log(/* Line break for better readability of messages */);
      console.log(MSG_BOLD('No vested tokens available to be claimed'));
      return;
    }

    const estimateGasPerBatchInETH = formatEther(estimateGasPerBatch.mul(gasPrice));
    const estimateGasBatches = estimateGasPerBatch.mul(gasPrice).mul(batches.length);

    {
      let ethPrice = -1;

      try {
        const prices = await fetchCoinGeckoPrices(['ethereum']);

        if(prices.hasOwnProperty('ethereum')) {
          ethPrice = prices['ethereum'];
        }
      } catch{}

      const TITLE = 'Batch release details:';
      const DIVIDER = [...Array(TITLE.length).keys()].map(el => '-').join('');

      const msgs = [
        `${DIVIDER}`,
        `${MSG_BOLD(TITLE)}`,
        `${DIVIDER}`,
        `Gas limit: ${MSG_YELLOW(gasLimit)}`,
        `Gas prices (Gwei): ≈ ${MSG_YELLOW(gasPriceInGwei)}`,
        `Gas prices (ETH): ≈ ${MSG_YELLOW(gasPriceInETH)}`,
      ];

      if(ethPrice > 0) {
        msgs.push(`Gas prices (USD): ≈ ${MSG_YELLOW(parseFloat(gasPriceInETH) * ethPrice)}`)
      }

      msgs.push(
        `Batch size: ${MSG_YELLOW(BATCH_SIZE)}`,
        `Vestings quantity: ${MSG_YELLOW(vestingReadyToRelease.length)}`,
        `Estimated gas required per batch (ETH): ≈ ${MSG_YELLOW(estimateGasPerBatchInETH)}`,
        )

      if(ethPrice > 0) {
        const price = parseFloat(estimateGasPerBatchInETH) * ethPrice
          msgs.push(
          `Estimated gas required per batch (USD): ≈ ${MSG_YELLOW(price)}`,
        )
      }

      console.log(`\n${msgs.join('\n')}`);

      console.log(
        `\nThere are ${MSG_YELLOW(vestingReadyToRelease.length)} vested tokens available `+
        `for release and will be released in ${MSG_YELLOW(batches.length)} batches of ` +
        `${MSG_YELLOW(BATCH_SIZE)}`
      );

      const questions = await prompt([
        {
          type: 'confirm',
          message: 'Do you want to proceed with the vesting release:',
          name: 'continue',
        }
      ])

      if(!questions.continue) {
        console.log(MSG_BLUE('\nVesting release was aborted'));
        return;
      }
    }

    const deployerBalance = await ethers.provider.getBalance(deployer.address);

    if(deployerBalance.lte(estimateGasBatches)) {
      console.log(MSG_RED('You do not have enough balance to perform this operation'));
      return
    }

    console.log(MSG_GREEN(
      `\nVesting will begin to be released. The process may take a few minutes, please be`,
      `\npatient and do not close your terminal or the process will be suspended.`,
    ));

    {
      let remainer = deepCopy(batches);

      console.log(/* Line break for better readability of messages */);
      while(remainer.length > 0) {
        const user = remainer.splice(0, 1)[0];
        twirlTimer(`${batches.length - remainer.length} of ${batches.length} batch released`);

        try {
          const tx = await MLTToken.batchReleaseVested(user, tree.getHexRoot(), { gasLimit });
          await tx.wait();

        } catch(error) {
          console.log(error);
          remainer.push(user);
        }
      }
    }

    console.log('\r'); // Line break for better readability of messages
    console.log(`\n${MSG_GREEN('✔')} Successful vesting release 🥳🎉`);
  })

subtask(MERKLETREE_RELEASE_DATES, 'Show all release dates in a human readable format')
  .setAction(async (_, hre: HardhatRuntimeEnvironment) => {
    const { ethers, network, deployments, } = hre;

    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    if(network.name == 'hardhat') {
      await deployments.fixture(['MLTToken']);
    }

    const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');

    const START_TIMESTAMP = (await MLTToken.VESTING_START_TIMESTAMP()).toNumber();

    const cliffs = tree.getCliffs();

    cliffs.forEach((cliff, index) => {
      const timestamp = (START_TIMESTAMP + cliff) * 1000;
      const representation = 'complete';
      let message = `vesting ${index + 1}: ${formatISO(timestamp, { representation })}`;

      const released = `${MSG_GREEN('✔')} released`;
      const notReleased = `${MSG_BLUE('⏲')}  not released`;

      console.log(`${message} | ${isFuture(timestamp) ? notReleased : released}`);
    })

    console.log('-------------------------');
    console.log(`Vesting takes place over a total of ${cliffs.length} months`);
  })

subtask(MERKLETREE_EXPORT)
  .setAction(async (_, hre: HardhatRuntimeEnvironment) => {
    const { deployments, network, ethers } = hre;

    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    if(network.name == 'hardhat') {
      await deployments.fixture(['MLTToken']);
    }

    enum Format {
      json,
      excel,
      print,
    }

    const question = await prompt({
      type: 'list',
      name: 'response',
      message: 'Select an option:',
      choices: [
        {
          name: 'export in JSON format',
          value: Format.json
        },
        {
          name: 'export in XLSX format',
          value: Format.excel
        },
        {
          name: 'print in console',
          value: Format.print
        },
      ]
    })

    const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');

    const FILENAME = 'vesting_schedules';
    const START_TIMESTAMP = (await MLTToken.VESTING_START_TIMESTAMP()).toNumber();

    const vestingSchedulesOrdered = tree.vestingSchedules.sort((a, b) => {
      if(a.vestingCliff < b.vestingCliff) return -1;
      if(a.vestingCliff > b.vestingCliff) return 1;
      return 0;
    })

    const LENGTH = vestingSchedulesOrdered.length;
    const rows = vestingSchedulesOrdered.map((item, i) => {
      if(!tree) throw new Error('tree invalid!');
      twirlTimer(`Preparing data ${i + 1} of ${LENGTH}`);

      const { address, amount, vestingCliff } = item;
      const timestamp = START_TIMESTAMP + vestingCliff;

      const date = new Date(timestamp);
      const dateISO = formatISO(date, { representation: 'date' });
      const proof = tree.getHexProof(tree.hash(item));

      if(Format.excel == question.response) {
        return {
          Address: address,
          Amount: amount,
          Proof: JSON.stringify(proof, null, 2),
          'Release date': dateISO,
        }
      }

      return { address, amount, proof, cliff: timestamp }
    })

    switch(question.response) {
      case Format.json:
        const filePath = path.join(process.cwd(), `${FILENAME}.json`);
        const fileHandle = await open(filePath, 'w+');

        if(!fileHandle) {
          console.log('\r'); // Line break for better readability of messages
          console.log(`\n${MSG_RED('✘')} Export error`);
          return;
        }

        await fileHandle.writeFile(JSON.stringify(rows, null, 2), { encoding: 'utf-8' });
        await fileHandle?.close();

        break;
      case Format.print:
        console.log(JSON.stringify(rows, null, 2));
        break;
      case Format.excel:
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(rows);

        worksheet['!cols'] = [
          { wch: 60 },
          { wch: 30 },
          { wch: 60 },
          { wch: 20 },
        ];

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Vesting schedule');
        XLSX.writeFile(workbook, `${FILENAME}.xlsx`);

        break;
      default:
        console.log('\r'); // Line break for better readability of messages
        console.log(`\n${MSG_RED('✘')} Export error`);
        return;
    }

    console.log('\r'); // Line break for better readability of messages
    console.log(`\n${MSG_GREEN('✔')} Successful export 🥳🎉`);
  })

subtask(MERKLETREE_EXPORT_DAPP)
  .setAction(async (_, hre: HardhatRuntimeEnvironment) => {
    const { deployments, network, ethers } = hre;

    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    if(network.name == 'hardhat') {
      await deployments.fixture(['MLTToken']);
    }

    const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');

    const [ MLT_SYMBOL, MLT_DECIMAL ] = await Promise.all([
      MLTToken.symbol(),
      MLTToken.decimals(),
    ])

    const {
      root,
      networkInfo,
      startTimestamp,
      endDateTimestamp,
      allocationTotalSupply,
    } = await vestingTreeExportData({
      tree,
      network,
      MLTToken,
      skipVestingSchedules: true,
      skipTreasuryAllocationProof: true,
    })

    const lastBlockBeforeDeployment = await ethers.provider.getBlockNumber();

    const FILENAME_API = 'vesting_data_api';
    const FILENAME_DAPP = 'vesting_data_dapp';

    const fileApiPath = path.join(process.cwd(), `${FILENAME_API}.ts`);
    const fileDappPath = path.join(process.cwd(), `${FILENAME_DAPP}.ts`);

    const fileApiHandle = await open(fileApiPath, 'w+');
    const fileDappHandle = await open(fileDappPath, 'w+');

    console.log('\r'); // Line break for better readability of messages

    if(!fileDappHandle || !fileApiHandle) {
      console.log(`\n${MSG_RED('✘')} Export error`);
      return;
    }

    let data = '/* Autogenerated file. Do not edit manually. */\n\n';
    data += `export const MLT_SYMBOL = '${MLT_SYMBOL}';\n\n`;
    data += `export const MLT_DECIMAL = ${MLT_DECIMAL};\n\n`;
    data += `export const MLTTokenAddress = '${MLTToken.address}';\n\n`;
    data += `export const ALLOCATION_TOTAL_SUPPLY = '${allocationTotalSupply}';\n\n`;
    data += `export const VESTING_START_TIMESTAMP = ${startTimestamp};\n\n`;
    data += `export const VESTING_END_TIMESTAMP = ${endDateTimestamp};\n\n`;
    data += `export const VESTING_TREE_ROOT = '${root}';\n\n`;
    data += `export const BATCH_SIZE = ${BATCH_SIZE};\n\n`;
    data += `export const NETWORK_CHAIN_ID = ${networkInfo.chainId};\n\n`;
    data += `export const NETWORK_URL_RPC = '${networkInfo.rpcUrl}';\n\n`;
    data += `export const NETWORK_NAME = '${networkInfo.name}';\n\n`;
    data += `export const NETWORK_CURRENCY_NAME = '${networkInfo.nativeCurrency.name}';\n\n`;
    data += `export const NETWORK_CURRENCY_SYMBOL = '${networkInfo.nativeCurrency.symbol}';\n\n`;
    data += `export const NETWORK_DECIMALS = '${networkInfo.nativeCurrency.decimals}';\n\n`;
    data += `export const NETWORK_EXPLORER_URL = '${networkInfo.blockExplorerUrl}';\n\n`;

    await fileDappHandle.writeFile(data, { encoding: 'utf-8' });
    await fileDappHandle?.close();

    data += `export const lastBlockBeforeDeployment = ${lastBlockBeforeDeployment};\n\n`;
    data += `export const ALLOCATIONS = ${JSON.stringify(ALLOCATIONS, null, 2)};\n\n`;
    data += `export const TREASURERS = ${JSON.stringify(TREASURERS, null, 2)};\n\n`;

    await fileApiHandle.writeFile(data, { encoding: 'utf-8' });
    await fileApiHandle?.close();

    console.log(`\n${MSG_GREEN('✔')} Successful export 🥳🎉`);
  })