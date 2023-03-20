import { parseEther } from "ethers/lib/utils";
import { VestingUsers } from "@mintlayer/vesting-tree/dist/types";

export const TREASURY_MAINNET: VestingUsers[] = [
  {
    address: "0x677146C7F8621E0F4acE2Fe0008cf790D83DcEe6",
    allocationsType: "seed",
    amount: parseEther("11786680.7642857"),
  },
  {
    address: "0x7Ef9822cC9Dd5d668f6c44B3D34f943945057273",
    allocationsType: "longVesting",
    amount: parseEther("88908.61155286"),
  },
  {
    address: "0xa01a628BBEce2395b7DaB5FCe7EaD6823D694f3B",
    allocationsType: "shortVesting",
    amount: parseEther("6879222.7099807"),
  },
  {
    address: "0xac0C7A82A88850c7251c688f1862E28cbaa1cAb5",
    allocationsType: "marketing",
    amount: parseEther("48000000"),
  },
  {
    address: "0x8e3e3e4834974f15d28325D0A4dfD5c8CFC4F8e2",
    allocationsType: "development",
    amount: parseEther("40000000"),
  },
  {
    address: "0xBB6cfE51Fa5926B054489A8D2609CAe4543f3187",
    allocationsType: "community",
    amount: parseEther("20000000"),
  },
  {
    address: "0xD5160Cb812d7BC4291b534621D2F4532f499ECEa",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("1367769"),
  },
  {
    address: "0x019731DFeDf995F23A4f884FE1256fccA1b2a92b",
    allocationsType: "companyReserve",
    amount: parseEther("106900000"),
  },
];

export const VESTING_USERS_MAINNET: VestingUsers[] = [
  ...TREASURY_MAINNET,
  {
    address: "0x3FD963a08953A344FdA2303d692fDeE017280f6d",
    allocationsType: "longVesting",
    amount: parseEther("6388.347"),
  },
  {
    address: "0x32b5eC49b7737F3E07c3aE52105802bf4dff10Fd",
    allocationsType: "longVesting",
    amount: parseEther("6378.347"),
  },
  {
    address: "0xB29314b394a74905Cf4caE802f1FAb29EBe00113",
    allocationsType: "longVesting",
    amount: parseEther("6373.347"),
  },
  {
    address: "0x44f8e910aF7fd12107839A422632e35Ef21387E2",
    allocationsType: "longVesting",
    amount: parseEther("6373.347"),
  },
  {
    address: "0x127271a219582e81726C46E8BFD4b5769476fa5F",
    allocationsType: "longVesting",
    amount: parseEther("6373.347"),
  },
  {
    address: "0xB012Ca002F2C8f6288F348C9C8f89239f5d31abb",
    allocationsType: "longVesting",
    amount: parseEther("6373.347"),
  },
  {
    address: "0x85Aa3f6F2996bB34d392Adb2062354b7b32BDBAF",
    allocationsType: "longVesting",
    amount: parseEther("6248.347"),
  },
  {
    address: "0x60A09FbA93EE4af448F30D28A7B3494cA99c23DD",
    allocationsType: "longVesting",
    amount: parseEther("6248.347"),
  },
  {
    address: "0x081283ec01601dc4B9BB89133c25f6899636d78D",
    allocationsType: "longVesting",
    amount: parseEther("6248.347"),
  },
  {
    address: "0xBCB43d69d9385ab2e281D2758e5e7305f92723e9",
    allocationsType: "longVesting",
    amount: parseEther("6243.347"),
  },
  {
    address: "0x6B7d79bD40Aef55822459afD00Ee9208e6a055D9",
    allocationsType: "longVesting",
    amount: parseEther("6238.347"),
  },
  {
    address: "0xaC9189e38C6F24E4E559A06E3d6B371E6f96fb6f",
    allocationsType: "longVesting",
    amount: parseEther("6238.347"),
  },
  {
    address: "0x3fCC4F056f069EAB52a02102b2Ad1e16CbE8C97A",
    allocationsType: "longVesting",
    amount: parseEther("5730"),
  },
  {
    address: "0xd55f72054625C504d256a2674Cb71C2a4caDA594",
    allocationsType: "longVesting",
    amount: parseEther("4250"),
  },
  {
    address: "0x7400ABd79F89dB73CEB08b00AAecd2dC1D6ef0EE",
    allocationsType: "longVesting",
    amount: parseEther("3550"),
  },
  {
    address: "0xE933F9EF35fC728381b36245FD888851Ffc6017E",
    allocationsType: "longVesting",
    amount: parseEther("3493.526"),
  },
  {
    address: "0x56C9Df5246459B1aa9Bbde2252D3a59d4CE2Ef26",
    allocationsType: "longVesting",
    amount: parseEther("3493.526"),
  },
  {
    address: "0x8F6e77A4D4851C377f7E63D2520C56E7ffaC2562",
    allocationsType: "longVesting",
    amount: parseEther("3493.526"),
  },
  {
    address: "0x8FAECd59486a9e544b1a510FA205dA00097f7Cc6",
    allocationsType: "longVesting",
    amount: parseEther("3483.526"),
  },
  {
    address: "0x1797c713E0fb79926D689D0C8557d1d0EAFb2007",
    allocationsType: "longVesting",
    amount: parseEther("3350"),
  },
  {
    address: "0x7239073c30FcEbf60B2ECaDEBABCCC000891bdae",
    allocationsType: "longVesting",
    amount: parseEther("2306.115"),
  },
  {
    address: "0x478f43c6654757CFF41C716B25c6C05b3A2379b3",
    allocationsType: "longVesting",
    amount: parseEther("2296.115"),
  },
  {
    address: "0xD13aa55406FE95Fd7AE6858A626467c065D54389",
    allocationsType: "longVesting",
    amount: parseEther("2296.115"),
  },
  {
    address: "0x9c37b1E0c2aF0C5A8BC4BA129E82Bff6681CFdeb",
    allocationsType: "longVesting",
    amount: parseEther("2291.115"),
  },
  {
    address: "0xDC5DEf9A7852dBC945A2b978554030E36057dDdF",
    allocationsType: "longVesting",
    amount: parseEther("2291.115"),
  },
  {
    address: "0xca722Ad3c74D2822216A26C9AC88aD46fA730498",
    allocationsType: "longVesting",
    amount: parseEther("2261.115"),
  },
  {
    address: "0xC596dE54f9DdC30ed36A747eB331FE25abD0A46f",
    allocationsType: "longVesting",
    amount: parseEther("2251.115"),
  },
  {
    address: "0x1c8DF7374d5e455e809438a51dd1b2b957fB2A2E",
    allocationsType: "longVesting",
    amount: parseEther("2251.115"),
  },
  {
    address: "0x507d0E9F12447DD1055d98bF82C92F17650fB8b5",
    allocationsType: "longVesting",
    amount: parseEther("2251.115"),
  },
  {
    address: "0x864EdA856735Cba70bb70B87D8f50273AAebB41b",
    allocationsType: "longVesting",
    amount: parseEther("2251.115"),
  },
  {
    address: "0x32987082c43992e3B2B02c9398213b3341670E61",
    allocationsType: "longVesting",
    amount: parseEther("2246.115"),
  },
  {
    address: "0x8c6AB4f49F1589c47c775b103f828c0C7f687e5B",
    allocationsType: "longVesting",
    amount: parseEther("2246.115"),
  },
  {
    address: "0x6EE086f913Be6a3345BDB4d62A72b101080849A8",
    allocationsType: "longVesting",
    amount: parseEther("2246.115"),
  },
  {
    address: "0x06Db7580eb0F406347Cf6cBD78a7a886E2C6198d",
    allocationsType: "longVesting",
    amount: parseEther("2241.115"),
  },
  {
    address: "0x1Cd44bFB925A41ea694D50F6D9F2b762E99626CC",
    allocationsType: "longVesting",
    amount: parseEther("2241.115"),
  },
  {
    address: "0x23C4D84A1C89a05Ea10416D6ce8b48531668bBBE",
    allocationsType: "longVesting",
    amount: parseEther("2241.115"),
  },
  {
    address: "0xD5972EB267792C21bb76728301a8b0EAa0A75B26",
    allocationsType: "longVesting",
    amount: parseEther("2241.115"),
  },
  {
    address: "0xAb7B42E03F7A4F186F76A746C2D6230e33B9F5aC",
    allocationsType: "longVesting",
    amount: parseEther("2241.115"),
  },
  {
    address: "0x1BfB28B94BB6dE53779c2c4eC289BCe37745016a",
    allocationsType: "longVesting",
    amount: parseEther("2241.115"),
  },
  {
    address: "0x4F86db1d3A29Aa29FE60CFc9E83e0fdb2374Be96",
    allocationsType: "longVesting",
    amount: parseEther("2166.115"),
  },
  {
    address: "0xEE3f71522Fe15D2EA5898cac383Bb48f57F5A907",
    allocationsType: "longVesting",
    amount: parseEther("2146.115"),
  },
  {
    address: "0x335A2cC9106338B8c96a1427C662a70d308Df826",
    allocationsType: "longVesting",
    amount: parseEther("2136.115"),
  },
  {
    address: "0x905F9BAA2332c8A3399D77D6A0BD094e9B11d9F0",
    allocationsType: "longVesting",
    amount: parseEther("2131.115"),
  },
  {
    address: "0xd1E206386cd9cea2C5DC80159dFE59D9A9DcC40d",
    allocationsType: "longVesting",
    amount: parseEther("2131.115"),
  },
  {
    address: "0x40F4c8B63fEb9Cdd3628320607F8a89d4914352A",
    allocationsType: "longVesting",
    amount: parseEther("2126.115"),
  },
  {
    address: "0x1C690814Afb38930F70A3679033b4c53Cd72aB1c",
    allocationsType: "longVesting",
    amount: parseEther("2121.115"),
  },
  {
    address: "0x1C03eff3d2a35dF54f243EEcFe491288DF64af20",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x1509d0cF64fe6b6EdB76Fa69e86f05b79e611D0a",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x2CcA11b71a75B1ACD5D590E2223Ff3C23bA3CF6D",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x04E8cAE241235cceB521d5ba4d18BA4Bf4FA84BD",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x592b0BD44b15Ba95Ce2B936bEf3420d1D9397829",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x838F6F37c9034276660dcFe9917c3aF4B13daF6D",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x3fA7f5e55abEb4042D778Cc86534195Ed94fd804",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0xA36f079E7f0c047162409e27DFECA30772E02716",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0xD9c33e32c7dB8D97521b14eC918c8598115635dC",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0xfC6450cEaD35c4162c6c6F137B3D9a92C6589180",
    allocationsType: "longVesting",
    amount: parseEther("2116.115"),
  },
  {
    address: "0x3Fd184Ce671a131cd0cc32F012d0390C6d6069B6",
    allocationsType: "longVesting",
    amount: parseEther("2111.115"),
  },
  {
    address: "0x0784551edB67977C9662c50Ad6fD65426B9b61C6",
    allocationsType: "longVesting",
    amount: parseEther("2111.115"),
  },
  {
    address: "0xa9B08068AF5A6F9603Ec302327f6B5c3480776a7",
    allocationsType: "longVesting",
    amount: parseEther("2111.115"),
  },
  {
    address: "0xb08ad9697e2634b9BaF26ED470fA8F186E760d36",
    allocationsType: "longVesting",
    amount: parseEther("2111.115"),
  },
  {
    address: "0x81dA53C5b174731B79b4253d3910E2eEC3Dd4958",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0x4da0b87F3e690613824021A45d4eD7bFFcAE8e57",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0x4e00CA2CcCF98319Eb48F923B3124Fee53aD4A29",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0x1baE39E2FA49ce4C641D00aEf8A57De10093739C",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xF92F9C53959079200884291d6Cb6594D315121B3",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xdd5709c22B4b756143ee1B75b1855C063017897F",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xf66669c98de70c89293fca96cadb0a312c8aedd4",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xEAAEe5FD62d8b31E6287983B7ecaa2D16f56A57A",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0x53a15A8c187820720b94463f31c57c641a564f13",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0x20cA02fC3d225F0ea3Dd660A34E3FF9d07a7D2bD",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xdE8D80a173DF549eDA90B42ADc21165154233be8",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xbF110beC0ad59Ce25faaD8AeA4E2671422996e31",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0x3FbAFCbF22dF3B0b232266B773FfA694AceA0dcF",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xF5067c558f16A8840814218Fa27Ac4000a504D1d",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xaF70f86DaBc018731f58e58B568b4587E1347585",
    allocationsType: "longVesting",
    amount: parseEther("2106.115"),
  },
  {
    address: "0xDfc8F34Ad891cbC9e2FcB1f1F9AC0b6BD7C08Ac5",
    allocationsType: "longVesting",
    amount: parseEther("2076.115"),
  },
  {
    address: "0x950BE6a2A597f7d9599794E466591D2f1371185F",
    allocationsType: "longVesting",
    amount: parseEther("2076.115"),
  },
  {
    address: "0x225A36f4bDcdD342C759a212024C3Aa4ea3376F3",
    allocationsType: "longVesting",
    amount: parseEther("2076.115"),
  },
  {
    address: "0xC944fd468370dE73f37C887168F3b716EA0c3E3B",
    allocationsType: "longVesting",
    amount: parseEther("2076.115"),
  },
  {
    address: "0x5Ee08929b09db694bd4a334fE2185Ed8f9fb2b23",
    allocationsType: "longVesting",
    amount: parseEther("2076.115"),
  },
  {
    address: "0x5b966C1060e46bAa34Af6A9016D4825248905e0C",
    allocationsType: "longVesting",
    amount: parseEther("2071.115"),
  },
  {
    address: "0xAd69ce351D15298632F52D73a3A21331938647ba",
    allocationsType: "longVesting",
    amount: parseEther("2071.115"),
  },
  {
    address: "0x8d8e49B741913f6B5766F1FF96809b680521bF07",
    allocationsType: "longVesting",
    amount: parseEther("2066.115"),
  },
  {
    address: "0xdb6b182bB205F3B20AcDDdE8E3FB64a1224d6772",
    allocationsType: "longVesting",
    amount: parseEther("2066.115"),
  },
  {
    address: "0x0Ed63aaAd9F9e4AeC77b06858E2cCb1AFadC2d34",
    allocationsType: "longVesting",
    amount: parseEther("1705"),
  },
  {
    address: "0x1993d864B1137455a1Ae23940622AaCe65573B32",
    allocationsType: "longVesting",
    amount: parseEther("1245"),
  },
  {
    address: "0xdfE5E9374F6b82eCC436186d513d0b0243502201",
    allocationsType: "longVesting",
    amount: parseEther("1213.057"),
  },
  {
    address: "0x23E129b941d46E8fb3Bf4003Cdca02A43F11Df83",
    allocationsType: "longVesting",
    amount: parseEther("1213.057"),
  },
  {
    address: "0xc370c1bf4d096d742D33F3858d3ff58Cb93C0B12",
    allocationsType: "longVesting",
    amount: parseEther("1208.057"),
  },
  {
    address: "0xEa7e973F3ac123d3ef4f6a3F0f0CCA88918a7EA0",
    allocationsType: "longVesting",
    amount: parseEther("1208.057"),
  },
  {
    address: "0xe6D5e3215b7f15070Ad5cCCE217Bb5B9D0E7fb53",
    allocationsType: "longVesting",
    amount: parseEther("1175"),
  },
  {
    address: "0xad3Abf58B3EC62F53f47400F50F06961ffe22d39",
    allocationsType: "longVesting",
    amount: parseEther("1140"),
  },
  {
    address: "0x173e3D19D00554729EA1B6b27AdDBFc06fb71fF0",
    allocationsType: "longVesting",
    amount: parseEther("1083.057"),
  },
  {
    address: "0x6f6e4Fe3501E0eb984Cb8b4c0BfA8b37412fdb0f",
    allocationsType: "longVesting",
    amount: parseEther("1083.057"),
  },
  {
    address: "0x80934bAB0591F66DAFd8b0791836663D9DEbD77d",
    allocationsType: "longVesting",
    amount: parseEther("1083.057"),
  },
  {
    address: "0xE692256D270946A407f8Ba9885D62e883479F0b8",
    allocationsType: "longVesting",
    amount: parseEther("1073.057"),
  },
  {
    address: "0x20189d5d89651E4C80d2828940D2eC84BB870688",
    allocationsType: "longVesting",
    amount: parseEther("1073.057"),
  },
  {
    address: "0x427c90ebf38504BECC405932b78cA8CFB11faBC7",
    allocationsType: "longVesting",
    amount: parseEther("1043.057"),
  },
  {
    address: "0xe1f05A8e3204eaBB49cdece88B1b0138CA5389f4",
    allocationsType: "longVesting",
    amount: parseEther("1033.057"),
  },
  {
    address: "0x76851a6f9146cc9ec57A0e18b20120F5cb9B3bEe",
    allocationsType: "longVesting",
    amount: parseEther("1033.057"),
  },
  {
    address: "0xf915Da10e5136352Ba049acB0545Deb119054256",
    allocationsType: "longVesting",
    amount: parseEther("960"),
  },
  {
    address: "0x7e51F4F8d54D6B2c468D0C2A6Fa53ad465c5eEee",
    allocationsType: "longVesting",
    amount: parseEther("960"),
  },
  {
    address: "0xf14395Fde0004DABD6E4c1bAdad559BFCB95923e",
    allocationsType: "longVesting",
    amount: parseEther("868.705"),
  },
  {
    address: "0x8B63739704b99c5EA5332233bFF889eD5b0603FE",
    allocationsType: "longVesting",
    amount: parseEther("855"),
  },
  {
    address: "0x10583C3DA99f7E980F58a778AEd174DDdA2A4812",
    allocationsType: "longVesting",
    amount: parseEther("793.705"),
  },
  {
    address: "0x8C2030174e4CC9A01F10939bE05a215496e34722",
    allocationsType: "longVesting",
    amount: parseEther("765"),
  },
  {
    address: "0xA873c2Ab17684Fe6dB1870a5c160C6674E3EAD48",
    allocationsType: "longVesting",
    amount: parseEther("738.705"),
  },
  {
    address: "0xD587700f3EA58A1f95b38DDD9992D643a6733092",
    allocationsType: "longVesting",
    amount: parseEther("730"),
  },
  {
    address: "0x34a06b34a56548dD7DBdE77b64952503CE89E48a",
    allocationsType: "longVesting",
    amount: parseEther("710"),
  },
  {
    address: "0xd0E5f47131772F424Cc4eBDe9c974F33781FEE37",
    allocationsType: "longVesting",
    amount: parseEther("705"),
  },
  {
    address: "0xFEE36C593A39e68efAB66C7ca0A38242344f68e6",
    allocationsType: "longVesting",
    amount: parseEther("675"),
  },
  {
    address: "0x73A0A757f7402CCBcFf22bCFD7f74b5146a1d6ed",
    allocationsType: "longVesting",
    amount: parseEther("630"),
  },
  {
    address: "0x8B147C4dB4e2616C0bAcfb29F5C61589BC0dE4dC",
    allocationsType: "longVesting",
    amount: parseEther("585"),
  },
  {
    address: "0x9358c90A6f90b35bbC65e773Dd622F03d94eF81A",
    allocationsType: "longVesting",
    amount: parseEther("580"),
  },
  {
    address: "0x4380f9e4b408601ca2952eb8c8f26f09f4434ddb",
    allocationsType: "longVesting",
    amount: parseEther("534.352"),
  },
  {
    address: "0xb5b47d935a23Bf09c9fe1f47A34b2BC494849ab7",
    allocationsType: "longVesting",
    amount: parseEther("530"),
  },
  {
    address: "0xdAD1971fE99b115fA6e357C4De78EBAcB623e23b",
    allocationsType: "longVesting",
    amount: parseEther("530"),
  },
  {
    address: "0x29C7a96addF29a7bA20729958f4beCe0AaC51973",
    allocationsType: "longVesting",
    amount: parseEther("530"),
  },
  {
    address: "0xc79962E5B7652040629a6bBf3F0eAdF118e49127",
    allocationsType: "longVesting",
    amount: parseEther("519.352"),
  },
  {
    address: "0x3374E4fc93E23453e042C8A41DE15EE1062Cd470",
    allocationsType: "longVesting",
    amount: parseEther("515"),
  },
  {
    address: "0xe18ffC84175cfB6b6a9D8C609082E91444CF5c6d",
    allocationsType: "longVesting",
    amount: parseEther("515"),
  },
  {
    address: "0x7114FDDF2F16A737726267990CCD9937f1d03e9D",
    allocationsType: "longVesting",
    amount: parseEther("490"),
  },
  {
    address: "0x86813Ac69D86Bc1aA7E18765bFB6c8250FE098F9",
    allocationsType: "longVesting",
    amount: parseEther("480"),
  },
  {
    address: "0xD4d6A630F32BB635462Ca00C98C8cCbCA26a7C89",
    allocationsType: "longVesting",
    amount: parseEther("440"),
  },
  {
    address: "0x7595B1E5e5d9F969538fB321ae25c3B374724B67",
    allocationsType: "longVesting",
    amount: parseEther("430"),
  },
  {
    address: "0xeaBd7111893CF517CC465e979e89cEC6Dc5d2d81",
    allocationsType: "longVesting",
    amount: parseEther("399.352"),
  },
  {
    address: "0x8ac4ed6897e186c2055806A76b6A26E5026d8Aa7",
    allocationsType: "longVesting",
    amount: parseEther("394.352"),
  },
  {
    address: "0x863dc47a446697851044a96Ad21Dd7d6f64Aa6A4",
    allocationsType: "longVesting",
    amount: parseEther("394.352"),
  },
  {
    address: "0xf1E8Cd5DCBf88B161601c3E4Ed3e5A9E1e70730d",
    allocationsType: "longVesting",
    amount: parseEther("384.352"),
  },
  {
    address: "0x3c7dFB7cB5DB8D799b5c3c305a1a69B4BA71d4fF",
    allocationsType: "longVesting",
    amount: parseEther("380"),
  },
  {
    address: "0xA17011f96Bc99f0825270Ed27417bFE673476A1a",
    allocationsType: "longVesting",
    amount: parseEther("370"),
  },
  {
    address: "0x8952A1151BA47fC1C24E44062642aD88F8C42442",
    allocationsType: "longVesting",
    amount: parseEther("365"),
  },
  {
    address: "0x614152e2e05e97b37c48825699915d8418f0fece",
    allocationsType: "longVesting",
    amount: parseEther("360"),
  },
  {
    address: "0xCF9d22F3ff4C49cF19a922b4f3769a18419702bd",
    allocationsType: "longVesting",
    amount: parseEther("355"),
  },
  {
    address: "0x0308B731F7d0120fA982b6E9c5E35a11333f7B27",
    allocationsType: "longVesting",
    amount: parseEther("355"),
  },
  {
    address: "0x44F90f03E6EeaeB96335b23d4A9CC5e4f86490fC",
    allocationsType: "longVesting",
    amount: parseEther("355"),
  },
  {
    address: "0x2Fbc54888950d42196A74cc9516f4971fd0cC14c",
    allocationsType: "longVesting",
    amount: parseEther("344.352"),
  },
  {
    address: "0xCB50a33D1AF25130B939B120A5c1EAc768dbd880",
    allocationsType: "longVesting",
    amount: parseEther("335"),
  },
  {
    address: "0x0758B0937Cc91229ceE018ed6Fd6118C1147c499",
    allocationsType: "longVesting",
    amount: parseEther("335"),
  },
  {
    address: "0xCe38a21E996455F2fc9C87896B751E167351Ca98",
    allocationsType: "longVesting",
    amount: parseEther("330"),
  },
  {
    address: "0x80aA18e1bA82Ab0cBb3DA795b3feA7c3f8CB7C83",
    allocationsType: "longVesting",
    amount: parseEther("330"),
  },
  {
    address: "0x49C35ce59ed79DA58F1fC8CC633dE58faC6F55F8",
    allocationsType: "longVesting",
    amount: parseEther("325"),
  },
  {
    address: "0xdD65C5E9d1D4124A4730A9BaD9BA5784F9B1d1EC",
    allocationsType: "longVesting",
    amount: parseEther("315"),
  },
  {
    address: "0xFcA319F920B6757A247C78e39be29E41e3603e8B",
    allocationsType: "longVesting",
    amount: parseEther("315"),
  },
  {
    address: "0xD0798d8AcdB95A3f980A39bf908F5Ebc015304Bd",
    allocationsType: "longVesting",
    amount: parseEther("315"),
  },
  {
    address: "0x7af07ee6B6D85d134416383c75116594508b4b18",
    allocationsType: "longVesting",
    amount: parseEther("305"),
  },
  {
    address: "0xD4de4DE57f5a79201162e1DE70084B539C0EE433",
    allocationsType: "longVesting",
    amount: parseEther("300"),
  },
  {
    address: "0x966958570fEC2a6DA8D634b1aA25dB9a606Bf162",
    allocationsType: "longVesting",
    amount: parseEther("295"),
  },
  {
    address: "0xF27878d1f88059a347e853437BE5d612DB6d86aD",
    allocationsType: "longVesting",
    amount: parseEther("285"),
  },
  {
    address: "0x0260564d7019FC0Be7946e48151dD6711e612c3D",
    allocationsType: "longVesting",
    amount: parseEther("280"),
  },
  {
    address: "0xBF9c8c0C45e8A096570Cf8183501Dd0186911d13",
    allocationsType: "longVesting",
    amount: parseEther("280"),
  },
  {
    address: "0x2b5d8c0B9FB17e3c3B56FEE12212c8e40Ce4F1F2",
    allocationsType: "longVesting",
    amount: parseEther("275"),
  },
  {
    address: "0xE2a136EFd6769c6d77b0b8a09D34aF172FAB89e1",
    allocationsType: "longVesting",
    amount: parseEther("270"),
  },
  {
    address: "0x02E7b64460094FF5F82aC2f7802E0833530AA9bc",
    allocationsType: "longVesting",
    amount: parseEther("260"),
  },
  {
    address: "0x5ca7eAC6bC9Eea9fc4842De1957d714074518562",
    allocationsType: "longVesting",
    amount: parseEther("260"),
  },
  {
    address: "0xd94282711BCa65F25A180b91Fe9b65Bd69fF6DD0",
    allocationsType: "longVesting",
    amount: parseEther("250"),
  },
  {
    address: "0x5208EB49197e94ECB8B471eAaF9D640846b0a2d0",
    allocationsType: "longVesting",
    amount: parseEther("245"),
  },
  {
    address: "0x4C0ee384EF580E5532Bd48702Efe15c7d2AB8C55",
    allocationsType: "longVesting",
    amount: parseEther("245"),
  },
  {
    address: "0xa4026608c63744182f8b07dE8379fD689e2826F9",
    allocationsType: "longVesting",
    amount: parseEther("245"),
  },
  {
    address: "0x9ba4ab921CF526abAc0277f5EB98fFd0Ad10D07f",
    allocationsType: "longVesting",
    amount: parseEther("240"),
  },
  {
    address: "0x58a8C460de855B21F289C868196BCD65E9c7b691",
    allocationsType: "longVesting",
    amount: parseEther("240"),
  },
  {
    address: "0x8f84a0b062CB1f75Bc42d35a82cd8a8455a7B01d",
    allocationsType: "longVesting",
    amount: parseEther("235"),
  },
  {
    address: "0x0Dc2af2aC013d4082384c3403E4df53146623639",
    allocationsType: "longVesting",
    amount: parseEther("235"),
  },
  {
    address: "0xeC5c0Cf09c534Bcc042B6F45c26241a6e41B3034",
    allocationsType: "longVesting",
    amount: parseEther("235"),
  },
  {
    address: "0x70c4754eaF188fE204f2E7A36Be1220eD9dB174b",
    allocationsType: "longVesting",
    amount: parseEther("235"),
  },
  {
    address: "0x9cbf5c5ffEa3Ca454841125D4762424a9e68dD03",
    allocationsType: "longVesting",
    amount: parseEther("235"),
  },
  {
    address: "0x9C484d0A79988E52bcA0D84C215a763c26966c62",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0xC759e7ff96E63834E4A8DB24490f33EB31cfc0eb",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0x50FFD3A59b39E99D1351a0dAE4741E02f3CDeAB1",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0x0f506Fc84f9b08091f1A1Ab4E7c8530b47a71f15",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0x7Ef9821ABB048309B259e147c0811C19c440F060",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0x1EA60bC21fB7Eb24e1003310b29ab0d9aDDB6734",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0x5C1C6113930d6FED6E4F1Ab01166F155aDD51Ba5",
    allocationsType: "longVesting",
    amount: parseEther("230"),
  },
  {
    address: "0xdf4BA0612657eDc17eC935fD165078e42FD62899",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x609374Fb92AB74a65Ba5Fe371dad5cd3a5073650",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x23Cb43212ffE5377432036E484c177b144C302c5",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x5e3606DE924B22b315e29031c9D639D0519C412A",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x4029c104A8eba7E68682fc7280EddcF346C37277",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x7F55EF8eA03238f78E64DE74A9B2BD3AD79295E0",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x85684fe4b513A069d89e2c1CAE3668fab14744dD",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x323926789d02aD09ef19BeF82E6182FC2240dD82",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x7946718Ee6fe3254C2DE9A4aE6Ba11C8b4311D5b",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x23E3DAf5b617e620e9b41f48513dc5F4ea510e55",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xb97a45E15fc3c99dBE69F0EF5BC965bc51BA7B03",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x790Db44414901d78c61B46355eC1450B14ac8bbF",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xf7247859947752D2014d255A79b0baC919D51193",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xdF4cDd2Ab79B487eDAbd3FB9781c57e4897daeaE",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xd3bF5e3a026c182C75dABC5b8e941949bBd1891A",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xa00706c3B08dB136A9E9300d0c5D22444B03b877",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x93AC8C3Cf07C58617515E94F602F396Fb39772F8",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x9B16Bd29b40dAe4A33B6D427ee4CCd3999cDF93D",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xfEd8c4cbfe2312E2308386bE1fc57e7beCeae821",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xd3Bf141bEB5A21de8A56b5d78F300fD89EB0257C",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x682838Aa090Abfd88cB2B5f8265c5424fe3Ef1c8",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x98c980f910C970699068A86410a6cf2AF18215aa",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x5ea6DE0F6893Ecb3dcD7C11d3024AB2c1772eAdC",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x8A24746eF0faC1c769C6046Ef624665f2621feE7",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x997243Cd31af8193AC2e2a5040307cFBeAa33b4C",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x5e2b60d49e011e42c1D6a2B2C88260Ac28E6Be36",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xB0f01B5CD0776f10720BEdF06a192d3e4AC4852e",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x886D1e479b54e4bC4deF723FfB0fe6FADb06653b",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x60139Fd71487534A22d3c9142FbbBBF9c14D1747",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xC683126dB78bfb999AC93819549f2CE3B52531a6",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0x6650249892d17a5971B4bD65574d4064aa7b20AF",
    allocationsType: "longVesting",
    amount: parseEther("225"),
  },
  {
    address: "0xc9a99A759C34a4BF5E91bd07EDeA07C7B6f814Fb",
    allocationsType: "longVesting",
    amount: parseEther("220"),
  },
  {
    address: "0x2395f4ca6AbE134c58811bDAbC3Fa69e876f74A0",
    allocationsType: "longVesting",
    amount: parseEther("215"),
  },
  {
    address: "0xf762e0964d0d505C437F2E73F63D930953a7135d",
    allocationsType: "longVesting",
    amount: parseEther("215"),
  },
  {
    address: "0x05096597eBc29bDE93adE9853ec985Cc6fC65109",
    allocationsType: "longVesting",
    amount: parseEther("210"),
  },
  {
    address: "0x964f8F4533Ce7DA27F9246771f910cAeC0A3238c",
    allocationsType: "longVesting",
    amount: parseEther("205"),
  },
  {
    address: "0xF60849D3082E6957e4E72A6FC78cf56b68c7653F",
    allocationsType: "longVesting",
    amount: parseEther("205"),
  },
  {
    address: "0x71aA08dBE336D566480885cB1bF41e8d6234c7A1",
    allocationsType: "longVesting",
    amount: parseEther("200"),
  },
  {
    address: "0x3B3979f9D9AD26beb6471240263B120066A7b36d",
    allocationsType: "longVesting",
    amount: parseEther("200"),
  },
  {
    address: "0x6Be94a342960fb3dB79953fb28E7AE59a6cAC830",
    allocationsType: "longVesting",
    amount: parseEther("200"),
  },
  {
    address: "0x9B8686af5d63862e2CF16B370C885A405e650521",
    allocationsType: "longVesting",
    amount: parseEther("195"),
  },
  {
    address: "0xd54D870f68CeCa6D0Ffe0aF748Fd37a517a12182",
    allocationsType: "longVesting",
    amount: parseEther("195"),
  },
  {
    address: "0x899B2d61a5943Dd2452cbc9Ff5d158c63a2275dd",
    allocationsType: "longVesting",
    amount: parseEther("195"),
  },
  {
    address: "0x9026c69e1a6092249FA21f5a00B5DCb8C1e88318",
    allocationsType: "longVesting",
    amount: parseEther("195"),
  },
  {
    address: "0xB8F3633b6DE622201D3e139a04501c76304c1717",
    allocationsType: "longVesting",
    amount: parseEther("195"),
  },
  {
    address: "0x17A611B844ff9dcd6331f058A118Ba2561b0D8BA",
    allocationsType: "longVesting",
    amount: parseEther("195"),
  },
  {
    address: "0x92FFbAe1b9c774AA548dfeD166b5778c99451079",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x3ca7a483A04357650de6B6039ea9aDd7A88Ffc61",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x47a439c55B282BE986EA07E1B5fC81cd3FA41148",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x162f5575cE715e2E898Dc484893F43169b054e60",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x81a9bFF73E8C4BB4CbCE913b1B5372091377a7A5",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x2f7D94c0EbF16dDc38adC42Dfc70a232dC9e4a3a",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x51895f4e541309c29af133f610470A4ddf8E1cAb",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xD91672A7e9EA8bF163F52a8dE90b2a98aFBee032",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x8640dc8aC9F38e5326a6770c7C3Ea9b52a95aBb5",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xDdcc6af88B04184A86C414c56E502D1BFdaB0b43",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x52C14ECb89576dF50777667a7f31699396B6F065",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xDde045b5ab6f8FBBB88DF9988670b45D86885Fa7",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xf01960b38992673229E4fcE39F9E5F8370346e75",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x5FDeDC3F3f211F15C8A0c2d8330E2afFC49e3157",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xF9023ce3dBDA3893BbBa62894F7ba89667f300Ea",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x6f71350E02a03a2B85DCdD129E13F5B2082dEcC0",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x136e409d3C13DbF044d8eCa5e6c22cb0a7915500",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xAF6e8d0cA18F1aC3E8eb7b63B7c3A479A62Bddf3",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0x3ef15c42fC7Ce5DCe768Fb5c505d73EE739C671B",
    allocationsType: "longVesting",
    amount: parseEther("190"),
  },
  {
    address: "0xA33d4CDe3660a11A57b350573989b06a7a29E5Dc",
    allocationsType: "longVesting",
    amount: parseEther("185"),
  },
  {
    address: "0x664a09cD895795f8BC80552e3a8CE1868e2e8e5d",
    allocationsType: "longVesting",
    amount: parseEther("185"),
  },
  {
    address: "0x5eA8F210c18Aa9D05bde7EE9cdaB6522Ea328fc1",
    allocationsType: "longVesting",
    amount: parseEther("185"),
  },
  {
    address: "0xB6F2314f382908e2e1CdC73837286E3e659C80B7",
    allocationsType: "longVesting",
    amount: parseEther("185"),
  },
  {
    address: "0x5Eaef4abF755b0ACf96D964F5416607Ba02dE7df",
    allocationsType: "longVesting",
    amount: parseEther("185"),
  },
  {
    address: "0xd271a48732227Df4FB08d48dfe12E2b03c6e5823",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0xc6936545FbbeE1d51CbAe90DaF680826f4Ed81Cc",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x3eb76320dD189d6cF8e139bF9fB7c640dbebe327",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0xfa4eFB76F67Bfe940D026AdACE39A8daC1df3b76",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x9D38edcD7E47e271097ce6d57Fec3556b601AA7A",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x5d509634E4E81fc707750dc6Cd1EFb3948592f16",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x6Fb8f81124Dd717A4E2b376B203F416D4adF3584",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x78157216c443CA2EeE923Daab111e2f298c35698",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x90fDF1b91a06e59b736E3a6FbFc5F0D06b4E928f",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0x698c8ce2137F4D26CBC9863610407A2872C1b6e2",
    allocationsType: "longVesting",
    amount: parseEther("180"),
  },
  {
    address: "0xEba19Aca47D6ECEbFc6c7c1C4FACCb0c5e20eE5E",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xeb359c69C1A877394BAf37A76658Ed96e80Bb098",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x06b30313dff763a953FD3e24801D83F033511f2c",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xFDD0a75e2Ec391af592AD357804ceF05c8f9aF48",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xdD4EAF24e3057f090020E4b90007245EA5EA5B8F",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xBB7fB411857E9b993cBD2D812dA689a1DeC85553",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x17405e057cf0978064ADda6569755269422E9CF2",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x242c7f57891182900eEb75b9FdfD2bf59C8ACdc9",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xB6D5e28dD90540AbEAB3C6C8E3078fF025a20B47",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xf691905E6a09508aCaAcFFe674Af679160fb41AF",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xF8fCb6f415214EC428Cb3044C8e7d87A975aC1af",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xdB1428c32BA2AFe34a97550b0bFDa5675b95954a",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xB44CC276a08a26154D332e65926ac8D8E6eF6700",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x082efb60d9FD2CA5e1b4BaB72834C65ef7f76aBC",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6bEc0BCA2F15876f675f2C38958Ff986551e4db1",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xB2A59b9f0929E76e3Db6cb4c730928356303f04B",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xeF9E56012A4F1cfADE136F878672d08B6429b71e",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xF6d706Dd70CB66E055d80A9Db2209d94a1BE78a5",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xeE81E6Fda6498f46Ba97921f7728d05dE3664189",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x188E0Ca53FceA80a234012E27a22111B59988888",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xB0F740C947Ff15579f3a910B19C5738E0E51d3D4",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x18AE55B2bA916b2c525A29074F8B135F58f23D9E",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6b472d45c3C43Eb79DC8f379DE4551Ea71059558",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xba34a41e7afc5162330c7a6298a43b3fd940fee9",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xAF7c137BbEBcC1eB2acefcb28f390944D8cF6b74",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x70E839A607b1252D185Aa6e285bD85D36394125e",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xF462fc5cF044816086CF8f0eb43A258dc64a4662",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xACFe00A90f965324d5cD68beD0800C6E0ED94Fb6",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xAC7e382629590eA6Feb1a01B83291F4FbE3720D6",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x3d54670911F65DA38E6E903e8f35fad36344D37b",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x26D87dEf46bCe1ba10B2b592c78D14C0644776B5",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6a97E9A3f90c123E705438DE298Bc35c3016b3f5",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x196bD9C45bc109b613fc53A6644207B610df0F88",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xeB4a1C16Aef64EC2B931bfF61448a5831F6B410a",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xF0E940d150689Ce3919898825eDA0A640911Cd39",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xF03f2303cC57bC5Cd63255749e86Ed8886Ca68Fc",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xd56e569a54f7a99575df46f2cba1e9dd8856afaf",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xb8Bb3C4a3bc42E3dDFF79141ffa83Caa569d4Ccc",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x06FF4c49223dceC68E1914AB30299a4DA5efE973",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xb6de1776659092bbdF7f73f5623a92D06063230A",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x28A77A8065D0F4Df7D3652DF7e437E3A570dDa49",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xEE0c7Cec640AAdC0D460a595B55075b37812c8cA",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xe969Bf18fbC0Ed94fBeB0821d347d0525a2C880A",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x09d4baE8a9Ba7e2646B3944c3c4Eb0be5cF95113",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6a71e1583646d2ec1BcEE6d3AEC384E6aAc1D61D",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x10Ca37ca30bd0F021e5Df441127804240Adc12E7",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x43Be4D410FA3Ce27254c6376696C476176280FF0",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x9d9a5CE3f2468a0Fc6501D5b5675879C24E4b1cF",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xb48ac6Da2a2C537C8446D895B2B33de7d829F3b2",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xE6618896D38d68f03Be2ea921ADb3aA93B40B41b",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x61f36B9c64f0EC015F2963299CDc76d46d83d2D8",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x9Ed70Af51cD8B891244800aC214823bd08a1D558",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x2B8e96dE1329eDD99dD60dD109B944175Ad40c2A",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xb30aEC278bB30C5EbfDAf0b888f80cD1DC944cAA",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xE27A94268f5aa5b70748a38e58293Cd993579a91",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xE1ebCc714B4DeD420b26dBae4Ee16a8C2Db9CE46",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x47216E3d2A2D184bB46422EAD463DB5a1d1d6123",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x47392888738f85F0a0110FDD450F387513dBF73A",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xb1eFc11eCe8613738e3323958C307ddea2bd7738",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x1E91944817b4eF6925d8300349F675E0Dec6Ba52",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xce8B6825a1B362ED37949c0F19A44Db7868B437f",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x1Ee32d8660B29b94A26Caf18191C367e9027b8e3",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x48b79085D3C95eE99C63a65dB0A50C2A1357aef8",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xDd3BEC6CEB62E38130b297dD95ddcE5f0f1aeAf6",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x60b64Df0eB7aC1049506F7730Ef641619E6122Ed",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x9834d9b8A370f4CA63DF3F8D10e87Fe2eEB095D8",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x97876594bFb539626c98e33CA46163CE3bbB9127",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x975faCd234210347CEa3C06C01aC780b31c94b0E",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x1F8166Bd1eCE2626f0e91B8d730Be1710d9f93c0",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x62Bd4CD5E4C0E71d9C6fA85f6db1F0584aeA78E4",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x2Fdd04dcC0022daAcD3b8e5d6FF9A0D23b02DB07",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x2a0020E127668F985Cf695999d48E8Cda14f28Be",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xDAaB15a0C7247b163d23249CB7E7f76e5899885B",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x2b96C60E7B473d9697bc441162F0e6582fC6d1dd",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x4E4fA4f1a04E95a084978664Bb071494588EC7ef",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x947fe3e1E9E1e1a539f980b15555DaD74e0e9CAd",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xD8800acC6591d55685B8B832459da0600cc62a68",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x4F709a8750C850D3f8B8E0CA1ebe3CD0B24d3E15",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xD83C8aC63A188762A70a081c4659931E2EEA9Af6",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x9377B904Aa1FCCE04E2d73b4bcBCcEbef7B0aDdd",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x2d755722E59B410fB16771Af2fc5272CBcd8CB5F",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xaFb1D2325C545E96eaCbd3FE66d61328F70ee092",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x12FF02f327B9537053E8858486305d374f3BCc49",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x776b913480d4326430F52F58b16DdF67eEB08DEb",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x9214CbBe61a47CE035921916787223a0C2Fb1a0E",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xcE4efB1c4BD4062dD465860Df853E732bf133B7a",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x4dFFf49BFd6fa60f57e5f8707f9d9DFE722a05C9",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x641C8276453f41c7F12A2781772e2E758C64d661",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x1342A24e50186F2F178FC57194D3eF56ec0f26fA",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xa84a498a4b79d799aed4688e9ae748cce1bc73b7",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x509794F60a011Aed613A6D9Fa754990EF448986D",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xa7cbbED339b96238Cb60C563D11301a76D567F43",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xD1E7fF6E06838eca6bb019E6B9C9Ac4fDADc82aD",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x8b94a9354BfeC93c552792dDD4a73fdAb2686d83",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x1f7fa48ffb50136193a9eaa37a320e270313b75a",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x0347d91ED7448BA7E01BF28e0FA8886058913D6d",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xa5FD64e05953a35CaBEb7593C047d3610164A057",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6e23afc534006a72a4b363b2d4a869Bb3Fb223b3",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x538AB9067e7953E8F2302779F42BFBDC5A1D82E0",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x8E31036bA14e6305aEa94d48D740d1E23F03a02f",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x544B4F21bd2F185Dd57AdD9Fea3EB53037ACf42D",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x32d7fb986b6cED380DbaDb66b152C72a21b06679",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x8A2c88dadB79Eff89d8C4f8C9305345f1749e3A0",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xa4fb7c124345293786F006030FB93fb2B08b356C",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xf7c8765a890ED1997D57531C601fac6ab3F42f49",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x89c8da419EBEB9c649a311919CA68e1aE95f3821",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xCBc280853B83dD458a26BDe2AF8c5dE31Da422E7",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xc928Ce592cCd2c457faCC7e8d7b60b2A75698C68",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xdfE526db9e357D5059483Db9c3DA986B6C28343D",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xa35074e3D0Bd3492a2CD174a3c9f471650df0611",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x874ed4B1Ea1F3e1878f9d9b99aFe44dE18e91D32",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x0EAeA94B84Ef62FA7E30624041051537561ea470",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xc7E9373aFb3B2C2F3F52C2403ABaC2A59f738547",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xC7D03c55518bf4Ca0eDbAc75bD53401576e4005d",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x000C78a8425A96c427262E405ad00F024784FcC5",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6B79bC88B596093bdd2143F1253a67005aA10dAD",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x3524A6bcFDfdad48c04aB0b47293a4d2f8c8beaE",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x846bC0E205893f900092540893DA55e267358Db8",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x5fFA66e18333077b513F290CcA7F26E751998f0D",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xC67dC33e15D4a85FAfff25D0F782DeCf1a8f45C5",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x6daA156881EB6970323E425390B0224361b16aB8",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x70f2bDDBe478eFAEBb14cd4527C85e2183427413",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xdd9c5568D1737B1A646940c9B9d80DCF9C6bA248",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x3608AE3E69Ab538DA2922F3971aF62aA8417dBb2",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x2176f4b766CD63C4b59CfDeb7d8A599A7Ae5F569",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xc5E0B31a65ac49Dc1FE55deE6516427753935070",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x81b7f02d925B7077F12342e68E66BE5C15CDaF7e",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xa084573A13F3742e134dEb667a59E062896007e1",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x8182F88D30E04Be50DF95A9c7Dbc15896D0A0514",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x079549B932Dd97De3E8EFAFE822b9eF70B77A4Ce",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x5DD7b492D42f0ea3ad89265D1EB7aD8303065173",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x78f05B43ee0e3184bD7D4e47c9E1f8a2FcB9bBbB",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x378EFBB2833a1ad659D0523376DC0F2cFbdAc7e8",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xdb06D66F16014bf04A8bA70b5C682B44b1248164",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x0FbAB34e188aC4e3DAE5eD028D6351085b455b08",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xf16D62012eE210aF984B816a6C8c0CC47EeB65E4",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0xBc2405C78ab2dC492f9bcd0EAe9a5d755Fbe9b7d",
    allocationsType: "longVesting",
    amount: parseEther("175"),
  },
  {
    address: "0x099cCf56263eC2F3Fc81dfCD1B35d4Dd29559a62",
    allocationsType: "longVesting",
    amount: parseEther("170"),
  },
  {
    address: "0xa3C9523E711698aaa175b719E2Fb42d08E91872E",
    allocationsType: "longVesting",
    amount: parseEther("170"),
  },
  {
    address: "0xEc2c4e66653f6D7EF297400Aa45972dAf39B18d8",
    allocationsType: "longVesting",
    amount: parseEther("170"),
  },
  {
    address: "0xe3AB52fe0d09E130F62CFCe0d70b1DBc49C3051a",
    allocationsType: "longVesting",
    amount: parseEther("165"),
  },
  {
    address: "0xbB0a54795d6cD43B96f6699F3c4eBe2d93B4147E",
    allocationsType: "longVesting",
    amount: parseEther("165"),
  },
  {
    address: "0x168f5eD25992089D39fD47e9fF0067E34CbD5D5c",
    allocationsType: "longVesting",
    amount: parseEther("160"),
  },
  {
    address: "0x92B7530EdEC6F52eca652100AF4a6D5c8370ee2b",
    allocationsType: "longVesting",
    amount: parseEther("160"),
  },
  {
    address: "0xc09e38b3D74659Ea049e7a17a0425eBdf71810eB",
    allocationsType: "longVesting",
    amount: parseEther("160"),
  },
  {
    address: "0xA8c35c9fe149a5d75ff61CD34efA4474eCcC310c",
    allocationsType: "longVesting",
    amount: parseEther("160"),
  },
  {
    address: "0x9a06dEd5a7FdBb1Cf08f8414b18f73D078038FE2",
    allocationsType: "longVesting",
    amount: parseEther("160"),
  },
  {
    address: "0xF5909a5789865C744a9917B80c250160C63bBFBF",
    allocationsType: "longVesting",
    amount: parseEther("155"),
  },
  {
    address: "0x53659Bb07CC02D7645230c5Fd0B5F107090113DF",
    allocationsType: "longVesting",
    amount: parseEther("155"),
  },
  {
    address: "0x21B9589Ac8E42F948609d54B466cfaa0E8AdF0eD",
    allocationsType: "longVesting",
    amount: parseEther("155"),
  },
  {
    address: "0x9888405480c8492d8755DD85e83712307616179e",
    allocationsType: "longVesting",
    amount: parseEther("155"),
  },
  {
    address: "0x58c4cC60fFBD953B2dc84507D230BB2AA1eeCB34",
    allocationsType: "longVesting",
    amount: parseEther("155"),
  },
  {
    address: "0xF13de46165e21535DcE45c5248e3b9A52439048B",
    allocationsType: "longVesting",
    amount: parseEther("155"),
  },
  {
    address: "0xf694E6e7C7C29E824719d72616c72e68C0B1fb2f",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x5B5b841a2F179fDDd7BBd67400c083cb4488fAc7",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x37080Ce13D5bd9bad24E3aD7c5B2A2dD5533dc50",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0xD1e0199fB69000EC1D6f87d3d32A1aFFC9FdCB08",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x13601E452C09a3C646d3B3a76131c789269B3833",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x7c608B36F8A0Aa5dcd610fBf188C189Fd27A1fdc",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0xBcC3C2553a046fa87ea579AA5b63406A77172AfC",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0xEeb620C61cA3bC07B3963C5C485801d258357e34",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x16A7aA64872FF37a456de74b3783fBd4DF3bD6d0",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x61B3DBE98960fe01F361571F35e0f5257C1EECD8",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x57D3bBBfdff5E0628FE140F918B34e5BaBF214Ed",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0xa5334b70ad891D0e132c742E9196d5e568c866CB",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x798C991e9738F0A80bC4dE531000a798fcF46f08",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x56Bb00A92dfA538e2FD8ECD6F9351A5F2b3A6594",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x179c8174792e42035B034d7fFd68410608BEc62e",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0x20F62Ada878b1a9ceE20744A11ba8435968790eD",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0xFD5BE9a052b60d642a9968302bE63c489F24B0C1",
    allocationsType: "longVesting",
    amount: parseEther("150"),
  },
  {
    address: "0xb5f936A9A4e6EAeD966D974994323Ad8560B563C",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0x7eBE0A632Be70bce9658A29fc44182Aa3d68373e",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0x50dB48133037BcD4770fB4880a219198Cef02B5d",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0xacD0Dc0049Ff0b3fA7607b7251ca71317e432Af2",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0x47304dbE8e64c71c42514cC1e652dA45C1a4452D",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0x750FE165E895942C36F910D60EcbF772a7849d7A",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0x0Fd28aedB6bd2336ac17E19B4e6CB4daa1DC58CE",
    allocationsType: "longVesting",
    amount: parseEther("145"),
  },
  {
    address: "0x9a767A1855D0e3280cDecA030554F51c4e68E9be",
    allocationsType: "longVesting",
    amount: parseEther("135"),
  },
  {
    address: "0xC14A381FF7F7bB55451971970bf43e15282A929D",
    allocationsType: "longVesting",
    amount: parseEther("135"),
  },
  {
    address: "0xBaFBA3Cb1aFd8Cb583717c56ed90cfF68f9b907B",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0x221F634D3Ae701e5a7CCaB0B27196E7e015c019C",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0x80A41e88355dAf6fdd90aC76d45761Ba1F277605",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0x3a92e9760BC6Caf8e67aaB162ff045D2Cb927f1E",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0x0c57063659662959c8e47E0555f47539FBd04101",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0xcc70DE13e7A8029d67CDe701a6e02E507e639Ffc",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0xC3ca5D49505C2e04339F2ef9410be853f986b5f3",
    allocationsType: "longVesting",
    amount: parseEther("130"),
  },
  {
    address: "0x3793c2dDED9e535878d8853BAdf7A1fd83aa1d03",
    allocationsType: "longVesting",
    amount: parseEther("125"),
  },
  {
    address: "0x1EDf1dE55315170E1B11d02C319E977b71B06494",
    allocationsType: "longVesting",
    amount: parseEther("125"),
  },
  {
    address: "0xCFc76577cF6bEadc28034539B4b05E60c4723d9c",
    allocationsType: "longVesting",
    amount: parseEther("125"),
  },
  {
    address: "0x45c1b732EB062f52E33e9Bb7b0CBd329EE8AfCCe",
    allocationsType: "longVesting",
    amount: parseEther("125"),
  },
  {
    address: "0xa2B17e905F58d1B33B9A86A0614c30EBE3aac18B",
    allocationsType: "longVesting",
    amount: parseEther("125"),
  },
  {
    address: "0x0658cB2485d409944dBfDa9A0f72bebbE022f42B",
    allocationsType: "longVesting",
    amount: parseEther("125"),
  },
  {
    address: "0x3972B5459871FCa3b5B648898eEE50e838A77cf0",
    allocationsType: "longVesting",
    amount: parseEther("120"),
  },
  {
    address: "0x94A8a6b01D5144bbC8755956Fb9c4cbA586E5b4e",
    allocationsType: "longVesting",
    amount: parseEther("120"),
  },
  {
    address: "0xc8404915df5D3B4159afDF45505a86E71edfac4b",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0x9a3b31c8eE0d1d7FE220bef7ca042D679b8b0cBf",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0xFeB2769950cE434C967d7842F4eBF86462c97A27",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0x786Baba9f48b9A614F5bff0f63a8e3733B87e922",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0x635d96D277a17Aef297d0a7B167eA2320D68B106",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0x1caA80fD15DF8Ae6F771d0871827FD1EE37904BF",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0xfe208dd1ff179A52d5eB3893275B8bBcBF807e1E",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0xeCE5EfD61b55f8369C7A42129D507Eb347792487",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0x474d4aa02399fAe5024f7B1058Ac6FB17998e7f9",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0xD204a6b7effA8C5c6c7FAED2536C322761333417",
    allocationsType: "longVesting",
    amount: parseEther("115"),
  },
  {
    address: "0x7235b8FE2FEC5f2d51bA04D52A8A0ef55f1aA07A",
    allocationsType: "longVesting",
    amount: parseEther("110"),
  },
  {
    address: "0x421CC7B6224accb6C12280E3b697c65d9D60AD70",
    allocationsType: "longVesting",
    amount: parseEther("110"),
  },
  {
    address: "0x72312A9249e9c75725A3783A80b7bE6f547AE98E",
    allocationsType: "longVesting",
    amount: parseEther("110"),
  },
  {
    address: "0x3a9B77f8bAa98A5021cC1553996D37020c2eDf07",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0x3a04b9B820a3423D7eB3DECFD6e3D89fa420aCbd",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0x6ff74fd3377d30F25c8658BCF3DaBCfefD21c5e5",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0x0b6fe56f951922e54537Ce4E39736a4A8AeE2c1f",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0xE26bc475097dDe089998696894229b0526a4D810",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0xd29AFe5A438452277E71DcDf997b533264Eb74EC",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0xB46f9De5C6384B2463344648a320342b8f4a16b9",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0x8E714E0eA0660958470B7DAE6Afdf6B8B23d7A4d",
    allocationsType: "longVesting",
    amount: parseEther("105"),
  },
  {
    address: "0x1b13FFEd169E74e9129c9163c55D3cFAd115992A",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x483614613568877A0E528179C29213Af13343195",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x6a683B9eb62D5492B84B65bd8A13aa10487569d6",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x765d8e61BD060d0400bBE2A1D648B225434eC9f2",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0xA30228C887061e33c58e510a1CeD217ff7b5e4B4",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x74504d2B10fEee95FeA89117228106298C9d9e6E",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x8A64FB28e06Df7D47b041695C174654e7aD9F68f",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x8DCf47390DB374686D3E9Eb0d90AcBc71e9CBF5b",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0xF389dD95c732D5b0552597d95DEAE8092855624A",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0xD15DdfE83a0468437c267AF4C58650096abE623F",
    allocationsType: "longVesting",
    amount: parseEther("100"),
  },
  {
    address: "0x65D0dc465a535c81613Ee70E0159DDeD9c29F14a",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0xbee157c1a64c115d8361aab2542f83d204260a97",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0x2a059be9c1C6a4c3931237192B6e718B7a430F22",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0x50486DC53Ea5a245397D6D983ffe5b6D387af220",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0x7Cd04a2A7Af1F39c2FD583bEB27E73E063601b57",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0x61168d47ec95BfF7Bd2fF9Efa5Fe5C1e435841A9",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0x5c0BC8f7C4296e3A7Aea6CEC24bcb5c3dfd72d88",
    allocationsType: "longVesting",
    amount: parseEther("95"),
  },
  {
    address: "0x6f96bBA31BAc3e3d1f854416685B36bBb2e81716",
    allocationsType: "longVesting",
    amount: parseEther("90"),
  },
  {
    address: "0xf945d89a4F200E3bC0F85574E6438c3E993c768C",
    allocationsType: "longVesting",
    amount: parseEther("90"),
  },
  {
    address: "0x4f07EDA1cf8f770c19b82Be6cF3e61f2DA92496D",
    allocationsType: "longVesting",
    amount: parseEther("90"),
  },
  {
    address: "0x0afeF54442F2Bf5622090247bc4e2449AF21B8A4",
    allocationsType: "longVesting",
    amount: parseEther("90"),
  },
  {
    address: "0xE30E90231Bb2c365179db4e485d96f88ABC2E8C3",
    allocationsType: "longVesting",
    amount: parseEther("90"),
  },
  {
    address: "0xF4f367Afcd860eEd0bEe40b07e6c6a6bac905b2d",
    allocationsType: "longVesting",
    amount: parseEther("90"),
  },
  {
    address: "0x765C38A67ec5930450B14B1dC3Fc5D5012b7bb2E",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0x8DC2D0A7747aBC6fCE2b3581c7c0593374059b59",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0x0F461627e7AfC65B5eF819494b6997AE455f01dF",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0x370b28B66FEa4A4C929754aCf36EF855366c450E",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0x0071225043c5cEF7bDDEEC8609cEf932867d85bc",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0x2dbeF594A6bb5EBaEDD6E6fc962be174bbdFaD13",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0xeA506E1224d194CDE1D48b05Af6F9370A2949B73",
    allocationsType: "longVesting",
    amount: parseEther("85"),
  },
  {
    address: "0xe98f0B95292c2c7A3CEe33E091Cc953F0F1C3CBE",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x71671430d48BF9d43aC234a6F81ea462d76C7200",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x75c58CDcF5FF45c649eb73f03C4B73eE0A794D52",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x9Ba01dC4E5De13257e9Dfd01fa68132b41d1E766",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x87216A450287B9Ac8da80019bf8a141Cb84E5084",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0xB3782fEF2647c95016e80C4CDeb1DCF76A676C23",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x56Bd88e6C083F685e9830B5db49cC49d70f792a5",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x698aaecD80b9D1E58A097E9aE241BC8ae155B8bF",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x239DAe7f59a24fF2BC188235a38f9650c823AD3d",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0x775f44b7B445E994bacac33F928ad5503C6e7B4A",
    allocationsType: "longVesting",
    amount: parseEther("80"),
  },
  {
    address: "0xF32fE86A9F8F49F1ec5a1167Ba51c457730f62B4",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x08123Ab9B84E4805F539D9e95EBECC71D431D71A",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x6630Fb4d82cEF48bA06e21e259677D02175C2665",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0xD9DB3B1245F8D51dE2B264030179176838f46525",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0xb1baB6bf12d5c02C8603a04bA103c1bd766C901D",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x02401BCEEA50E7e289a6e2476D853A033E2d43Ac",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x0015f91e93996d7E5979bF32391a8be59aadd606",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x4172Ec562eEE46d56cDF13ee5c880ebDeCD4a8C1",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x91eF4B1685927a5Ad1C63d3565754B4fE78c316C",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0xe2611A1d7b8091ab5285770aCf8a780E493314D7",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x7A6D5cb89F6B12f65F294Aa3F5dDD36c05D10e90",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x1E5D5426c1BE85AffDB96bb7A5bf3E244A90d040",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x6b1c9112df0be9d9a3e8987a96584519f6f81946",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0xfA3D5853285B60bBF29DCc62508956cBA85a1D15",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x6503D8465E006602286736802E6077A7f55b5528",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x3Bc9cDB6698eBdE8f704B9e5Ba064Dc7dC0ECf18",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x64F124A1F3A96af27308417eaC755e5C64448eDb",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0xcBBd513dA6e6E4B3C27c90d4d304A291F311870A",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x5059cB8C7a9d08CB6461ff0a991B714602226A9b",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x71EBbAB9a79ea7Dee5eDd055866E3134cb280642",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x7a91D87Fe3a698de75992D22da6bCd794FB716c8",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0xD765b358732800F4D514729e3a983E45AF891545",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x122cCfD4e766654E38E53b9Bc8a8a22A779C5Cb9",
    allocationsType: "longVesting",
    amount: parseEther("75"),
  },
  {
    address: "0x7F33CF73cd7c533D7D01b38A2Ba1355ACA3b9181",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xFD56E3dA1b9cb9282e321ddE3E6f9B7e6c55B791",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xEF5C3aa44Bb3cAD6fE40d55745dcf73854B4E45f",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xc52e7E835d36745d3B0E8Cf5610e3b503507701B",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x366f6bd4ef3BE91B7Fbf9e8E0a9E30b8f8b30f54",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x12F7a13B08652f03f6CaCdeeA23571c31d40DFDD",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x1a3208e51B9070f85CE8b760010279000B64F833",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x5AD96EcEeF22F5b64DfC1dC7AD52a9478FA41eA4",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x3689FF16581f2a00646305F7fE649b8d898bfD33",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x6a75B1191C92da1c48e378629C3eA0647f0fAa6e",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x2E1C87142b440D87d571074cD6Bf33088E961ae5",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x9f1ac797C87FC45ed6f32e16680d481cf1966A31",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x47F7bf2639f0139C6e433D95EeBC59e7e6e91D57",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x49d1978DCe1a788A0e33Ac59C004e5fEe4093e95",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xBdB708BA7de779372dFCb491e076f8AF0c6c5F2A",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xE513CCDAf2E155f58E0751aE29EEe67Aec0D5a2A",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xf498D3814976b2035Ec805847B3af701099F6b7B",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x61ac1BD8F0F9A4429B2E0E76D13b2724864AEcc5",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x54CbCD1bd3F409F7620093Dd6b2A8302E664Ba9A",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xCb36F8580A36788A48518dEC95Ea458357E64E30",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xA025de3Ee450B4b55d4efCd7A3A1B90eD9035219",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xb287f422eb5d1537875dcF783318000C59000eFB",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x71a2ddaad83cc50705431f956f341a7e209c6046",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xF1003fFe246cf85C931Fb2bb5aF6cec3DaD8912c",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x8F52c839b18eC92C9f367272030632aDe53897C2",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x2747cAb9dD336B3E9768465CD469Bdb8C3868d5d",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x8498843f6D9046f7b59482978E152D61869203bC",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x3E01183F2acCae3e7142331723116251FDFBeB01",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0x99728930457398fc8805F507F7A2FAFE2B90B6F1",
    allocationsType: "longVesting",
    amount: parseEther("70"),
  },
  {
    address: "0xb1375afF09521bde4a1c83cf2320A12BC41050a5",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x9848aDA5ad003046073aFb767B6E4d1387314FEA",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x4B79F2Eefd304278596765b9B2Acc8816aD6E153",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x64D89CaC40E2ef0744263bA782CbE2Cda6D659E8",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x21f9825C1733C3f8f5E31f46E962AC7f4CC660AC",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x12F72B3ED0884296BEdf6fA51561456c6b247DCa",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x92ceCA8d0cB1C3CCFd50013dA1F3d4a64AA0599C",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x92D5911Ce5f0fe1004F466A2601C4664Ae93cF32",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xb934AA713ea5527C6E813142F3e4aF17Fdb31A4a",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x5F1F2C768548C89EEfc9fC8E9D18f85EbB19af3f",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x06a573dd18D0e82fB0c78E3066E797c010f7B008",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xF05Eb60be3c74e0EA900f18B587642a3f49a2f85",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x4f781DdB7f439d24D311e987E4F08C15993e3583",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xD516AbF4330507eF073CcdEE3162fF8Fa15CffD4",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xaB30E64372494122a91b95eF3296E1A3F0745acE",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xD4508792637ccD27830E5116E1b94A7c75ada807",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x30ac233B07Ff315E270388cbcD231Ffd6574c66C",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xA883Ce2FFAD80206C963CbBC2630eb6957A69601",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xFD9C53dd38e989bBc1099cA33DCAeaB61292d4D8",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xd648ACf4226cde2F11b232dBb369b4b2AcD70DFB",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xd6BdAe6DC6DAF48FE5f65CFFD81a80087fDF1Fe1",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xfD054b2585c1308aE18621d39De51d6b13FA1647",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x08e5D2cC1f4aa52Ea6637979995545E3D49C4175",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xABef244c38b3126181C7b52401cAc272C18014e5",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x3cc7d9ce1081E5f542FEE53fBeE35489D4B09bC8",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xF423f82AF87cA2d3F335Be1DafF376E3a431FCEd",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xFc9bfFAC7ADD4834C48Bee01f0E3C64C9dB4b5C6",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x5a58C3EE14EA39578219c93C663fDC4cbcD46097",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xAfebeeD0E4B14C0D3F949F55e5158308Af559793",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x88527bC2112d927bf384c7b804f71cF3C1E92737",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x7a9cf1f754adcf753439ecdac4cfa19aa9c3183d",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x34EfF639A79f3D1EED43E5da23399350CA027eBC",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xB39F19269ae21a340d19FbfB870C3E04E1c741Af",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xB65d9f05d2B7AF82a42F14274B54aD9BDe0Ea64E",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xC5A85898B03bA738B720a4Ea286c3bF5524aBe88",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x2445889C4D33b5bEF0cb7BB19f595b6d0d102A2A",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xc401A6227308466a57476Ae97306e4Eb4d971a66",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x815079a38c4D48F886a8A8B259Ad235f2C515c54",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x36DB523eF2d74b0Eaa995587DD5e5915b0531afF",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xdbF345a61313a3f4A14bb1E410E078265106Da3F",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xb48316e7f88fC8ae019C9d2adb0479c4DA4e3240",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xB75f34Dd5deEe37851d5f924379a4420bE41Ad6C",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x6c43F1Ad528cf10157119191F2832A573B6814bb",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x47A20388A8e00b59B8890706E4BE713b197F9bC0",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xDe8984a4fFdD70C9625337e2EA2773593c705250",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0x28e27918eF27D6bE07dfD09f03bB834c6cE410C5",
    allocationsType: "longVesting",
    amount: parseEther("65"),
  },
  {
    address: "0xa5230639a6e7524a76909c134a2aaf452d1333ab",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xf811D1D8d605ac228E5B9DcE55C5393ff8a44e96",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xF195f6EE816599A7338ea2219701532531ff97e8",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x60e9D9D10FC6cD7dAcD2C79BdA3672140997Ee82",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x5257a767986f98d73995281C052872A097a0C43C",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x40Cb1444968244d11c6a67BDb90Cd62656f27Ce0",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x060709682ea5C3700b034d48a37a099bEc82Fd18",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x65E095c28B0C259C6454320d6d91F6aE3a09bF59",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x7973d18ACb4ef97196fFbcE0aF56849964252666",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xCf7b8c43ae88961a0933d87C4fca84A57e9543Fa",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9030060c49e1BC9B2880e8eE237023C66b3d3687",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x53321324A4ec0786a5A93267Ced8471cFA0A9b87",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9090f58e39f6E861EeCf2D8906151679b7dbc515",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x909E19174a5AA7a3d2AedCCFc6E05e0c64Fc5f5D",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x90E68687c931cb3E747dfe4d7932f62463e1ac85",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x90f9363Cd5e61dcDce17bCe4DA123B34E1b003a4",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xc116aAc9e191b4BAd7B968132e10dC3a7e5c78EB",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x1BdeAfB1A56365386561BA88150321CEeF60F10D",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x1d112F46432A2b51037BEde27f9Ad43f519317ad",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xF4BC9C3173A91f3F581b67fdb7eEC24AfaB7fFC5",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x2f233D20b4A3826845DF4Af50f06ED483C91AB2d",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xCF40718F3a4d44531aC642554BBE32cb2F8b73f0",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xD666f2Aac7820F4837c73A5Aee7CEF1E91229d15",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xF511470999e3F45550b886a3b483cDE0AD1B7201",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xeD874854f206D3a74Ca0DbcEEe70ACc3E3FbC8cD",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xCD8987E83C51b5856A1cfAA7BdF9219873a45cDe",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xAdfD576DDD60BB0D730DEd731099F37514dEb35F",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xD66baEF8495080011039928a64DFD42c2796d73e",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x88f233296E941528967B40461168Cb497756ecF0",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xD6b6EDbB4De3B65B0aD19e8c0F49f878e294BCA8",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xb924fbc230be0110dD887d0CEF0A6136BbeD89a0",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xaFA8266f3417544B7E104f9Ef990883e291eAB63",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x8806AD769Ef4e7938Bf53b7D669E4d58d78b1b94",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x16e57345aA3462e54dE8a1Eb8456716e5CdA441C",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x87C7475E80fE021554EB89f7feCA919541eDaADc",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x381837b7B0EB014Dc0aBECD9724e7Cd866689d5B",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x87718f00C656Cd1110b84B2E91b97584908e1e2C",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xF606e3fc9Ec349cd9d5a86B4BBCCa8E7B06fB065",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x1bF580b2eE38991D43BE26f3E3B88Ec5Dd69aDeb",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xcE669464d9Fe7b35EDC5116906dbBf9EAF2A8216",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xC82964905104261e0eAF481Bc2168a4dA1226a6A",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x6b67f9F2fecA29Dd360E2F04d42fc2eDa70AD7E1",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x24e5e747aa42138776f3A2BbF5b6535812050235",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xC71253AeBEeF675b9cB8df1177162ed7DAc587Dd",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x3Db5929abEdA8d447596e652Ff6BD5D2B19924A5",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x94BCcD5B75C85CA666685A7eAb78eF30717A68Ce",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xad9405354Fb45e5693Bd461f2F915678C8962f69",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xBaBC66739Ca198753491c5B013392929D95b9952",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x35FDc79B39D102DfAeF1557779027B49d9F3E7Dd",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x2475eb1ac2EBBd4164D4e09B7f4B36AaAaf81ca5",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x070af5F01338B52De6899600FC62Bd316b98b046",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x956A803B89D1809315989478DBD4A0a953b06120",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xadD2A3A914d4824646fd4131D32A051B584Cbd84",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x28B744367EbAd255c82efe2E190A5EBd00FE2BfC",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xae45915Bd68F7ce05414D02D1cdD79bD24f47d60",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x21B30b4B6cDBb15c98b1a19952E880d7e80f9A54",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xc51654Fff0115259fDB046116C7018824034cd5C",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x7A38d3CF1Cb6c5a0763f4b1bc2Ec5f9bb432b3d4",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9f98127B15c2E40d4Eaf1b95B512C8043a16b6Dc",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x961FD5E5e4509d7dCCBf4Cfad252667e1e548916",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9c7F579BF80010508a430513B75213521a60DbFe",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xFfd57BBF39f78376E73e54AE75EA3324c68FEf59",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9d45213AFE0DBC727216F3B55756775672Ca315A",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x4485DD0A63C80b3A4fd60a0d587682a697e31E3d",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xEE5698dD94AF4Ad81D85b7F6bb204A1DfBB1C737",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xE91c59beEfff5942bb69035dD5550C6a5BB6b77e",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9FCFC48883E2b40c345B7cE6e35771acb1C5B7F0",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xd314448715a3f75E39CC00C735a564Bc91a8c34d",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x993946F3a68f7783979081384C83C89739314a62",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x2BCd827b5767B4aff932B7172b92cDd21b10B43A",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x06AD9AC3E2dCbE5A65057C4951889989F534e0A0",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x803E07d227F894f34e36ee5a8c283130875EaFd9",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xe540ed1BDaE2927d5043929e65b4062206ae0135",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x9e746E697544e4C922bC651B34bcF730c289f1B2",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x43C02F48b0Fc6397c361b28cDa1D2b79d868dFE6",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x0B24F3670ae4d18d36dF47E334B8C31d041c0c16",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x5cA753c2E4014AFf850340B159d8Ee82F494A669",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x31098518833E3ecF54B96559893cfEE97DB32aF8",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x8d9aB1DD77a32ABc4cB021cFAA273aD000D2F4Db",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x6529770A5c58CA859558670Cf98171F600c48783",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x501f8c5711e4916b595eB10c3b016311c8c5b257",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0x8eC701a73F2B73201a15C0d4961c267957908729",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xD2D388D137B9322d7dF57062eF16e3d007b0369e",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xD4d0Eeca167E386E171AbBF413279B8F7C7d8147",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xf50C0dC6d1cd3F20bff144038559F0Fb27Bd6349",
    allocationsType: "longVesting",
    amount: parseEther("60"),
  },
  {
    address: "0xDf2628D335991D5DaECEaccF5440692C2C52eE02",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x18CF7235018169B24E8cF03346436D72EE4e363D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xF55d792810a380628d21B6C4d27f0c3b40F52cbC",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3af8aCD8821Ce8679C61966CF950a2aD81D6Cc96",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xF58b4dc221C37a5Cb5909c324f73E4413E348749",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x14A1150ff985D779313056283278D8435b266D76",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x892753Eba0684f6820e73fD8fC2d4c3f4e4ED7e6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2CdE97F4CE936b16Af411DC7427CB79Ea3ed2400",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x9A1AcB1A4e8db577f4d03D1fC1F1e9E3D73219cb",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3aA9B4AFccF32C86115451B45f110D2029C1168F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xE927fFF4602207D1BB7e706d6d95A7c6A03a65B2",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x6c69144Cf6EcFE3AD94B8eEF0E200BAcE1151E70",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7dB505e48816d56d46FACD93EC874B3f10f9E963",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x1c691C7dF8b266e6ef9E2c3AcfF618B0331084D3",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x888D2a9099F292AE861d5d88B952295B7799e565",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2Bd830741Eb40c86ddE4C5Ba63D7207Ad89e7631",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x0BcAe2ec47721B72C7d87465d9C6497E7F52B727",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x887014462D81893F716CfB7Aa392Ba8E20c08DaD",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x0000006c21964AF0d420af8992851A30fA13c68b",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x92EacFFDa3aeC153C5f4346E579623c9FA7f50B5",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xe6B6022EEbaF3244E1af74517E4Dc2DC42853A72",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x9DE44d98978bDb32f9Cad7fF49B5Fc25742eFb78",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x9D70bfF7671F094D0DB38aCfF56Bf61feCf2DF40",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x4443209b41E87cac17e8730f4f2FA0fdBe40486f",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xF605e72938eCDA6b1F5d2A754AcC470e9F2D51AC",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xd05878DA31658e6DEa129c9df2f28188463cDf91",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xDFFB8bcd9A37B326e4Cc01F57F2dE18450198fAE",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x6FEBc32b23F5A9F110B2d9E6F4a7D1e6125ee206",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x101bF9d53aE2a9f00D18DcC35A9448d9F1fC60ce",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x0743542070891051861f8D0a4550f97B43B0B89a",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC9c5DC94A13a0FB3792928654A8689FD7b00510e",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xce4517646ff8e55ded94b638a31a0dce79ca3b56",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC9F05c47f1C55eE550099c45AF0740574cCd0869",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x575929086403C6c06A48F9a19fA2a0872E72b8D6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xa29473Bf2Abe75B3cC9F802F2E5aBd44A3dB92aF",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xDa31160A4Afc898C01a44f2f3b1B880b6356940D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xEcb53042307FDb22cb0a8d1ad649d23b008686f3",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xD7D1AE051b2d8B5B3cE2872624caC8611ED9F735",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7f0a29905Dc31344c9cCfd501410d83c21fbc23D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xc1BaCFc8D9a4889B2c8ff464a544F853eff28151",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x86a7fd67fEf372dcCbABb125814eF5508aa0758D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xDb2b0bd9eD677f6533B121C541d995176FD20C23",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xFc770ef19fBB989326BeC72ADFFdd703f54De4F2",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC87758a5cD7bdb3fbB7fA3987F3ba7290A95a7e0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x0F8ece876c840Da69aA36f6a3e6F37E7D6f0F633",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xab0C641430F7B64BE5F0FB6680e00099071e1e2a",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7046ADfa71792F48696ce9cDD70f46F4B917E8C6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xBd3173CA64e79D38cE6be6b89c026595343BE9Fb",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3F3005eB2c73747d71AF9DcDA620ffa822406038",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x102Ac425508Ae912F22E49F44Fcd9d220522CAC1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8655A2aA29b8B797af0d1EcC809D69ABcaa6Ba8d",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC7C55673867193009B3Ce1A8fdb61d488c508d7F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8cC481ba6c8dd07d4b06B727950EEEc1A544416d",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC7B0440eC40f002ca480Bb133eD181815CF381b1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x1859Cf10262c6528F4C53fF96a10D3a524741a38",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xcEb8063A3C4514daD9c277a82B752373dC32Db83",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xF77FAe6DAEbeE0cC6503eA734b952B51F2B48ec4",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x58300cA25211771a817FD28438b649581dD548FD",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC27F232e007590EEB991F997c51f5A0BF0cD3875",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x34F21D61835B27D6c5cF03e2AbA57FfEe570D964",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xfAE1AFA5b43510997Ed8C1D21E929f6974B7167E",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x6Dcffc7AC7C8D03dDF60D7616b52274F392676f8",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5DE0518c8DB7045fFABd4365B7Fef676126b5898",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xB2B36627aF83FfF76216eaec068eCe65A1F3c5e8",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC72B837Fa1d24d4dfe223da0a1A70b0082bB7f3D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xc4A98221155F5d2D49B6395d0a9F94c6f0FF2e86",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x65E41E4b4586f86317B151cfeaE9928b7D3D9F22",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x71C01fc13b71a839cD0e3Dc6CfF14F5C50759572",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x13A164Ab4Ef73704423AD2D9A57C7b72E3c55E7D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xD93e6f3Cf892f0600BA4529c8D1C183915AB569F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xB37874Ced28171C9dB309D07731354B77B5fd9D5",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x0A0815a16397b0a803F22536EC67D8469EF1417f",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x648E1C2B8F4Ec0370A156309A8669941017D1441",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x84920D4bCB8fd91031B5D419d6372659A46D8472",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x39084aE206053E3831EEa5304c73a3e6F13807AE",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x282bb01Bda10456F022Af337A6E00195A41C2782",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7C75689FEBd6c6730a0702732FafdAc9499d6b3d",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7D39522cCe8312E29aC57DB307f93FAb57d810Dc",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5b930958b73e3C66a6675E7a718C948cfd08D67B",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x390733e3B4599Fed6DD2F63297B4303BC55537E7",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xE07f3806D3570a6D4495126B43EF362DCb6c6dD1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3543F69eB38928dcd1a9ea62e7165F9c6B06d7CB",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xD9B1993d34Cc4BeCac21A5D6701DBcf61c4877f2",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xfbFfB49d7cfaA933C8Ba751bd84B15FC19e19aD7",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xB455cD632943678a89cFE0ebD23a88f5084AA405",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xf43D201A363464Ba596E977AA87feB7e5fE08878",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC656D495D06CCC4d85647afCBd7CF81FD491c4d5",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xf980bB10341b80b11E5f774a8e2495F38783b75a",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x421A02b40b47a36eC46Eb0D076cf7F3D8Ef65216",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC5ebD5EA5928DDE05C4f4e9e1A61403C41FEFfb7",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x10400a60fc815117584f30C0087dD5336453fF47",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xc047AC8BF1aa561b2385d39E129Aad4c27ea9237",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x47bE2D5a6342006AD489E29e71E1Cb30ABd1A941",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x35Cb814070aa1dEcd6bfCB2809B037D9047a4B1E",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xEa3a3eFA79683dBD54B7393B39C643b300a22ac1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2E5d1384E961AfBf56273079f256DCc1F10C13f2",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x371A5bc469Cc3eE2273F7b45f0915F733E6065b0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x67233485B094477838bddd99a91f8E879F33C0D1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xA92b32011Ed8a6c94cb557920D78974D33e52272",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2b3f985CbaeD3326f051d8cdD54b0A4717d91dA1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2175d23A1Cdc05D219bDCd0201462C40A01aA386",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8b4b1E7FA5406724e16DB304477c2f7392560105",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x825a46F2617584f89FeB4F879d426fF598f31eD4",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xca2d73e3b15cd376f38e526e5dcf04fe60855a67",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x364B65F6db0E810E8FB0223cCdb0c0c6467B7884",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5F7a9d511976f7008F6161CC75f2c924BDe1bB0f",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x36558Ec52FB63dD9570dd73876f80409b77F1546",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x98040907dbAc1319A4Fb9B666F61BC7e600Ad61b",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x660A75e816fFbc21Fac87913588e14b8FE017f39",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x49028433598a03904D34D5c92dAA50Ee608146db",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xb7345dC329D02E46feF32A4666AC523E8709f3BC",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xEAA57ad63ACe776f480F4535756D5c3f8a635d86",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x426B0718416431A4762a7642784dea94823d5899",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x4BbEc9D12311E2C36AA109b2304d51E27888a0e6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC4Df5f2125151BFF3a6aA7328529eAE1B9d3cC31",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x298689aD0F3e6e08c0fAbeeA1350cF1758930c00",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xaf33bcdc6dd5646c9e614ee738e547e691658973",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x63C839B6b8c94204a0560C9DCb3f6849E6E61eAd",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7EB6EE569d4E58Fa167aBD2CbFADB3EEd9695906",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2a1ACA0de1331971575e83c650D6811dEE3dB2A2",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x714dFfE6a6C152a016C521825b7dc7EbfA148343",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xB720C54fE71C51748Db17b16179D00501D9a7e2E",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7D081099956C7E67767D669a501C43cF5b138379",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xD37bd8af68B4e43F63D3bc3D02711Ef973A0AA88",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x660E9f304787f9486838A62b1dCAfe328b4ea015",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5Bc8dd7361f350EcCA79AdbEAaAA1E6b9581a5c9",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x506D0199ec8F7C0b698a9a92c1A40EeA89344f9D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x631ad8e00656e1460091bb9b221af1f6670b7ef0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3fd68FE49886246CCAEFd52E4ACAf8cd05dF5C24",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xf76A15B0a36c7A25106b1F24d2dd9113d754e426",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x272c31E86Dba4DA52Fb91c34894946fBc9d056d7",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x482f69Fa922ae0E8b4a2eAc4D04bfd694a43b709",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xD23535DdD918EB2E4Ab8C07Eb1AC427147bAAB2F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xcf496C13740E973d5F59fB6c8f7B61A06967bE00",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x64Bab5500f1CC55c1Ee6c5eC701aAB330C4E869c",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x61b49e250796A99a11dFe718F34739f011fe32d8",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xAA3C4B057F61de54cCdC64a718BbFb92C580E3A1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x521A18f267e227F7908d2f72B358924F09Eb722e",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x1416e20d666aE4aB9a8cF3FF05a77c054f700F30",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x69E9cbc2d6EcA621B68f19EA05A595aE3EF3B114",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8aC6704C3a1a3021C237d810558236B43cFa3B48",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x984916c55a60C165264e904Ce93334826ebdE013",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x62890AD5B321cfE6C82134788Eee103997f982F8",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5257e9E8123c8DE5108D4d871Df2d221c4F37f62",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5258345926f1CDd53f36488f7626dE51E69c8bBc",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xd26acAdB3D33e9108A676958CBb792c893776B2b",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8a0305235e80381De37D32CaFbBF7eAC8f1B20B2",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xD02CcA8FE833cd7B5fBdD242A01d7ac2D9192cB1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xF3382274b91177592a1f832399CcbE16562aB73E",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xE547Fe4eE5e59a91D88DA68705B0d8AF9Ad24Dd1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8FC7a03cEf0abf03c415dDC2c266fc3fa73003c0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x9ade1fDA3F87d5c247d10b21f5b502aF7c934F12",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x303068cB328ccC694A48d1c30DFf626335887457",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xF3464824bf9B055111B70d8EDb257a17272c0891",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x023de7FFF4B223d1741d80543f42097C7cb4bbc0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x275A4F7a77CE5E765B593fcFF76bA00d5652E259",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x29CD744301308D23066169Da6BB1d50ec6CB23b9",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xAB6cCFca77F003B78b34be003EDb6a7F8Cd977B6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x76b95BA00F37A9acB9D9d77c9d481810E3e3AFf0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x6D0024Ca8f2baC8b7C0269Ce48A39c77AD628e71",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xb9adE4c45D6f088E3ACbe1d6c227D2e0048587f1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xAB9000E703f46b2F54d87F09c19A9EB76302b27F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x131305Df1F5AbB242b553b35051a3e23354C35AA",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xbCe5F528e1e6d28e4CFe85277EAA53DB3dCd1705",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x104e4A76960b4bF24492a47239Efc891A23B2374",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x271e6f789A05AE18F96fc64bd6AD979A1e6844F5",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xe69eedb9d537ff605532100d077d4a970914641f",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xA7027EAA37BE28Ea302DeBAd3Ab2E0EA9812d95A",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xEE4Eb7d8A0d0216daF2c7269A0410eF88dEbd4bC",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7c32cD39108A8E9E17C3A3E6B9e6Eac9D01c3bEf",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xCbFB6f70D7EdE2DEa8d8a4618277eD46a55c4c31",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x30Dc53f4a303041B5B31a29dD38Ee03807c17002",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x81127c2BFF42c219ed6d3A40c97b595715a426ff",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x647ad318601D2b276ab8C78D087987a79cFA3442",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x1ffd9409c16f1178359ef2e1a864620eb6662ff9",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xA65bb415aD1476074B64268469FF449241153B2C",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xDE59db2f37989A26F74082E34A8A0Db5d4ce6f54",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xa5E0Cd18469B31Bb718dbe8700a52dB2536CBBa3",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xb963C24D598785a8a259AcBe0daaEC29D6fF79f1",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x479A4484eF8E25B313578a0852b69a1AB23d14Dd",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x776e39504327e98b08d3552DE782d2DcF6A52Ff6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8Bc0Fc5b31Fa30266a3dd81753bE66EE4B62A7f9",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7944F85cFc48E16E52EB22CA76cfAe37841cA51E",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x145D36F370773EE1ab413ED92d563819399CFC57",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xd435DcD0a686e361Ba561755A2Db2F1e19066502",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3c8fe6782e8DdCF8196A1d797537EBCFc12e39EC",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8B7b2dBd97aa29Cb69F56935F181b00cAFe8336e",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xd7907480C967619F75127Cfad6Ae5Ff7CeFe589c",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x1347d616D0b78c53b4D71F76714F5A3C299F34B8",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xC0d7D5D91824C35c7129133CA03C50Ea6c568382",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xf37c5724a6Dc5d22d25Baa2Af7c8856c5cCF2Ab8",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x5a071bA1181E280845eEC8fe4f8D2bf7054bF319",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x25d414412507C6673346f6863aDeFe1eC26958d4",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x2FA5e51d0D5034e490DB7818441a6AA178e09CBA",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x3b8479D2A412De3c1Ec3e5c3b21e6533164F0195",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8A9289Ad4665C39B9753B66f148066c942E41F2F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x91Da2A40979eBB2b9751785239D2c7240b4bf93F",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xDEe3D3D7D5C6Bd7eB8793887dc8f59fac6af34e0",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x9Eb237C5A6B165131340D365FbB65f636BA1dFaF",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x379F1c939aA3F131A2e17dC5e33Af7E7d9cD8BA3",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xCF2DaB41a0607d61C3D54a4f5F663b3A9EfaD0ef",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x62a97697548Be5CcdbAbC5052D61047af1845752",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x8fcf627063F677B1c301c05b7Fa0E13A2005De58",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x1481589Fe956DA324063917cD08f94118b4B4216",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xba269300a865E9b9165e508f22F9575F0C066637",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x7A1Ff96dc5E3c1788d75b0Bf1ef87F0c7Fd7b8F6",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xE3e42C48EE386DdB6A04e81D1dd2cA846759981D",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xE3e08eC4ceD1aB5D41eaa45E4862474fCf1B2166",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xa49B12e5010E69D89409F2582cbAC30cEEBb1E89",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x55a5f0eD86fcf02C069D02a7B44BcbB47612e0FC",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x89cA70A47486a6B088Fbd0C878DdF21E93b9F113",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0x4616eB2c09f911FE9b555c3d19d4dD6459F2f858",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xaEd69753Ed14C624504F92FF7ce3097c95Ea0b4f",
    allocationsType: "longVesting",
    amount: parseEther("55"),
  },
  {
    address: "0xB0408Ec28dc89293b094C3E99e72f8129e1199fC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf553C63B8c2Add2299f96BEe793780D63Bc7daF9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3aDc4d1d36E6707E8349B86E8bDb6c5AF50Ad361",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3ae6019d6806079f7dc2550d52323622e800be56",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x041256890392A21242eD03B43791390DE4Fd538F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAf0555a709bc94533BfDA502A44Fa04b02839072",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAe37629ED516D3a841720487ce9b9452D145Db6D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAd74A74aa23E7fc5fE8c7145b810f61a78CA6968",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3b78637E124f302cA73257Ea6bABC705ac0208dc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAcEc4d63EbA8eB068226E9A8F1242f582b6e1407",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAb9324EFFe4DF371f91c7FBB914F3219e69Cc41B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAb12aE01e6Fe744b7206a59bd7047C425C82c31D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAab53c0333aa3B1aDaeA09956c2e0FE283b37E9f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAFda4cBb05AFf89Bd25f433e1a6442F9f79C2155",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAFbf9cF381c4a90D63FaDB1c220D39EB61CeDb2E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAFaE4FC01019da8e47215222CBD5891d59d0f9Cc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3c6154B55Ee59dc181189AB3DB3e258E4488c789",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAE27b27D3F2f9ef9dEC82EdDabc206945e6536Ba",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAD77B0C40C60086DC4da5294bf246EE4Bb766434",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0421fAE8529840F9A7202728d0B906171C2b32Ca",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3cb81Bcd8ABF30F1704BE8fF518b035e8D0c2E9C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3ceb234A88D2AEF6648Ec7eC3D94337228fBF513",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xABBaE624678dFd2D42593f57c9c0299E2C22350E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAB8AA195ee89D45A88Ef4334d4d99F0e6bc8A913",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAAC61fAd27d498C6B02B2C97EB5629695Bc549A4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3e0E59146B5a0581bbaD332D6224aa6C2a51A93d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3e1752F369909749624d8aA2C5f31bE7E90F3eDD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xAA1869DA4F5302eE98A3053a4aE3f7ea156CDf87",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf5349898aB874Eb0d52620e68608195A15B5F024",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA9c0D003Db517A47691a9795151218130b69cAb8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA9D9D7f9785d183424a089B5F19b3EB92270bA01",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3ed5d446eE46a7f695fEC94fb525C49521D2ddFe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA9D932684A8EA54E6DD065a24e19760E1512187c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3f0F12Baad7fFB273b32b57Bd2791Ec6f7E524dE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA98a80a707b61d36829008dB0a4aDA612456DB33",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3f8EE78ED4a7d020eb890CbC30E2A96313739b38",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3f924091080D13edCA93bed960684209ede9a903",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA962CC0a0415e02Db832257F9390a9304295FA1B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA8e2d554aDf787F3c20e49E8Df6C0490871E5588",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4014B60d475c5726E3324aF27AB0e7150Da3a12d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4018842AaaE1532CB3778C17480B1969f69d0B9D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA8894e8C7154a1c7feFCf3dEf08Bf1d16494edfd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x402CB8dA46deb233447CAb1EdF3ACD9F8eDc9e24",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA86246ac174A1702a80B0345ce66BADcF6340532",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x40432D08a0f73F7f2e3e276BcAd0347068E30B16",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA8312b350348344650d0101ec26F25DD9afdfe13",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4059d50D99B27167a986176ee15dd9a64F126ca5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA822CEb9A24BB573C6778B62a5FFCf89a47CFDb7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA82269978AbacAdCFa6EC2F2A7c86C68f3e1bB2b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x40A45CbB29F543d5b0E7a0C6A2E8228CFF405eC2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA7f90Ae5c73F21D53B847e0e77DfB695234Adca5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA7F1b57aDF829Fd6C3D8220F5BdFB03965B2961F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x40Db8365d1252bcb06598927698238a99D39228E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x40E953D96c4334cA46e72e24bD2e0eCdd7C02c05",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA7C4566D91DBc6605Cd8e0E786E97824788Bbd01",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA741cBeEb2E352621b76B590748A99A514a87dBf",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x411611739b9609501f5e85883138AB50DD69b094",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf50191eD4943A51f8D3A9deB3Baf80C65abE9fDD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4130B24918b7C1bF7395d9745053733C41ebd42a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA6c37993267085450aDE3b63636A25b61Ec3925c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4140Bd752bc992a783a4592ed6c53d9799DB9b0A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4152582F0110FF320DBCF86d344147784364112d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA5E5B3E5D6904BE7a953c76fE48243c63aD42BCA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x41737b860ed34FE46e2A99094E5bFF21746d0131",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4175abbc3a231125C83Bc967cc42487dB0B0aD9E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x41891c8EeEe5Ea31EF129b2D40F0d45a88BcD45C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x418e737EbaD477d7709c9eEeF9dd48253eB05862",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA549abA0a4f685CA31Afc7cfD6020f173B613421",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA545727a8e535aFBa5984A91A8D4c75840C0c5f6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x047A5Aa0Fb900e4B92D52966E8Dc3C85072d6503",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA53b760133132AC937845f5A24Ff1CA7A3f01283",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA534EEeA097D3Cfabbc155bAdAA7e09aEe07E343",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA4a2246Bc33712E62F52eE1315dfF6144624b5Cf",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA48e6a192100421fa6f1603c0b519ac3F68c9caa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x049851AFeE00336404C35aF4B24F800B5608a636",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x41e7DF819f38FD63f1a47CEdf13ab28B4457fFe1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA4446EB85b69fca6c2CB50B3EB235F5e299a4bDE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4200236BDEDf0dF57277A948d27cA5dD99F55586",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA4035B0F45801CD3422aFBa0eB935923324bcBcc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA3E18D6b66AdcE512c00Ed2E590eC368DBb7C3Fa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA35e8056C0D23AF2aA8a2B0598B847DC07Ee1Cb6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x424723e53D9a88Abcc035D6210770D27ADF41322",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x42511fB705A2134B30EA1B4D65f5D1762f29b1e5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA33fB08Be713B0d23fD6a6c009eB55c1127e9d36",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x425AC4fEf2563725B48c4c1Ba925e28eda3dE483",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x426096CF0C90771e4264beCC9390f1007D237006",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4287d9B993858E72b2494fc7dA5c11d2b98ec484",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA2E2C646164fBB272bF11C1980eD400d0a2E59d6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x42A41d8f8D4272B30E09f010700F02Bae92ad92e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA267dad3630C25C3c0d45E6D88A0AA99f676C15b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA0c3abfcc65b9E0EfE020E276dDFa044995D743e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x42E2774f3486ff83988262870F8cEaE61E382B05",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA088c7F86F4Fb8CD96f3fE8213FD84bE8F0B3Aa8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA085D97E9D4A3b43aD7acA7397777742ac107a33",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA069B1cfFD0a70bF94c18806a38F325434C03445",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x42bACe1DC45f440e6b80b3796375092ADF9eD800",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA021de721672B396913ae66E5176c1528Ec2C360",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xA00Beb0A2337B15AC923e4f9a36455C9D3C0f3c3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x42c1a43dA23255d251Bc76956b00D5a2BE1D3a9C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x42ca391290139B26Aa8965a3D81FA2e8894512fa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x43076d2A293E5d6c5b5D1c38A5706B5119047758",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9f8C073DcE07DfaC3AE6CfEF9e4e11f411166C50",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x434412233310AB7368685A53e559f3F39d9ec479",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x43584Dc82a8077d8558B7c8374918Fc939574539",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x436280C7a5a7630F9ee34554D9760b89a699b2c7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9ed4b194b5e2a79Fd9DF3F2d64AE7b1EB978C8ec",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9ea97Ed13FA3ec5b897808487d17B98b016656D4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4379C72E2F8f758D249C86e9215D7121961E567d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9eACF9B8046052ee81f57b14066B9C983C75eBF4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x438Ec309373E1B4b037b3D19a95b9CbA98C76B55",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf4cDa0137Ba8327e90b37282d317a561E15cD2Bd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x43B07592c05f2d6E53133148F45876FE854bBd54",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x43B3D595166f15A176483Af31566DF79ddd3bc19",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9e5136Ca0A5DD1E94334f754e1ef5cc5c689Cd2b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9e43FBCad22aC88bfC4c8BD0B59F41041a85B0ef",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4422B1E50c68B9345d6C764dec1554D590FE1F45",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x44352699F33e8f373f200aa2F6AD027FaE6bBc9a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9e36468cefaC12Aadd99868748478734A5acB3c3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9daF627eF4FEEC11515b8a98f293bb23556aBB7D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf4c2c127410B702Ff99b1fA1B6A29C247A7A6fA7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9dDe7CA07Ce138916A685323a3b6B4a2c84A6E8c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x446eaF78FcaB8147897609cb0d35Ef75B3fC302B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x04f2347A32e5ae9f5c1F1f03998255385f05b028",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4478abbA6f83384cC3535B1D2dB193679B822b3D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9d21398088BDd96a5Ec2100F0A9e945BA035222f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9ceD1fD567F262C0910fC6Eaf2C9AcE47b3980Ec",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x44D88503aa93d8972e6276bcE99A8DeAD983678b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9c81235B2fDa4687e0159b19F56E835712ab0A8A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x44cdD456A216df3223F24c05BA491367Fa96506b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9c623441728b212904dfc6752db9c3a5173cee5a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9c547b3593788b54701509627c9daa0255cd0e6c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9bd900Bd6615e0134ED9097073513d11C1522D7E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9b88Ee3Ce52052085f3fc0Beea5009A2A13300e9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x45690c5568BB1F0bAc7b7C17D1Ca5C8017DC946d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9a654a992ea991BbCBdCFB4af12Ad2cE31e70929",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4592960cF42342085c7d15afb52fcFE4c698A9B9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9Fe22D1681F8fdA86383AcBee29441E41B79Cc88",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9F72Ca0d0aa977f8589Ede8e8cce85Ab732a4862",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9F5aC23798e15d16bDa23147a54f1Fdf81a051c2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9F4732c9e545454896De9c81f9f3B0E8938D735c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x45a94b262E9A9D5d58F9D537CcD34F91B47A593B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9ECdfD80AE2B3f5DAA74713dd334fBa7bd7D5c42",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9E88d49E2c24F0C46Ec3c3D2DA6Ea312aa0E0084",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9E5f9a9D36d53FC10F97c7310F51a597bB5F81DA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9E147Be64Bfdd103C533CA772ACf25d34109a164",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9Dd50ddc6BC5Aaa50b345316DD07388f536E9255",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9Da7F019AA79a2EEe0Dcd8192D17a9583A70CD22",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x463B154E225bedD10916D82d083F303Bfad98196",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9CeaAa5174C4a0075E3d302b373f8c9dade1Ba16",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4669f10272474E6b71dAA34DD254e90BF5EcC364",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9Ca0405ad5A0b56a53f9317e8Ef7f0010BC2b7A5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9C66CEBE73C90708Dfec86AC820a1DcF87EE0328",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x469eD7347f8e2f7d3Fed730040f02356dc01845F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9C554AcE1C9CA47F1D4735aDA37D960395e557F8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x46B46e106e6277728E5d835114B865f22eCb12D1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x46D4642B342ea3e079ed008C85bD886eBe22b8e9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9C3C467C55dFa95F81b955AcB0ff20193F54Acac",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x46F8323fE939AAc1869F767F7643C2350E6b931a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9C2783aEB3C41d2269FffECEccAbC29A2e817D77",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9C1C19062969e62a38Ab6E17931F962283d0909C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x46b6a658b31b958907b6b66399b4567dbFC13504",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x46f349e51369D4d79A7edc88B20f18aBE4bea47a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x471897E1e21A677576eDB179035BF7d7587E1465",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9Ad4469C149D24A6222651FC6319f7a57f11A874",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4757104C3976997af893F98ed032cD8d44093D98",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9AEEdBe3Fb6b9920195e9850D34Afbe11eD89FFE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x477809aBDA3343F8af3db743BaAF403fc07eB614",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9AB53Ef3C8f7de31bA2a048fF71Eed449C272f1F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9A9183de2f4f922104a8a035658899d79c8E6666",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x47AdD99a2817612b992Ac096C37E16412c1b20fF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9A0fAD09FE4eFb7Bfa3387CF548B1c5d023Be8De",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x47b2BF788586F939A52cA45832049FaB7c6fE87D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x47cE3993cc852b052e9F011930bCD5dF9822Fa41",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x999D9Dd60Cbb0E39832644Eb187CFac8fCBa85B3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x997472D6fed4C7f303678426dA187CBB812d2154",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf4c2818638218DcecDE6CBf5Baf68CB7e351C00E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9900766F6E1E1e65C499D4dF530c968fca94A809",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x98fB00d9e14E2a1F03D4DEedB248DbF8637C938B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf4E01905024D93f8c74CDeA51daf186F0876007B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x98e0661190aD75A6a3f29b03F92c381346296c75",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4882195407a69a1C2C92805Cb896210A585b1959",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x98D81C40CA5f26eee80fEC938DF4F24BA796Cb9f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x48D4dE00714bc4446a9CEE3973Dc28AbE4056608",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x48F433785c42bDCF27Dbb29EA0A129ad3D7d2A9B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x48F7082894f3c3676AC0e0771118E2a62df28C96",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x48aB2B3b5eC1Fd81cc0De163b068E20ead583C2A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x48bC9F838550656618B86054ECBC30Fcd54c006D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x98935ac2d8b867286d331cfA07d18998C5713C77",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf4B8DA8DC1745cB126bC6c52423d21Fd07799c60",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x979Efc72454e7343b17180a92c53df87C5E3D562",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x493857062add9aF663Bc5698576B6dbf69E7a62E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x493BD05e0c1a8489Bd1a9FE42971fb12FB7D24D1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x49500299438da7748F9A86c346EbA971f9D256C8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x49544fC3A06D4FC4145B5106b6A370EcF3f1B86f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x49665E7aE50621dC84961Ca9bA1b93275e5cC4dB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x975A7680E73df3B414dB3d3d379f4Bf3959Adf21",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x497218097eD364385356d84E7c289b6f10B82919",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x497667feF720843089BC199D0b3af26242922BAe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9753e5b139b929d141b8958515812Ea1bc13aA40",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9704D4c5022E6A20e637a3806786562195ddFdeF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9689f24d107045655Ba009A4FfcFA2511c08Bd43",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x967938eDeb2f127b71127847D0ec84b20B717e49",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4A080654795e526801954493BD0D712609d0ccEF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x965E398Eace3Bc972ed2908D79264e52fbaE21ed",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4A3E282781760f56D57f0C8190A561903f3F0ca2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4B24DE3AD10D4E5958a8081B1A20673eA653322E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x962Edbb675e71ABAf6165eE35234679c2Fe66dBb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x05502a369d6C238b58B14cE52d936296037c1D37",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4B8B8601a4b5D280254c3610aF2A44fcF5C12A9C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x960006cE988f8951c7ab0511e939C058648f93E2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x95f9ACc1fD7d1314f5cba1f3AEA81749Ac4097BC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4BCB0151Ecd6f0c3587d631D39d417f2DC587043",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4Bed7d8ABF77500c24D0dDEF61ea7fC0bF9241Ad",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4C08c6cA3e0565Fd00a770DF9FE6dDa92DD6fb29",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x95eCA5a2F931BE1eb099E4b978E176F034F0023a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x95b843c32bdd6721DAB69d88343b5232af5CBbd7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x95C504a6f75Aa9446E90Daaa3d1DFB1EA3fae7a9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9586a5851538190218Ca31614A46b1728DE8394F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9581ff59c2e3015fc24fbe490e06f6bcaad00f9b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0561A33fbd0E8Fb6f09c52E8FFF6287aEB50b7da",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4C69979901d1167a6a028E5b090B3a6241bdc1EF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4C8b1e549A9a0E7AE3aE7058eCc444991aF2090d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9577CE15CaB98BC79F1C43F342171C23883D2b4C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x956A596d6fADFA54A00a3927F1D5Ae420311252f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9526D190E003e475df67ECA15032E039c55dE608",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4Cb369361508B2899Ba41fbD26be26c9D9c2B911",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4D1B57d7b693A39A2c028fC4cc796Ac41Cefd2f0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4D3408c4E56ca6445761dB6c09533D45A215a636",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf48cBC850D4B0fA08E5075c135DEE2E407405AAe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf47dACefc064ccfcC1d91c4CF402881Bb9BF3746",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4D78Aa6d63822e8c33b983C85218d46209dfB753",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4D7975c01Ab03EF88686F36ec3A21E23fE3B93ac",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x95015E8FD43e23d87a536cBfA42ddbaC3A0293a4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4DC58820cC32F17C8A5B27fc788DB2774e537B12",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x94C819Ebc7e35f731a4F27fa39CED25235b621F9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x949d84D79189B29B8B4713AFAA6D144bf1009f52",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4E2b93800fF2e3049b0E8dccD2212dA035aB81f0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4E7079033F8E2D71774d97129acE98282882DC5D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x94686760c325c1379A822Aa481bcf84F3E7C264c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x93eE476186E04462B0ffca3e197009405828Ce7d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4EE574C4FF098D5D7D18b2128296B3548E1e40Cb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x05836144125Df19ef572b619f7548Be79EE7cec2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x93D2Ff56350dEed9fee8101b7BbD60d0D0Efb8AA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4F6f78be71160D69564B3bB0E2dfBfA571674a23",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4F83e5e09c6b0a5B035438BfE6262DE8313e848e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4a26d92dd0821BB2DADb566d59dc44A87CA00F78",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x93790941273227Ddc5e4F29d140c614f2BAB2751",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x93648BD3082bd93C18703050F250796A4fE93328",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf4147ad7d093b35a54F085801d7D724ae5ed6d7c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4aA6DC7911E5ECEE279D9eA7B9067b60688e8D4d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9348a3a108c0DE6AABb8A4D4107e76C242639479",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x934226999A8C74a5c5C8db384373504ca0c5A290",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x932eF8EA267E18B85b850B5FeD304C1c6c714BF7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4b37E355cd33B0628Ba94D26239dFE92ABF8c71d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x92e5045b3628418B32b87e57b749744D9Fd790C4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x92a398D19d91c70a68B1d38cb566A587E385E385",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4b96253600146c37652F999DA4f57c578C988647",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4bB9C5DDF861e2a7614f08981B672C5B00c006EF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x92F250413b988B29f579b9F6B7d96Cb38E15E4A9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf3C8A0B1d4526889A10124D6a2746eB51Ba5EC2A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x000063034b4Cc1e876aB7336160D3860819F0B83",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x92CBe89B5Cb1c22c2c16Bc465CaF34E3c80b617D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4c2a689dac6e2124e3cd850bb983033bf12549a8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4c3Ddd89F829BB5C3A7c8a7769D5a6eE87805366",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x928eCC653209b5C168EF4239c86c2f12Cd310DE3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9224612ded7C25759FAc5B5647636C81659E7A13",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4c6F7301d9232884082aAC04a7e40fF1d01995e0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4c7E3BD96D2679E6f0dde820e1Df9885c8bd9f51",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x91f4C90Ee0C95EeeF527942C1be878683053Ec08",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4d1dc4753471A214e5640256Ba3aAda0151244f0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x91F8f839f8705c4F4BBA61833625B1E735F864Ad",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf3A891E280E459195d354B2FceD84297E75A593F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x918E4e6D4aa332767951c7f57708436A704A33B5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x914ff62D9Eb54999Ac037fDA828Bb636f265b549",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x914b261CC6E2230738F31845B748D97d938a1360",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9108440eb513C89C2f701E637F9D2D89FE7b8284",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4dc71FA28FC4AEDf78ff3b465b30e8807a86b603",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x90A57C4862753ed3e037C6F726178286f29453C7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x90A3f7f6f27761641480011921b6CC2FAc232D74",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4e5de83Fd528d32af5BEa03D6a28FA43691226f1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4e6673Dfe3aA3Eea95f2a805e6CEa60153448fF7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x90294dca1861B78d8AAa4Acd1Abf4C9B535c490E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf2F5dA9a4Bc63F9aA77aC67f8Ca2700E8218dEB1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4e90a6EDdcFd50ee7371a793A4067D3B3f5ddEd4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x9019765faa153f75cdA7360e75Cf81734749A057",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4ed357534CA8A9Bb9c27dAa91Fd17f4d22C18570",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4f155A52cE16bb99D588C4adeEf681341FEe3a3D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8f5B007DbE29B5875ec57220aC89718865944C49",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4fD052C17C223FC9817f42093dD1CC5710A2dBa1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4fDf00bd207285CE35Fe28FaBDe61E5bfcADCeBa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x4fE4255767308925992cC01dE8D57c86464b6D41",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8f4BA50Ef608407ea7c33F4982e32eF4be4102bf",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8ed6f6e39e5a655244bA0E66125003101873A1A8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf27BA6b11523B389d4bA803E5A2d4DFd3402FA0c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8e5D513f786F1f5a40955aE6Ea7cd2155941773F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8e2E5E801a8E055703f8D939aCee0AF305532376",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50396764793F0EE8AE1E918D765657e826E15931",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50425FF18fE297170fEf8f18471e10704A8544b3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8e28Dfa0189cd93FF1A192451565680109B95851",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5044cCa6E3dE8150ce4C2D4Ee87dD07D5C22429B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50457646eB6e278813D4dc7e05AF05C58a0f536C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x05fA05F539C5b73b1D7Af637560a8bEe42B07d22",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50633c2Fd1c38DacFba118a35d8986CF297182CC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x506498abf98C157eFE8B226E5EcAa0093aB77F04",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8dfEFb081A6939b7a35873D1711E269047644930",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8dD2Ab32b5472D269b3070Eed9b401381278fD34",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50C89FCb1AfC0a6ff9Ab51757e2963d60c345130",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8d4cab983799B942b820EA34b1744A6E34D749f9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50FAd9218A955DBc7302632ECF10092535D7B260",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8d3391052cA903795499257b365a34dB2d7A3c4F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x50f9D78E643c78122EB17424f0be3D63cFDBc703",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8cB6d78fc288F416ee2165164cF25ed8e0a6E133",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8c9240D2C3b5b352a669F16f6cF19C6e1f94DFF1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8c7A4B87da5777B5c9ce8D68292e4D383EcD7B90",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5120244CaF6eaB04e815AE2b7EA03Dd6C36979C8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8c47469C70957a7f52BbeBB498b0C11a1ADe2B77",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x51372de83F2eaC13C5Bf30517759eb9CB7AD8424",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8bDE6207de8b5f59c1eaDF968C49922cF87FA1a0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf233ff80BC931377fBfb09e7D0784e36f0623ebE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8bA417D05256E8277accc018215a9585d8a57972",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8b31FBA186FCD5c6d18a691671371D9135E259Ac",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x51B3113F0e60971C93ed84395F3229DBbD013db7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8afc856D12CDB759314491d06CFdF071109E560b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x51Dc6FE6aE6b81538Dcf2dc31a70b90294b56DA3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x51E818Fc087F8C78435EfBebB961C257A975de98",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x51FbbfD7CC0Dd5eb1128B6eD8a1a8819978A7E0b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x52334c23539324428A60bcF10ddCde1F77140588",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x524C9e5D73F3491942F0379d963DB4a8DA7525e9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8a4c86d14DB3B63192E24021385ACEE5d82e867E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8a3fBFD99dfD70e13315d33a8c80432d9F26E0D3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8Fc4717B7Bb38A07bDD29701975decfc9d980fa5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x52Fc1aFc6fB38493e6B7810ee3237C2c2A348E93",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x52Fe68b6A84D38CA19459950C0fEe9DfA61e13aF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x52eDB5AfC9B84Dde0Ca5c9aB3381308b06973F29",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8F9E9044E12276B6285dFF65F6243D113a027539",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8F6e1C3A9bD6a62D4Fd5f67BE4919F49a32952C0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8EECDc853DF135B86C40EDcF5bE1ab53Fd7649F6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x534eb1c65Cc0Ed85EE0Fa16455454785830a0Bff",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8EE49852416c9434CEeAb37B453eb18E1dee4F0A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5367109B8Ab57A5b5Fc4D3021A769bC2688Ce573",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5369CC705E8356085eEC5fA48bfeA9D91F8e5d5D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf22667acd1668F92f60442138223b28E9777F466",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8Dfe87de58305cD7b0D53e94800B5Df0F1511435",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8Dac82849106b9CDdaa62937b1aA44120645f54E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x53e03615CAcd2CD659B2a5Db6a9E1742297F3C88",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x544109Ab053FD38C9423030159A74aB1E82E0A55",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8C376b04BC84E40502fED4bBD3cB113D3a5f13c7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5463d492FFb9d002a429Ae437176D33816F9C3A9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8Bb0594Ce1Ab0c83f45680dd340F87352E9F52a0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8BE24405e64c2Fc61c083CE9D6d66FCFF10E5F2F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x54893CdA682EDfd6b8F498F6382Ccf789A6A1Ad6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x549f0D18e8025F02eAeA62B6e47D2EbA12Ddb1CF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8B68158d2dD6EB2f9c37e4a01c8DBf38e36c3b06",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x54a8EAC7ca83a482811DBfabe0f6A5b71a2A063c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x54bd1aF754a4f6475fc89Ab4900392BeEEfa8CEe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x551807E1170471327460eD4cD24BcF9bfC99Fe79",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x553F11D5C7f18049c1CcC65d09b42bC12940f531",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x55529806BF31274999B1c7a890F142525073922b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5557aAD7bB97c23bE82B42dAd6E3110AD75397cE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x55634B55d98333701e174CeD616ED89067509ad8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8A2c5bCBa4268DD5dAc31f28aDD713007C442DbF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8A0c098e896fa309828A35Ce714403D23cBBCf3A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x89fBE203EDcc8dc1cca45b672E48f7B8ea04433A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x55ED2B7fE79d082E1eFB2e50E2fd5d6dA1E58621",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x55db738A0631e0ADd55343f24834B24a0158cF79",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x55eb8ccA536218220bE5dACa73ecCC993493870b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x89c5aEda305bAb75D0e52683eF2F2f904B633F83",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x89c507f2026e5528685716C2ac97A56044a4d30B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x892AcbA9De71b6E9F56c86f91fdFB3A4331Bbadf",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x064D16368225a06b890Bbc83fFad2CDD64e010a3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x891992e358Cb34CD07e15e97AD58B9E9E246C9Ba",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x88fED84dbABD43b7336042bEAE1eEd9A78463a8E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x56B659452480D70025da4B866376b54BfcF73729",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x56D3B145b5928f7b69469Fbf463A1A3B685C8F6E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x56b168C92D6Cf3E8f9fB5F4f874cedD3Cb349774",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x88491d8DdE86035415051B30A47e6A9D9AD35097",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x87Ca3672137E104619DbB9BF57584E554510e6F9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0654b0176Cb74af31969dBa1E5A624F57c25059d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x87ACd126302195385dC3e9002ccdf3a5900A7301",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x876EF6B0Bb42C9f28e71B0B2bA4E291EB9CcBaD5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x875b025f857fEe359388788b1513Ff34d8dC8645",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x57291e9bE24b50C1C38CfE60487D24E6C822A524",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7411C5bc3f7fc74a2FFB0b61fe2f838067fDDA0a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x576FE542e75Eeece23BEb4837F1c44A004dFac30",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x57723f241DC71B0Cd014E0bC6A9486731D0403cF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x870D0426059F9A16f2F7Af069f8aBcAeefBdA6F1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86fa0Fd712b3a665EbE714Fb994427D8532Ec82b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86ae62C0261c195E9436C86D6757331Dd23178C1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x57AD6F3a7f57F4206F5CBF4C8eBCB3060A7Ee59C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86Dea03d5C5850dC424392d0DEbE9aD57e192A25",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86C7Dd85dB519Fd807bfb18F6CE06D322176D322",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86B8060E2D64b5a37f37D722c12f907d961E08F3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86718888190d4603F29454A3572A7B6b7587c194",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x57e0C799e9Ed85Fe8E226ADCF26A4f6d8ec6cB3B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x58066E1941fA6D38685ECCcAC00A8e6c0F813EDF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x86139b65F092BE59c877052ee1198Ea83bEb1777",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x58441d8e6E004D13b7F0DE90D8cbA5CCd9C8B9A0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x85a9A00e197dd9FF3912aB46D237700765B982C9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x584916Fa0093533ce357DA45a239076035c66DF3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x584d8965BC2Cb623F91B87bd4E94CDDC3F874C16",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x859A8CB307C0faA956069f62f2acc2ac6FCaAF56",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x586b651082278118001f8e3Bb4f00565Ebf7dc27",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x85456e03776Fac5c09BC42A1c04F91E2859d7E66",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x588C3F62315f51A5Ce5A54c74175C05d969EEc1c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x85332be5E648e37A6470e0e7Cbf73Df41852c7D6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5894FC5d4225aFe25F2e04a77C8cd04fD57dDfCF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x84BAf3998c6AE410B1335e6a3f50478e65D4AB65",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x589954D77471a0B80b05a9dc0168D7d2B850d545",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x58CF6844E07Afb042DB4aD0Bc37E8e9d497E086a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x840509b36E9DCb535e660f9F59C1FF5697433054",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x83f6A84526685E0f3c9D039F44D1297Bc3ec647D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x59174e7676844e27437353138AEE98e2755510C6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x83cEB6c451f87f071d4fc0AcbbF3F301aEa4790A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x591aA226bA5c9A0192483a50E71c81B901e08175",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x839752B2CF109497E5829B287A32200476633190",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x83967E8a2245a821fA8748f7AA2A05589963Cbf5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x59408ffB92ad9EA1524B38296fe148f1b8B99F2B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x83778cE9Fe88adE79EA3D0b3203da7d918D02966",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x067380dD9819B225C383BC9B0cdc6f952c88c8bc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5964De90aB9eA1bF1151Bc836F967Cc6F9810006",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x82c93F298CE6Bdf05eC6ef4b5800f1b6678db464",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x598f7a26347Aa358fB59e10e7E541D6BD1641d0F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x82beFeD6ab707589FAc3FaEA80257537fB796f19",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x827f9B47012a2a9eb0046DecE208572b8017e73B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x827B5F1eD3a055cB449D0a7b6b7c9D9212df3A34",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x59c1399b65C377D0D068b8Cdc6Ec76fDa787e59C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x59d898caA9cD3318e887B5CE472EcC51a9631Dd8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x59d9F03DdA950a1D7CCaf5Daf998f0cc51Ae94f9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x82666072E42185989386ddE849E163eCDad7351c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x59dEC13c88CAb608B656f34D09C758bC9ce39954",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x825Ef14f123Efccc451661b9E72737D236C40EaC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8257cA4CC50E8c5996d71132917888Ef4d9B466C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x81e6079A590C2c6E96C82360f1E43848aa5b842D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5A1C5e3cBaFF324621417C37A4056823Da5d6C4e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5AB9e2953D5E4Cc6608FFE91e4B7588d5D32894e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5AC9662267e19f6B8f73411337542785f8176Ff3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8184dcA8B36b82f7cDf76c237f51b11011dEf552",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5B054A2e6b74E9807808eC282ca9dA495d7D1A3D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5B1AA687371f5F34600a4899918723d26d8521C6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5B45Bfe6aDD833C27C65e924f7794F2A6629AE7c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x81770a77d9aa6fA9Dee9A76c81Ec7447ff4b2C8d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5B9326AE8d87D4069ccd5b127B5F104366372578",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5B9B01a7C3e4b70BE9D2706e390799aF093509DE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5BF6321bA9437127a9Fc61b73930E0E2d803a9Da",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x813Efeb1F8224C17d3B20E2c0bF4F5b39D2D7af1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf1C69a154299cB9269c3249fF2C8Fe8Db71BC630",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5C76738d61126313FF0548eE1419cA6F5C220e70",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x80a7C4C61c0cB62490E9123706461d03EEb326F9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5C925731a76a1FA46F60c00Ef065dda0e0069424",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5C949D824Bac253a56947152051eA59de6826A82",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x80981E56E4b23E5C29918A5cab64fA32251BD390",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x809348C3e7D52E0455B86763b2a5f0b7F2731e08",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8071bC96d3E4A70F09a502f0bD4cB7F190510544",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x806b383230990d9071B292c05Aaa97c093cA311D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x80542F09068b3324A61F964B0E3d68e4Fbf46a48",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5DC45BFFd9ce7e3798F08D8fe39ecF84a1ec80B1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x8034F54440868DB960eBdCc80e0A4fC8232F5825",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x801D3C5cD926A635374F67Cc20daa112be59563a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5E075bFD9502305dE97F320472968201855DB222",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x800D7E5A903513a6E19447367bdc303DAd6F2EB7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5E3F293090bF6a9312BE937cB4cAd4593cD78Da1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7fe1c7404E11cb2cCb6dB7C876eF5e0c50C32DD0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7fFabCBfF4c53DD48490f03Df45CA082e3c59891",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7f7cF5cdC5Ef913fA0066225a97F23B776d5821A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7f45C7aDFCF5F4D39665f0BF55394592C69eDE73",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7edf51C6582B8ab44Fed1c4779d697d07cbEAa90",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x067a57666D113394409B3907d569554d648e8EB4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5F1349b115b337406971f8FC116293D7188B59b1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7e6e004f6e22E310fDAE7d16E2855bcf6ef69DaA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7e6873BC588bb71bB6E558b203F074a777cd5CbB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7d86e2354d3128219005E45E6e9e9Bff5Bf489a9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5F9a37E18307884fDd811a7cFe4C30D7F9E03C4E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7c548Cf8dF669A9958eddD2dA37b04c1727C29C3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7c3EdA133d8B38fBf063482F75D32D7D296dF8f0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5a046BA35DaeBE60A03E50307485b670c9048A44",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5a26e2D37DD4a474b96921c2B8a0Ee15672b3C95",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7bDA9DD54d7bed6B30470bA75dE7c4cF42E6e84e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf1833e52E7325F668333579e85A4939Ba5fD4B19",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7b10dAB89e0e900d10f8a5846358D0582DCBD690",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5a78b1cA651C72EF0A9889007Fbd269b243591Fd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7adF7f1d37a75E5Ffe7c7c2c4760813634926A62",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7a94cD5CdA239F03d7C5c2FC71E327fa3de94eD4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5b357EA35E0201f2f1297a38c4d897241F4BD6E2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7a5fC6460309d6c0baf8fdDDDBc3F7dEC3f10A21",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7FD2582A0Fa99390f52c4E8F9992f1f936d8A4E6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5b92dd332A93D9a2C83b9EA66140b66C6D0F117a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5bf090197785e0Ca4ddf59bE7f79B5c806aA85D7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5c67E194061D08C69ec6172d3bDE394AFE51E590",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7EC46Fb63879d9AcB4dD24010D897bd3464799C5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7E9f8BBd7BF2C7e329880EDb2278C44D70008C78",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7E9D986F831F11CC841d06924ce8921eFb768C0E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7DE92cCfA1516069DfD7270B1a7d8477ad35eb46",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5d45933d719178f16DdB16301c1D3bA668B563Be",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x57524ac077722cc57065b64ad4722acf44f6ee8e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7405ab730dc11B6b6bf15183d1009d957Ed144BC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6358ec9651e996Ca033a612d8d74cB0a23AbE36d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x73f33C6dFF3a2EBdCAB5A1Ef29452c6Ace83aB3f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x73c780E6D23e6aa9CC393Ea979793cDe4D9Cf343",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x738FE23bf4Ac408905e81BfAB46B50d9668111df",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf13D599524fe93ed92e7d57918AFB0bFd1e48497",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x737c06ffC16304050ef7F4A8B564b97f88f57a6A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x63F88Ce44612F15e34c89b12841B320A0912E09b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x63Ff94D7CEdAEcE207160BC8975A47690E310d6c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x735fe52c4014AE3Bc3cfea1cAfF7e01867a7A124",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x63c4723741f293C0903510598115cEd492534c41",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6419F54dc00460eB25F0ADE2d29ac4cd1C134f95",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x641d837AC1Bc7D04a8ddd0D2c0455c251Cdea6E6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7334E6a67c1137A014b369874e7D92e81FF1C88C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x73326639A9a0439fdE6D960Df71f4739fbC1651D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x72D1B9513C3fDeE6956934c7096dccf25AE9B804",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x728F58C4f8dB2D6f3646048624f5C3a86F29De7F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x72403559c296031C0e6C404055eAB23caC5Fc701",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x720b851BbEBD76740C5Af9Fca4AA990917D457f8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6496Cc36404Fd0E4c740B0191b140dee757B17FF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x71c77845338ba46A2adDD1E156194329F979b5aD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x71c67a8Bc01B64eA1a3Bd87c453b210Da2086741",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x71a77F0300216DfA29bBb1C562348005eC0D64e7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x71F70a99fbbB2f0700c89f4AeF1345f990E530B4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf0d605733a04A65acD5fFF7F745A4ed6801B1763",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x65389f8670eaE37FF039b27657127FE9aF2fED1d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x71D31ef0A18C66FF2186A37192316B174E326e6C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x71ADfF42B7e410be00fe4FC1666A3ac54A9D14A1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x719Fe47312C24aB0FdDB3C469662C0448e820F88",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6599e97603de63d7dAa0191b05208394d2141ea7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x715eB0df22506adE8d5DD5D89fF9caFFbE3Ec75D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x65B80b049B1f917F7f8106B538822Dc69a3C2c05",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x713D08992C8DD27384E714993e928c340D636677",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x65E00aA6870aaa9E950364e93B9e732FF205965B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x65a78BDdEdb3b037F38853e739D1F301745814bA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x70f209b903Da19CB6a1e33ff35A323ad2C4EaC3B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x65c2f2e22F1d71D2979908d2b58025f1A5C7C29a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x70c483a9448fE5e329dBb6818b07D2E791284a8f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x660F8e66D1183A54e85F586b61b9973Eb410A881",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf0E80AabFCbc4F9d39c7299975894489CBa682D2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x70B7D45a10a7099CA3e504056ae779725734aCa1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x70817BC8c3e20b824244f83F7d301f8e0eF05B27",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x66573aD3A59c25Ec8dC48C59674d5F446CC12123",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x700D8a76b37f672A06Ab89fE1ec95aCFBA799F1C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6692f937944D0c1B288166b9424A13Cc6E4875eF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6fbf89D73074C0c0a91c50ba1A7B8b0A51FdCD89",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6fbE3efE494F5f149540e6665E5d4B1dAf83B7aa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x66CfD6F14f064c19dc9a0dc1448b2a2EC05469e2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6fCD3561C603cc72b15357caF59C0e579f5C1B03",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x66c5bA9DD4049c7F4685e065b204F10d5EbA10f2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6fA4DF9bEFb91F2E4a3f17B75a3Ac8F551CD637C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x66e3034Db3b1c322c6f04e559B629eA9EFf51210",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x070d2826eEd1a2e88E1Da72595073778C6E9B15C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6ed6aeAB632571d8dED050EedE9cd5718Ef20510",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6eA3B7b71b2980C8568c08A12B90679ebbdE4F95",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6e8A9fEebD4C1d2e3B9Fd36032A4fa6390C1a20b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x674330Bbb2BB20440DbB617998857C1e0C01d30c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6e8749803960a4d9fa4601C4699C102D4236D307",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x675aA1027C104C605FF7aD4Aa9197c29dF85d660",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6dd02013dD4faBb87f86766604a4fAD03d4efCe0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x67A5CabC6Be94383c752DA6A06518558e6df682b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6dCd96c4c1E8b98c99dB39D8C0b351a134631d01",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6dB77965321f8ad28B424df7d035Df6Db93f798B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6d53f2CF426000B106E8aA6D891CbFd3B9306D28",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6d2C80315bB93807676E6121060E4505FeD53ECd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6c5Dffc002030203c722c74497b5348eea54944c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x67Ee9A8C19F7873125a875F61ADd461B4a505d8c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x67a0c496E961da0abbFB579F8A41068E57f0e9E0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6bF8ba54C03708117232E72564a47Cd60Dde0dE2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6b6c9AE6038818DdB960DbeCDe7e931f416639eE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x681148aaa23d319b95920301220ba34226070b5e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00172E28aC5cC06c9AA0B9a81a0e244D7326344E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6ae01EFEdB2Ea2867AAb38E810f6031848D055d9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6a93dd0795cb13B1F4C97603E6B3243c15383981",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x68608B27bd20405D92999f33c73FD7D0ca54D5FC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6a8737D34117D7a0Dd12D5D571BC232eEe3BD853",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf09b52Ce23d187acA534E4901A311f4e7F488bca",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x688a1C649c759f472A3cf178bD53294d3C792Ea0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf09A5488524CbAe338170Fba8375FF69933b35dC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x68bB788C5b11759b948434051cE2f425E5ced1b7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6a1812934f02e1a390E37933522CB142F046Ce0d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x68e1faa312Ebda6664f48eF744bf8Ae9C4aaB1dB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6FB820D84A221f837e38e1fDE30D15686666bfca",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x691821d5483EDEad479640a59BE92036C921BD34",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6F4d991E3D1126A1Da962f89f24C167D616bDD85",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6F3eF96C0Ddfc9F1322C81557375310f66BDDC85",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6E9811f47EF418dd14ff6e7F28A91383E0430AbA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6E5429dD64DdA778D7B347D7CbD457D9ad35d22f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6E14985539c20e4232255c5259A52F3aECfFCF14",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x696B68208509496228437E41F4D0e0e9D5A2E659",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x074815EEf85cf925bFE25eC015fEE3Af72e2Ffe6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6DBf232646006780D799BF2c9Fd75442443FCE66",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6D078a100F8342eCa0Fb28D6B39AfA8E5563f62a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6D01895f18aA04963E0Fd7E7f723DB5Cf6777d29",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x699aaf1969128B36D8259BEfAaE010AA6379cEdD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x69A54Cf9AcAdAb098c35F6B0020a606a528cF663",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6CB720aB3811ce627834Ec43fDF03F4553A1daA7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x69D4ffE5ffea092eEe067303b36B25ab69721809",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6BfbC8E8FaC7976c17fbc6676dbfdD4FCf3BCa70",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6BfCDAB2Acc46A952e60E4EA1052Ee9156A0378c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6Bb57a56ABae80b2FF13566698cdE76Fdc31114e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6B457fCD5eCd87d67D9aF2d6ac4DdbaE6fb62F78",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x075E2c4fAd661BCEebbDA0364bA7dDa9aD505Ad2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf078F05D6a90EE006F58bDaa31ffBa8fBC8BE967",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf0498139B9BDcE3028125DDf9B7E635a3F5cB7b2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf010DA4Ba7126a89CbA34b2ae326d972C17777C0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xeeFF14C4fE17C3b53e361808AFFCAbFf5dbe5B5B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xee40bEC1206030b7b1506072563a7F853d7c491F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xedAa7d351a309985fd78ea227a40a335ebE618F3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x07d702a97BaF90dA0a24C4928913A58ea55f4AD2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xec3961eA41150FCB10b8059a0Bbe8dEefd222273",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0815209F60bC0173f1489240555797Bd6b9da33d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xeaF11a93da385f673ACb3651E29660c4716A3Fc5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xea60c5721F823aDE1A5e254BeF9DD38C73C69d59",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xea0962fA94fAcd18D9d11edf7AB424122f5fF1a4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0867E5d88093b269F05153342d105dCD6CFce0b8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xff09c4c51a998b61abfccc4429e8203abc480900",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfe8cC72D95633e3a40CF3D221a609ef0C4807745",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xeDeAEf05C60dCe8fbE8816D5A2Ea98Edd15871d7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xeDBb537f05E37CDEFf0e59Ee3Ef56FFfe8Cc3D7E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0037792dbBAD3cF9535dcA2047181DEFa27E344f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xeD5E2A5E884ae5731c8FF5753cBA3cDD639f1283",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0911d332B33a702f831549af5cC90173940c9ACC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xeBe097e5F0D693555623b004a4418c7599aDEDb3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x093BC9881dB98528510e77a66aC2B424430D51C9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x094B19B730796C09a0796a1b7Ed8b2E599237B8f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x005d545A2EEe6e57b1F8BaFfC97BFc71787f8F92",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x096A30e43A3399C10A804B7F49608b69a265c8F1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe9E5A2E72D9F99b6F2F522cd6F8B4c88a3Da4A8E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0063BDbf53c76E83C0eBF5D1380d5F8C0476a906",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe99431756681a90530D18B415B30138D498C6601",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe95852c7979f69EF9d4c61285545D47501d570F0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe93b0D4f3FC410a5b5D5f522E25E3FED65Fc53B3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe92Ba6BB2354a5eB2d18C07071F01CE6885eC27c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe889F19fc91FDf67d76e832a716CadB3bb68b24F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe876658F26C160bEc8916E846c01BD46d392E001",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe85d4244E5eC1790c36D8968E5c1B4ee2a557243",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe76fe3F796151b096e3e2E1563b3F69fB895E770",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe6da746919631004FeDe543651368680F130E730",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe6cBdEefFde160d15F7b429B2731176e0607fa19",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe6aAFaAb5781192A21E9BD6C5AC803663EaAB518",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x006cFAC82C6506f829A6Df79270A5F299DaBF4A4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0B6c0a895107B120C35a6F548BF44C90b69e9F01",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe495FE13A8aC5E28dCe67295F55d63818c6aBE4a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe424BFF26100A0f560A8036806727C00c0f1be3C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0BF1203EdD9C36F8b908D82A6661D7Ce71A7a205",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0BF7586F9CE95309e710577B1A9d048854207794",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe3b43b615500aD2ad63a3B21C9e649b4E2d81FD1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0Bc12E65cD194d092F279ef6708A654776FCb323",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe39e64961e3c36f09504a97854023bb30dc6f208",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0C1e1DAC1a1a0d0a0fDA26695e98474dBd1014B4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0C63139e6e7ed5bD90e15f233Cf3BAaE036261f9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0CBB5bb2F8DAFFA90c7Ebd1A83D583858c25282e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe39658928Df50C9f5312A3c0ef8EEA1CD5bbD207",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe2854ed6c3A65dbF89bEE56AE49dde2344E4bF61",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0Cd1e4A7b975DAC4be7d38107c9DD8c6cFb2b355",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0CdAfC2fbd1eB267bd46A500A668EA4B7f264A23",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0CeE61a75889827731bBb314180d10a667A0d0ee",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0D083196A9D3842d0808D06c6e64E1B4AABd3cA5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe2332014B8cC2a25245d547B1Fdc2EE258B68047",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0D29760bf8DD96931c5ea2c865069c5c0EAbCE96",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe1E7F9956ecE3603967149A86E8839D1aDE123ef",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe19C472f82DfC8CA639DaF4a541c28432cA19EfE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe19617594bb4ab48F8880AbeFa212cEE516A7DCb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xe05fbb64676025eb1b54de1bb57f46a5af473cb5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0DFd7175237376827cca29F83224022a027316C6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0DdE7a7Bc9f7ef2a1aaB9436c08250960B2253BD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0E32166f94F4c4cCF9C6Ce71ADa0694e8432A147",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdfD3718e556a5dA60D55464c53A98FFa1d6Cc1Dc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x000003D7424C35A79704c3BBA5B9825D8533228E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xde4CF945B202235e09eF579AEC216c6ef57358d5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0F279bd1632C9Cf60e687A04C2fcDe1eca5B1178",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0F388F39A1c59b751fD847Ffda4d2CD61EA07F0C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfd7D21798c7638cdd3614D943fD8633c3B3Ce94e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdc3cc85c30C81984117b11f52c8B2B4A0aa65317",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdb34ac39d5F336E316fB67D659C0955D98481FB2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0F75A56564A54C1C8A3Ad483fF75fECb5Aab9ec4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdb2d4883c6f97c37Fa70918d907114cd5138F953",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xda7A612de0911F1A1D937F19297cf8857e38A1F1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfc2dF5c3AF14fcf1B11760CB1a2277c7a5817deC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0Fc021F8FE3F7f4D43e45567DA4A7d87882F7fAa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xda620ADcCb2Dbdd0041175ED5E8b3e32F518A55C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xda3257C8265fbA5f8F628B671d25E240bD804B0C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdF0AB8CDcaDa03Ce5f56eB4246FcCb0b4d268581",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdE38e66dda5a4F5d42BBFA67c54598138d827004",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdCba2c0AfB5c0e24559F5EE03a459486EFB1707E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdC876a95bf1F5d6785f2b6A3E50211111Ea76a50",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdBd3D974E0e0b31513c77a956b8d13756b686868",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0b4d48496a101C0bbaad3D2cf28ae042AadD70C1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfc166Dd5E7599063642B25f5C91c7366D4c90c46",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdA3eDF504f8EE3A6396e2795Db72CE52Af4266f4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfaEA5434F09E9f6F59Bb760f527eE1792f116683",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xdA3ac2621E9Cd980A7C05aCb7d901CfFA98fBE36",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd9cb14e4448E8634da3697dfcd12Bb7A3fAc7A8d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0cBB1CF8a6455C88540a6f8CDB253660E3346Fd1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd915185860C732c991bE071948e24a1d01F062f6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd8f09a9b6bAC0B86278Aac437C647255c2815AFB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd7b3E63bd1ba2e4b5485D6020af30e579aC804c3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0d22D7603682fF3f282A44FD7C4F741aEe463FCD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd7F0Ad1C4A8509c82C9B7A2853EbA11CE5A5872a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0d57cF8b6DEDD3a210e8e485e47FDFe18F77C65B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0d5a322e2FeC61177a9fb1e497F2113CfeF6D44D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd7F01f5Cc166C105209ecad3c6d30C8d55408241",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd6f9eaDcD7Daf11f247D44c456137083412C2875",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0dB71F507Dd156eF834Bd916f6f344E6a0f936dd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd6dC3772CC7A339fBF22A6EF8530adC37edd9032",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x008a7C3346aDE5eE111976cF97263d3904270E98",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd68C0d5E921197ec6e56e25165fF5505f9B95D7e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd6536DF2a7C4Eca892caB69b0d5d103904e9f4F3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd5bb3732538E803d07808b087205D43234B27eeF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfaC240E6785a20c0D7D62587381411c8ee7E6412",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0eF1EA4594E5e183318347ac490Ea13B5a4a3d7D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd5a3c6f6d7F14AcA03820d684EfDeefe0045948B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd596fAaE4f41F976BFB86b580cd55d624f323Ee3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1005FB08f8aB0E68A3766D01Db2F20a3602eC468",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd3b16ba22C5340c605DDFDA694A561B95CC06CBd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd3E62CcA6370DB99A909ce4857AA6CE48aDC55A7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd374831B7312061c08c8cAd4Da078c1FC39E2679",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd336769aAb97D498dD0906Dd9FCBCf2fc5193617",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x106021fEA953b0FD7604ec34EBe1A6F1c558Fb02",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd2bad9E380B5D58aef26Cd6A55C0C940Ecc883Ee",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd2E81223b831AD93369e7BFAfe408c3239DbFB0e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd2AF6554Ee30fC0041931805c100d5385EE20a77",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd2814F4553EC958e8eB907101aAdb2A24955aE97",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x10b49eD8f1037ABb8340Ed49AD840bb542Ff2351",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x10c070f6690f1fB20dB2470Fba92C1515bF9A44d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd1f0e4578fC2F32a0aA3975aB983742df3cE0d46",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x11099143ED181a04220633d2ACe95f1079dD24B6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd06724Bb82a353c48a3D757688350decE48402f1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd0646Ba9D5B3dB38985e4Ab5D06B3e86e902BB41",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd062bb140549f8d296AfDAb931a72061B326A23D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x115f40480A9BfadF066A7c09617A194492d8b952",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd05321eDDc5E2e6C667a0C0Ed4BA596F79996db1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd02e273E641aFf101510b30CF29bd7Bf8dB49628",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xd01600730F06F4a34ce46E026D7D8cf74723e5d3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcf4ba4ea0B3be2CBC819638df5429587F3E7b601",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x11B63194FD77514C6a1f453fa5699794b3528641",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00984f305A617faaCB3890b23bB7abb7e8AAE489",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xce26c22aE4853A253fdfd6Cac9F37BdFAD63798E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcd2049D1Df0409b014fdfca7C75BaD36BDb75Fb5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcd17bDee3FD60Fe9972F57e35165c2ca44a3F5AF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcd146189A01633447169975Da3E30a6991B0ED92",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x11fBBDfaa0A48f41E03872E1081CEB70C2993709",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xccB85193d8e38b3189Ba060674A5b795Cb720Fe7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1235711B877fF0aF698Fe68cd2eDb127F2Cabde6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcc6A92f5A38FBB535a1dC8a5dcc101dc59fcEfc5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xca98a7Db93E53aA7381461F728a481a941a590b5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xca7b8E6a0ce3827E962015af6080Abd11f332698",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcFBe0b8d935d6b65856c2f0EB39689abC0312e45",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcF65CFa8e6536407514A05AE97B499643769a8F0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x12971a09400896dce5B551c0f2CC5c761C5Afc08",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x129BBfeBb515ACdE57F3b88f30da5d173fA464d2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcF37E6BBD25405e030F6992896B5fa7B2038871A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00CE7665a4f8d246E9cfe7BBD4D67509641AD268",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x12cc330651bd9dF8D67d2ef20B7BA3557Bf8258B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcDdf5eda56De8a5204b396443b4E0765f409b863",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcDb9e17996bc3bC4679FCB3F1Bd34946160EdE48",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcDaD5A4c9Ab2d31cb3be5fB97622CAC91f93412d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x13367F2a864dCab2B9316d30F6c02ebb4ABF5956",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00EA39A1f88dAC8B2eb772e947D6Fda411BC4846",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcD5FeE110F7e942FcE36aA2310628D9845550277",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x136597615A78b8BE5CFecB4B5143D0369aDB80F9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcCEDA6E754E9d0F72ceFEf34D58bA3b792941602",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x13BfcDbe2f59Fa22ab5aaE8F126FeB1FE7C9782e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcC2b11e154bEC475a8863C9b7b6a1056D61dEc32",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcA80A9374ce92a33B3251EF074CC03e1075dd017",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x13FE9383e413557aA06955C4930cF63Da02C5494",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xcA2AC31D7e3E69d08438592B33ea8dcC62CAdeb3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc9e922aca2Bcb6a8b5F743591a2c85DE132f8F76",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00F9C5776f4D4B9De0972161089165313f9b3438",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc9D9F60F4B0D08d31c01AF3A2569F304CC279A04",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0000046b4EDEb007123E0db9Bc4D04247b9aDc4A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x14572dAbB14bAe852a34ce0EaD5e59438E7ea7bD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x145cfcA747D7493e9B6FB839aAC0b800220e86ED",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc9C1B46fA6074B7D2C3e5A4eD93bc6804637D165",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc9B9E1C2AECFdAf09c92A5033efa5Ce67dF225b2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc9AA529A2977a628DD02687D29F97e5E318F6764",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x14A63B8B09Db8C9003Bbc17713631d35C90633c6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc8C58CF1B0FD4FE65c2f2052C27d224bc58A0BE3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x14b3C1c4c2cB9b710D854fa10999D39d3E247610",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x14ca3C2B80d2981D3cf1D35c8832Fc9aC57e6e96",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x151E67615842BaC32A3e22F0a5b69695d250c2b1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1522bfc72eb076b9f48e13dE925757a5AC48d47F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc765781ab4F13a8ed91999E7363205E7fa9Ed3C6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc72E54Da8207C2196B9280C98B73198B5c3eD902",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc71d239309941ee7aa63bb17ce703613445ce27b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x157ab1dDB4eD99276281EDEe468CFBD384168d57",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1584c793765832315c5FE3e573b041A022655b36",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc68E06C5A5E984F632b6264213b4654f58F5A259",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc5fcd792800D8f8a61D196E972a176eb55538c91",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1588e89b853339182F25bCED3Ee0815C22BF015F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc5E0F77b885005dA3adE1ACA12DF988271cE514b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc5716c7c43Ab0420575596Cf9d58afE1E79AEa02",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc4e498ef89e2fee15ae209b1997bc87db4b6b432",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x15AB6dd45FCb70C2F950Efd3613Bda96980D7A0d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x15C9aE61F5e189af05c21834DA316006735450E6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x15Cf864Ebdc183c2A7e80BD688EC23135650D8f1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc4F58aAcCab3a59b7d2f152777B797F8Da609dac",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfa4b5AaA53bC5835014dfE535b27C1F6feDbc184",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x15b1A50Fb29f0c8d3a472c8aa507a7A14c91E910",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x15d95d0Cc6EEB9C8062A4D96B8547CC6ECe2C579",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x16001dC857EC2a4820EAEe963A0f131b66473930",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x163CDd449dFDC324Cb2CeDc00470886E6D01B059",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc46edC9544CD15f6108e544cC714b03737aFd182",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc438dC81e7F6E5d43A09E4CD98E3C403E5Fb25a0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc42593f89D4B6647Bff86fa309C72D5e93a9405c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc41464ceb5dc6f182969f28da7D22De15b09357a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc2f3A03C7514d169282Ba61EA07E3BD6e46D5752",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc2442976D2D6DE1c9588181d60e2bF72FFfc472F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x16Fac093Fa96BE33a7757241A45B5a86354fb4aD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x16cF163b7Bf55c704F8D301B4C196c3B32Df679e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc18077e3a68A8d2E83cE7991C45d09549BB9b5aA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc175Ef18B14CCA0AE51Db6e7Ce29b3870F935B49",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc12899141FdE243C1f6a1e77F285aAFDcB50aFC8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc11949cE2eFc2E077d9193114Cf759593e9371B8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc0BBd7798BC4270e9d6DAFB934e86D9e639A39eC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc05B4c822a22b47Ef412ec7B9B5DcE8eCA27C18D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfF4ac2293B54aD23b5ca5b4862e42BB6e950eE22",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc0558822631B9213513891471504C013E42D580c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x17A2FcF14391E8B4418BBA7eD615c2e6B6C451df",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x17Befb63637CD8Db23D6d5854a966bCDB6e33544",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x17Ca04b3016e5288163546ebc5E54b7b5D6B1a6C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xc01Cd30aD8768413348886f0e6252E3d37F1BA79",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbf1562D0C04BfC35c1015e802011b788b6Cb4aEA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbe6A7319c75937DD775cf2332Fd1C1d1fcF03100",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbe37637C32dF7269d6Ac90FC39Db48B207D46492",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbd8BD7D41F1134cf12B2ad82990378504A33B94a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbcC74F80df027051F2d432c600a82edDb0FE7D7F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbbbE69C697Db0214624229c5e9196E2Df8A008A9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1865a4fc8B8eC7A920C74194323d440D114A0342",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x186843F9a64D3A9BE514B124F6B24256AfAB9A75",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbb3C07b71B3d37B0554Cbae7b6739361B68e940B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbb260cF6fbAC146FC21586C5ec38Bb39f90005a1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x186da00749054Cfb3BD4f4012FC6487875aC004C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1898815382F4e5197EE68EA9bb3E2d52e5aCd6a7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xba93413a87Fb5ce95801c2Ad0f2c9a8486DCF24E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0132A3087DeF8f8E8addC7D8a96cd349A92016E8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbE277b3A3c42D009F3794c5075B725fa8fe56063",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbE171CCD4AdA55cAe494b41B44237AC05294a669",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x190424e2D557C1900999f4db9B0A1D00Bc0ce674",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x000005551A183f5b31FB2f44c579feeD16A230D8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbDB7Cb434b2fEb6904fEb35884B5E745D7e7c6D0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbCe30090B8aCf13a713E9c7ffcdFdf464b1b1DF7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbCbA4fEbc15267315dd5E632Ba0864cbF7cE8065",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x19529d50E2610eaa2d895047Fd0F3f2dAE675c0f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1952f3e766E7821C5dc70B9A95df85102AB52a9B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbCa93AB0C8796669d2aF5Ea01Af57C380673f45f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbCa587B9986aBDC98f5F4F681B1Abf18C7f0173c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x197CFDB91D37b73fcA67038168aB2b44aA7F1B77",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x198094F535C78072F08cC1AEA5Fc314f8ac1fcb5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0000003f25f9E4D1b71ab5bdF48D04E744D52267",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbC9f2FfC721AFEBA6CA328bD2cAd9e020b282aE9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbB8277304F86A60Eaa8075c1a80cd9b15d4f6678",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfEf538F4f8476098cAB2E6Cd3C84Ab74894f2437",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xbA6981cCBc14D9b614b4daa5c26874666Dc850F1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x19DC9208Dc630c96c8fd50EcC3561499FDA0Db13",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x015673A569f9400aD3648Cc5a78D38c3Efd282BC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x19b35E87b26e30EDb0ed958011A3e7CDBb3F6835",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x19d5bdc5bEAc9F12e5950d5684Ec44b316B30826",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb8EF7e2a11Edd566Cd45132E8e5d57FF5396638f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb7D4143788d07f09058006486CAa62BBDCD6113D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1AE45E2FF52e923Ef86f96379c47F087E86dd130",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb7CDEbF2c8D7E1Ded14e84Fdc10057AE32a6b060",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Af0F6ccb7D560502eD2Ec750788d26bA898C03c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1B006582cb0928CD9dBe5c47B5a1A3970AC735F5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1B0367f794aba5948aF0Fc876E3a830216efBd5d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1B42cCF1207D44Fc599e85b84Be05068AeE8e5dE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb673aCf759774f6b6A2d4eaFB4e612071Fbd7373",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb62F2cedb5941FDa373fB5923868C259B0695b62",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb5f4D09548759267A11152BEF33066150E5E04De",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfDB93CbEfb117C6e6eBe3a694c8De374c250446d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb5c1928130D477Cd88217c03Ce0d28Ec2f06FcCA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1BA576A42196e11F794Ae4360bda3BE018667f90",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb5bdCCE0950760df511084737E6C9F49d416944c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb5bBf6EF6085E1FFE7ef584321e8457598c471b2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Bc058bde05e1bdFf4365C5cA07c9761a810cA89",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb581Df417404AF2bf768a97Ca0c45c904373A209",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb4f71E7dB220a67e35315C38A9acE8117636CEE0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1C6b3F504Cccbe21C7D69D80117F7C3CBA3C40D7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1C716e311b3C94dD3FF1A5460C1e4838D04f2B9A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb4f0c739fa3c9fcb577b7002d8c292f2078fb14f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb4C11dc0F30C70462B87027a9cE3744eA4c0058D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1CD4a6c486c59df48433062C99661B94873B228b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1CD6BEC46f14A44C4D0f74373e34BC06f6564a50",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb4598132E87e7eC61f0AFA992086a4c0349c8eE3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb4467853E04a52ECAA77122Ea9DF7604D4EBd773",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Cc91279F9023Fe6cD22c0b42668c3A0C7569e8A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Cfc855b83f3FdC009CE0eD1Dd83aCAD47d45937",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb38F535D9D033820545F5b503E223C13AD0f3184",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1D1461aBCC38b64Aab64b4caa4A76071B956BbCA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb375E8C495CE2a94250E52624361Faad24cB6017",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb36C1711AA153dF706304E65A84236705241AbD7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1DED514f2810E6c5661a7f5aE6A326F5E0c324c1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb34e9Af4660F9F9568ce62dbF2813ee282fFDcF9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb30cF3151991bC643541113e7f14a150D2cE26ce",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfD91bA05D15f0BE6De71c256Afe42c8c6d10C484",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Dd1bD661da449912157eB9655111C7D6764af74",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb299222dC3dd79448eD33F0cee05b6bE61a32C4E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb22069BAe256D45C058b55A4d96Ed9b30b157796",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb1d3a6a213ab5b280a86959011f6599e2bd473e8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb0A5Ad7cef8c23ecbaEd0ddD3405911eD5e201C0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Ed0854bdd46bfF24fCB3fc4965F7022700223ed",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb092bAC11af2A63f6e92e2BE1b96dde121da8e2e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1F32F3c8b28B7B94F0160Da9fb7ba86470BD0F07",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1F40259F9735e22BDadFccc7cd997168D94def80",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xb0180b561Cc206050a9f46dd92dC492ad1ab9457",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1F4DcB85D2fd9f1816833d2FCa9044FeFF668C61",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1F572846AFd036FEbf9Dc39ae9d72512816DF019",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1F886bb69e3Ba6160D446577C5271Fd57526F599",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1FA7682d678c775AA3a33c6930F68352F7333756",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Fa406dA31EeA33752481C526a249C06279Fd9a5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1Fe2dC75af920FeA983EF6490024aEfc06f8B218",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaf835B44B6160B0992B7c982b984dc7b87d7566d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1a15FcA785a598f7B31955Bcf553f69Cc667A84e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaeeF2A6eE4d6BC42520099416544d290C04D7BB1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaeeCa244bB08576C48D543B705d572D6D5AAD684",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaeD2CF6D5C4460759749ae5dd71338270e368eD8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xad9f40f3f377BAf32bfc5e202e14fa74e6c2F6e0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1b161992A90cdE372375825265536f561fb85486",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfD7FD7C934dff1c2C6278aCB043aD75a4262cd92",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xacEaC3fAEe8f38DE6f882821022C7d5E2B92c1b5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1b4b60DAff677BeE93772C43EAe5aFaa6B20b046",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x01C86adF29D38CA88642aaD39611919f8E31b162",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xab5D3549A69Bd95ceFdA4824A0207857860FEeE0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaad8b894aB4355ab94F46f92fD0C0B52c8EDA511",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaa4b66260bb399b090759C4bB78b2196D2099157",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaa1fc5F6034ff936f1873117d237E7eFc0088065",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaFaa37F3dd0307B1B66c7Ee84058037f8D417980",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaF7A67D5BD58Bd734943c4d4db2592F044Ea1fAE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1cA5EfEd654fe84C5102B5F96bfE467C1a327b7C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfD784479f54E83B2C21157D61727C0423587Db9D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaDD9E02F4F71617F4e964342172E3EEdF4e02604",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaCbD35C88F0ecEdb16332F530e9B82492fbC3b3F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1d55779C4e68390aBd6236ec3ad0Ca872e00a49E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1d72C5814F65E7Ce655F5b8ED4c5B26aC6F1fba4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaC59D335331Dc962a757D4E583166882B508D3d1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1dAA49168fB3DAb405e9856E51E7Fd8af3F4cfe4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xaBC46933B2646aBd4211363E257FB93F88bf7e6D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1dc9e47e76469Ef960524b48d064408a02d82882",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa9cd2dE2753Ea79A805fb5ea8F2a24Dd1F12951A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa8c378Eb975492D9257b0ae63BB309f5aEEbCF3D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa8AcC8410163E2d1cbcBDD43424eA7C4A5bDeC40",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1e67024fC2947e1C448b58421895EdB0C4393EAC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa8213AD0049D72400dc774Bb8b35636A36c77ea6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1e90572535DdD9BfB5A5C95c6CdE55cf78a1D5e9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa7Aa10aAF207D2C578cFa78dD5d939291A3e3605",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa72330959607E9Af9d537a4216b12056d5CefA9C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1eFEC11222ACE5f8D23b53dbc399592EB59053B7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa6C3aE698bB8D9e4804634027BebCE9bbe87Fbc0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa65A0514513a77dB0bf091D50980e6ce2aaDF2f0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1f05483d4C28777b4e67B2007C1bE53bC671b949",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1f0Ebb89A0E05892a2e3556A4850eac2574E11C1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1f146B9131d52E8E7e3FaD40f3F238A873DA3dd6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1f434c8C061c410A1f892e25289c339574F69bAb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1f72D87B772a423f350b608b936450b653794031",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa64768627f4eBdCac40CD830485987ac2E6a760d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1fDA1a4DfA6bcca301BeF12BE9E71E3adcc8e9A1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa5Ece2BAeEB7b0Ab3B9f5387d2C795d28de2cec8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x1fe633aa0D1aeD564884c182883B4086c443841c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa57A23e8b5C1F31FdF93ef44dBE80de0BA1e3E4a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2020aA5BE61D94ebAFe28Ac677A26C2ABf4a6540",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa575d08Ad847231987Ab2dfc3Cf8F260254c9EA0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa523D2C5c06B722a3320C20Aa9BC46D1874132d8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2033fB89f70fec9Fb2c3270ee81106CffAce74D8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa479F78920aA2eb64601cf6450f967357BF43F0f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa4511BE8f71BEB64756FbD1c8aCDEdB6F9D2e6f8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x205EAC97Eb55b682b175454023A6E96D5153C36f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa4059098e6b9663b4585e9faef56dB9f8435D3dE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x207c600648537539f776254635Ff41f3D06a1662",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa364E6b754967E9Eb1Ff77A0860658dc3653ba7E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x20D5De673Bf4A4C1EB5358D3426E5371fd17DeCc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x20E4504C704a56161b237daff7769d9c9f158e7f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x020DDD8033D39045A6cd511cDb1219bE36707ae3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x20bcE921DCe7D9C9A948dE8C5cCeB77Fc34fA201",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfCcb2e17D6580D2C79D88d447d3e14eec8CBf89C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa282f1c56aB479080b3Cffb29482f91568F98039",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa2758921Dd7E3cA0C28071cbbE0fCe3291F8d589",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x20efAAE5141411e968db92B312c74c399B95472d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2100Fb666E69525d3A2365Ed529B3eD36bc50A00",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa26B3C6dbC3AbA55321c347bF2e6e3188323D4cb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa2505308cc68210b4AE843a1044545a805F50438",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa1f97ca1BE0e603430c3eAeD6c91bd2D5f9c8536",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa1d7c0210c46a71127913c8f446197b01d29E6eD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa1ce471c0149E86039FD4C41B6B91868C181Cad4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa1b5CA78DA39b697D42b0310AdFb9a2197673Bf8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2162405965b9B1568fc400CB8CB4b9cF77810B5A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa191B2DE32dab8B6Bbc98d56fA9013197D2A02c5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa18153F94b831B5e60604A596b99f14559c6aE6F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa1168DA085Ed246E40f517c252a2ee5A51a9E13E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa103B4B4879FdC698b15B50353d5d81be5Ae4de6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa0879D66b4b0f56d1a99f7a1a12D95483CE17Fdc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x21E1145C2046F4e8c0659fa3201F89e9CEbd5EB1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa07390a533b8848308919268E1943dA88B904bB7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xa060538Cb7F29E69E69305050BAB6775338127f7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x21cf338ba416956ED44C120593eF94b47F8f0171",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x21d0A70a41c38f54478e76a1B573E25327C8B127",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFe65116E78059e738555c2b7b80921832741f4Fc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFdf2db9293C2a1765A27b00F2968a927165F00F1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFdbFA9ac2a7acB4dE317fbbfF831CFFd39e53f7b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFd597844f5846692056917601BBF01b83666E3e8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFd52373A44a3993ef889D72deBBd48dCaDe9dDF7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFd3b50bB02d9ef01c36703E49D050Dfc3F5b3690",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFcA72540C5a3A81E12161c86aE87a5dB7Ba0dfe5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22357afF8Aa7E04a6Ee1394A4bE81D8f41138F98",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x225942c0167262C76E09a7845571ac10F7E8f74D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFaf91371c336264b23c66D9D58df78418d067889",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22686fF2ad7D01fE8e5B3204321b7Fa841f76a6e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFaEA6322a2a0B3465E21F76DE6613aBB1a9583Ac",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22963f931baa98d5ce2a43ab7681a638a693f560",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22996d3A05c8FED656D4DAcea477CF651D054Db8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFaAb5615d353691Fbe9B3d973fe89E20E20FDFfb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFa3a17d1469D60e7cdC8428cc8Dc328012d78350",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22b2cCb53963Da600c83191db1cE3f61f92DCf45",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFFD481Af23A2E6D7c27dcE485D137B2809D588C0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22c20bC8a791d22426Aa0fDa45B18F11413667cF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x22dFb7cB0F2133cba29c7961bB27E06ba30E6b20",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFEd995DBc9562918cB1220445EDBf0324c8D6822",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x230c9F4B37BeFc2237F16c9F81215d804CA195b8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x231Db564991a0FD648cd03802a36fC1a6b16C2D3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFE39Fc91836256CF61f1ED45B3d83A3f298f134d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x23283e4d4eF9908668c745517ff88F08C8a7ebD1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFDD486e1f0996f9599cB5Db132604c3Dd2f32f7d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2372d323D1ed899c431043aD3E8D9E3D4e09A24C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2372eDab10cDeAa7c969280ccA9452E3f7528C97",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x23BE0dC7e4afEfa47253B5de6BFd342A3A3ceef9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFCEB2c2575dBBFf5Daaf7D05c6be477c0Af29794",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFC88a9f25d118B63d2EF1E2bea0Ce80330Ad7164",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2418183EfE551c65EC5525f8195C63D6473865EA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFC85a441009D914eD6798e47Dd224C3d6F90DFEd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFC38699d721Ad5574A292CcaeE5C01dA2a4A28af",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFB72931F2e8529773b69df83B4a8798e31C4bcB6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFAe8cB7F54166062cA939FaB3Fc20235eC7394A9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfC8977acAfD9A6158c30A4dfDdF36CaBcD2FF63D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xFAb07f9e7A383A9eb0E535C73eDc30A549e84EF9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF9695c0357869dB8bc8A5b3b36d8743DfC077eb0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF935Fb60eaD7A6B03e805574D8fce63b5F8fC9Da",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x249665Eab716BDd67A6a1b7066680AcE0C38cAca",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x249Cd8C2b8F7396a1d0Abcbf8026899D9b8CDd9F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF8F92E8afC166c8b71a1F66f086b9767Ac5FFA39",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF8684D02D4de8B9471D8300e97de4764451C4175",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x24D97b4a874DE0Be1f9020d58C4fd143B5Cb47ec",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF8606e952E4Ef8B15A6BCb8F1ea819bEf2Bda1aA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF7e8cAeFa7A22999AA7a2DFe7bE570DbB341afB1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x24EA39c3f4744a1eDE80ad4A45d6474de29F08a8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF7e515D56A27C5a0Fada665D0Ed47e5906C30160",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2501b705F6434F9b4e40DAd3B9C1D17be2f696a5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF7252d4a92Cb90dc08fc95aDE9022E1f6DC99514",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF6fEf2BCAB01F567FE574A9e5d967C9bA9a5000f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF6fEEa0ED710e506eC74254DFC2f74ed5faD9C81",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0249a772E56efAb37577f42014D98C827A4615E8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x251d7384Af4C83aA857eB7b8510927Cfb08063BB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF67e63aF69786F7417F85559FAD7bab5452d4c03",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x252c581716DF6962fe6e7d2489059a80CC78e3a4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF621Be7B5736fe6C9302F2A2A9755dc9f33ceF38",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x25405667f2Fed1672Dabb48342035CFe5200CE85",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x257A5E283C344e07d5889F0CaDe33e33c9698b97",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF60046BdE496bF2910385228E4573978dA263EF0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x25BccC1208a06276a60C28E9c2A2A177Ef6cE9e3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x25C1eB863aA5B39DeE644096254b3a07f0AB9681",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x25Ebd056a0092d2Adf63C682f96d3e124aaAD5f9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF53eE1712a0469C17035fB2B2F1673a081cA743C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x260152D13409f52F163E37d568f1c6d6d973EE0B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF4E0328F66eC7e80Bc214871d098A9BDdbfcbED6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF49A059A056D7dd20F19c008fDF8adF0b51214CA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x265ffE2C4A2D44299306FFaeDe0CB03EBf9015dB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x267Fccc4069a9eb536a8281D2AC33279c2594D1f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfBc5d78512b2908fd19Ba184857480Cf004Ca4D7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF41dA1eA11983cd551e3ea67f2067693c178Bcb5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x26BE8890802066E39BFAc8c6227655D1A0E9E3cC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x26a45989d371FF7782c8C6fA3cCACE385385d8d0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF272220a3cBdc92e092f94f3CF34A1E0a2aE7239",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF238F230EC88A7946d71Fc23e9fabC5564eA4262",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfB2cD15B437433b96FE86eA376EE4901B8c7AdCb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF159448ef1041836faC54f2DF25Dd6B5B31E5d9c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x26fA607a2F3F503039C1DE1fd50eB7EDA6360c12",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF12367Bc27781eD423a96acA59E3Bfe94EE2963C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF10c88E9453ffAE034F398dEDC88F81C83509FFD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2709809202Bb197D7Ad2683597F6d032290B7094",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF0e4E8979a5F10a2c5299DB0fF496B8B5f107ffc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2718979775A3B14bD9cca19806875a6169A670AC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x271cBE9F871154b91150Dd9a6b1c28B783A58E3c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF098627a09604901AD2E63Cc9c2c490194c96641",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xF0093f678f4E00CAA422f3Cb1DA026B210783d84",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEfAF50Ce6D02769D318a3c46ac0840f3bdE9180c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfB24Ca7c752De72B34cef877D668b49Fa8E959f5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x026b43D559CEbA9C32f3A2a3eDF86037A2D794b2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x277E69166D01DC241700B0e33Cd253fDDC07142E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEeAC661CF294CC6C32002286f633631eBf6c0632",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEe7C4aCA7D64075550F1b119b4bb4A0Aa889c340",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x279938D416158Ab2F6fd4f690F1D9c6DbAE86606",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x27A37BB394Fd1699051a96a7a78C2c527e9742b3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x27AE4fa8f8a51cb76930623879bd531F18e4817E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEdb090078f3379c482C34B17125E8F30CE8e7112",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x27B48Dc3d73d8f191F6be36B65344d6f03866d61",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEdEF4D07B45eD881d24Ef7082D3eD1C4A9223ce5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEdDFb45e6cD19F1eE5A12E552E439F8cdecAA7d4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEcB7Ac4cd564Ac3EF7c0CD566A36aeA43e2F82Cb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x27c91EB53A65B2c8df9446063848c2576bb498c8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x281778f8fcD98F95C3E47C9426dceE860E5B949B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x281B5e7Da440Ba2Dd6cb9e7BafE2A888b8FC0d86",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEb451f2e9046D114F805E936428Dc3D26F418e6b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEa4b43227c209024FA84936cF13F7d9D015480Bc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x028A0126F34BF97e39E53DF8c5E44fa914596D4A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEEf5d25042A9CA4eCEBE8a9aA60da414c210c77f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEE64a3e1088f9804c35346D3dE477c3133dFeBff",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEE63A51Aaa1F1ddf34F60103A192f1068906Fe87",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2894a88D51971519Bc1Db29A01d516B9CafD45D0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x28B3bf0445256B5944077577C6188e46C8058755",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xED00F223e88Ef21A76608F582B1292A0E3003CA5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xECE9549d3a63FFBD125b4ac78609a09D4eac8089",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEBEaC6ae7ecD5e7059Df4F5b2e8056BbB6d60F63",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEBEa515Fff81d0679cB1B3701Ac5c842e869529B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2916b9ca377887fF287E2ecdA587a363Fcf92d0c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEA75f886dCC7502E412CCD268256CBB0158f9336",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xEA490D00B6537f775a5A1b410f1370d7a4335774",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfACcd92dFd3A60297Ea70b31CA00e574b8462E47",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xfAC20955EfE752466F15a8fF2D929740D890FdBD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE9E7F6Fe9499B6D07Aad03CCb951AE4E6CbB3732",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE99000B8904C5EBd5c9DF55E7ae56dc472ba1C37",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2974d67Fe90D19CF8535E842Bed1774aFb583B47",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE972A554cD7E2aeA32FFEd24332FE2c8c6238E79",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE96511Cdc3Cf11fB0558Add7fe12106D0b867e56",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00000834cc07da1fb81f3c353b7596c87fbbf8d3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x29A75363d4B1523BE776A065d06514bAdC4DF357",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x29B3c22b90E0a78D7A9d3655628c70EBd25FDd9D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE8AcC81CaFfFfafb030ff62a59Ec4bdFe9201017",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE80e81801f2f40A57614Bc13D1B0AcBfC083ab7C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE7921F821F86D16BF31CD3790175061a965d5270",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE729Ab6dFDf34C045CFEF60D5f86E3d385974BdF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE62169E962CBf694a19e478B40f6a8cCb07a2A44",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE58F5D5a3587013c60630D94F547f04AB86d1a2a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE58D125efe85370936844Ffe46f44a8003692217",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE52723E651bb27B0C61609F11AF9d605A6811cF3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2Ae5EecA93eE5eB1023cDD2BcF1B9cd4a45Aa50d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2Af026Fa3c562421367DA8Ec15c496ea6a11D6d1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2B0650946812732FeA15C0C58C1dE1C83B513AE1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2B08c7d4F779C5c7B33569a11F1d4135874Acfb9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE51B53A29c62417b881C1E606C1705a277b6FAa5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE4a00F78864A5B65192ED8b1EFB82042e63788fe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2B98F8fba21eA34E868C0A9ef5850A611Fc9aFd8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE3c7b0281BdEC80D614FB786f11E7BEDdC6f6479",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2C5aCd0d7ED19A54D27787600ba6Aa3797E10201",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE2eEDC04296090703243d1d6CcC68eDD00ca9ac5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE2BF74F082155a877719e83CB92292b5c2aEe630",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE2299216dd615ac921841ab90EeE3B6F107dEcdF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE12A27CfE683695f4Ef6a69E83c8cb9153B6d3Bc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE0b4643bB55D533c2F22F9F3aB419AD19B5D9A72",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE06C1A71230126B56b63eA73E40d4Eb7fe86e711",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xE00970A68331540Bbf92D92e2e0BC1dcB24794c7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2Cf68EcfFB060A127b76B9c5b208B4F34D17bE5d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDfdcFf60641a499A2a5b85E3f9fab67c01b4bBAb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2D21e8e045A1bEf336f71533EfCf068Fb2DC1C78",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDe96e75c7160d70a447a72AFdb75DDfA1455c808",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2DFF7C503D86C1dEBE2ffc0C13219cAfd68bF7a0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2E0A7777b17731f8DeC9332B15Ada3c129368f8B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2E11757C4823864AC8aB55831A1C0448E4E49Fae",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDe59972B741983F825c2F1fE41119bE62c12D879",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf9d67484632dCFDCa441FB7cf7a358d017e4B090",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDd538D607C0c3E8bf3546355f8aefF64533523de",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf9D6C5648A0C8c4a058e82Fa1efbdEFbC7b4365B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x02c1C8eAa50A4a67EEfdD505bF3E81444c946A20",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2E87F78F170cAA0Cadb4966C75A6891ad8Aa2bCD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2ED8f542216f8eE8abE1476E5634fa72e2bF6b28",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2EDaBDadDeFC4a7c8C737AB9EC20707DAc8d3eb0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2EF2564b0014CDCFeC339214e5C24B4990F28d54",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDc1Ece59dd453399CD84848F7505cA2622F5b3B3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2EcD8dE2C2bA2b2319952bdf5240AaC505da410c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf9BB321E1b7Ca215D1Ee4208f52CB6F1a6EB5498",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDb9631770d1AEBf46B6c311BE44557d3ac0A5eE7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDa9d66C930E55F45A11bA958ea35ca1F5a204F54",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDE55103Acd670f303FDf69ffDC6C9CA8a36d3661",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2Fb7A436Bf873144276eDb5453e9f96053067188",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDDBB89804645eE01B0e6b1C36c74844CcB084CD2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2a40eBed656d441590C203B63544fE23FD113027",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDD52C94Ca0ccc066D0Dc3e54D1422EE4E9d28D57",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2a7D3cBD6D8De8991b6cd966319D43bBeC811406",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDD08c599318A71F9525ae7D3513525E16cb50F16",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDC48d6C5bAa082F3A0F413db79D6995950ad81A9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDB9569517a52271d922Fa7f34f596a199C884A0b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2adB7105F9D12EC8DE6408EE29aa7596947b6DfB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDA73A58F632Ab9a3F095A304275ad10093c1CE88",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xDA22061c9a7D764fe1e3dB8F49B695cAd0cE1EE7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD9dB4Da15eE62eB7d4474dE97752C09aEda69a6a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2b5885Ff2479259597dB85b278d136E347678d50",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2b58DC4EE03805f091718A4c60D0dD61B5d7e2A5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD9A5B8c4428DB19C54611504c021f11204140Db9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD9760310Eb75F27bb0D3788cFF919B84419DCfE7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2c25AC41F51B32F5aB2F8B512851892f50fA6218",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD8f120eA20117A3a628E83C29b6bfB86Df389A1f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD8eAA1E8fE9706bC4E487b4eB12300E3B4C8cb65",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD8cdeBA0C4e2c5e32195574b35abF987c7753E2f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2cAa9C44471A96956108C202A7d8d01cDE545C5d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2cC5b4851679a14da2C59a331bFbBEA7108d5A34",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD82d6E4Ff3FE44ECdb4830E1E47D9b36390C3F28",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2d071d0F0E1D0A5E2807816F9768b7846E0B48FF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD7Fcba4C2B759a4D937696468b3366DAe22a2cD7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD79e6C205F09cE04DC740777372405FFfDef2f93",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2d97b519971C4Ab139E0c3cb580224405c86D8e9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2dAf9788Af2CE4a76795Cf71DcFd23F9E7F992DD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2dD60a1A5Fc60ff09DDe8b403fEA24FF6Eb4DC2c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2dD708578d61da3B22cAA963B90EF64D760fd7d4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD78405baBc85bD484d1B2ee4B66f53630de40198",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2e3F2096Bcaa698a4c6F62f2A9D79E2f1316B360",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2e4b3e07c4255Ea8250a058290427BA82c172b47",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2e518e6A89D0d9Eba723d3D3A43b6c6F6dAB27F6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD73e8B87376e0a47a02f82fb8629eF0F1B1C4a34",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2e8F2aA2F22dE59Fa6c15E7707B0a0C8D3B4B1Da",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD6Fee8afAF2Bd7dE663F1B96e13598f0a6a547Dc",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x2eef7088f91d8052635ef19812ff15b4c65804ee",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD611e9633FDFF78C178d4c437d7AfC5f2b296951",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD6007E2795C447e231b0E4a6E75e2130e86a8DA8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD5FCdE8196bb9d42F7751a672292113Df9B22886",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD5E0D9a9A7b49E463B9d89ce6FF8E3Ed8eF113E2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD59Ae975575efa5c43226766A8a162D5A9349800",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x0328A9a000574015452BE3F984f18B8C4176CC24",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3002CF8D024A4EebC05ddA2aEA9Ae6BA9Bd4014d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD5942f353EeDe5F21fbFc57959226d0814220528",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x302793978E49d3Bb86Ee418b25ebd0E73B31C2FB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3047A9bd4aC40875651c3A5A50cdC98325C24d5E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3056A459B9B39cCA675C5E4042A85bb2bB21D91f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD55B6e831e086f10aFA34d68674bdefe08eF9Ffa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD4f2A0678954Af3703Bc43031F2C3Ad301FAeF14",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf8BE559f860DF3E35A291344a9B595961480b180",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x30C9C1F5241e83907B1C1C621BC80E29Ff3780A6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x30D89cf031C593a59021F4Cc08C3BbB1F8c9418f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD444704B8074967eB9d0e4437b006C9171B350EE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD3a5A3B167fF2eab162E1E8a69B5CDbb9C68BA3E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD3B6FD963B6F1B9d2bDD934908c85F57Cc7b4a0b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf84B818f1c6eb2B9c2d47479723cD3cFe4DEE2A1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD3AC5E8B8376fE21adD7157184a8E65A080e7657",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf833a2B603b120f7c0A97EE4781CFA6Ee83C1eBD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x312613fab52027a21a9345b97b29cE18712F8fe4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xff278CD2Ae167060407456f1B596e9aEFBb1B16d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD3100C38Cf084E97A1F8210FA1DCF5b5bCf090B2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3160763D7830c52668420CbFc5D589Dc74CA0E4D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD25267b75cc1784A86B0cea4379b39F2B6fD07AD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD1C544E0F2f0b3EDBe4D5aDA4049E6fCE91B11A5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x31ac4CCd352caA649A268f244f3DEeE90dBC4d5B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x31c87045e734Ccb0ca40b43d2DE60Eff3e16A6d6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD0eba3E3F465763C0473F950676d4BA34437aA8A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD0aC899363C0f130E8F2866dd332198136EF346F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xD09791b9C95E78010c148bED79b763Fb4ee31111",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x31e32d066a7133F747A2d2058d909D33a8329DC9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x320F879A382E410D3361fff2F8ffdC149ABFD6aa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCfC1876E8eD0bc5cF350f25B9F36e2795730A1f5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCdde656Ef76759E378FAe346a839973BaB67DD79",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCd86Bd3339859301D67918a79418fc0BA3EF6bcF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCd4CDDdC3CfC5A7b3285d76d085218D41884B87f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x324E37A1e4CDedA47EC364DbA35488d0bc34E88b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3257AFfD44ad8Bb74353c659be873d3ce3a74C18",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3276c4337a260d1c955546921761a823fF85936e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCafc53241A13520264C99b3A8B782e809bE260dD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x328a45d0ef3f939BA580270e1B4138764CE28d62",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCa24e278e72D2Ca6BbB5D23EAa5f8D1d0Bc84538",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x32b96974Dec48Eef8c4d348B2848895318DD25D0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCF8ed67c7C12ec2140295164dACbEf3B81FE473f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3315f1389b1816Dfc7bAdffb1BeeE57Fd1BE4BE7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCEb0EA26F162618494F3EebeCFA24Aa7A373146D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x332b5D931d83Fda2570f6f442192CFf370925c3d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x332f8de7D3572082a9FDC054a87C56Fc3fd44e2e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x333503b866F791eE2A3A23a69DDCC1DcDE4E2a7d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCD266b9e1709343C6AE8614d1fc12f71565BF37D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCCDA7aa9de71b41EB982Dc6aDD51B1CBB3841B80",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCC2472ED984B578f6a40B642685fA50dB5D04926",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3391D8c5F92d6020eC8d8E13E10A69391085F4B0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCBeB78F8b12FdA13ddC45fBBc652b71959D0E7f8",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf7Cc0eB68b9592e231F3DF1a279c4cC2Ef8db550",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x33B33f9a28a6d2275Af26A54F6b43634631e6f9f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCBa9A44AcDA1d88993DFe5b1cEE3015cD9028FbC",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCB6D6071429d55D536194Eb5a021ebB10317Cf69",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCB4E30E58f3B299F585B9559b01b88E56F9d1C1c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xCAab574893002C44Cf91Eb6A17Ef8577ffD77B40",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC9d3E9C1270303cf69e79f398B13B9f89D820288",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x342dc8704e89D59f121CB91608c8275dE75ef06f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC98cD71DA8cD2cda0c47d0369Ae561b97bb0878d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC8CA7F1C1a391CAfE43cf7348a2E54930648a0D4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x344e1b56757c2f3587f4886ee78f3426afd50a48",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x344ee800E1C006d041160440d61243554e35ac76",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x34A7E6eFd99295BCB86F866E315f6fc887BB7f5e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x34Dd937135feFF7F2a6563393EeE68B0aA78F1a7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x34F26C5383bdB59228C68e2791D9d029F9352dB2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x34f452aF885DAA544f0757b1827AC68E7d4BE366",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC6eB8EF96682Bc13B4448aFbDF7C439B5bc7b09D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x35152Cb55861e54C4bC7999Dcd365562647Bf255",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC656a1E208977A4B182C0C2865B8931c558DE877",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x354bBF1ce78734B90C91Cb6611B2C65Da6A6984b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x354dA4b8305A0B7be588595545B12D1466474068",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC60f642dBCCB36f46A461e23fDFAb59a52426586",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC5bB98283ad588d34049f605e0aEa57b4090D333",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x35A81101182490CdAe9cc1F76B98fC59DDffDA4f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC5E3868876F43a72Ee7492C6ed3538b47E97f6dd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC5B50c3cF892EdEA7F66f0975BF0574CD34B3cBA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x35dbC490Ff4d9C17922B57ce6EaA258eB33A64AE",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x362b1996Fc138aEA624F0A1af049efC53Bcf3703",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3631682A43613c972A96cfD7acC1ce089bDd5A3d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3633767360f5739C84BeFb860CEAfB191F6141E7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC55dd02751825CA269f1F24728E2dA07F12B2d2a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x03648109549183DD7b6518c6aaFf8Ce2655E2728",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x366cc79C6d6829a151846191603FD796f14CC583",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x367Bc1a9d1EF225307666E330E127EAF19B2160a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC49c970Adcb3510EA9906e5A3Eb8AC044DD8243b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC49907e1C3E0b46781ef0EdB1de733eFda12B14e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC4949Cff176c46fF7958628E5bdFA5A686245694",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf7941f91E6f9e7427529c2DC358597A30d7A205f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC3f9f6E8C5c16Ac048d876b6Cf3703578BB85667",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC28f6DC7615EC1F3175FB33a6e3a12DabAEA65a1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC28Fdb341Df5A06D5b9dCD56c3D8a808e51C65a1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC22b2824B36dce9D5F8478f57f855f95b749cDff",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC1cAEfbe4cA9D8A71476F192194DA0535c1DC7Ee",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC1bc9a78ad842DD00aD5f175Fc99cBffE09e8FDd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC19b60f9ea71C5B3e0b0a4bB5787C9230524Ce85",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x374a6f59c06F788C56710d5a77cf9103F497bCc0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC175C726ae7beF02dA84e64Bc32D6Cc0894A6BCB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC11CD1e0808F2f7f828C35D6D50D73127B3197C7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC04739566dfcefB0dBDa45bB86E6C3BBe5E97B55",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xC00c502a0b19b647e103916E72Fcea96aC7d5afa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBf52c266BBE2623409c301fDf44Ca08b7e668416",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x37c41a33d7D99090Fcc0f38739e1c5E123F848E6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBe5bc1Ae03310edEA8D123E4d944961Fc9dba518",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x37d95240d3dAC2fD1575ed5A4F8A0FF9f1889585",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBdf363D0a08b4F34ed98cb2c6E99A373634DD150",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x37e49F0A9Ca5f387431FA021Eb15F65aD2c62ff7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3814e7d8B844053DdE854c9CF29af8d5E5bF1F16",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBd7851d902FBa36ee1ff05Af2d5E750276F9Afaa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x38239b711627D9F0FBFEcA87357959bFe6EA54B0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBd23fA05fd13399A14A263156E016E0a33cBd6E9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBd1459FcC87A0a0A380Bf52dFA38865B6328e4F6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBc79B3DFFb6e0d663A19489C702a9844Ab6138f2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBc7816cB804C25284800977c08a1fe81329444AA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x38969F1400EdE89dE76DA96F2E8477D2138ca987",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBbbd54447A9E0851292F2C150A811148df569aFA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xff171bbC02b84c464753a8737dC84132ecc2136e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x38AFDa00fdAdc5aA02352B63e218D4eE4E703e57",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBbE6ce92B8E1168d7691f2DD86e0b62af773caa2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBbDe993b4E6af31F1840983ae663a2038A2bdd38",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x38bcaDc4daAF0E1311c7D2A9a3123e9181b9047c",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x38c17167FFC9a8a91bC6C5577848AcB1fbA8132A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf6DFDb589714e7116bF2fD3c48CA6Eef7B634d3B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x00000c9556a9ab36ebd2f43917d9d36f82437c16",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBF9e4840a0458FFEAF844aa40Ba7D6c522f5b8f9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x39177afa9a4a9138aFc45B97d25f15A7d5B8ce9f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBEa774cB0A05443CAE9bD22953FF77d68316bff2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf6B9650f631957fa6c5279023FA27bf8968380c7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x396035DB8a731dA4B1044dBc0d2499581a32b978",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBE8cDB10638b65eF4A25863EbC9230D2C27D529D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBE5bbC487c99cd9A834F168344e57F6ef6E39fAA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBDbf4d6e2F9b71d727D5b44c2E1c3a44FA0FB33F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x39A93dA7a0d3c6564A75E28bf60E93b295749a50",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBD7b586638728D3f147ceB030A1b2a2f31958D39",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBCeEEF62B005fabC3D2AABf178b684565faa8F99",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBCED64975874011B30070Fdb82DcF7332F5E5E6F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBB6f8fbBde9d29f0a2c9cc5c544C1ea4129eB0A9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBAb75855194950Cd9832b9CCd98654AEd6377799",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBA9A83A494B6f6D842b55fE41426d5F46b5eE4A3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x39c463324b1ee5c03d2cc6d83d29e0a137146dfa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xBA66993426dA20d226A1E0d4443eEe57549Ed9D2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB9e6dC58a35c7cc94cAb49718b50892d9b93E795",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB9dbe13aca98Edc78f38146168B0951D85DA2e7C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB987328714be33B64dF488AB77D6c5Ae321b0bBe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB95635bA1C2693E266C3FC081083220142dB262C",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB94e9b2E9e9e422bFe2Ad507AE8e0Bb9E24a1906",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB8aE09539D17964389D75866BA43734Ff3801f11",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB76545A79816EaDB4De22F5D10eEab7fd10517fA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3AAaC103b8Ff974fCE76A6A2C775A8376E5d6ad1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3ABC4ed56Ccf349A2C32004eE63d08f69F5D4b17",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB753dD4Db6328dFDE045a1200D66Bf95aE518daa",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3B1925168A10632760C4fF9DDac7B6Ee7BD476ab",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3B797D0e0e691468E422F83E15963a87025af1CD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB70c088bE1EcB741126d8D7404B0084aba872Bc7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB6bCB73a6f870d5bdFDECC7b0E86239C852CD3A3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3BA6B39ef08df353770A2F8F33cd12Ce59F4Dd31",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB6CE3cDdaBa4b0975DDd641120F93C631f6234FA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB687E75958b907f968F0674b1D10A5d2ED946A86",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB66075C05fa21CE1efA4e0d802052e75A4BB8006",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB60313686cFa97524E186c1f0167A03fa7644cA5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB5B8e960028C165D005AE9ef6f08C54aC2DA2d15",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3C77EF8aEcE6153cAaA29324BdE10B217Dc42bF2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB56BC646351dD78feddc587EFd23352b2268223A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB4DdE601f40DB20892129d4558FbfA7219f46E98",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x03EE87C9031ddd2BBCBf7F6B1536B4E7FCCD4CA6",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB3cfDdf4945A86b52C05a88451CF5Df054b24262",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3D3bBA7c680b070E87c777DC8e2f951ADD96d6eB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3D6B3be5416BEF6e1761cB8Ab2292E626dD97893",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB32801Dd2aA03dD39C0E020e8e7A0a56CAcf4CC3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB2EC21F888e0270769DA076c7622c87C8466639D",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x03d5C5f93b297ce047E1E9db2C89F1f56443a80e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3E88BDf4732f33025E2D50c49799522ac0dd4D31",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3E8F644f1f0fF8d5fb8541780eF4f7774442cb44",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3E8a0dFe0AfAAc4818100f03f3872C0B978620A7",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3EA5B2158946c0660c49ab49E4D9e60C40B6168f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB20Ec91c6BA0D3Dee53b3549f233B0Bc70194f12",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB1e0f01Fe6368B2a213997947F692848a351fCcb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB1c2eDE2bBbD1cCeB04cB45388B94a65BC856666",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3Eb16b187FBF8Eba6faF2C3543CF9455aa0f3692",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB1b4D062353dd744f527911Aa293be64706e4130",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB1CdA0978fBB4f4Ebee0B84E75760672F48034A3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3EdE755dC9a4B820dD7288Ff2FaBf807cd7dCf92",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB1714c05cdd2f8D8bc29De4a8f31c18633ef26A1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3F2B24042dDbc6F4CeBfE32b5ebd2fE3517973f1",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xB0f3E0360cd5D0Ea3B31B3C8293162d3e7dcEc19",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3a1711bce829e721c83A20dD05DEe70B8A4Bb644",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf5cd336c61b3f2b351d235ecbb22322735930abe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x3a43e3aBDCE877ea7db72F5ba8cdc8520E830e4E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7A7175B69AF2F3cA516307B014D0efFcd55e4B1b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5eCFBB5285A1cA4ee3b6670315a1E651F71813ab",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5eaEA3F1352556f43AcFa4683a8ea463F23E246b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x79B793B4E1D8EeA7CF3B7AD09fbF56f37C6AccAF",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x792d080C43139BdcBABA43903528C45C69a8Fc91",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78f79531EEBD925d4D7307eA9FFe72F39e27F637",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5f73A750ee8a89D4BcDa67A5614638C0f7630654",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78da6D7F9Ea08b616E5BD7aBcd2163a2e3A9d6fD",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5fDF10Dd57D80ed668b7958234079D8FB6E24f49",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5fE69E8801E5922507cC41c2d272fC3B0c5345EA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x06C991414A02acbBbBa7dC78f4594a04c3Fc7544",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78a1eF45DFFF3812c56c5676221B593EE254f1DA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78FC2E14b3e9Cf1e2947C275d5e4C68512f1db56",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78CABdB92303ce055f6Df5CE136Ab592A6DFFCFf",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x602EFB2D75BCDbd27e6B0d70a7387fa8216626Bb",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6033206252dF39f0415058A5B58EEe03c6d52A6f",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7896F4005CcB9f35483d7872fF9045245C531639",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x604Aa9aFf8D9de05bc453C9fbE5BE90980100A4e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x788D6399589e9F657a7e64C116B6b157c77661bd",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7884468abcd9615D30836dC821694bb8e8aCf6B9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78776639422b026740642e54ffA5a5B0D5C3AD96",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x60E0C73F351e08978Eb303d948C74FBD000c715b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78480e2241Af71F2E2785dDb409F8d289459D8c0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x78116cAb68c874945FF95cf9d4fa7420aC7929Af",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x77e939A45f6050E379f6c01780cBEe4dFAE473E0",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0xf16247eaEC7517320Ca3121619702c119039EdE5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x77cF3C8107C68c0fC9e0C7D60547205EDc026CD9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x77b42f4694541bb538C554D378732DFb477b572E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x777827e550424cDAF6936c27088388aDdA7F4ce2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x77759c2285Ed0a3fd2aBa0e0606B5bE0b05f6167",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x77395D7C7c4f98C8a3e0C49a6d655B6E4Add3c29",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x773684A3F7e73d5517E9abA7ECEA2d2bBe5ff239",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x61af1515D09b02a9C920a06F7981773F9DBf2549",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x772Fc610cFe7207f59B19b7d07C22D81B69e670d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x772773C0Bd4092a012235d35Dcd40DEf5E336bb4",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x624D86C889f0CA9f47bc047Ff6109854F12f276A",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x624DEae333AA3E1eFF645cfd258Cc1E409F20585",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x76a15363f90e9485a42D24b306E7599126C4A822",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x62621615EC1ACA585Be935DC7e31A5EC6EBcA4bA",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x6264D7A472e373cbEA29d197743Db243A8e89fD5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x62827Dd4f527aFD89c70BA94d3cc93bd94d0098d",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x62D080fAFAcce4F83119f24F2E17F0D74dE8c57B",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x76572100000e8a95Ac8874b06f4D32014f21723e",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7644cd9A37155Bf3e8FcCdf3b547DB76aD46BA53",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x62c18C8574c70B005af6cCB5Aa5370Ff616c493a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7637eaf4F3c8938b883838a90cF1337C879ECA92",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7617b93DAD39171c05B9Ad51047C752c4b2672b5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x75EcBCd035B11bc9080021c2fE654Af8380b022a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x75EED8D52e47337e6Ee532e812ee4706107542B5",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x758522ecc529087015215c2ea55eF9cBb35Fd637",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7579B9E7182E575A20F5F8d7Ac17eacbBCa3A600",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x75650EC3FcEAf24b7D2684D7662E020DF253E78b",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7498E8955aF036BEe56175F8bb68a6BA24f7C610",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7460C2bcB0472Da39c4F22a193d763fa6FD7B8Ba",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7C818f2dFe3cB3e8B3EB7b0A49a12530E23B8265",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5dA64606f4EAD6eD48F93e899AE3BB0179231B08",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5dAb6602Cf8425Bf061e71E5AeBa298640b8F03E",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5dCEC9A6623DC106D0b8206a913674a13a0B88C2",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7C25595DDc4d7752fd9A0FFD135C0E585De4EcAe",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7B800a93ADFdC7d07Bcc1ad6392d5b2B27f6be8F",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7B32BC817f66efa0cB495bC173c09eF7737a42a3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5de1E98e55408ebcd3cbD357a280BEDCEc1ec327",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5de6076dA4dC74461A19b4a3191B72323c4f977a",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7ADeab1bA868587E7dc2DD13CA5B96324d2E7F90",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5e61113331d268B405bE8B7c245b5a58748097D9",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7AB0f66f45CC24Dd314DeF2AdD1D6e1daAA74bdB",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x7A8722bC13A32d28Ef4e65DDd3d0887Bd303Eab3",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5e703a7a702e873764AB38021412C7893E04CF44",
    allocationsType: "longVesting",
    amount: parseEther("50"),
  },
  {
    address: "0x5bf5Fb16c0e3164Ef6377b998654Bc1baa00C50C",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x068287C087313735d359ACDD7DA829d23FCB1264",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x5DAD3C6766fDee4418C823B942e8a020AD8a8697",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xd0AAdCFE1905b10c64E95D5095457f201a46e39C",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xe61123c4E2540ce911Fc6aa7207d3310F8E1103b",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x8491a5c633C8aA63E818710f3205d3Dcc8888442",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x3122aca0a2603D581Db68C26cD73F34Da7d8cDf9",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x2f144F05c5E07a51758Bd1C8fA635aD79B7f4E5C",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x2b0a306Deaba8f0071171b71501529a5Ee88c36c",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xd0a9416092f68bF089A0DFf450f419305FcB7492",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x76b0bCeF1c6A8470e083E9901F9c8EB55B2c53C9",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xDcA093f517BF0269FebC7EC5Bb58B7F509dFe269",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x2A8eF4510BaB157F8B47116694648B51216FA983",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xee346903A6a2dA184034C24cb8517Eb76bB09429",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x8A04a8AA962184143ceBC4EA9295CB959a8cD259",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x8FB7873652dC1Ca2D9b29bdDb7F5A1Cfe47cAABB",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xfB60Fa2B8B6198464549b1554e9323b278BFF963",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x77f6744A5EA1e246ED9609409fA6A3dAedD1E4fb",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x0A453Df4204B5C7ffa1e5b671369AE84bAEa599A",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xe780653655075FEeAAEefB6A41BB05de95342c39",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xF874EC46D583312886a0CFf4f0FAe920483Fd655",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x8eFd97Edf4169Af5a6299416D1D60378D5479066",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x4EDc2D05B79cdE4F44c0444DA746Df61357124F9",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x68D17b7B18E06FA89e7e24b8Aa60171BC3A66316",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x951EF03cc794598eECeE8ac975235207D8843360",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xFFD75BB5D73Df5BA9754e3b4DfB74413559eAEB9",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x98d167B8829E17617192B79E558c0313f3EB4b3b",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x9902E69932871fcb9Fb11c5e1083739D697f30e7",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x71Ecb120E8c99f81950Bb747472e91D6C92f5d2e",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xA5A50f0a375fFF7c005AD54c6A6f652928d38242",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x3df2b60E03ddC0A459aCD5C438A96D6a3880B218",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x3d1B359B724B7ba4c76632231e25d0B49c6F53eA",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xAD3b696cF4EC30bB57FbA90E887F7CB15d033d8F",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x21F6bd5Fe58db8d9693737BC1D43C35DCc6Ea4ef",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x3c7838665ff8215c95500e1a6306e19e146674a0",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xeaa49e2fc0B2415dEfbD1b543a281b9Ee15742EE",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xC212d5339BEC65eA533b6Dde66829c873b8cE390",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x110d16292db23bF99Bde9B227ca910B319043349",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xfD3A7B5fb5c5334766489e4a46fCb46E24834613",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x36ceFc6Ac8004fbBC0514238453FF0684647d64E",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x1cf639AA787097E2564Bfb65f9F43D81a91784b9",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x1c313c3ed4D34134F783F1da3a7328aC1BCd9080",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x352D09296d1fE32e5aA2d4F947B4660C0404e9bd",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x1b320E60A1cA378e5d21f1380D4af6982a45f445",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x1C65A83fa81F7DD7f2ff7C6b1c99296af3be3Bbc",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x171Fc21389978EA47E3d7226816F425D05f6C2FD",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xC689ea08511a71f93E1628c7cE039D22cFe0bf4e",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xd8B81873e059431b0fdDdC26163887a205E8bC42",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xdfb93aF3CF6DBD9D10bC5509cf55f7355c7496Ba",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x16AF1fd9A3e5AAe5f13f6Be4B65E57aa8d3A03B0",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xD3465a9D71596aa12f8E16680A7D6f473703bFDe",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xe4E087D22Dc740a40D3df6B885FD12ad0301fabb",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x140A153702C95C26B7968f5554D21AdAD58c395E",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0xe4b558e550b3688b8a476DA5B43Aea66dA528110",
    allocationsType: "longVesting",
    amount: parseEther("45"),
  },
  {
    address: "0x3e30E9860F074826C0bCbc4719554437230d7357",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x00000624Df167f053a553aC426ef2BB85b19a52b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x00000BEc592Ec7c143c73dc85804962075827ECc",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x007892538a0e45a6a00ECdceb47d979683d3aFF4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x00a4d3452c548257934758B2BA19e7Fe819c6f04",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0142D84f2e7209c1B44477b28FE24f3C4DE215FA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x014603BE2f4e4BAa0c69945559C3f6B422AB8796",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x02D4BEf35A186396E7238d5Baa30518E0623B120",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0342571038C01c1B6F91c44dd59a719e79907827",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x035DF91Bfb4DB748b50e29c86ceEFb97e2B8FD63",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x039519E6B47a81276D7A4E318de4F0d60eAc4ecc",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x03D54220d60d7344bE4548D58acd6834c848759D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0598D2c365A5661032a91Da03ED74E298ceEA67b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x066579164D50119A1f47bf0f4F8aDfAbc0604745",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x06841D9BFb7b95E911420BB3B5c1bB944aBde672",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x07155E53A112e92dAE2b7D95F42E23264f2F426d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x088171E7e30f552B5A1b265DfEa93A23B9bf2a28",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x08A3733Adf47921E65b2f1ED380DAaC53F1f3a10",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x08c740aC6bC01aC8355e5D7a83E0444b0cBc9f6c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x095B95dEe7Afdd47C5aef2d5D38f38eE94fdD0f7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x098F77F8281B77A0b8d79715B1d05FC836329890",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0Af582Dd1F2EF9816510251adFD6ad6f1d528E22",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0B0e0857e1642A229acec96A281DD1530dD5E1F5",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0B2677f1dB50a327a72E8dC7c748886ECD90870f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0EC1360FCAAF0F12B902387d74102888ff3B70A5",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0F51f6b7662150695Ff8422303Bd5887DEf0EC4d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0FC224a2Eb9A261D9c8A4430E50c41FCdCd3D2Fc",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0b6e5561771273AFbEbaA2fc5bD7A54f096981DA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0c064fb3042C432Fdfb6eC0430610029e75bF099",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0c2Ab8F849838BA353ab82a147042565A1b972Fd",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0dcbB09549d3695b1CCAEa3c41f421dE74BCa30C",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x0eF11Cf06b88b664b27535fe858dd37ab4FA2E52",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x11C514e48a9F6935d36Ffd2959A1C20F4a660617",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x12b28900725E776284E0b84274Da8413b64CD97b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x134AF25E4EdA7a94f445F0fded1899206c189fb4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x142875238256444be2243b01CBe613B0Fac3f64E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x14474536ea9D8fE761EDF527F35a30f43C39A097",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1463Cb9839deEf8BC15d0007473c46c31B4Bc79D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x15F26133715e4c636C4844Fb50FFdBC19EbD82aB",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x179556241E6Ea5F0088E0903947D40EA554B89Af",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x18F25ECf2D37dAb8C7d480CbAA1450e89eAeDB9E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x192F05C420861C0Bc333395086CC7987Eb3DeC23",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x198728b7eeD46Ff193D237cf3E131BF01C292AB2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x19B27c53BEaec442473D0B19A29C7CeA730F6224",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x19EE463a37671E45f929CE1d0F2596fD458351Df",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1Ad3d0F37aEc118B9163bFf97f59abC72A3f04B5",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1B882b1A34F1CEcc0b0BA7379678a0984EFd0bf7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1Dba3dEc4eB8Bd12E10fdbEa953b0a407FBe4e51",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1b2DFE7a543E32DB849A1B6d0f7a79C1f4A4e03A",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1b7BaD7732a37Df7Fd513B0d3a93994E472e6F91",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1cc82c23CfEd6872837F8E4C422f911bdae8A6f0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1d2c21E9728f104829D69A6F6BF538805A0aD429",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1f555dF3c9cEDF93272c651D792A4C3E2979253B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x20a041DA5Ab1e4Cea46A01ab8f3a699C7D42a8CA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x20c65e7AF6f0555C1992E76E21A3BBa6d3E96bFf",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x22ed7E4501180B4A716f176E628e9fd312D80c8a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x23271E551Fe63B3c911b3c060Ac62fdEC232ba0E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x24367230CbF6eda8fA35773F07dBbC2B3214b851",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x24cF23516a167F2EA58D1186426a0ef97E8C5Fde",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x251cb5391C1F426b69454A23db3f5e6e2D3b2f24",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2681B9813be4c7B47f9146D814C8dBC751DcB61d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x26d49164EdaE2F44c3137bB56D998Ca7318A2215",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x26eB2FB4b1f3CBB6a9f51E61E146Ff62817d36bD",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2728f8dFeEcA7C0Dea02DE4A201D0BD513388160",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x276F55a95F8579D1Ba13680167D1211BeA5454da",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x27733f44138EEf5FB5A5B64Ebf14281E810D8d12",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x27f3a78915CDdC16EEd7E53506A61D43e29C1B3c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2860bDF5E66cDEeA82FeD7c2683CF2A9706219Bb",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x294F69890B286fefF99F6092C1012B3537303f80",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x295A1B198ad3e73aceE6B1043F56c227c6774a16",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x298d050f4292F11BE544c7d3388fE1E693839A0a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2B50B7c7a458D6514Def27594a65aBBe6Aa38859",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2E17d630C45f2afBd3852cB20AD982a87824B65d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2E3bd0f7155dFc0147d4B4a26B95086F54c6405c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2E72E646078bE77568753A45C140e487AdD67859",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2E80eF346439A0584E33A31FB8F85d784497F57A",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2F229943878d6FEbc40d26cf782413770D3B6588",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2b8922e8b41822083FA60eA5d05DBa2DaBd46BB3",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2ca6cbCa20034Eb5b871eC0E8bbE1993c82a6024",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2e3B4ee7ca47CE12bDFA7bEA215910947f53d9ea",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2f160DfCa3F5Eed78BE0CE4bE0457c7C2b8b8Dd7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x2fea27fbe008656Db9B2c2b16B791FeE2022dF9f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x307c7763A1349F14403f207146977765AAB0a994",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x30f700db7Fc61EFa49CB9ecd45D8a687Baebb934",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3109F14cB7C0a02CC1162B5C82b9528c8fFE615B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x312d6e017304ca156Ed2b138c0F3AAEbf98F84D1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x31B5156aCdE06D717AE45dc89bC46b09C61D2910",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x321bdB128F284F009A04C0A811f0a2cFfCb75929",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x336d94511324c75654Ba41189F45a72d1Ba27558",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x339A7a40831239f92066a6ae7aD8f24AA8417dd8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x33Bc839E24d71859D4E6d0BFbeE886485d870035",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x366a548e427Ba34513C9b694f50C82cAcD866D67",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x36a82d43B635b1E8600093d6701b70ced92B3938",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x371633f533626CDe63E4d9Fb11043A9E8C3ED51e",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x376DBb6a98ec8Cd78Cc93760337f0c148a8aCcf9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x38173DAC58a7066b81Fa69260a8FB5346bfD270D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x389aD3700E5bCcab1f90fbc0B60F6Ee7558952b9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x38d24dc0a7d2e703bfce8b42ff736b8d9f2a15a9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x38dBD3fdA1b1c639934D8b36e73763e37A7c3276",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x39586b7025CFF24e54FEd25772163f1D6f9a6Cde",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x395f78FA07383c32FE183bb0ffa8a7E49CfFc282",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3C4C6182908658Eac5E8F1704833A74f2B201b58",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3CB2dc1c739307A47413a5fC9487c7860bA7253F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3D3D8caDA4Ae176801222fb6693520a5329FA9d1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3E8194B7F3Eda25b92bCB453d41d2AeC58F8881b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3a3421F7d6c7a6C51f514dB6afA497421F585Bf6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3a9e5E90B35C13F271b4FC1DBdf3BecF7b37Ec69",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3b1Eebc96e2e8CfeBF13E11c9B55092dc6B9E52e",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x3cCBEbC4dD1fA505d63Cb7F2272fAC86CfbEd7C6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x000000078547149D913eA841beb93da76D0C7e25",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x40A4729c5Bd3Cee706156ed3C0a5C2e123745bd6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4123aA652079b1684cd10a17BCd6Ee2b3bBbbAF9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x41B7E8f5c25F49B030A0Aaeeb1198E0DF181FC43",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x41dB80c7944f3c32cd5d909B9511F2a16e4e8175",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4394C4A3E437C3593Ec8b2e2961F1a7BCBe7d731",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x43F97f984D688fBaA33e1Bd294d8c9886F02e865",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x445491b2F3bF4eF25EcE55F9942eFd6bC7B4042c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4471E943482ad34a8C1e47fA2f0F68b7506e5348",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x44A543100AaC2E5D6E9bc350Cef15d6f49C1fed0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x482984a2B3b5eEF20559393DCd57CCf609bD8885",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x487e4f8abE2C1A55982924c16cB7abCA67ce4bE8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x48dDf2a060f2F10d69F1a5EEaE918b072cBBc0E8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x49C77C3D1c44c05C25919bd931B7bAa2AbD65b37",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4B80CfE87C6FdC5153BBD7577F5c02797244859E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4C4b46Abe88F996d1B3B4A8Fa41876535675ef1E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4D58D36e46Cf9AF14e416061Fe5D0074780b4099",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4D61D05e92Fc7567F6DFdE834742b97a604b4782",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4D72C353034e30be70b6D15283c7edC323626981",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4Ea3c5a2720EDA6759f50eD2Fc23e1bC795D00D0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4a882CCa1193b830aEeF982d4898AE33aD09c810",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4bf5eA109f600FFFbFF71923D18787BbD7895402",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4c07665850D9c389255705DEe1C8117Bf7a6E938",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4d4545B7F86c2d1B80d5BA9528Db901C062e9248",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4dD6720D2Bb8721A46bdF9a528704164578E03B9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x4e81e2C6BE7250F8349241b96a4909B4fCff3262",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x500f9774051b85cb68d153959B0a38D94Af6f475",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x50501F6569B376bC6f6aBa8CF7E86f0541e68B62",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5153E6144A37f22DEdbA9F8e1Cdee8Ec5621fE8F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x52C1a0faC519F6C42204467A80f4EA2FC44A09FD",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x53F1197491c1e973b04A33ed31780DF3032459C5",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x548Be6667E92E742Dbd852662349ae74Bb39A215",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5670e3c7e4eB8CEB6e3b048265049cd60e248380",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x56fc15E7BBbE94e25Df534f63bf075E900E45898",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5799579AaF297EBb85Ce1EDdF69e7D7C2D953adb",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x57F3813ede61D645654d7DfE2dB09a0E41B5D5e1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x596271db853C6b5ef4AB1d65CB7043c328600bf3",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5C1c4D9a24D2620FcCa9317b39D99BCBf75CCa58",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5F0CA918E5953683abBEC6873F83286c9540d7c9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5F369AD01962bdD921B241474F44b9C9ff9Bed4F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5a4bE29Cd9e01F6F93d76d736B8393307b56Ce5F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5bE798Bf258ac5319e74428a66e635df491DE2B2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5d74CaAbf8135646E85fec3076c4FbF5F6b6F41c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5fD75c9B5F5A883049566B58CbCe4a324F61b9f1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x5fbb7D8058864767Cc1338B1644fe58ab8104b82",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x60381363F080428FC8516ccA141B45b44A6A75EA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x61103b47C7892eC25bE1cCc9440AA33A9cF18a4E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6122960fDD3Ef59DF1019D76CD9bf656F0c3f9D1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x614d787bad4B4F5a9b3d233390A8E527D6b3cc6d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x61EDcEFA895cA52710d6E8605Bb11cdF090BcAA6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x629EfFAeDE70190C8FFD0724e69fC2C3492c6024",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6393672E073bC8f2d0661a17b4B2d81A550ffFcF",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x652c9758C3ef9DcC7d677ADd6DE755B5Fa786225",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x662E2984F46D191c28b16cd62439D9Dca8B3D6e0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x66d354Ef46DE2eB4A95867e0c5650498B67b29bF",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6700E84C6cD92744Fa70Ebba28Cf20FFd517b8e4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x68463Ff03a92A3F826C9b73833Fe338b7052F6e4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x686C9C3F0f351F52baA8513f57601D645437493D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x68Ad617EAF30BA43Bc9425c3c78bDcD932f2699a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6905030bAB047B4A65b28DB078e8d844b83d6FBF",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x697053Fc99edf6c630D319Cf083C3aBAAF1F7C04",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6A20cA6e28D8401F5883b3c7dC48b1e81AAEdf30",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6B9ABD495AE9c7d878F2e29fEaeAD3c86B45a7a9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6BbbF15E9b33c37Ba146ae460808fd81a3161193",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6Fdc626aF4bBCd18991db9eEE62Bce1b0de26E55",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6ab5294e86946a49ccb8916252d69C967B3ffCDD",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6e198cB7479c42e082ace9db678306356050070F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x6eDb9A10f28D3b79CA7CB4e95Bc73581DcA89896",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7064Eb66DD0fC87089AE5ECa874d67A72c95e5cE",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7097d850a9EF60699D6349801427d46A786E9e6D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x70EAb7d6E9b69e0465b73f78da13E10d8bbc9850",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x71E9D353AD0b1fd5347cCeB7bd1F1a99fbc7F31D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x724e29605597b9a804a1b0A2aEa391BA37A0e56f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x725426Dd56484f946D0d501D9330Ae7a09Fe6C04",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7438f792b1C8932bD3880D383178DF5193C5C232",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x75A10909fA1f92f5789500Be35A71B3590d6524A",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x760E600b692d9c29c4C3420aDE65503bd958504a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x761225B1800af40fa73Ca615bb588cF63dD85BC7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7640554F93f776BFb369b25B5892283c5d437321",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x777770B22b43F9344a6F6EC1311C93f29943E1eC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x77ca11bb82f7686316DF55E2bdf0C49030b8cab3",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7865837ba930B17729cae23E27213a99De79B1dA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x78912cB6b7FD599b3e96e21A15F1B0c2081ef33D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x78c672b8620DF3aE76A855194FE37FE49623FD8c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x79488e9B75416323B7275B0e06f463fF20a657FA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x79b53781a7e1f606a425cBB0a7F02c6fE0D4684B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7F1654Ca45F7d69AE92191b989B51B389FAE3D28",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7F1e7f6253DD2c64B6818FB2376F0e38e46F9cCD",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7FdE5cBC91d9E0e790e409E7b5A62902F00d9Cc2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7Fdb5a3625C4889515e391C21BBBfD655a0Ade29",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7c0C0aB135F515301005cea8a83572577BF0B801",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7dec7d0Bb9f27988c005B0fe6e9FD88b22250F08",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x7f68a6610ce77E77d843EF6EF9EDD63ABf12AE40",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x807CB1475d235358bd993d9e10a798A538B31B6D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x80E87786613DD5b332802111D6Ec2D2eF3dd96e6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x81Ba05F49f2dF0f4fb605dA8e0Bc607c4e0D7Eb7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8200b84Caf027De4D27Ab4FFcDFa60909b3754bD",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x820a76a3e29baAc3883e42B7344daE34d59371Ae",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x83408b69AAbBFA26f16Cf406867d39Bd9f50D6AC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x83f3b78E12CC49219ACc817D06483a9aabEa6110",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8498e5ff36922c29F1543a114Ae4D106CDF03163",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x85A69Eb6148ACff92b7b3a1a1d8d62D864fb94f2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x862913627332799c632593382fDE83F30A055b58",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x86443ea5db13Ff137eA8ee4625eABC561880CdE2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x86B3623c7eEa5052Ce037e24AB15a4e139C92a1c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x86CeC55bf8c9c33D96783A8725438BF1a37644d2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8722C1Fb19B508df2C384b5Ad09C4325BaC7760B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x887F404f167B5a1DFF722E95c8A75966cdda5a0c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x895A355AE02Bc7f9e1ba3F43405434EDdf084798",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8B5499bd896e0fe70ceca8Fe05a1906b54995D6F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8DB178897c0775E9e5CA32785dC391677c82A25A",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8DCdb2Db0268Cde7B5c55492ef31E4fA3D187ac8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8EB5faEC2Bd917995630482feB6C48F0Cf4D937b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8F80B0EF6BB7E3F9339a2D28Aa9eC684a49E007f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8F9f7fA6aB3efBcD5e9f5a46766E523b40733f9f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8FC4c1492F10A9310dCD94c2E9a2cb68A3dB7cdC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x8b06cae19921164213a32325298d4b07581649A0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9032CEEeF231fe3BdCda63805bDF80B496cEB209",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9082D3096D8950e96c9Bcfa5eF712Dbce793F857",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x90E71bA874491D35bD3F5BfDDA1ED238634d6254",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x914205c698c5492Ba1c4f9791c4560FF14eACD6C",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9220cB352b12B8385B6D32C64d1da897Ce0a1839",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x92a030cDb61efa7F84174762A9584cdAF3f4D1Da",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x938e50bF3826AFEE55a6719D5F160E646df8B7Da",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x94085eC1ACEea70F48413d8Ddc90F161ebda53Ae",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x942054F145C53E6557E9CFACF9aa44bEa5e0F24D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x947A166df163f48Ed38610DBE667Cc17CE45090d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x960EDa0D16f4D70df60629117ad6e5F1E13B8F44",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x96c50520B6a80b282ca9058eF1b23784e9De7C22",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x96dE52533D38933148B47227343A7B4292c5F3c2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x973828e71430Ee9c173a52DB8fAF01495602CB96",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9770Fdd76A837aeEBD3d1a8f2f4a36E553f653C7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x978d5a5e2F908a7475B230C3266bA61CcbD9AEd8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x97A0Aec35985614D281670f8f2Cd7615981ff284",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x97ceb1160293736eBC2680f6dD2F650A4C0413ec",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9911B124bF1F3d17FF120820f67A3900b0146450",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x99F43729a04d2F1Cb20EaB3916F72DD3765c5525",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9B4a31D2CC403932378F9dAb16D890587F391D12",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9B85516e4b4c59797af970801b3A13D66f910e37",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9BA3e9115FC606a5732356234759C0046C22Faa7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9Bfa8AA6a16D3d5f53B4326d169f144d3026F904",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9CBA7D0D38493f395a0A205D8719f7c271137697",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9DF42257Ec78EC95Cf20a0B49446618A6D324798",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9Dcb90725F53513bCf69477BdE2660285c77C24b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9E448Acc30a82E87601e2993ceA790F999F39f35",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9F569387e9961Adc05a0389e52d315083012a5e1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9F5b2C44788E0817F916221058d38A4848811A77",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9d4eb973Cb2cfBDCe578e09c48D747Aa3ecD228E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9dF65895c7B3e22368972D1777e1F714701907b4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9e702ade7D608b689af5B6C156621607Ef11eE22",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9eB8C03f5a7583Ac35b33887e68793B10Ea30218",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x9fBb04B5bb022cdB13365FC4e052112387A34409",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA16e24c0F21E16ae5353403236e0cE84aad931C4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA35ed6C81A5bb8F54EFa0cDB2045fFA040fBb864",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA38f41176A6A4692F02ec73C2D667628a82d232C",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA3dB1d010dA86bCa4e522E40a6B6B060d7543C90",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA4c33c26B3C11CfD45B891aB1182FDc3c934DF67",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA659f9D226b4E218d01ca451d55C11f42E4ec3b8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xA73031Cb017A78CF44A9D7aE5f5e56D8a9033757",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xABBb979bAe05506E018FAA1e7aa12582C00988A4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xAC7F7595caE709d43099c6B2542ec01f3BF92898",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xAE8Ec0F2279440c23fA776696198679e4ddce0c7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xAFceCDE254aCADc9Ca1cEe8C6386DFd1CD27832F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xAdFfCC7366fB11eBC6Eb16CAB123b1153086a1Ee",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB2635C42F48FD71618B87ba748C687f99A254ba6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB293Cd4C628BbeC50e8b233e02070cf177767879",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB2C92bc929c28e6812E7E74dA3DDa6b529bFbCFc",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB2b6F0ADE4FaB98031b4a0f3a75E2C7f0cE82630",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB45992ac3B561361Bc00a5F0649FAfC267Ce5428",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB503aA768e0488Ab5c3A87aD18EFC148EEb8d8E7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB5aEdaFa524cc04dfD5dF2b3c3FA3aBe3040AD08",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB605Dd9F2b415aAfc566690859fC64DbC3EF5886",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB7ac91A8288ea65b3BbF37781B759Cb6abA39f1a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xB9410262f3f498f20f9bbf576F501b181BCDDbbe",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xBAB046a8A622504fCeDa9F33e953a8dB48b5aBfB",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xBa875D4cD3a58E631EBf2cCA126c76C5D183Bc63",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xBcC32787bcf6e4804d9eA34bAf22E4287695F558",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xBe3eeF7b6Da081326ee510add2980C66f7adc8c3",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xBf1CD52391f7F30A272Ca6644FfF434A5ad4D0A0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xC4eC35F820b5F236E5691BBcf1221dbc9e5B74f0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xC5Dc2ddA15179f6d6F2F4b4F669AC529b67848D2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xC5a651c5e83d5DE93Ed8De3eb0D000D4BDF61713",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xC7218c9A948Bd5290a5cF6812D098172ebF1bA69",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xC76D5454d0e5954eD8331A41c50ca2b33a131873",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xC9d1dA18e542c3bf66498e16Ae71F26FeBFf1695",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xCC219b6cF8A53244a5E35C3B49caE61aF5f4FE6E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xCCD55BD2FEC878DcD749C166e55E42bF41A17d1b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD20a7dA124c3071F5977aBb0C72219C1A255F04d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD63A56202095af387397a6175908B610529B53Cf",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD6A1987c737da4f01b42754b5E48E6AB2C5B1F20",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD6D29dE23e2B4F6B69650753C2b4518325B70732",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD703CD18f2CE8eBE32A77f9095FD1876D15f760c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD7520FF5673C2E268fF4E9986C69475CB639bE3F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD7813a6C8Ae0aDFAe06Da74266e48310677e0e2f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD7F4AFEdD1a47b016ba122920A7E9C3AC2Bb810d",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD925cBBC53f8d70a05eBA2f7Abf4EB35D95f5180",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xD9b03361D2f8854ac5e212010B63Bb2014954ee1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xDfA89aCd34bc7e7739209545F26999c9c58493C2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE017D623549A16488d3710C2426e02b84d52C8f2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE16ca0A805b246B396424F0A0F95B64940e72543",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE1ff0e87F877BdD828a6ED0B0c8E9EE36fB76453",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE2934d7249abe8E299EdcC9C6A47CE5BBCA24f22",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE37dCd3F8897E185d0d329b339fB89Cd35C9a096",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE3F5Ebab783B3284120ADd823E99F07efA724742",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE49859fFFe75ABcd06BcE3710B81D39B3A6d94b5",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE59f4a315Aa1d99bDD32D999BD265aEE215c6Cf6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE5Ab9eeF3EaE0c47a2a3c9A6Df551d41C43F303D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE5c5Dd0E48F0463BFCdD21E6f6f67632c251eB5B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE64A206C62D671bC3873e9aBb59cbd3BdB638b10",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE81E01b286a4494d9D18A978d38D0da163561F5C",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE9Aac8bE1d3cc41bFcA902c78FC00b417b94DD3a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xE9C30c307e6abf36F1549CEBBd5ee27bAC8Cf34a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xEFb7aCdDfb3440196C943a25a59554B067bc1E87",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xEd985a9943b3010d5d4DAb238b9f30F9D9CFF9bf",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF05E6D77CB9D74A2133fAE1D29E2fb9A6D551D95",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF05aF8E66712FE45a64Ee73bfd85e18fDB1c2C61",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF1a0B22EBEaDEa98B15Acfa219e223951799F910",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF33782f1384a931A3e66650c3741FCC279a838fC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF41c7A40Ff38Fc82C686bc0622E1073D6264e078",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF58a875a7B1543B1b941404f82e72670b34aAEb2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xF7e74A9a394226058E14BFc17deafDB76eeBbb25",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xFB11Bdd0539a3B07eb19B30cbF78c3712F8308Fd",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xFB2b2a51617AE7fD4A2A028452de860AD97F3669",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xFC6A74047f2CcB526050BA6786a5C6b17328E255",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xFC9Da28545dDCAdcdCDB2aE16c4705de68CB6570",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xFd6575edd122929225Eb99a399EfE0bc72F09040",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xa00D9519ab66CB48CFeB3F516162F0b2Ff08E844",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xa42E789A6C2825fB6abd970AF7Ee41A2f86dc953",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xa580f5AaF77090eB959B6f4814E2dE359e484fd7",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xa89ea4c7828bb5a8b8845865e62561a267e279af",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xa92F1C070a974Fbb8017C5c76FcEA198b71E7535",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xaAA616b715453A4EAbAC994a2A28EC95E13e58Ab",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xaFFa160b9215c364D2A8308ccDdeD17FAB29F5d5",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xaa089eAE69704D383794139318E76b28FDFD8b41",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xacFCEB2e64c396de422a077949287ce091d207D1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xae26d4A4b8Ff70ebAE362F6f5c80372635C385f2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xafD9b5b38Ae9fa6d89556f64FaB7dcDEE4D30D7D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xb220a0463c7Cb6C1273C7352012EaE27dd121Abf",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xb5b36a37Ce981f836ECe1Df42D13C03f626a37C1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xb6268176B003D11541DD84B26CF07bE9C7A1B7B8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xb8ae67758FaEb0dD8a9cBc9659cF2FD7DCE08649",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xb99eC08a48266719650D92f8ad5FDB0D487DE2e8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xbEC382149D10Da160d9E97F27aB51d81c52d00dA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xbecD80a4511a096D7eABc0779Af49Ac491958C7c",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xbfAfD260fa88aD50696D695d192FF9b9E06928EC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xc0FE45486AD13a1e1E4B1eE1fb50a23Aae67Ff63",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xc0f82Fa8c0Bb9D9222F133d3c842B6156b53932D",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xc1057DFC96062F736D4E1Ea88F42435691dAF389",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xc165eE4F44b81e925250F583F4A0c4E175975cB8",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xc205125419a346408476Bb332ddBF85Ec89b1bDa",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xc846B7d5Ad79060758F9ed2fE6BA5dD68D00C00F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xcAC4f9d03002e095DF3cabFe625E93bBB7260363",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xcCfbC43720B05373e95E22B08e8187261023f080",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xcD61dcD94BF144B49750ff2514421859AfD7E17E",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xcbcF78A85D25cB3CbfB982BDaC207C08e9549899",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd02D00A7A1FaaBc9Fe5dCBECf545123E9277e32B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd08e5d890936ec517ed4502CD9500309CA9B0622",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd0E8ca436F5C44A784f82E0479e2c55E518F6671",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd2BA24f1d33A506D3e023C1Ac2F958A1E8409707",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd63334787dd67dab172e121fbc690b3054102baa",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd638F7c12628Bd6E6F4B04eac998ADf25CeCf8e1",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd748123e395Ab14aaa7E294B0F441212fF9BcD02",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd844C6e85692f8f72DB048698B6974063fDeA159",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd87d331aD1080eC64Ed342CcCF9a2a37d3DBC722",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd9390b46a1749DEe5325A490490491db9a826D1F",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xd9CA645517C28cBddECC2ee4bA57A9AEC259AfBC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xdC9E90Ec58C931a722b1709A085Bf12B42cea9e9",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xdFbE6670D2e5D20e428Ec6E363c27b9d306F257A",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xda13106d3BD06B6fdEfa7A31D21A2d984896EF1e",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xda671C699C414E290E62dA06B3E05407EC7C2407",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xdcDca4472f474Beb01EbFd7c43ab8Ba5ebd01430",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xdccf90ff2194b6db0488fb9789b4bc4c417b1a67",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xdd30dB0DC423611e9753488F9524BDCCAF5D84c2",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xdfFd151FDD0f900E8439bdF89ed2869b703c7EC0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe09D0270eb4def4EFdd2B37025539991C856B02a",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe222e11129A5FEfDEBcc0572a10A6dEAcc35E6C0",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe25ba8ec283a86a3dbfb471ec262e26dd8137c59",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe2Bde82b6962402E4D679B53A7076B182dC8d530",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe39262206f5D086cfCEc8dF9E08965869F10a3aA",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe54ceE0bFa4a88f3415c146D3f407F64AB2eEFEF",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe55514e7484E27da12D85E1BB5994800b6A12CdC",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe578854a562AE12f7684d597ED9bE854966ce1D3",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe7A44B6b0B81458C988D0572261F01511A58197f",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe925aEd1f46b60f6fAa4af7b3D0493D4D7B7f528",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe98DBB3F44Fb106B7cb3Aad4296F659E3FBffc2e",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xe9e4297A482c9E039121409B014E16B6725F2a17",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xeA79f9e0290b59d7fD1Ed1840B09C17d3B7452Ba",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xeBb8fc3606197F2f5f6065E363C483f0E122E756",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xed7D042cA1523B4A5d4B7B18f2c0281d71e08766",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xef4Ee8640376d8cf687cf8892139FBe0852c19B4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf19F8b623d821fAFB83f31f2dFC685167067E12B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf326E227927bdb1Ce6bcFEA6ad7C66652cfd9d1B",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf4EA4757AbA45B5E7DA2C4778033876Fb2c254E6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf54B0e27D257F7Ca01aDA1247C057CFca7ed83ea",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf5594488eb525d07d0d61124117e03a46ea24472",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf71A2627063a876460AEc4C342d72fD7D29910D6",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf887cc81d0956abbEdfC92b58b58D066557C694e",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xf9cca4EAAf3DD2EA3ce7b32ceEE18631374d7f90",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xfD6D98aB646Cf27877ADef3aaa9B5be1cC0504d4",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xfDfd5885f2A8031CaC6BB7112AbAb48E68EF3A8b",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0xfd259b5b63881c62AE364acB18752c1E84b5Bd36",
    allocationsType: "longVesting",
    amount: parseEther("40"),
  },
  {
    address: "0x1bEE97BBF617502bc46C1562A84A99F0203b83C0",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xA22544B5396179ec86eBC3985DDaEd5D8ea836F6",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xe57CDEe080F7e383D2465D27533C4866D6e98ae6",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x5CC7b41410D90a52b5ac390e3598d66Afad953bf",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x64713F2dA32348fbDe6085FE210b06AD9e39CF76",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x4fB2383ae57B84C7523b239b8813158b4a3D90aE",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x1e7325E7b65cdFF90805F70D8130eaA4104Ee37A",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xA1DF2328BF3DfFFc572617E799B443401780d771",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x2CFfbA43b1bBf1494cEDcff74A2A8484D63bfb18",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xa6756FDA08abB3E97Ba25F376b387c5F0D2CAe67",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x6D262da1ac17FfB9Dd3a24D8CCC370d96cc53578",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x0AFF4b0C5A097FC9043cF3d9c38Ac1B54cCA1157",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xb6f154cA84679A04482ffF2Bad16fA67Aa64DB6B",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xb5994310fB06e86bdE6Ac95ee2C5d6F6423Ad3ed",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x44cc7D2e0A85b8D82EA3844C9AbFED00A877F6fE",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x7Ef79b6E5f9e15d886EAC582dcdA48A9c8372F5a",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x5188b4D07587D1455f068d5c17aa1D881880Bf19",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x8e959B845e25AFA7c82fF2162c4FD63D19803113",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xF37886269783918915c38990783e021cF24c7D56",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x2025670d850c21021e65F0CFf358b0F9fF12D342",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x59e08a723ab0bB5D5935327B60848eaf30e250A2",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xc7032873B99231Cd0690E69b71E518E49a2CFdA9",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0xA0d81ae83D22d3ecf0F82C8b486ba534Cd5829C2",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x0df071454eE4f36D65F1E4AE4a4B30ea9B295Cb2",
    allocationsType: "longVesting",
    amount: parseEther("35"),
  },
  {
    address: "0x8FF439DA55aff1CdDc4e991E7Cb7338565f8e023",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x61503D1064EE03cc0C0a30844bBF30a3b9fE66EF",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x9357F3bB2a261E6DacAE9ECBaABe4bCD89394D37",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xd91f15C13516d51F6b876aBc371e603Fd6c54D2d",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xBc4d22e6f4b374559631983F80518BBdB4EE3C89",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xDD4B4d44BfBa72eF6cddc4048ed2B678105Dc008",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x6D010229f5D3Ad5AB9D67c8B9a8F6cB9BBB5750B",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x8124eb159e38da41cfBE4eC5fBC4ef99b00d1fb1",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xB056FE9A00296f41c923dc6eBd0D48dA3C14DEF3",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x38e93CE8B00626E2e067a580Fdb9ccc6C7f6C168",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x485e72D7259F76a36B083D570E94E9Cde104287D",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xDA639fBB9EDBa66a84e20D1f431A5b32DDd4E40B",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x2752aA1DCcF0D57D272afB685520CE9608ADDaE6",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xCe96Eda16962673Ffb2efaf9f297654Bb0493558",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xa55e210D3952B7b3985BFC36CEE0d5455D86088A",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x2DC4f4AE901c314dcFb983cf9A410a9279D91C9D",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xd74B4193816e3AFC8AC757725Cb4e4E509abdcF4",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x5848277928bCd08e13dee6C8Ed050F40Ff67f70D",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x2f5ecdd9e864830525f647615927d8314bc30550",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x39fF907F81b0e6956Ede247Bc3B9A1531265a1DB",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xfbBfDbefBcbC957A3A0E97Cdf4b9556bD178CC79",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x1318939691c09E8b78840F92B63d42BdB337dF8d",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x241a4192a667c4A15f7979FBe44F46476C26BDC4",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xE53708Bb7043cAeAba1A6c1f9c0b858474870cBB",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xC5650F3d50198e37429ce209925d8E4673fA6698",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x158D9CeFD58c505021C54528FEeB14ef73C9ABFf",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xde3820367bC8c09083902F9302417129D00B7406",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x2510eFB1ECe141601CbF69E3e69Ea75e00c4d84a",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x851E57AD020Cc2Dc23f3210146952538bb043A5A",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x2536F3eDDE0e5AF3a8EdD01D83769B9f56a15cFc",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x872888c8584e944a212E68A32b24B129fBB814a4",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x076724A605F52fbd73413DAf215f3185323E8A84",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x5b0100A82e64A43E204B5BaCa9FDD53dAfd648E2",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x401b3D51e5968CBF53Ff68228aC56542d3FFf4Db",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x4c99EFa8ba009e33657594875C970000e2Ab7CBF",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xA7f6F33291DcbfB1E10d1838d97984489d7A6F8d",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x13a41b926e95097EDB9BCfa9B189018073e3FB0d",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xb85a4477bc3D28aF7245A2BD5edfC81457Fe334c",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0x27E1540E9543041c35dFF947F460bd842f705C25",
    allocationsType: "longVesting",
    amount: parseEther("30"),
  },
  {
    address: "0xF4d1168c1ce7acbf7A815bF91F04AA3B8dF5f420",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xf74EA3b9f53AA8FbB94D6F119c5b7800B535B0FB",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xEdd579cfE98E4bd5b23fbc98A4aC5b2AE0B7234F",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x9b42a897a6Aa128AD700DcDDeD40FCc3f0837D34",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x5C1690733Dc44EEf55C3F00AAFC335551fEd3Ad1",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xd4692b76ebE9f1C31248060B8224D9F25D0aD4e5",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x70Af9e564236734E196C3eB388A418Bce94013f7",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xe592658C324218ad27f07E08727F91ebA7330444",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x657f13738343a8F78b39Bfd1595fA1fdC5bB5D7C",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x62d0067ca1597e60e32fb74039f1577b204e4506",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x451ca742d900d1A9702D71B3b65f6425E8EffF7E",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xB300130EB8D50Ca514Bc505156C16C721b5437F1",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xB31B6215FfCee239629DFD85B68a439C7246eBBf",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xB39068a0E95b7acd1D72a8C0DeCe0653f837a695",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x61009e6670bE7a9e9eb2C65291476159703d00C6",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x092F5a8732688F22730BA6C814487132d53ffd57",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xF38bb69D9e615e475DBc20EDFA9b345383a6932B",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x6d8fB55E81d276f840208ea7D3c8B85985451B36",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xF44614AAF64a006bA477B0b88F7c34752d34209E",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xCf306e0178F508EB29b22d5e9299c6f37105e9b9",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x3CD178f0EA61CC6EaccEd61Aa91965534b0641FA",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x78D7cF28E1EbFc4a964C5F3A075Bd0dceA5179E6",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xB491CCE0AE530bF574AE81309D55081bD22bE533",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xD12F1392a942ba67247B27C9415C23457007f889",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x31a0348F39Cb3B4Ae5140b75F41d021264D58036",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x5547B63d752508b7cCC4c645A1bde4518B592e65",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x587bbeEdb0490FC6F33a6fdF53eefDfDf6fDa9AF",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x24f009467F39fabd6EfdfC3D0911d8C9185562Ad",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x8A559BEb1898Ce9C2707a1bB5828832e6681DEb7",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xB5d33F4Ed09fdE42Eb4DC8E9b68B54E23FD88C26",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xD26384A7F3D33f8528C5ff4453b2774e1F9484B5",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x5B82FC9134FDaAdcc5c0103c8c86D78eA7247673",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x432A9AC53d2EF3D3E89DC9Ee5935A977D1e8C1D3",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x2340af635Ae8974D8accbD863e8Bc98d0573F5E1",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x69698912A0759D8F58c7230b7a6D5EAD3E8578bE",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xe57786ee3f61A41FF5932bA68d7f31593BDA2012",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xA030a59F9872Ae865685A59B32340d503cBCE1F7",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x3A4dC93661069629c3010DF6C9aeB1bE289482E8",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x22615c39aDE68a6ee3f3F4d60ef1e40Defe49c38",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x09C24c54EB791750e99682020e23439811542C64",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x22086f3749e91C337F78bfD81c18817a8F9CE53c",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x5A7Cef99dee53B4B280d263897a87a25f3D09B3b",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x219b4A6A356076A8F1Dfb371E06b634314D9EE0f",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x6D5Dfc94Eb5057920F288BF9B97351fc9f58f816",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xdCfb5e2aB7d99e5Af67Cd233877faCD3A6fF710e",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xa34A875097B8D3d1fe04c141D8DF1D659Dde7127",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x00984639C232a0a3D0046075Fe27F41237ef6934",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x06e21F38B0e36E0D2CaBc9208C3bFfbC3504dc7A",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x5e0d78F9e3BD76B70F0fcAc6EefC64F171335B65",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xBc200ce2a34530E8CDA0E22fBD1f1240B2a151AE",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xea2033E14D8249bA2B7bc60aB3d005eE1f35930a",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x3845498F8CB4fb32D9cb2287a5206F6789b97a6f",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xaB755bA3e33af44962c85A2dbD52F4D2fEf2626e",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x4125e8f02D7e555d03CF9489839E893bDac892Ca",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x0BAae2A70f2163c091814A2e87a859E8d4cD8179",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xC032869C87f7B1581dB7f24E715CF5Eb0D9133Ae",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xDeA7691aF3E3B28bC223504E31799a0418869a98",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xC127BB5e972c77a00ad3FD6A6db94EaA19757169",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x14b7b19B6a72b87d15F58538A62BEA6ffDfAafe4",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x72A6660C4f220e3B2708B17FD6b06F0494fd904f",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xA8BE6EB18F07bfD38406407aE92f2C48CaD4c4ca",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xb00B106D956ECd29aeF0392681c5613EBC4E7f21",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xeb1fbbB93fc6f075F7ab31535DDDbb39c5C944bF",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x06F3A6416639f76B2a057c8E96B3BA37723E647B",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xb42CC2473934909823b4a241Ec4F11C8c9BCf5d4",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x1C4D0bc520c79b02480DBD35cb3f4DB1bF9b4293",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xb5A31471e269e9343641502FF20C133daeC8E86a",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x164156822C39Ce5bcA37a57fb626DB3770f3E6Ac",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xC67A9456D244493530c3a496f937B4B1d71Ee56C",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xe2b03a4d016E2C3fB378c2013931714dFE90D28d",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x5Db25EDD39e142734BAaeA4072F12c4275931804",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xE9CEbb9e104716Ab6481D901468e3e55a27c47A7",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xeD07E2d97efF128568e5EEfb44D625068f6f92b8",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xd62140bA65D2D9a5c79B82493F4d783a80A3C45f",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xEE62BD3844B94dc9B6A32EE8630E93C90B9bA5d4",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x591fEc74d03B6F52E6E94CCE8D49665B11CE0193",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xbEc6fA9b4f7d7B929813167972C63ab82F072397",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x7c3375B5b253d50e09F35Ed87c8Bd4ae6C085Dc2",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xB1155d2E0a78F4B88AF682B49f5007270935779D",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0xbdD77Ac89e247611A8732fCB4372313eB4A053fB",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x181466A7c40826cFAEb5AdC7054766B2e0D28886",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x6754e30602066AE81766439feF82227B603625CC",
    allocationsType: "longVesting",
    amount: parseEther("25"),
  },
  {
    address: "0x3a7A5232385309298767cA43f620Adb3F238B0f5",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xF006A4a13657Caa5a45273855bBa88BdEEb6B214",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x3F880D98D8c42B42bC2cF827D78D7F86881b753e",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xa408E389DF4Ac86dc4DdCd8CfA587B1e7338d7EF",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x7878501578083a611F6deF4237AB8f5242dC5Fab",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xBc18AF0d087413AafA06550d9d8b2EB0b0bf3234",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x39777aD0E902B7D067551228FF876C589eA3e9e7",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x7C89ED182C6c4ff674cE7d068FEE8Bb1E751f89B",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xBBA1C149D5B9A10e0f7851D81489E7f625E3d2B7",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x81C83B849DaB524BadB580638a4320A3e46c5b81",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x7228d6F750833f2fA0dCd19BB4bA85e10aeE4D85",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x0A0b42EcAcCb42a6aEa04ab0CEBc87453785bfdC",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x76eB4020e0Fc055971C438C48543Fa07EAc0533b",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x14e81b991b5ACF81261c32574Fa50A8502fC6E65",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xC9a742b7f8482859d90738FE59eEB99c26D1849b",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x95B13012BFA15a12D908a8F432c68450C5770BBb",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x40462Cc888a709e46990Ea256e7706e4b42FF08f",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x78fC1dC25f83eC3329533Bf70B5d819537F616ef",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xFD25756754EA02418890714491A465DC8f9bA91C",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xcb9B2A20B9f778cE99e9999fE5865d3155f177AA",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xe6e9B9c139dcd4DE629Af18B178C71D6D6e4Bca6",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xa8D6baa7Aa08E8Fd898C7740983492DA878A8Da2",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x76C5fC5715C0B5019f53864AA980B21b30351e5b",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xd4190f41A0b2f5229813eE360068A6666d8dc421",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x0250544d5A99998796A81ed86cB799ef000eFA0d",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xA685Af1c399D901bF99d86642b8ac01af9d9e6A8",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xcCFeF7562A75A9E79918881E924481E26c203267",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x0787D95B690aE847Df9997d60253784De10Af006",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xE15BD7B6eEe0E69f72F20bbbF8411fE4c4cF602A",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x64970c65fF040aA2AfaDc3FdAe1Bd130Ec6Dfe56",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xC2d819B898FA234e25969380059dfa7Eb498AE2F",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x6810f9640dd476E97142cd83bBBff54d863b3338",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x77564ed0AE9ccd5F4D141779988142030F4F1d93",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x21d192677cD68f6cD58263787b5E165f5c3F5716",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x7475C532fa0e8bec62a56c03A2924bD7BC656531",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x8E18963f3F4fBFF5FA9b42CE4c6ee318e13B04bb",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xc38E6b77403C16a1A074ea8fF91D84b661dAEc54",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xbcE829B4d9419E1c85EC6804Fb0F1b9e2dA82275",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x01d0f3832c2223b307ab83ce98310f967246cBeB",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x0F7562bfEE15c27BDBEF340a5C7609dc7679D610",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xC38B84cFAEc98208d663B003845e9F7aEE38e864",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xF1f370F389ABdd1D2eDE27Bf56Bf82Be8B7DcAb9",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xecc715544DadF5ec87dD0e0f1A2B0d6d0680aB0e",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x69c9D5b56c1a934864bdFa4874927A36931d412D",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xb8bCc206d0f3221E78A2942e592B5506f1904B88",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x81d41C1184Ce655eF456d1d933A111206a53b0bd",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xbaE0d570c3d98B54aeaf699FE36a13d14Ae71f39",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xe512eB594ce3203DBb2C651F016223654Bc97c17",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xF47A71c089B62B660279574C2B9e8981e9583f09",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x3E9961AE8F3d35951085a528C22f769D7e4f0D79",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xBe257a3B8Cd4B35486226164626242b7AF76bD52",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x46d69A42F687b5D82362665c7e2aeeF216e0890f",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x3AFF8253874038C87d78E6490934ad046d66e1af",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x8067937d63c304b5f3B371f956F535fd3006Ec5F",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x5Bc84433ceF558Fd4f50c26CbcB677BEefed214a",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xB40587Cdd235E6B1b19B44C6f04B6aA34481Ac29",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x9BF916be09AcEd4dCd077E399a322B087a8D4331",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x201dFDB15b37700e341CBd4d8f2c82E1297AcfF3",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x41c0DFc1906356B152de4059894A6f97d4DfEA74",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xB131a18D8d2396Faf6a12c126a78ba2B16a7b34F",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x322eb845547Ad9EE896A4fa0A60e737EDdfFa7Ea",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xcb86C7D82860C276a8a6Df73Cf8dAD5f1Fa95db4",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xC8A6459821D5A261E12d229DA1bb4cd1De174155",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x57d0b91c033B44f91aa5C997d827d6e5d1f06138",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xd34Bd5be8EED8D2B38f9552890B38245a96fA520",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xD109EC4Ae31395561017ad4055045ecDF074548C",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x232435428fa2257618F84A9bEd41b1776027f56e",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x62afF1DE51e60876182b772A906cF02582ffbcb2",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xF0F2696c3376179955431dF9dE1AC466C73793dD",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xD72BE49F64A588A1fe961d022cC55667A218d222",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x6Bc7921F8b92c7e255dF3838F28D3cC9Bd379E9f",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x42aFE93A50c9fBA4BF55DE264DA7BFaCdbd2ec70",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xD849d0623Bd422DF5d40B5cF30D7804d5856299C",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x682C60158445f9851b094B57180f4000921D947B",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xA52025cf66ef05bd0A11E0DeA694d73084D739d9",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xAAF6B9Baf8517680D38eAE8753139CE090558497",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x8dc6E62eE7d846A73b6573e5F276078d68FB84Cf",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x79DBe33e73414Fc1a86B3543068a7aa7Ca787255",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xCBBdd090121d5F4D3DF4847acE700D4F4621942e",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x3C7cC9072649939191979825826E748293b29222",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x07829EE5a3065635b3221709D06BCb7B59fEe69d",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x26C792e875201aFCB8e5Dd1245F6571b45175De8",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x364ECEBeb9Bb0c5FDf5b62676590FA1249c73485",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xBD791E63C94B49ba9bCdf902e28b6433a0E8b2b4",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xF80ED67000F3a24330D8A31A0e949794c8992D9C",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x207cC74c0acf62c2d645e9c70Cd6353Db01b1A75",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xea7aF500b1263E7c8A06b9b9bFaD7D5bd19Ac519",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x08d67911033b3458D1C21be8A0d845b6f597094F",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x9951b65Ba4aEbCBd8f16C878755123071F6DE684",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x6b97017Ffc09059fFb6D45fC802070a0c1B78ceF",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x45a7c22c3D22A316c6604fD01e2eFbB9434D4085",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xc1107120874c5617D6cc0A0Df1ec0B6803F234de",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x899a1a39014392d45830408b4d74f9e4910f90af",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x3B8D075DA453815D2a940BaA3EA9d3F9A206a1cB",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x5F54ed9e70D20e5e77Db65f49E480Fa92AF2d79b",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x5f41EFc02147DfC536459CB93E05EC2c68c82428",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x50F519F58DBf4B7b3602baCEecC9c3d0411fB4a6",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x706Bb4b0c731B0d1aBA2ffd6851390dc944F1E58",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x26aBe924547A5910B403ecD7660110321Ed02b60",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x112b2c30173AAD24fCa94Cc9E9a2D25408bAF331",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xD2ba5E318934Ab426231b13d8EE3bdb8e5AF2B24",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x284D2a52B206335992a155291eCd3e6Ea3c5D9C7",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x9CB7d4c8cd05EfaD30cDa740c600958AB4D14573",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x8fa64f3B9029D02E4E2683Ef65A46DdF1f9Ed9D2",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x1Cbb5B2f5aa816B5F0F66A3A239a4bD93aA1b6b4",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xa7bc287fEbf8C0d2c67D6bD3BF8fd035dDdb9405",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x8762EF3065255Bce51BEf814f159669C62Ea73eE",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x9CDC648C59adeBAcc0ed77aEbF8dd14830482E29",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x9548D1f98F0a8212AbecC980aEd519370D13B88d",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x8AD6C0a37b00c5d5502d28E4C8d4B8029525400b",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x3cb267cF346Dc867a5d6c889B107fa4bfE74514c",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x30fA559f0bB67de18580516C2ca67369e9624F88",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xf9Bb64A3378e9B7628319dF54d8141503Acb6D65",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x6a29713e5653a8fbfefCC66f6932a52737d457BB",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x41850C07076e6A2DF09fe4f649C90d502CC4ce3B",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x711C8053202774a818d7d46F4CC10123cEf97616",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xB67e5545F4011Ec6bBeEf5cF634Fcc69a460Aa1F",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x59392E3253161B66792EA59C61a86d17b3E37851",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x332977cd873E7440Fa2590508D9c3D137045aeC7",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x6707d3903f7828f0281e54cC4d79B09137225AfA",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xF1522f4B396178b24f92cc9E788035EA391Df8De",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0xD3d5e1dba977A6CFEEe69845D77e401A9c1677DA",
    allocationsType: "longVesting",
    amount: parseEther("20"),
  },
  {
    address: "0x2F6cF28607a8c6E7e97513D2B7f4b5EF108554f3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x998A0F7bcbA1F64AeDeEDcBDcF61a87C5adF7642",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8E1f85B5731452D6B009da0088A7396653AbeA6b",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9F6b92481542C3CAa5a0562c529f022e59a2eDed",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe8422e4cD430EcEc572D10c808217c8fF57A29e2",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xBe1117a1370744764a17400304b4c760Cf0dB058",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xDbEd89656Fa01b56bd8311a4f9D7eF978CB88067",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x03DC004bf394415fD3d1c804eb3Be239b347d291",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe4a6a6e315B49286e2110725ceD6E2A3e3fD882D",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe7c7Bba5dc4650B4BF1d0E05f88F9E0F524deC83",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xA71be7D2339b9A8b53529be57ABF00FD395872Dd",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5A004Ad7775bdc06CD7768F0BCD4666485F3d868",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2EDABd92Ec2d82CFb0996C6E6ccE4B452dffBcA1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xd8d5604a5262aD013b27537EcDc04b04a35a03e5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xDcB01067fEeeC04C411d7d7d84A3e0b3DA03F576",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x99ADc49048d47b13ff3c776402E8139e3638Eb19",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xaF58127627bf77C4656F5e8AadeE1e459182a19d",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4d65A08Ef7C66422A9a33e8b0C366D2a2BD86bbB",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xbb07f47e1fbA7f86B66F0886fDEF7Bc94C1a3eC0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x37a1F52e74636D75c66Ca08F5BA18BDE7a5C3274",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x66e8fCf4bfeaA6124a0cD6d63C960321D9188044",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x565DC09a637d710be8Ab303Ae9B86703E3f0928c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe4735a1202Aef7c25e21E6720257d3CbCe557b3B",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x37C5B5de8Fc28E67fAb38418dB71AED1fBd091E3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xC0f69C1AA0130A5B918Fc36938B49667F42fB0AF",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe074Ad7A2478a07d10e3550CB434B0a5a11129c8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x636cDEf8C5b2FD0f59Cd66b9c6098e9d2D6A8456",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xcC295B669a297c78E7C4e658474dC7497a103fc8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5F8Dd46E88b96E791FB038a76eddBE8a7833fb08",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x379f3F1B460eA9E6f60A274Ca4e61dD519bB5d51",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x6732673959b3C8e85717c876098C53a188Cdb983",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xab9F0b88e5aBbeCE6D6349dD316B698009028C35",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0ABCEa02AcA4D207ce5b1d787C1A0903031B4920",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4CC766b42741Cdb1AF73bB7b06832C5fc6296b98",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x99f6Dc84EED79A075DD2A6849a8d98d66781b92d",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8EC2FB55d351c09850e2Fd05d5bADCaDC53Cfe7A",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xacDd09E166D3E4e72f8153207776e94704219df7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2Ca79104d765238E7f857FD230dB2439D6E9C415",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe2183258De4082Be17D8A7ED013B0e03bd07D707",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x6c58ac7789F1a059738174b784250651dbc0507c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1b3cd7cB46CaEBFbd61D2357dBffb544E6821da9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB2B9d1B608F3b4E24C02f69C87a997BDC01a3A35",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3E358a94B58822c53c25b2c77535af64418992A9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x57861B52F0B723284D7cA21DcE43bc213B8289D7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x69Cc68AfE19FeBd521f2ad344Ab0439478b320db",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4c4b2395ceB0Af452De87bd6a8C87F2bCaA28872",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x476156e09887502F5B6956373D8d9b08f2df5889",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x767C5F06C7296F6debDd044326DE3EEe184E65Cf",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x370A694fD0a5CCade042db3302142bEE8f65a5C3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xae970C96Bb7fFf6138A24F8e0D4c392Cd6CA87ec",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x95243bb2f9B3e292F3298Fb32e80c361c6A4B4e1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x591A522a56AbC37689624F083892BC95667cf305",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x635257603D430a7Fd70c8092262AA1C6af1725a5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1a1039cD1043aeA3d7C3114c9E2722566d7e9B7c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xE1bf8f6c569295cca3A78283589684cAF3905a90",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xfC7275b4361fdd8820cff1CdFA3362BB869aDA20",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xd89d9BFeEbFF158c449791c5BF7e9FD902c222f9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x40110893c905d4033fc097d6fb39224c0a2fe4a8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8EbDcC894B56Ff83C817Be44ab5a7965c0A1519c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x67f393E6736904487fAe5A197aDCc904c21e07Bf",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xE223a8b505d3706388Fa6866BC28904a5ee3519F",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9B6236ad162F037AbE9773B178E5dC9313d45096",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8EfF1d64a4d29D0316791391C038A2d8318b34B4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xb11c6C3b8D7AE0aED4a7F4aD6E463ed415E72dB9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x6b3f2829DdCa9c6e878Bd97Ef7cD12c9e9B600a6",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9BABc8cf3068529e1245dF2dc940D7dF9Cd99D54",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3f775Ae5E88Ed6CCe2f1a17D45cc967DEDaD5c62",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5aB99322433F8E6c82c3c510eb49A14F01936dDA",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7f68ef1A749736c3B31a3b83A4E74d88a2b1D66f",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe4714161326CA06b9251532fABD00473397eead1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xE3501522D0729AAEbc6d5ddB4b473C63651f817E",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xA9FF863d59681C1B5a134dDa233E21b6A5547643",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xc74088aEDeb72B0229681e23CCFE7bf651430e2D",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5310B5Eba296298132B1de8999908bE7b7F17E78",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x46a5A30e03b9085F6C16125D5d72aac7231342a1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x50E9768C882c75bE97C43c3dD2a5730538fC7adb",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x71D3e994bF6E49409FaAAc8Dd189ABB42148bE8E",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x69d3B8dc63689B75083d04483F6D569D4543110e",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xE45677b862f4Ad9530D3c806d3A25fA1E80f2DF2",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1Dab5C5E387a5985335566C19FCDaD2d04f81A27",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x33acF8A4Ef178d240307d72E2b557b1204b33a58",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x89738D6740e68aeca46bEc43De9d93A688251032",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0f4B8Bd57256A7a48FAfC68E2831a1addE7F22e9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7fE18215fDc075291e53e53D63Bae4Dd11E8E624",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3dc8b3539B1339aD6040A15d8e984788cf7225e6",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xE50EE9e0a413F7c203Ce3310386977010C9577D9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xd7a040EED7c6a7c72A1Efc8c7a28839A7ddBcC32",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x82B375f06D922dC9274f52962c79C11fb8D6FF70",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xABFc8CD89699705d37e3Fa0c12f9311384242dAe",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xb4077951207d676394859655B0A2a370c69041E3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xbd167C49c7a8E616A1a903923bB4711CfcDc0475",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x6047627fF65B83055fB7816a98b69A44fDEef868",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0BCD4C36b877F19F50a32945cc87b93A8E73720a",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x52CD5616DA1d0Bd09680B199029AfD4225ABFC1F",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xc5864592525Bffa3175379aceF258748AB73Ad01",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xAD52A13938A6329C9fE26e3Ed4d807028e1c29c8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x15A4f503eAbDBBeC1FaFcb8E9043BE5920a89456",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xb5aC37b797e1F1C54B5A88e0EC357a885aBA6251",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x76cDf48DfBfc7786bd44686d80FE5F577df2Ff24",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xC654c5575D4dcD174d107751521C51e67156dCD3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1BA2638d4c69214FADcf3dD2201eAdEA89852c77",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9a30B6021f827465D5fdF2fF8A179acb43982F5e",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1835a29908caD54598834ea36B4cAA80080C0ca8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xEc84C2C28bFCDeCdC91021d696DD31b344b73125",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2A39FD94E139952C3958E69172bA918D8f533571",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xAE59d4E1409c6a3934EAeBABf21fCF17F4c81740",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xb65aa727044C1b5fBDe2A88AA65E1130aB949e71",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xc3f2f7c55d715db007c5068cd312587ee8ffc3e7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7b987DBD506F9a5989C0E2916477f7f59bb03718",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9D91Ade78a38eBF68784D827B3Ef7d46AF35F228",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xC6A743c9daE74B9F4668c9418216e9E204777198",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB247Db9BE14D774f5B3222de41a091Bd3D9a00D5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x56fD046e96AE63A9397b6984CE3bE50FC6450e06",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x82dF850a1E4d7afa0BF01972B012C8F2b5E7cCE5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x29b4080933343C0a9eBE8584360fC6Fa3113c999",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB21A54EffdAc3af44f558EaD72da3c4bb608B82F",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1Aad4d1b61C8616e56c3e39b5F3f88465c855cE4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xE82B902adC7223f31378C64C11Eec5ba77d95029",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x935811Aee151287E2ed59dE615933a2DE0AF86f1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5d8E7a54C48059A038868f32777520D98B64f979",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xf70B3e13073A95f402703598751E6880cFe8d639",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x6B9EA63FFb156f11ABA5874769cc3650dD2aB3f1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x29Bc68AFDB3Ce594c0D880F847b7bd745aa0A5C5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x83fbc943437b4da524a174152D83F033Fb20bB4B",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x94d20b5b88fa15eD459f5d680798925ebD7B4c32",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7884AB483571c1F5464186363a47745aD2ECE765",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8b1b226D31Fbbdda2cEDdBF5A3D1BfEF726e83E0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4a2a84Ad1131029039Ec59a51Ce17C7257cbB768",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x805c8C091edF57CF469Ff73e6dCA621c5cBa7758",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x56eA2bf0555980d63256e7B991909b67c191Eb60",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xb906b0641DD9578287c0B7Dbe33aFeC499F1841B",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9E3Dd8544D2544a888Ef4Ed5502720F215113FA8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xAb78EB6C421CAAD4Fc57d123Fac22403Cb7DBDb5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xC7D285fb503b4392Baf63a91253252a8D6bF3A94",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x80B0E35647D7B4E9f419B5777cC6fA5A6d744ac1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x19e65977CCd410D922cA01f341dBd1aC5f010E8F",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8062d274A7212e3CF0721A8F3eA645b25c5202A8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xAb842a447Dd49A87267bFA2527885075bB2a7Aa1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4FB69b5FC2EEe6f7AD0Ead01B7Db0FA8fFEBfD1A",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x66432eBd5f95DC3A2bCB69a20EFD155cbd3A47D0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x72920Cf55002C11E13A68c5A504bF975a9C22940",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x595f1d5251837D6E34bb48A780E3BbAf20d90fFd",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x639EE72F4F2C37B5f92D34BB299d2483805852CE",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x45fcf604aeed93d9c57c0be39911aca3a32ce88a",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xAd83dB3B5De834f8f118e09136b8Ee1e280b9BCD",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0df971d67cbeb7fD829322f9939B981062F9dFd0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x814eD1f9D6C16f9806c0AC03F45B314EF5f3C880",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xF5A0E41928B64CFe6e7051535397aAc8cE5a643F",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x28b7c38a64338FfFd67e7fb6a23543cA9602B547",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x252c194E2021DBFE9138fc82181A7708a4F3bC04",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xd300686BB2F7067d7286A193Ce996A8EFe2c556B",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x77fC60489cFf1D3454475Df5c49611eDbE973bFF",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x853F987ACc04804b64Fc3a6252cf7eACCC5a7eFD",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x55845Ba568A83707A5CFBEe80271572801AC9Ab0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB49EC1b98427aeab30D5e0F28548e0C9238B75bA",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD1839DD6906D84f12b5ea94fEE0C554fB03404e1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x318f5F31d59B042C95BD78f2f64064A053a84905",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x45f524eCe69d4fDa9cb3792399965feeD14724B8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5915005e39bcbda28E9eE7AD15fFE57ab938b82d",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x24eF0e2e68b98a823C5309263ADB786EF7C5054D",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x961477b70145DB65B41811d39C151AaF85F61154",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8143059Ca8f111594Fa517eb64AA93849506CFb5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x10c994E2AbA5329370588Ddc418DcE425e715793",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3C69374ccD34905c9dEAde72f0d01Ef11b0fB621",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x24E5A437eCfE18ecc55feF27947D6dD4840bD8C3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x76929340A7BdaEf2BfdB3CA2536E36F628dCC525",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xeE7510C791Ffc2C6F80CF63C5f5246963A70ac80",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x85548ca3370bAfB25ceDBbEFcb48f33c183936bc",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xF8AE74cf8b3A0CCD71Bf359C1D9286da0be047B1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xF8E7bE9E010a92bc6b20D515d2c25C5060488565",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x02EDc0EA9De6c69Cb6B9a732D161Ac5cb1A6c08c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x316AfAa5eC25D7cb83E7782e5774aef44FE800d7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x966EB935c891C2E58bd3b8dD8ae6C1777a6C59F8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x113dEA4F42e6F8eBc4930fc02C45Ae6095d1ED8e",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD2e4097CCBFefdd856B5FcF0Fa72c9481E457D30",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB48cE43EaEdbe32792fD13cdFE8aa66054f1d820",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xcf760961ab0b09E739880Ad412826D78198D97BE",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xF9af5E1fAf9f1C0ddE668F0B93495B3E0a9dAeBE",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD31E1953509c8C8d99BEcb846d8adf46f4b678DA",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3C5Cf28E610b5AFb1688560E80cAf0233bf6688f",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB66665333d2F1f26A6a85a9e5894E6BFD544251c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2437EEf1a0c30CEa69CfDd4088a5fCb70501c83a",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9694fd96729639Cc799B110A76789F8e052E089d",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xceBd9b5dB76b91e6e13781532a31Ef7d7e117322",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB67265b30f26fAe9C8086C0589EE7c66FccFA9F4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x11BB70D94723282C8C81cd18Fcc0cEE789eD3e1c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x940491FDc0702CE9194174c42D39a2D04Cc4Bf22",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3BDB2A9354b8b2d9612Ce502Ac08E0FB2FCb3F84",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x84E851958B8f2E635f65B19c0ac3fa107d7bba12",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4ed0742c0620A7E7D29C81D2fA57bC666b2Cf525",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3B984C9feF390E1EeCf6F95ef303DCA8C1F2aa4e",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD423a5051A5620bff3EE7C1b20747097696dAFF9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x49B8Fa0895Cc4443d61644Ca3482091125147d0b",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x54d67bD0b5C3b6554d78F07Af66Fc97a99302Cc4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3Ac381aFA3f7177827E071C1eFC244b93701aE56",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3AA6C22c3f0B10F2BC0513170FfB2f9af873BCd9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD4Da02d08DDB2e56942162aCC8219C494f2C2A85",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x238B15eAC70e37a722aF0adb6535B570E40Af378",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5c4Df17595594741f9E9882F7415583EBBAa4B7A",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2305d3a2f40ca9364a4e9f72acfc1531014e3e25",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB81933505475512092842A1c4990917fEe88497c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7A7f2124eEaD9d9b80393EcfDB488141224f4031",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xFFAC08Fd1C259dA15e768f46Ae592b8E69a11451",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xC977658056b8e839907699DBecBBA699c1a8da86",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9a57CFAB2524Cca9f9Ec9222c325Ba32D34853D4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x194104d142fd1738a62336cda3dcf965fe591fff",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0B09Dabc3d857679F95ec8751B2bb07229733F98",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xFa61D6c379222Bdba788D8D407f1048a8C832AFb",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4e689EC7100c97De83Da834bfE4416EC60b1C173",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB90f542f5fF002ab268c8863d4a1FC04d1878C9a",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB92bE8d4764A486CcDC00864615AB2f955c2950a",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe1027e6D46de304570c38d210a94950AA48921C0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x9416a3de5b33F04b7Ac6ceD57b553eDa66bC81B7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2fd194ee11436A0B342c41db95e5Ef0b30280A2b",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xf2A532c15b764700b242Ad30A2De2bf8e5c8372B",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x007F3A88ee00c4d8C276ee66beB8a46974040a0A",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x490E13e7AC7F9b9Bd992872B7B9C9C52Fd2dD546",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x95B07B12264663A439E67c31898728c60ac34b02",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x42aD077CB4E0B17A41FDE9D68aD23D65824C2115",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1932715F8AA78C933B5545B5F30197a43607cE51",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xFcB2E359A5274Eca2d9eAcebe347cb9074e5Cf8e",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x42F0581bE9dE74A890C58F49826d7a02c26A8362",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xcD693F3A4EB940a5d159f2E6a522E0B3F8D381d0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x85D2e0E275E42045ab0247Fa95F16D4c79C364c9",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xf2e780730fb4e14100de4a53581ef8585f28837b",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x026c986F7f6806C3E58fae093137556A014ed6aA",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x941B55FB799294EaEB9BFa76E39Bd22E95585d85",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD638a6321e77bcE5075e940C623c098c004C9a3F",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xd3882d86fD6E718fF1e8d28C588b11902A385468",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7c1F83a43571E1C24DA38b2CB78Cd8E32A2C90F0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xFeA5E904C2c86497570ac0427FF5B2180c68aC60",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x50233e6F50997117FFfcC75FA440ef98B47b07Fc",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x981FD575EE2a9E9dE5554FEF1ab04A0Cf3Bb12D7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x39dD0541319dC3E3886e8B141FFcC4Fe3Fb74E05",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD681c9829461d55DcA5250D0F280B40e97Aafe99",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x85b5D40CeD68574D7Ce87fEE0A67100b94FB63A8",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xFfcf7518A5A55bDC092800fC0E7dDd08B3569D39",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xBAb4e7790D59e2901b0c0E736339FFC421922716",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xF466A1E642eA042AC9dE2541006419794E2693EC",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x21b28842f6cfa788d99D44C9AB502b730f56918e",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x6Db87702DA49A8591d669460CBfcDC8bcD939E50",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD71D197E7e2bD838174F441362260d235e190514",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x014d896C10c032e331E447aBde67FF3533f96c90",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xdECa8CE3AFf453ED8E35E5F07317844912980Bec",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x78d81A8D05B95c6D6f1442f49dE51935c5193A0c",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xd484AD481CE32D7f4d31019D902106D813C31Eca",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD755B705FE1BB514FA89933Ec2015fCB9971cF98",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xBBdCB0Fc01ed27C1f9A2Bcfd26135485b61581d4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xBBebd2A0e57c24A51bf2F469936B076BfbEEE07C",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe51faff59edb0e59a8dacf86d15fc22ee57585a3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xBC52aDAFE70B20e8aBBA72c468A161610b43f930",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x215A0E3C49856248DfA79Ee30aF295d2d8f032EE",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x48c4c49dd0A7127054687F38bBb1e49eB514E5BC",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x21318E4A376cA76e39E9e68c8E96A7B76db49661",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2124b358277dc8c222B6Eb68068a6dea321D8738",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x909a5e2017bf28A0A3cc0bFbf35FF6927DE26a25",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x425Ca3d50dbd172bf18EA8dDb9472E4BaA22Fddd",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4e1b1e33e54807c843b3a40356f4fb29d311e356",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa327E6c6c015B476ab133F9c050311AE5296BbAB",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7E0474850956F249f175d138b57F1D525dD96629",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xA343A8471381b6d50CfB27A6F24865bF97b62412",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xEcd4012f5395A361A7CDAb8E60b260c204fa2056",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa3851999bAfd1d593Aa0979ec3D3bC4bba1C9d6f",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD8Ac0C5F2576c42bA6b26f31C0882772E19D6a47",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7F8604f071857d3Bc757A424384244728C412797",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x39653C4F2AcCdd1858f7b0cF9EEbd372DE57e1b2",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2c3f14225408a9017500d87829B4C6ED30754614",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x75FBb4a35f9c4F4CEcbE0c311d6258C7ddb11b8E",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0b930CC34226FD581Bb6A7B3915d17fF8Af73F05",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xbF946bA4650c5050aeFCFA338Bca16Ca03B7A0C7",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0be46D4Bfa29F4B863D5F0fe23Fd120D74A24FFB",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2baD132F8d4ae1bb68346f5547b266308a783aF3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa4983b37B323B646C8a241b976ac1c5Ae06C835E",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xD9aD95D428C193182a6082f381657d84a51fec42",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa4D6739B301C0521e23b8a6f7Efcb0f679f2e549",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4dfAd393E21524461859dbD97BD2533db4732A90",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa4bDF47E49d81fA5cf63DE3BD061F60434E10078",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xA4291b3269857b8AC773a3A94e91c31776c6D152",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x7AEeE2d92A69f1aca699D0335f24bD5B19bF6F97",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x2b2750724f70B36b57445338654e6abb75bF6625",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xDA0D962bf150Cd56Ebe459d59Cb864607c158798",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8D8bC022199C6E7b81b3F1927B0E43139c4D6bdD",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8e087ED59988235d2dF1Cdcbff20013939FDF6Dd",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xBFF84362188e1eeE8cf0342F5be9ACB062AaaE34",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x726988c35BF5fC4e2f2AA21118A574F79834956d",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x57F567FE361856BBF23849782a7b094fBf7DF0dD",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xfa649669d7a536096fA5965eFACE0356Ba9e530A",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xdfe39648a80E4C28b4b111F67c058A04F522A3f4",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x543a65e8A865ef2aB6a30D4D9fFfD265ED0ed6b0",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0733ADeb5FBA418AA9dc336c7490fe11515Ad9BF",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x912729f298afc0b4AE8Fe4fA381c20Edec1C16f1",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe8C699a6d517aba18F55d14095724652eE2ae4Cd",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x0A4b153aC8FFdd997780e1B9E94B17275A40f220",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xA5887b85CDA7d704310AdCeD37E13cf3d825adeC",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x38Bd58f5E3Ba0aCf23B681DF379BAb5B886246Cc",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa7C24f96C4F0437aa770CE30c231eAf7FB3B7daa",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xa7e758DA69aBb17e8AE78ebeF76BD1BAEAb63D17",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe58b403a1b88497fa2905BD86bAB5849AeFfe660",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe65bd445CD979647a37cd3CA224CD2C7C18c8C62",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x8685C55F59314891AEa8d3c8B1D630dd6818C6eb",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x5efB0222c21fbE6A36553389C32a8F5371fb3399",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xe8471f2b9902456b38002Bbb71794F46c7F03cec",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x3a911b7BfBc581bB724F701a2e63a0445F5a3CD5",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x53bf76CECe2938D6438b1AAf8a776A4b1EdAbD31",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x1e50fFba0A3BE9033B015A1a9fb884e52485a880",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x414Dbb32C996f432Da0322c9c9FeB4E925632C81",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x26aF24e295882e57c9bcB098fDCEEdB9dBC1FfdB",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xB13372E5b4B90D841142bF221980de69b1De469C",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0xDFC4f9A93d7337C8EEb78073E1222A881114CA09",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x74c78aD3397245B1f1b9b61CE9b7fe8D9ec7D6D3",
    allocationsType: "longVesting",
    amount: parseEther("15"),
  },
  {
    address: "0x4b3a2B0DC2c16A9a410D2510D06d8cA4162c5868",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92e9A96eE99463cdda6561951BbE4778DAa1C07E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x931588387E0577c32847Cf444b5FE7448445F68E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9318e65Cf042546A6610d825877F5BC219DCb234",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x931F23DA2f56F732320cCf14450594FdB7686CD7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4b005d46cAa9D6E2e31b4F9eC5a856C9f097be06",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93415a97F3157EcD5696c11763757F4d6c413CaB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4af25862866945d5877Ba0723CBd269E33eAD73D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4ad494C174cAD05aEfAd31fBF96306d0D60b32cE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x934b1EbfC5ee3a22786C519ff14F5a992ad53fF6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9356575f54864B61c32279a76aB5E4594cfB9a96",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4a8Ffe0dbae8912A8D62953951aad89b3F46a909",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93613e0Fa5d74E1e9277F7cbf158c3B0EE649681",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4a862cFE9Ef4D3E16fA6f451815326984E77A448",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9365Db66F0CA0EE32fC4b76870D1477d107B94C9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93669C922693c9305D508911D88Cf37B00f37976",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4a2A354188d89050F0cdec49D9738e0368145369",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93862FdaaA07e887cae0923271d56870cf4CEd42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x938F1d3e4d819310a0e530aC7Da3b8cED01fff8A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x06A4a276a6e9f443709fAa8AF9dfF4667bB202Fc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93901898b2872971d2AF5C8d2cc624c7Aef25dEd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4Eb89e6715D80C3384eDCD4AFd1A085608407207",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93F304664d2706F0b511dCda5AEDbED45D44A340",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93a3410649bc547F2b7fdBE1B00eD2ed67e90fc3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x93dB3ad5204Ff4E693cBf9049f998c10BcE87C8B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4E8C39E13Bc971221eaB4d03D69cB36e78C83F35",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0682bfB06d2569436c76bedD63e8625dd7bD8D21",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfec9fae4df41f20c13c58fdf3d91390ae7fefbae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9425113Ae9A8B1Ab9aA7Da22820eCE4C6bF9742E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x942e8B62c9038a22752aAdCc50275148C919aE21",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x942fEfF66a6f8CFFDa402Ae1720b802f777cd529",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x944909c387Aa296fFa08609b9CBFB5D134331BC4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4E7450D9F2F74CaD9c057D4755D03f6182bb81A2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x067487714be8836cC8f6853D97994dD8f3d035B7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x947B62a210D0d0e58B8d541276DC39E5fDd4FE6d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4E702ecd215984dDDD381d7336002bD0c0Aa55bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x948469eC86ce0439529870dC89Bb08986b812B01",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x949649D2F54E0471574b4D8a64331BdAC4327b7A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x949adF41C44eeb095697C88087144B6205e359F7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4E2E144a49A5Ac320d3Ddc18D89d33360eDFF2cA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4E22528903ca72a07140F6AE47EFFDD232FB0d6d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4Dd6BAd8F25f415FBcE79120115F0bf6C1fAb4B6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x94Bf28a8649b9f7B794698e9490210598509f9D7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4Dc93087bf17017bbA9863feFaaD83b67A0A1A13",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x94e8b6295be681a2C4DdAD11F501E0fE9AbB758A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x94f185F57C977B6BAA0747bd1a2FB03e49823109",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4D99E296E5AE0F16FeF6e8A645696fFf5a0E48dc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9502f612eE4C7490EC3D55C2621Ee62C25344f35",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4D08E5D38e113fD91d3822311Ee3393B0280bfdd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4Ce3ED2a0631d264cE164328AcA945aAa9DC937d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x95221f77e492de16A161bd5E4267244Fe961ca86",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x952fA5C5B7bf3d4B4aeB352B1C4B35cc7579D974",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x953e2577AaE54D1de2df75CE5d293b34C2dAd0C5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x954d0D305b2F6Ae8217eaf1Cabfc18cb62a56d89",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x955B08033A44045B7c194F08DE7ADF9A1fDaaddA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4CAd1bf9c69E3D224633BE2F589bD86538CCea88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4CA028914D5e2F3ae0dCf80D528a48BA8E777b4b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4C944683116D92293B0E78762654d876D8b8f213",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4C440245829A7ba4F88902093b6f80c6cDdDEe66",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4C41DE9143cf1f187d915b917240D5a3097a56ae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x95870468DcE2608e90a50C91CD920e448C195F54",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9593817012625C0FBfB4A6eAb1F935dEB90B0f45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x95C17616Df1C2811e3d8Fc2df3c0f4230328cb6c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4C36D3Fb4456d7267457Ceb2edca696f8E75Dc62",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x95C5457F7827ADB04d8D03c11cBA13d3cFDd9475",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x95F1801B7d6DA31dB2473D987CAF7BCbBe63239D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4C35485Fe4331942f6894cC1a6d2732FB929c871",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x95d6aFc93fA377f05191fb2577f31D60856a899c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4C2b2Ccf71f2914213d13C0dc511821c3EC76dE6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4B9797A8e169C6c57870acE20d124b8665083D86",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4B922902A74eCbE90094507C727bC8386bd5BB02",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x960858c71A0B279fD268116A487872fC08fD463A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x06154567014687840b5A19263f20f1A22164Fc64",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4B50CA972D27014bd2a50F01ee0620689BFa7E2E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4B335158b0fDa4158686aDa10fc07a6136E5dA59",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4Af9da47546785cf6F142EE81542F2cC54C14B0e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4A24f572B58AA97f711Af80dcA9047395076D5bC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x967733bcC6A86e0A44D0d2aB882dc5F4c59d0Dd7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x49d64706ab51E207c432b527466AD595b7201F6e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x49b2c422bcfce90dd77805ffe6d759b9dbd6fca0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf21be2D39c3F1E256df99e09D85A5128Cd72bA31",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x060D2f9Ba4c6fc42ed660A4bA677c5FE997786d0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05fe7723C472f49d23eE32e04c6D69aD4c0bEC92",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x973E91c03abaCabA2EF83C46a9580929a58415C9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4985F91698B7C7fA60E417C6d28748d43EA9e4a0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x496fAA9BAb646698E2A3ef3bfDe6C5772de93c93",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x49328bD05667B9a473CBbFe9a32bbdCd4D16Cb09",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05cfffd8e8e23b39ef4adcc21f08367b27873bf9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x977fD5631325471e6ec51F2901bF7612fcDC8608",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x492a821CDd584C07F9aaAf7381b9d7B5157d3D07",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05Da6C1948f4087Dd04d97B0106583963CFA559d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x97D22DB1cA30e9E5ea0Ee855D8F7C9cd140ba116",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x97f5D220F9BF036D9ad35551685486d4906727f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4906423083CD26964b73a06d2D774a263031eCdb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9823d75C7877c9Cab5fBe57B5F2C0f387AF81686",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x48fecAE2ecC155B2dFd562D80cde78687aE4EAFB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x48df6BD3b1E7eC0240a80e8113f7d95B4F29bA00",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x48cC295abd3fb522635Fe08A7dC1A7CC67ddE034",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98A70947EA71B6B0d5B6832a525e654b8B898254",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98A9844Af37ff70Cb66ee4b98b26986bdbBB2222",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x48CEf41F48fF6df4Ab17431fd54195E21f12187A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98EE75A99BaC4BF9928a23E5897eD959914c7CD2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98F2D6d4c1A79e2f0F260c564242b728a1865693",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98F374eDB3acC3f8975B7eF9398216134F916AF8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4891A9887342133c6535E0111406A83Ef3a54021",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x488886D117C2c8c8f9025A9Da0748bb2699a60E7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98d474626305194981ae616413A725c84543A171",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x98f586fC28CC36180f4371c41D866fEb957ed705",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x487D58049183b7D1F76710c757620756005BAe64",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x486E0F597BA2f691B9AA4E11bC31c2B94a352198",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9903f83d1886C46848e8dC6DA7c15440851367e6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x990Ec1fAc33bc37eD0b8A9589825D585795C3e85",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x990f38461e05D98FcB6fF7f9b3327Ca9494B7F81",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x001B8EEEC94d7e2B04C24b34703b03E0528Ee0D6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x992d662593b93c7A850d7060A89d860371c590E7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x485F0165d74b90B41282B1E343f414C76CfFA72E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9955eC0D66d9563F2b89Ce0EC77165724A9AC159",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x480d8aB68e736355ba769a1AFACEE158A10b1830",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x480b51541467c560673915BCDAE459E0049c9F7C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x47f7E1bB586F4EC051E1d8236e3868e55E5E3b5c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9979d7A2642C81F0C30EC3Ea8C5D01fCa7Fd99f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x997BB376e07Dac0FC94a6785d9796057b50355b2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x999992C02574B82009CF420EECF426fe5c2c2a7E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x47d444b9097E5119FfFeF897184d9A36b29E5B4e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x999b1aE1123506Bd935e5d0d359C9d42D1752Af4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x99B1d7946F987dB50050CE3C5837B4BCA57be7D6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x99C3256557e83588A638E129EaA76720a21fa857",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x99Eb97D3e4453d68d683dc494Ec6aDD601f061e5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x99F12ec20a06c14bED5012ea2Ae36EC71bfCE5F4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf33DE92D0155EF1aCaC62Ef21dCe9BF2F8F7eF3E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x99e0577049ca3CE9654F1b298a1fCefA792DDf09",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x47CCe29F3292Ae546CC63C7B410ccD625E191331",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x47C010a5C6bb85F327d4430Aa44259fa64292fCB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9A80AFBC8635A8BdF9DA3410daAeDf8362f71b3A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9A89C661a643D493A1bA8b41c4Ef5764EC71d14a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x477AF1626c4A34cF5381D245f14B86163e869d27",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x474Da24990164140520738e2894BF05532E7192b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9Ae831176c38819cEad0612C57FdBc782bef8F41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9Af7D7B924ea30EBB72638e01555335B5a999eeC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4743DA46e993b1fF0D8cbf128E9E5F0C0E78E4Af",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05C89ecA91a299306371A67EaaC48b8cD56c7C9d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9B728F085eD21Ea6766912efAaA6e1FBD61cBA7C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf38369a829fa2EAdA1d62A1317a87216928E703F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf39bA669e6026086ddaEb2c38aA9b1396537ead3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46caA3f74182fAc1Bc1E732Fe05503f22182D155",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05A197E5E43193B68e2e963538b144C01b62B3EA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9C00a15Ceb0F2366BeffA6e24D1e8C61ad2A1CFc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46b5DA256803ce0b2938B10E2BE85f7AF677f601",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46E86C981Ae718CD90B9F93BD0aCd67A29c137a1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9C50eA4e523CCcDB10D400f21CCBEB8cAe8fDbf7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46Af99913B312a12e310EAD5E5F53B649FAA5DdE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9C5F533745C4B175806Ca757484204fbECC641b7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46964F3FA89245000bd240bEd570551351580381",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9C87f7F4f8B2EFcbDb730982fFAA50608D5a44B1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9C884B85eb6f0135Ec0be4b558Dc93b67e2854F2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0596A1992A78234eC541431359Fb2FeA4a33f88A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9CDd56Ec049Ac597F96EFe330c665cEbbB135033",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x467f42ea65b1FeBE3A5FAFF2339ED8366403abbF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x466849DdF25ce470C201AFF220f176A0B97EC8EE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4654e57190aeadd1F88FB5769c09A25Cc275893c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9D3cA57535Eddef39880b300f9edE2cE5836d806",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9D4676c0C2F1Db76B001c7534dD2319A6e8D284F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x465096f89fd6779B366Cc86136b3298486CA164A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9D79871632A075309BbFa600a068490B75990865",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9D85F8C41Dbb64C439F6c4551eB594bE07374F04",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9D87539056C3dF9CbECd92585c90fa62EF2ddcc2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9DB4e3e0E42eBC9c6eD201ec82eC057Ef8231136",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9DC92d102bd8ec3c4e933906194fA143F686dD16",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x464EBA3192d191d45a426c04E7ec848DB366b097",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9DEd5bDbE7E491b1c7a94C8aFa9128Cb0eB19728",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf3D5f55DCA71f01CE2Aa44EA714565c22e5a2B06",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46377662ac6B82942ae72152A3A7ac12f7918dF8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf3ec4966675cdc718FCdCffFe899583E70cBdfFD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4635CD3Ebb9f2C8A8B29b7dB581385860274753B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9E03275f45a88AfA25602263c4CeBa8a7857bf4c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9E05BD119F2E58E594CD8Ac1f6f8f536710CdFed",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x462453Be1A0CF9b0b3B2D05936eC07F33D55EA41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9E1b54F2F18CCc266e6dA9a943188789108620E1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9E246496F149a7a720d29F0a30a0cB5eD254F491",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf4145EB5fbc1eA7b15c578e9697B440B33eFFf66",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4615E7E3a7aEc2216049910e9d1652c8bB53A702",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9E6f1b88199de9e584925eD2E668383F34698e89",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x46097faeEFa35c6A4d85571808BFC94dE1299c34",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9E9cc304e1f87f317990C9946D261248ABb5f016",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9EC8982d388aFAFEfe429c5F5bcc3F7c08B2433E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9EF42b81848fcD2d13d98Ea7530Dc851c3BF451d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9F046cf3704519BEdc5e33Dfb995D8122325a163",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9F12202a82A88e8931301FE92303deB32E7355d1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9F127d106cdD794c302891375c6ef1504c9b3E32",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x45a2Bc2EF73F98C54A9617bA2f5ab7113008c1B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9F50b2B54F7FCB715d364FeA753fFf5A4Df24AC9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0594d7f36156F5E187B8d626FF02A2a86f406a99",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x45FDAd28B0BB5e69FEf77c18117244816561F04D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05805ef5b428b765d10916C6e65362cb141D7b35",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x45C593739Cb41DDe33f4857Da04E38fAa279813a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x45A7EE8cE160AEd8edB5F5e90b4ceFdD714cE905",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9FD139aA186dFaBd8fC7786759A44A6e1330F756",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x459d08857F333F826F35AE34F60Eb766B4d3f242",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x458c52CaC520860C0A48460CbF6fDEa785E6645c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9a0A8BB677eC5031c425342311fe268704B3De8E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x458b21B81796Ce47687dF82acc8dec317ca2E3da",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4584ff8FA88070d919e47E1D29be80aBaA8acb42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9a655035aE4b7A246df321C492994BfC513fc849",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x455A3e20c2C204D22a519E92EA197de3Fc1a9Df6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9a7f652bb350A090aaBa8f1959C4d9112B2D8646",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9a903076514729340f837bd9BCf0A768d7459bb0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9aB055716897Ec1CBd7A00f0Dcb47892B44fF1D8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9aafE4DC8cca7830bd96A8Ec9A8dD9D88086e232",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x454c1A4BA43f713953DD5827aa924bC61EC357D4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9b46c9f53091f7aC9b0fbD054358Ed91e8E748c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9b4Ffab374B75135dAE85195bcc90128E7979c45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9b4e2ee5026334f5005c0329ce3570A9fC5Fe042",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9b80eE01Ace3277Fe0A2cEe704C99Bb2182772B7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4543daDe8fB99A22655DB969386F38C000926D55",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9b8e932318cB0d76887a50911d5Fdf2cB80cf490",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9bA009Dca98CBeBD5c8B2211A79320E6916B0D50",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9bF141b0751513c38104F2Fdbc659735f95f922b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4542eeeaAa73EcdFE1DaC0f3055647088aF0b3Ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x453aDE865E2e5082079F795db5dd517D3c97FF44",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9c1acfeDc83A3C5448f643E9949688330A07aA2b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9c2935f39460920cd2244B072a3f9cCc038cA79C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9c3B908c9cA3eEb2c93BE9786E9420551eD50138",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4504E361028b158740c0690f7c7e2688312534C1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x44f7c870fA937578f6eacE3fCD4789726E105354",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9c658C9EEA68CF88C5bD89da97b69701F2aCAa69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9c6D87A13605E0CDd2F5051f5E637D0BB68dB4C3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9cD5D63c4250a889B6e2eb66d126700DFE49971C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9cD712532154058f9b33E664daDf1D7CdDa0e4Bf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x44a6F32cA74A7949E25978Ff192b1BD42D885345",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9cd0376e8ad2A1AedE55050547dd87ac0A48A2Bf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9ce68e8679d2caac6195104be412a3f5e84368bf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x44B1b721D9500027f6f0E0376c50AC52Fe577d8f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x449FC174DFB262A08C9cf9EF89995a5e153f29C2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4487561633FF43d79170A238f81d5DDC239f266d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf4684E4bC346CbeCFFc615C160455a5f76A52006",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x446ac461723a754e1f382c9f4083692A8Ed39544",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9dB2D99240A3A2dbaf189399Da40674F930Aef64",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x446344cc9921a531496aEF06776ef266ab03D9C5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x056Bc45BcFd471fbDeD78189dE8771133d105aAC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4451f0Cc437C1c04aB5eF18Ad60618A715e543e5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9e0452286c3e3D4144cab2B0447CA2e2e13af1f5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9e09B70c413eF3225fB589596C0973158D43aE33",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x44483F4d6D561f868d3F3858D6E8cFb5187F916a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4412CF8241Ee19D33530abFa136719FD0CF157de",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x440A657f5daaC7F815FC891268A89b7427dcAc26",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05654F122B6cca34335857875D23d2c25BD8A223",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x43E1Ee97A82185B4225c3604Fa585722E3f2e0FF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x437C3303c899a48a497d44abD56Db2910A3a4d60",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9eB0E4E5103f3579CeFc4a0e1846C3D11D97E9fB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x054f5738F8E696A2B3b243F361200cD8FdE15BB6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4377F619094C91543Aa6FfC4f450e9149534145F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4366264b1744cB8e9E51dA3126D517D9DA6Bf55A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x435C3242b5dd7515AD406509045924e70380545c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9f6D2961D8B528f94518fc0d42a5c51dACD1c2a9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9f7b429595862751Ef1023a52E40975d1a09F014",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9f92bCDe81fC2cfaA29E99752792Bf7c53D961Ce",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4310ea57BC569D8206Bb6785FB661FE9140AAF29",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9fAFdA76F5192bfC93c40A7F99033E1372E17568",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf4Ae07C1e87cbAFB687d166C75e725D0F4275565",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9fC6050D8de2dAb4E97FcD4089D8AD22B4F4e752",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9fDfC0039AB02D1824Ef9f2e9d46DeA36B288a1C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9fbbdb6904b803c557a3b13bca8bc292ece1cb36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42c19aEaCF95368303f6D4a0D430cC0f57e9A162",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42bF1f40C503C0655B024082128f09a4fB8BBd59",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA03b4e1AE7F658Ed666481838Efc6ba071d8C9E3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA048C0EF587Ad9FfFD9421F7E95e5d296B3B2234",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA04B89efd91C42cFe7344f73540278ABeaDB7715",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA05d24792Ad553a8d1A16c1D9978aBFaE92d86ad",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA09eDA31f1480E823f23BA7348389e87F830F8c4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA0c06f8422463024217df7299838b27696eAFA50",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42D86d32b473dC5896E17f0012A52B7d92A0B4e6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA0fC4188BEdBf280fA997B37eee4a88d76A24fe9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA12ad44Adc26F5574A721E4f2b6D1008c28441D8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA1343a7FB764a47365fbf0D5efCf06f9fE623C37",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0546C295a340FD1B0Ac2119CDe4499b9a8B45Ccc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42C3c77A42825D701c43837059B0abeC1bF3C40C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA26407051d679000A5Ed513115E2e0C79682901c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42C0782BA27dc3D9B1F3ed4D1a680650d2913D76",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA26d3c3A84E515BF37E4c75AAe5964De9B78752d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA2Ad7e407C9fd2da16177E1a9b4D7116d24De434",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x429AD2A2ED865d8344C6b301D14AbD44c96cB90C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA2a34C6af17B808451FB716a07B83fC19c194468",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4288216CBe25D3a58761D9DDf6428513b5CF767F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42571013E7D220ecd97078D368bFB58AcEB294aa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42384B5ecDEa92b052edE9Fd0B88Edd2540a2CBf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x05381CaE37aE44f66416bA5FE7f8cB407F1E4608",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA3618F7192f3e08B8E42df634BaC8c6eF651B1BB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4230C9Eef0C3ed53F0c1967d76f17c9367b5a8c8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA3BA63b69b21B062e25Ff1Dbf8Fbac78873FF903",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4218a39e3316E7ffe106e4FAA1F8596CE147E790",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf4a648cAd820fd09e1C0177531C723A40321Bd05",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x42152A13F3609024B129046e6A67688ECE4d1aE9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA443dD2e31C0E70e683b07Be08f7660145A9ebA3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x41f3f8d9b0e7ca1b186d2d49c0dcb9c466bc369d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA4B05609eB00D45B4817c65fe168A7bc3e00A55F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA4E1819Fc21600447dAA142749d02c6DBc8eD5B1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x41ad8a568452e742a8c176A19D68D6eb313BaB9A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf4bc1F97bbd02dc53Ff9751809fd21240d8cFb20",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA4df199e327F160fD9d6f44B21c94030e785c89a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA5233af879845Bf71aCd54997f2Aa5D1dC28d2E2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x41FfBc4820E3Fcc53D113738fA40ae14091D76Ee",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x41B8698d4Ccc2b6dB8A29859038d9923E9Aa464f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x41AF04683Dc018A1cCd9ceE746737be52C1f6025",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA5D5810796719241a43030Df0092c96C437cBD81",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA60d2969687f52185367102D28e84DEc95E9eDF1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA6196254Cd668c9adCd3C3Ef95c5b79b0B40b15f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0510E0eeC4B6CFEE6FB70eE977Fd179D478594eA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA68d7C28a42Da40B66Eb50b2c87b3B6860f565f5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA69669c3A6eaeD6ed12F595D67102695e23c14d9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA6b89d826e1C6dc79CD01778879d2A6253aC8A47",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4132f021C01556f170e7d3B770ac525e7073b40C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA6fB318Ad0b5aa2a189466C31299229fE710F14d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x04FBF6B583ABd0C822DC44bB0D58D02afe44Cbf3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA730f38e5f376D51574bF791E02f9231c599a8f3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA7347BB4A29d22ADAa4c0d5ab7AE00C18D3463A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x40cA3F61635Ff6C0Cb8dFb1617F4A05A05E9Bd18",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA746B54be92169a65dE1beFbe549bBDea1E97C73",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA77A0a3b67b4a4602503A4eAE1F9e0758e126853",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x40b6c033CEf52d861f153b200845C9550ab5706b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x40DEDa94bF9320BB716C8B0d833d39b18b499dF9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x40AcCf778Fb09477BDA1043835fda1CB3df523DD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x409e7c4379b0dc2e68f961d9d600f3905a8be5f6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4070f381b0aeE9B41475e2BBC8aa7F4c6fb40788",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA83461394F44231D0890B43804A4c8Ef0c1032CD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA8604f2D7155BA69B4286D129dd419dc7D50a2e4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA8621b0F8aEAE2df42E59377e6A5040dc111A6f0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x40381504c19b975d81E01afad5C78Fa0aCE686EC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA86f2C4A203Dd03437E096FF8d2E382913015409",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x403756C0669783CC7eb9E929aeb881170B67DFB8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA888566D5B04149A575925487e207B5eF453d966",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x401986995E94556dee5a665089C1cbc0F7deca29",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA8dfcb1Ebe2DF9A615f550b10411a3143d7ba8fd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x400d84D6dA9104BdA7576c45f61FacF9CcFA4d2e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA91c870fDBEb7A3DFa2B3a9C2380F05Ac7c0dFAA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x400476e0597d37D7e2b8D62725d678D2e9c05470",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA93Ecda5d2E00FD25464f6E1E17866f1603E60d5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA957132d408631b735253dE8D761dE2e17737B85",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA95D6EB42E5d37Aa7592cb4320f3e790b1FEB941",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3fa5D61fD567893cE8Ee32046D7f31A7f1eB6D50",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA97Dc357A4eb79A392166351a14fB3416a6fF5d8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xA99C643081eCFe6c1d145bd58F396dc3792ead1a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3eeE7f36EA92a501bc7C5ddd2ED3CEF4A57FCfE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3eC2B2822D6e43E76078c762922ebF1a72035930",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3e7712371beB9Dc0F102c253A6539E6bd43c08Fe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3e20e4ac21837735a6fb8ac16db10b932facd80a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAA1b8a83762F937F63835e7755215bee4cd8d04D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3e1CEe95c11aFeE0366ff4cF8Bf3a2eEf7E9cEC7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAA5Fce2EA27b8F66731226b38e0624f144237015",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3df84e14827D9dE2381227b5857789366833494F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAB112Add0c54BFB373f460d16972Fd4688E5B5Be",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3ddfEc21B1D9C4f2be53507481a743155a926127",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3dd7AAccA7d9D31654c2e10850f726B1F887F369",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3d407B12298ae806743d543a9f663629BaB55cDD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x04Bd78F82F77188C4506588f1677eA2F4EBE88AD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xABb8Ba00c0884522606b03AAd235b79221dA6869",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xABe6aD4d079C9215Fa6e7E2212384f51be80AaBA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3cca55334806aA7D235A390ABC3da519e681ecf5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAC094b34295a5Ce28ba2E5a96fc9288344a57280",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0454C8c17e82636C6f552BEf614A75C1e008A60f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3cF9795d0f488724dDc2B7686B2d164dd0eFb9e5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3cAe40782c0f1F69A0B44dbc867Aa40e19d9B2f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3c816497f434A552D2637f231C5D2C42C1E5dB83",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xADAC879289c4B705782EfD1Ce581D8f8777049A3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xADb7f9f595209d809Bf833038119d790897D000e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAE1c825eC8fD25f117FFE8Ef6d3eAd6fcbc6469E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3c6F919006e8808FBAcaC2860b75399D38AC1d8a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAE435bCdaFeC40f75488ad9941F4d457017809F1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAE7107f61341AD90800F2eDa8d0D4A419FD5191A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAE881e1b716548D62368D7b8f5ED92B61Cd56d81",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAEAaA241D7477b0762eF2322ECa1a1aEE5575e90",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAEff4E589E2b8AcdAd13570d8C15B1f42B641C77",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3c64C73BeebC679277c5cAd470EccEc4F4EE25EB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3c5ae52b84Eb25695325A80FdFd7d97b7dB22820",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAF896611A01C98c04245A0a451222704d92B6d67",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3c581A58cbeCdeF3D6447c12486E2ce428F544a3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3c1ABdCcbCC9F3cB724D7401589fe4CD8E1a8313",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf5223ba24a964474d5809E754A2Ec1Dc777dBf40",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3be5dd03e658403fe4d9d76743104f19fc720174",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAa0a670b9D976d2A9104Ea1Fa5a3b0d16b5D814e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAa5271019c3AF08acEe5d811755431121502e0DD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAa9c512e942503B978B06d277F83faAC9f8cC8B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3bbd2E180bb94040Ba4233D13783aD67dBab76f8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3bD27B031D4bb60F22Ef3Ec7a472F6e4C3c5638F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAb286CdE5CA8787Fa5070F2274bbB5A27fccCB0F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b97e597B3A8C3f2eb4d343B84C2410D8c10CAC3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b8F10d31Ecf18C7972c970ffF6733B9f780B46E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAbA20fC7cD946A14eb1Cb11d2C8fD951b5C020aA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAc2B955aDd389b717658c80C6430d007e5bF20c2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b7eaE65D07a813Ac6bFa473F139c101DeDa76F4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b6A4091a265E5A43E15e1201952943c36BEeEF3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b5e498ea923daE14db78e3978844B3345279244",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0432Ae312f9885342097faDc27A8b2550922d609",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAdcc3C93714a830119Fc40b2c9F84699190Bdb38",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b5c667d3C57A96d49F6B07e77C96d7aC4a1599e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b4dAe3Ab03DE1Df229ea3CE14e15267B68400bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3b21Ae08943A27BD6336DC2b755EDcC0b0F4f77E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAf968fe753Eb6fF62cEb49867032ef4aB02FF473",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAfA7612d2Ba63DA205710bAa39430C2E227421e0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAfC6c77B5a282733804F97339065A8226eDc03c4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAfc96f429d0Ff6C2C0f7b9F841969188C528620b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3aD6969cFA16400F6d4CD630CB452A4279579bcA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xAff67984Edd53fcFCbDb5144556585E32bdD1f88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3aB1Caa7D8f2e5D1fb3CaBB0C7BCC87ABA1A0AA3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB04a8d66772C9a2ad274eb025E302aeDa54C4da8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB05582BcF79d5d481940b8E02A1c318066B25fB5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB056357895A96b363a259ea01da83A9F8925D34e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB05c78dC5AC4bD2dCe0EFCf3B8941C570dA15c1D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3a85264e1d37C331584e48018E54AeB04C4e9C9D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB0F9c94F843a7a41C280e99c75a6E6E438fc3439",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB0c4dAEf096D4272d9D45D2d6a25382e08CCEF57",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB121A31986916B913660478bf6AC270BEaF1b3f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB145963aA2c450e6077653fF5f4F722B5E980752",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB14f2caf515729B4677A3AdD1401A8846D2D9679",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB160EE764C10629418A759E73E34b8b0EFaFe42A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB16D995c97b38a968af115Ee400aECB0E3343aE5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3EeC215C180A48C41785f87FE527E0b4d94Eb7b9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB18835bCBb81ce6778b4d25DBe9C80F0CF9fFAbA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Ed6ddD53A2421092738b7067edC1336E0A54629",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB1DCd9a8715140ba4A10916D2B5100943F6Aa6d5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Eb9a3073652CF2D80fB40243D9FfF7B20989Af9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3EF00437cef5f47ffaF524b75BB669f19480EF62",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3EEe447D830Da7D857d693ce2BE8b06bae2AE201",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3ED19d6209920c731764c810ea2Fc85a95F5ECE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB227C798DBf41B4725d2f0a557A47003E0B63763",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB2525EEa3DF249a96227ffe0A3F165C8a2FD7a61",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB262862B1f64C072Ac40BFd33D43E4017a1D2028",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf54587d8B5CcDa81CA88A6f554174ec9352D192e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB2745da0749058734C3C37Fc20DAa04d8458f553",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB27F1799ABFB80EDB3735fD0B8758fEC0402dB69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x00000DD54FB46FaC0cE46C4990097E785792145B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3E72d4FEF140946bF968C3F27e67259ecCB3c48A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3E103c5D16aF5C95FF4c2890A9dFFFd4D8c23a9B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB2a84DB37503D73Eaf1A5137234438304B91C492",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0000088b98f3fEE5E68eb9dB27Bd58faC9Db21Bd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB2bFaf32936EBbc4bd244e32425b7c49763c472b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB2be49C6b64f4F956e6d9F6a0a59822c64D0a066",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB2e5fA709f982CcAef05a91938c9144581d4766a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3DE5c65Eb48CE09b3979ef26BBBd21b125695180",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3DB455a146ADbC180F40da4a1f67f1930a97Bade",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB3872CA7147b8C7f2088E77fD9dbf0D7b38DA2c7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3D6f8Da31Cbce7A983b72Ce437796Db2e2F9dd66",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB3DEaC9314F9d24575439d18dD12FFdDEFcF87b6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB3Fbe8904CcF28A11cee89049e0359B2Ea377778",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Cd88CDAe6C5DCae740825FAcD82f955551E815c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB4086334aa283E877C52BdDACaEEAEAAca539241",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB42cAB08fe64a53357fcB592BFC12c5829eB59FD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Cc03344A3Bffb0230c5FfEf3420c846cFBbc39c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB452aa174492BB3E60072cE3ebB4E3731B010F98",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Ca4869f65522Ee65E7ef0674F38C4d21CD3A9eF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf585B3CebD0038b5B6af35b7B3022979CC6e75Ae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB4806015d1Fe8F83aA4339D8D43c8367ad499d94",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB4933D9E79d1d29329eD742DEd1d99c388225539",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB49a07F134Ebd0f87B53f6187d082DE40346acc5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3C83644aDCFd01b12091571eE47c98b6b484b8Ae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB4d5498854B370c5F22a8559bd32fBD4540F783E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB501B994D2f33039b6c3C9767b8030f8B652A816",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03fE2fe9fF1BFFfDdEd88c77F68B803c1b37ae72",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB524E5Df9AA52F601BF449DF64a8A644BD018b7A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB53e68f29715879F9604265d15F451771bC15b0B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB553f412DB6cD3b0766253ec874148014f238aF5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB58976db377f01E36e4D93230B184C2b241e866E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB58A16b41078005FF0e9EBaD38fcAA8cC48a9E3D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf60E54aE6Ebf20D144DBCbF5e4D9955d8eA9AB67",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB5b2d1Acc1D3dE5d48e6Eb0e94994Fb62C55bf0D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB600BdD5160fdCb2731993f786380771167CF5B0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3C660a21077007701f1e5Cb183C83EebE41CAFf6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB63b87a97fA808DA92550BD09eA496e5a467e6D5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB648E209270bfd3950eE68Dd43c4FC7DAAb9ab74",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB64dB59B1497Fb11Dc3Ca958bE6C44C71008d0d7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Bd9d32b2CDB1477fa43200AD1fD3a3bB0835d9a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB669A94A680A33b31B598F10887ac78Ee6Dd00e8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3Bc5CC834B06Ba9B536FdBb96C800294dB97eb6d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3BbC6d2157F570dB15340664CbA52B20f02BD0Bf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3BCCe1F33a8804Ad7baB210bcc9E0E9B198308c7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3B7357123580D3647269Ed7c2f83C80cC744D341",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB721332E7d78739C9049f49448Bb319F9a872e47",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB782c399e6FAEbBC0Cd7472c21EC6c1d7C6a5e45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB79c27fD0F12c808F73346F159AA92BCBcBc2eF2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf628CdA5725F6c2Fe2548b2c613449253ce47aFA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB81E486E57807a55AF94A8fc49BD946E88adFBf8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB81EF5A6189DfCCA4943A5c1d9e352E656Ad1078",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB86A1ae46E5ab19F997E2E116A7184EA8A31832e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB8E7f96bdf6d2c12720E326127cD344C13cf5246",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB8EC95930D3C374cF6965a1d4106004796a2D29E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB8a14570a80682AE7b73D0F9F3C96651746bfBad",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3A3A566f6Da104cB6323391a6a2c7429f8573e1d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf63A7E70Cd172eB961d3169Db1c1ac44DD504010",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39fD1A259ef0E13531Ab2e2E963bB6c33566B81E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39f9E2a2d2188eC1A36D0F38248D2fc31B9eFd8e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB98c70A6cec66Cd8e31da56e22C5fE2835aC6AFd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB99ddc0c9ff6a2071aC67E434DDd59F0Ea3250F2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB9A1B42e39767E37242ac2BacB002822A651540B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xB9B20a33932De302564217c55391A39Af35d44a0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39f5053719258A1179C464e08B21FAc73f4C3164",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39f1834D8f58485018F3b0316c2Fc337618aba4F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBA12Af30bC05340DE359d7423f41635BAA773663",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBA2eDeCc5d90bba788c9824cb8fbAF8771A6e1F0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBA2fC2a6819095138C4a97b86D99dB29b0b4e1a8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39c240C11823ac15661EE2F799A6F79b16b7De4B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03d0e3280F76104bFF0e0c4852C7AC694B02AcEE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39b3a85df4Ba82C4b2caEAF1b5012C831cDfD0c2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBB06E4782EdC4A34F76560fCB2c8BAf075d2e4f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39abb33adb442AaB80dac6dc37dB2814816Df22c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39Fd575Dd1Cdc4A81D68DEDb6E8B289353B1693b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBBcc68e1Ff3025D76afD6e412D9Adfb5b3bF9eEc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBC0FC0b842B21D057f917d8029FE468988Bdecc4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBC889c3f5ffB67372388B36EdBAB3C2e21271167",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBC9BD9b0A0181977bddb836A2bF2D4DB21b0A6d7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39DDbF3D75A63424aB325a063f2e5350EB33783a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBCc7C066f0e775070A0663Eb1aa1590ec5AEf1AD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39D0fcd003803dFC87B363b3f1C816e8ac48632B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBCf286a27A56f0541f760DC610772A1D59029742",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x39ADa50066555A2de14eA4a0E2f53065249763c3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBDb7fd7C667a63C68D6a669DDF85232Ee4eF602D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3990B50E6aE84baD25922F93756B63771fC93273",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBDc5e2Ea07717F2B2d3A16B6573Bce24760d2b94",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBEAc97A93056f2D3eA61E77E33d85A68Dfaf5De5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3917FAfe783665e805B97b453A0177509D139bE2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBEdc07c3f62955C69A1ec5b08456fe92975bEf88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBF3147D891bFf4331795Ce7b919Ab06d9833699A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBF450e8613FEE6bB93489bf02079a2568ed7c28c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBF7bC1d23FA12944252b74328a37431aC7DD6092",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBF8DF0a910a15527C29Cdf0AE27C0602D4c466D9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3904A1d5bF01980c47359182310078888F78ac16",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x390268448e38e769efdb7dcbdc098801d1af468d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBFF43A46Ba8Cb7ddAD02CE57B58fCBDEbd8a1c42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBFd785bf0ECaA3d23907f67968e71406558BdF24",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBa1827bDFeda6C528cB8FD76b9dC26Ae3013F370",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03ECd9a40fE68be41C051Bf2Ba7d9F5dA79483c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBaE269846dbbcf85343F76D2733b87e8298D5ABd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x38c6aB7145424C78843a27153791ED96DAE4639f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBaFcfdcc038678EaD43822C0163075329d549CfC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBb467b7802140609bA63eCB3Bc25Dd1d5aa25280",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBb7a30adb2e985B072C172a66Ea7b7EB0CC4589c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBb97b70F9bd6C7cEDb0F47C6b93029fDa1f6364c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBbBe2cD4D190A0262cF0f762245DAbBCf112C4B8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBbD62C01b560485142A3b8127Fee3719F35E9976",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x38D2f2dc620454b1d579823a0446AD508c7023ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x389EacAF5d4741271E94D388f32859EA0D548b3a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x389658933ea3406d3b8D0D910AeB2ff72bF126cf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x38952Aa6A01b5B568027534Df95505a6474F3CF3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x388Aa57610f301E692037Afa29b7C11eBD035D63",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBc860d0C8B7eB75be8b5f4b0f050d14892d41AAE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03E0fFF985496A7C5303c0d842257783bEF8aA71",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3869F7f08d9645d0cE85886610074843eDE5cC95",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x385f8673Fc0D47273Df538c326027D4783abb9ac",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBd2FdCa3aFd690F4D3cebe4884231abd3BDE2f78",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3843F06A7B2979047430A51513E07431aE8af1Fb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3821FA2F5031B4D51d6776E8272D45D7A538BE7f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBd92013Aa5aC4A5C09E59d6E58B66b072B1DB1A0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBd99779F63db21cC8525A9B39D665620A973DD4C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x37e53e301da9F22132a10B7c0f7c24af4c9a810e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x37dE0F3284F2949D120400F69Df7b4742DD68d2C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03972392F849544eA54b981852C1aF91B96343B0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBf32C57298D3faE330695f8Bdb67E5519C1BB413",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x37ad6D9C88132ba090D2E7a6A0f19d40b4ac3232",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBfC523547c41E0e279fb4F6dD0e3B6c4d3a9ffBD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xBfCbff24a979E124c1a3973a4955212FFc9bE804",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC01BE05984b588EA5193009f24A8BBcfdA7e54F4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x37D33c4704e62Dce0Fc392FDf084904877432046",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC1041aA65DEeE9D2a70bd255d18783f55507eecc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC12D9227769E46f1B406b0D467f8EFB8a8823345",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x379CFE423B77348d597AF5e9C6c9B7f8748eD1B8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC1576aaDB79D50a8F48BF9f143392fd0150affec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC15d637d6B632cbaD8aCB9FCE46eb88389fEEB42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC16E124367cf79a5229Ef35102EB781F73Eea702",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x375C311E4eE71a14368Fd9be109eaf1A0133817d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC1902f0c328f8F094EC55173EC92dD8327901C4F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3748FDDC5100bC1cF866f1663bc8E9DC165D8450",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x373630966070425AFDbC60c22247C93c078C2e12",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC1c1dE6D6AE654AD79026ca3Cb93B7D09004d1Cc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3735C35FcC32E8360F162d1Bb94f92b04Fd1Ce69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x372b014981532CC7f9014f633600C5146F0ED89A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x370b4D6d5a9Cc19025C305584d4c0DE9A8834589",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC25560E513de24d927Fd1779fDCE848e3d1a9907",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x36f54D968AfD828Cd3b608CE8d970dD49A8FDDD8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x36dB47499d322EECE97B2964D54dFe94712c296F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC2d4BF98278c043b64224DAaC2e4b1C657195AC3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC36eACEe115E48f1d7C3fAb62F4F11A4F4d13eE3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC378b75fde0CAAF55298F5eB9C1e27262c816803",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC3A5e355576d65e26C983f0c6feB868cf87fE31e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC3A99c93a2ec0f3a8f93fc2e9858f38eD5514D17",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC3bbe9A4A2d5FcfFb09b737E6f434E89A0C7fA2B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x36d091393dcEcd628C52ED4F7B80674107D66Bfa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x36cb8eF5971E96be4c4E5adff07743901213A23f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4231732C7D4d081acaCF299C3c8b90071aFE325",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4427d42E387Eb02df635F31346a07ab51fb34eD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4539D382870529bda0B01c264F1a3E90675e331",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4610269eb0C5c51c334214606636Ac96E4bb246",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC487eEA8C9b0f7cCD5992A3080Abe6Decd92A64e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x36CEf69B20BC9aE7510219BDAEef1eA57Ac442Bc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x36C681A7E71ccD84CC4B4ccE8a014521Adeb5b41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC49b720E7C0b87756CaD4d39A9DC860E2CBaF9C5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4C3F12468E81f0CdB0AbFE2b1883df6dB8695cc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3673348670DE83fb61F65bF4eDA6270E92c41C60",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4E2ef64dff952C58d51e1BD14f5D97ad775F67a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4E7ed036c32a9f4e4D91a5bb37E631e2Af40542",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4a5e6aF915dE4ce899b9c5f25035D16AA37e44f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4dBaDfd8B61BA454bFDbfe33DE411CFfb3aebd8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf6F9E7B6BA0904DA29a19f83fAc119404fefc4c6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC4f5d5e890FCD86cAD72eF7E06D9Bb043BbaB267",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC5352eFf365260a640Fc237D2C22CCfeB68C44E6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC53C7691c56c493318F213CeA3Af315A2ed227B4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC57e633D37aA681DA419bC0f5f52c56c30067713",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC58c0C84411C264F8a1641ac2993c12C68F18c24",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3609a0107C4663c29Af9CB9803f824695Be6bC8D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC59ed8d82a49d16bEC0EdB3B1E4c2a75090cDc33",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x35E9c62F87140ca407793b8e99763708017983eE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x35CcBd6dbf092aD16A0A9B6515cf55A9f730568a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf6a158E018a78b9da8BB33e65975920e5f3F3135",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf706524685D8C12C86450f5000675eC2f9dc1376",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x357bf6676B80CB0bA329042De5cA7D2deb0E901D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC5c18257C6375b8C1bd59Cc8B4c404C0D3e27C4e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x356dA514d70F5b21CdE47c949CD14770A8795fFE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC60D719839d0c88eBa232AC9B3162dF761a9A15b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC60cc456A328090dad30F1842cF39e65c49B0752",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3560E1E66A8bE3a723acd725147D4818b5AB56e5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC616B8e810729673dd2496570dBDB8333850fbF2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC6359A4B27Ed6d45D08050Eb8A70950d4cf2cB58",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC6483690b41ae1BE8e87FBdd39214E900451c6F3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3557DdAab06e7A81a0204f4e9ADf871A45B7199C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x354A00E507d3935724b4531844a4593E7325b920",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3531ac1de9912B106c82E69a1576E2D5605B10Be",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x350ad000dd57d7769fb7717a6e3cdd964a144f7c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC68CB99DE9b20c4EEd21f865eb9f8A8a37ed724B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC69228632A84e6BFea40B5BF3Bfb9d0dd0c69dd5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC6A33C49aE85EB34dC8ec43b8eb4E0CdD0c4EAb9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC6D64Be275D68c2AbD8D17F5a09701ef4AED1356",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC6D84F70A9b667afB1Bc3bF0a10FB0F8aB45ae10",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC6D946fD8E759621B0E221e4F937f6B655124FD7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34fF51dB0306FC3db699ce854de87006B24bEdC3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34f652033Bb476587fE438Ac21dfc40f61B7a83b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC7203e19388204e492Bfc806CebEb3483319B410",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34c56Ca1B4A7bF38e3FD4B2ECD7c331dAa8065e7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC7473C0dC1d0838659f07179BF98854E915cd71a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34ac43DFdE3FFc34Eb6EF6a94F78bC736dFd8950",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC762cdC124e7260Fb97985eb53BbfD3Af1ab86e5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xff7B5460ca8f3B39E400718B0Fd375e30EB7FfC7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34DDf0755234EE2B664c0D78b5f8920FB43B7a3C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC7B4f54dB91438a598f46E5cAadF5879EAEDd680",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC7B6370aEAAd713B1B60078Ed0b63CcE8AB97Fec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34DC45F5c8794Cf4D8f750a1804d97cD221E7E46",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x349F91D6F09ed95d1b4a10D1d69B8c6ae4195344",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC7FbDF18BD5E6F24C0EA1aDFa0AF5AbC27b0F57C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC8267708fAdE57c37bc0b8bA95389b759766dF40",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3471deF301Cd743a1733202a801Fdcc2cc96795D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC838b10CB3E36107481Da69173AB8757AaC3c164",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC83a321A1f1B97708021854841BCa74Ed12eE1D7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC847238aA2050d9Ec58Bc0adCcC8a479C09BF51f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC867903A562c2d4a4CA9f2f3485981BC569354cA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x34586c0DeA994f36b157B4064E4acB008fc493DE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC89B2c377025C484F3a1f92ae5648a4Ce57E36C0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC89BFb42e62B979e0003B00Db0c2ebB513200a6e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3444549641f2Cb144778Cf3A692cF31041968a77",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC90989Ed630dBAB2e99FF731197821D505b52f22",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC928D57665b227064677aBfb556f9d191A9C1F30",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC93231ff9FC0615edd24b3c92F694298cEA7Cb70",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x343abb703f7719f5fa0a1f2e85bfaaff331ff344",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC9517F8CD4bd272437564c822740B009a969be8E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC96EA9687b48cc36c3CAf7532c3ab9C845ab07D3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC98AcBD9162d34369854c3544Bf2845D076fEf4F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x343Ac2269a683c4D540aA438208FB835dc9E1FB5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC9AFd12Ccc55Ed70e127Ba9ac9e16Ce51639e373",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC9DCA122a020cc1C52Cb39E02Ddde7a47EC211d2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x340c8B9559f891E9ea8D55b1be8935B81e24f4ec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x340AA240f9846a4312B0d37E63e350c7469d4e53",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf722Fd53EfDa404d0AC208B6A8b4478EC5E943B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x340682F768cE3791cE7040DF8Bf4638137aE372e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC9e92fb42447a3039c29a55bC18cE463F1B63301",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC9ee74B5A637cE6aB81F0599E2757fEa790d0cF7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xC9f1512037F23174705ce98A5465eA782522c346",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCA1bbb512759dE1bE41ab739151553AACFB5073C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCA3941DD5C5d2E0A601c940fc98cf97618C38579",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33d06198BFC5E3c996d558bc6c517239a20F6840",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCB2a09FF6dE3C3ef90B58814333Bb10463c46140",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33c81e88cDeE4BAd940ECeaDE1073764f2999718",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCB64913cE39EEFA1fD19540921C8d8d5a07C5063",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33F1B299268d6676Da175E2B81A56238bF5baAec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCB78E8Ec353AE28453000B810b7Ec4790008D099",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCBDFCCEAc8226Da876a4178DE2959C5948397eDa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33E61646F9DaFaB5204823Dbb05E3b953F0d603b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33A4104C961D9f1eeD6BD9d728cF158a8555E58d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCBc7E2e8c7A82f728E1EEb5A454bB8D5ca70146f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33945A282bda352B0BF225B59F64672A2E6ecd68",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03927ddc54c7846bdaf222049db8055dffeecd56",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3387df876528Ef205c358D8653D4644454FCEaeC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x336fb5736779C6Ac696F1F8884691c6a15Cf4b21",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCCFEe13a11D1a077fCd58b6AF478fEF034101ECA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCCa5da0AaaC39EFD4541D2A0fd3864736EbC08c6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCD106256A509a04E32C7823E1c5EB80EF795C44A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3342092e10287415B7FaDb769A44F52236D4c6DA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33351b889a92D8cc9A288228a3146843f7aF0a8c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCD8DCa9EC91AE53dE3f1A8e1540679FC2f3B9A6A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCDEF0b64359d76614d221b930A2a542DCb8d2A4A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCE24010cE1EB3Bdd705e71a1029A3d44845EF05e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCE2f309565D7EE5AC18F495d77e5C86030c5b047",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCEF4329621a7f42CF474D40C091e20B298468383",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x33166D2564783CA4e761122316c4354898174D6D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32f91cdaDA1D80062CbCb0B47D5351BE346788cC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCF83D1c1fFEdFa3E35209141ea9cC153A06F1597",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32e62884358E9650B2B0dd898840A83c91BF4B3B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32F028A567251cCecA44E42defa94A341734c009",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32E540886382CF040a744D106a73f03BBc73C42d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCFd48A11df42c2f717e108A1Fb03C22b8450985b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCa044Cb373492b18FDF840D4BcE7992A7Ba453C4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32DEb64BF4F7A73d36f8B57441c461643D24f5Cf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCa5Bf290128AD6C6e15a6D0A9De3Ca1CB37960d0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCa7F17AeC0aE234FF3264DB49D3FEA9Fc84d623F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCaB802Aadd17bEE0B3500e255450C4EDb3e263a5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x327bb9eD3B4903EA840152C8078D1E5146882803",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCb04D4fa7dDF951ee69e69B8Cfd51a8279e51507",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCb1c0E7f9dC7922f3b531824771852A51E08c8F3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCb2cC97ed82EB4d45e787fA0f0CeCf3A7a5d2754",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x324dc62DCbc0e0766A9DCE7e1fa913c177E8Ae45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x324F846114fD0490483C02Ec49588c0A2F2c9587",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCc8F5c34682F4DfC54609c4aDc84eE708903a032",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCc909E5301223E12a5B6D1523E1009a5F397D008",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCcf411BaDe1C01EbFD0403BA8583c8f4850dc063",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCd22291bA593E8402C9567Bc199Ed48c332Dbb76",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32418a16ee6777ADE581F3E91B34a18C5c22e87e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCd6c653FF9d56155a30A0C4b5Bc67C69388271B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32386a40Aff315BfA718F54F75A908737a6c6Ad3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCdD731bbebFC8A84735C40aCd20aED313a1941a5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCda374864FF97732540C60c58e4503A13573A4f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x32269695C15291F6DEc6aee9489AF817DA964999",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCe847edF28Bf397297c17CEa9186Edc0e08fe569",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCeCdCF76e355290Da397dCa2533Eb43531D5Ac6B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xCeD13E5264769b776879571F2BF4de227A0258f4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3225E03dCB17CE39C7a28E2361574B7AEe55C35a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3215b030D0BF8824C3122066F90669B122Fe09eB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD043211ac89De7aDe5e758f2B97224d5Cbb09194",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD043BE3759Dd3E46091560D68DE39c54B4Ff0c7D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD06440341ed00fa0B853f999cd74427C4616C8b7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31f97f59c3b4edAAA1C3e2B37fA7d745180e1DB5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD0906918d4bDf2D775F9911ecB95aEd3B012658A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31dc47bB7a90C0e8454b9Da4c76Bb2b05194D647",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31cCDe4a3f19f5Db87180b4456DC968501f2aEEe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31cC2cE240f181CE536C60aD8af8675628fd179f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD118F3de55d57E91B2b51f3Eba7a5154C258b729",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD1193C9041c43F184584e53A4A23595F63602E83",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD11a2cAe5067F784d65D4A4394b7e850eA2Bfa1F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD151459250E0Fa6374f910D03c61652815B72345",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31DcC609E16B76cf7233bE63139db4D3fD763cbb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD18330F98a2Ed7B5baC6b921d78a063450d8126b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x318b6035180a22Cd804ee4C6554E19F2a95A3515",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x318De3476b7D6663B3eD9a48390992B5eeadAB59",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD1f56497bB5a98F6CAF997A882a6A045F864D9Bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD2028726eb8E4D095280B931145b4bF6B9292596",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31737591F2EC62410eF2F346f4E8315c9A08C18E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf74a8BAd2f816B18d9fA8B37E4B6005C992Ab756",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD230a61Fcb9987EC587cbDee5F9D589fD758eFaa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31723660C15a3cB43d43c2b554222999C6181101",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x316FCFDD3818c67A5C1c2d625B286A1cAC15EC82",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD286d74eE6d8A09ffAAae60D47c9E8d940D7B276",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD28A07D617c59C688Fc58009c5B64e65A6e6A90b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD2C8C7709854c6f617666861EfF6f0BBa6993D44",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD2ac974e0044dDD08A673ca4b1434C77bB7C3489",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x315c60EcC53e0A48652b82D36bf1A5282F8bAd51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD318a37E211d71e48B8b9CBAD0FfF31fea49944e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x31259b8E6454AA87f216c0638Ef380B40cCcf331",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD36f072eaD89680A5D66E09C2A2bE9055445b9eE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD36fEC1491bCE1a8fA55E73C898AeD6Ed07E38d7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD39C75Bfaa21806c4c93b4d58199b7f558012320",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD3AB6db58099b4c4AFC945bd878e85970aBa832B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30f850CF287B5c4f26Ca89330A40793883819343",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30e834BAf81217ffcC67c518e7d40b437F3d667C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30e11d76264c827f6496d50f7c93EA5D650C51Ab",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD3d1C7559df45Dd0b2a628513bA979D184dd12be",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD40A2D300FaFF8eFd3d02D23fB4E805B00235c63",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD417E85c6500dDf7B3E7756DC88cEF8aa90c4559",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30b91ac8497532EE1EDe148995fF258f7cF2Baba",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD4466903b036Dfc908ac503ff4643b2d47E7552f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30E706B85BbDcd30BcB4592826917E1208e0B147",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD4756eEC90e2e56672ee4f29E6dd946D9f6EE886",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD49A377295023364A6D017a7a251a6f424542a69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD4A1a5B2e02EB1D1B30e0a9F067D56807B867464",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD4E493Cc5D0fdB0e1e8F53B5FF183F326d37baBe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x309C20b0C6c85B8e91a9662aD08a64b7f733fC34",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30964c67AbD44cc5c1a4B194a75a04fe59463eD9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x307F646f25140B25Fc08dEcA44C6037a64426677",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x307B735f323587509ed23a7D895fF4d2746E94ba",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD4f622D2c405196535DeD7B7dD2873Fc0d169011",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x30760C48576bf9d2Ba2b0742e6Af4E9aD6f4D15B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD526743321e62aB3748cD4bBB32bFC733b4215Ac",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD531990973d8a279173624907e3352f1642cbbdf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD546Abc67eF925aDbd09226FEaD67d0A36d9D7cb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD54CFa32E92349B049be83f30D010DaaF4688b51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD5565125227884C9AE8053ceBf0dFe16338E7aAF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x306809d090447cF2b06daE564635c8f7a4b2f0CC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD56EF4E3a6Dd71DA0705Bc98C01d94b65Cd0E471",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x3045703d944f4D2E75a6d07eD4BF0C1283772D36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD59755305c86F03f4b20d77203CF6464F99E36B6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2fD2950B0134BFE01281f2fc6966df89bA737bEF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2f9Ee1f526dfBa0Aa8b5fF9D8B9808BCaD32eF82",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD5d20eD89608825e3d2849F96649FD9076AA5245",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2f2a839E04858be9Aa740F3d1dB929C31C3251fB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD60E2aA6fdb25c7344A51faBD7f81FBC0A3339d1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD6119F2420f1C2Cd16A4103fEdC3C1067aC8b47A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2f208074d5E25c746B804Fd57C6E24Ad6c749571",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD62fC1AeD7993416097Ba4C77998D03FDC6237ad",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x038f3b28fA9A9C14297103577FE548896F2Bd44C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD662FaB27cc92c8B038168c6C17a6609bAe9A728",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2f1d4F99bca47859b0ce57B59391D631D1c1BB90",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD66a062FF1d980424EdB528a4e205acdc8599a78",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2eaA2A1923BD8f8C1D6B4d2e1cDAe2C9c7CeF680",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0368C5D8159c48181660DDEC7ABBc1218401724E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf7763Bf69afC7037954BB89faCCfAFbc5178A2CE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD6EfB4EA499277Be4757afb4EAcD603a6000e51d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2e78d3DfC10ED557bf87d2adBAe8d4dE26d69669",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03671A00f168C1468592994eA5bDd55966e34e1E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD713e04eDbbc1c977C7CA34b9e121F4C0c5AA2DB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf79F0D2497e3251C6596Fc33d396cAcD088935E4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD752b313E23Cba7d98080Ca57fC2d5C84A525652",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD761602198BDE762d0cF40E91480fD8fC69fd098",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2e4f9C1825a2f2bb6e1B357B58230826656a244a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD776fd1407F726980FBf6B770Cd7A13D23b992cC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf7B99d585dAD33C09735C4ad43e94b472Fb875A6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2e0F19A5200A7Ac77EB69552FE50279456D4d66f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD78fc070CD011417E3faa3AE58A4C8056415F984",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2d33CD12dcb2b5D5b1e6303BdEc84CE3fa2F6764",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03523F6cBeD523C5C274B0d6c6697812B39759AA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2d1Fe92D91112BB18583D3991Af0493b69f6Ef7E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD801bd7a1D74944e24A42ea3EDfd2b07fc1b803d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD822c1ad891fc3Db02bcBD01CAcBc9AC18f7de5F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2cf35FF76E82141e4f84aF3084B8A5803A47AC67",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2cc1A66EFCe2F91fb4697374279BAFD70dc1e985",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2cDFC8D781aE3c8bEd1E80254e15D84df3437431",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD8bC8f1D200d3f2e9351A3ff02818CC045f170c0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2c9cD5e9037E02ed805f08a71Acd85E3f8C2BD5a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2c6b2B48C94F1D4f55Df6eF5a833c3A14c7280E7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2c6C99746cC29189CedCf16F3d6ab4be4bd81613",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2c472e5546cEe18CF18e104e09987c3D5b176EE7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf7Ea93Bf0C74138Eda5c90e7cf6844c4bC786D3A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD944b37eBCD9083ef15a7C5253185419a5407AB1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2c0d1acf3853e4e067c930281464b7d0d85acc98",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD99536758DD7689735301b408D13Df7390E99E98",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2b818499944F4dc9ae9FF1805b30829a9F91ccA9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x034b20f26603d35605A4d7BB12Da03AE360Af941",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2b768521852DEBAD2152fe8C8f4b5e0E7B20211A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xD9cA5854E6ae389f0dc2a3d52226Ab94d1d92AC4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2b273BD716Bb17987779e75A877B6C67E795811C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDA44fA2fBB94a301957319a25C8ac2FF26565901",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2b198C003d8996Ee7B5743a7F52D61c1223B8BE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDA7A3AE5E591Af434fD642178c7274Ab848D1b8D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2b052FB5e05076C603c461c12Da98395E285cA78",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDB18a7f47c0402135566aCE8Ef21f62475469BFF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDB4116F013eE652B9B52b46aF81E24991C20965F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2aCe8017fDC38f732d915037230d5512F3052Ae6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDC1E8D428b9cd3117A48929e4A776724B4cfd021",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDC48BA5e34479a12BbDCbE4E6793eDC19877F634",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2aBDAF43F8daBe835f640d534677241d6A46c944",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDC50CDFF5eb3F88a64E7CB3AF740b5209D0c243e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2a8eF4a5df8d023F59a00bC2e2DF1032cAa58713",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDC613bc019477fAbE28432749A03243802dCf80E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDC6A4B70063d76EA590bd24379C4952077993796",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDCceBc63314a09ad3Ffb0dF3995CEe048498e154",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDCe2ed64B0f1A904474EAD6AA8dc28752f0dDD2E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2a8595B3bB27cb0E8d58410E903FF55855d1fCA0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2a65508aa3a01f830f3a71737475f09db92fc66e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDD634D2E04f018500EB3AE041EB41EE8fe9C3F6b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDD7b56d99Fa31f40bB5f6920ca481337C3D86B7C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDDA505064E4f6c8993cEE601E7B9621088Ed5C7D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2a1f7BA2BeE5ED649b852E61C6dFC6366ea1B633",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDDdc3f0f9BaA226cF8f738b7F657f2619740A4A5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2FF7418fB58edC35b76A9A597ecD656DeC33728d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2FA64e97e10836eFA72389Ee3702f31659305Cd9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDE8404334bD7F06faAf14351D8515d490937922A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDEBA907d1B8a7889cFeF5998F1b35679FDa13553",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDF17e92b3234b63655371Bf75Fcfd07bad289ddB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDF2592716620d51CD0184728e618F4FD952B0F3d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2F706f01f78b843AAB901BC71AbFbeDc27b2297C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDa6d4A2d27e09106775D7A0528233e7B126af136",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2F4e3E56314a4f1bb4F49Bf0D1477E05c38b44EF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDaEF77A35B9FAf76d9602Bd118e227d141ACddB3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2F47F55BCafc3489Fb8Ef88A3d072B670F2d048C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDb4FBcC71Eba757fF9A34646bE6D2bEe943d9C41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDb8c9D18BC5d00e4b6812b03b634CA72dBa6FE29",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2F339adaB9af612989Bb1D227D938464AaD9651d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDb99d24AD0aeFE7D9FcEf95999B258AD5D0FE42a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDbFed608505c090a0fE04dE9AC8DaCcCdc8089A0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2Ec05c4bbB505B8500BCC514ca2B458940B46Ce0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDc2ea9A27b7Ad61D85381E9bfe2516B19011269e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDc4c03Cd11B00625ec707D9681fc3b0eC2e102B8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDc6852eECB1e9B49E20756aAf7D3b48C15dbdBb0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDcFF804f860e7962db7C7F37d1AF70b3DE0Bcc1E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDcbD7a0781852a4061EDFaD1C9fb59250CBe7696",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDd0D4dc113069468AA47DC78BFfC5B8F036188ac",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2E91d307c5eFD8aF4DbD86ca1a5B6c7804699f59",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2E61Ae7cd58dE29a1a0C5f3E6D025A9883F0aAc9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDd6D6E27ddFD71AFEAA50f401bAa1E63Ed885A62",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2E3a1d2cCe3618F276CF6e5e3e8F2B3a81fCeA7c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2E314c170b423C1dC4a3692c65a7d67722802407",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDde338Eb7dBBc93a67BcF100c7C9f2354FDb0E21",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2E27891e70e63a6a9c738a91a7D28445b7698357",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2E21312486a54e4481b52CD37D4d5D397119a96b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2DBAC5604CB7ab4C28022138F14F9aD7d4A009d8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xDf8C57fe7F136CBbeAc21bC976c1126e02d39086",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x034295FDe2eFfF9f33cB444FA3A9B6889b5FDC21",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2D7EED83a8f8f1c4d700f519b365189696c9483A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2D132c6dF4186b616962b2BE80D335989236809d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2Cc646202653C2df9f61ce236b34c1f3E4AA8D17",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE00C6bdD6E6741564e053Fe06B36f8eC78368299",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x033BcB90F363C30691a14DDC21328BDfF7130C71",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE07df7101C75486D505Ee15B967B6C168677D608",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE0A744f7bEa16bb7891B8AAcc2D34A9F713AcE56",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE0B2AE4DE552D68B20DbdC80357d78766fE83D1d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE0C054A335D790663C863A7D1e36baEb9531Cb94",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE0F901a066d0F38b2c0feCD77DeE0e1F4C33b85f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE0a09b329D2b45fD9c8003bae67e91a0eB92e279",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2CE0b5F3B716E58A462C8E98003Fb034Fb4bbd00",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE11a025D7cCcCf0a864C1529F1005ff985BcC11b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE129494b2B0467fe80328201eF5c42a2D8c62394",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2CD9d6641b40FC512Ee49057dc4948666a2EB600",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE1442612771A25B1bFc13bce6f827aD4C75e6d88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE167F4db6f9cc42B2D34cE891a83BCa4813b56A4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE1687ac1011115Fc1268EB4D627e669b171B23dE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf83aa1B2023bFB2d175d73eB4a910c16b41F4e68",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE1dd5DEB87bCb9F12770a064CF0dc1F7024098e4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2CD8e116c3E9ceEb0C8A7f7b19A1C092a7Bd90ab",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0332dF30dfD8a2642818aFB83B86fDa422A6e3ad",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE20bD888071B07Ce1C48857034CB0f34A92e0E36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE2190e63B87477F081001c96b7c72022F9d9dd54",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2CC003fe49Ca9F93A3b3F028dc0F22fcaC4B0F8d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE2517C52c80Ef6742eF60eBAFfa14bF23C906eF6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C7f208d7178d54EAb7Dd1ae7B32221066f883E4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C7ec60a54108A7C8759e24b9432f759D45c5A31",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf858486cB61055DAdA05602E2bB7aD930Eb066d6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C73653267dA5A8531e9ef7C8D6628d3e954650b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE2Badb80BecB728C8BfD1F0bF2883AC4E4FFB105",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE2D8AEABA4a72255e3dD40B25b865B1901e3Ef40",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C72ED1706a70843c3e2E342EFe18DEb0Df9C59B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C6472873561422f6B38eF337335CBd1f717e2E0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C3c0172feD6De9Ee9204494B174Dc1E2c9955ec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE3711d1D545A5569F541B60C202dA318D97edF8D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xffA36c2ec3ED757eba7E4315289Bd85BEC3A5dfF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf895e77fe8249D72c5eae91F90eeE71648e5c27C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE3F9dB547A3e44a001D4B2c1910f6d0743827028",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2C328eE253BBdFdB51330602C792F0B36E38BE93",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2B78028923730e4a52FA179FD6C0DDB99231554d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2B7308Aa8De86363A3499c3e0584eab185c632aA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE46480622968997ae7f480FA2484811408464B92",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE48477f31117a03147E5f5d6371C40536CA6539D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf898Bf4001011b551DBA45FC7d45109EB0D6b002",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE4B1AfD60A085aEE5C3E61154609963A80AB7B60",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE4F86A73cE16b2fFC552E6be9C706c20aC33E504",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2B68Fa680914D9564092B2f793b119BEa6928B0E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE508030801cf6E1Ca1F67A65d280b741a60109fB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2B5Ae62C81F1AF04E3aF6b6B2E1b08aA7A821665",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE5210F4eE33CE8De83beD024139D778f3a5E9FCc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE52447C90e885576614a3dD88FFc69B56118eFA5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2Aa5F5e9612eAA214F31f4cb2A303958a2D097fb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE54D6690d7beccc5F4eDca8ca429a049c9a5721f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE5652B658A716Dde963595FDF5137Fd94fb5E5D2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE575F98473F1C373F1073e8cdD6DC6Fff863b08F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE581fE0CB202940fE141704C8072b565b303260A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE5867AACC652e7C20F854e1bC44FBeC1704933b1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE58935031F34509BCA51327A755A575054EB354D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2AB487dE3840559879668E3ED6AE49Ad4e65b669",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2AB2318C6F8c7Be1a39c0e33858354704B725c76",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf8B6fe9df54E9f557D5E81597Fc615FDb7F5d16a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf8b13CF32B67334382C51a7446Aa89E9d5450117",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE5c93d1BEb29a532BcEE95072df1b286179A8AFF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE5f7D95B2e2314Df4CaE0f0330adB7B4678f83E5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2A8F8Bbc456351427dE7d0750A6eb90EcAD8705E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE62F9E7203b5565cF52B1A4C571803436b5e526C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf8ff207732e8Ece421b49D7Bb652A6DA33DFCa25",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE655297Ec821B42054c6dd52Fd1634453813A7BA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2A893c13c897eed37Fc60242C0Dc840c5b703A9e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2A3F5D0790DBC511A2fe31B9FB01F4B315dA8945",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE7501a13EE9E93F40353c2cc304d3348EE1F5B41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE758DCF1C594e784045B7A8d05AC655f593e6B24",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE7913A916817414bCb94F1De3d1F9328C2cBbd51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2A03ab84345BB11ca533C3e91654E51734fa24Ab",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE7B158fC2DC79137d2fd32Ea9c106611D3cA35d7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE7E987f8348b924b5825B135C913A15F3b323A9a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE7e81DFC1bD0AD1B2C13626F0ed8f41f7371D0Ea",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x03280CCd218c0B09037e07eE854b30121FF64E95",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE82F55b02850146CcF600672FAc4c5E70FD0f5B5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE885486E219AaB33BdF78BC65ac9D965D771a57f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x29E80B2A0325E6c6eEA4bCD2e8dF0CF7b46063B9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE8C0Da989f78EBC60374047BAB3b767610aC4DAf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE8a930fa21479Dd7De3F2A28a50003741EB64B52",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x29AeF7433D7ED36Cc63E348D6AceA9A09BCEFf46",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x299Dd07657C3eCfFe8c69AEC2656211a1e57Cb55",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE96358D6593d265F2cbab195d6A8144c3BBE332c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x298ceDb70d392dA76A60c2AB04A6E9Fa077Fee38",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x29772B966B4386315c67309fD12ad712dD80993d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE98774175dCA8Dd069336CC7e649aCA7fA8b8f02",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2969bF78537A29969D3E0D1199EFccc8FCB4600d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE993101521b40bD644774DE6840aC04A919d76cc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x030986a3BEaB7fE27BFa012D25f2C0Ba287Fab99",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf95B3654209399e3fced91a04978eBe4cDE819dc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x29648A58B6F061535Da24cf71732193D57d4D4C8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xE9FFfe44149DB7995FcE24649871d35b1887D0f6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2949f5ec2781297aFBD1b6bd6Caac08df124d1dE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2947f37b1079046cbDcfCEA6ed9743158C671E52",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEAA080904cFb18be205aFbbdc75e9eE51F6394AD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x29166F72B67Cb5E935B616b3680deFCfbA2ABE14",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2906323304B57B157ABCCE9Bc5991EdD2625e180",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEAD4C5f07D7ec16Be04072C9B84fa62aa5f0557d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEBB23CeD946E0fe70f36d2e5689Df94aD559E144",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x28f4Fe873Dd5B35a5498fDEd2C343009442F5E9e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEBb80E15AA934DE0594AD8Ae6d7a6395649E53F2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEC1c122419d942eCf4A62D6C29f56F1A90F1B222",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xECE9A0fF5b78B3946a2606644fFB32Ed2eC80Cc7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x28F511250910F4243880E0F1bdBE6949fad50334",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x28B11F34FA929f85400Db1AC4660A72ca8F19731",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x289Dda586A750b136216130150451FcF63f6b09c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x28958d27389a993B59eb361b3336260680AAE4a7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x288d4c8d3f007a0fe6d9b60510948d292d85c10b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x28794dd0F9009a0C87a2A1b9C9429f3536f63E30",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x286a215b002D33350FabEEEe2Eb0A24D32F9550C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x286Db3685327Fb5B9Bd536e18B0c1394C8e97E80",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEF05EC027fD362f89df21EDe94885E87A3C6AE0b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEF12144AF33471970Da68dc6317DDF4460880e26",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEF42310Cd30D81a3687fFEe0fd518994Bf60b3B1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02ff3d7A4f6F63E6D0b9Ee7c70CC3548cefc6dDB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x285695009860f910f78401345ff353BA6d0cfE58",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2848BB909085a4A2f502bEDE166c944a5B0B87e4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEa95C46EDA5a54E7665753c7A7fe82379c518C41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEaBE220A17BFC5B7CCA293670dCD2BA5ae9b0314",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEaE3be9BfF9827A196e66A8fc5351201DeB226C3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEaFc4deF16B644bFF6d2618272c8fAF5F722704a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEaa04E04767b9628C917AD1F04d43d8A5fC6F56a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEabC77170A6bE8c75054dC85Cf32aFE2f42054eD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEb27f4A377f6d133aC6EBa7eeb4C45702DAc0604",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x284731944BBFeAc248E59b73278F2A05720d0e37",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEb67DeE5B4b16fb9e649b5ffDFF8d70A384Affa6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEb89bf3e22098B6Ca56dab5F08C379d203443696",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27e90DE7b484Db3ac82c308Eee44659b63f435cB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27F28CB331789236111a7772E5Dea038EA811E51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEc55496664Bc6c1B2e2AFaEb442423df488D1257",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEc5e3092122D4016D6BC0d7202711405CCCB06cf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEcCc956F4741fa511619b71dE4c175EdFbD95445",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEca4502f5A25BB60b003284153bE3dA1c6196c80",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27Cb19d57E61e82e509de1dE9b82Fe043E22f1F6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEd00dDCb0121e66242963aC70770fc5d6B9ABd84",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEd56c7857bA702733Cbc3Ed29Eb6b0ADa4b17274",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02e25BdDF5E78b9115b23c1bAA4bf8A6c4509cFD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27Be8254a2baB3cA604A0d8Ba2908079DF4B0996",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27BE936cA64D442D359Ad0D9341B268D18fCf451",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27B1404E1a2Fa72A4ffAbD1188c9543B3E1d7Bc8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEdb5f41DdB1E1652e010AD5b4487D23f94E6C4Ed",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEdf5aCf430206bd416Ce5ca219c2940a068877b3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEe0E8C8AaBefa6E9516E6e5C705F9f3197Bb6B1b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEe3D5519cf35bE9D7Af6e78a3d27050AAa67dFC7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEe792C4114922D8F13bd4a1E90b39219d775f38A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2783cd4e1181c06a08735cccaa9019a17f3d36d3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEe98De85f2a06934791Ae622517C2A73D8E49541",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x277c1d5d453cF4A2Bc3c18C611d9Cab08B900E7e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x277b54b9b8384d0e3DFc9f959b1835a3065844f9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xEf391463a92A419a7d7f63c9Da582E29bdf3E882",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27573dbD433Cb605d7347a2957B8E05275A554D7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF00114d36f316d2b693B50E7328153f0d30086E2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x273DF179c3b82f94fF95C6598bEc023B0717f8f6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2736F5B5f4bA9e33DCf17eD7F8dE8B22065570A5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf9Bb823a2eaA181ab89B79CEA6301274368999b4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF0715b4960690BAd3d51c65431D237d34cC35Bc1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x272C0AB52F9B5C3F6873bB6E10aAC2f7B2baC7Db",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x27216715697012678902ec6869714ac3bBc4e21B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2711Be1Ef103f67b2a595204B082ED7e168859c3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x270DB105603226BB99EF0e3d5aE031a1cb4bE113",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2708A437AbCda6D43463395B76B6A3Fb697324D7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x26fBbc21d49A86bCC774AAd042d9E1908B969768",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x26f6E67117dc936d7eFEc1DF8659D4A007313bd6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x26f1EB5d392f8Ce7A2c64b2493191D332a3b0235",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF1866BBCFA730D358b701e3DB733e17c9356aB6c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF189A26eDae829532e6Dcfd468bfE4621846AfCE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x26dfd95AF8EB677e906c0be73284786Dc0BEF8b8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF19d0C3a43D4488189e1c756Ba11fb7944736322",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF1B0F2091395c1Bd9b7318B723749BD2C20B7FC5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02Fd0bf97525958965e61b76fd45c381096Ff293",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF1db0B65388e58fdc3B1449b99d7bb824880ea17",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF209e2ff98b2cE9E6B181995749FA893d96D3Fff",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF2167eE45596b91c96CA716Be6A6f829De0788D5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF24E4c2CE987e6Cd942143809F6C1508AbD5118d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF25FE3901cCeDA208Da7f9D19F38abB30D5e7A2C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF29e4546338ed0df4f1e5e4987141F0291600A90",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF2A3FcfD6bFE0bd7b7F968dc26C52d2afd896737",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x26ACC510de4CBA45DE0de94C7CbB0682B75183fc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF3316943a76aF6ad498f1CF08e182a278a4B11CB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf9a0dd6575B941A872fF441F47F2Bec8C643FCF6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x26A69D1Fe652F357B66d9FC726218cE22814AD1A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2690F6250596f8a9a9C1c55365fCB957014b344d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF359e0d8961FE04eA16CA0C14D43edA00BD1a6a8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF3612c250823cA0957d35411eD9667Cc42382260",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x268c2b97527ab1269685d596657407ed51b018f5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xffF6331a88F085e97d26c95AD48a6C487C15A96D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x268F6F9EEd67A6e84179fc4052401e97f5D09e9c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x266144D330385e02eDca4c5119Fa3277AF233912",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2649423225053aC7053A468306b547c3d76f7996",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF4924B60b5216E4677ca4232bBb497A12bF8EC2D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x262fa366Ac2F1268Ada8146bc9F7B03A889e75BC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2617688326e1d9d098a6D267902AA0bf8d028eeA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x25cd90f11dE39cDfab9a2c981710eBE5856b21Fc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x25c8c7F17584FC81FD6eFfDcDe3287E38eC0Fd00",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x25bD86480689192354b6213451c96245aB3aF339",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x25b962b6aa8ad73447671383071C2050391447d9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x259cDf7222132E43Bb0a6354e79787d02Eb1aeEA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF57487348fAee86B6e4ea2EC035bDa2e051B5F55",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF578e491dd84060acF79F3c7A265F5d561Bb67Fc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x259276C2680072e69596801B47dfB42A464fe433",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2590AB265d1582Db3e6052aE2EFfB3A75c69b71C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF5fA977e09f73610ACFF7D1e7b5a0292d04d5705",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x25820412789B029851340174f3649aAa27Cc6ad5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x256c7Ab1C1a153ecD84aF733DDda8CC6763811Eb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x25357b80e98419691cDEE43F1F00E1f857C864f8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF63E12EE455db4047d9917D899D2f18BDaF3d35F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF667FA589Ab7f2cFef9288eBC42e80A494C44c1F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF6Ac1f3141d67086dC1cF7547d988744cd85D75e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2513D5aE5C55B5Dc65489E49dB530C90e8b425dA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2511B335B8eD3228d4FBD1F46AF2bD42852B8B27",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF721793440ADfB48B7218defd3CcfC673FD04840",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x250508543bbf274E9249eeb8920889b2eACce8AA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF727aBd7b050953123D7815Fc9c9bF3CDf7235DD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF76bd87dC5c5EbE7C16295a7Cf7c25C2eB7DAC4e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF76f50D086148046a5eBffaF8a4fbA5F92bdd5d9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf9f6894e034b2991abfedf5bc5f46119106fd766",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x24E63A55eE031BE1145C19dB57CAAcc3B57bc2a5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF82e12B6C468476C6a12314519519b9507a4D32A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF83d6E722ACEEAD5db7961A3539Ae66eF6215a0b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x24Cd782D556F50faFD0D0C1425F0f2C6b56cEAE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF8730dAfDb72234763FD2627174fb81a9463dfd5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x24C56e04726e4fDdf1b5B20e8f3570a1C6995CD5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF87988b0694d42d2B1b0A39a0496AA929D665063",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF889E70Cc5498Fe442c1d8D88DC200CA61F74a49",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x24C3e28420932cBDEF5cF9c811A346B3A369DC82",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF8c6ea1B04d0c3E8d3A01bE363AAcF59a3391092",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x248Ef0F1fdcdEE3346fF4735273ceEa4579239F8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2471f68aF59B2b9218DE0A307c722a2b95D73E5d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x244f93A75f217Ce41362e6b64b446a9319947f1a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF990BD2Beb0AE45E8407Ae29F584b582A3b01bE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xF9D4c22D2c18775A56BA0c7C21501E3C1862780A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFA0816F43ddbD13A0Ae7db8F06321B5e39894327",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFA55abd4bEc80ea750DBCE995F26F28320Ef635a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFA7eb19fD20a2eb7E2eD5CE3178d03a469c739BC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFA8DFC510f043fef7abCFA592183813F2DD9194C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFAFAb576B01125499AbcEF9F20e62586847fb1da",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x242a172eB9e5E7A1b7F0Dd735aFa730f6d41e1B5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFB13f2947A8cA6F6128AbbaC3195e939acc2b58a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02D965c306C96B2de1547f3DB98ff2Fe74Eee7d3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFB644cB5fe691505a6c02adFDF41C601c4F5DDC1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFBA00B8c354B71F604815bC4bB86e9891C3298ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFC267E4dD8f9CE082ef5A068c7Dc0a1eF019d4DF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02Ce1c88d4C93BE83d086f35430e477061Bc241f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x241EAAAa65a25b9DA4FeCF15a9A7c8789214EE38",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x23f6f51381a0d6ba6554442955d2567A34740e3B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x029aa2B28c43cf470A3969c638Dc557Eb01F7556",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x23a9B85c87A13472299e622685E0d37d19948Ce7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFCe56de4B5870FbEaAC10ac03382Ec17d6aF1a21",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFCe58957B4b5C98f1bC011633392F9bab96573fD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFD2E9a13DaBDFb1FAd4cbd5C5D899b5Acf7a83fd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFD40abd20BCcE8c598F2485354221be154e2186E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x23AE61aBf7532D80B55599AE0295749eC4C15a2B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x239C71dCF7dcC9375915aEa032f1be1907560c20",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x236418674d7f3015cB3166F5b4723209914a51b7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFE62B88E2b27ce708C7D0ebb5ACeA1dbC7935458",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFEBd52145d6865cA45c6E1e5E78a5350316f8d9A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFEE5B4B9d9c8f1dE9D9920061a4F81dB2Be923A2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFEF903811B19aeb976E886878214e554Fc6Dce7c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x22f4232813007dD4ffE6811b993A164962c13e70",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x22bD1decDEEd34d784A9718615F43a556997c0f0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFFE42790165143e6f14Fbd7A84c7B9b1663187a0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFFf0b028F0622C1aB5116587EEc5c96ef333abd8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFa272310EEb058625a997b35c9134F277d54a9F8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x22FF8723c0881c5dC07A716397CADe554C24Bd35",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFa711BeD07883D8afA379A5BCB31527eFC19feF6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x228AA85E05caF40c9e409909Ce24f1FC6a1499bA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFab05BF7c71805f69D5eB3F4ABd4b3B5007aB1d1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFad332352FDCED7BBe215986f28a8EcB10796fd5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFadf6E045fd9EF1f052c18338A7D48b85c37855C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFbB453a53810ed5DD476Bc18c3E37Dd4B4EbbCF8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFbCbF7956d95b0eCb749b08f13c318a2315969C0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFc52d268a315ea4BdAD9c5807C3b0A17Cc2C0Bef",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x225cED5A306ACa88757d39Fe3158CEF4c70faD88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2254Ed1fEbA2979fDBf5EEb05B3bCA41cF8F66B8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x22377626145C76EB8caabe55Bf865705DA3C07D8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2232220133a10Ea351a2134FE8BF4F27f0141848",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x222e63e8ea807F322B04752a971c3E1a8614ce43",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2223B0ed35300e1F81e7707fE40F12aFbb1Fbddd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2214364822c8559547f791b5e199d9fb0a0C65A8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFd5b5b62227264DE9e2F5e4D8a4A6c809c003Ce2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x22031619F677D49757Bd83261B3b5D7e47baD50C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFe523316209Af7C378f637ef223DF746eD5CE5c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x21f5FF3cDB47F457Fe77dC3Dec61F50D07291dB4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x21de2eEE063ed454FfBee4E1a3ae95D87F54FF0D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFeB9Cb2ef157D9c3357b7975E96F748d4f4faFd6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFefaee753aFC9db0046FdE8a8C17193a1D0e7073",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFf284BFB8d8a7a955F7C847e9996966d52992dF9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xFf4a9B09cB0E86be547765bF36A0039744ED43eF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x21d4e574f91c1396dB6aBeB2d66bd93c0ad23Be4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfAc8a31291bdac0d486d6b2A12732Ff780FF5737",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa03cAF619f8d70E67774ef38b077aC2AAe6741EB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa05e2C02455f3046C6366bAC52554c23204D80c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x21bbb930B03b49D9eC0284CDD50e2EC9eE0A3963",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x21A525F5BecC625A0b70E257b3be01C921EcdB9E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x219de1293725E95b1f82C1c42Ba79856c451D98d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa08ed5F69A28D8e5792cBB584C0c0473A8C8841d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa0eA321Aa95A2b2AD9Ba56B76f130193c5F1Def8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa0fDbd8205d6D858e2AF7504109960646748E9D5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x217F190408bB1D37DAC2927c34CdC754613F20c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa13717c551De6c24E0bf3d31b1a93E0AD1D1c399",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa14980C64815F9FE400672f2058ac2b6aA221efe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa15E67F27bbe9246D351938a7fc8450cB1D91B38",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x216d568563aC5275b9c9d0864322dF939F9c0021",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa182BC4Dc9882a2137e3BC604bBb421e624DaEb3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x216Bf612E8dF17d1e79eBC1E4DDFBd769501e75f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x215e3E825844b88fdED29DAdADcd81E7E1319AC5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x213CF4E9C715Ec4521ff2b1D7213CC66EF8472d4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x21305BFb5A90c4bBd93214Fe4D5bdFf759BB449A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20d4E77e93F510E860d70e59B188F39628b6135d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20d2ad05f6b445e4d4a85ea7e08203f23da7c3a9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20DC6e761aFF6aaCEA5Ec0c8f773C1df75D753d7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20C8e496AaD9AfdF0d5A9d02F8FD4EcEe66Cbf32",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa2B4D65C6C121DD723BBFEe94e0167913F89c774",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa34eF3D06006f0b5F13585b4bef11A3a01854fBA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20B32453391642Dba75b2f674998169d7859c15F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x209FA5eD4dD21061b4f0045AaE709D0E441dDFc1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa39f8aEA3814E4DA01E9746109a5BC243aa4d115",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa3D3af88361324CF3E37D73fbB954C499f358d5b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa3F1dF9884de1B2A2726B8c59F4241aEFb1965Ef",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa3aE425a743021640bf09214884Ca99Be5271707",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20709C490980749a42C9ea67d81D7fa960A846a6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2060b64af3f7c107f88f48aee3e609bd2f3ca4a4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa412083b6003B177EaF0c5a4d43601BDA94e2f19",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa416db3233Ad94Ad6c60E95271fA343632FcC4A4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa42618405098CB2298ebe2de74fc40b51E300D0B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02643992ce41A21De1A55080fe0D2632Ab66051b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa432bC71A65972B3c96FcB72B7eB48d5750A9FDc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa43722138a81E4B1CDCa6fD3C2779ec0e9b25f59",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa44624feBdDc797F414BBdf7D039A174219E4517",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa44669bfE4b2626cA9E81C75566F7B204D9aE558",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x205463989DBf6A3891189Ac612EE0AE198696d22",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x204E184bc12c6b1F06EBF7708c08d3F94Cf13764",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2046BFd787013cfAF4651A789319DF92cD069e57",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa4F9e609Bb839AA0318ca8D3006D67b11cD7c923",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x2034C3ED379d70bfB5623e3DC0d0e60089b40479",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x202c3B701c5a4305052CB391238ef8E91Ca729B4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x202AB25118D44175076cD0BA95cC96438334bd8e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x20279e88B6D2268f7e9001B31104b4bbE76Af2cC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa53Ca8C166ABa42485EDAFfEc849Ff0607c3eD73",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x025Ff3a4499b14F34ea6b907DdcF6aFf4F550f79",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa590545597D142D4E0784B7C3dAB0CFcD1ec28FA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x201376c426113b5EBc0a37B45b727b454f712E50",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1fE961bA72b7835fBf17268Ec4ED2c0EdEEFA664",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1fB868abB5634eEB7Ac4Db63135859da1E716fB3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa5b9E7C7aa20c74f45ccE1a04c48bE3cd3295988",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa6112F80B924d6e844150cd8E58017bbE7d2F3Aa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa6425C69b70060b66732C0998263062abD860D41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1f8Fb3FCF69D8145A20096Adaff2E1813FC97A2a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1efD4AE33D377B4d2d9138f93DCAe1F5f9C729dC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa66310a9c844Fbc188D6238aa6F5e2C7648f74D9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1eacD5587432933d29058373c0c8E222F8940FAf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1eF3D69dBFFcB3FC81213456194fe0A614D08d88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa7308149f6EAB1324c05E587567eB48C142e5558",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa738EdF02A714F773d16615f1633872CD21279d0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa7607D1D037611Baae7E2983ACD79dA231CdCa2f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa768a5B0eEB1034936a0871851e07b2AECD2026c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa76CEf1332EaD8AF915F162aec83A835D504B059",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa79a854e3685287160bCB58876B34647a8020425",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1eD90C95Ef3B632De16756d5c3aF1F44572EE9A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1e7ecAdFd6cEa34EDef8B3F2D67b7b6577B93681",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa7f036f59fC5A888FFdFE1F3f40341f2E3003a8c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa830D6A556B3927d07bfB1BB3B3a27b3D88c92ff",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1e6b8729f6d35262a9f36ad17E1E195391e5f8A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa859cc16730F2eD4fEa318FFbA543d44e27Cb107",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa85B907e4FC791c3f213c7F77DA6ECdB9126f6f3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa85aD852b6A0B718eA88d7577eaBD4b3F754FB7A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa873Fc4c3316DE711FD92206A4b2F614505Bf415",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfB5fE2037a79Cb11b626773ACbf0F7d15CF4A1b8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1e32c3f17acEb8B9647f99F50210324216599f42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa8ceFe16a89736A83682ceAD2f1e3432ccDD22b3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1e26B2391a38dD8D78381220BCa9B49548268eBe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa9b6329D26DEdA242485b15B9cAB883cf84E581f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1dfcc98EEe006C7784F80A8A9578dd882B903562",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xa9d66Ed174CAD10390e1Cf2Da1AE342bCE3fFC61",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaA2b8816C0973AcdB5378243dE68699afEF1B5AF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfB9Df9fF229BFD4C871c898596956013b851AC7A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaB11fbfc40FfA917d5AEE9d4e621004153168d4A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaB27F5800Ba3B200D67eA7aD98a628E7f738670B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1dE2EAe82f6FB94ae9DEEBE06eAd77ad1aC0154D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaB7Cad744D69987b0889B160926E0b38Fd048680",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1dAA5225EE20a259cBe590A7c64869ce01c0B6f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaC05BADBEb64e9d5ec021Bf2ACF58f24e2E6b146",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1d9F334dABEE9368F7b9dF8a40934329F0D23a1d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1d6F00D89eB24B1ADCD2C73BDb88CA6dcB9140A0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1d38dd1297a951e02924aBf49C49E635efBEC373",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaD0dd14fe04D26039371dA43835cBf20d02BC5a2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaD295ba141FF286cB2F620138a08fB5B12D6998B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaD47A3cB147653c351850558FD5889F8930E1A4a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1d29A08E714aeb6942fF264198Bc14B01774Ba98",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaE559870053027fCe678D60B1b3C9784DE23c535",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaE8bee6dD0b735dA1E87589E5B738B729CF11C8E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1cF45a19aE9d77dD1dd816139ACd3d5798FFD924",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaF461C6e26Ad28871Aa6e62d6854DD9510841b3d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaF6baef1e4D810E533Eb93149F8e9ADe074Cf4DC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1c5094A8a33B1f22c09de8a204a36e463De12319",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1c3a468f94e8b5d946eDA47387a75FCFEaa68D69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaF80acf8C6AA3d205cfC6cAA4129b0eb587Eba3D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1beB6B2D63579696d28B1c13F2197C1dFCF84413",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x024Fd8a5f2eFEB54645B5CBc1f4ad6afe5843820",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1be1a2349868D4077798755AB7912A26CC311f49",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1bFb52b4B7cBB186C48B9De1578067F2f6d66865",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfC28F9d18dF358F830A1b95EcE58de2431e3e9A9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaa41E764E7EB97EA7556eD604315d651BFEA4592",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1bE2A28e9e7d3968686a50a10F21b843658D3020",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1b9EE9A1F665aBC0C05812E8061F1Af0A46C3251",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xab29866B96BC543746aF21A91CB1D3362bf49CD7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1b92B0040c0A89B45ACc52EeDC7d089B7271b35b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xab9abf5D933475d6A9D3549B62f97bf7C1eaB080",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xabD1c312E0b4F097dDB7b00F2C490903B74c8653",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xac0F7252788F08a3325b889f2080d20F13330757",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xac2c6da04657BE21fAB6C4C85c83Cc317DEDceA3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1b48B64df8Fa24d4FAfC114188F71D3292fA4EBC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xacD2fa86b5e58291a29e6b40b8992078711Ea166",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xacEa7b19e10309f04d409914686DfD1E26770882",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfC44063D548Fa75c7b749CF272fBD64478B1e35B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1b2ad8a414F7011446F99Eed3B18C9e5419CC984",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1ab82f64AE53E7c0C4b41Fc9E5eaC6a2a5fA4403",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1aFB59530A202DBEa67A8f75e2f67a82f0f5042E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xadF1F099228465b258D63A6D7450d276c9e8A49C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x02453588C81d9DA672302b8CD828E46e3eeBD9A1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1aD14489B2B829de1e9f323CB91F08f8026FAE70",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xae4aA222A899859127e1c44123D8440f6C49aFd0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xae55F1EC5fa5A1160b88A10f826Ef80E9A961f24",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xae712C88F5CF7A638b4b967Ae6b4eEd9b2FAF859",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1a958e1F37cbcCd2465e374Fa34633e1e741DC4E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1a5A7F062728D4baDD7a644DBbaEaE62413f2619",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1a57B6Ef23e1Bd12348d034bD5883899A47060DA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1a2741DF6140D1F64C22fcB0A3e477193A97C0A6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaf6df8f1C330D6ef30Dfc52427989131A2f70d31",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xaf7e5b7d37D3436D40F54Cd6e9dae5A4C0e8AAE1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xafAed68a47f48B1582175454a56f35aB5Ef776A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1F4709bE84cCe1F70069399A6557D06C76783172",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb02Ea06325430dd3aacE56C5143D17d5f45FCF45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb02e349C0b8bFDc973667F88FcB6F2FA2f0ECD03",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1F2121CFCBE9428c01FaEbcD426e3a59B6d7875D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1Ef1ab93801F01dcD722695dcfB3b6Ab2a5f3961",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb0958737B4850b151F66122d5aF0D2C5450F095e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1EE1f0E4bAfAB52f212cAf494fa70B12F17d0BA0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb0F520531A00C37429fd192499c840407472a606",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb0cE355170ca7Cf69C20ec345D853DfC9f847f07",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb0d4BB72B12cc71C168645f828943B2F2288Dec7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1EE0c5Fd42C3d211CB4a57B3356156893B0e52a2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb1916Dc3713a5B88862004a43547573459BceEDC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb1940DEeB442057bC3F81ea278c960C58c631b83",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb1E3d9bcA0b677Cf6ef2C71A11c95DeFb8407D01",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1EB8CFd6Fd5454e651AB2dF62367d40C994a351C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1E939f818A5c200a5483a65D875C157C57766A05",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1E850a24510806490F95482ebd57770349D868A8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1E6874496f41d6Ba2d655dc7Dd69feB7708D4B15",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfC7289E4ed4830151eeF2F9Ef212836dc4c7ab45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb25acb69cC4f8a2d125242c3dF5dd348DBEc3214",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb27e5c2507e21063db9ec1a783e0aa5543326da7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb287159DB0265F867CC2843d239Fc4C6707E5e4b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1E67970634E4614C9c9A22fb1c5b9c40Be4615b9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb290D7126D4a6907Ec5f08249f5DE2Ae9664712a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1E5dFb8A4e61eebab59BC6AbDa1F42c5B71A9CAf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb2Ca00Ea19e98C1dE6F2Ff96b880b447F14A01D0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb2b87D15F638F3C1F3A85a0FfD64a1563f678bCd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1Db620e8e8fb68cBbE0C9bb9e4e124Fa5af7b5C9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb31E0f6D16e55F543c68Ab430695526B25E209D8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb3245aA56D00ec4A4715101538EA3E0fC3f7dDf2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1Da4B46926Fe31f31B9902AB2dC9768D21BAFB95",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1D6fC3615c610822baDf386ea8Fcb520eE81176D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb36Df36A8474B30B83D5a6f116aB04F91fDfA32F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1D2E286d08C020Cd3441783054E0Be9143Ac7463",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb38090CD35602e134A53C7ebBc187E87C8eaD424",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1D0B6BdE1Ee3B02145AeBdbDD9EC9dB18BeAE82a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb3E9CCF388464D1a9B46954c18b704Be3D2b18EF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb3EF3242C2776c0FB8d0126A0f9B83b5340de4Ad",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb3d202CF0caB72f70Ab9aFf670eE9E00D3CAb597",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb3dcb6B92dd2EF02f4674ebA70dC6E0231A3a8ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb3f6D5B4f34acCE1ea7A53507003064cbf7fC68a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb43C0c59e6EBb2722927ff2b4FB02F9a08340d86",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb43e0b20a1567EE5c31a4446dD52dE2b05F908c8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1CbA21215d35209e27b35D3F58bb3aC7860b67B9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1CDf427ECa0909fC1B1Ea2e25709fA76A29004e9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb4887126a53832fd8Bb75070fFe9DAec21ce788A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1C988084868E3E42949cc446f01855d7A6dA9434",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb4A0954ae6E717F3064F3C2a8E2954432B88c427",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1C73e694A3e545EFAcD4e6CB741FA2a9D39E4ed2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb4e870222D33bfB69a5087570cbC85d074c56Bbf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb4f1C75A4646ba919df48Eb5d43fCF391bBcf54A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1C6226623e3F81B3feba5ef330b176fd3baa7BB2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb537796985900bdE6C1C5164194858f7C670156B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfC88d9567a82067114085C50b111cd74D15D21bC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1Bde325806da8DBCc224BaC50357022573F04cB0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1Bb8F9D636348667a62230d9Ab490605EaAC1601",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1Ba575c0bA4F5F50C7cc0C7273EE081042789BE9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb5e375089825e208710c15152D3b77Ea6227675a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1B7707ff8Ad3b3778ebF78Ed9D2Ac283013473BD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1B76eb0ef7551EA1E3fa7b68515677D41AA2d68B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb60854bbee6CB4108be7952350e97D9530eE7be4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0241247c55e27076E35844ae5e02A2633b0C8d7c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1B54794CAc44E860865810EB31A10d7982FD0ea9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1B4f04fe05BDb412F24a28C7B46e1C42Cc2509B0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb6749098AAC75b0431c0873FA3e66b45A5934166",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb68a482f885F580E4AC8911a45ad006c008515Ab",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1B4A9368A4c5D9F79C40b6B9889f084dF53f1429",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1B11E487258F9139ec81eb159e602efF5F6E628a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7472bC7B906E228410bF9ca0D595a6dF3b86D30",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb79e7C011139547Fe1b7E8AdCAF2adDa85F666f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7BE056B3D790D223d4c4b06D5D6d2cDEF366335",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1A758FBE407130b4076080E115B0028078664Ae0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7DC638bDE4a9e375a7221bb76605e61d9D67F8e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7E98c47EDc482E56FE6D3667dd0bdDca379E90D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7a2f200684A547F664e04c53380D197281B9656",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7aA3a89A62D6648b81c639aA07873ad70093fBF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb7b3c2039805d9Dd7dA1486596a1624D7B3D0A9e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb813a5675641B15099722F8AD64e9392718c4935",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb82A16fC66D6F8a33F107872eCF1f2F327a277d4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1A5578e27e5AF9dcaa1CB0419dD9bCB968190424",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb8DfcE47419E279E8AA659A0bf53F0C03de3488B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb8E184A50ceDB69533A70f495AF03B6D00B46519",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1A16377F2639ABB5e1f3E0170B326a459a1f5d66",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb8Ff8F97eDe6dAD0042d48C88aeDE8C4B15BC028",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x023b30D9F0A1a4B464611C78ea24Efec97cC5c2A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb90aB34c7008c7c28A03c2E13390f03F5242a70f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb91cf6c369282d19AC68B8b9bD46a7386E4331E4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19fdE4f077c1b32DF090E9114e841e3C221a5427",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb930101959708f150fA901ba9163EE4D5629345f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb9627f582E664A66efc13e3AE1049E2A55252943",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19Ded71A412Bf5b0bf1AecC083CFfeC011661EC8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19D7902aFEF45B3FC9e7A32159469d8CfE772702",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb97e1432ECAf90Bec7a6C14734805ffd2985cCAF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0201b019f473Ad1967Dc8D150933c74604c8166A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb9DC5f5b15500bb0dfF235911a3A7435c8240B6D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19CdC55F268F35C9A9789F2E71f126401cbf158b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb9b3f9d9E115aC0C9Cd3E871Ce85162306640EA0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xb9efb9049b70B3094D6248b3c1D5257442E81036",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbA08405B4465f8B58B189Bd16D4d836fd6dcFDE6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbA3D35f234Ea06e47d68317FCAB6c8B34370e1ff",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19CC48Dcf9Ff925e5f3cC3F136EC778C7D9BA77A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbAdEf49466d6F1202a4D4e0D6eCA112E61E730Ef",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19AE64Cf203AE22334875f4425E4Cb27494AA364",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbB815a79aA24666301a85929380a3ea932f5E467",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x199ef900Ebd7E4eecc1Dc9912b2737c13065d1b7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbC051a29F0e49bF7c3B86A4fa9023a95dA339378",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbC3e902203c1821A47941A0bE65459FA7abcB69c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbC74dA07B6299bDE73Aeb39ce51cD6A44de10557",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbC999fa2640D0958A4d2AE00620C76cF91c3F441",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1989E69895e87843F0278feFA923FF4a277Dbc6a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1978eA047FFDEbD355d818B07816B6D8E46eB7FF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x196279ABeF4b2DB5331B46735215ef7f8f19704e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x194188d0A67325d8474E0B485b33f449EceAc517",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x193730f824027CfF189F8275Bd6c2332eB0508E1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbD36Bc77E0067f4655b5F2D401253324Ed84b7B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbDa0fCBD44861741d0cEC4DA4c708cf7A805E5B3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x19014bb892c250ADac6689ae2989311Cd0F5Dda9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x18ed83BB3623d286B1922830F6Fb94820C8cdd9d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbE9d9Dd09daB0d439d5A80Ab916e2E147515E2bB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbECBc25100058fc204e18b15a30AF33A03a32e51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x18c2d2dAFB0A6C62047B4D5D7A8B490319843DFA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x18b67Bbf55a1C4ad6b371078dD0Aa7F34Eaa5aCd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x18D0A4425e3b72F4BE5e5912E2802369e1aC28e0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x18Bba340648506BdE21372c2A684492aD81B61EB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbaAB002C4B5140994Caa3a346DB0A642D5878bfE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x186aD1878a36526dF292e0607d05c3b46D2551C0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbb2E5Ff454Ce75a7729e36cBf755aC34478BF611",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x186a1023AaEDAF4EBB82eC5e9E0A9be4c992F89b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbb8B74e222DfbBc5096491f687f05FFaee44dC5a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x18539BF5929A052F04AAEE7B8c48e4E2761309E1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x184Fe1e3523D3Bde8F170A7631615757617aD248",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbcbE8a4fd256F5c9230c40d35449b6ca750dAF9B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbcd1395B07059055b6D15d3698FABa9336F2839B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbd2C982B727F3Af26FDA93bD6b66dc8A865D93b4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbd2fa4f0a3Cf377d8B018C035Ce7e2A15553bCe7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbd41680Fc27779FA5Cb951d103ec4Cea1A44ADf9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbd93bB1327Cfd8EACbec803af5195AC356F0a522",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbdd67484fF11939EF22428eAdF7b170D6438Df9C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbde75358810946407048daCeb065743bF90d0533",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbdf74a6ef709b46bbaf62561099421d7df4e9421",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbe275F7C2449C5d17C96c5009C71cADA4ae7fCdd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbe44bbc3B6218d4F5B04AAE710E550c0BfC272c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1805077C296F00e5FB38c27cA0b12f8FBD1Bf6B6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbe7dbf7b148d96754f811d227d99dc79b9b2bb39",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbe8d0a253001bed6cf0d7a86e037c872ee55d4d7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbea213680e1104ba4C8beCe6d61cB4E376b03c83",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xffc7C5A794b5feAfCb0D89B61d7d7E0341d8cA43",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdEe25C89ba7928eefce823d05aa35a0170B8D1Bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74808928e5bf1A83A766835DD0f42d55aaC3aD08",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x633d5921523fE5778891caFA1784b49BC4EfE729",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74C954713133571Fb5567371B4312A2dB5ac5746",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74Ecd96d4e14f39e7e9550cC018F1B8F5548EAd7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74a6D6A83345B330d8e31298Eca9AA5Ed320C3BD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74b0abE60FAD32f493e0F0204b64Df22C870188E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x631B6a5c8b035C19Eb112610E3261c21F7D55416",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75245DbeDB80fDfDe0536FA8763300C8C54601bD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75502beD99b8a9Db05C6408c48DC796335509685",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x755a6C47eaa79f10B0226F2edeb16EFa5c347b0d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x63119ac10a15533cF6D0277b03701e3DD672ab78",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x756B293367f515b2d64AB0B1D6894137901B126E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x757959cf5E5D8998905EE390214A8D9F415D57a0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6310A9Fde48a414984457eE033B83291Bdf57768",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x630B4c28657FC2143B795B3F253f9FF040d84434",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x758fBCA82b490aC7f3B960a818E6536dC57A821e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x63015E8De96EA486157038Bb23b2fc85A5960649",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75E2DdfF5DEB5539a851f54e7Fa91dbB2C34F6fe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75E8cd97e5d62F07B9b3A4e4C2C6Ab8FeB2A532B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62fD21E11f95f6C76120897bF8D5a2E8d829fE58",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62ed993B8a6A4d125560ff6377219d7Ca7ecbe91",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75F3B6efeC18F443E9A7988762A82A94060F3B97",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75a2f00b62887c7d045FC13f24DD04fdc5de0e29",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75bC91477B24E7e9277c0B1B68a302144084894D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62d402496F2605721335ba20f2d2AA1510D824dE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x75ec822565e73a7BEf57eea02c8ca0d4DdEBb20d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x082061c5fBDeCF4Ccf2871de951Cf5c5aE47f64B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x081f09ed4c32e66eac8b5c1270f22cca1d2d869e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7612a7e2ac9B5652E9f5D50208bcF7f04911A722",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62cF57A28b73DA30f0BA719598d9437B140746fE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x763C8e3435D400EADC551608FC281C3A9a1B495D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x763D6B3e1201f44672513bfAD024A375f58024Dc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0819eacbf7602942d305814555aCD20aC96b9fD5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7650ab8623326aFbbB44d5DDb0ba0D6D92c3E144",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7656D247684b4B441eED371E70Ac9386e0108Aec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62F749182c2F023D5B8f8685d0CAC1471d2323Da",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62C0042ec0045156f2458c02daeacb91A5b24d81",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62Aa6F3e92546bA11a6b72844680A1b48Bd5A7EC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7660F329535C58C663d6C11F3B1Ea6337BA10fA8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x767c29f5864727A0DdDdE8b767A1164d09611fE5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7680715239b07B3B22E46B2248f137e02d86069E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x62A13ac8ca46b15fD1f8f7587385ab6dEC9CF599",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7693C10a1045071082881D16e5FAB658099778D1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x76B3ca2ec35676CB9C00cA9dfA169b47367F79ef",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x76D845841795883fDCd1c9044e940e4C9E802cC7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x625bcBE4430D68E007cB0A5E45882Bb4905E58FB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6234C35d6e618aaf9dB1919a2A0ccC963C20Ccc1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x621ADb9e89926F4553DaF68c403c20eb70B7982E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7720B9889b51fe1870d2F084568bf20A98f80411",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x620878C608FC9f8B52881c7a73172236C826f6CB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x61c19586c60DC1C6b0C0e1bA214a35a5F7800ccC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x61a90f28F513853EAE58904461A83bF75Bc93bf7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x61Ea60F54c177DF4b1B111d4542601eC561302f4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x773Df35b619c51B5855DA49f14AdBf2c8e54cEaa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x77594fAe7159ee913e87023C0c4569A3aC593f4d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x61D924B90bcE09907908569213bc272904131C36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x61589192aFe6f9dc7D750dc57087A481c850accb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x77709aCE0791aD5Cf6cc3924ADCCa8ac8EF4Ff66",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x77759202854c3A7142f7622C8581512942431f89",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x614CC44AB5DD4Ec7Ae4b1852875e6e3385E634c3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x777cef75fa5Dfc03b519c4087a4B4290516eAf39",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6123b58e543da9905bC0c6749c6278d6EA6A77dA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6117b208F81D81571B7CE831e765f4aF6A7CCea1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0809730a2E77776eA02618996ec4C67Cff65b56d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x610848b5fD076ee46e63c3f97bB6C21C21e4f5Ac",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7804b227Ffad846c393A8623e6b908a8EA5A2256",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x780A02cb2203F9D3bDb6da694447D45598F0B7f0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x60e1ad3835581D5623d805b5D25D3b0CA7786907",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x60c49C66588266F87eD022f2984bD75fC7492B2C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7829928487Ea46e4960Dc7b6515a04eD06F9226F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7836b3a3b2BdbDEa235332EE8959012c8226eeA4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x78614050dc7685bfB0c2219b74eAD1E3bc45a174",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeb9bcc6dbf9eb64acaf4d5309c328715fd8943f9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7867101b5725362e23260a6b68B1515b09145cB0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x60BC7A32Bc77f60fF9cC6786561Ce187fAE7FFF4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x786f3a3d6BB119a4837df7929d7A19B9fcB536f6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x60618a4f38801d2a3Cf9cD62588aC5B26D76A49E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x787aA1823a4b3Ec85FA2322390f5768a85dab857",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x605e57B3Ceb6e13c0380aaE97bcfb9dCe2c71eEF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7885Ac6e7fE640cf1762a44F94cb944Dc1D9bD7C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x605a8B94bC469B0eC4c683B8cb000A8Cc85350eD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x07de3a95694332226D4a9C5cFf7D77C7d2FaeB4f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7892F0Ca6c859E9a5c8643d07F435a6F7930fF89",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x78A38f87C9f7F5bAD2f81C57449eEe9603A1fe36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6021cD23d38136c9fc5C667ecd1655a139737858",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x78D8c0D1e9F76241455d70bEd06327f916Baaae4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x78E2580F7e48E9c9824ad07F466AA4837F553943",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6007a8af5B347fb562dB3670De240bFabFF66190",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5fd5715be7f6a68bbf8172d868fb23f672e1d65a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xec41da71395F8D53ecFf12379D1ea1e57fC4608D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f7D3d57Bce1dB94df55c2e474dAb704016Bbe3E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f6d1d1E6C6cd5b6b90bC9327cAc138325aDa580",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x78f739Ca888CD5a4b8cbE04fabfCC2f68F9dcD22",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f5c9328Eb63acd334e55DD947B0B6Ac7Bc5434C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f5F20c574a59603a20Bdbd59B70A2675D9D8d12",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x792C00849995C82f785EBD842CF9390cF0366BC0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f5Eb38cAb4820ae8c0C2f66B3eae12fCfee815C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7933fDe71f8B5A33B77536D18B210B40228f02f4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x793FAaCB91550EaDCf2dB83Ef4799574e8384E37",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x793d9a101dF12D45244382e2Ab12c48ceF3904fF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f311bcfECa33Ae935eA7c4D0BEF0d3C5BE00A86",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xecEE1C14E0b49042d30601362432620e61acBDfA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f2a1566F01eeE023B93010B2cD24d82AEFB24A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7986d1ae7e1E3B89dEceCE460c453Cf8d24309Ae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f18359Da16686188b1BCa38b05a01441Fad66cc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5f12b3add24F1A386867363d79788e3F11465d3D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x79Bcc5394bB2a6587887D7d97288711f772F0CE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x79a2A3174923DFE19414C1010f2cC16fdA28F4Ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x79c821393E3eF2caB7E77d2E91ab107f55aAD5f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x79c903ED388b665402b5D1A2114588d11EA1c02b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7A36f883c2264D603A2EaA4Bc3CfA2190A58659b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5edB03DC01FA14EFF9365256422267A0eACa3df8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7A698820e0B6404cA1e9c86f5c80c43C8b7A31BE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5e9bFD51115C4e7A0fd0aB783b7Fde033D971832",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5e79FC96084E847F93569969536fdE061946309C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5e687F8E9d24f72128e5D16401a4E172465fD903",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7A889AB4339B0BAF607AFB6af9432403143071a1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7A969a8Da66d98fAd71AC25164f9176e67070eAf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7AA7bd8b73e8Cda9E2Ad3fC6153DB308f6e5C391",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5e6832a181Fc51F59D53c9cCF75008D4515Df6c5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7B2CCb941C9E1389c60e478d4197a9ac1b4b824e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5db5cD7Ac66AE2BeA1E3DBfb6BEC82D7545E6229",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7B531fFC3069184B7Bf85FA1850CE3e8a5fDC26f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5dD8a9A900D2cB1a957B7ed7164eA70A515bAB6d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7B9ca9Ab4d68c8B1b93E81d7696d92D8d8266987",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7C03bB86E8B1F8D1bb83C0E8eEe5188E684f74F8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5dCb0354b4459E97169Ce3f44bDa6B732105bB01",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7C516600611B83D71DC8a2E1203Ed7f5360CB57e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7C5FB7EC20a0691Db510a34389ee7dD0877096c8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7C72Bf94293f22c55D21b54bD648C14F6DfC6551",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5dACf57D40979A7f4dEBe9EF04a3A6357F54895f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5d9e3E2eE2Dda8b026b01B75701Ec1A9957c080c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5d8f759dB019d3B5B828f594C46A865560392f55",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5d605F4F49f16b27ba363D091E7541f037a2C73f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7D3F38c9828Dd399A9ccc5AAF3531A5f769d66cE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7DAb1d1FF30ec9706565A7029d7d62C3946Fd7F8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5cf803B8a63DA1BF99C334A35914F1C4868D1B3C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7E129E3869f0e8fC3b9fAA1588669005b61E40F8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7E3700579A3E7B7c580Ed2F2A52DA8B1fD7BD837",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7E55896f3Bc564De7AeAe2066a29540d33ac79Ab",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7E68c019d001F2C43CEBADC88Eb9c3EDF492E4c3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5cf6019a768455A3f9CEfbD44891Fa89F7bDC8e3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5ca089225dD2760DBB4E0Eff484fcfC2191Fdc96",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5c97A19dAC7F1c1e699a07d06101a814F7033966",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5c96AeF83De0a4a6cD68C1bBEB1F2435aB323eaB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7EF59A2909Ca7a5Be4E3B97949EE699fE11e2e8f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7Ebc5Db4E8CB6A7a6c94B7cf4425461dc97487cd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7Ed85ca8A59c524413051255bf88bf8bC459278C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xed1B5847B8226Bf7b8d886733bB681d8023B30A3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7F1F73E3309f3251b2069087803D4e290e511533",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x002D13e0f7862e39a580db63A12843ac5d508D4E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5bDc4a9DD11dC2888D38b852E9D04A581265e7E2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5b98433A90cBf9Acd02E7d516004d48ff11FC685",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7F796D038Bcb37aA6Db7117528AA1af7f7Cf1C42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5b85739C92550F25E7Da0fB6d85B9bD936092a65",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7FDD581d92a750B6032B01b8Fb3376acd30372D3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xed7eFcf14900379fa7366FDa54d93ad8D1C7549C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x07d5dBcA85a06A5CEF23a179df7153bC6bEfc456",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7Fe066A1023638e9430FbcdB8f8DCd02dAc2Fd0E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7a1772F38B46Cdf2727523148BcC2d95871B2c6f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7a249ce114ab1F3E7576b2D43EbEE8bb36EdFfE0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7a51EC46Dcd391F3C96B7d7Ff37134765ffADE51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5b5a9A136dE39C3aAbB4D8db0702c4E920F031eC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7a78F17555b58Bf8A773e7A776baAD5bBed51fD0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5b51dA16c22d7bc2D0c441b244C2bDc37DEd0061",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7aedCd66d41C3B80Be8d54Bff7dADD12ce0527fC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5a91dA14F4A02e6b8Cf6e1a5EE432181f68fAdCE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5a62f59266dc732D94C801571294159758796E40",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7b3dbDCA0987409e21931327A5Fa0898b9592BE8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7b4918E9857360ec389a65cf5387355d4e28C7f8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7b5959B9bBB677D9C1145639C43296a6c3b94976",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7b88522DFb1A166c06b606eCb3ad2d9C6b7F053a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7bBb36c552FBa1F7fCC321a8c9550Cf2B1084aF1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5a4aA33c718269aaD45CeAbCeEfC3ddBbf5D9719",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7ba5Bab01657c87da2a11B881475E10544a6a51D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7bbED189A42aa37F5617846c97d3FD98ccA7866D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xedCa3A0A18fD03aEB85376971d7D31Fd30FE99C3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5Fd100D5110AE327EE0a64B6Eba4eddA74b6606d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5Fb3CAAB8796EBbfdA06940745b708B4b1e72514",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5FDD935C5eA2E8b5b7D97ebCFE435f42156385A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7c56D79b9A5332495565335606D2D617b41983F6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7c6878b66a2d4ae7E10044D817855166BAbC46fB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7c6a2f8aEEef7DB9e1243178AC5842286d060FE8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7cBC0F07BfAe95D89F22df891f1859FBE187d11e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7ca0C3119Db74A4FbF6b3E7C8b2f119393a70A04",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7ccba9c2dea316Ad8362ccaf7bea8ad1Ac10669a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7d2b639F090B3fA03D3b9a485e1413902cd74B07",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7d424dFecb0cF57Ad22fB68610e2cB958f52e6Dd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7d51b5F2D604574cbd09bfE7000F9535699425c6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7d7f249FFe00e6823300e6bD7e83745A95a84244",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5F7D2494D9A6eCE01821f810dcC48EF0F5A7213F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5F6E0AfF6F3b5C49018C02ebD5Bc4a25Bd239Fc1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7dE87dad39A13De021deb6Faa379d64F942EaE73",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7db543e6C70fd0e3972a47f25E69313FB584F48f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xede55422801d0B450208239192Cc99aa6d9508e0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7e01bA32445ba91B07826375d4337B3fe03101d4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7e30922dD59c67F1a6835C0e8Fb0fBc5835dbbD3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7e3BB4472cD4552016A0aD01AB1CCBd63ac328ac",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5F1b35A7eeA67C56DB9C2ca9Be12970e3d91Fb34",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7e6A172684157926462d84Fcf37440bE8eD6456A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5F16CcF893B71c0e45e96847Da84F8D545E64Da9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7e6e956708F8ed80759CaEe87CFF95B758a71d40",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7e8Cf45D49382581E8a5348f2f5d675c0E2911D5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5Ed591286aA5d96F62C51c716069d4fB4f3C0817",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7eC20d1417430b85fbB419E36Ca000028BFbA62c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5Eb0fa602867Bd936edBa5644a7a9ede3e00A554",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7f08175709b94DB20CAa01EB4e09F64d22Fd48D0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5Ea4533B5456C55953EAAbC03dFAAfd5284aF71C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7f24Ebe875f5fef2bBF9fe6F06Aa4cff0DBa308D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7f44fd392f730ddce565460f8b942ad7978cd3d0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5EF8c35FAF0151845fCa438eB2dE86d2E4895Ba5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x07E07dB16720544C4364FBD8DfF5Db4Dc9f3495c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5E5ffCfFD7ED3f312bcb28ae31927038b4898862",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5E5406155Ad62D50BA511014f39c08515d22cB7f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5E4cd650184805D2a8d4B3F73D2047930dF33f76",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7fff157da963e29c69497f4c8487f616e8233f38",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8003a8A1D6ADfA3894FB15c7A9064eAA800A988B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5E0Ee37FaCa7Ab36123988ca8742632DA6c86329",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5E0084f2c77bFb5Fe3fDfF7Ca21Dd6aeB82366E9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5Db5Bba976E2fB65d12b9B085A9d64Cf82D0809F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x803D37b29c5e48D4a842A29b9bc82e02a4057227",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5DB85C915aC667C70D82206C449e32Ec41813aAA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5D94dC580dA84D5B023F0b5296E511f154ad2947",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5D81238F3E133007c68a2996f5Ffae0D5b469882",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x07D588A8AE083e92f059041918E4B67C880A72b8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x807dd3e18e211e95dEc4038D8Efde5f493182EfE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5D7F55E4e91c349ac21fcbFc460D7ffBbAaF44F1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5D5E4A21809021fE5cb4858D8682515a248a3f23",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8095d013d3Cfe8BA6444Dd89a111f91F7671642a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5CB891D138D7EC09dC87206F86a9E2a7420b1FE2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xee843758F1c2d9413B3731EdAcb0Ffb68536De07",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x80a63FD10f96478db719e3FEd1bD1BAeb8e09837",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5C776e58b64A65032efC059C3d9cCec4064C9Dcc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x80bBe3b5Bc280a3E94d0B7606c3D0CeEB660B66A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x80f18D19ef47e7e3F8a45BfBE6EF95D84dfd57a3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5C150bE47DA0921D1486235d02f143698dE3f430",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8131a97A0b37eEa96429D1d3511327066CBE1AD5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81409697c3E37F261914Faa76B286d0325CF284d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5B9cB01768d6A27D4dB1e4797F42A26661A5280C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5B85C4aD1414b3691A5440DECF69FFD80F1F1002",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x817f80E721c4ccb90297C4410608b2670b46738A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5AD3524d3B040C3ee418b78E68608FA0245AAfeB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xee982098c53e13cfcaf4d6e77796ed226bb233e7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81C72dd7eA3B781fD3504B8FC29A5308acf2e452",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81EB024a5c8BA0cDd861819D51F1217CE734b462",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81a9f39af019aeb5b2fc5657450d0dcb5cec3bb6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81b26F7fd7fE136770708536Edc4B2aCfBa73845",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5A61D23DcB05165f1C941bbF177889Dc56E9153C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5A27F9093710ae3FD6DAC6495306a305A17b8D47",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81e05e3aC758228DE10034975dA9910989f7a9B5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x81e5cdE6bcB1F860512ae7F583B2F80Af638F9e9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5A06c42CCFA0107D8610097037A610ACE3CfF314",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x07D040F04173349114C0D19a835A01BCaFa298C9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfeAB82Bd71b1805DEB7Fd5acFfF222689f58B4f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8236889D273207Bc8868035f19facc358F6AC51e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x823Cc30B18569daCA552CAB5AD318EebE63755e8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x824347c3b6338e8D8E9D47e875Cbe215f765fcAf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82551317A2Be08170509D309191b85F084b27f7d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x59eF2B9032E4997de9d69eD50D4A415c4e3861bf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x59dD164FcB5068A6e6AcaC53B75246305af505D8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82699c6d426BFcf24a0CAE0A35dAaa55B973ef3F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x59Ae7b514b5d2F885eF515009F9954DA61d51d64",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x827D0ea2B16fB7dbA465243a77cE0C4596b73c45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x599f4Dcd618a118DB2A662d301bB09d0D41AaBF8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8291D8055eF0dc8BDBDA6B2A138c4F6c645Df293",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x829BA5BeC1dfDfDaE3EACBbA3486e2a3BFaCbC69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x829c6264c5b80446b5759bc7a12475737d53279f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82C74e22653Afd3fc685297BF2220c37EbEb57d4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82Cb8C00EE6f84444bFf344E673cE1885C6d2dc3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82E8E659ed59D78D39f5f2E588f70398F457dB1D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x599d9327d39dA9b733f43ce9b8D669a755093702",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5979CBd2C038C3588AdA6Bd310EA20DFDca13F75",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82cb3b1ebe27f74eb5635c90cbb160da346bccc5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x82cfDf4DA3C9822ED9a6918d8b59A62d86Fb637a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8314Dd281F6002CEcE7709C4357595228CF9c573",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8320E6BFA5ceC83F54f4e208E37B54d48f64C9da",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8323A54Fd18355f8786958c36e5A59451E856eEe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x83406820C933d83F66c631DB87507bae073211ed",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xef6258A276b63334F2d51A7A7Aa3E2F714b9ED1f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x83480613CD37Df1ED05F03f49bCd88F753A19E84",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8350d120626fB0362352154eaCB92A9136536259",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x593b94B8cbc65ce7DB2E9b76d581F9F33f0611Dc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8391Be7B089e64742F36E1AbbDe21F2cBEeb1399",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x839ac51b104F8e9215A3203B8355AB832d337c99",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x83A69021Df526C432a0d592Febf2D2B2Ac742Da1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x83C8c065d45174024fD6dd6D6028940E68DD7e30",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x83bD908de040401776EF5dac11D48b8E17617f3F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x83e5864D7da02c6C1b3C48192cfa3D15DfaFd850",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xefcB04821E10c4Caeb22d9F10B6893d5299be159",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x590Fb77A448A075e720632d093E0c66ec9e99Db0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x840a93382146916f31726Ac7C9155Aad046E4F8d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x84546c4078d146edf79d09b0dbd678eab919448d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x846e26BC011aA6045A1dDac2C22b89d5515CA8bE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x847541564Fd4917213b69C4DFBEBCfB926d4bb63",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8480B7D7E7b0F494653000f307876C701BC8eC6b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x848E5E994DC1FF0D52756023dA3a3917D8a79F8C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x58B84cc10aaB91E81f474439d3E4779fB1921132",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x58A4Af4f69D15B5Df15b6f51e930366990dA98f8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x079CA6F8E34090855dF69610857EcFAD59B41107",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x84A9BC8dEEE783033Be487ac6d0f33227b691F00",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x84B3Bdbf5caB99AB64ce4219eCfB8d914b680B86",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5897106E4D5f24F19B043185F3688Bae9711D051",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x84F2e4FD7Aa60F96a42C16C7B7B85C70F834C836",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x84f6BEf2278b14FDCd0e081387d3055782be5c2C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8508Fa4Eb70B8378C53fba6FF5C024C343e39b93",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5893Dd425A70E5307aC8B0442224cB67D8687112",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x854C50497B071bfa164fb693db8816C853a60942",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5871E84D3261805fCf271d8c264404d929170C6c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85810bd72e82545a192821fF11da81db515f18a2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85819a14413d680Da16370a4307C259b9b63AF86",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8595690f3a5C61109456aC24ac0A719312c0E41F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x585975eFb403cb1A500804B1E3b2101505E50101",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x584cA7F9920b2C820321F1B14133eD7E2bD55a2e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85D3Bd306D2258b886589c064459c7ba92077937",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85D5D72564c2b063F1B96C18912CDa204b2c0c1A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85bFc9b6f84e599987F0F1A13DE0FC2a47372296",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85dE59ACdf6822540275F04480d844F7D351dFB5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x85e74441da41c8fa51273779addc21a3ce927ef3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x582DaFA0B727dA4AEc160D5A4166A741C3897475",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf02F3B6533b685a9D3cd29DaC6B7787E88d58BE3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x86292595098B3d482cfD0db069Fc749150aDb8d6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5809AfDA23BA027f42B134df62Be203836da90ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf03c677D22822585aaAe2466f64dEaC72dB0888F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5805712E85755f643451b15cb453847D1ac9BfA8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57aA9a17Fff2cAA917c794f217bA4Fd773471e24",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x868b6617Cbf094BC65D4124Aaa7bc7afDE5f175e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x86AD71f80C570B0296B68ff202e7FB06a9964674",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf0477fe29cFf8cB5328c93Ed0a41554f959B91B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x86B4528e4570FDd323842F5E1Bd50158bf22DBe8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57B535bD355f1d29461f4E3f891884F470fbb8bC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57B23137f2eB8Fc72306FB6ec952267872e887B3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x86E2B6FFA76315f1458DF58D1545277981Ba8D72",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x578640d80e73eD3b5Cc0DdcA3162109D0b4B57b5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57847869948631368D3a556AA1fbdb257dAcbD2a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x578329E56681e8b78BC9CF03F94Af2Fc958e826a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x871C24dB081824299CA11062C80FcD8CcB2833BC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x871d3D222e6a5fa240A7Ab50E4930ED6E40A40cA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x871d9a5b3F22C12292bAbA88680C68bbACeD72f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x576aBe25eBb775fbBc7aD59c4785874E5b0735F3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x87313C6E10Ae3d674209Dec33A371a9956A61fD3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8735FA635bAd141323761d625812Aca306b4824b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x573c4c9D5A50680FcF5365A08B78db3508db6d16",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x571463e79e22423C6497545a2a8dE7288B8b12C7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x87669a2Ffb85ece9AAA212c5916d4633BA6f4015",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8768dc2663Cc6dc993D1eC4477E2BA7fBD5E0D50",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57122cD07f0d2f85071C5027fE0762749D24a111",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57047B296D3036f0161b970e530d5dEA7AC85d35",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x57035e7E67CD989317A09Fdf3EdA1f0411Ca61B1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56fe616DD572FB1592cEa4908ec7f70C86AAE6b5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x87e018C707C3cB31846DAD129ee1d60e236F0e19",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56eed5130c3dccE00Bd9d4665146d8dE8a2C8b8C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8812Bf1e28F8B89876599f2bE7e712481f0fd389",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x881b028AE570d8344f74A5e60cF069D0C8FB39f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x884919B06ad862d89A7660f5c3AD143AA702621C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56e5d31Dc21fBaEB4613Ac1d50c2667CDef7D075",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x885b84Fe4dBC466228a3009c27FA4b8cB6717904",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56c5344DA7D705041b612E18472798E4b49c2C09",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56F95b72398Fa339E028f4bD6DB7Df1E3ab8c905",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf07d8b4A5F5c6DCaB244aBB4064F3ca478715AE1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x887fB0f179496d9b106b2Ab340034B2853952BCB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8887d8073e3bA7a8a6fb6A830B9F5411a18A99b3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x888Bb848D67E6fa66Ef056Cc7463Bf641407B78D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x888C620C9E474f171ab65b10C3F97F7Fc03a14Ff",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56C1bEdDB74B5E1f760a91ABAa679a118576da76",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x88DD57bD41D47fdf4dBF5158F9B71aA879F33F27",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x88F472993206Db10D5AeD4A0aaF7C0a6Fe4f8fB2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x88e758D362f7F2BbB15F754B92ba139A8f8C5f28",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x568db2cBa3F2dAee3d97846A33503977FCBeA7e5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56854907FF4F58CA47013B2626F46b44280E31d3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8902202d133617098799219B60ead66b987aD355",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x566316a2Eee8Bcf9585FC490A1B7a63f4baC982f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x565b4ae257eD4a9D323A281E58B289e3FF280b3E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8939cab1D19b13f64fdC882eCbFE2239c6e04b07",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x894768b41Db35067867A1f796fFD96CA1fe7A4ec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf081874E681911EF9AaDB43045354D275d9B2e88",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x896B2C90fBaC64755f3DC8ab2616fddd95Bb8251",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x896C1DB82Dea94D785286D48Bb28C4dfE0a36aeb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x896b13255b4E97FEC68e254406dcfe89f73B444C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8978fd7AFA2D5e6CCfa1cF4bF74Ccbb7776aB4A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8982f25a5d5c8340d81de9498AEfCdCf56501F27",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x56525253015b1A77Ea28Feed64dED97436444Fbb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x899Be977cCC7B109F02d62Fa329C642CD8c86625",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x89A695F1095f7aee94ba711978B8fC589831909A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x89B84DD3c5F3eCa66BB179df2D586EB0f28444A2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x564C77aec3623014aD2684693a28d1c5c244e439",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55fD86130aD70187A0A7968A7Fbba96C9B40bFf2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55c436D129DA1F0CA8Da0b950a91Cc215A0b70E4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x89df9517cC2D6b0a9664DeD7745Ad96514c9175a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55C55997EC6f61DbB940b96DFC9c7B32335A1383",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55C3247c65c17F268225337A743a20426F7De022",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8A0AfE6f778c254e8281481345057381E46F2052",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55Bc716cbc1fA98698ee257e864AA805311F922b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5593F9eBB24DA31d13216960997a0a3A9b95b1Ee",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8A38620462be1974EAf70054afe9f80De1e8aAdC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55157517c7Adb43d2a789C37dc4eD4806eD13F09",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8A6a8f2F0155D1BdfbFeF55b570A6a5e604218f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x55107f171d9CdF82a2e3Ca066F284c412727a43E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8Ad3a938d5311807C21Db45f2ad62309CC9e801f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf086DCa5211bc946e622f48949460B9e80cBD1e4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x54cc99434202B3003f285143128F068FE6f9fEa4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x54Fd16ce293D5cFb661C8a113b17846f527f8345",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5489453Fe13043022a5a666dD3D2252097F6eA10",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8B9239F658F629603b65F823d6416EFd18fCb069",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x54791d0f6AF0666C5003af5f0eF37ad708945125",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x54679e12775915F076a3D3fB5a55C8d85502D3Bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x546385B8c62d1d4c8B6d5Fd624B0f223b6453292",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8Be02AE1cE11d4422D6c2C3ef626DA0fAa2d6960",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5446c711Af34858FE107Cf9E0959A4AaC9A9ad8f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x54432Aa4A208A6AAd30CA5501CdEE19505210906",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8C668b8Ac7e5BDf915645990cB8FAB66a0C03782",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8C85F4b81e6E43a81D4fF42E7BDfC8E4D34cB369",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8CCB29F2dec82c84D6791f1e938422209d0e194D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8CD791F202AAA6B4015923aB5649198981349B6F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8CF50C74Ba1d60055d74AE45ba8d906936B675fB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8Cb6C32Decda831384eAECf888c55EA93E6a7FD5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8CdE246a457754c75C84bd09663D5925cC024165",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8D023070a16593CCe689587f552ADEc1C45b7e6F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8D6896D5086D2a90a15e6D86124e3c125A81554a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8DA816C2339FBd6557f850C8ef5A97D8b8BC0960",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x073C28De6B017655bb555B0A9f6a6C9E0ffE563F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8DB68FCA100311e5100074029D7bBAFf59392c1D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x54163035152918cfa51d20dadf11c0bc14a9b7ca",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8DEE6a163CB3C02d7b5ee5975690df561aEA3ED4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8DF1Af9f7b832d9ED1A45f5E08bfaA8Bb6f1bAE5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x53F887102F3900da74b19c659FF5B74642758EfC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x53C513d127B5352C23B489ca09F7B1De9F0DC72c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8E3B6CB87FB3D122308A9E8dcD622A6Fa2359f13",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8E3f6E6581ca3C7Ae58123091e9c5A5a35685FEe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8E6bF68C8d2AB06565DBA6cEcA460bF3dCb2C6ce",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x53790F7015c86E84C49B856F749A1F4456e58c25",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8E83A806e1edB16Ea7Ec312e53960D319bD2386D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf0C4bB2B4fc3f5F9e018c451604C921510837fe8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8EDf91BA30bA50AA53ED4a70DfC7a90F36474E1F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x53600FC516990353238182977EEFB8dD821cDc94",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5343f0Caa5fA0d3Ab0f4698b4C771F97b24f95c4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8EFA25C25a069725ed6ba20122Af68327dBf8511",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8F4651d41F613Df5b0db83E0Fb9025b384B3677C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x534196b3b6C4c7C625ea4f1B87c70C0DF0b350c3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5314557Cba36fde8133e157Fe050719960d7c88E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf0Ce41Ff866b16E7956AE179abCb7BE21C1a1fc5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8F82e2739ea86D3E2eF14A86df1a19d11F9Cee41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5301d83b4239755C3dD42E98d7877c84B23749BD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf0D1671043dC6753163DE5d434f54b8092Ef0621",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x52e6105494597B8B425B5B6bbbdcc101776aA1E8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x52a8c1690621a050572824860ac7d69a48288a2f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x070161345CADB16102c5F86292e403CF3a0d8c46",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x52BCE4b607E454044cfFd68FD75808839F59C140",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x529414e119831c5700CF4CEdDd3d7a70b140af73",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8a0E6e7ED4360605b4F9cfc34b99011BadDAfbC5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5278272eB4F7ff2352087628E135a1740892a175",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x52564FFDB4b14E1735DB0F896AD912790795d710",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8a58428B5F7f576eE11fb4BCeab8bC10c2f2D791",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x524CDeBb9650e7Ca003f2662cf1c6F2993263E23",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x51E517d9E2dEc9AeE43117B1AD859c640475Aa33",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8ae0d2E37D435765E12bE3fF160Cd2660D356a62",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8ae186a2Fc2140ceCf6F2A9BEFb86a9ad6c4A2Ba",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x51Bd8A700912B4bEf6F2e2Db4EF9Aa5e2Ee0470d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf0aA2A2A13a832acfBe523A9bD0257B82B5D7074",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x518D04C74DC3980503F09651245970CFB920d588",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8b576554c715dD49b073eB64929A89df7d73eE48",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8b5cE44Cf4473166b6e4011C2e411Dbd76a88736",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8b6Dc32585904c2E70f0c10ea3EDcEEEcDBC8131",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8b81BF309225052478d119834ac3e215D2B9f5ae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8b845a21a3a8caA5CF6ee3320bf6e65a87BD73ef",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8b8817cC62606cd268c8386B790E4F9F8d73acAd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x517298c6304e4f1D641f1DBbAf016Ba813B7C6C8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x515ca4921d43952012c52ec44b17ef61b72519a3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x514d6Cb12Ae9b24988cd6a6f89D66DCAc89576C6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8bE6f2b4a04291C4Cd54d13340d40D30546D49F6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8bF1cF3F9FAfeBb57FD7F358286CE91bB47B16b9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8bb8811D912cf3413e6abABD26319b320FC5950E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8bc4f2Eded61256F660Ff985C609c115190d6A95",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8bfe9386f5CD4Aff5bE73a2ea0112d9078d75F42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x513414B2E36142e16aFccb9BD4d3618d06506391",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8c51b8cE7416e3623E8D98B447826698051D0782",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5125679b3D3D20bcE9a1C457Caa49bE00BAdF1Dd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5114217c5d9f1f0f66a43d0148cbd9c36720a191",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x510cD5281d91c74bC26C9Ca870f740409a6b8451",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8c928fEc6eF86E655d78699771F0b9217Fc678A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8c99eEFa7eE461f2C7ED23966966A268b027ED6F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8cB4c98ca1Bd21f0AE8D277fb6095FBB139C0F80",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x510F6957Ab95da29d42aB2b7C929f59988c38e1d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x50f2d8dA7f0349bE9de72FBbd1Bf1fC87E4A2B8b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8cCEB504563f944850c4C71640705b10FAA41514",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8cD02d29bB10245Fc103c095bDFCb859C84e8Ad2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x50a61b10bD339eEc87b7a3a3a5760aafDF258462",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8d420A990e7618C0FB2F01EF00ac603BFC7e052F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8d6c2D74a6F6e3C0CaAe2110A869E553a3d40c7f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8d73adbf4c1a408796230fe829fd2f6d6e30d955",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x50A1Cce14681a4244Afb42007F3c28c9aB7a0b48",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8dBaB84D4eBb13C38126EffCc6F8bf78c76AbD06",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8dD0A13DCf76007db6D9f756D4a26cdD37A84f0D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x508d3cb121F390eE0f14d8d60f906857E4ab3D8E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8da443a29E063d10a3330258c16230801EC2F1A0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8dd9E0E2e4b6e544a17DA018dB28826f24B061c4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x506C0bB9D3344AD9C3C151aC07D392E3e23A706e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8e22e7450B5810134F6Ba8819a974c5262218c03",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5043E40821b5f0aA0f81Aa7560f06B469DCa840f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8e3607577a2422aA34CF0684fDd9A3DE2139223C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8e4603D661Fb519cb41D2638B0A8855C5c2C0BB0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8e4d72136A1cCfd8BBB959c4693e6864E7f983E0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x501b137af9c76B8645d5918412c3B9Bf281B8007",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x5019C2B61ca7C0861A42e785E238dD3F64baAB45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x501769Ea932793b71Bfe28111D6D219658783a09",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4fafef05b0cd9403b5b7eb6e9b564a32da82f30e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8ee21F7b1466919F59bc43E7E70153Db1F376ead",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4fa3916Ce703Be6D412C33c75d575D2C90fd1d61",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8f5675A1EBE486064dD8fa47c7b807519796A37b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4f838B55bB361E25179A5Da16eE2ABE1E3BEc81f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8f8C6F1178C4a51C0511E466BC7B1ef8dD8f83eb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x8f9Dd500dAfDDFd02b5A0AD0CB49ac58507daA5F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4f06F0ac28a06A6B567BBc030FA9747A97B39607",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9001ebBf221Ca2B421139B03F6b703D573F872e2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9014664ec650605b978cb3A95b9cc2848273663d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90269A7A669cA05F5cf601FE2817fDc271b87A43",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4eb99BAf803D571aCc6b82b63f240dBd73886bBe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4e692c4f7337e17a933E4dC2c53436470De08D4e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x06fC047153a44844E3ccde85B1cf94b762d3422d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x903d776276d7Db8737eADB1b89ed2c7aBa0162bB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90457D2febD53031A9A9d84eCd69B2C19cf97eE5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x905aAE9e86065725D8D675546B211be5107f6918",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x906520a8c69844e3897d2beAc138dCB1d99e8048",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90658400E1244d34D57feDB6860ED7d06ab50BF8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90768fef278a8401E06502a6A048DF8c5cc022B4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x06e31A2119Cd35c6aDaDB597f46E1356d0B7175f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90899d597ba99242dCBaae6e40B06559dC915e24",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x908b3daADFf10F2A9Ab9d42421ABbF9DF770f91E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4e65617B8221cD671a7e441913aB4d725D4BC52f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4e4a3718E1E59EDfD6b174c39597b95d7b7e2c6e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4e0B9A9F37216b19D6094C69F3031C49EADfdb56",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90E29BD656Afb929Fc2CE5fA0F612Ba3962c1c6B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4dfaEBEC901bAec40e284b6af5c7d535720059cc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90d96e1b2d00D1B41124f1a03D40c1aA9d359B60",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x90ef37eD1e6C06a0efA2158e6CCA9722cdF0EaFc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4de0cdF333aDBB6cD0100489FF78DbDa223db31E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91053ae565c230f2c3059ddddac4e1602cd1d19c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4dc0Cb05db65B8d8eEaB00B323a0c8591369533F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x911216C41A3ccF895D1f7ACB43B1A46158BB9Ce4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9116ED0F7630ba5D2Dae92fb82acBfB57A9fB557",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x911AF3a9f9451A6De809070Fe77ed984755cA7B1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x911cB0123044029f921E939a14E7bd24b7193485",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91348237769387Dd242bAc50810c3E5cb77182bc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x913544b6019e413cb1B67fF40Ea35B24b1549191",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf148EBaB51478bb5C4a42759620d222796253092",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4db35911C6d6568A32039Ae2D25dD1C5789620e8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4dA7bCd8f16af7DCeE5388b9e1a521fb7777901f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4d9dF83dd2C7F7F774065013547F696b9535196c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x9193078D65f13bC811d09bA1eB3b5A94025F44F5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91Bad2264bD70eC070ba0b89cFac60F5C5347183",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91C3e8f87E42Da771d83b1aFeE787A3A3Ce35B4e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4d36573742d7C483D717dADeacb926727E23dDc3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91Fc404D6925F830b658A4aB8e91F3366807C7D8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91cAB4F43b0C190a91d701fF292150F290ea2DB3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91e52A06a28c2a2d19f1D33445b4072bf4392B99",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4d359053C6b3D40218ce3038B986fAd2b7BCD948",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4d03F600FF1c655168B4cd5eac939D502bF8014E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x91fF5D056Fd7e54a41b7f182ABcD4749121A45E4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xf14Ed8D8a03AD66d6108fC6d0C438Bf39457DC80",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x922aB70A07afAcea97f846942835E045266525A9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x923254bc89b5e69046aC48644b1C3301a428fd34",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x925eEbf7f40a46d6f2eE8F71cfc0A23D169A79D0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x927c84d6a970D4fF6d79990bAB8bDFefdc52A1FA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4c3b34B46242483C3144868D25fB100a5e239D43",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92916ec0bBE52BC58EC1ad2beF338A8fE7399708",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92A04cb311CC9429230200aA58eC70809986B8c1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4c0DbfF62A10e7F883ee197b549A6A55ED0Fb8bC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4bdbce118ca2a3cd0ce4ade2b6ecb20179894193",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92DE909A1EB21b8Ac8A0f5D9279D1bF343F008c3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4bbC73Bd0e5A0C6CBDf6798d476C3E90f83D82f0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4bb537278B36aD36dC5964c691Fb2b34aB410d94",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4b6A4Bdd293d433C1540B77bE903F5F0d529399e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92a12cA94F9144BE5FfCCa5A0a655a0Fa4289cfC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4b64d1B8073EA5488B2Dd6440702114280967Cc8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92ab7810eebB292220Ca238D1bD3415e0239d00C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x92ab7DCF8D397c86539E0CC87d84556D1e18244C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x4b6250b11136766ba6416A402D8B9D9E495373e7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x698396EDa0a9f287c6E5414aeCB9d40f8bc6DA1f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6D112596F1768F80cAe99399b4467D8569F6Cae0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6D368F0A27EC854E2Bb26E71Dd9b29aBdab7F4e8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6D6f8550218CBF0e28401192f29aEbcfD8637DDD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6D8184d23B1B0bF0072620a8333BC33529F75919",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6DBD1673B06D086FA9f89f6772e6515f60FCBed1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6981E5092C09536C28aDDeb7FfBF608050A31F17",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x695Dc9c7D4b247E25EbB815fEF8Ab71117E280C7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6E22cb553D7A0DA853E97f98Fe3ef12325621418",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6E397983b4dd1F46932065921e33192B3c670BE7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6946f8B0B68Db960A81f59902d6edC5e79d38a63",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6E5CA23b166c23f33E4cBeB640376520672cbB58",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6E63ff1501997679799f87915B58865fE72c29E1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6E6507EaCe60F0eC2dBC66319e3a8f03e4E232ce",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x693eEa80203C6015723776DAc845Ac4Ece32e379",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6Ee9c62D0e55293F9D590fb763a34761C6C83c41",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6Ef140cd775d9d068AEC21Ae1E4b388A8E276F01",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6F3f746bCAD7Aa745Af7851F2Db120268F15BD9A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x69190A435Eddd77b63D641203807bEA6b0151Cc9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6915acE13E14882722F4d290af5F81434db36A05",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6FE3B73a1981C707e9632407A77a247A54EC9Eb5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x68e594480fA00b8F6910e590a2CfD7bC71B01DEa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x68e263C4Aef96528F33d0d1351FF9f3DF079470C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6FbEc22f0065AcbA3481Bc7186A3491717de33B3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6a0f2ab57a7af157ba36c68652d249e503340c07",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x68dcd553346b8f7A4129531c7430108784C3b992",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6a25456CF29058ab97ab5446a4C380fA4d6bd3a0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6a3843a3e41BfF9df9a44ea7EA0468dd592A5A68",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x68c8680012FbBBB80785E0E8294B8E4fD5323305",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x68C3E2Ce6A9F1c3C079922d66B52D64D9eA30Cd3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6a73080DFE84d83b9942245f0E2a0587BDFe81AB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x688B8927C613d7202f64E9028f45c20E64b3bfAA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6867B1c9ea664bA3a68C1e6fD8522c774FCF3f7F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6a92B8D0d97b095E191d8b13640A7FFE4982efbd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x685Ae3b8DCb539ec8a7F9D5E04330ED2016cdED5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6852E018A17a82a58D8Dd4fa9f9C038Da48d134d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6aE7decE3fA57c16d88D6CE2C73125e5b00d78c9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08a3204d6a3fD537306301A855Dd5eadf5488e0d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6aca1Fa11dC100683b8DACAE3c69F7dBa911e3c8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x684fA44d025baa636Bd314C8442dB103b2d2fa5f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6b1513411935A140b3042bAF7fCc486f53966047",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x683F8796ef7aC7D2D3C87Fb47434B4cE325E3784",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6b603C57e1Fc81DA4B36305e5Dd6Bc3b932353d3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x680c863be2807f864FC23d1aa61985ab4c576a62",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6b8430273B4d529b0d46Fc255A39a704D3F0dabC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67f60fe087Ff49eB0E654Db183fc46b776845a13",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6bf59033003567C5f03154bcB903314dC2538c36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6c115E27f33786EBAEb1fdE5F6F3148b785E52CF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6c2e9Fef0D8E70611F300ea7c626452b52f7281B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67c248f0916E3fc99017C531A5B6dAd63e8e0C76",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6c591CA1E1F29729C50E08071eA0Df6227E9F6A4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67E08D5A8FEE1D80108b6DC949d7565fDbA039d6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67D2068da2e5EdDE0a22179dC2c42745dF9E688c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6c760f6e8d5b3d4e5831d55a5cdcf6f187d8d28a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6c8eE9a866b3265f6b2503381e10D10FeD862945",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6c9162b40DE48C2799Ac5F58EA2d14Dc690A69E9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6cC55294eFe60EEf548Dd74732bB290D6608c8fb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6cD51e11637e2CB1cD05D3a86AA4b39eFF6a7230",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6ce67602B9002fc007B90b0D541EDb6Fea26BE7b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6cfbA969A424baC0f18d1CA674f34B8B2907bb5f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67D148F2Cb4Bf4655e143E0B240211AB7DE58caB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67C871Fc641587D504e73B1330BE8f8a743aD4a3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6d87B0b5B055E86aD00A534F1c3d6b857Fc9d602",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67C020cef41a4e6cb6B373d19386D05122f045eF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67Abb71502b4C5C3dbB6A516DEe701E8016a4F42",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6779f994a10bBaBA41101B3639CE840ff28BAaa8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6db514D56a065f8174eb27c0Afc1145AcdE8F633",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6dbf86F5b0e36Bc896F62DB9932811f37F146D1c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6761048Cd78A801a307Eeb2EE2c9E1Bfc08985Fd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6e1031e5AB39b45099821A89e4Fe16667499eFf5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeEA7D3e984BF5F7E43559e4B4e6136BEcd67e1EC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x674fd80c87F5CEe7468d5B2c5867ECcd908E1b28",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67238bB14a450e50aB909aA6642520D0cfA3b465",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeEAA28b0d8DD38d1fC1a2aA059dD6B01028CE847",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6f2C8DdC2fa4CeB18695eA971A4D509CD7334991",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67069F541b37e700377F9054f8bFF9C61Ab80dCb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x67043E767F57b2BbF924d25B448e22e3329Dc1bE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x66e2d2b0e689C1C51023be2F89aE67194053D7F6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x66F08a6DEe0aF76215f4387CdEEB8F21F9983Fc1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6fF3f4C9c8aA64f494e64C10f87F03269B2feb72",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x66Ae54f58aF70216607B7011365aC807d4F192C6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6fbe601cA7BdEE32b82F5D8A7991Da130F9cb7fb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x669fE25520D632d898483bf7AACe2bD72769A19f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6684C8007483eaD1c9Bc570BE50eFD8182Bbf9b4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7001Afa348A9c7da7F0F65C20590Ff6D65d11694",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x667AE6D5b442F22d5da3A66cEc915F6CABE21312",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x667490Ac5bA91d8bEd862f453024Bf07e866e857",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7051cD9d20b049B472CFE46165517390A0a91709",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x70591b29Bd6dE266728267ecd7867A73B524cFd3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x705d457ea2d2b5e62a4f4dc6a76A15556006AA71",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeF371CfE48878302Be9494e57d2c9cB9031FB1f2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7067d211f9434094383287011f304Be342992672",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x66536EdD28B9C74036AfB2A976446e3e437F09bD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x70978aDe8cE653ffE60Fb2e78e5851eD60ddE8f4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08805f8cc56C46dfBB51675bA83a9f12789cc8D7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x70A7E69b4407c905D47BaE1a24155c9e023d8614",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6652fcaD329820ECCA82f1c994666F2E2c32f19D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeFb3Bae41AA5b9b76ed955e6Ea519fc2945Db0A4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x70a419Ce96709bB5ad02c03b912e53212590a373",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x66055A56Bd211fA1b9681a1f7E2Adc1e19683C0d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65ffEecF7a9eDc4Dd0a6536046c587D9784bE70b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x70df013a2e672e290fC6d4Bd754168e969f7798f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65bD851CdD803846a98B3168cce8D639A54c03C3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65F8c884A79c8Bd949bb7C0ea131B518278BE4c8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x710f1C6cb8819a304B3ebC96fAF323A3d0fB7cA3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65C311A6533d4146D718f82cDbf0BDa5FDd041a1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x713E4D95340950083AB85bffAA465b5351383773",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65Bae26F2349C20a48407f6723a5eF2Ee18eB992",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x715A26baDb71117a98cbbCF9d61E53549b2A8c00",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x715e5fD54B573154Db72181f8aBAB5744195440A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65B0d999fA69990dac4F2930d5D1Fdc3bA20507E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x659A26F98f74441c5d500FF04e5976653c15b498",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x716cf0bC5D85e6fC70604d661b50a841F540E935",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x65899D413258d6E4c53d964863B844d20a467605",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6544E8B7D9032826fDaBf8a5a0f0fb41Db3d95D2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x085D1064905D676DaCc9E8d31F05c8D183445bc6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x653B69D8Ae84B599ada793aCD235d688Aae07898",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64e77AFb88a811Bf469152C06B13fFCcbB0a0A1f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64b4922CCEa2289379760ee14A5ceA32297620B4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64D19CF8dE13d1697C16dc63750e646adc68A18B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64C8833C8056Aa65792f4e159e70926101dbF543",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64AEeeeB505cC46652Cf898ba616b2BCaEd7fdbc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x649Cf92AB27Ddfc98b0B69525cf38B155901c61c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x71d932a5EC0af5dFB90F93fd1ab50370E9646389",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7208bc007cb3719390aE4626ee4aB86d8183A2EE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x720F1EB88c44507F0aCDE7dafCDf35b49b69109d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64952a097006235e8B5AA5C2c5Cf01014f3bb68c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x721b3911bC09694c0157e334b86e0546ac04b5Fb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6477608f69b70EB4E35029AEf9f4D22cfF97C5b4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72367d571Ec26BC844178aA448362b67e3F74BC2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x646F2Ab70D0b15979301DafE79Fb58736a331A58",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x646897C199E07E4A2404a1659F5558d6B72d87Bd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72431eB2148e3abB883cDc48084E44CC55F0fE69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xea13eD3D9359290C3b34C6B1FC4c236b68DdeC37",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x725d2a801c867AF65FbF3Ae089Ef573514A9A76B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72649Ae8c81c4ce324A0976f06F17aa9Ef5EdB1f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72688589F612262740b4143c509Bb8E6ccDb804d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7284B9F83D70Ddc2B970946958b400bD48C52c79",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6449E6B3f9Fc0E4337Cc4601006BF8e3E0A0CF65",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x729a5671EaF288A20CDafDa2727Bbb20e2Bc0908",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72A4eAFb78eD2Df60D37fB9B4E719a0b90E0293e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6447E90e4b40959752Aa26A62D3155A71Ae288d0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72c4A933f51cc6Ed40aA2b464006249c322410e8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72d4E412500E09031Aab7f926a5d2011d1fb06ec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72e9a30bfB1e02ae66b6862687357B869Af6FBC8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x72f255F8971308B67b9B9827526E6E0c2e63aA45",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x730dD349EE482cCf29280B490aFA6E435407b0bF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x731ceA14bB1995131E0511770829160607916eDC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x64445D34Cd9eD4943E7199967FAE4344c90bc092",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x643B9f83Ca0eE27Ba57189709881724b6b3Bd334",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x63a4115Bf2BB0F4D7A74453b4f773B79bE7F1BC9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7384f2ec73C41726864115Fa478e0f9E18aCc113",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73869e1C8a9715A7Ff9fceaed9eD82C6C20c8BAe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6391751ca7fB36E3D5032fdf3A7d47581874e127",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x638c87C712b2652d1b7Ce7Ebadb645ac22166BbA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73C3a98955eC3c3ac9c7CC7c1f25aB2773AD6F48",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73Cf2B2eb72a243602E9dcdA9efeC6473e5C1741",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73F3e82248C94Cb2509cCDd0269AA12d55d8EDF8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73b80bF52fD804c1E83a2468bE232D8740B6aCAb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x637e2F229Cf3bB91C20AE263BE08f696874c795a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73e2f5f4CF210e0b1583cF348A30CE07B7BDFfDC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73e3dCDdcA83e575A46fC4a5379fFD4478Fbd706",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x73f36374e4cB0d6c57209aeCE67A49025a385ce5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x636DAAbF31485858D58fae14f5578ceBA9eEF6Ff",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74053d136a0224accBd11Ee675cAdCC9c40996C0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x634ba47a90Ca3ec79c280F144C5Ab844f1DA2045",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x74357E8d465ad0878b9e5A81883F39eBa047B0BA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x7436C8dFB5d53f8414fAB6cE4c8e14ff9003291c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08214a59F962C55fF6c89d4F27154CAC28c59A87",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x743b091203a0fcE407fEbbE13c63b2De87Db7bF3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x744ac747c2a951E80EdDa4f1851622D52F44d9F9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x745bA433Ca56D0B4EB633007C4E36E291290351F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x633d86802F5050fEF5bCDcA2e7F65C0D7232135D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbeeD5288F39a00D0B4E8f5735785DD09114144D6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbf05fd3f1e7bb997c1e710d69ff8c81dde2ab785",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbf116D6ab2481B3E1D5894166c49ac6Da25afCFf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x17FA8B6bd7eF3BE9DD76A72E5f6FE6E6A2Df0716",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbf401849429fe8438C3017A6E076D9fFBdC5e4Ee",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbf4597b7Da13Ee50cb893A4476C08b2157d3CEd0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbf51dffB410593A5A13741816Ae493ccD204ADC5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbf5Bb5A8647035044DA33c7DE437e4660669e1D9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfD75011f5a6eA515AD0010371271a0b9A25af291",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbfFcb1A341d2bfC1D9BaeCBaef024B4459b6c24e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbfd2d2362d648bb03bd0845cb8d0c12d1e92c165",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xbffE26fF8dC3C3154E6b0E5fA0Bc9350F1c36094",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x17F4dEFA80659d5E70e663e204A7bC79f3Ce4890",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x17D83B63795dbbC8BEF1D0E039E9dfcB1658Cc65",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x179aF02A46109A66A4A6cd8B4a2CB64824F11F0B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1794a46B00fEc1e5a263aF13a0ca8b89A43cec35",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc07a30Df728DdfC7005F897d39c08BF9158f587F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x177E19642D05b634446e7862a010189d0d5c134F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc0B6F866AC6C51E754e6dc086E538b05674040Cf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1771B37608DF4c8c6c879608bd3c1f0F24653Bc6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x01cDF9bC61d29fC1A23e1E0Ec6D82585640f7a19",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc0aE45D8B3584a9053955DD28aE34c5271041343",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfD7E596D3E589C9BFE98B06588398A00D0182277",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x01C0BC6832Fd2020a32f4CB5cF95e99e340e20cf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x175D20A552aB9Dc4E937b7736A8741157D08fFB0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x17407dEe22c95B9C8Ac450E713BC407D73f94b9f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x17235bd51DD58d57408a197939C3204F81759Ae1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc139659Cc0EdC8E230c8c853289586E2879Aff70",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc146827d55e13d17f83874c8F1587F02D0e5C48E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0186F31478625A52278378fa481f0774df9Fcd39",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x17189817d7Dd85F70B0449AdC4dd7112fB8A4063",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1714EFbCA1Bec557eF608907456620dF62090E34",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x16cad24a8949e6810ac8c28e0c72cab387fb9235",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc1C40E635B83eCC2A734912fdCcae0d072d76181",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc1bF45451c9fbA8792E639e5d7EB9E12Ff800adF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x016Af6A6369e5d7d7571a8eFB56aD5f55e7824ea",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc21Aba25F0fC8686978Bf48916a15a5FBb837030",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1695F0c356e16c32C8D0dECDEbFc93Cbb6a54F14",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc2Af98Ed6421eE77A65557530F80d8aef1De16F2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x168041188494dE34189D51bdb08bBd834d624980",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc330441dbd4f45fDdBBDa68B15b936Bc651D176f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x167d8ed7694059aF82281A5B8A92b46563804Ae1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc3980e9d14f27b68DB5cfF7F1c8e5FfA53C2Fd4d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc3A853ea09DdbB06b63877C47E4992a721A301E1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc3C3347520467B7d33c99889b6C2d3bBB2ab1266",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc3d6522Af9b942da2FF52bDF4B91Bd88B607CA54",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x16740C199cE521EdC00B1616813B14Fc9B96AB7B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x166186DB2d5e93D7d367e5D0161Cb3Ea97CD3c0F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x165d2d033475BD6AF65DEaFece135Df9b418F802",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc42CD83B75c71B2323C7f69666E695a810cD6Af4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x164E41bC26A4a155312FB4380694EAC2d3E1e329",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc45e9124c9119408fafC1F10c29b6F7aA23B85A4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc47B195587FA6c50306aBC5eBAb29C255d7F8a81",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc48Ce1FbD7735c7A534F778D4035a7de8e044d26",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x15Eea04456e89B1416122e34f504dB4b2bAffAec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc4B273349DdCbD1C4b952360E03bBdEfC629EB3A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x15Df8d5c22192B54f10309F89e6BE1891d8F64D7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc4b3e27a9e369B55621275DEF90b3C65a0B67a25",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x15A09cfE7b29c0F26E851accc4C25ca972EBe9CE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc51BB8B35484a7763F8564Aeed5f56B1084c70b4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1596aC02496E1bF059443e988085ADB5eBaA2342",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc5604C29DbA5e5D25C582929c0219AFef846E0b4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x15958B0b2B5850F2A093Df17b5E9cE6442E99E3B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x159291bd11c1b8a7e32ffb3c592f9082c69e5f6a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc5FCa2B6E62e8CDBD379C69D7169C92df071a410",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc5a8df7703488243719df7a7Be273d9b77893D69",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1588D8B3ab43c9817dDDF260cA101329A61cC82c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc601cDfd84b8c031Cb69dbcB305edc36D2D6e517",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc6446be1Ee4E28e93CC198b7006AB0B059F7615b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc64e465efCCBfAa8C3482eBF91D5cA509276C88A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1586157F64F77B17acc03094f02Fa2AC03F66e2f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1577E9BAef93CaFCdD55d06391Cf5204e58C98f9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc6DED0883856BD8154d4251bf869aa7F22758EFE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc6F5315B7ffda108d6c581845803D81a4ddE3938",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc70ADed7DcdA936C7F18C20a802989530d975A2B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc71f12DB345a477fB52A6a5E0C2a9b734E635254",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc72565808E014233a6D83AF010164b0625cBcC46",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x156f640037835eA9Cbc674b9Db21333ae4758459",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc74d7E0d6a48DD9F4ae871934165607082c7Ed9F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc76558064bA5E52dab136fA56d2F061F1A0e8b51",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x154fA033261dC3C5E4d7BF57579F5e76FE4D9a0A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1542167B920875d4e9Ca4916dEAC1860ef23fBD7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc7C8D68103b44cc64228699cb70995D27bDA0109",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc7dAb68bdc6d657d75477d50FB4860f3A5540C8d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfDc71D9765C7B871e299688C108104Ec298b3800",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc85A577F019fD7D7d5f62ebF6493400255D401DA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc85f9f781e9e1f13ad64b3f52868679f7c1f7650",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc8BA6607D107aD352545EADa31458CFB98ad8C10",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x14EcE00B6824BA65764C8d9215843D7BC90d8E5b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc8c1455d402197BeC4d9F3286cF99596cD6D7596",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x14BEc97Da662801d8068609d35A29db1E0541Ab7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc9649E3869d72Fe627884Cb6A77Ac3B3895c9f6f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc9973415B8dC8B60274211e76729767F5a71DC53",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc998D41fA4CA2E90D2001a541746aB64e4f3B741",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x14A51c706821a77020bA9f79147A66C95084702F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1472F7a084f31b67b5fb265A036492c9b741e238",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x142A8B8B3565C980dF384c3BAF9A43Cee004242B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x14287AF5ED030A07d927d349fB9dd54D88104315",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xc9bA3DD63e89a7339CDEdD76dCfDE8F85c1cfD8d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x14195Ac9Ee87014a9Fb9335FE51A60B82050d2A8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x13D2c5CeaFDf5B92b811dDD86E1cC646Aa2ED261",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcA9821Bd229B44B7A78754b50231091c957DCa74",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xffdc90d20870bbC60Af952a94c355C891aE9d84D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcB8081fE498F4689eB257E0487Eb76e2798815bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcB9e3DdF6A34fa96BaE95671A3497eFF54b53260",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x13D0b097CA57162D2f071294C84baCfaD2cd3499",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcBEA760e7F9aC19956C10642128C38a48F0D7E7A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcBc42839A023dB6ca0522eEdf135159ba28dfcdb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcC05787774eB5A957966DB9f373B04ECfF250266",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcC31342E6497143f2e1151739e734984c066940F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcC3A3AC11EE8072F95Bbffc8FFF94e5Ed43D7446",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcC3EeE09fe659302dC9b93091bB4F86e73f71aE9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcC514ad59d84728fe7E3E3Fd1D03C3C7cCFec449",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcC9A4b06bA55E7a081ee813bAa497f460e73A816",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x139675E378e48DF86bC5435B89770Ec3F5f5832c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcCd939DEF73FC8F22de1af5924af3969F8cf8d9A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0162eef4A9050c8a76FB64624BD2097FAB25558c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcD3ea67B361284CE8A8f676C4Af5f85BA3d4850d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x13521dF5EBa8C6efD66A95b91a3F3F949Af30d8c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcD8c8D79E95B36c324517D2BFAC6a0a3C014eb55",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1325e633DacAFbAFc3b6479cE6ac24071D7f6332",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1311b33ec151a38D5Fdae8B7b99b1b4F8Ff285E7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcE30d801D2464C06261Dca970db7DA4389966423",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x12f5f9112A1399E60727e6CFf3a6a6b9c73f8a25",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcE5f4D6DBa196271B4718c5Ef7292DD2d379fb0C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x12EE943a86FafcA26f939Fd880cD24F6593C4a6B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcE811f2F9ef0Dec724859b37047E06CD67543b6E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcEF4380bB8f7ee31b2FDE0949033043f5De0fcAd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x12ACC589f6F8FB46dbA7d88594bA8a51B669BeD4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcF1BadE26187e38B4e18aB3Bc63e7B08ca8Ca88e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x12A4A0869A0CF51b72fB2f42243D47c75B21D0A6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcF6E560c83fb091ee79288FD2f56ec0d5f2610A7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x127c24ed76A0B7C74A9938C7Bad7d55aDAF824cb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x127a0E690b54827848e1832a743Aa2b60464242E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x127CAf96fFB7cE807db9bd05429a0e769aa5D3b1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x12469034f8BE9F280A7C165FD956129941A7a748",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1243481f610B359c561203e38116cf37096D3e70",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcbA039bdA2e500d94b03F4465E7CD5E651Eb4E0E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfF21C713FA21fd0F9F9d82F7B74967785d947576",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcc1E8bE21eb0Bf467b3F856F5857a3A628c503DB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcc578546b0aA004a3D2f36C624c90Ef938193e08",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x12392809216c81a86380E60Ae9E9ca81f44657b1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcc7049cf0Df18294a56093D6Dbfa1240c676141B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1226e99b8414706A35d525356485bD0d2e39AC22",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1220a2b6A75e563C6FB710b03A6947566639759D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcccdD6E55f275dfb7577a2a9B7f60cdE9D842aF9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11f84e2Ca9C8EAe67c123c7FBD21A296d4899A2b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11c627962A4CB4F9C4cE299EeDA146B2934cdeC3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11c1d6628FDC4eae873FD4DbB8B363EE2680F2ac",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcd6BaF4F3689cfB341110b62fD9984c373b76FaC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xce208C4d6F4A36828CfaBf1d840c817C3470DBD9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11Fd0a1079Dff673FAdB7a1787213a3D93281Cb5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11Da11fa4ed675e17f236Ba6cea6C6A63A755F57",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xce8116717350Aabfe2CdD2e0395eBE8FEFAb813C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xce8B57ab463692af834786202F36D449Cb644A17",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xce9e4311cf5f0A1c7AaEFE254C8860c62728f55e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcea098a69dC6f4CAF5D2c071B5B342b39E5d6f12",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11962d277C12FA0EF642C9F111FBAFD5Ad360242",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x118D38f6685e1b0Ff2942cDCd566DFea6d6A835f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcf659C7b948bE1Dd3903b1579Bb77Db1b376B314",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcf714aF540909b7f20A5d2b24002d4aAa44D094A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcf7DAbc0Ff075582D57fe235C13ab5f01f61bC02",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcfE10E94eBfFA5cEa66bdB48182d49274a987A6E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xcffd99696c21a44635d3bab586cba7863ec65746",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd01A6b5BB21C8E9C6e8737527F0A8eEb25C95b5a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfF29Cc86BF2d10C734880371E909d96Aab2Ec5dE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1162C4e0833E16CCd399b1a8756285e31686d127",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0575Ae9f313bD8983cA17aA3941ff4031BCE140",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1159b5f96aE88a5C433d5AD09C3933c52E4CC431",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x114D27439eA85015ef51a675Cf8241A42aD58476",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x11478354c191EE316107D1a9d679A19e2d4DeEd3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x00eeAC146e2be19389e0492448AFd53b5AF49d8f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x113A2304510ebCb8E1D462bc45466c30e76D874B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0E2dfa2c2E9B9b14F445b8D890D496866d9246c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0E3b2B15874F6Dae596933324884a394AA47F38",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfF61f2B19BF2Ba2A79858001c4cDeA3bB189a72d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0F3F30bDe741928b44827F68768EBa1b49F8d53",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0bBb23220D168D68b8c76fd6A53A65a0086CFEE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0cB35E96792c3a365bFF886156f051e32AeFAEf",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd0f2c76552b0cF57594487a42d613f0610cbD340",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd129cb23a0b4e10b03f1b27ca94ecc0636efff19",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x111FBf96319C2844Fa6CC58B62af1C483F1bb6Eb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd1b3D96D45f053e492eb885eC85251DeE7BC5820",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x10df37a086A4B26B3097406CAD1fA341f444C73B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd23455f568d28D4FE7a83d89327d720278E82F1c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd258ca0D6ffb6d68D5e5e453EE40207cFe2678E8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd268078Df3076055d5CDC50aE441Ab2fD7f0FD11",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x10d9F578DB17a26642D21feb052C96084685e2A4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd270c803aBEB4d1F35BB5697f9172e4D044e2051",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x10aD73b6F65Da0aD27a35F06E0F0d110690e6A66",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd284c5088A40B5580ef291ECA62688f9ad7c4400",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd29A0d648ad173f3EE7A735CAB1ADa74661da875",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x10D1E61f2d62052e7AB3d82d90579691B14cD36c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x10CFE5B22280c5368C73c1e898F500688BD0541A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfF63342627bAe44c26688248a599A49EC36b2293",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x106c9D8E13F64C91b09f09A459Bf96574c58b9FE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd2a61844D1c5da77EA798868501E7B362b849a79",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd2af1A8a39e02770E8459Eb1b55Dd5E63149b80a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x106BAF61455Cf32bA1289D9a261A0de3072308fC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x105ad45B8475fDD1f2919961dfB21290203959cB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x104897e042488dbbefea2332ab47df6e6c7774ce",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x104173CA148517B93589B693670e97C8442d24aa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd3D4980B629AFF6bC7038bE8cF61DF23D9702c4a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x103281D98872F1Aa31DBb824Fb52636543F9BD7C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd3FE174c4aE561b492d5373ffc34315DfaEe580d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x1027547eEa32Dbd9361BFc727Cd3c9735e01e9Da",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x10036234AfacaC9136228f61B1CC05bb948ec729",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd3cda07f65F7514D8d702255DeBd17757AAE2dBF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd420CcAb1896cced28ACDC39d1bBAE1912DdC2BA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd4533251C5922556e7028132631B78C32b27bC6e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd48fEB7ef9c17E645e60EC0b82C1e2dBFEA31620",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd4E9cC4F9c6711F281Dc15d3fb5C628a89DBa793",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd4d8C9CCe1eFD9Cd15C0D635ccb7e89d0953f78d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd50E0F01d67039FABE21bbf2cD578f08C70199E2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd539e3a8dFa9b363D33db0c9d312F2682D3A664C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd53bcE870515180582a0B8E0972FaAE9F1c44653",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd53e86efbBa831aeCaB536a143Edc7c785814c54",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd54155e57f8B341A584933d5628f728FB22f914F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0f169829805FbbE7B2961c4fDAAAAed01aAf9F81",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0f15892392973829504b344ca77Aa1904A1970c0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0f0d6217bf9c08632785a91b818D1317596db385",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0eea000a920bcefca034ddf754092da1c63424be",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd5A1AA112a48DA9C2E6C46F430c8Aa147F1743a6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd5A57346925240B287cAEC62462E9958E7304539",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd5BbEe4d6C9cb49c653e3514ab87BCB768e81544",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd5C6e01cf45eA35Da2b33d627F42B687324eD551",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd5C98027e1d43a286Beb26d77e58FeE2260D9B85",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0ea78d704e8Ec36EF84Ee9C12eB729Ea3d1cD2d5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0e7903651c16aaC53f17D9E25450078a1050E3D4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd6294B117E3b2E3D7e3F60205b5747C31cea14eE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfa012b8531233DeC48AD3b3b49256622d2A5C284",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x00e446EbDD3de7D9C380EEac464313f51EFd2243",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0e686AA033dB112b9B96898963BD77D0EA9F3599",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd6a02e0660A61C09aaED8516a3305E943f60E1Bd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd6f05b3f1d9377C8479721d2bDc5635F2F61ba77",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0d8e629ac99e85Eb1B5A0Cd22233FA802f97525c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd71eCa56009D26709cC676B6Ab10bc8C549797b2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x00d24cD6FA2Ae069282065d38866E1E6BE9C7418",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0d6D302de80971A1443A3Ae2c79bfc4F991bFAFA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0d3479070Ac8a16DDa4640Cbf1B788DED7E6b2f1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0d1F7060b65282144Bd6921cBE8aa62384696418",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd7c87a710A246c1F7d8Fe626D39686CB872b5c7F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd8005EB497Cecb0770C7DfCa67E4339EcbCf8693",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd80EcE8C5f34a2c5bEF90B972935E3270100AE50",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd81127629f90EE98F0957d1C66D28Fbe958Bb369",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfa57dda14Bf79a7c3610587d288bF32584d758a8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd86baa2Cf3A96294c06168Dab7A49B738310FbB1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfa5Ae311eb195a3287ca3b20Fbd615f81Da09445",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0cffb851e5b9465ae5609927e0A0C65316624D55",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd8CdA9686b0C476a9043D2Af2B1C3D9a539c4b22",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0ce385D211ba63A5da10B50F5fCE670b49752AC5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0cb604AD4Ea007a06bdd8D35FCfd19d5C38d26d8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfa98dC932041755636ED44a4E2455C33B2378Ca9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd9EFc7750931f2AC3BC61d07f15b9795f3773446",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xd9a45B4cd715A703C2546012350c458E02064f72",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0c5CbE6B903ddda9E056cDDC31a6a83EB6608b2b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0c454fcfD3ac37d23458a2ffc93b246d04431CFb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdA446c8e55074a00Ab8aa0F087Ac24d44efA1A8e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdA76947E01A8b46A319A8d0C62ED98944209bEfC",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdACEe0160138E2E8FA6985d72892E979D76d5e57",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0bd29520F1a3BD0D6F31671ea0BF00672FB8FcDe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0b4C66b2dba488FB7ef647c92F6A81386DD0d957",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0b4B7B6852BEC87F368C2b838e31f4c76C3E5e0C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdCFc247786B35EE777EBD007C32519ab851B023D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0b234b83D0b8d79117aB1E60D7067bC08CFC33fF",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0aF1ECc1c6c50d77Fbef6bdfa658a9249Dcf99B2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdD8069831a95FbEa983119a7a83c6a348359390C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdE36bF8B5a4d84236B0041e737756e8ef310cD57",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0a770008AfB81fEA85E260df859910F07c6F2C52",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdE51B8D90B838D39E58382DDFE6FbC729ad39356",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdE62BC7F5f4da609C99D104d0e7C039137AdDeDB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0a63C64DB0C92998ECFacceE2025653a8Acf8eC0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x747eF30f4C76310b2930fCC8cDa93F34a03F1057",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0a4e5855016E9459610D946c0EafAf83b97cD436",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0a199e87C05d2F3633Ec2b21f79d7378545b7003",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0084af6C76c7eE8CF3Ecab3b71b9F16528B41C18",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdFdd788F4C06198737c8932f8D9B8D824e4026e7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfb4a0D121a027C6B79F0f8e7c37D9B5a84b46AE2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xda21016319b5f24F510d0FDe264345Cc4131c10C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0a101Db3ad22cC294529fdbE0B0D1d00fc79D591",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0a04505B21263508f3f07a3619D27af6e56aa233",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfbB010765254B00EB005cB7eFA9F23a45BF72D33",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F9FC71058486effB6a0D921740455ed2dd1E1e6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdaC570ceA38deC21De4305fEF8d146AadD42b90B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdac875ee59a70a4b1a8557e6ebddbb927a7ec751",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F8740d8CC665938De201C3613B7AAD5A2aA5750",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdb2cfa4C801dA611c4bB89cb3f6EDABa2F763ee5",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F7Ef268b57Def4EA9A042634ccB8fe0546717BD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdb3e897d0BfB2932968B4ac4A3117744c3a8e41d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F6d0c33b40Df4B27568808690A55B0e98FB3425",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdbB0A07142116064f8B54675d8b28445c9369745",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F55170224E7acF0AAf3cE9a949C82A4dEF77511",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdcC08F3E7ee2CB2c2Cca86669CBC7f2E2FDC1035",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdcb33aBcF39A91E132A45Bc2177A0F092Ec6c7D2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdd18197E950e464b3647f0e0d6F7Cebd607000E7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x007Ff8a59cB91EA214a23b9Bb47A64192fA6C23C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdd36B23b2FaDC00BF46c74B9609eD28E41BbF161",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdd3e419122cb4F2C41A5aFbc21448549CAFdf23C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F33b1E40B112DCE5Aa5847dec1933ceAF29C995",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0F2C5eFBC2Aa869F8D485d9e8c64254517a501cD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xddbCE6B84a9fB75Ccc8C69423349B58F1D636Fb7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xde154a914E8B2E91eD1FBD9F73F39cDC7efADBC9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0EF20D95c1CE11b279c4Ffaa3Ab83C6c3A61Ae0F",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdeB7cF32bfC269be212C16c6950a082091520b7E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdf099eC61D8B0635377988ece2C50B78b77Cf109",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdf29F799eB5Ef252e6A3005e5212331632Cb8042",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdf473E7cE0403d0b29Db9E57Ad02E97EDdf3407E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0EEe776BD909955D7c078D407F4FCCD7F60E9eA9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdf6052D3Aa8314E1e1D4C30504EC3c2412964010",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0EB18eb909749bF895fF640316ce554eaF851372",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0E03d7ee5BDf5F5070E1E9171CdD44A8fdA9995D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0Daed92Cdc2A391e96420c266c9aE78f95be3C8E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xdfa490AAfD3A8266E31D13fA14D0B2bbacAa6E95",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe083a8E50582ba89edA3b10EBE16194322A27634",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfc3C7aAb91fe62925856fC20Fac6Fab1706d475C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe0d708D59cB63F336572c3Dfc48b0cB5d89D1fC2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe0ef74890c888EC11e922d0E13caf1dD840dBDEA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe117368d6Ba7d1BF2470737A1DA79Bb58Dac9575",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe182A4577Ba0AEd07796391f58Dfe1623Ae55ff0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe185F8Ec6dcd05507Dd8AFD82Df443B242eD1272",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0D5BF0dF54DEF12A37a6CF822E96Acb63203118D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0D468C7930267A3F9f8466d5495D241377e3E0Af",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0D2Cd642f821F44B82da88173c6A6D34c3FDf0BA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0D2AA18a92C14bb47c6676efe6331C58f55b5BB0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe1a0f9780f06978736850571995a211088D55f47",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe1c58969005C28f7e36B6F6C3FC611eD46d5b0a7",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe1e3E4eF60abf940a4697e717814efcFdBFD5296",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0D20c7eBf45bdef015C28D4B5Dd66870E93552F8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfc6cC466D02F52679FF86Ec474f85F5cAb1fa0fd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0D0dDB33969459f12685D29fdbD003dcBc82563D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe2562B43495583ce5957d8f99D4BfFF80Ac81DA2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe25b4507e1847Fe9888aA6d9e9AfdEb0b3E1Bf3D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfc83f06E7eA490D642b27e3573D0d58e8D6466b1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0CEd57216515928ecb89a92E0d8f106703583302",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe27936116595e72db8E96a392860c4abCd217A3c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe27F73Cc87A64C5cBC96b54a1927A1f1da9e2c4A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0CEF61a8Ea8Ea638b86d0C283D1307c8309F0594",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe29c475c9B234a6657502B7B4DA932a8eE78E410",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe2AD6a85EB31d5101bb9a7eFE103e0b0077e2386",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfc907657aeb3574342b8cb4ba29c74d0b59debff",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe35bb3c0add13e8b19afe3b9c5a421087081d2bb",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe37B9a6d07cd3a3FD80dfEc73621ef1521489dcD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe3862dD3Bc7508F7C34A1310ba3fA2377b9b4728",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xffe54A4Ce67BE9ec173d26f42dda74d27f85BeEE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0CC994BA5cd56ccE126838cCAdf62d09EC8c44F3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0C1D163A8334e4b61F759CB93034bD83E90cDA5c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0Bc165D89722B263CAe39bBF6fc7111eB7DB797d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0BFBBf4598ef6a464b384569BD5BC301621B1875",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe40a3C38326594F1619af18A301D0F12842d95ae",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe47D937e5DeD832a767fCc81671c0d2F860527Aa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe493011B1C6EE35272f361b451a4c3Cb6E280019",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe49574ce1389a59250523f4689A4d967E7Db7882",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe4C751Ac0580EF9629929E410a0222dC6DB85cCa",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0BA6Fd7017cdD5238fCB038bEE39a4a1DBbD7349",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0B50aCb932A5ee471dB6c4BCEC06B9bDCFB6d0bB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe4bDA23cFF9C70D80e54F4bc37C2fa6C356cC1e0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe4ba4ace512c590a3eae27ec302a1a0282ffc178",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe518e7bca359563022e386dc4b75Db96d7e4Aaf4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0B36Eee03e52606205bca6Fa2806F10B79159FB6",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe548F12Ecc4CFe37Cf4C50eeAcaf9E60D5a58641",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfd4690F523dff1BcaA5E5B9d397Ab49e2c82FC43",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe550C7f482CBe300D5a8fcfC1Ba476a81F7058fe",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfd4b8233584d8B7Edd7335869F5389e9ddb0ef9A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x007A4A0C2D9efE58bE8EB23911e034B0534019A0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe58Ff038B88cB1FBd5b064f4baA4BC28eeB4C50C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe5E45b77B4140798388511d299F33B6a3fa0e808",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe5ecF80Ace753517889d9b6e383204781fb85Dcc",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0B35139780530b83710874cEF1dC9B44dA367C1e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe613797Ec24227286589dd69E41d78fa117dAf9d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe6675b3Da937b631686d6AffD7EA06A915d0C321",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe670Ce5e6b93EE3C231749B2A5306f1c1Ba1e3fD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0Af593Ce684d1b14458a0d3e8c59c10412e84aAB",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0AeBDEcB1Ad73019CE699aABe1b2c27AAAC6FC56",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0ACb7D6E4F0F00f35927cafc95B2DCA9ce3392EE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe6ef98602c6628bB2C5e07B12C01f6CC509fB06b",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe72Edc86e770D9Fb711039703cDd03f6E6B2319e",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0AA51d1c99Ee44d28d75A22A91ECCe22876B83ce",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe781230686f11D186A6234A23a4A0a15bd5b5629",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfd7d1b7d8644F32b57c2736C9557240dD5e05475",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe7Eb4399Ee20960BB530BecC4ac0f516b60Ecbd2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe7d0a90E01F6134C3a1c6F7b00f9c2dEaf648CeA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe80029Ce2BF76233020a8DAEA72380699d3090ad",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0AA1a89BF3040Fb7A271C2FFa5d97a293Bb580d2",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0A4B25721111325755f036db50E6eae3b3234d6D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe8bB3FC7d4AF54C7a3d9d1DCE086c525DdDc5FE4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfd810C441B3f6c225e1eeFBDcbc6Fab11097Ae61",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0A41609d1163C03f7B83A0B3f26578803EdD6cbd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe93ADDe90Cd69ea9d6B3515610C8c6505d0d65eE",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0A393fe0819d9b4Ff653C1cC169D1DA9056534d0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe95eb411c142CD04160513aC37E8C5785C4170B8",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x09c2a3Fdf918dA498104486eD48DEB3f56279113",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x09B75F770F226Fef8FA0622DB6A9E2FAcdA20f1A",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe9C90b53F06005463e4eef47228439464Db78FFA",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x0972A9c5ea20eBab8F59C8E06e48F6ccaB93a6E3",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe9F10A734A90d6543df025Adb567ca08599e83ec",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe9a89DD8ea45421080d141E9F31BACE7e11BADD1",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x007626B2F7aABc64aCF0D67cD3Bb2948761ADdDD",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xe9eE4CE350343b74A90cE9C0ea374930Af331668",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeA17450C1687bEc08983569aD26B17AF07acA8f4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x09535eCf54480cA9cf8B5351130cC601CC1C6766",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfe2b489e37765eeD9f7D6d851c51EFF84c6EA483",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x094Be90102a57e344Bb9E058b7bA82E82e3EB635",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeBC12ff043592b0116ee2ea039B848F9801C221a",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeBb0A7c8647f4B50EBe3e4c701857aA72ca40d17",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xfe883739c35dA8588218efF2b6277457ACB82869",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeC43e757fc9DCF92752AfcDf6A6b88e5C684Ba3E",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x090C3489DEa10F23F74B27B348b9f537750e27a4",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeCF11cC82986F214fa3e264b05412B0DA54EdE36",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeD0e8d217D584219479a8afEeD1650D8Ec5Be54C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0xeD49c2598A9F1c83b89aAB46110d86bf1Cb55765",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08c842dD86aE7cafc35196BA47D7b3a0566c6223",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08bAcbDd93218aB6b3Fd249e7d8D1D747644cEee",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6Ad5A9E7e240bdB460D0142894189ac453822ef0",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6B1Fe3Be0D77A64A9ddad0Fb5a68A8a2Ca171CF9",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6AF7D01483513d257bcA94504Fc287E3F9ff71Bd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6B6dC581F9Db7287736BBCb6B7EECCc604218850",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6A94a39f29Fc5dC4af53980f0A514E11d210c37c",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6A196f6f60050690f24DA5A5f9dB78ED1537ed37",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6B89EF59A5353590cf48f1DD70cd7bD5F3666723",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08bA073bc60eA693630F0F67251767CED510101C",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6BD723dfFA22B3f129ED2ac292cd93ed168a726d",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x08b0C7E45E2d22AFB66dE6635644a83FF9Bd4c5D",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6Be5165f0C61521628d1c0777671A53A520e36ea",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x69FD8D964737Bd18517D7d0a86d4c22F5A136a9f",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x69F485152F9b76F4d6Bab0Fc5b814F1B8E1DEA16",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x6C228955B5e988931d2dbE892FB6CfE0E62fB688",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x69985B849Ccc4F3F422Ff26F9d6c472B9dc949cd",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x698f7c4166415CA8d043746235e656C883AD380B",
    allocationsType: "longVesting",
    amount: parseEther("10"),
  },
  {
    address: "0x60F5cb661909a9a95f48E21436205CffAF7AC509",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xdA34d56b9Af56748c61AFA38a3F28847d3D3ee72",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xe1F04ebf07A24e30861490b42Fb97A3f6E3A9Ff3",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0x4169cabD2ec5A4bDff62A45C7798B76261c1272F",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0x80d0A5aF79872682A98AE3eC3f83b9Dc6C1ce628",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xFC786ACD6517A571846c61C8f41f52270a67dB7E",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0x4A33226B71CCB072593031CF3C420bE7eAC037E8",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xd661D0f5725543312678A7f479ab877B404335BB",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xEE0bcF2a92b6524D5b41009C2D83168C345112A4",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xbf74C957B699252e78c845738B21b93F465fAF09",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xc4a3ad036bd518b0c423bd833a47e52f5e92769d",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0x22A06DE086428D3Bc7066c12C8cdac418D4E378D",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0xCb961D670858785D767E52B084bCE8Bf4f2c2E49",
    allocationsType: "longVesting",
    amount: parseEther("5"),
  },
  {
    address: "0x0008906cA2e1d42DFb6BbCDA7f9B709A0cFA8dfc",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x001d551a13880035548cd2bBD9A11DeEC59E2423",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x00a2b7F25Fe012d03D2508e20Aeaba350F08BE6e",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x01d12EDA4911F653E84C56b11288486D80feDC3D",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x03923eFFD5674CDdc1b71c3bbdD1dB1D8837bB26",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0x04d6C2746B08Cd9f4Dd32e3b8ba9404CD0A2B9dE",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0x050987EA138CFC0b852eD9E0D8C5c7C3198a0DB5",
    allocationsType: "longVesting",
    amount: parseEther("14439.84815704"),
  },
  {
    address: "0x0556917aE326eAf4860d5DA732D43583d67D311e",
    allocationsType: "longVesting",
    amount: parseEther("49816.32830015"),
  },
  {
    address: "0x0694016A048C4A52dA759aEa028F66Dec88c117B",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x06DC0DA48690D4c99fE8d162877adF5F6f3C0054",
    allocationsType: "longVesting",
    amount: parseEther("21464.63915237"),
  },
  {
    address: "0x08F40236DDa1104fDbbcFFDF40a7e97C9B5E3cdB",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x09aE621cb216DD2b034738D6e52d9eC532eBb239",
    allocationsType: "longVesting",
    amount: parseEther("45913.66709476"),
  },
  {
    address: "0x0a0aba963de3bd2741b31903e5cf7df57a1a4185",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x0B3bfB65881AaA5fAFd8488F3c1E15ED12D8a3Bb",
    allocationsType: "longVesting",
    amount: parseEther("19513.30832033"),
  },
  {
    address: "0x0b69202B80dd74fdd5d26576DDaE0Fc188E504E2",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0x0CBC7A0EDA0e51267a8c4F2888cAFB3aAa8007c9",
    allocationsType: "longVesting",
    amount: parseEther("41322.32"),
  },
  {
    address: "0x0E3E1a15A95A65939f6C074259329D0b6A7D0A7b",
    allocationsType: "longVesting",
    amount: parseEther("41322.32"),
  },
  {
    address: "0x0F4625efC3427547a209A8EEab0c657abCb984eA",
    allocationsType: "longVesting",
    amount: parseEther("2295684.11386593"),
  },
  {
    address: "0x10Ca37ca30bd0F021e5Df441127804240Adc12E7",
    allocationsType: "longVesting",
    amount: parseEther("32139.57759412"),
  },
  {
    address: "0x13533D8987836FC6cbE1CDf7F5669A6DEF4E71f4",
    allocationsType: "longVesting",
    amount: parseEther("5463.72632969"),
  },
  {
    address: "0x14fc0829cEdCB20e133D524D767BA1Bc8b7bb71E",
    allocationsType: "longVesting",
    amount: parseEther("229568.41138659"),
  },
  {
    address: "0x1505e9DDbaf08EC2D6684087615059fFf21d7c70",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x150be62edDDD543452545e502bCAF6800BcAF2D6",
    allocationsType: "longVesting",
    amount: parseEther("2295684.11386593"),
  },
  {
    address: "0x154d455D70Dfe6c8E2987946fdA471DA30cBeD03",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x18D8032f7c11663068D36ca79954B9E28d653ca3",
    allocationsType: "longVesting",
    amount: parseEther("31221.29331254"),
  },
  {
    address: "0x19bE90ee9388009eB87c015C66A0e2B54DbB5040",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x1AcDb95F8934f059aDFB8c8493c04BC1Ff18d46f",
    allocationsType: "longVesting",
    amount: parseEther("4683.19399688"),
  },
  {
    address: "0x1d06e5ff1510c1E25B9603AbDdcd2D872468267C",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0x1D60f2feA3B3A48c46B6Dd560f060E5490fbb8E9",
    allocationsType: "longVesting",
    amount: parseEther("2341.59699844"),
  },
  {
    address: "0x1dc36E8919AAd955b3a1092A49d57dB3bd943973",
    allocationsType: "longVesting",
    amount: parseEther("7346.18916437"),
  },
  {
    address: "0x1FaA87e80B471547b47608909340114498527AB5",
    allocationsType: "longVesting",
    amount: parseEther("6049.1255793"),
  },
  {
    address: "0x21BBAA49ba624d88Beaa02057c423BC2cd9da102",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x2260d06ed3D33DE2B010a4087542499b095BBA22",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0x2266Fa97C286440dF05481880B51cdB2d78AE30F",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0x23461e24F1D7601a674ab672ADEE0b4459302214",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0x24CCC59077A80AB571bC782ED6D454593e899E5a",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x24d2628d0ac796209700a4932212e1aa8c65785a",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x26D82B4363344A4f22ac6aAd759c82E6c4d8245c",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0x28aa4F9ffe21365473B64C161b566C3CdeAD0108",
    allocationsType: "longVesting",
    amount: parseEther("4591368.22773186"),
  },
  {
    address: "0x29767f86654eceC171bb9AE0A65A15D38F85816c",
    allocationsType: "longVesting",
    amount: parseEther("42929.27830474"),
  },
  {
    address: "0x2a4E0C762F17d9EF40201F9e66d9540050094f0E",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0x2aBd8a469fE2f4142f2A9bd68B2cE390f14039e3",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x2cD97bF5601B17eC683FF2dFDD593a8ee0352498",
    allocationsType: "longVesting",
    amount: parseEther("4591.37"),
  },
  {
    address: "0x2f17C29A1584f1fE80cFB5FD60ee4eA0314602Ff",
    allocationsType: "longVesting",
    amount: parseEther("5596.41682627"),
  },
  {
    address: "0x2f1C71D4134B4C154BF946aeb9A94cc2Da1efe59",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x3117F144849Cc039F264B01365c9cBc62e47DC96",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x322D19EB471f8e6380D200AaaE9632593Cfd1B80",
    allocationsType: "longVesting",
    amount: parseEther("58578.95157765"),
  },
  {
    address: "0x342B8a6F00b239e8D6913FfDEC988b66864bA18F",
    allocationsType: "longVesting",
    amount: parseEther("2387.51147842"),
  },
  {
    address: "0x35a727DC6C20781D4015fD8A75B7f44F2a221F3f",
    allocationsType: "longVesting",
    amount: parseEther("105486.65"),
  },
  {
    address: "0x35cBc1d7eC6Db356f76941f591B54aBD75BbDA8E",
    allocationsType: "longVesting",
    amount: parseEther("164061.4425"),
  },
  {
    address: "0x36fa3BaA59661EaA6d1eE8851F00BFAa188C028C",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0x3821BEEF5d4b90412A251f0F29faD256222c03c1",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x38E27A3bDcbeE2786bB35eD9b9a64471A982f1fF",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x399a0AB358Cd880b7DF71896CdC8Cc233ec1134A",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0x39DCE07172E1aE48a5cFA9fD31511B6052e52600",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0x3a77E1A94BAe74B777F90062cc48E3ce18d5D5a5",
    allocationsType: "longVesting",
    amount: parseEther("55785.13"),
  },
  {
    address: "0x3a77E1A94BAe74B777F90062cc48E3ce18d5D5a5",
    allocationsType: "longVesting",
    amount: parseEther("10330.58"),
  },
  {
    address: "0x3a7efeb6c1c6032036cb20640526fa99e896463b",
    allocationsType: "longVesting",
    amount: parseEther("41322.32"),
  },
  {
    address: "0x3ceb5C2E31E453BB1a10C427BB946Be0fc2A166a",
    allocationsType: "longVesting",
    amount: parseEther("229568.41138659"),
  },
  {
    address: "0x3d29d699Aa258769b6f4c7C948434a8Fe8A68594",
    allocationsType: "longVesting",
    amount: parseEther("39026.61664067"),
  },
  {
    address: "0x3D92B651051D747E5D2694fC7c7aA8D338927947",
    allocationsType: "longVesting",
    amount: parseEther("164061.4425"),
  },
  {
    address: "0x3Ddd831419D96C7473289a73472B9497Dd0De633",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x3f0DC9c50A296426325cd24a0bD828049Bd286a0",
    allocationsType: "longVesting",
    amount: parseEther("459136.82277318"),
  },
  {
    address: "0x3f5B5930f62BcCcA5d844738AF254c2F948D7617",
    allocationsType: "longVesting",
    amount: parseEther("6244.2586625"),
  },
  {
    address: "0x404CEec57d7ccD573f6A3D9D9D6ab459bB7DeF98",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0x40822C6760801cF81de5318166574e4F6A963467",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x4138574878c133d3A12009d6F54B8F26De700834",
    allocationsType: "longVesting",
    amount: parseEther("68870.52341597"),
  },
  {
    address: "0x438C1107991171A11E225144032Fd2D4bD4cFb29",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x4503acba98C53e71D76f9130C1862Bfe57143c7f",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x453D50E53851e985D7D21bFCF6a8fb9740c2f5ac",
    allocationsType: "longVesting",
    amount: parseEther("3317.26241445"),
  },
  {
    address: "0x45bAc9A1a2cbCFCB255b3e3F2172Bc93Cc708757",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x45e0dE7626e4Ee3e58536101C314C728Ea0041cf",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0x47463f6F800c268F929d57b12626753B3750db0c",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0x489d6fab7345a391d91aa6369ba81eb2ffe7b10a",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0x489eFBeA4F60D46cDc1ee34B95749C094983702c",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x49d1978DCe1a788A0e33Ac59C004e5fEe4093e95",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x4a3d2B1aD815552198A94471e033AD0acD59Ba5F",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x4Bd5C50061d68e771fCCDD79C71482760A789a2b",
    allocationsType: "longVesting",
    amount: parseEther("21487.60330578"),
  },
  {
    address: "0x4cA6f259cbA0B6EdABE585EEde0d8894794f1Bec",
    allocationsType: "longVesting",
    amount: parseEther("41322.32"),
  },
  {
    address: "0x4cb4a9425c803acc939c64e0ee71e764ebacc3c2",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x4d3711c1eFfBc584127F03b3c3054F18f0cB3870",
    allocationsType: "longVesting",
    amount: parseEther("39026.61664067"),
  },
  {
    address: "0x4e04123bab8C02aC4e5E38D7158bC6f85B2f4B63",
    allocationsType: "longVesting",
    amount: parseEther("77897.12681478"),
  },
  {
    address: "0x4e71F000aDa62d50fF33d99E1532D55Ed60aB914",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x50C32024706a8167235De7AC99bF17E490EEaD66",
    allocationsType: "longVesting",
    amount: parseEther("4591.3666636"),
  },
  {
    address: "0x520474B3059404Cc210A16a3404b6b9BcA6a2A7E",
    allocationsType: "longVesting",
    amount: parseEther("2066115.70247934"),
  },
  {
    address: "0x520868664f22c27a0f3efbb17371EBAE4a561DAB",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0x52619D40c4f042C1D31e7A568456DaDf77d2CED8",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x52c187Cedb555d73C75263Cf3DE56c2A01Ca0786",
    allocationsType: "longVesting",
    amount: parseEther("229568.41138659"),
  },
  {
    address: "0x564aF1a25FeB770Fd23BD39F875349Aa00cB3A9F",
    allocationsType: "longVesting",
    amount: parseEther("14692.37832874"),
  },
  {
    address: "0x573953AD2019005A5cA3db5ce0f012209dFb1016",
    allocationsType: "longVesting",
    amount: parseEther("2926.99624805"),
  },
  {
    address: "0x575c2f4D798de38E39692c5f21959FFE2FD43fef",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x59ad6718C960697589301B66CB4AaA31Bd27B5B4",
    allocationsType: "longVesting",
    amount: parseEther("688705.23415978"),
  },
  {
    address: "0x59CBb5A8C186537B5C62138980E422B77E2fB220",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x5A86Ff42902006E8C9cFeAD126E71E418dCc0459",
    allocationsType: "longVesting",
    amount: parseEther("43617.98330428"),
  },
  {
    address: "0x5b9867Fd96f99C66a94341ff38dE651dAeA6AE91",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x5ba20dC5a02CE21D9701d65d2dC45054f0CF2188",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0x5be56EC8A3d8B8E0D9c41337250578209633cabE",
    allocationsType: "longVesting",
    amount: parseEther("2341.59699844"),
  },
  {
    address: "0x5d6d610837ddfc120cd1e06147d536b6e5d966cd",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x5df44DbD9126995b68F8Ff02E1C32485B73Cf8a6",
    allocationsType: "longVesting",
    amount: parseEther("22956.84113865"),
  },
  {
    address: "0x601Fa6dd74dC92276E7D48188D32eA0bA49a6911",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x60845dC92043Df92ca458C316891B5b043A7095d",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x63CBf23303d6F6739292c3792CD12fd347547A1d",
    allocationsType: "longVesting",
    amount: parseEther("91827.37"),
  },
  {
    address: "0x65aB6Bb9e3c14D6Ac221a17FE66f01e3ce6566d4",
    allocationsType: "longVesting",
    amount: parseEther("19513.30832033"),
  },
  {
    address: "0x68302232305F5d257eaa13fEB90c3870944aFd7E",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x68Fef005a0b8F0036E2F8807239F9CB9c2563E0F",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x6A8F0D1f0f927b6e3066a0c414011677246cD5AF",
    allocationsType: "longVesting",
    amount: parseEther("25367.30081643"),
  },
  {
    address: "0x6be58a5465f8cf1d5291983fb6d441903be7f544",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x6bEc0BCA2F15876f675f2C38958Ff986551e4db1",
    allocationsType: "longVesting",
    amount: parseEther("229568.41138659"),
  },
  {
    address: "0x6c4D01B9A5c0D875F1780137e9b91c0637d4EFb3",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x6cEbA2FBc67C0518727023c72d81A1dcfb3513f8",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x6D15eBe2f500c6e35C5bc584c4B6331462852da7",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x6D2965Ff15C7399cF22dE7A497fC50Df56bbAe81",
    allocationsType: "longVesting",
    amount: parseEther("17561.9774883"),
  },
  {
    address: "0x6d38878d75c0a001634dea2c329f058f3325442e",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0x706e828D08cA8624dCCe152032BF3fF4E2c88FB8",
    allocationsType: "longVesting",
    amount: parseEther("4593.4327786"),
  },
  {
    address: "0x70F458C0A5Eb077c689f9Cc2c547da700A0153B7",
    allocationsType: "longVesting",
    amount: parseEther("2731.86316484"),
  },
  {
    address: "0x7175b04e1298d621c3d3e2428f502d89164677a0",
    allocationsType: "longVesting",
    amount: parseEther("5853.9924961"),
  },
  {
    address: "0x71ae3132D550A9A0a92DeeB24161FAE68FbFbE8A",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x74022FF9c2cADeDC13BD6BC1B267857B01dA2143",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x763ABb42463117D6b9882451d65fF2415BeE4A21",
    allocationsType: "longVesting",
    amount: parseEther("3122.12933125"),
  },
  {
    address: "0x765ea347070ab7b048DAF1Ee006a9297f6d24A59",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x77cF3C8107C68c0fC9e0C7D60547205EDc026CD9",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x78593d6eA7c0Ebd6CA61eD4cE37F643D32600b57",
    allocationsType: "longVesting",
    amount: parseEther("5814.96587946"),
  },
  {
    address: "0x787F789cC7d8bbC25FCbc4Dc6e5e022945Cd434e",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x79EBF1DF88971436fC3d4d60638d82E3F678bbDC",
    allocationsType: "longVesting",
    amount: parseEther("1149375.57392103"),
  },
  {
    address: "0x7c1F60BB90B25657619c8F98CdF73B04cCc83455",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0x7C20ca1287C5A97917BB24136A3F05f45F02E099",
    allocationsType: "longVesting",
    amount: parseEther("9182.73645546"),
  },
  {
    address: "0x7d4A9ed68C56f23925D814699ceFaa7afFe49080",
    allocationsType: "longVesting",
    amount: parseEther("459136.82277318"),
  },
  {
    address: "0x7dEa6Ee74326B0897E7B8c311295186B3CdbA09d",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x7e5d9b40b5A1169561ad7D33d459d13E283B0641",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x815BEe06404b43db6958a6C3f5514C34a3BA67f4",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x8175732F812aF3aff7cF5f73dFcF947c9EeF279C",
    allocationsType: "longVesting",
    amount: parseEther("33172.62414457"),
  },
  {
    address: "0x82F383AD178C43F1a27B947432f43af8851798AA",
    allocationsType: "longVesting",
    amount: parseEther("2731.86316484"),
  },
  {
    address: "0x836a0bc5eC83f74B807a5915B605c83E47cfeEdc",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x8379cB6A396bD5B464fE9c6F0D80F3caA0bEBb4c",
    allocationsType: "longVesting",
    amount: parseEther("33057.85"),
  },
  {
    address: "0x837Ca4996A841C6b50DC3C221949167DB8605410",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x87aFcAeCd0bda4e280552AFbb9f1A19Ffe03B81C",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x87cd4B04D76439dB2c2b23A7Dbefb81aBf0B5f8E",
    allocationsType: "longVesting",
    amount: parseEther("10560.60246296"),
  },
  {
    address: "0x88339D2CF69D7C50Dc9291c4AE048B5Cee0A7bD4",
    allocationsType: "longVesting",
    amount: parseEther("941230.48668503"),
  },
  {
    address: "0x883EF363a71fE7B16740b0625EAa4b0C6616c605",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x885d83E2689568D6e17dE7b3DC1Ca5adC56970AE",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x88d4C1281718a95C09ecF092689977D97915a69F",
    allocationsType: "longVesting",
    amount: parseEther("7346.18916437"),
  },
  {
    address: "0x88f61DaE32d43DA41dFc2Fcf9649372909981c8D",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x895B961bF2059F5Fcc1595a82eaEE2ca6348011d",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x8C7ca94F4eBD83BBE6043a57E8e717a097a65b3c",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x8cF224880d6c47e7bD8d65Aa906d041B92F0BA1b",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0x8e044d798B39bEDcc7c8d896665dDcbd4E9DE2A8",
    allocationsType: "longVesting",
    amount: parseEther("1836.54729109"),
  },
  {
    address: "0x8E2117ca8DEF42d993f19F0da659939375C201f1",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x928b3681cd5707513CDb84708a355fcF56ECF69f",
    allocationsType: "longVesting",
    amount: parseEther("5853.9924961"),
  },
  {
    address: "0x9308Da137EA2aAD8BFC05fFb8d7981D4CBA45915",
    allocationsType: "longVesting",
    amount: parseEther("482093.66391184"),
  },
  {
    address: "0x936BcEBFE0B95Ed95bC54Cac8b1B6C958c6b46bA",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x9396536EF7711535a02f6C741a1B3977Ba2249E8",
    allocationsType: "longVesting",
    amount: parseEther("21694.22"),
  },
  {
    address: "0x93d572C6A9D44D24d54D87435f2837d01650499D",
    allocationsType: "longVesting",
    amount: parseEther("688705.23415978"),
  },
  {
    address: "0x93DEd00155c7E1845195D02A74fba3dc14EbE480",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x9400ac5BcefA954b8432F8D78541604abad8DFc1",
    allocationsType: "longVesting",
    amount: parseEther("91827.36455463"),
  },
  {
    address: "0x97649A84877814d62C608cD2b3B008b6B47a8f20",
    allocationsType: "longVesting",
    amount: parseEther("44880.60913677"),
  },
  {
    address: "0x9821888988289d6cB3C403223B2f922E59B3239a",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0x9842b0E1Be4fF1D883e844A0c05E5715856C5f28",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0x98A182Ba6442aCbC5BFdAF8B4ab25BE2343387eD",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0x9933d51335E0F7FA716a175E07aE16E29A68Bb15",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0x9953181ce2901c1FB946c29C3E1F66D70395963F",
    allocationsType: "longVesting",
    amount: parseEther("58539.92496101"),
  },
  {
    address: "0x9B067Fde372225eD90229EC7A54f43D48df0956f",
    allocationsType: "longVesting",
    amount: parseEther("22956.83354738"),
  },
  {
    address: "0x9C883eDD5F41A84537DF4843220d1f250f9337f0",
    allocationsType: "longVesting",
    amount: parseEther("5853.9924961"),
  },
  {
    address: "0x9d2EaD9e8c24503e0821E63451F4d8847be1bf90",
    allocationsType: "longVesting",
    amount: parseEther("22956.84113865"),
  },
  {
    address: "0x9Ed2Af9D4Ab71740E4d63FAb593bE7E8701ea169",
    allocationsType: "longVesting",
    amount: parseEther("50734.60163287"),
  },
  {
    address: "0xA1E2E116c31bBB0C741F3A95814AE0b4DC91ada7",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xA1fe5EdF2101b9b07BC13Ebfa6e27CB5fd0dC93A",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xA377E0fF549A60210C49905d7309a481F0339869",
    allocationsType: "longVesting",
    amount: parseEther("762167.12580349"),
  },
  {
    address: "0xa497cBBAB194d6bf017BcC2E01D961C2E3EC6dae",
    allocationsType: "longVesting",
    amount: parseEther("2295684.11386593"),
  },
  {
    address: "0xa50f89381301Decb11F1918586f98c5f2077e3Ca",
    allocationsType: "longVesting",
    amount: parseEther("2295684.11386593"),
  },
  {
    address: "0xA6578C8c74A0fBd6f9CEc2b80935eEF92b881CA4",
    allocationsType: "longVesting",
    amount: parseEther("39026.61664067"),
  },
  {
    address: "0xa6ed26749Cb54591291B4550a82f15FF64ae98D9",
    allocationsType: "longVesting",
    amount: parseEther("39026.61664067"),
  },
  {
    address: "0xa6eEd44e6eD94D988Fa2F2de35598EF71F6602FA",
    allocationsType: "longVesting",
    amount: parseEther("164061.4425"),
  },
  {
    address: "0xA7194714c61eE6A704C795a0d3176CC7dc368c39",
    allocationsType: "longVesting",
    amount: parseEther("6244.2586625"),
  },
  {
    address: "0xa734439d26Ce4dBf43ED7eb364Ec409D949bB369",
    allocationsType: "longVesting",
    amount: parseEther("60428.84116888"),
  },
  {
    address: "0xa7ee27d18f10C7DC40F9FDC593E7D5553a01df78",
    allocationsType: "longVesting",
    amount: parseEther("6634.52482891"),
  },
  {
    address: "0xa9B91968a83f135e9C5eb7B4fFa87a9d3a1B7A49",
    allocationsType: "longVesting",
    amount: parseEther("5853.9924961"),
  },
  {
    address: "0xaAD34160998F94b8f59E90e49C08Aa4B880B2226",
    allocationsType: "longVesting",
    amount: parseEther("78053.23328135"),
  },
  {
    address: "0xaB61914D7CEEf1090A5538D5C0098c64CbeC37B9",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0xAd2D729Ad42373A3cad2ef405197E2550f4af860",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xadaa71b1061b9a3BdCdF2A72AF7E106353151DFf",
    allocationsType: "longVesting",
    amount: parseEther("8976.12182735"),
  },
  {
    address: "0xaeE8dF059e01259eF46c0c5b07f1eb359dC04508",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0xb05AD8f027BC69780dba28EbF026C17e1BB23B6C",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0xB16b5611Ade68206FaE7Bf9a98fD8937b5A6a249",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0xb60dd9Fca0480C1806b25537dcFdea4fa90549Ce",
    allocationsType: "longVesting",
    amount: parseEther("1377410.46831956"),
  },
  {
    address: "0xB6393357EFd9023cf59BAFd501289D4B45DFd628",
    allocationsType: "longVesting",
    amount: parseEther("45913.66709476"),
  },
  {
    address: "0xb7BE118E432D88e7B8E191080F5Dfc0797dc3d55",
    allocationsType: "longVesting",
    amount: parseEther("344352.61707989"),
  },
  {
    address: "0xB844C9dC190A47F381E5fd26b1a45bd8282325c8",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xB8993D029b146F623C7E37D80C08D5a2b29432C8",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0xb8e53501D9d2030C8ca872A3E343B3e2445D8F07",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xb8e958f52dE47133F7b8865E8AF20cd93F0058c6",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xB97c5bD2f4caC89F87D7CF5D004b85798c334c2C",
    allocationsType: "longVesting",
    amount: parseEther("39026.61664067"),
  },
  {
    address: "0xbaa433d9B1787579B16aBA880773eBb090b96857",
    allocationsType: "longVesting",
    amount: parseEther("22038.56749311"),
  },
  {
    address: "0xBcC32787bcf6e4804d9eA34bAf22E4287695F558",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0xbcd69Ce8027b930c7712290F4f0c1e8864382123",
    allocationsType: "longVesting",
    amount: parseEther("295684.11386593"),
  },
  {
    address: "0xbD41D1c70a4848C452Cb1d4C659e69b6649638c7",
    allocationsType: "longVesting",
    amount: parseEther("9756.65416016"),
  },
  {
    address: "0xBd63144C19379a62699F9544836CFdF05a3c31ED",
    allocationsType: "longVesting",
    amount: parseEther("13774.10012842"),
  },
  {
    address: "0xbee157c1a64c115D8361AaB2542F83d204260A97",
    allocationsType: "longVesting",
    amount: parseEther("3122.12933125"),
  },
  {
    address: "0xC01F14e4BC5331a0bd12c1c28aCD3fa15df95934",
    allocationsType: "longVesting",
    amount: parseEther("19513.30832033"),
  },
  {
    address: "0xC04cB82D27D63f2076e4aFE9aBd6a5fc53f9f534",
    allocationsType: "longVesting",
    amount: parseEther("1354453.6271809"),
  },
  {
    address: "0xC16CDa7252eEA10C876a6d3645BF0cec8cC6CB9F",
    allocationsType: "longVesting",
    amount: parseEther("3122.12933125"),
  },
  {
    address: "0xc4177df8458D027B70f37Bca73EC7D51590135e3",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0xc49f30454f9dbBEA96A6B1dEf23A955aA6D331F1",
    allocationsType: "longVesting",
    amount: parseEther("977961.43250688"),
  },
  {
    address: "0xC4B84620ABb42326cc25354b85cdd6875fD10cEa",
    allocationsType: "longVesting",
    amount: parseEther("9756.65416016"),
  },
  {
    address: "0xc66580F4Bb2983eE0A8F301A21F3E8bDa6dA0E05",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xC69DF03bEF80e53A1A5F0F9fB5Db8fF21D37f64b",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xC6ACd588d07b61eb1ecD9B41AaA79749f4d5d723",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xc793b7f77D735d286e9c3722F1fe2600Ba61AEd5",
    allocationsType: "longVesting",
    amount: parseEther("6634.52482891"),
  },
  {
    address: "0xc846B7d5Ad79060758F9ed2fE6BA5dD68D00C00F",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xC9417084405C69E498bCd87d30b7eDdBC4abede3",
    allocationsType: "longVesting",
    amount: parseEther("1928374.65564738"),
  },
  {
    address: "0xc98fb316ba4A9e8f59cBD2A926784f6FC2842b4d",
    allocationsType: "longVesting",
    amount: parseEther("7346.18916437"),
  },
  {
    address: "0xCa3608eE166327Ab03C0CD31Da77F0C62e9B2C20",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xCB7C6FA166b77daD28a82C43f9E29D8D44eF29E3",
    allocationsType: "longVesting",
    amount: parseEther("45913.68227731"),
  },
  {
    address: "0xCC0875B874658a994ACa25C1491c40E113D25E7a",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0xcCd479Ec7Fa356459c987a89090a2bF04FbFC5AD",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xce66C6A88bD7BEc215Aa04FDa4CF7C81055521D0",
    allocationsType: "longVesting",
    amount: parseEther("83840.44935495"),
  },
  {
    address: "0xCf19aF0500B0Cd34fB4692f52C593eC076701587",
    allocationsType: "longVesting",
    amount: parseEther("1606978.87970615"),
  },
  {
    address: "0xcFF4f735D18dacDb5ee9F32Fc1e12C7Cc01c8B7B",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xd0297A71fCabB249dD4B1425E3BCf49733b9C6F7",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0xd0675Bf1DC2bF67a9cEBB55DE61b72A6F7535B69",
    allocationsType: "longVesting",
    amount: parseEther("918273.64554637"),
  },
  {
    address: "0xD0e3BA6682Da35cb3CC7284111af5d16a3D987c6",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xD1449b0656438b98b21b2eFAd2075Aa087E5808C",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0xd2405a7FBDfC3ffBaaB54E600DB0e752a556ac21",
    allocationsType: "longVesting",
    amount: parseEther("2341.59699844"),
  },
  {
    address: "0xD26952b244Ed3403DBDC8A5968a9290d4fE7b6e7",
    allocationsType: "longVesting",
    amount: parseEther("7346.18916437"),
  },
  {
    address: "0xd3168A53F6bF603f63e422Fce28C0fe61F57D012",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xD317977abb96B88044D93e25C97AdbF74153e42e",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xd3243F26a928cc6ecb08A64fF38a5203866fbe52",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0xd32C43010458fE2bE52Cf51046871F34Dc111AE8",
    allocationsType: "longVesting",
    amount: parseEther("45913.68"),
  },
  {
    address: "0xD42ab7C427237be505A48119CE6a126aFE21A9Ac",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xD46Aa0CE215897f40b8fC55bd00A2FFd9e322DA0",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xD6d4470C898FabF996686AC749f77770D688baC3",
    allocationsType: "longVesting",
    amount: parseEther("11019.28374655"),
  },
  {
    address: "0xD75293A72073737D3fff65cf078c45C497130C0A",
    allocationsType: "longVesting",
    amount: parseEther("183654.72910927"),
  },
  {
    address: "0xd87d331aD1080eC64Ed342CcCF9a2a37d3DBC722",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xD92fB5cA374570E3a3fc5d480fC3F3ec2C66ff77",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xDADA3c0063Fd2928040681Fe98fb87C49040934A",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0xDB2BAA0D2b5f0A2996782A29ca245312CFEe8c52",
    allocationsType: "longVesting",
    amount: parseEther("15610.64665627"),
  },
  {
    address: "0xdcD5e4E043836aF3409618F1aECCe9A1b9911e57",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xDd747502A5577f41Bc30492a989fcc245573C78f",
    allocationsType: "longVesting",
    amount: parseEther("5853.9924961"),
  },
  {
    address: "0xDDe7b1a0C9deC54f6359498B6F81E4a696c5aF2d",
    allocationsType: "longVesting",
    amount: parseEther("41322.32"),
  },
  {
    address: "0xDDe7b1a0C9deC54f6359498B6F81E4a696c5aF2d",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xDe96e75c7160d70a447a72AFdb75DDfA1455c808",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xdf3B4fB754DD66453Cc218802255A6Ef5a7A21b0",
    allocationsType: "longVesting",
    amount: parseEther("321395.77594123"),
  },
  {
    address: "0xDF4A8f0d57525E68aCdd1ab622408C2A460ae913",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xdfFd151FDD0f900E8439bdF89ed2869b703c7EC0",
    allocationsType: "longVesting",
    amount: parseEther("4292.92783047"),
  },
  {
    address: "0xe0Ff7c2ab64BBf752Bd0DeDC5936F4D32A1380C0",
    allocationsType: "longVesting",
    amount: parseEther("5853.9924961"),
  },
  {
    address: "0xE2B30CD9514995Fbc7C693E4cE2FC941C1e548B2",
    allocationsType: "longVesting",
    amount: parseEther("2341.59699844"),
  },
  {
    address: "0xe34d4756886d4cEFc5b0D19e37B97eD58a9265bc",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xE3A656b2D84b391F4c1a8D8AB53F05c9c98C76a8",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xe419bC78D80a3689DFF874e83CC2e3E9aA822F7e",
    allocationsType: "longVesting",
    amount: parseEther("11707.9849922"),
  },
  {
    address: "0xE81f5A830F5Ad7C95f7f9Be67eF0a907C1268FB4",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xe959687796FD3651634E5A6b5A91C377420551D9",
    allocationsType: "longVesting",
    amount: parseEther("3673.09458218"),
  },
  {
    address: "0xE97090755879F96de0BE74216FaCF993D0Af4Dea",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xeC0513D83ffB376Ed931d44Dd6f017e46366FE64",
    allocationsType: "longVesting",
    amount: parseEther("59687.78696051"),
  },
  {
    address: "0xEC712Ce410df07c9a5a38954d1A85520410b8b83",
    allocationsType: "longVesting",
    amount: parseEther("6634.52482891"),
  },
  {
    address: "0xED412d4A54cFD60Dd6b46E3892bE0fa9a343A6A4",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xED895E53BcDbba2bA571ddbB89322B0ce9E83e99",
    allocationsType: "longVesting",
    amount: parseEther("41322.32"),
  },
  {
    address: "0xEf92D1638b63dd82BD744fFfb96f9d46B0eEc50E",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0xF21bE69603dA01a12D01EFEc07bd22C270162fBF",
    allocationsType: "longVesting",
    amount: parseEther("164061.4425"),
  },
  {
    address: "0xF250A7983C65eB3e0EBCF56818E89f905dbe0827",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xf329CB5B70b36D12C3c13c1c6bf2083DB2D4BEe8",
    allocationsType: "longVesting",
    amount: parseEther("33057.85"),
  },
  {
    address: "0xf45f34330bd4DeDAc13824e15624D97FBb430183",
    allocationsType: "longVesting",
    amount: parseEther("45913.66663608"),
  },
  {
    address: "0xf498D3814976b2035Ec805847B3af701099F6b7B",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xf588E581B565c1af5F9D5f4F1BAf298265FC2380",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xF8439E81aD07b647B852BfF60d3478C768E370aB",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xF87b541D2a7f15B73A81d8965D2687590D3181B0",
    allocationsType: "longVesting",
    amount: parseEther("9756.65416016"),
  },
  {
    address: "0xf921E169FE2FBF8FEb87b34121B0435769b53041",
    allocationsType: "longVesting",
    amount: parseEther("3902.66166406"),
  },
  {
    address: "0xF93ff7c1c7B440F877B3ce46c16e8875e3011bc7",
    allocationsType: "longVesting",
    amount: parseEther("1951.33083203"),
  },
  {
    address: "0xF9D7AB82969A40Cf8E21ed6b37C409E1A6Ca3833",
    allocationsType: "longVesting",
    amount: parseEther("1262626.26262626"),
  },
  {
    address: "0xfa2e9dc1debddd3528ef3c1524d35af573171b46",
    allocationsType: "longVesting",
    amount: parseEther("20661.16"),
  },
  {
    address: "0xFBD4E1d0D89632c279F06a1d9bb9438647D99a29",
    allocationsType: "longVesting",
    amount: parseEther("7346.18916437"),
  },
  {
    address: "0xFeb234Aa3BDd379c48e1000d6C5e1BB17990c070",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0xFEE36C593A39e68efAB66C7ca0A38242344f68e6",
    allocationsType: "longVesting",
    amount: parseEther("7415.05716172"),
  },
  {
    address: "0xFfBB47Dd7D9288Ad3649E9ED11e95bd74d50eb82",
    allocationsType: "longVesting",
    amount: parseEther("7805.32332813"),
  },
  {
    address: "0xFfd2a8f4275E76288D31DBb756Ce0e6065A3D766",
    allocationsType: "longVesting",
    amount: parseEther("7346.18916437"),
  },
  {
    address: "0xfE52CC6f92184E09Fb788c02669678a73663d7a8",
    allocationsType: "longVesting",
    amount: parseEther("1798077.33"),
  },
  {
    address: "0x505Ffa6194f6e443b86F2028b2a97A588c17b962",
    allocationsType: "longVesting",
    amount: parseEther("727007.23"),
  },
  {
    address: "0x7F9FE19F789F12E0185CCF040F3b06c479a0882a",
    allocationsType: "longVesting",
    amount: parseEther("4843.63636363"),
  },
  {
    address: "0x7A6D5cb89F6B12f65F294Aa3F5dDD36c05D10e90",
    allocationsType: "longVesting",
    amount: parseEther("3229.09090909"),
  },
  {
    address: "0xfB60Fa2B8B6198464549b1554e9323b278BFF963",
    allocationsType: "longVesting",
    amount: parseEther("9687.27272727"),
  },
  {
    address: "0xa379d0E3beaB73a8edeab802f03E8cA2bEdAb063",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0xD64BbdF68E486aD7818F0D19df0c4D49E5593745",
    allocationsType: "longVesting",
    amount: parseEther("2421.81818181"),
  },
  {
    address: "0xcdDF4AA6A3a17e91C34750a8BAbD8cF88E1d7Bc2",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xFe552705fFFf6C765aad86972ce62D62Fbce908A",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xe79972Ad22fAc793bE02EC1E2E8F75b3Be1139aE",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x8Eb8F4D4b8A226A30B08f96c5625eF87b01ACE32",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x05a99b576B99B3d7ff403674cb8293D1427ff702",
    allocationsType: "longVesting",
    amount: parseEther("2825.45454545"),
  },
  {
    address: "0xB6A92cA1a4BAD54711cD4a7aC8e034ca1D364B26",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0xeb8A964655A1671DdbaF558F3DB371Ed3037153E",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x2bBa9EdBcA6B2C59150d2879Dc7141770DA65eb1",
    allocationsType: "longVesting",
    amount: parseEther("1009.09090909"),
  },
  {
    address: "0x72eCFb1742F5e2018A4DA9E117B26d88C2970786",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xAB6cCFca77F003B78b34be003EDb6a7F8Cd977B6",
    allocationsType: "longVesting",
    amount: parseEther("2421.81818181"),
  },
  {
    address: "0x4e8B569cdd5b8CcfDE8fBD3993BeB4431DfC023e",
    allocationsType: "longVesting",
    amount: parseEther("5449.09090909"),
  },
  {
    address: "0x821910fA3c1839BbFc3b430A487d4E3E134B05EA",
    allocationsType: "longVesting",
    amount: parseEther("3059.56363636"),
  },
  {
    address: "0x464eca38d5BBC13129300EE1b4Cf9FA4A5cA8653",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x623efe702Fdb8F182e47874FB15F6E5051A084ba",
    allocationsType: "longVesting",
    amount: parseEther("14530.9090909"),
  },
  {
    address: "0x728Cf88a50B9f11CaBcC53a7745ED7d0877eeeCA",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xA3D4f816c0deB4Da228D931D419cE2Deb7A362a8",
    allocationsType: "longVesting",
    amount: parseEther("6054.54545454"),
  },
  {
    address: "0x12B9C3d3E0e0e741877e7C600d157F8Ec6C5B757",
    allocationsType: "longVesting",
    amount: parseEther("11857.11111111"),
  },
  {
    address: "0x1dD7b0Ce308E3b2237C10ec2258c249842CdB17e",
    allocationsType: "longVesting",
    amount: parseEther("11857.11111111"),
  },
  {
    address: "0xC478d17Ebd354FBCBFD83880B8F82CE15453024C",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x320f055561297568dbf3fc4A4DC2453B53194C8F",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x983384cA67A7977Ae1B55c581f41BeD6A00B4d89",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x8AA8fB65748727543Ea28d1760Cd85a8EF2A7145",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x7e22EBA1E6C784aa2b516e3Cc82fd722Fad117F7",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x85b7843388DFB68eDa62E5AB521634Be0A1339c4",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xc84Bcf79Da6F3EAa3126874218B2dbB53a8b574c",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xE5B7ee210A924D49a1d19D87f25479E1326834F6",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x49736FD7B3dD63F6Fb36F01EA0FFb7e0706636Fa",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x597078723e82a101AAb82a9381a90E51272e09A6",
    allocationsType: "longVesting",
    amount: parseEther("13356.69421487"),
  },
  {
    address: "0xaf57127C7Ca017A1EcE8Ffe3d5636B6414D7E4B3",
    allocationsType: "longVesting",
    amount: parseEther("2752.0661157"),
  },
  {
    address: "0x6e96191426B8FA8a309Be0480160cc813137B278",
    allocationsType: "longVesting",
    amount: parseEther("13760.33057851"),
  },
  {
    address: "0x927D1138419418012d6131B8E950B5fb01B63b4e",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x57Cfc9DcaA027a86DfEc4C64C45480467861ec04",
    allocationsType: "longVesting",
    amount: parseEther("2160.09669421"),
  },
  {
    address: "0xf08b8De4b9fb44F9c68Cb2AC18dB98D57CCA9526",
    allocationsType: "longVesting",
    amount: parseEther("862.31404958"),
  },
  {
    address: "0xf2c237f14b95f8e76a63d6c2e27657184ea3d17b",
    allocationsType: "longVesting",
    amount: parseEther("6484.60165289"),
  },
  {
    address: "0x463BB7b7C8408F29A90A1c97ba4172806c89563c",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x3eed0f9DD2F3a99dc44fb19E63411E2A755C4723",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x2BbfEF2e707F694d9774962F81f4DA4A0BDc01A4",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x34BEb8cd75c785e0f0Fda9665dF4980f2E4D6Bcb",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xEDc03a3BF34Ed3e57b3CB0Afcd7b9c709eC5839C",
    allocationsType: "longVesting",
    amount: parseEther("19778.18181818"),
  },
  {
    address: "0xca26766a2e0c33E3ffCFcA6190163802D694d564",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x43D2ce73B4Fa6c739E3a7fEBb6B896BF4703cC59",
    allocationsType: "longVesting",
    amount: parseEther("908.18181818"),
  },
  {
    address: "0xA4cb87aDEba3DB195fb5C2Fd6d14149d6643846a",
    allocationsType: "longVesting",
    amount: parseEther("2421.81818181"),
  },
  {
    address: "0xcDF0AfB53510f178286235c3139aB9E752265457",
    allocationsType: "longVesting",
    amount: parseEther("2825.45454545"),
  },
  {
    address: "0xa97752f5e04b92266605B0d4b11933c3236d1aFd",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x1337385757101EAdDF04a77E58df24539baf823c",
    allocationsType: "longVesting",
    amount: parseEther("1009.09090909"),
  },
  {
    address: "0x24542aD7f344918a3C9661ECdf8420DC72902321",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xB114944375DDE69D77948Ea07bE9BEfB8951C6a0",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x2Fcfcd26705acaD289C8B2018Ea68b51D9588C7d",
    allocationsType: "longVesting",
    amount: parseEther("6054.54545454"),
  },
  {
    address: "0xa6f8F43b44011e5Ff0bA15D8a4b678A8A81CCE23",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x91e0f5c8be1b1dD7C2710f27Ef24D945cC0985de",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x0038f9f8D18200b9833F4648C23CFBA98C73434c",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xF265b7952e0EEDD9Bd799239Ef38d3567d8149Bb",
    allocationsType: "longVesting",
    amount: parseEther("8072.72727272"),
  },
  {
    address: "0x2066C6436Ae796AD892547BB8a3a813bea5d526B",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x458B2b4b7040ee7982b3a39cB547bACCc56293C6",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x92D5911Ce5f0fe1004F466A2601C4664Ae93cF32",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xc057d20520754A780f68E9e41348Cb7bEabCAcD8",
    allocationsType: "longVesting",
    amount: parseEther("6054.54545454"),
  },
  {
    address: "0x7F2598F1256A15a64742F603c1290538C937e247",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x2a7EDD9D378A91Bb4E36CF848d21f7F73ce2dA33",
    allocationsType: "longVesting",
    amount: parseEther("3430.9090909"),
  },
  {
    address: "0x3Cb8b33C9461d113FBEcFa52c45d136Ce438Ee71",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x3b174F1B252ebd9B66C636B3840D09A35cA5825f",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x6991E08C36917fDE2975940834C6d1AEEA85890B",
    allocationsType: "longVesting",
    amount: parseEther("1009.09090909"),
  },
  {
    address: "0xDbcda4b72f02B2ab30C0955ab213ebC39101944f",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0xFbB8a05D180B2628c11e5AaB673d048CfE6bf86B",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xD7F4AFEdD1a47b016ba122920A7E9C3AC2Bb810d",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x9660c2a6d75E1A53db798338A80D3A2Bf8E0F44F",
    allocationsType: "longVesting",
    amount: parseEther("1009.09090909"),
  },
  {
    address: "0xc03a1110853F44bea33132a205D3FAa15C9f6a77",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xCdCe310a7C3862bE539a8F699c91fe79289e9aE2",
    allocationsType: "longVesting",
    amount: parseEther("1816.36363636"),
  },
  {
    address: "0xC64A5dda14ae77583C0698334A978f17fE482eD1",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xD53FB32879f7558d2c76797c63089637b2b8aA0e",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x664fe59C81CE5a1e84f08d81abD981050197147B",
    allocationsType: "longVesting",
    amount: parseEther("3632.72727272"),
  },
  {
    address: "0xD884a40c58e6546089b0Fb8e8A0e8322e04Eb344",
    allocationsType: "longVesting",
    amount: parseEther("13622.72727272"),
  },
  {
    address: "0x24474Cf4aE452b056c7F6C2Da32Ac6270Fb119C4",
    allocationsType: "longVesting",
    amount: parseEther("1009.09090909"),
  },
  {
    address: "0x9aB14996AaE94a4a6A2aD5b109AEcF4A97CE7105",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x8426856D893e436CFDBdEbb364FB0E9255dBFb91",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x5fD9E16e699c2Cbd2bb21dd2be629AB51bbDE99b",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x8Aa37a4036F03ee2fc7F142F2ca7072411913Af5",
    allocationsType: "longVesting",
    amount: parseEther("2421.81818181"),
  },
  {
    address: "0xDEeDd12cFfba5bC745832B514b82d64eb6F5c2c0",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x0266218204a4cF9835B930281E5DBf59042fcc16",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xC6E29B6e9Db2870333CC18d5a43B1d8419cA293D",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0xAb57A16fA4e624Dc37950CaDF6D479982A7cF516",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x3a0A56b4446a2b8D3B3AA806c3B632896123063F",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x8A84B056F01E8e2dF3A1A0597a17f216Ede6Ac79",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x6C4E97FaD1F0E47714a5E5c6c44C4EAeDF6a18ef",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xa394Ba9A157743614D8b1e2f14B5Af04cBAFd5f8",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x5B66b832BFDbaC90Dc81Aa26D8F6b9A2CC945afE",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xc360D6322A5e27ad9269D4D4c347c8675d90dDF5",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x3bB4CE803054876d27Cc0816f60134f8144BFc1b",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x13659Af3E6f3f4f9a629976d5691aB7F8C926751",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x2B8c9826ce598a34623679DF8bfe83C13258A5A9",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x399760d9e05997a0709e4af445E437138b87Aa4a",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xc9992BBC89DA8C615db7b01E94B540f7461F961C",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xA4562146EB88cE184b9c2D07C7f9948a9A9141b8",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xFbDB396535Bf59af17487ea9Fe55F83A8B882619",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x44e48cBC74D0D7a4CC91536248Bea50AD770baC0",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xf9696D6C846EF4653B29ED484D170B5Eec5F55f3",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xE45D692276C18e325A2100E178c74D6cEf30b417",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x79a870303cdbb501c2c6BD1171d56452B10DE2D6",
    allocationsType: "longVesting",
    amount: parseEther("2421.81818181"),
  },
  {
    address: "0x24CfAE8782D685f775318DE11801535f4062Ba9C",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0xc6c9c71FC9226BF51a098B21e80ACB2aa209b9E3",
    allocationsType: "longVesting",
    amount: parseEther("13723.63636363"),
  },
  {
    address: "0x2EeF324e58df364ccd5F2244b5564a34c69AE702",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x19F242B50963d146579F20d60913fC6871f8795A",
    allocationsType: "longVesting",
    amount: parseEther("5723.56363636"),
  },
  {
    address: "0x212a5975E18Fa63195b119D427b42aB27C8e85f7",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0xB302c52dec4071B7bbb5b5E42b6F67D11d260f47",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x9FB766aA4f7D30bd7D599bbc4BFEd879C83AddCc",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x519a725cc17C8BC9c475d344ad959412d391C872",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xC623010da0b607241025732bD52F0906FdDfCB82",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x627Bf2e4ffA9be9273B9ad63F767d2aaCc8EB1fF",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x70463f181E08EA6b2F18Fb62F7E263c82b4155B5",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0x7f2022Daa9a6874F1Be3bcCc17bea1fD2a3eE1F9",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0xDe9bD8a6B86F2754944e6EceFFD6f7F02920e345",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x248795cf9d9613797820D657f58b7e1EcE5cE9E9",
    allocationsType: "longVesting",
    amount: parseEther("4440.11111111"),
  },
  {
    address: "0x1a05e0EF60c210a867e1ee18979E62bf0E0034FC",
    allocationsType: "longVesting",
    amount: parseEther("8072.72727272"),
  },
  {
    address: "0x8c009de92B2D0E968F070f4B3C419Cc66757c50F",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0x3aDEcCE2F7a223f745Ea762cEbcA46d5d3806C84",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x9e8330B082C2BDf5ff27081E813C7d8a4678506b",
    allocationsType: "longVesting",
    amount: parseEther("904.14545454"),
  },
  {
    address: "0x4B1Ee54feEeB11fd6908f1Ad9E539CAD0942CeE6",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x1BD2175E4a46A2a5b702FE5cB814B669941655c7",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xc5047e786A0194619C6A4b593170744fD31572Ea",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xdbf6182182818Be02e6d63136Be718431957fC75",
    allocationsType: "longVesting",
    amount: parseEther("2421.81818181"),
  },
  {
    address: "0x44fEa6d05ADf66C0b74DE8D4c925Cf857C4746aC",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xE126072cb66e69AF5b780Eda309E1c5574Dad91E",
    allocationsType: "longVesting",
    amount: parseEther("6054.54545454"),
  },
  {
    address: "0xD25bdEc55b87d551E52442B61d4B52d3a08646aD",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xF0Cb260454c55713BeC9ff56Ed1504600dd59ae2",
    allocationsType: "longVesting",
    amount: parseEther("8072.72727272"),
  },
  {
    address: "0x412398E51DAD89b6145fC0C48EB451381B751a66",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x929aCDb10c327E72314E8165c134615479929208",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xa43C3352da8f92DA25F540C1Dbf0fc2e2C8a6032",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0x9d6419ea912fd176860102014ca422e31dfeea3c",
    allocationsType: "longVesting",
    amount: parseEther("4440.11111111"),
  },
  {
    address: "0x7Cb5B7F86843eca14AF37f3A76f94838a02e74A9",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xde27ee24493375b3a0a5b80abb7836289c2e5657",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x87F3D72207Bdef00EACa63E5Aa9ee2B96515242c",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x2d70Ec33123A9B2127216C07658d7148Ca172113",
    allocationsType: "longVesting",
    amount: parseEther("1345.07231404"),
  },
  {
    address: "0xDD7586cf8e16Ae596288E647e39B840e367e1F82",
    allocationsType: "longVesting",
    amount: parseEther("21557.85123966"),
  },
  {
    address: "0xCeC0F9052Fe84201F9754F0A30281deC1e858cFe",
    allocationsType: "longVesting",
    amount: parseEther("1676.46694214"),
  },
  {
    address: "0xa21FD1949B0c710e3df8f57dc5B551E5657B4c98",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x0120c580844733F4461a598c7B70C54255dEC6B5",
    allocationsType: "longVesting",
    amount: parseEther("2339.25619834"),
  },
  {
    address: "0x76b2e65407e9f24cE944B62DB0c82e4b61850233",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x62DDF12bF38E78F37C0bb775Ec575a80F673fdE6",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0xf5E44C067B571384166dA7a13fF198b70cC0177E",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x5843a21b5e4fe8CB81CE36B0ca54EF11AE2e156D",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0xBD90caBA122Dca03d1C271f733b42483D3E36F00",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x835747c2BDC20665C82dB60eb72865c8d3a9f27c",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x782DdA0228dc0983743a8Fe699C5551A9F8f45df",
    allocationsType: "longVesting",
    amount: parseEther("974.69008264"),
  },
  {
    address: "0xE0ECDB6a6812AbF450f5Dd6A3DDfae5A457d9455",
    allocationsType: "longVesting",
    amount: parseEther("93570.24793388"),
  },
  {
    address: "0xc15F107bdA50977F2D32662d87fCB83b2CCFadF0",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0xDc0642Fe90EA512f105079DC929F7Fe2AC9ecA83",
    allocationsType: "longVesting",
    amount: parseEther("974.69008264"),
  },
  {
    address: "0x91d840a188a0bbc4ED11363fF71480D354ad76f9",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x6f2462B5a30a7f326CE2602B84Aa312aDF639f78",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0xf31A977BEd34aD553C66Af46146D3605f8084AFd",
    allocationsType: "longVesting",
    amount: parseEther("3119.00826446"),
  },
  {
    address: "0xD0d74198CE5bED494D07b30E758954789d7B4352",
    allocationsType: "longVesting",
    amount: parseEther("8967.14876033"),
  },
  {
    address: "0x942840681d4daaa4e184F8eaa915665A44A1c4F4",
    allocationsType: "longVesting",
    amount: parseEther("974.69008264"),
  },
  {
    address: "0xaA5B5c4B5AdB15dE8aE11A9B82dE0C6257DC80f3",
    allocationsType: "longVesting",
    amount: parseEther("1676.46694214"),
  },
  {
    address: "0xbB6BA61F686531Ec892ABaCf996fc85DfDa1178d",
    allocationsType: "longVesting",
    amount: parseEther("2144.31818181"),
  },
  {
    address: "0xcEF78DA0016b183Ab17BE57A014008A1813B3de6",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x373F30290f1af36c9EbA74072d2A9130959C98BB",
    allocationsType: "longVesting",
    amount: parseEther("10086.0929752"),
  },
  {
    address: "0xe01dCc4fa20c48c4d7008c04F57b2cf2F9E32700",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0xA63A1371cCE7586582998ba582839064620B3F83",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x7d893631120b6B4041B63Ca52a1d5418Aaf3593B",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xC55df7d60a46D346b6EB62d54e17C0Ed1A252582",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x2Be4de4808cbdaCEbF20B25917F1880379Dc2354",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xCc43CADFE71Ec056766A462e89c29652775c6b89",
    allocationsType: "longVesting",
    amount: parseEther("974.69008264"),
  },
  {
    address: "0x40509680E320943Bc43b421864d8deBd5D84E8Ea",
    allocationsType: "longVesting",
    amount: parseEther("6043.07851239"),
  },
  {
    address: "0x9633F76b9f39FF917c1144908180bD4CA5930bC5",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0xbc66B9E2e3a6DFcBD6AeC31fc355bc9Ab6554afe",
    allocationsType: "longVesting",
    amount: parseEther("974.69008264"),
  },
  {
    address: "0x4fbAcef6eF333e111f0432153C2AA3e55052045a",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x5bfD8ceC8dB6A6c41667DfB247C4b2E8de7AF527",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x2c095Ef51410e0BFbFB60773b648451EaB84D0C9",
    allocationsType: "longVesting",
    amount: parseEther("2339.25619834"),
  },
  {
    address: "0x6ea3A5faA3788814262bB1b3a5c0b82d3d24fCA6",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x54e082D608252F18b05aC3cF1B48587b83c863ae",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x833B3E6ccC7750a5D5a19e8d046486029B76fB16",
    allocationsType: "longVesting",
    amount: parseEther("3119.00826446"),
  },
  {
    address: "0x3A64f1f65d8aa408Df2fb8eB649605600B74F080",
    allocationsType: "longVesting",
    amount: parseEther("3119.00826446"),
  },
  {
    address: "0x44d0C9D6a7Cb401af8634Fe79DbF8C1D014BC5CA",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x1fef13bb08f60edE899eF191aA932b20cdC773cA",
    allocationsType: "longVesting",
    amount: parseEther("4288.63636363"),
  },
  {
    address: "0x45FEA6bc772faA8585DacEeDbe0F22aA73C2A85D",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x27cb0a894f68e6b2407643d65589f7629c112247",
    allocationsType: "longVesting",
    amount: parseEther("896.71487603"),
  },
  {
    address: "0x54A9C9D8907e5B740D97677AE96c2eFBC483c34D",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x07237dfD95c5E499A7f34F5BA5760c73A68aA7E3",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x0821711E54a756eF015935fd832f4339482Ab81d",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xD2b29e65bC4FB39978Ce34FDFd6d12607B1158F4",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0xb743118e2450F5D1A0bAA9D1ddcb56DbfD712f96",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xDfad85f71aEc47ffEa11C048e5CC0AF8b12589E8",
    allocationsType: "longVesting",
    amount: parseEther("3508.88429752"),
  },
  {
    address: "0x403fc04951B9364BbbE56b6F65Cf6D83c2b7A880",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0xa715c136A16D8283f0079707D60Cdb3BBD6Fafa5",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x7a9A84245AA7E4E15Ec5a84882C849Fb33Cf4805",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0xf4BDd7185B34bEeEC393c11f06c354b06370D492",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x1514528aA38CFD359D5376a3272Ed95Ca2C3ce00",
    allocationsType: "longVesting",
    amount: parseEther("2339.25619834"),
  },
  {
    address: "0xD4F3E81cb54c161a581e984718783935eb2e11Dd",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0xe8501192FE835D1d220fFc03632A44088929cD1E",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0xCa8da2184D5d6d734746D15D58f6Fd5fB036733d",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xbb7b2ec52Be72bcE5aDCBf9E3F03B9beB9E387fE",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0x57790734E208d8D50d624c474988853Ae10dc069",
    allocationsType: "longVesting",
    amount: parseEther("3508.88429752"),
  },
  {
    address: "0x1e05936bdae25a05ff72b2ea271d11eef50853af",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x587bbeEdb0490FC6F33a6fdF53eefDfDf6fDa9AF",
    allocationsType: "longVesting",
    amount: parseEther("5263.32644628"),
  },
  {
    address: "0x4e449ed56752ae2b8ec6c0fb3360b658b24e6e51",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x99Bc14A6a3904E1B57f9710E46c0b2C1c090c430",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x780B647C8Fcb1dA0C10e491556c57BA88E2C5C13",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x86ec38e94451bD969Bf1d7ec7e43Ded5D57a9c0D",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x43865b328Bb1e7b15416c5D46736Ec7294272053",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0xd27fFA5EF984766B46b57beb1e9AcCF2EDf704C4",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0xE6420ffB24567A515ec9a86Fb4d4062B71b0bf69",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xb0A17EFB10ff9Fe8CE02FC1504194330F529020a",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x78a34b90b4BcC8CAE02e6795B02F66C3747c2982",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0xb967e3dC53080431691115560b8076C1F52fAA89",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0xEf7D451cD454bfC1136a3b8BD62a21c3B69f9bCf",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x68aE12d2b917f6517D4F6C3bD1726c3bd6Baa057",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0x109Ed7F996db76e48D442b49Ff9Dbc2D8afc3dAc",
    allocationsType: "longVesting",
    amount: parseEther("2245.68595041"),
  },
  {
    address: "0x2E4098971cBE73A08FE208D0f694eD355b810cd3",
    allocationsType: "longVesting",
    amount: parseEther("1559.50413223"),
  },
  {
    address: "0x1aa0549da784FcB484df00363c4C8BA5DaBC0c1c",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x4FF80497a9E4775C69B203d785FD437F636D76f4",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x8EB28fAd69d9A69392fF1e6b4ab23061665B362e",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0xCb51997cCa1d0a64e647Eb5C5Ca489757Bf02566",
    allocationsType: "longVesting",
    amount: parseEther("2339.25619834"),
  },
  {
    address: "0x49e28333b9EA6b584cbb92314162b2f955380C7B",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0xe8EBC3a40fd740101e3380C8DEaB90503B157C4c",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x6c9e5c18fcd30fDd706DA99a5939B81433a9A59C",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x3c4ad3BF9b10774bbaE83356f44abfC004Ee915C",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x85aB86C05a08c9d890d36344e233B1A26C070e9A",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x75B8f00Fc5d55691B4E6cfc204729e6F7E427BB8",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x03059cf75eeaC964027C59745E0e074bd042D2f0",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0xa6056c7e11C3De21333327888Eb3d050d8A1B151",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x818f0E05BE38f947Cd33492e61cb3b32492270B6",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x8D25c0aa0f2b1Ea711f3E3F82ABFBB68B2517eCf",
    allocationsType: "longVesting",
    amount: parseEther("2729.1322314"),
  },
  {
    address: "0x01703761799c53Ca37391D8A25A6a5d0c7c5215f",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0xE2934d7249abe8E299EdcC9C6A47CE5BBCA24f22",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x1688FFf1ecdf9F26c8482E311F4AeeA313E5a084",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xBcAe07fA7f743FCaE104e6cAA27131A623Bf68f5",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x976FF9D81150AbB87F2f8eDfeF0C47BE43B1F747",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xd0b3C80ece19AEA33bE80a70e0B1b4C0cd2dA3b1",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x1C65A83fa81F7DD7f2ff7C6b1c99296af3be3Bbc",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x74f7999c53879146853fe3661F147000D5721182",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x1E45D6e57dff5DAdb8314DA145C1A197c9F027D2",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x54dC9A8B6A8359c1E4af78D70a1951A2113026F0",
    allocationsType: "longVesting",
    amount: parseEther("4036.36363636"),
  },
  {
    address: "0xA2214bfd5e7a514b5ed6d0eA4e7d74dffcd91394",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x7Fb653f2F5A3ffa425F8e9A9efdFF6778217ae26",
    allocationsType: "longVesting",
    amount: parseEther("3119.00826446"),
  },
  {
    address: "0xd8155b44C1487F7533279b27C6758931f5a91743",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xbC18Ae4A29d863fe16f1dd1c85698D08E04ed252",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xBf19aDD832ff6528d9c3dFeeE9a2b2f14F47c4E2",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x8A51f602b8a72301971302faec75826C568c145A",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0x0B59f9C0De9BFb654cb902E4be6EbaE3AB82a54f",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0xeC8b0C1A752fd9e94F38560a0D3Ab3A8F88e7b24",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x23FD85cf36F86169aef55D5c83483c9120BAB8fa",
    allocationsType: "longVesting",
    amount: parseEther("3902.6590909"),
  },
  {
    address: "0x37E0f7915386399Ce49cD2Ee629Bf1924E38e8E5",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xfFBDEfa1709432092c544974487b0716FBc01de2",
    allocationsType: "longVesting",
    amount: parseEther("4575.30991735"),
  },
  {
    address: "0x64BD665c05ad0c1EFEce634c9E770F3795cdd7C7",
    allocationsType: "longVesting",
    amount: parseEther("11111.46694214"),
  },
  {
    address: "0xE1afb9FD19F6C7865481504194bab01c65067148",
    allocationsType: "longVesting",
    amount: parseEther("917.3553719"),
  },
  {
    address: "0x8433d060ae91A75a291c97Df16720748529Abf8A",
    allocationsType: "longVesting",
    amount: parseEther("917.3553719"),
  },
  {
    address: "0x58d9396B0dfa8a9a66C6e52Af2CaA9BC9A520dB1",
    allocationsType: "longVesting",
    amount: parseEther("21787.19008264"),
  },
  {
    address: "0xB65d9f05d2B7AF82a42F14274B54aD9BDe0Ea64E",
    allocationsType: "longVesting",
    amount: parseEther("917.3553719"),
  },
  {
    address: "0xa2Fcc9006eF3C7FfaAcD9fbAf18da98098c0f85b",
    allocationsType: "longVesting",
    amount: parseEther("1376.03305785"),
  },
  {
    address: "0x3fd431A926Ea26dfdbc0810BA45c1fc9faFA6FB1",
    allocationsType: "longVesting",
    amount: parseEther("2178.71900826"),
  },
  {
    address: "0x6E46662eDb8810b12A896F48F15751F9114c5579",
    allocationsType: "longVesting",
    amount: parseEther("917.3553719"),
  },
  {
    address: "0xe3124F5A7E3C2680C5B75735e7787d39dff717AB",
    allocationsType: "longVesting",
    amount: parseEther("917.3553719"),
  },
  {
    address: "0x13D861cF3244F0862994C6b576619050b888412E",
    allocationsType: "longVesting",
    amount: parseEther("458.67768595"),
  },
  {
    address: "0xF4D401922DaEAED2a3d3F624dD14064A9E92B02d",
    allocationsType: "longVesting",
    amount: parseEther("28071.07438016"),
  },
  {
    address: "0x240e1081Be54DcD7f77BB4af3033133848eb93A5",
    allocationsType: "longVesting",
    amount: parseEther("8714.87603305"),
  },
  {
    address: "0x62A0b5C2ea4FD07629bAe6D319bAF6DFFaa10a7B",
    allocationsType: "longVesting",
    amount: parseEther("32767.93388429"),
  },
  {
    address: "0x64853792beC3bfA7502E457058C3839c9b6040aF",
    allocationsType: "longVesting",
    amount: parseEther("3898.76033057"),
  },
  {
    address: "0xE6052A0D78e37f9701A201222A32191Eee3c93d4",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0x13E785c312d29e8195c3d255fD123a447EE5006C",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x617A47F1A35a0c6CF281202832De19661E441A3E",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0x1377bdbc9624db934D8345fe87563C71062E3874",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xA750B9f4E82c5a012F9F9CfC634ef98fD59b80bE",
    allocationsType: "longVesting",
    amount: parseEther("1949.38016528"),
  },
  {
    address: "0x1047C916c75545a13ACE42F4504678d722A3Ea22",
    allocationsType: "longVesting",
    amount: parseEther("779.75206611"),
  },
  {
    address: "0xfD39fCD74496DA525D783ABe9742D82e8ac4fE07",
    allocationsType: "longVesting",
    amount: parseEther("1169.62809917"),
  },
  {
    address: "0xABdf60f889F243788Dd6E6fdF093fcaA91B9A8dE",
    allocationsType: "longVesting",
    amount: parseEther("9696.44628099"),
  },
  {
    address: "0x6D75a622cBD16C6bBE037556dE5379E2E65A8602",
    allocationsType: "longVesting",
    amount: parseEther("807.27272727"),
  },
  {
    address: "0xAdA7673B48D656a87cad01bCbAfe6B1eE6d621ed",
    allocationsType: "longVesting",
    amount: parseEther("3229.09090909"),
  },
  {
    address: "0xe840fd66EC0c42a691de5fD3404F36232b610D09",
    allocationsType: "longVesting",
    amount: parseEther("1614.54545454"),
  },
  {
    address: "0x5fb326E4Def0432606F3E330Af10Ae597B12a746",
    allocationsType: "longVesting",
    amount: parseEther("2018.18181818"),
  },
  {
    address: "0xB536Ec6752F97c66EBE97d47e81325da4f562e0D",
    allocationsType: "longVesting",
    amount: parseEther("1210.9090909"),
  },
  {
    address: "0x59b7dbBDcc1eD1f48f18e9a5CB76f96f6Fe00FFE",
    allocationsType: "longVesting",
    amount: parseEther("41739.66942148"),
  },
  {
    address: "0x815706Ea0846e0B1eDa37cC402b99cb955853f84",
    allocationsType: "longVesting",
    amount: parseEther("24140.20661157"),
  },
  {
    address: "0xAd6C03eCA99aC1308dC6Cf33cD75333d2A629c74",
    allocationsType: "preSeed",
    amount: parseEther("500000"),
  },
  {
    address: "0xc54d45A32fE4456A2002462417bA1e70B6557498",
    allocationsType: "preSeed",
    amount: parseEther("500000"),
  },
  {
    address: "0xdAD1971fE99b115fA6e357C4De78EBAcB623e23b",
    allocationsType: "preSeed",
    amount: parseEther("500000"),
  },
  {
    address: "0xF03f2303cC57bC5Cd63255749e86Ed8886Ca68Fc",
    allocationsType: "preSeed",
    amount: parseEther("500000"),
  },
  {
    address: "0xfD1FdA9a35d3cA9f8779C8b1348d6d9E129e4eb1",
    allocationsType: "preSeed",
    amount: parseEther("500000"),
  },
  {
    address: "0x00618d8632ec0A827705b44E8D83F37eacB202c1",
    allocationsType: "seed",
    amount: parseEther("525210.08403361"),
  },
  {
    address: "0x03FB257F614F9902BC4e3Dd7458F644F5583b55E",
    allocationsType: "seed",
    amount: parseEther("420168.06722689"),
  },
  {
    address: "0x04Fd982417a0648Da0d83C0e1Fbd02aeBF3C33d1",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0x0F8EeB1b776B8E1c64BaAFdA5cdF6E4a6f3ca1A2",
    allocationsType: "seed",
    amount: parseEther("420168.06722689"),
  },
  {
    address: "0x150be62edDDD543452545e502bCAF6800BcAF2D6",
    allocationsType: "seed",
    amount: parseEther("31512.60504201"),
  },
  {
    address: "0x1E6E27012C4B58D113f12D246a296Ce0921FFbE9",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0x297373DFFddF8C08EbAe9ce2e4aFC91CB6F3BE66",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0x29e794c17e66bf632b432b425f717720fcb66b29",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0x2b90549655C8E0dED84076Ee88068f35aDbFDe39",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0x2E2615Ed41653Db125311Fd9C0C2F7450A94C14d",
    allocationsType: "seed",
    amount: parseEther("1260241.59663866"),
  },
  {
    address: "0x2f2c92887f19adb7003d55c1c212f3a7eafaa170",
    allocationsType: "seed",
    amount: parseEther("105042.01680672"),
  },
  {
    address: "0x3421BCEAF54BE14a8f0f8EDE4105b4112F1Df021",
    allocationsType: "seed",
    amount: parseEther("437500"),
  },
  {
    address: "0x3622207261026fC3FC30492eCc2CC260cdd989B0",
    allocationsType: "seed",
    amount: parseEther("1250000"),
  },
  {
    address: "0x4137eFf0f2f26a7837A48d2622e117d8E45828D6",
    allocationsType: "seed",
    amount: parseEther("157563.02521008"),
  },
  {
    address: "0x41d5039153843e3eB7Ee3D5aE7aEbbd09dbdD262",
    allocationsType: "seed",
    amount: parseEther("315126.05042016"),
  },
  {
    address: "0x423eD3Eb34693f9621b6729b69C92eFc8054200B",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0x4Ba57e1EfD31Dd93dA56FB2Ee5169D5b879794dD",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0x5304B8dCbBCD77aFE3371B8d94A46cdE3bbE2aC1",
    allocationsType: "seed",
    amount: parseEther("1250000"),
  },
  {
    address: "0x53b13617181AD9D58A18E5ccbae3CDc5F16cABFf",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0x545B8761179d08E15CE4788bB028f2a4a8efF624",
    allocationsType: "seed",
    amount: parseEther("2100000"),
  },
  {
    address: "0x54e92079b11346ef98bb51001E2F4843ebDb6897",
    allocationsType: "seed",
    amount: parseEther("157563.02521008"),
  },
  {
    address: "0x6923DBE307Ee5e86244927b523fe62BBF6765070",
    allocationsType: "seed",
    amount: parseEther("105042.01680672"),
  },
  {
    address: "0x7AD8d58850d85cf3b8FBdA2E990d6f8a59f80A38",
    allocationsType: "seed",
    amount: parseEther("315126.05042016"),
  },
  {
    address: "0x82AcF40E6F4e0A40F701dA8b14d7962bF797420D",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0x885Bb7c0FC016657043b7F54c803fB326c8D3101",
    allocationsType: "seed",
    amount: parseEther("315126.05042016"),
  },
  {
    address: "0x8Ed21E19bb8B4613aa646596555D876F21672C53",
    allocationsType: "seed",
    amount: parseEther("3676470.58823529"),
  },
  {
    address: "0x8EdF3AF06DAc00F559f03f8a67761F5Dde04B11e",
    allocationsType: "seed",
    amount: parseEther("875000"),
  },
  {
    address: "0x8f6854C50763dEA74699E03b97369EF050B4Ad0d",
    allocationsType: "seed",
    amount: parseEther("525210.08403361"),
  },
  {
    address: "0x8f9dD9faF8E9aD2b94F27A5DaC911B79525B2f2C",
    allocationsType: "seed",
    amount: parseEther("250000"),
  },
  {
    address: "0x93e8dfb477715Fd189D373bB83edEe7CAd3768bD",
    allocationsType: "seed",
    amount: parseEther("525210.08403361"),
  },
  {
    address: "0x9926Bc32679Af9A10D5A5a3eF24EA58C8579fd93",
    allocationsType: "seed",
    amount: parseEther("105042.01680672"),
  },
  {
    address: "0x9CE58776A840f487591d1aEC066838e47EF624FD",
    allocationsType: "seed",
    amount: parseEther("157563.02521008"),
  },
  {
    address: "0x9d362DD61c6662C2EaA47f8Dd7328B83224b4028",
    allocationsType: "seed",
    amount: parseEther("52521.00840336"),
  },
  {
    address: "0xa07A669a02E9255F2dAdDf8E35e6ae693e05C31a",
    allocationsType: "seed",
    amount: parseEther("525210.08403361"),
  },
  {
    address: "0xa084573A13F3742e134dEb667a59E062896007e1",
    allocationsType: "seed",
    amount: parseEther("315126.05042016"),
  },
  {
    address: "0xA0d8f6c24394EBBeBCE0A4a8618e0A4eD70Ee22A",
    allocationsType: "seed",
    amount: parseEther("126050.42016806"),
  },
  {
    address: "0xA2dCB52F5cF34a84A2eBFb7D937f7051ae4C697B",
    allocationsType: "seed",
    amount: parseEther("250000"),
  },
  {
    address: "0xA42498f6FCcFD2FdB3Dbebe4C396AdD0d9925a61",
    allocationsType: "seed",
    amount: parseEther("52521.00840336"),
  },
  {
    address: "0xA43C4604D91cb30514bCeCc1DCf36F6578eA68E0",
    allocationsType: "seed",
    amount: parseEther("125000"),
  },
  {
    address: "0xA5417A6d184A5d5e26645DD9E8D60F3F1AdbCB01",
    allocationsType: "seed",
    amount: parseEther("262605.0420168"),
  },
  {
    address: "0xAbD226463FC8169567a6A4b077Df2d28051199e9",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0xAE8cE6Bb2B95684f57c097B407f4e9B55D9CA432",
    allocationsType: "seed",
    amount: parseEther("735294.11764705"),
  },
  {
    address: "0xAfb8B58D561c6DDb6CEf703278ecFa2fF5216646",
    allocationsType: "seed",
    amount: parseEther("21008.40336134"),
  },
  {
    address: "0xb11b354517dfA58edE5f9CA28b93805CCc242855",
    allocationsType: "seed",
    amount: parseEther("42016.80672268"),
  },
  {
    address: "0xb8c0A08f3f18b804c50A7C9Fa64FB6FA289ff027",
    allocationsType: "seed",
    amount: parseEther("21008.40336134"),
  },
  {
    address: "0xbb75B7Cf7Aad0ca612FC7E5Af336688d0A1ec701",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0xBdAf0426A7d58E8C5CE8e48411BF6e5BFc6e3Ac5",
    allocationsType: "seed",
    amount: parseEther("437500"),
  },
  {
    address: "0xBeC351a88FA58498b86e42500DC36436dB65A752",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0xbf3460A2Da0c2D0841B6550b9dec5507F642422B",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0xbfdd960844765b1bac0bf1f01a84fb1f5aafe9bc",
    allocationsType: "seed",
    amount: parseEther("315126.05042016"),
  },
  {
    address: "0xc4ca7afc9770c1eda9b2c8218679f7a7c6943be2",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0xC5eB8e2b54773Fd59feDF43830a5056470E1649D",
    allocationsType: "seed",
    amount: parseEther("105000"),
  },
  {
    address: "0xc6E18038Bff8BE600af33501EB4Bb8B268A3f81e",
    allocationsType: "seed",
    amount: parseEther("717783.61344537"),
  },
  {
    address: "0xd25E1b6bb02823658a4b3c0F6C689046a52E2B23",
    allocationsType: "seed",
    amount: parseEther("52521.00840336"),
  },
  {
    address: "0xd454D5B39eF01028caCCCa649F7D64e73369Ed5B",
    allocationsType: "seed",
    amount: parseEther("187500"),
  },
  {
    address: "0xd52dc2dbC23bDC3e7C3ea9943cd820ADF15B9931",
    allocationsType: "seed",
    amount: parseEther("262626"),
  },
  {
    address: "0xDa508B621b18A5eB66360EBC62E3141782757983",
    allocationsType: "seed",
    amount: parseEther("525210.08403361"),
  },
  {
    address: "0xda58EC891dAb4E6133cc1c878c719877DD303d83",
    allocationsType: "seed",
    amount: parseEther("262626"),
  },
  {
    address: "0x3b883762d4A5af23E76Ef463F86aad0dB1610061",
    allocationsType: "seed",
    amount: parseEther("4201680.67226891"),
  },
  {
    address: "0x752D11a9Be19Cc9f1F06b33c9DCb99E375B62562",
    allocationsType: "seed",
    amount: parseEther("5252100.84033613"),
  },
  {
    address: "0xDe49fb5e6C31A0B06AdA2e1F89eb2CAee84a47Be",
    allocationsType: "seed",
    amount: parseEther("437500"),
  },
  {
    address: "0xE30221bA49E6d2eF1bCE23bB7262A1aE5f3ffB99",
    allocationsType: "seed",
    amount: parseEther("1050420.16806723"),
  },
  {
    address: "0xE6a4e2E965F73FA2cAC443b737aABC8986323FC1",
    allocationsType: "seed",
    amount: parseEther("31512.60504201"),
  },
  {
    address: "0xe969Bf18fbC0Ed94fBeB0821d347d0525a2C880A",
    allocationsType: "seed",
    amount: parseEther("31512.61"),
  },
  {
    address: "0xfccd85f42ac29344dfe72469bfcc69d9c024bd1c",
    allocationsType: "seed",
    amount: parseEther("210084.03361344"),
  },
  {
    address: "0x4a5BB1c9347A0d4F7e06a29239162f03647d9232",
    allocationsType: "seed",
    amount: parseEther("2100840.34"),
  },
  {
    address: "0x0008906cA2e1d42DFb6BbCDA7f9B709A0cFA8dfc",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x001d551a13880035548cd2bBD9A11DeEC59E2423",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x00a2b7F25Fe012d03D2508e20Aeaba350F08BE6e",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x01d12EDA4911F653E84C56b11288486D80feDC3D",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x03923eFFD5674CDdc1b71c3bbdD1dB1D8837bB26",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0x04d6C2746B08Cd9f4Dd32e3b8ba9404CD0A2B9dE",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0x050987EA138CFC0b852eD9E0D8C5c7C3198a0DB5",
    allocationsType: "shortVesting",
    amount: parseEther("5370.56010391"),
  },
  {
    address: "0x0556917aE326eAf4860d5DA732D43583d67D311e",
    allocationsType: "shortVesting",
    amount: parseEther("18528.00544595"),
  },
  {
    address: "0x0694016A048C4A52dA759aEa028F66Dec88c117B",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x06DC0DA48690D4c99fE8d162877adF5F6f3C0054",
    allocationsType: "shortVesting",
    amount: parseEther("7983.26501933"),
  },
  {
    address: "0x08F40236DDa1104fDbbcFFDF40a7e97C9B5E3cdB",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x09aE621cb216DD2b034738D6e52d9eC532eBb239",
    allocationsType: "shortVesting",
    amount: parseEther("17076.50273053"),
  },
  {
    address: "0x0a0aba963de3bd2741b31903e5cf7df57a1a4185",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x0B3bfB65881AaA5fAFd8488F3c1E15ED12D8a3Bb",
    allocationsType: "shortVesting",
    amount: parseEther("7257.51365394"),
  },
  {
    address: "0x0b69202B80dd74fdd5d26576DDaE0Fc188E504E2",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0x0CBC7A0EDA0e51267a8c4F2888cAFB3aAa8007c9",
    allocationsType: "shortVesting",
    amount: parseEther("15368.85"),
  },
  {
    address: "0x0E3E1a15A95A65939f6C074259329D0b6A7D0A7b",
    allocationsType: "shortVesting",
    amount: parseEther("15368.85"),
  },
  {
    address: "0x0F4625efC3427547a209A8EEab0c657abCb984eA",
    allocationsType: "shortVesting",
    amount: parseEther("853825.13661202"),
  },
  {
    address: "0x10Ca37ca30bd0F021e5Df441127804240Adc12E7",
    allocationsType: "shortVesting",
    amount: parseEther("11953.55191256"),
  },
  {
    address: "0x13533D8987836FC6cbE1CDf7F5669A6DEF4E71f4",
    allocationsType: "shortVesting",
    amount: parseEther("2032.1038231"),
  },
  {
    address: "0x14fc0829cEdCB20e133D524D767BA1Bc8b7bb71E",
    allocationsType: "shortVesting",
    amount: parseEther("85382.5136612"),
  },
  {
    address: "0x1505e9DDbaf08EC2D6684087615059fFf21d7c70",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x150be62edDDD543452545e502bCAF6800BcAF2D6",
    allocationsType: "shortVesting",
    amount: parseEther("853825.13661202"),
  },
  {
    address: "0x154d455D70Dfe6c8E2987946fdA471DA30cBeD03",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x18D8032f7c11663068D36ca79954B9E28d653ca3",
    allocationsType: "shortVesting",
    amount: parseEther("11612.02184631"),
  },
  {
    address: "0x19bE90ee9388009eB87c015C66A0e2B54DbB5040",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x1AcDb95F8934f059aDFB8c8493c04BC1Ff18d46f",
    allocationsType: "shortVesting",
    amount: parseEther("1741.80327694"),
  },
  {
    address: "0x1d06e5ff1510c1E25B9603AbDdcd2D872468267C",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0x1D60f2feA3B3A48c46B6Dd560f060E5490fbb8E9",
    allocationsType: "shortVesting",
    amount: parseEther("870.90163847"),
  },
  {
    address: "0x1dc36E8919AAd955b3a1092A49d57dB3bd943973",
    allocationsType: "shortVesting",
    amount: parseEther("2732.24043715"),
  },
  {
    address: "0x1FaA87e80B471547b47608909340114498527AB5",
    allocationsType: "shortVesting",
    amount: parseEther("2249.82923272"),
  },
  {
    address: "0x21BBAA49ba624d88Beaa02057c423BC2cd9da102",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x2260d06ed3D33DE2B010a4087542499b095BBA22",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0x2266Fa97C286440dF05481880B51cdB2d78AE30F",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0x23461e24F1D7601a674ab672ADEE0b4459302214",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0x24CCC59077A80AB571bC782ED6D454593e899E5a",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x24d2628d0ac796209700a4932212e1aa8c65785a",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x26D82B4363344A4f22ac6aAd759c82E6c4d8245c",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0x28aa4F9ffe21365473B64C161b566C3CdeAD0108",
    allocationsType: "shortVesting",
    amount: parseEther("1707650.27322404"),
  },
  {
    address: "0x29767f86654eceC171bb9AE0A65A15D38F85816c",
    allocationsType: "shortVesting",
    amount: parseEther("15966.53003867"),
  },
  {
    address: "0x2a4E0C762F17d9EF40201F9e66d9540050094f0E",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0x2aBd8a469fE2f4142f2A9bd68B2cE390f14039e3",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x2cD97bF5601B17eC683FF2dFDD593a8ee0352498",
    allocationsType: "shortVesting",
    amount: parseEther("1707.65"),
  },
  {
    address: "0x2f17C29A1584f1fE80cFB5FD60ee4eA0314602Ff",
    allocationsType: "shortVesting",
    amount: parseEther("2081.45491595"),
  },
  {
    address: "0x2f1C71D4134B4C154BF946aeb9A94cc2Da1efe59",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x3117F144849Cc039F264B01365c9cBc62e47DC96",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x322D19EB471f8e6380D200AaaE9632593Cfd1B80",
    allocationsType: "shortVesting",
    amount: parseEther("21787.05598914"),
  },
  {
    address: "0x342B8a6F00b239e8D6913FfDEC988b66864bA18F",
    allocationsType: "shortVesting",
    amount: parseEther("887.97814207"),
  },
  {
    address: "0x35a727DC6C20781D4015fD8A75B7f44F2a221F3f",
    allocationsType: "shortVesting",
    amount: parseEther("39233.3"),
  },
  {
    address: "0x35cBc1d7eC6Db356f76941f591B54aBD75BbDA8E",
    allocationsType: "shortVesting",
    amount: parseEther("58913.93398002"),
  },
  {
    address: "0x36fa3BaA59661EaA6d1eE8851F00BFAa188C028C",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0x3821BEEF5d4b90412A251f0F29faD256222c03c1",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x38E27A3bDcbeE2786bB35eD9b9a64471A982f1fF",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x399a0AB358Cd880b7DF71896CdC8Cc233ec1134A",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0x39DCE07172E1aE48a5cFA9fD31511B6052e52600",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0x3a77E1A94BAe74B777F90062cc48E3ce18d5D5a5",
    allocationsType: "shortVesting",
    amount: parseEther("20747.95"),
  },
  {
    address: "0x3a77E1A94BAe74B777F90062cc48E3ce18d5D5a5",
    allocationsType: "shortVesting",
    amount: parseEther("3842.21"),
  },
  {
    address: "0x3a7efeb6c1c6032036cb20640526fa99e896463b",
    allocationsType: "shortVesting",
    amount: parseEther("15368.85"),
  },
  {
    address: "0x3ceb5C2E31E453BB1a10C427BB946Be0fc2A166a",
    allocationsType: "shortVesting",
    amount: parseEther("85382.5136612"),
  },
  {
    address: "0x3d29d699Aa258769b6f4c7C948434a8Fe8A68594",
    allocationsType: "shortVesting",
    amount: parseEther("14515.02730788"),
  },
  {
    address: "0x3D92B651051D747E5D2694fC7c7aA8D338927947",
    allocationsType: "shortVesting",
    amount: parseEther("58913.93398002"),
  },
  {
    address: "0x3Ddd831419D96C7473289a73472B9497Dd0De633",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x3f0DC9c50A296426325cd24a0bD828049Bd286a0",
    allocationsType: "shortVesting",
    amount: parseEther("170765.0273224"),
  },
  {
    address: "0x3f5B5930f62BcCcA5d844738AF254c2F948D7617",
    allocationsType: "shortVesting",
    amount: parseEther("2322.40436926"),
  },
  {
    address: "0x404CEec57d7ccD573f6A3D9D9D6ab459bB7DeF98",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0x40822C6760801cF81de5318166574e4F6A963467",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x4138574878c133d3A12009d6F54B8F26De700834",
    allocationsType: "shortVesting",
    amount: parseEther("25614.75409836"),
  },
  {
    address: "0x438C1107991171A11E225144032Fd2D4bD4cFb29",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x4503acba98C53e71D76f9130C1862Bfe57143c7f",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x453D50E53851e985D7D21bFCF6a8fb9740c2f5ac",
    allocationsType: "shortVesting",
    amount: parseEther("1233.77732117"),
  },
  {
    address: "0x45bAc9A1a2cbCFCB255b3e3F2172Bc93Cc708757",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x45e0dE7626e4Ee3e58536101C314C728Ea0041cf",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0x47463f6F800c268F929d57b12626753B3750db0c",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0x489d6fab7345a391d91aa6369ba81eb2ffe7b10a",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0x489eFBeA4F60D46cDc1ee34B95749C094983702c",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x49d1978DCe1a788A0e33Ac59C004e5fEe4093e95",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x4a3d2B1aD815552198A94471e033AD0acD59Ba5F",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x4Bd5C50061d68e771fCCDD79C71482760A789a2b",
    allocationsType: "shortVesting",
    amount: parseEther("7991.80327868"),
  },
  {
    address: "0x4cA6f259cbA0B6EdABE585EEde0d8894794f1Bec",
    allocationsType: "shortVesting",
    amount: parseEther("15368.85"),
  },
  {
    address: "0x4cb4a9425c803acc939c64e0ee71e764ebacc3c2",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x4d3711c1eFfBc584127F03b3c3054F18f0cB3870",
    allocationsType: "shortVesting",
    amount: parseEther("14515.02730788"),
  },
  {
    address: "0x4e04123bab8C02aC4e5E38D7158bC6f85B2f4B63",
    allocationsType: "shortVesting",
    amount: parseEther("28971.99450654"),
  },
  {
    address: "0x4e71F000aDa62d50fF33d99E1532D55Ed60aB914",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x50C32024706a8167235De7AC99bF17E490EEaD66",
    allocationsType: "shortVesting",
    amount: parseEther("1707.65027151"),
  },
  {
    address: "0x520474B3059404Cc210A16a3404b6b9BcA6a2A7E",
    allocationsType: "shortVesting",
    amount: parseEther("768442.62295082"),
  },
  {
    address: "0x520868664f22c27a0f3efbb17371EBAE4a561DAB",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0x52619D40c4f042C1D31e7A568456DaDf77d2CED8",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x52c187Cedb555d73C75263Cf3DE56c2A01Ca0786",
    allocationsType: "shortVesting",
    amount: parseEther("85382.5136612"),
  },
  {
    address: "0x564aF1a25FeB770Fd23BD39F875349Aa00cB3A9F",
    allocationsType: "shortVesting",
    amount: parseEther("5464.48087431"),
  },
  {
    address: "0x573953AD2019005A5cA3db5ce0f012209dFb1016",
    allocationsType: "shortVesting",
    amount: parseEther("1088.62704809"),
  },
  {
    address: "0x575c2f4D798de38E39692c5f21959FFE2FD43fef",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x59ad6718C960697589301B66CB4AaA31Bd27B5B4",
    allocationsType: "shortVesting",
    amount: parseEther("256147.5409836"),
  },
  {
    address: "0x59CBb5A8C186537B5C62138980E422B77E2fB220",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x5A86Ff42902006E8C9cFeAD126E71E418dCc0459",
    allocationsType: "shortVesting",
    amount: parseEther("16222.6775794"),
  },
  {
    address: "0x5b9867Fd96f99C66a94341ff38dE651dAeA6AE91",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x5ba20dC5a02CE21D9701d65d2dC45054f0CF2188",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0x5be56EC8A3d8B8E0D9c41337250578209633cabE",
    allocationsType: "shortVesting",
    amount: parseEther("870.90163847"),
  },
  {
    address: "0x5d6d610837ddfc120cd1e06147d536b6e5d966cd",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x5df44DbD9126995b68F8Ff02E1C32485B73Cf8a6",
    allocationsType: "shortVesting",
    amount: parseEther("8538.25136612"),
  },
  {
    address: "0x601Fa6dd74dC92276E7D48188D32eA0bA49a6911",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x60845dC92043Df92ca458C316891B5b043A7095d",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x63CBf23303d6F6739292c3792CD12fd347547A1d",
    allocationsType: "shortVesting",
    amount: parseEther("34153"),
  },
  {
    address: "0x65aB6Bb9e3c14D6Ac221a17FE66f01e3ce6566d4",
    allocationsType: "shortVesting",
    amount: parseEther("7257.51365394"),
  },
  {
    address: "0x68302232305F5d257eaa13fEB90c3870944aFd7E",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x68Fef005a0b8F0036E2F8807239F9CB9c2563E0F",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x6A8F0D1f0f927b6e3066a0c414011677246cD5AF",
    allocationsType: "shortVesting",
    amount: parseEther("9434.76775012"),
  },
  {
    address: "0x6be58a5465f8cf1d5291983fb6d441903be7f544",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x6bEc0BCA2F15876f675f2C38958Ff986551e4db1",
    allocationsType: "shortVesting",
    amount: parseEther("85382.5136612"),
  },
  {
    address: "0x6c4D01B9A5c0D875F1780137e9b91c0637d4EFb3",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x6cEbA2FBc67C0518727023c72d81A1dcfb3513f8",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x6D15eBe2f500c6e35C5bc584c4B6331462852da7",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x6D2965Ff15C7399cF22dE7A497fC50Df56bbAe81",
    allocationsType: "shortVesting",
    amount: parseEther("6531.76228855"),
  },
  {
    address: "0x6d38878d75c0a001634dea2c329f058f3325442e",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0x706e828D08cA8624dCCe152032BF3fF4E2c88FB8",
    allocationsType: "shortVesting",
    amount: parseEther("1708.41871413"),
  },
  {
    address: "0x70F458C0A5Eb077c689f9Cc2c547da700A0153B7",
    allocationsType: "shortVesting",
    amount: parseEther("1016.05191155"),
  },
  {
    address: "0x7175b04e1298d621c3d3e2428f502d89164677a0",
    allocationsType: "shortVesting",
    amount: parseEther("2177.25409618"),
  },
  {
    address: "0x71ae3132D550A9A0a92DeeB24161FAE68FbFbE8A",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x74022FF9c2cADeDC13BD6BC1B267857B01dA2143",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x763ABb42463117D6b9882451d65fF2415BeE4A21",
    allocationsType: "shortVesting",
    amount: parseEther("1161.20218463"),
  },
  {
    address: "0x765ea347070ab7b048DAF1Ee006a9297f6d24A59",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x77cF3C8107C68c0fC9e0C7D60547205EDc026CD9",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x78593d6eA7c0Ebd6CA61eD4cE37F643D32600b57",
    allocationsType: "shortVesting",
    amount: parseEther("2162.73906887"),
  },
  {
    address: "0x787F789cC7d8bbC25FCbc4Dc6e5e022945Cd434e",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x79EBF1DF88971436fC3d4d60638d82E3F678bbDC",
    allocationsType: "shortVesting",
    amount: parseEther("427482.92349726"),
  },
  {
    address: "0x7c1F60BB90B25657619c8F98CdF73B04cCc83455",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0x7C20ca1287C5A97917BB24136A3F05f45F02E099",
    allocationsType: "shortVesting",
    amount: parseEther("3415.30054644"),
  },
  {
    address: "0x7d4A9ed68C56f23925D814699ceFaa7afFe49080",
    allocationsType: "shortVesting",
    amount: parseEther("170765.0273224"),
  },
  {
    address: "0x7dEa6Ee74326B0897E7B8c311295186B3CdbA09d",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x7e5d9b40b5A1169561ad7D33d459d13E283B0641",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x815BEe06404b43db6958a6C3f5514C34a3BA67f4",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x8175732F812aF3aff7cF5f73dFcF947c9EeF279C",
    allocationsType: "shortVesting",
    amount: parseEther("12337.7732117"),
  },
  {
    address: "0x82F383AD178C43F1a27B947432f43af8851798AA",
    allocationsType: "shortVesting",
    amount: parseEther("1016.05191155"),
  },
  {
    address: "0x836a0bc5eC83f74B807a5915B605c83E47cfeEdc",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x8379cB6A396bD5B464fE9c6F0D80F3caA0bEBb4c",
    allocationsType: "shortVesting",
    amount: parseEther("12295.08"),
  },
  {
    address: "0x837Ca4996A841C6b50DC3C221949167DB8605410",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x87aFcAeCd0bda4e280552AFbb9f1A19Ffe03B81C",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x87cd4B04D76439dB2c2b23A7Dbefb81aBf0B5f8E",
    allocationsType: "shortVesting",
    amount: parseEther("3927.76638951"),
  },
  {
    address: "0x88339D2CF69D7C50Dc9291c4AE048B5Cee0A7bD4",
    allocationsType: "shortVesting",
    amount: parseEther("350068.30601092"),
  },
  {
    address: "0x883EF363a71fE7B16740b0625EAa4b0C6616c605",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x885d83E2689568D6e17dE7b3DC1Ca5adC56970AE",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x88d4C1281718a95C09ecF092689977D97915a69F",
    allocationsType: "shortVesting",
    amount: parseEther("2732.24043715"),
  },
  {
    address: "0x88f61DaE32d43DA41dFc2Fcf9649372909981c8D",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x895B961bF2059F5Fcc1595a82eaEE2ca6348011d",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x8C7ca94F4eBD83BBE6043a57E8e717a097a65b3c",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x8cF224880d6c47e7bD8d65Aa906d041B92F0BA1b",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0x8e044d798B39bEDcc7c8d896665dDcbd4E9DE2A8",
    allocationsType: "shortVesting",
    amount: parseEther("683.06010928"),
  },
  {
    address: "0x8E2117ca8DEF42d993f19F0da659939375C201f1",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x928b3681cd5707513CDb84708a355fcF56ECF69f",
    allocationsType: "shortVesting",
    amount: parseEther("2177.25409618"),
  },
  {
    address: "0x9308Da137EA2aAD8BFC05fFb8d7981D4CBA45915",
    allocationsType: "shortVesting",
    amount: parseEther("179303.27868852"),
  },
  {
    address: "0x936BcEBFE0B95Ed95bC54Cac8b1B6C958c6b46bA",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x9396536EF7711535a02f6C741a1B3977Ba2249E8",
    allocationsType: "shortVesting",
    amount: parseEther("8068.65"),
  },
  {
    address: "0x93d572C6A9D44D24d54D87435f2837d01650499D",
    allocationsType: "shortVesting",
    amount: parseEther("256147.5409836"),
  },
  {
    address: "0x93DEd00155c7E1845195D02A74fba3dc14EbE480",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x9400ac5BcefA954b8432F8D78541604abad8DFc1",
    allocationsType: "shortVesting",
    amount: parseEther("34153.00546448"),
  },
  {
    address: "0x97649A84877814d62C608cD2b3B008b6B47a8f20",
    allocationsType: "shortVesting",
    amount: parseEther("16692.28140407"),
  },
  {
    address: "0x9821888988289d6cB3C403223B2f922E59B3239a",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0x9842b0E1Be4fF1D883e844A0c05E5715856C5f28",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0x98A182Ba6442aCbC5BFdAF8B4ab25BE2343387eD",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0x9933d51335E0F7FA716a175E07aE16E29A68Bb15",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0x9953181ce2901c1FB946c29C3E1F66D70395963F",
    allocationsType: "shortVesting",
    amount: parseEther("21772.54096183"),
  },
  {
    address: "0x9B067Fde372225eD90229EC7A54f43D48df0956f",
    allocationsType: "shortVesting",
    amount: parseEther("8538.25136526"),
  },
  {
    address: "0x9C883eDD5F41A84537DF4843220d1f250f9337f0",
    allocationsType: "shortVesting",
    amount: parseEther("2177.25409618"),
  },
  {
    address: "0x9d2EaD9e8c24503e0821E63451F4d8847be1bf90",
    allocationsType: "shortVesting",
    amount: parseEther("8538.25136612"),
  },
  {
    address: "0x9Ed2Af9D4Ab71740E4d63FAb593bE7E8701ea169",
    allocationsType: "shortVesting",
    amount: parseEther("18869.53550025"),
  },
  {
    address: "0xA1E2E116c31bBB0C741F3A95814AE0b4DC91ada7",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xA1fe5EdF2101b9b07BC13Ebfa6e27CB5fd0dC93A",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xA377E0fF549A60210C49905d7309a481F0339869",
    allocationsType: "shortVesting",
    amount: parseEther("283469.94535519"),
  },
  {
    address: "0xa497cBBAB194d6bf017BcC2E01D961C2E3EC6dae",
    allocationsType: "shortVesting",
    amount: parseEther("853825.13661202"),
  },
  {
    address: "0xa50f89381301Decb11F1918586f98c5f2077e3Ca",
    allocationsType: "shortVesting",
    amount: parseEther("853825.13661202"),
  },
  {
    address: "0xA6578C8c74A0fBd6f9CEc2b80935eEF92b881CA4",
    allocationsType: "shortVesting",
    amount: parseEther("14515.02730788"),
  },
  {
    address: "0xa6ed26749Cb54591291B4550a82f15FF64ae98D9",
    allocationsType: "shortVesting",
    amount: parseEther("14515.02730788"),
  },
  {
    address: "0xa6eEd44e6eD94D988Fa2F2de35598EF71F6602FA",
    allocationsType: "shortVesting",
    amount: parseEther("58913.93398002"),
  },
  {
    address: "0xA7194714c61eE6A704C795a0d3176CC7dc368c39",
    allocationsType: "shortVesting",
    amount: parseEther("2322.40436926"),
  },
  {
    address: "0xa734439d26Ce4dBf43ED7eb364Ec409D949bB369",
    allocationsType: "shortVesting",
    amount: parseEther("26684.59696785"),
  },
  {
    address: "0xa7ee27d18f10C7DC40F9FDC593E7D5553a01df78",
    allocationsType: "shortVesting",
    amount: parseEther("2467.55464234"),
  },
  {
    address: "0xa9B91968a83f135e9C5eb7B4fFa87a9d3a1B7A49",
    allocationsType: "shortVesting",
    amount: parseEther("2177.25409618"),
  },
  {
    address: "0xaAD34160998F94b8f59E90e49C08Aa4B880B2226",
    allocationsType: "shortVesting",
    amount: parseEther("29030.05461577"),
  },
  {
    address: "0xaB61914D7CEEf1090A5538D5C0098c64CbeC37B9",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0xAd2D729Ad42373A3cad2ef405197E2550f4af860",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xadaa71b1061b9a3BdCdF2A72AF7E106353151DFf",
    allocationsType: "shortVesting",
    amount: parseEther("3338.45628081"),
  },
  {
    address: "0xaeE8dF059e01259eF46c0c5b07f1eb359dC04508",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0xb05AD8f027BC69780dba28EbF026C17e1BB23B6C",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0xB16b5611Ade68206FaE7Bf9a98fD8937b5A6a249",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0xb60dd9Fca0480C1806b25537dcFdea4fa90549Ce",
    allocationsType: "shortVesting",
    amount: parseEther("512295.08196721"),
  },
  {
    address: "0xB6393357EFd9023cf59BAFd501289D4B45DFd628",
    allocationsType: "shortVesting",
    amount: parseEther("17076.50273053"),
  },
  {
    address: "0xb7BE118E432D88e7B8E191080F5Dfc0797dc3d55",
    allocationsType: "shortVesting",
    amount: parseEther("128073.7704918"),
  },
  {
    address: "0xB844C9dC190A47F381E5fd26b1a45bd8282325c8",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xB8993D029b146F623C7E37D80C08D5a2b29432C8",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0xb8e53501D9d2030C8ca872A3E343B3e2445D8F07",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xb8e958f52dE47133F7b8865E8AF20cd93F0058c6",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xB97c5bD2f4caC89F87D7CF5D004b85798c334c2C",
    allocationsType: "shortVesting",
    amount: parseEther("14515.02730788"),
  },
  {
    address: "0xbaa433d9B1787579B16aBA880773eBb090b96857",
    allocationsType: "shortVesting",
    amount: parseEther("8196.72131147"),
  },
  {
    address: "0xBcC32787bcf6e4804d9eA34bAf22E4287695F558",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0xbcd69Ce8027b930c7712290F4f0c1e8864382123",
    allocationsType: "shortVesting",
    amount: parseEther("109972.67759562"),
  },
  {
    address: "0xbD41D1c70a4848C452Cb1d4C659e69b6649638c7",
    allocationsType: "shortVesting",
    amount: parseEther("3628.75682697"),
  },
  {
    address: "0xBd63144C19379a62699F9544836CFdF05a3c31ED",
    allocationsType: "shortVesting",
    amount: parseEther("5122.95081915"),
  },
  {
    address: "0xbee157c1a64c115D8361AaB2542F83d204260A97",
    allocationsType: "shortVesting",
    amount: parseEther("1161.20218463"),
  },
  {
    address: "0xC01F14e4BC5331a0bd12c1c28aCD3fa15df95934",
    allocationsType: "shortVesting",
    amount: parseEther("7257.51365394"),
  },
  {
    address: "0xC04cB82D27D63f2076e4aFE9aBd6a5fc53f9f534",
    allocationsType: "shortVesting",
    amount: parseEther("503756.83060109"),
  },
  {
    address: "0xC16CDa7252eEA10C876a6d3645BF0cec8cC6CB9F",
    allocationsType: "shortVesting",
    amount: parseEther("1161.20218463"),
  },
  {
    address: "0xc4177df8458D027B70f37Bca73EC7D51590135e3",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0xc49f30454f9dbBEA96A6B1dEf23A955aA6D331F1",
    allocationsType: "shortVesting",
    amount: parseEther("363729.50819672"),
  },
  {
    address: "0xC4B84620ABb42326cc25354b85cdd6875fD10cEa",
    allocationsType: "shortVesting",
    amount: parseEther("3628.75682697"),
  },
  {
    address: "0xc66580F4Bb2983eE0A8F301A21F3E8bDa6dA0E05",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xC69DF03bEF80e53A1A5F0F9fB5Db8fF21D37f64b",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xC6ACd588d07b61eb1ecD9B41AaA79749f4d5d723",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xc793b7f77D735d286e9c3722F1fe2600Ba61AEd5",
    allocationsType: "shortVesting",
    amount: parseEther("2467.55464234"),
  },
  {
    address: "0xc846B7d5Ad79060758F9ed2fE6BA5dD68D00C00F",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xC9417084405C69E498bCd87d30b7eDdBC4abede3",
    allocationsType: "shortVesting",
    amount: parseEther("717213.11475409"),
  },
  {
    address: "0xc98fb316ba4A9e8f59cBD2A926784f6FC2842b4d",
    allocationsType: "shortVesting",
    amount: parseEther("2732.24043715"),
  },
  {
    address: "0xCa3608eE166327Ab03C0CD31Da77F0C62e9B2C20",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xCB7C6FA166b77daD28a82C43f9E29D8D44eF29E3",
    allocationsType: "shortVesting",
    amount: parseEther("17076.50273224"),
  },
  {
    address: "0xCC0875B874658a994ACa25C1491c40E113D25E7a",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0xcCd479Ec7Fa356459c987a89090a2bF04FbFC5AD",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xce66C6A88bD7BEc215Aa04FDa4CF7C81055521D0",
    allocationsType: "shortVesting",
    amount: parseEther("35391.99108482"),
  },
  {
    address: "0xCf19aF0500B0Cd34fB4692f52C593eC076701587",
    allocationsType: "shortVesting",
    amount: parseEther("597677.59562841"),
  },
  {
    address: "0xcFF4f735D18dacDb5ee9F32Fc1e12C7Cc01c8B7B",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xd0297A71fCabB249dD4B1425E3BCf49733b9C6F7",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0xd0675Bf1DC2bF67a9cEBB55DE61b72A6F7535B69",
    allocationsType: "shortVesting",
    amount: parseEther("341530.0546448"),
  },
  {
    address: "0xD0e3BA6682Da35cb3CC7284111af5d16a3D987c6",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xD1449b0656438b98b21b2eFAd2075Aa087E5808C",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0xd2405a7FBDfC3ffBaaB54E600DB0e752a556ac21",
    allocationsType: "shortVesting",
    amount: parseEther("870.90163847"),
  },
  {
    address: "0xD26952b244Ed3403DBDC8A5968a9290d4fE7b6e7",
    allocationsType: "shortVesting",
    amount: parseEther("2732.24043715"),
  },
  {
    address: "0xd3168A53F6bF603f63e422Fce28C0fe61F57D012",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xD317977abb96B88044D93e25C97AdbF74153e42e",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xd3243F26a928cc6ecb08A64fF38a5203866fbe52",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0xd32C43010458fE2bE52Cf51046871F34Dc111AE8",
    allocationsType: "shortVesting",
    amount: parseEther("17076.5"),
  },
  {
    address: "0xD42ab7C427237be505A48119CE6a126aFE21A9Ac",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xD46Aa0CE215897f40b8fC55bd00A2FFd9e322DA0",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xD6d4470C898FabF996686AC749f77770D688baC3",
    allocationsType: "shortVesting",
    amount: parseEther("4098.36065573"),
  },
  {
    address: "0xD75293A72073737D3fff65cf078c45C497130C0A",
    allocationsType: "shortVesting",
    amount: parseEther("68306.01092896"),
  },
  {
    address: "0xd87d331aD1080eC64Ed342CcCF9a2a37d3DBC722",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xD92fB5cA374570E3a3fc5d480fC3F3ec2C66ff77",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xDADA3c0063Fd2928040681Fe98fb87C49040934A",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0xDB2BAA0D2b5f0A2996782A29ca245312CFEe8c52",
    allocationsType: "shortVesting",
    amount: parseEther("5806.01092315"),
  },
  {
    address: "0xdcD5e4E043836aF3409618F1aECCe9A1b9911e57",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xDd747502A5577f41Bc30492a989fcc245573C78f",
    allocationsType: "shortVesting",
    amount: parseEther("2177.25409618"),
  },
  {
    address: "0xDDe7b1a0C9deC54f6359498B6F81E4a696c5aF2d",
    allocationsType: "shortVesting",
    amount: parseEther("15368.85"),
  },
  {
    address: "0xDDe7b1a0C9deC54f6359498B6F81E4a696c5aF2d",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xDe96e75c7160d70a447a72AFdb75DDfA1455c808",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xdf3B4fB754DD66453Cc218802255A6Ef5a7A21b0",
    allocationsType: "shortVesting",
    amount: parseEther("119535.51912568"),
  },
  {
    address: "0xDF4A8f0d57525E68aCdd1ab622408C2A460ae913",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xdfFd151FDD0f900E8439bdF89ed2869b703c7EC0",
    allocationsType: "shortVesting",
    amount: parseEther("1596.65300386"),
  },
  {
    address: "0xe0Ff7c2ab64BBf752Bd0DeDC5936F4D32A1380C0",
    allocationsType: "shortVesting",
    amount: parseEther("2177.25409618"),
  },
  {
    address: "0xE2B30CD9514995Fbc7C693E4cE2FC941C1e548B2",
    allocationsType: "shortVesting",
    amount: parseEther("870.90163847"),
  },
  {
    address: "0xe34d4756886d4cEFc5b0D19e37B97eD58a9265bc",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xE3A656b2D84b391F4c1a8D8AB53F05c9c98C76a8",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xe419bC78D80a3689DFF874e83CC2e3E9aA822F7e",
    allocationsType: "shortVesting",
    amount: parseEther("4354.50819236"),
  },
  {
    address: "0xE81f5A830F5Ad7C95f7f9Be67eF0a907C1268FB4",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xe959687796FD3651634E5A6b5A91C377420551D9",
    allocationsType: "shortVesting",
    amount: parseEther("1366.12021857"),
  },
  {
    address: "0xE97090755879F96de0BE74216FaCF993D0Af4Dea",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xeC0513D83ffB376Ed931d44Dd6f017e46366FE64",
    allocationsType: "shortVesting",
    amount: parseEther("22199.45355191"),
  },
  {
    address: "0xEC712Ce410df07c9a5a38954d1A85520410b8b83",
    allocationsType: "shortVesting",
    amount: parseEther("2467.55464234"),
  },
  {
    address: "0xED412d4A54cFD60Dd6b46E3892bE0fa9a343A6A4",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xED895E53BcDbba2bA571ddbB89322B0ce9E83e99",
    allocationsType: "shortVesting",
    amount: parseEther("15368.85"),
  },
  {
    address: "0xEf92D1638b63dd82BD744fFfb96f9d46B0eEc50E",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0xF21bE69603dA01a12D01EFEc07bd22C270162fBF",
    allocationsType: "shortVesting",
    amount: parseEther("58913.93398002"),
  },
  {
    address: "0xF250A7983C65eB3e0EBCF56818E89f905dbe0827",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xf329CB5B70b36D12C3c13c1c6bf2083DB2D4BEe8",
    allocationsType: "shortVesting",
    amount: parseEther("12295.08"),
  },
  {
    address: "0xf45f34330bd4DeDAc13824e15624D97FBb430183",
    allocationsType: "shortVesting",
    amount: parseEther("17076.50271516"),
  },
  {
    address: "0xf498D3814976b2035Ec805847B3af701099F6b7B",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xf588E581B565c1af5F9D5f4F1BAf298265FC2380",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xF8439E81aD07b647B852BfF60d3478C768E370aB",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xF87b541D2a7f15B73A81d8965D2687590D3181B0",
    allocationsType: "shortVesting",
    amount: parseEther("3628.75682697"),
  },
  {
    address: "0xf921E169FE2FBF8FEb87b34121B0435769b53041",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50273078"),
  },
  {
    address: "0xF93ff7c1c7B440F877B3ce46c16e8875e3011bc7",
    allocationsType: "shortVesting",
    amount: parseEther("725.75136539"),
  },
  {
    address: "0xF9D7AB82969A40Cf8E21ed6b37C409E1A6Ca3833",
    allocationsType: "shortVesting",
    amount: parseEther("469603.82513661"),
  },
  {
    address: "0xfa2e9dc1debddd3528ef3c1524d35af573171b46",
    allocationsType: "shortVesting",
    amount: parseEther("7684.43"),
  },
  {
    address: "0xFBD4E1d0D89632c279F06a1d9bb9438647D99a29",
    allocationsType: "shortVesting",
    amount: parseEther("2732.24043715"),
  },
  {
    address: "0xFeb234Aa3BDd379c48e1000d6C5e1BB17990c070",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0xFEE36C593A39e68efAB66C7ca0A38242344f68e6",
    allocationsType: "shortVesting",
    amount: parseEther("2757.85518849"),
  },
  {
    address: "0xFfBB47Dd7D9288Ad3649E9ED11e95bd74d50eb82",
    allocationsType: "shortVesting",
    amount: parseEther("2903.00546157"),
  },
  {
    address: "0xFfd2a8f4275E76288D31DBb756Ce0e6065A3D766",
    allocationsType: "shortVesting",
    amount: parseEther("2732.24043715"),
  },
  {
    address: "0xfE52CC6f92184E09Fb788c02669678a73663d7a8",
    allocationsType: "shortVesting",
    amount: parseEther("669664.61"),
  },
  {
    address: "0x505Ffa6194f6e443b86F2028b2a97A588c17b962",
    allocationsType: "shortVesting",
    amount: parseEther("269531.1"),
  },
  {
    address: "0x7F9FE19F789F12E0185CCF040F3b06c479a0882a",
    allocationsType: "shortVesting",
    amount: parseEther("1801.47540983"),
  },
  {
    address: "0x7A6D5cb89F6B12f65F294Aa3F5dDD36c05D10e90",
    allocationsType: "shortVesting",
    amount: parseEther("1200.98360655"),
  },
  {
    address: "0xfB60Fa2B8B6198464549b1554e9323b278BFF963",
    allocationsType: "shortVesting",
    amount: parseEther("3602.95081967"),
  },
  {
    address: "0xa379d0E3beaB73a8edeab802f03E8cA2bEdAb063",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0xD64BbdF68E486aD7818F0D19df0c4D49E5593745",
    allocationsType: "shortVesting",
    amount: parseEther("900.73770491"),
  },
  {
    address: "0xcdDF4AA6A3a17e91C34750a8BAbD8cF88E1d7Bc2",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xFe552705fFFf6C765aad86972ce62D62Fbce908A",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xe79972Ad22fAc793bE02EC1E2E8F75b3Be1139aE",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x8Eb8F4D4b8A226A30B08f96c5625eF87b01ACE32",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x05a99b576B99B3d7ff403674cb8293D1427ff702",
    allocationsType: "shortVesting",
    amount: parseEther("1050.86065573"),
  },
  {
    address: "0xB6A92cA1a4BAD54711cD4a7aC8e034ca1D364B26",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0xeb8A964655A1671DdbaF558F3DB371Ed3037153E",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x2bBa9EdBcA6B2C59150d2879Dc7141770DA65eb1",
    allocationsType: "shortVesting",
    amount: parseEther("375.30737704"),
  },
  {
    address: "0x72eCFb1742F5e2018A4DA9E117B26d88C2970786",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xAB6cCFca77F003B78b34be003EDb6a7F8Cd977B6",
    allocationsType: "shortVesting",
    amount: parseEther("900.73770491"),
  },
  {
    address: "0x4e8B569cdd5b8CcfDE8fBD3993BeB4431DfC023e",
    allocationsType: "shortVesting",
    amount: parseEther("2026.65983606"),
  },
  {
    address: "0x821910fA3c1839BbFc3b430A487d4E3E134B05EA",
    allocationsType: "shortVesting",
    amount: parseEther("1137.93196721"),
  },
  {
    address: "0x464eca38d5BBC13129300EE1b4Cf9FA4A5cA8653",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x623efe702Fdb8F182e47874FB15F6E5051A084ba",
    allocationsType: "shortVesting",
    amount: parseEther("5404.4262295"),
  },
  {
    address: "0x728Cf88a50B9f11CaBcC53a7745ED7d0877eeeCA",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xA3D4f816c0deB4Da228D931D419cE2Deb7A362a8",
    allocationsType: "shortVesting",
    amount: parseEther("2251.84426229"),
  },
  {
    address: "0x12B9C3d3E0e0e741877e7C600d157F8Ec6C5B757",
    allocationsType: "shortVesting",
    amount: parseEther("4410.11111111"),
  },
  {
    address: "0x1dD7b0Ce308E3b2237C10ec2258c249842CdB17e",
    allocationsType: "shortVesting",
    amount: parseEther("4410.11111111"),
  },
  {
    address: "0xC478d17Ebd354FBCBFD83880B8F82CE15453024C",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x320f055561297568dbf3fc4A4DC2453B53194C8F",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x983384cA67A7977Ae1B55c581f41BeD6A00B4d89",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x8AA8fB65748727543Ea28d1760Cd85a8EF2A7145",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x7e22EBA1E6C784aa2b516e3Cc82fd722Fad117F7",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x85b7843388DFB68eDa62E5AB521634Be0A1339c4",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xc84Bcf79Da6F3EAa3126874218B2dbB53a8b574c",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xE5B7ee210A924D49a1d19D87f25479E1326834F6",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x49736FD7B3dD63F6Fb36F01EA0FFb7e0706636Fa",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x597078723e82a101AAb82a9381a90E51272e09A6",
    allocationsType: "shortVesting",
    amount: parseEther("4967.70491803"),
  },
  {
    address: "0xaf57127C7Ca017A1EcE8Ffe3d5636B6414D7E4B3",
    allocationsType: "shortVesting",
    amount: parseEther("1023.56557377"),
  },
  {
    address: "0x6e96191426B8FA8a309Be0480160cc813137B278",
    allocationsType: "shortVesting",
    amount: parseEther("5117.82786885"),
  },
  {
    address: "0x927D1138419418012d6131B8E950B5fb01B63b4e",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x57Cfc9DcaA027a86DfEc4C64C45480467861ec04",
    allocationsType: "shortVesting",
    amount: parseEther("803.39661885"),
  },
  {
    address: "0xf08b8De4b9fb44F9c68Cb2AC18dB98D57CCA9526",
    allocationsType: "shortVesting",
    amount: parseEther("320.71721311"),
  },
  {
    address: "0xf2c237f14b95f8e76a63d6c2e27657184ea3d17b",
    allocationsType: "shortVesting",
    amount: parseEther("2411.79344262"),
  },
  {
    address: "0x463BB7b7C8408F29A90A1c97ba4172806c89563c",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x3eed0f9DD2F3a99dc44fb19E63411E2A755C4723",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x2BbfEF2e707F694d9774962F81f4DA4A0BDc01A4",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x34BEb8cd75c785e0f0Fda9665dF4980f2E4D6Bcb",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xEDc03a3BF34Ed3e57b3CB0Afcd7b9c709eC5839C",
    allocationsType: "shortVesting",
    amount: parseEther("7356.02459016"),
  },
  {
    address: "0xca26766a2e0c33E3ffCFcA6190163802D694d564",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x43D2ce73B4Fa6c739E3a7fEBb6B896BF4703cC59",
    allocationsType: "shortVesting",
    amount: parseEther("337.77663934"),
  },
  {
    address: "0xA4cb87aDEba3DB195fb5C2Fd6d14149d6643846a",
    allocationsType: "shortVesting",
    amount: parseEther("900.73770491"),
  },
  {
    address: "0xcDF0AfB53510f178286235c3139aB9E752265457",
    allocationsType: "shortVesting",
    amount: parseEther("1050.86065573"),
  },
  {
    address: "0xa97752f5e04b92266605B0d4b11933c3236d1aFd",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x1337385757101EAdDF04a77E58df24539baf823c",
    allocationsType: "shortVesting",
    amount: parseEther("375.30737704"),
  },
  {
    address: "0x24542aD7f344918a3C9661ECdf8420DC72902321",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xB114944375DDE69D77948Ea07bE9BEfB8951C6a0",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x2Fcfcd26705acaD289C8B2018Ea68b51D9588C7d",
    allocationsType: "shortVesting",
    amount: parseEther("2251.84426229"),
  },
  {
    address: "0xa6f8F43b44011e5Ff0bA15D8a4b678A8A81CCE23",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x91e0f5c8be1b1dD7C2710f27Ef24D945cC0985de",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x0038f9f8D18200b9833F4648C23CFBA98C73434c",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xF265b7952e0EEDD9Bd799239Ef38d3567d8149Bb",
    allocationsType: "shortVesting",
    amount: parseEther("3002.45901639"),
  },
  {
    address: "0x2066C6436Ae796AD892547BB8a3a813bea5d526B",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x458B2b4b7040ee7982b3a39cB547bACCc56293C6",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x92D5911Ce5f0fe1004F466A2601C4664Ae93cF32",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xc057d20520754A780f68E9e41348Cb7bEabCAcD8",
    allocationsType: "shortVesting",
    amount: parseEther("2251.84426229"),
  },
  {
    address: "0x7F2598F1256A15a64742F603c1290538C937e247",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x2a7EDD9D378A91Bb4E36CF848d21f7F73ce2dA33",
    allocationsType: "shortVesting",
    amount: parseEther("1276.04508196"),
  },
  {
    address: "0x3Cb8b33C9461d113FBEcFa52c45d136Ce438Ee71",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x3b174F1B252ebd9B66C636B3840D09A35cA5825f",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x6991E08C36917fDE2975940834C6d1AEEA85890B",
    allocationsType: "shortVesting",
    amount: parseEther("375.30737704"),
  },
  {
    address: "0xDbcda4b72f02B2ab30C0955ab213ebC39101944f",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0xFbB8a05D180B2628c11e5AaB673d048CfE6bf86B",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xD7F4AFEdD1a47b016ba122920A7E9C3AC2Bb810d",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x9660c2a6d75E1A53db798338A80D3A2Bf8E0F44F",
    allocationsType: "shortVesting",
    amount: parseEther("375.30737704"),
  },
  {
    address: "0xc03a1110853F44bea33132a205D3FAa15C9f6a77",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xCdCe310a7C3862bE539a8F699c91fe79289e9aE2",
    allocationsType: "shortVesting",
    amount: parseEther("675.55327868"),
  },
  {
    address: "0xC64A5dda14ae77583C0698334A978f17fE482eD1",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xD53FB32879f7558d2c76797c63089637b2b8aA0e",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x664fe59C81CE5a1e84f08d81abD981050197147B",
    allocationsType: "shortVesting",
    amount: parseEther("1351.10655737"),
  },
  {
    address: "0xD884a40c58e6546089b0Fb8e8A0e8322e04Eb344",
    allocationsType: "shortVesting",
    amount: parseEther("5066.64959016"),
  },
  {
    address: "0x24474Cf4aE452b056c7F6C2Da32Ac6270Fb119C4",
    allocationsType: "shortVesting",
    amount: parseEther("375.30737704"),
  },
  {
    address: "0x9aB14996AaE94a4a6A2aD5b109AEcF4A97CE7105",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x8426856D893e436CFDBdEbb364FB0E9255dBFb91",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x5fD9E16e699c2Cbd2bb21dd2be629AB51bbDE99b",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x8Aa37a4036F03ee2fc7F142F2ca7072411913Af5",
    allocationsType: "shortVesting",
    amount: parseEther("900.73770491"),
  },
  {
    address: "0xDEeDd12cFfba5bC745832B514b82d64eb6F5c2c0",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x0266218204a4cF9835B930281E5DBf59042fcc16",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xC6E29B6e9Db2870333CC18d5a43B1d8419cA293D",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0xAb57A16fA4e624Dc37950CaDF6D479982A7cF516",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x3a0A56b4446a2b8D3B3AA806c3B632896123063F",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x8A84B056F01E8e2dF3A1A0597a17f216Ede6Ac79",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x6C4E97FaD1F0E47714a5E5c6c44C4EAeDF6a18ef",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xa394Ba9A157743614D8b1e2f14B5Af04cBAFd5f8",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x5B66b832BFDbaC90Dc81Aa26D8F6b9A2CC945afE",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xc360D6322A5e27ad9269D4D4c347c8675d90dDF5",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x3bB4CE803054876d27Cc0816f60134f8144BFc1b",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x13659Af3E6f3f4f9a629976d5691aB7F8C926751",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x2B8c9826ce598a34623679DF8bfe83C13258A5A9",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x399760d9e05997a0709e4af445E437138b87Aa4a",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xc9992BBC89DA8C615db7b01E94B540f7461F961C",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xA4562146EB88cE184b9c2D07C7f9948a9A9141b8",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xFbDB396535Bf59af17487ea9Fe55F83A8B882619",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x44e48cBC74D0D7a4CC91536248Bea50AD770baC0",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xf9696D6C846EF4653B29ED484D170B5Eec5F55f3",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xE45D692276C18e325A2100E178c74D6cEf30b417",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x79a870303cdbb501c2c6BD1171d56452B10DE2D6",
    allocationsType: "shortVesting",
    amount: parseEther("900.73770491"),
  },
  {
    address: "0x24CfAE8782D685f775318DE11801535f4062Ba9C",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0xc6c9c71FC9226BF51a098B21e80ACB2aa209b9E3",
    allocationsType: "shortVesting",
    amount: parseEther("5104.18032786"),
  },
  {
    address: "0x2EeF324e58df364ccd5F2244b5564a34c69AE702",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x19F242B50963d146579F20d60913fC6871f8795A",
    allocationsType: "shortVesting",
    amount: parseEther("2128.74344262"),
  },
  {
    address: "0x212a5975E18Fa63195b119D427b42aB27C8e85f7",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0xB302c52dec4071B7bbb5b5E42b6F67D11d260f47",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x9FB766aA4f7D30bd7D599bbc4BFEd879C83AddCc",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x519a725cc17C8BC9c475d344ad959412d391C872",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xC623010da0b607241025732bD52F0906FdDfCB82",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x627Bf2e4ffA9be9273B9ad63F767d2aaCc8EB1fF",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x70463f181E08EA6b2F18Fb62F7E263c82b4155B5",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0x7f2022Daa9a6874F1Be3bcCc17bea1fD2a3eE1F9",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0xDe9bD8a6B86F2754944e6EceFFD6f7F02920e345",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x248795cf9d9613797820D657f58b7e1EcE5cE9E9",
    allocationsType: "shortVesting",
    amount: parseEther("1651.35245901"),
  },
  {
    address: "0x1a05e0EF60c210a867e1ee18979E62bf0E0034FC",
    allocationsType: "shortVesting",
    amount: parseEther("3002.45901639"),
  },
  {
    address: "0x8c009de92B2D0E968F070f4B3C419Cc66757c50F",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0x3aDEcCE2F7a223f745Ea762cEbcA46d5d3806C84",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x9e8330B082C2BDf5ff27081E813C7d8a4678506b",
    allocationsType: "shortVesting",
    amount: parseEther("336.27540983"),
  },
  {
    address: "0x4B1Ee54feEeB11fd6908f1Ad9E539CAD0942CeE6",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x1BD2175E4a46A2a5b702FE5cB814B669941655c7",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xc5047e786A0194619C6A4b593170744fD31572Ea",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xdbf6182182818Be02e6d63136Be718431957fC75",
    allocationsType: "shortVesting",
    amount: parseEther("900.73770491"),
  },
  {
    address: "0x44fEa6d05ADf66C0b74DE8D4c925Cf857C4746aC",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xE126072cb66e69AF5b780Eda309E1c5574Dad91E",
    allocationsType: "shortVesting",
    amount: parseEther("2251.84426229"),
  },
  {
    address: "0xD25bdEc55b87d551E52442B61d4B52d3a08646aD",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xF0Cb260454c55713BeC9ff56Ed1504600dd59ae2",
    allocationsType: "shortVesting",
    amount: parseEther("3002.45901639"),
  },
  {
    address: "0x412398E51DAD89b6145fC0C48EB451381B751a66",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x929aCDb10c327E72314E8165c134615479929208",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xa43C3352da8f92DA25F540C1Dbf0fc2e2C8a6032",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0x9d6419ea912fd176860102014ca422e31dfeea3c",
    allocationsType: "shortVesting",
    amount: parseEther("1651.35245901"),
  },
  {
    address: "0x7Cb5B7F86843eca14AF37f3A76f94838a02e74A9",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xde27ee24493375b3a0a5b80abb7836289c2e5657",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x87F3D72207Bdef00EACa63E5Aa9ee2B96515242c",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x2d70Ec33123A9B2127216C07658d7148Ca172113",
    allocationsType: "shortVesting",
    amount: parseEther("500.26767418"),
  },
  {
    address: "0xDD7586cf8e16Ae596288E647e39B840e367e1F82",
    allocationsType: "shortVesting",
    amount: parseEther("8017.93032786"),
  },
  {
    address: "0xCeC0F9052Fe84201F9754F0A30281deC1e858cFe",
    allocationsType: "shortVesting",
    amount: parseEther("623.52202868"),
  },
  {
    address: "0xa21FD1949B0c710e3df8f57dc5B551E5657B4c98",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x0120c580844733F4461a598c7B70C54255dEC6B5",
    allocationsType: "shortVesting",
    amount: parseEther("870.0307377"),
  },
  {
    address: "0x76b2e65407e9f24cE944B62DB0c82e4b61850233",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x62DDF12bF38E78F37C0bb775Ec575a80F673fdE6",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0xf5E44C067B571384166dA7a13fF198b70cC0177E",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x5843a21b5e4fe8CB81CE36B0ca54EF11AE2e156D",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0xBD90caBA122Dca03d1C271f733b42483D3E36F00",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x835747c2BDC20665C82dB60eb72865c8d3a9f27c",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x782DdA0228dc0983743a8Fe699C5551A9F8f45df",
    allocationsType: "shortVesting",
    amount: parseEther("362.51280737"),
  },
  {
    address: "0xE0ECDB6a6812AbF450f5Dd6A3DDfae5A457d9455",
    allocationsType: "shortVesting",
    amount: parseEther("34801.22950819"),
  },
  {
    address: "0xc15F107bdA50977F2D32662d87fCB83b2CCFadF0",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0xDc0642Fe90EA512f105079DC929F7Fe2AC9ecA83",
    allocationsType: "shortVesting",
    amount: parseEther("362.51280737"),
  },
  {
    address: "0x91d840a188a0bbc4ED11363fF71480D354ad76f9",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x6f2462B5a30a7f326CE2602B84Aa312aDF639f78",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0xf31A977BEd34aD553C66Af46146D3605f8084AFd",
    allocationsType: "shortVesting",
    amount: parseEther("1160.0409836"),
  },
  {
    address: "0xD0d74198CE5bED494D07b30E758954789d7B4352",
    allocationsType: "shortVesting",
    amount: parseEther("3335.11782786"),
  },
  {
    address: "0x942840681d4daaa4e184F8eaa915665A44A1c4F4",
    allocationsType: "shortVesting",
    amount: parseEther("362.51280737"),
  },
  {
    address: "0xaA5B5c4B5AdB15dE8aE11A9B82dE0C6257DC80f3",
    allocationsType: "shortVesting",
    amount: parseEther("623.52202868"),
  },
  {
    address: "0xbB6BA61F686531Ec892ABaCf996fc85DfDa1178d",
    allocationsType: "shortVesting",
    amount: parseEther("797.52817622"),
  },
  {
    address: "0xcEF78DA0016b183Ab17BE57A014008A1813B3de6",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x373F30290f1af36c9EbA74072d2A9130959C98BB",
    allocationsType: "shortVesting",
    amount: parseEther("3751.28253073"),
  },
  {
    address: "0xe01dCc4fa20c48c4d7008c04F57b2cf2F9E32700",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0xA63A1371cCE7586582998ba582839064620B3F83",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x7d893631120b6B4041B63Ca52a1d5418Aaf3593B",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xC55df7d60a46D346b6EB62d54e17C0Ed1A252582",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x2Be4de4808cbdaCEbF20B25917F1880379Dc2354",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xCc43CADFE71Ec056766A462e89c29652775c6b89",
    allocationsType: "shortVesting",
    amount: parseEther("362.51280737"),
  },
  {
    address: "0x40509680E320943Bc43b421864d8deBd5D84E8Ea",
    allocationsType: "shortVesting",
    amount: parseEther("2247.57940573"),
  },
  {
    address: "0x9633F76b9f39FF917c1144908180bD4CA5930bC5",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0xbc66B9E2e3a6DFcBD6AeC31fc355bc9Ab6554afe",
    allocationsType: "shortVesting",
    amount: parseEther("362.51280737"),
  },
  {
    address: "0x4fbAcef6eF333e111f0432153C2AA3e55052045a",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x5bfD8ceC8dB6A6c41667DfB247C4b2E8de7AF527",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x2c095Ef51410e0BFbFB60773b648451EaB84D0C9",
    allocationsType: "shortVesting",
    amount: parseEther("870.0307377"),
  },
  {
    address: "0x6ea3A5faA3788814262bB1b3a5c0b82d3d24fCA6",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x54e082D608252F18b05aC3cF1B48587b83c863ae",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x833B3E6ccC7750a5D5a19e8d046486029B76fB16",
    allocationsType: "shortVesting",
    amount: parseEther("1160.0409836"),
  },
  {
    address: "0x3A64f1f65d8aa408Df2fb8eB649605600B74F080",
    allocationsType: "shortVesting",
    amount: parseEther("1160.0409836"),
  },
  {
    address: "0x44d0C9D6a7Cb401af8634Fe79DbF8C1D014BC5CA",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x1fef13bb08f60edE899eF191aA932b20cdC773cA",
    allocationsType: "shortVesting",
    amount: parseEther("1595.05635245"),
  },
  {
    address: "0x45FEA6bc772faA8585DacEeDbe0F22aA73C2A85D",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x27cb0a894f68e6b2407643d65589f7629c112247",
    allocationsType: "shortVesting",
    amount: parseEther("333.51178278"),
  },
  {
    address: "0x54A9C9D8907e5B740D97677AE96c2eFBC483c34D",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x07237dfD95c5E499A7f34F5BA5760c73A68aA7E3",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x0821711E54a756eF015935fd832f4339482Ab81d",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xD2b29e65bC4FB39978Ce34FDFd6d12607B1158F4",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0xb743118e2450F5D1A0bAA9D1ddcb56DbfD712f96",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xDfad85f71aEc47ffEa11C048e5CC0AF8b12589E8",
    allocationsType: "shortVesting",
    amount: parseEther("1305.04610655"),
  },
  {
    address: "0x403fc04951B9364BbbE56b6F65Cf6D83c2b7A880",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0xa715c136A16D8283f0079707D60Cdb3BBD6Fafa5",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x7a9A84245AA7E4E15Ec5a84882C849Fb33Cf4805",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0xf4BDd7185B34bEeEC393c11f06c354b06370D492",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x1514528aA38CFD359D5376a3272Ed95Ca2C3ce00",
    allocationsType: "shortVesting",
    amount: parseEther("870.0307377"),
  },
  {
    address: "0xD4F3E81cb54c161a581e984718783935eb2e11Dd",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0xe8501192FE835D1d220fFc03632A44088929cD1E",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0xCa8da2184D5d6d734746D15D58f6Fd5fB036733d",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xbb7b2ec52Be72bcE5aDCBf9E3F03B9beB9E387fE",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0x57790734E208d8D50d624c474988853Ae10dc069",
    allocationsType: "shortVesting",
    amount: parseEther("1305.04610655"),
  },
  {
    address: "0x1e05936bdae25a05ff72b2ea271d11eef50853af",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x587bbeEdb0490FC6F33a6fdF53eefDfDf6fDa9AF",
    allocationsType: "shortVesting",
    amount: parseEther("1957.56915983"),
  },
  {
    address: "0x4e449ed56752ae2b8ec6c0fb3360b658b24e6e51",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x99Bc14A6a3904E1B57f9710E46c0b2C1c090c430",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x780B647C8Fcb1dA0C10e491556c57BA88E2C5C13",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x86ec38e94451bD969Bf1d7ec7e43Ded5D57a9c0D",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x43865b328Bb1e7b15416c5D46736Ec7294272053",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0xd27fFA5EF984766B46b57beb1e9AcCF2EDf704C4",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0xE6420ffB24567A515ec9a86Fb4d4062B71b0bf69",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xb0A17EFB10ff9Fe8CE02FC1504194330F529020a",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x78a34b90b4BcC8CAE02e6795B02F66C3747c2982",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0xb967e3dC53080431691115560b8076C1F52fAA89",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0xEf7D451cD454bfC1136a3b8BD62a21c3B69f9bCf",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x68aE12d2b917f6517D4F6C3bD1726c3bd6Baa057",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0x109Ed7F996db76e48D442b49Ff9Dbc2D8afc3dAc",
    allocationsType: "shortVesting",
    amount: parseEther("835.22950819"),
  },
  {
    address: "0x2E4098971cBE73A08FE208D0f694eD355b810cd3",
    allocationsType: "shortVesting",
    amount: parseEther("580.0204918"),
  },
  {
    address: "0x1aa0549da784FcB484df00363c4C8BA5DaBC0c1c",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x4FF80497a9E4775C69B203d785FD437F636D76f4",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x8EB28fAd69d9A69392fF1e6b4ab23061665B362e",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0xCb51997cCa1d0a64e647Eb5C5Ca489757Bf02566",
    allocationsType: "shortVesting",
    amount: parseEther("870.0307377"),
  },
  {
    address: "0x49e28333b9EA6b584cbb92314162b2f955380C7B",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0xe8EBC3a40fd740101e3380C8DEaB90503B157C4c",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x6c9e5c18fcd30fDd706DA99a5939B81433a9A59C",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x3c4ad3BF9b10774bbaE83356f44abfC004Ee915C",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x85aB86C05a08c9d890d36344e233B1A26C070e9A",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x75B8f00Fc5d55691B4E6cfc204729e6F7E427BB8",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x03059cf75eeaC964027C59745E0e074bd042D2f0",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0xa6056c7e11C3De21333327888Eb3d050d8A1B151",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x818f0E05BE38f947Cd33492e61cb3b32492270B6",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x8D25c0aa0f2b1Ea711f3E3F82ABFBB68B2517eCf",
    allocationsType: "shortVesting",
    amount: parseEther("1015.03586065"),
  },
  {
    address: "0x01703761799c53Ca37391D8A25A6a5d0c7c5215f",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0xE2934d7249abe8E299EdcC9C6A47CE5BBCA24f22",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x1688FFf1ecdf9F26c8482E311F4AeeA313E5a084",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xBcAe07fA7f743FCaE104e6cAA27131A623Bf68f5",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x976FF9D81150AbB87F2f8eDfeF0C47BE43B1F747",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xd0b3C80ece19AEA33bE80a70e0B1b4C0cd2dA3b1",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x1C65A83fa81F7DD7f2ff7C6b1c99296af3be3Bbc",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x74f7999c53879146853fe3661F147000D5721182",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x1E45D6e57dff5DAdb8314DA145C1A197c9F027D2",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x54dC9A8B6A8359c1E4af78D70a1951A2113026F0",
    allocationsType: "shortVesting",
    amount: parseEther("1501.22950819"),
  },
  {
    address: "0xA2214bfd5e7a514b5ed6d0eA4e7d74dffcd91394",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x7Fb653f2F5A3ffa425F8e9A9efdFF6778217ae26",
    allocationsType: "shortVesting",
    amount: parseEther("1160.0409836"),
  },
  {
    address: "0xd8155b44C1487F7533279b27C6758931f5a91743",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xbC18Ae4A29d863fe16f1dd1c85698D08E04ed252",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xBf19aDD832ff6528d9c3dFeeE9a2b2f14F47c4E2",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x8A51f602b8a72301971302faec75826C568c145A",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0x0B59f9C0De9BFb654cb902E4be6EbaE3AB82a54f",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0xeC8b0C1A752fd9e94F38560a0D3Ab3A8F88e7b24",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x23FD85cf36F86169aef55D5c83483c9120BAB8fa",
    allocationsType: "shortVesting",
    amount: parseEther("1451.50128073"),
  },
  {
    address: "0x37E0f7915386399Ce49cD2Ee629Bf1924E38e8E5",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xfFBDEfa1709432092c544974487b0716FBc01de2",
    allocationsType: "shortVesting",
    amount: parseEther("1701.67776639"),
  },
  {
    address: "0x64BD665c05ad0c1EFEce634c9E770F3795cdd7C7",
    allocationsType: "shortVesting",
    amount: parseEther("4132.64600409"),
  },
  {
    address: "0xE1afb9FD19F6C7865481504194bab01c65067148",
    allocationsType: "shortVesting",
    amount: parseEther("341.18852459"),
  },
  {
    address: "0x8433d060ae91A75a291c97Df16720748529Abf8A",
    allocationsType: "shortVesting",
    amount: parseEther("341.18852459"),
  },
  {
    address: "0x58d9396B0dfa8a9a66C6e52Af2CaA9BC9A520dB1",
    allocationsType: "shortVesting",
    amount: parseEther("8103.22745901"),
  },
  {
    address: "0xB65d9f05d2B7AF82a42F14274B54aD9BDe0Ea64E",
    allocationsType: "shortVesting",
    amount: parseEther("341.18852459"),
  },
  {
    address: "0xa2Fcc9006eF3C7FfaAcD9fbAf18da98098c0f85b",
    allocationsType: "shortVesting",
    amount: parseEther("511.78278688"),
  },
  {
    address: "0x3fd431A926Ea26dfdbc0810BA45c1fc9faFA6FB1",
    allocationsType: "shortVesting",
    amount: parseEther("810.3227459"),
  },
  {
    address: "0x6E46662eDb8810b12A896F48F15751F9114c5579",
    allocationsType: "shortVesting",
    amount: parseEther("341.18852459"),
  },
  {
    address: "0xe3124F5A7E3C2680C5B75735e7787d39dff717AB",
    allocationsType: "shortVesting",
    amount: parseEther("341.18852459"),
  },
  {
    address: "0x13D861cF3244F0862994C6b576619050b888412E",
    allocationsType: "shortVesting",
    amount: parseEther("170.59426229"),
  },
  {
    address: "0xF4D401922DaEAED2a3d3F624dD14064A9E92B02d",
    allocationsType: "shortVesting",
    amount: parseEther("10440.36885245"),
  },
  {
    address: "0x240e1081Be54DcD7f77BB4af3033133848eb93A5",
    allocationsType: "shortVesting",
    amount: parseEther("3241.2909836"),
  },
  {
    address: "0x62A0b5C2ea4FD07629bAe6D319bAF6DFFaa10a7B",
    allocationsType: "shortVesting",
    amount: parseEther("12187.25409836"),
  },
  {
    address: "0x64853792beC3bfA7502E457058C3839c9b6040aF",
    allocationsType: "shortVesting",
    amount: parseEther("1450.0512295"),
  },
  {
    address: "0xE6052A0D78e37f9701A201222A32191Eee3c93d4",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0x13E785c312d29e8195c3d255fD123a447EE5006C",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x617A47F1A35a0c6CF281202832De19661E441A3E",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0x1377bdbc9624db934D8345fe87563C71062E3874",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xA750B9f4E82c5a012F9F9CfC634ef98fD59b80bE",
    allocationsType: "shortVesting",
    amount: parseEther("725.02561475"),
  },
  {
    address: "0x1047C916c75545a13ACE42F4504678d722A3Ea22",
    allocationsType: "shortVesting",
    amount: parseEther("290.0102459"),
  },
  {
    address: "0xfD39fCD74496DA525D783ABe9742D82e8ac4fE07",
    allocationsType: "shortVesting",
    amount: parseEther("435.01536885"),
  },
  {
    address: "0xABdf60f889F243788Dd6E6fdF093fcaA91B9A8dE",
    allocationsType: "shortVesting",
    amount: parseEther("3606.36270491"),
  },
  {
    address: "0x6D75a622cBD16C6bBE037556dE5379E2E65A8602",
    allocationsType: "shortVesting",
    amount: parseEther("300.24590163"),
  },
  {
    address: "0xAdA7673B48D656a87cad01bCbAfe6B1eE6d621ed",
    allocationsType: "shortVesting",
    amount: parseEther("1200.98360655"),
  },
  {
    address: "0xe840fd66EC0c42a691de5fD3404F36232b610D09",
    allocationsType: "shortVesting",
    amount: parseEther("600.49180327"),
  },
  {
    address: "0x5fb326E4Def0432606F3E330Af10Ae597B12a746",
    allocationsType: "shortVesting",
    amount: parseEther("750.61475409"),
  },
  {
    address: "0xB536Ec6752F97c66EBE97d47e81325da4f562e0D",
    allocationsType: "shortVesting",
    amount: parseEther("450.36885245"),
  },
  {
    address: "0x59b7dbBDcc1eD1f48f18e9a5CB76f96f6Fe00FFE",
    allocationsType: "shortVesting",
    amount: parseEther("15524.07786885"),
  },
  {
    address: "0x815706Ea0846e0B1eDa37cC402b99cb955853f84",
    allocationsType: "shortVesting",
    amount: parseEther("8978.37602459"),
  },
  {
    address: "0xa17624E7774988F0aa8Dc94dF48Ce1653EabE6F0",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("500000"),
  },
  {
    address: "0x406cBFC2d391bEd42078138165465128b4E0CB06",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("750000"),
  },
  {
    address: "0x69834af7F47f9A49bED66DF9CC434339c65603fB",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("500000"),
  },
  {
    address: "0xAA13207BF5b030dFf74b3F25121ba2c82e78a29b",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("500000"),
  },
  {
    address: "0x92c3CCe7898c631F01f45aDDe20a7A94901346e2",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("500000"),
  },
  {
    address: "0x5C272F00F6940B2Cb62f9fC1e7Bf74Db32cb97fC",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("1200000"),
  },
  {
    address: "0x3E4E5Be587FbF4EBE9694c3ebdC12a87e3f39f89",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("12500000"),
  },
  {
    address: "0xC1b1343252eB9C0334D2c6D8b12259C675CE33BE",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("12500000"),
  },
  {
    address: "0x5364Bc2B4e9335fB1751Bfc7b1FA73A341E318C6",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("12500000"),
  },
  {
    address: "0x78f0FefA4c5075c19F8a69a17C80AdE2e5E7982D",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("2382231"),
  },
  {
    address: "0x630a27326B5136e7b87332a8F4d5aABC057E2d5a",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("2000000"),
  },
  {
    address: "0x067A8C78463e2CbA1819386c7d894650dbe17733",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("1000000"),
  },
  {
    address: "0x68caa7B64F41F4A39f7D810f6A254F046A988707",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("200000"),
  },
  {
    address: "0xdAD1971fE99b115fA6e357C4De78EBAcB623e23b",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("250000"),
  },
  {
    address: "0x5e226764FeaB1a4Dd50eC90b2286dD58dBB5d72c",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("175000"),
  },
  {
    address: "0x1F9790da6BC4B80b1e7D71Dfc5D2499EdEd8a31c",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("500000"),
  },
  {
    address: "0x668941ca259b71df2d3EFE46cEF55e028E9D5ECb",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("50000"),
  },
  {
    address: "0x4b8266EA6DaF7d4b550156b8f3C89a21668443E9",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("25000"),
  },
  {
    address: "0xd2090e9bc610f428B6A590a1f7eEcaa87fF95957",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("25000"),
  },
  {
    address: "0x9AA50F5702cF317d9afA107C72307b6aB433665f",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("200000"),
  },
  {
    address: "0x353D21643F3400FAbe1de80c3B8515bcCA89f2DD",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("100000"),
  },
  {
    address: "0x618768EfD517C1c0bd20F7a6c2A8CE7D3468504c",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("25000"),
  },
  {
    address: "0x5eda5a18b54f794b89bd20f42783927635c007f8",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("25000"),
  },
  {
    address: "0x96aB912E29b7258D0433D5b1E0f3501804627E63",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("25000"),
  },
  {
    address: "0x2C5dA92b5fC4Ea31e934600F4C3bA623b824d7CA",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("100000"),
  },
  {
    address: "0xFdbfEC9Fbf44C4d7CD1DD04F13dB4578c6f6F25c",
    allocationsType: "teamAndAdvisors",
    amount: parseEther("100000"),
  },
];