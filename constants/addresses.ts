// // import { constructSameAddressMap } from '../lib/utils/constructSameAddressMap';
// // import { SupportedChainId } from './chains';

// type AddressMap = { [chainId: number]: string };

// /**
//  * Yamato
//  * TODO: Consider L2 and Upgradability. Probably access CurrencyOS.yamatoes and get addresses dynamically.
//  */
// export const YAMATO_MAIN_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x02Fe72b2E9fF717EbF3049333B184E9Cd984f257',
//   [SupportedChainId.GOERLI]: '0x5f4F8cc76DAC7b6820e2eF8b62bE636BF7fb53A2',
//   [SupportedChainId.SEPOLIA]: '0x5627b0ffF6efb653bcf2Be8AC8B1a4A9FA74C1CD',
// };
// export const YAMATO_POOL_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x9C1F0E3D4BD4A513721C028e1D4610CD17745f0B',
//   [SupportedChainId.GOERLI]: '0x4a62A594FB6A1ea28241dBC6aCcAbC0330292769',
//   [SupportedChainId.SEPOLIA]: '0x7D3769881792e3Bea9D5F1AAf6227a5C8Cce1Fe3',
// };
// export const YAMATO_PRIORITY_REGISTRY_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x0c9Bdf09de9EaCbE692dB2c17a75bfdB5FF4190B',
//   [SupportedChainId.GOERLI]: '0xd55B6E565630E6C579F3Bcd75D65A0f72d4a1324',
//   [SupportedChainId.SEPOLIA]: '0x3e8295D79882Bde40A536161693d185053A3c476',
// };
// export const YAMATO_PRICE_FEED_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x3f4E4Dad0AC01Da50A774F3389b70506c96FfF2f',
//   [SupportedChainId.GOERLI]: '0xD2472CeBde868565bdFAd66e5A697b14654FcdE4',
//   [SupportedChainId.SEPOLIA]: '0x09e5f95674d1658227e6152682B97DBa44c4c477',
// };

// /**
//  * Token
//  */
// export const CJPY_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x1cfa5641c01406aB8AC350dEd7d735ec41298372',
//   [SupportedChainId.GOERLI]: '0x24611d7080f8510ff147e952C76F3482D77f40D4',
//   [SupportedChainId.SEPOLIA]: '0x77b3cdad39E3dd41576951f0f7f5be2fb0f7b90B',
// };
// export const YMT_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x0000000000000000000000000000000000000000',
//   [SupportedChainId.GOERLI]: '0x0000000000000000000000000000000000000000',
//   [SupportedChainId.SEPOLIA]: '0x0000000000000000000000000000000000000000',
// };
// export const VEYMT_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x0000000000000000000000000000000000000000',
//   [SupportedChainId.GOERLI]: '0x0000000000000000000000000000000000000000',
//   [SupportedChainId.SEPOLIA]: '0x0000000000000000000000000000000000000000',
// };
// export const WRAPPED_ETHER_ADDRESS: AddressMap = {
//   [SupportedChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   [SupportedChainId.GOERLI]: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
//   [SupportedChainId.SEPOLIA]: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
// };
// export const TXJP_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x961dd84059505d59f82ce4fb87d3c09bec65301d',
//   [SupportedChainId.GOERLI]: '0xeb50368411ABC751fFc3216A4f7df7038592d182',
//   [SupportedChainId.SEPOLIA]: '0x0000000000000000000000000000000000000000',
// };

// /**
//  * ENS
//  */
// export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   [SupportedChainId.SEPOLIA]: '0x0000000000000000000000000000000000000000',
// };

// /**
//  * Others
//  */
// export const MULTICALL_ADDRESS: AddressMap = {
//   ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [
//     SupportedChainId.OPTIMISTIC_KOVAN,
//   ]),
//   [SupportedChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
//   [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
//   [SupportedChainId.ARBITRUM_RINKEBY]:
//     '0xa501c031958F579dB7676fF1CE78AD305794d579',
// };
