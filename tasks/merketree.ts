import XLSX from 'xlsx';
import chalk from 'chalk';
import { prompt } from 'inquirer';
import { formatISO, isFuture } from 'date-fns';
import { subtask, task, types } from 'hardhat/config';
import { formatEther, formatUnits } from 'ethers/lib/utils';

import { BigNumber } from 'ethers';
import { VestingTree } from '../helpers/VestingTree';
import { VESTING_USERS } from '../addressbook/vestingAddresses';
import { BATCH_SIZE, VESTING_START_TIMESTAMP } from '../constants';

/* colors */
const MSG_RED = chalk.red;
const MSG_BOLD = chalk.bold;
const MSG_BLUE = chalk.blue;
const MSG_GREEN = chalk.green;
const MSG_YELLOW = chalk.yellow;

/* types */
import type { MLTTokenV1 as IMLTTokenV1 } from 'build/types';
import type { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import type { IBatchesVesting, VestingSchedule } from 'typescript/vestingTree';

let tree: VestingTree | undefined;

task('merkletree')
  .addOptionalParam(
    'releasedates',
    'Show all release dates in a human readable format',
    false,
    types.boolean
  )
  .setAction(async (taskArguments, hre: HardhatRuntimeEnvironment) => {
    const { releasedates } = taskArguments;

    hre.run('generate-tree');

    const root = tree.getHexRoot();
    console.log('tree root:', root);
    console.log('quantity vestingSchedule', tree.vestingSchedules.length);

    if(releasedates) {
      console.log('');
      hre.run('merkletree-release-dates');
    }
  })

subtask('generate-tree')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    tree = new VestingTree({ users: VESTING_USERS });
  })

task(
  'submit-released-vesting',
  'Release all vested tokens which are already at release date or later'
)
  .setAction(async (taskArgument, hre: HardhatRuntimeEnvironment) => {
    const { ethers, network, artifacts, deployments } = hre;

    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    let isHardhat = true;
    let contractAddress = '';
    let MLTToken: IMLTTokenV1 | null = null;
    const deployer = await ethers.getNamedSigner('deployer');

    if(network.name == 'hardhat') {
      await deployments.fixture(['MLTTokenV1']);
    } else {
      isHardhat = false;

      const questions = await prompt([
        {
          type: 'input',
          message: 'Enter the token contract address:',
          name: 'contractAddress',
          validate: (input) => !!input,
        }
      ])

      contractAddress = questions.contractAddress;
    }

    if(isHardhat) {
      MLTToken = await ethers.getContract<IMLTTokenV1>('MLTTokenV1');
    }

    if(!isHardhat) {
      const MLTTokenV1Artifact = await artifacts.readArtifact('MLTTokenV1');
      MLTToken = new ethers.Contract(
        contractAddress, MLTTokenV1Artifact.abi, deployer
      ) as IMLTTokenV1;
    }

    const [ name, symbol, decimals ] = await Promise.all([
      MLTToken.name(),
      MLTToken.symbol(),
      MLTToken.decimals(),
    ]);

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
      `\nThe protocol will now validate which vested tokens are available to be released.`,
      `\nThis process may take a few minutes, please be patient and do not close your terminal`,
      `\nor the process will be canceled.`,
    ));

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);

    let vestingReadyToRelease: VestingSchedule[] = [];

    // Filter the vesting that are already due to be claimed
    vestingReadyToRelease = tree.vestingSchedules.filter((vestingSchdule) => {
      const { vestingCliff } = vestingSchdule;
      const timestamp = (VESTING_START_TIMESTAMP + vestingCliff);
      return block.timestamp > timestamp;
    });

    // Filter the vesting that have already been claimed
    vestingReadyToRelease = (await Promise.all(vestingReadyToRelease.map(async (item) => {
      const isCliamed = await MLTToken.vestingClaimed(tree.hash(item));

      return isCliamed ? null : item;
    }))).filter(el => !!el);


    const batches: IBatchesVesting[] = [];
    const gasPrice = await ethers.provider.getGasPrice();
    const gasPriceInETH = formatUnits(gasPrice, 18);
    const gasPriceInGwei = formatUnits(gasPrice, 'gwei');

    for(let i = 0; i < vestingReadyToRelease.length; i += BATCH_SIZE) {
      const proof = [];
      const beneficiaries = [];

      vestingReadyToRelease.slice(i, i + BATCH_SIZE).forEach((vestingSchedule) => {
        beneficiaries.push(vestingSchedule.address);
        proof.push(tree.getHexProofWithMetadata(vestingSchedule));
      })

      batches.push({ proof, beneficiaries });
    }

    let estimateGasPerBatch: BigNumber;

    if(batches.length) {
      estimateGasPerBatch = await MLTToken.estimateGas.batchReleaseVested(
        batches[0].beneficiaries, batches[0].proof
      );
    } else {
      const cliffs = tree.getCliffs();

      const blockNumber = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNumber);

      const nextReleaseCliff = cliffs.find((cliff) => {
        return block.timestamp > VESTING_START_TIMESTAMP + cliff;
      })

      const nextReleaseDate = formatISO(
        (VESTING_START_TIMESTAMP + nextReleaseCliff) * 1000,
        { representation: 'date'}
      )

      console.log('');
      console.log(MSG_BOLD('No vested tokens available to be claimed'));
      console.log('Next release date:', MSG_YELLOW(nextReleaseDate));

      return;
    }

    const estimateGasPerBatchInETH = formatEther(estimateGasPerBatch.mul(gasPrice));
    const estimateGasBatches = estimateGasPerBatch.mul(gasPrice).mul(batches.length);

    {
      const TITLE = 'Batch release details:';
      const DIVIDER = [...Array(TITLE.length).keys()].map(el => '-').join('');

      console.log(
        `\n${DIVIDER}`,
        `\n${MSG_BOLD(TITLE)}`,
        `\n${DIVIDER}`,
        `\nGas prices (ETH): ${MSG_YELLOW(gasPriceInETH)}`,
        `\nGas prices (Gwei): ${MSG_YELLOW(gasPriceInGwei)}`,
        `\nBatch size: ${MSG_YELLOW(BATCH_SIZE)}`,
        `\nVestings quantity: ${MSG_YELLOW(vestingReadyToRelease.length)}`,
        `\nEstimated gas required per batch: ${MSG_YELLOW(estimateGasPerBatchInETH, 'ETH')}`,
      );

      console.log(
        `\nThere are ${MSG_YELLOW(vestingReadyToRelease.length)} vested tokens available `+
        `for release and will be released in batches of ${MSG_YELLOW(BATCH_SIZE)}`
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

    const gasLimit = 30_000_000;

    const batchesPromises = batches.map(({ proof, beneficiaries }) => {
      return MLTToken.batchReleaseVested(beneficiaries, proof, { gasLimit });
    })

    console.log(MSG_GREEN(
      `\nVesting will begin to be released. The process may take a few minutes, please be`,
      `\npatient and do not close your terminal or the process will be suspended.`,
    ));

    await Promise.all(batchesPromises);

    console.log(`\n${MSG_GREEN('✔')} Successful vesting release 🥳🎉`);
  })


