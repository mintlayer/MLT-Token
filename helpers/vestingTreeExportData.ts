import { parseEther } from "ethers/lib/utils";
import { VestingTree } from '@mintlayer/vesting-tree';

import { twirlTimer } from "./twirlTimer";
import { ALLOCATION_TOTAL_SUPPLY, NETWORKS } from "../constants";

/* types */
import type { Network } from "hardhat/types";
import type { MLTToken as IMLTToken } from '../build/types';
import type { VestingScheduleWithProof } from "@mintlayer/vesting-tree/dist/types";

interface vestingTreeExportDataParams {
  network: Network;
  tree: VestingTree;
  MLTToken?: IMLTToken;
  startTimestamp?: number;
}

export async function vestingTreeExportData(props: vestingTreeExportDataParams) {
  const {
    tree,
    network,
    startTimestamp,
    MLTToken = null,
  } = props;

  console.log('\r'); // Line break for better readability of messages

  const networkInfo = NETWORKS[network.name];

  if(!networkInfo) {
    throw new Error(
      `Data is missing for the '${network.name}' network. Before proceeding, you must ` +
      'complete the necessary information for the network in the file constants.ts'
    );
  }

  const root = tree.getHexRoot();

  const START_TIMESTAMP = !MLTToken
    ? startTimestamp
    : (await MLTToken.VESTING_START_TIMESTAMP()).toNumber();

  if(typeof START_TIMESTAMP != 'number') throw new Error('START_TIMESTAMP invalid');

  const vestingSchedules: VestingScheduleWithProof[] = [];

  let endDateTimestamp = 0;

  for(const index in tree.vestingSchedules) {
    const vesting = tree.vestingSchedules[index];

    if(vesting.vestingCliff > endDateTimestamp) {
      endDateTimestamp = vesting.vestingCliff;
    }

    const count = parseInt(index) + 1;
    twirlTimer(`Preparing data for admin ${count} of ${tree.vestingSchedules.length}`);

    const hash = tree.hash(vesting);
    const proof = JSON.stringify(tree.getHexProof(hash));

    vestingSchedules.push({
      ...vesting,
      proof,
      hash,
    })
  }

  const vestingSchedulesSort = vestingSchedules.sort((a, b) => {
    if(a.vestingCliff < b.vestingCliff) return -1;
    if(a.vestingCliff > b.vestingCliff) return 1;
    return 0;
  })

  endDateTimestamp += START_TIMESTAMP;

  const result = {
    root,
    networkInfo,
    endDateTimestamp,
    startTimestamp: START_TIMESTAMP,
    vestingSchedules: vestingSchedulesSort,
    allocationTotalSupply: parseEther(`${ALLOCATION_TOTAL_SUPPLY}`).toString(),
  };

  if(MLTToken) {
    const isValidRoot = await MLTToken.rootWhitelist(root);

    if(!isValidRoot) {
      throw new Error(
        `An error has occurred. The tree being exported does not match the one registered ` +
        'in the contract.'
      );
    }
  }

  console.log('\r'); // Line break for better readability of messages
  return result;
}