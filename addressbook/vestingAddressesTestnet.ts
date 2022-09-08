import { parseEther } from "ethers/lib/utils";
import { VestingUsers } from "../typescript/vestingTree";

export const VESTING_USERS_TESTNET: VestingUsers[] = [
  // PRE SEED
  {
    address: "0x312F0B2B93DF482fdA0F25BaD9Af2F0E006eE87F",
    allocationsType: "preSeed",
    amount: parseEther('400000'),
  },
  {
    address: "0x5Fd08589bA4Effa9d83667e5f3E407eC2b3C65AC",
    allocationsType: "preSeed",
    amount: parseEther('600000'),
  },
  {
    address: "0x95E94fEA887320e87c834Ec8c260eC9E712F0462",
    allocationsType: "preSeed",
    weight: parseEther('0.12'),
  },
  {
    address: "0x6aFc75F986C2F0D293b07E7E737aCe75011C1AfD",
    allocationsType: "preSeed",
    weight: parseEther('0.02'),
  },
  {
    address: "0xB5B490CB06B0a87232B2F18CB8d9C4646B7e2b95",
    allocationsType: "preSeed",
    weight: parseEther('0.20'),
  },
  {
    address: "0xC076fDba9aC2c1144f52ee2aC9BD4f3317F79182",
    allocationsType: "preSeed",
    weight: parseEther('0.26'),
  },
  // END - PRE SEED
  // ########################################
  // SEED
  {
    address: "0xBc67849Ae7A1dc56b457eC4FAA504023f6cBDDb5",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0xDc52fA023D42d500CeE45082cf1cF5BCF3667193",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0x21ed04564eBCBD1268b3819642d2261f2424Ad33",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0x4cDdC75B0A11a38bBd5Af3d9dA9b79730817Df6f",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0x08b679F6C3b1f80C4f191FF0fEc0eDa581626992",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0x43DdDe3FB3E936436F983F48a964eC58E1F82E9F",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0x699590d7019CfcCb32C10f9aA3a878550953BE0f",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0xc2404ECbDbC1AE9e7F1E46B3203D3575f48B6182",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0x1D07Bdd8600eFEB2830B9C34232832BB4388eeAA",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  {
    address: "0xFB570607960C2fEC2FAAa324325036f91b44e5C9",
    allocationsType: "seed",
    weight: parseEther('0.1'),
  },
  // END - SEED
  // ########################################
  // FAIR LAUNCH
  {
    address: "0x62417e10CFF61390a9EbC60d7f3a5D83Ba0c5a60",
    allocationsType: "fairLaunch",
    amount: parseEther('12000000'),
  },
  {
    address: "0x592A6Bf2d49e076705B17cAF20ffE1342b3A6C69",
    allocationsType: "fairLaunch",
    amount: parseEther('605042'),
  },
  // END - FAIR LAUNCH
  // ########################################
  // TEAM ADVISORS
  {
    address: "0xaD53D664f8691A7861603F62f94b85201CB7B512",
    allocationsType: "teamAndAdvisors",
    weight: parseEther('0.2'),
  },
  {
    address: "0x076BB4ced1Fac8bA18FbD9111a8442150C795839",
    allocationsType: "teamAndAdvisors",
    weight: parseEther('0.2'),
  },
  {
    address: "0x7Ac1cdE87cf5493402B471d307b460A33b8381b5",
    allocationsType: "teamAndAdvisors",
    weight: parseEther('0.2'),
  },
  {
    address: "0x27fcaB4342558958414A0042a3306f0f45C70Eef",
    allocationsType: "teamAndAdvisors",
    weight: parseEther('0.2'),
  },
  {
    address: "0x08580388cA23019b27C3700cdFf617A123813601",
    allocationsType: "teamAndAdvisors",
    weight: parseEther('0.2'),
  },
  // END - TEAM ADVISORS
  // ########################################
  // SHORT VESTING
  {
    address: "0x5d6c98638C80e3804bD8FeF4A36Fe494b7bd9853",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0x37ED076C546A4E100720254131B085401579d38B",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0xCE5ABFB448647A4f8aCb850e15b312d5c6880445",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0x04e01EB94FF4e9fB37130fBbAAa8B1dFA2660E5e",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0x9D63665EF20CdBEAD78481a36a6aC8d47cAB8012",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0xd15C14B5c2Ae066135f01E983e564284adC198B0",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0x8d9b7EAdd2bc822E2b1363156593b8625548c7Cc",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0xf9Cff5f2F8d21ECe1D6d6d9d7C3104970ee64d55",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0x1B3811ec2Cc636F3A2b81A3aeD0146370396C9E1",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  {
    address: "0xDDF808A0544ef4981934aD78b9669bDE42822bf9",
    allocationsType: "shortVesting",
    weight: parseEther('0.1'),
  },
  // END - SHORT VESTING
  // ########################################
  // MARKETING
  {
    address: "0xc2307DE1438c06EBf518Ad7bF7bA5B9c3CCDf108",
    allocationsType: "marketing",
    weight: parseEther('0.2'),
  },
  {
    address: "0x3Fd0fA171AAe1B84Ec02DE03B72f68Cc77549154",
    allocationsType: "marketing",
    weight: parseEther('0.2'),
  },
  {
    address: "0xb6858fCD8B971FED0Ab02D5e1023120Af235EC34",
    allocationsType: "marketing",
    weight: parseEther('0.2'),
  },
  {
    address: "0x01c23b0d1c0DadceAbD5944A95ae7Ed10BcBf876",
    allocationsType: "marketing",
    weight: parseEther('0.2'),
  },
  {
    address: "0xE17c076442C39E4173339e6F998ffFE0F4E95BD3",
    allocationsType: "marketing",
    weight: parseEther('0.2'),
  },
  // END - MARKETING
  // ########################################
  // DEVELOPMENT
  {
    address: "0x4905fb956BF4bfCbe82f0BEa9dbfb76CA5718c05",
    allocationsType: "development",
    weight: parseEther('0.2'),
  },
  {
    address: "0x756AAff60b1273E24C90e4f73002b9Fc60ff018C",
    allocationsType: "development",
    weight: parseEther('0.2'),
  },
  {
    address: "0x11AA7AEA50D8864770a099D43D0A7a80AfDAd76E",
    allocationsType: "development",
    weight: parseEther('0.2'),
  },
  {
    address: "0xE3B8Bf5C2a1f33d39D8b92479B2d42e76E6Eb0ae",
    allocationsType: "development",
    weight: parseEther('0.2'),
  },
  {
    address: "0x0BBcc58Ae135733AC87063543a5406E01f8FbdA3",
    allocationsType: "development",
    weight: parseEther('0.2'),
  },
  // END - DEVELOPMENT
  // ########################################
  // COMMUNITY
  {
    address: "0xc2B14B31033A6820D52720D2EfE3eEB53857C978",
    allocationsType: "community",
    weight: parseEther('0.2'),
  },
  {
    address: "0xEC7871bc61D98cE3dA201d042ef25E765473f45b",
    allocationsType: "community",
    weight: parseEther('0.2'),
  },
  {
    address: "0x66915ab59092c39008E77611FF2Ef2cf23b4f426",
    allocationsType: "community",
    weight: parseEther('0.2'),
  },
  {
    address: "0x9Df5c8Df835bC4171650f05a8aed1B19325eb2D6",
    allocationsType: "community",
    weight: parseEther('0.2'),
  },
  {
    address: "0x71b2A18720024db4Ae3a6352C68b9618967FFCfc",
    allocationsType: "community",
    weight: parseEther('0.2'),
  },
  // END - COMMUNITY
  // ########################################
  // COMPANY RESERVE
  {
    address: "0x9638E41479018dDdbE27c3896591E89720C49CBF",
    allocationsType: "companyReserve",
    weight: parseEther('0.2'),
  },
  {
    address: "0xeb529d66fABc3751e4e3Bd853345C5b588650921",
    allocationsType: "companyReserve",
    weight: parseEther('0.2'),
  },
  {
    address: "0xBB5BD5dDb540834A09e20BD90501dA7301B7eA18",
    allocationsType: "companyReserve",
    weight: parseEther('0.2'),
  },
  {
    address: "0xBa7Cf42757854619448C63309344983349616eF4",
    allocationsType: "companyReserve",
    weight: parseEther('0.2'),
  },
  {
    address: "0xE0e06D2c60FEfF26cc9908b8915533794A75B09E",
    allocationsType: "companyReserve",
    weight: parseEther('0.2'),
  },
  // END - COMPANY RESERVE
  // ########################################
  // LONG VESTING
  {
    address: "0x59D01072675C1B90D617a20155AB078962fC5327",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x370857E2B5c3c9171fba3BBD4e744e3E78726A54",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x6152a59d43b394474d7448f27507B4d5c683FDa2",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x04634bc7A44BE5520eD2e4e94595919128c9af64",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xB5fe63a4E863A7b4904B03fcAea651b983587bDd",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x2Cae80f78C99Da6Ed9cce9c1Bc2d14A402309e61",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xe09fD7940Ce5a8A12Fb8CFf8Eec8a71D0ceA4B33",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xcA7f7FE4CDf1BFD90adF5b384B1C70EF484351fd",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x1C1F9EbAa951B14Eb2eef00Ba97d06B4B745e6E2",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xc6be1FF09a38160271b61E3E34d6a67B747aEB52",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x957C0601b52dF094d1B4B2605b3b2B9BBCeBF2e1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x3Adc88767bcB078e2a3E142CDac0c9A466eD377B",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xB06c800DB989fe598a32077E93f09F6AFb49315A",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xF0593Bb400B3E668c0aD3E3e1694e7563AEb7d7A",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x7499d6fcAb498bAB9038c6fa560964e2E0d3fA42",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x7a58c3398e4B3Fe2a8cE481012767a5C7E297314",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x4537421DdA668d87c97BDf1eC39652748FD0dFc7",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xe4da3516A7852Bf39B2c5E09edb11049faC5ACe8",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x5483d535A15f5371EDC64D7170B2758029a2D651",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x6F0a8c0310C6a4BEEEF10A238beA72E378136B6F",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xf5DA44ecb9DC1e6992E88E3b8ba5cD2A733aD115",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x8ffF0B6B0d0e18487731c080f2248497FA1ee165",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xF075b5A6dCb3050B7E0C749AA7a7d7Ff301756F3",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x2b9849C3321e07D40731060eb41Fe83DA823f656",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xcbe87093BDa01ff7F8FF2A84F624c6FF1a705374",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x4df32e03D37bF0e8FD049272DBCeC8f8547E2665",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x162eBb6BFFB2e38F8f18723831B99D16de31517d",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x4C39578Fc37E91aDc86E09DFe63DDFf24b69BEB0",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xc1fc641859a7633DD0c14272328c50e0514257Ba",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xCd7F5D05e38cc4d557e211486add950Cb92Af3D9",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x29A40e44eF9aB7Abb5B5D2cbB4f7E111dC8111Fe",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x841f88E40500E637A58C69C4d61d9a0076C6Fd40",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x87867Dc8e3F7f3FAF3Ef58B4040DFDDd33a9CF99",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x7C86BB1828F089f35b0523A0700033751659EaDd",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x6bd3eBcD32ef208E822D6d25Bd691cB96Ae5dFd4",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x2959908bABA96C954abE2eD43337C8F1785257C8",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x587D02a076B754bfa7EBcD5C33F4AA5F53A27A78",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x246e6Aa9C12A6E33126A6CD3612f00607369f155",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xD73C9384d9D01Dc92E6125757a280A2f9c36E6C2",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x3b66bA6eb900603058759FA648ab3843B2993735",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x84C10f1319a01541606B7C59839b894283835DDe",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x76F898826F55d09657630Ab0f39Cd42f8da57ecc",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xcF3663d1FfFe72BA2149314933a6eF97bCcDA89A",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x16068a1eE52b2D7848bFaa354aA256f91555b5fb",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xb95400E673599035c3bA4a9b8714459dB9715689",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x10599Fbe89b0C217CFE39F718bD0A6602E6F0028",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x8719E21C03276bc7C54Be0B2c9848437355dc907",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xcDeF910565cD3Eb2e4ef9b0C7626D76056fa84C1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x477004824D76F874beb22B1E8d21984043d64fB1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x4C42FA6A77349e02B6c23D37388875e4A43D56D0",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x531B4bd9Be2fab9eff358c9C2BE190d5B50cF914",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x134E949DCb70547EDD6996c2b37B2FF11a96e10e",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xe8E70915566c74370dc730fB23Cc435F16291e02",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xbdD189431227877A4Da6A90f340440E4B1c9C831",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x52B1F57d1F239d976b296227415bAA2281a516C2",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xCEE697A4Fe8a7b17D8BE1946163a6335312b280e",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xb003c286E5472e8ac572CFbd1359e15777c66fe5",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xD16aeca1c5867aBdD89578b0Cce9784689C5A8F9",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x728191a0DDd52A58Cb697C4AB1E1D4Def6155787",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x52c510805dCd5F1ACC1adCb5E7aaf32BA52a422b",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x860702683800a1258eE1F6f05B063e5c08201A22",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x724210d049F16d8B0F861Ab668c370489D856939",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xCFAE483A7a5652d869bDD71276c0339fF6Fc0D68",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xfD7DE5601379D0Ee0EEA06C51fDFcF90c75fd0f1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x9c7C3FBB213bC6cc8fc34980B71679C30189cf69",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xa722Fe73E5e7E1501e4796bddAFc7609b8a10f12",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x83dC640dBAE0187e9b7440e459877a29a65cFc1c",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x2aa03D5dbE628E4CEAE29Ac425a9650531A60Ce4",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x532d9ae446754D209a7E180ffC3ec9B090AE84A4",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x9fB3aCd71Dfd7b5EE2A36Ff7F5510Fd0D4b3B1E1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xF1Efe50Ecd8FFAb4b79Fdc922faeB7864A692fD8",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x87f8F78B25e81B75f49Cc77D0e1927D449E2FB4a",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xd0372540a054acce77Fab72f2d8D2115Adf631E3",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xd4fE26cb421Dd126E2e7e655dE1c722Fe26E49AB",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x9f4829cFC3886800E7cD938aF57344b8223395E7",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x31FAdba92E2D4C7c19a890F620174cc948eEf862",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x3106331E070924ff49B1DeD8E69b621695bB8946",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xE6B39B75c29a76F85C11164Ce080AF33e4f756b3",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xD169C053b22b1308C73dcBA587EC62f5798570b1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x7014d15Fe36b0b83B023c0DF96D17c73Eb1166ac",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xBB30b5464eb445BAdeb746bB79CA212F6407d159",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x1468047D34A5EDcaFa4aBB97fE2DD69Ea955A337",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xfdc3A9b5C1FA23377474C674dAB71aCc9C3e9210",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x23009146cbC3B594177ee6526A87c8c1799b991D",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x2BDE142f38B8bb9C6F36B263032461B59bCE277f",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x310Ee819C3Ce871Ea2ac99909F5872b9dBD5e3d9",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x08640D03b321Cb6dc3bE2874c8E1d4ce6a33269a",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x24C4f5b59F556d56A3fa0b17B9Cd8E1b26743EE6",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x9B872680A3bAf49E2754D4446B0D4c901A381FD1",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x0B704F1F2Cd4c8bfe58b1f026f5F064edC6952C3",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xb7B1f33971043615880fD2bF79E90D47B9b4f50C",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x89182d44BbA539B114371319206C0331df7EBadf",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x344D5F11F5987F6dd72857Bc861dB0b4A23398bd",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x11e665C3E54fc91b4c5e0f9B2c1B50C16C6f0Fd3",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xa88F647766D9E165DA60c5fC68c202E7b9C932E5",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x9091463D3618Cbf36CEB649B9A4f58abe76eFafD",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x1FFeE01AF3f5773A9E47cE4be2bE215F4Eb746d4",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x124e49B54C747d2b558b3c18580F0cEBdC253296",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0xE9De25FF5e2038287728562Ad78D6d0B00c00FaB",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x5a285b82E275aAa6F123Ee9cd022F5567D995B37",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x26f13E8a6932Ea9a7148eD9CEDF3aa6B6ECE2008",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x2428A6081B4B360eaA918423E30F16A389bE27C0",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x51Bdfc725ED1B078295C3eb101FFE91e1686B1AB",
    allocationsType: "longVesting",
    amount: parseEther('500000'),
  },
  {
    address: "0x73f7B3cA2f68D2f0Ef616B03fb944a7F8C3095da",
    allocationsType: "longVesting",
    amount: parseEther('380000'),
  },
  {
    address: "0xFe23e42f19e9aC39B533da076F1eA7A21e8a82A7",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0x8b67e30774519624be3c180925091d74aF3807a8",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xeC926d836c1a4C02521f1879EAb9b16920c8Bd80",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0x653a1337D16F676f24eE1faE6c65519fFC6c3C0A",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0x6C7FCE947979759aa99259C30501AAC0447A4409",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xCCA7D535D3fC76B9db2A2c8B928DeCBF38b1A3da",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xA9a5cE4a6e0Cf6eB6360840545cCee04DC74dC9B",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xCdeD585529d49A08b7F9bF90ad5A9B89fC9202E7",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xe426edeDE55c62f6480f7dD27E5655F77980cc4b",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xCdB3B8033AaB8a6d9725012e2903D2b6094534BA",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0xf054B3be23AEc89E44179fe38A848A6906ad5587",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  {
    address: "0x702A985D93a894D0e0AC82d50B9A510510b8dFf4",
    allocationsType: "longVesting",
    amount: parseEther('10000'),
  },
  // END - LONG VESTING
  // ########################################
  // PUBLIC SALE
  {
    address: "0x795AC1C7f5415FFb7029a8Be4EeD48011c2e45ba",
    allocationsType: "publicSale",
    weight: parseEther('1'),
  },
  // END - PUBLIC SALE
  // ########################################
];
