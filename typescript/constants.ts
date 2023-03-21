export interface NativeCurrency {
  decimals: number;
  name: string;
  symbol: string;
}

export interface NetworkInfo {
  name: string;
  blockExplorerUrl: string;
  rpcUrl?: string;
  chainId: number;
  nativeCurrency: NativeCurrency;
}

export type NetworksInfo = Record<string, NetworkInfo>;