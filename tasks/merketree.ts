import keccak256 from 'keccak256';
import { task } from 'hardhat/config';
import { MerkleTree } from 'merkletreejs';
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

task('merkletree')
  .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const { ethers } = hre;

    const leaves = [
      { value: '0x5071021B3AfF70966C16abD14bb1888cB648C8a0', amount: 100 },
      { value: '0x2931e1a157bc6eF91f024c13E35A39383Cc9b7E1', amount: 100 },
      { value: '0x75962E1CAdac5c871F3aD997eeDAc15aA95E15A5', amount: 100 },
      { value: '0x24c3E89FEEB184709cFb0C5F00f180CDFD847DaA', amount: 100 },
      { value: '0xb8891Ac4f43cCBdB307B23B4376147cd2f69bebd', amount: 100 },
      { value: '0x6688cf428a3109eF89A4883B77aaa2BBf28F1e87', amount: 100 },
      { value: '0x7c8348481482745E986ac83D7F475514f1d19159', amount: 100 },
      { value: '0x163f1E37438db39dA9fC9E18c3C3D48951392778', amount: 100 },
      { value: '0x9F209aA154eF96373D050b633916F78e5552DE8b', amount: 100 },
      { value: '0x88e958C0443dD30787F4f5f43f8DCf39d0B5a800', amount: 100 },
      { value: '0xD38f91eecBc7ea42d3462F0C1Cf8D9Ab16D47e29', amount: 100 },
      { value: '0xcD0A085296D874707Eeab42c41Da9d1fe56058B2', amount: 100 },
      { value: '0x564E0d28F922c2c45C459896E9E1018FD0F8d2d6', amount: 100 },
      { value: '0x4EBCdd1225353DD14FeF1c7fFc710b77FDa4d94c', amount: 100 },
      { value: '0x4b05B91127973c51Da60b1222A49b09D71aA0cac', amount: 100 },
      { value: '0xc2154A9f09B145D92C06B8E772ECD713979Ee04c', amount: 100 },
    ].map(el => {
      return ethers.utils.solidityKeccak256([ 'string', 'uint' ], [el.value, el.amount])
    });

    console.log('leaves', leaves);

    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

    const root = tree.getHexRoot();

    const leaf = ethers.utils.solidityKeccak256(
      [ 'string', 'uint' ],
      ['0xc2154A9f09B145D92C06B8E772ECD713979Ee04c', 100 ]
    )
    const proof = tree.getHexProof(leaf);

    console.log('leaf:', leaf);
    console.log('tree root:', root);
    console.log('proof:', proof);
  })

