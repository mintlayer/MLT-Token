import chaiModule from 'chai';
import { chaiEthers } from 'chai-ethers';
import { solidity } from 'ethereum-waffle';

chaiModule.use(solidity);
chaiModule.use(chaiEthers);

export = chaiModule;