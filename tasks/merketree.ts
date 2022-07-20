import { task } from 'hardhat/config';
import { VestingTree } from '../helpers/VestingTree';
import { VESTING_USERS } from '../addressbook/vestingAddresses';
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

task('merkletree')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const tree = new VestingTree({ users: VESTING_USERS });

    const root = tree.getHexRoot();
    console.log('tree root:', root);
  })

