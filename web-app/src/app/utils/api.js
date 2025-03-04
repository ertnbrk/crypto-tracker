import axios from 'axios';

const fetchCryptoPrices = async () => {
  try {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 250,
          page: 1,
          sparkline: false,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    return { error: 'Failed to fetch data. Please check your internet connection or try again later.' };
  }
};

export default fetchCryptoPrices;