task('merkletree-release-dates', 'Show all release dates in a human readable format')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    const cliffs = tree.getCliffs();

    cliffs.forEach((cliff, index) => {
      const timestamp = (VESTING_START_TIMESTAMP + cliff) * 1000;
      let message = `vesting ${index + 1}: ${formatISO(timestamp, { representation: 'date' })}`;

      const released = `${MSG_GREEN('✔')} released`;
      const notReleased = `${MSG_BLUE('⏲')}  not released`;

      console.log(`${message} | ${isFuture(timestamp) ? notReleased : released}`);
    })

    console.log('-------------------------');
    console.log(`Vesting takes place over a total of ${cliffs.length} months`);
  })

task('merkletree-export')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    if(!tree) hre.run('generate-tree');
    if(!tree) return;

    const vestingSchedulesOrdered = tree.vestingSchedules.sort((a, b) => {
      if(a.vestingCliff < b.vestingCliff) return -1;
      if(a.vestingCliff > b.vestingCliff) return 1;
      return 0;
    })

    const rows = vestingSchedulesOrdered.map((item) => {
      const { address, amount, vestingCliff } = item;
      const date = new Date(VESTING_START_TIMESTAMP + vestingCliff);
      const dateISO = formatISO(date, { representation: 'date' });
      const proof = tree.getHexProofWithMetadata(item);

      return {
        Address: address,
        Amount: amount,
        'Proof with metadata': proof,
        'Release date': dateISO,
      }
    })

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    worksheet['!cols'] = [
      { wch: 60 },
      { wch: 30 },
      { wch: 60 },
      { wch: 20 },
    ];

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Vesting schedule');
    XLSX.writeFile(workbook, 'vesting_schedules.xlsx');
  })