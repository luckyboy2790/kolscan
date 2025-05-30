// hooks/useSolanaMarketData.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface SolanaMarketData {
  current_price: number;
  market_cap: number;
  total_volume: number;
}

const useSolanaMarketData = () => {
  const [data, setData] = useState<SolanaMarketData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'solana',
            },
          }
        );
        const solanaData = response.data[0];
        setData({
          current_price: solanaData.current_price,
          market_cap: solanaData.market_cap,
          total_volume: solanaData.total_volume,
        });
      } catch (err) {
        setError('Failed to fetch Solana market data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useSolanaMarketData;
