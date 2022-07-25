import XLSX from 'xlsx';
import { formatISO } from 'date-fns';
import { task } from 'hardhat/config';
import { VestingTree } from '../helpers/VestingTree';
import { VESTING_START_TIMESTAMP } from '../constants';
import { VESTING_USERS } from '../addressbook/vestingAddresses';

/* types */
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

task('merkletree')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const tree = new VestingTree({ users: VESTING_USERS });

    const root = tree.getHexRoot();
    console.log('tree root:', root);
  })

task('merkletree-export')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const tree = new VestingTree({ users: VESTING_USERS });

    const vestingSchedulesOrdered = tree.vestingSchedules.sort((a, b) => {
      if (a.vestingCliff < b.vestingCliff) return -1;
      if (a.vestingCliff > b.vestingCliff) return 1;
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