import path from "path";
import { merge } from "lodash";
import { mkdir, open } from "fs/promises";

/* types */
import type { FileHandle } from "fs/promises";
import type { ICache, GetCacheParams, SetCacheParams } from '../typescript/merkletreeCache';

const CACHE_DEFAULT: ICache = { 
  vestingClaimed: {}
}

export async function getMerkletreeCache(params: GetCacheParams) {
  const result = {
    hasError: false,
    data: CACHE_DEFAULT,
  }

  try {
    const { cacheKey } = params;
    
    const cacheDir = path.join(process.cwd(), 'cache', 'merkletree');
    const cacheFile = path.join(cacheDir, `${cacheKey}.json`);
  
    await mkdir(cacheDir, { recursive: true });
  
    const cacheFileHandle = await open(cacheFile, 'a+');
    const dataString = await cacheFileHandle.readFile({ encoding: 'utf-8' });
  
    let dataObj: ICache = JSON.parse(dataString || null);
  
    if(!dataObj) {
      dataObj = CACHE_DEFAULT;
      const data = JSON.stringify(dataObj, null, 2);
      await cacheFileHandle.writeFile(data, { encoding: 'utf-8' });
    }
    
    await cacheFileHandle?.close();

    result.data = dataObj;
    
    return result;

  } catch {
    result.hasError = true;
    return result;
  }
}

export async function setMerkletreeCache(params: SetCacheParams) {
  let cacheFileHandle: FileHandle | null = null;
  
  try {
    const { cacheKey, cacheToUpdate } = params;
    
    const cacheDir = path.join(process.cwd(), 'cache', 'merkletree');
    const cacheFile = path.join(cacheDir, `${cacheKey}.json`);
  
    await mkdir(cacheDir, { recursive: true });
  
    const cacheFileHandle = await open(cacheFile, 'w+');

    if(!cacheFileHandle) return;
    
    const dataString = await cacheFileHandle.readFile({ encoding: 'utf-8' });
  
    let cache: ICache = JSON.parse(dataString || null);
  
    if(!cache) {
      cache = CACHE_DEFAULT;
    }

    const data = JSON.stringify(merge(cache, cacheToUpdate), null, 2);
    await cacheFileHandle.writeFile(data, { encoding: 'utf-8' });
    
    await cacheFileHandle?.close();
  } catch(error) {
    console.log(error);

    try {
      await cacheFileHandle?.close();
    } catch(error) {
      console.log(error);
    }
  }
}