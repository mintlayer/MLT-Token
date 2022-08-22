export interface GetCacheParams {
  cacheKey: string;
}

export interface SetCacheParams {
  cacheKey: string;
  cacheToUpdate: ICache;
}

export interface ICache {
  vestingClaimed: { [hash: string]: boolean };
}