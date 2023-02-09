import { parseEther } from 'ethers/lib/utils';
import { Web3Storage, File } from 'web3.storage';
import { VestingTree } from '@mintlayer/vesting-tree';

import { vestingTreeExportData } from '../helpers/vestingTreeExportData';
import { TREASURERS, VESTING_USERS } from '../addressbook/vestingAddresses';
import {
  ALLOCATIONS,
  ALLOCATION_TOTAL_SUPPLY,
  VESTING_START_TIMESTAMP,
} from '../constants';

/* types */
import type { Accounts } from 'typescript/hardhat';
import type { DeployFunction } from 'hardhat-deploy/types';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN || '';
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts() as Accounts;

  if(!VESTING_START_TIMESTAMP) throw new Error('VESTING_START_TIMESTAMP undefined');

  const startTimestamp = VESTING_START_TIMESTAMP.unix();

  const tree = new VestingTree({
    users: VESTING_USERS,
    allocations: ALLOCATIONS,
    balance: parseEther(ALLOCATION_TOTAL_SUPPLY.toString()),
    vestingStartTimestamp: startTimestamp,
    treasurers: TREASURERS,
  });

  const treasurersArray: string[] = [];

  for(const { address } of TREASURERS) {
    treasurersArray.push(address);
  }

  const proofSupply = tree.getHexProof(
    tree.balancehash(parseEther(ALLOCATION_TOTAL_SUPPLY.toString()))
  );

  const root = tree.getHexRoot();

  if(!network.tags.local && !network.tags.staging) {
    throw new Error('Before moving to productive environment run a double validation of the variables/settings and then remove this error');
  }

  let URI_IPFS = '';

  if(!network.tags.local) {
    const { vestingSchedules } = await vestingTreeExportData({ tree, network, startTimestamp });

    const metadata = { root, vestingSchedules };

    const filenameIPFS = 'vestingTree_data.json';

    const dataToStore = new File(
      [Buffer.from(JSON.stringify(metadata))],
      filenameIPFS,
      { type: 'application/json' }
    );

    const clientWeb3Storage = new Web3Storage({ token: getAccessToken() });
    const metadataCID = await clientWeb3Storage.put([dataToStore]);

    URI_IPFS = `ipfs://${metadataCID}/${filenameIPFS}`;

    console.log(`Gateway IPFS: ${URI_IPFS}`);
    console.log(`Gateway HTTP: https://gateway.ipfs.io/ipfs/${metadataCID}/${filenameIPFS}`);
  }


  await deploy('MLTToken', {
    log: true,
    from: deployer,
    args: [
      // string memory _name
      'MLTToken',
      // string memory _symbol
      'MLT',
      // string memory _supply
      ALLOCATION_TOTAL_SUPPLY,
      // uriIPFS_ IPFS URI for the initial vesting tree data.
      URI_IPFS,
      // _vestingTreeRoot Vesting tree root hash.
      root,
      // _vestingStartTimestamp Timestamp of vesting start as seconds since the Unix epoch
      startTimestamp,
      // _proofSupply Proof of total supply
      proofSupply,
      treasurersArray, // treasurers_ Addresses of authorized treasurers
    ],
  })

  // const MLTToken = await ethers.getContract<IMLTToken>('MLTToken');
}

func.tags = ['MLTToken'];

export default func;