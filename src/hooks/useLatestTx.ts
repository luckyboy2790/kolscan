import { useEffect, useState } from 'react';
import { getLatestTokenSwaps, ParsedTx } from '../utils/solanaTxParser';

export const useLatestTx = (wallets: { walletAddress: string }[]) => {
  const [txs, setTxs] = useState<ParsedTx[]>([]);

  useEffect(() => {
    if (!wallets?.length) return;

    getLatestTokenSwaps(wallets).then(setTxs).catch(() => setTxs([]));
  }, [wallets]);

  return txs;
};
