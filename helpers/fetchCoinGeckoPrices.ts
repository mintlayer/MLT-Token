import axios from "axios";

export async function fetchCoinGeckoPrices(coins: string[]): Promise<{[key: string]: number}> {
  if (!coins) return {};
  const prices = {};
  const ids = coins.join(',');
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    Object.keys(data).forEach(coin => {
      prices[coin] = Number(data[coin].usd);
    });
  } catch (e) {}
  return prices;
};