// File: fetchDummyWalletTx.js

import { Connection, PublicKey } from "@solana/web3.js";

const syndica_api_key = import.meta.env.VITE_SYNDICA_API_KEY;
const helius_api_key = import.meta.env.VITE_HELIUS_API_KEY;

// const SOLANA_RPC =
//   "https://solana-mainnet.g.alchemy.com/v2/wWRawepsEkEisE3IKFbhDAa9oYBP-kK5";
const SOLANA_RPC =
  "https://solana-mainnet.api.syndica.io/api-key/" + syndica_api_key;
const connection = new Connection(SOLANA_RPC, "confirmed");

export interface ParsedTx {
  wallet: string;
  type: "BUY" | "SELL" | "TRANSFER";
  solAmount: number;
  tokenSymbol: string;
  tokenLogo: string;
  user: string;
  xLink: string;
  solChange: any;
  tx: any;
  userLogo: string;
  tokenAmount: number;
  timeAgo: string;
}

const tokenCache = new Map<string, { symbol: string; logo: string }>();

const fetchTokenMeta = async (
  mint: string
): Promise<{ symbol: string; logo: string }> => {
  if (tokenCache.has(mint)) {
    return tokenCache.get(mint)!;
  }

  try {
    const response = await fetch(
      "https://mainnet.helius-rpc.com/?api-key=" + helius_api_key,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: "1",
          method: "getAsset",
          params: {
            id: mint,
          },
        }),
      }
    );
    const data = await response.json();

    console.log(data);

    const meta = data
      ? {
          data,
          symbol: data.result.content.metadata.symbol || "UNKNOWN",
          logo:
            data.result.content.links.image ||
            "https://via.placeholder.com/32?text=?",
        }
      : { symbol: "UNKNOWN", logo: "https://via.placeholder.com/32?text=?" };

    tokenCache.set(mint, meta);
    return meta;
  } catch {
    return { symbol: "UNKNOWN", logo: "https://via.placeholder.com/32?text=?" };
  }
};

function formatTimeAgo(blockTime: number): string {
  const now = Math.floor(Date.now() / 1000); // current time in seconds
  const diff = now - blockTime;

  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}

export const getLatestBuySellTransaction = async (
  data: any
): Promise<ParsedTx | null> => {
  try {
    const publicKey = new PublicKey(data.walletAddress);
    let before: string | undefined = undefined;

    while (true) {
      const signatures = await connection.getSignaturesForAddress(publicKey, {
        limit: 1000,
        before,
      });

      if (!signatures.length) return null;

      for (const sigInfo of signatures) {
        const tx = await connection.getParsedTransaction(sigInfo.signature, {
          maxSupportedTransactionVersion: 0,
        });
        if (!tx) continue;

        let solChange = 0;
        let tokenInfo = { symbol: "", logo: "" };

        if (tx.meta?.preBalances && tx.meta?.postBalances) {
          solChange =
            (tx.meta.preBalances[0] || 0) - (tx.meta.postBalances[0] || 0);
        }

        const balances = tx.meta?.postTokenBalances || [];

        let tokenAmount: number = 0;

        if (balances.length > 0) {
          const mint = balances[0].mint;
          tokenInfo = await fetchTokenMeta(mint);
        }

        if (tx.meta?.preTokenBalances && tx.meta?.postTokenBalances) {
          const pre = tx.meta.preTokenBalances.find(
            (b) => b.accountIndex === balances[0].accountIndex
          );
          const post = balances[0];

          const preAmount = pre?.uiTokenAmount?.uiAmount || 0;
          const postAmount = post?.uiTokenAmount?.uiAmount || 0;

          tokenAmount = Math.abs(postAmount - preAmount);
        }

        let type: "BUY" | "SELL" | "TRANSFER" = "TRANSFER";

        if (balances.length > 0) {
          type = solChange < 0 ? "SELL" : solChange > 0 ? "BUY" : "TRANSFER";
        }

        const timeAgo = tx.blockTime ? formatTimeAgo(tx.blockTime) : "";

        if (type === "BUY" || type === "SELL") {
          return {
            wallet: data.walletAddress,
            user: data.name,
            xLink: `https://x.com/${data.twitterHandle}`,
            type,
            tokenAmount,
            tx,
            solAmount: Math.abs(solChange) / 1e9,
            solChange,
            tokenSymbol: tokenInfo.symbol,
            tokenLogo: tokenInfo.logo,
            userLogo: `https://cdn.kolscan.io/profiles/${data.walletAddress}.png`,
            timeAgo,
          };
        }
      }

      before = signatures[signatures.length - 1].signature;
    }
  } catch (err) {
    console.error(`Failed to fetch tx for ${data.walletAddress}:`, err);
    return null;
  }
};

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function processInBatches<T>(
  items: T[],
  batchSize: number,
  fn: (item: T) => Promise<any>,
  delayMs = 500
): Promise<any[]> {
  const result: any[] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(batch.map(fn));
    result.push(
      ...batchResults
        .filter(
          (r): r is PromiseFulfilledResult<any> => r.status === "fulfilled"
        )
        .map((r) => r.value)
    );
    await delay(delayMs);
  }

  return result;
}

export const getLatestTokenSwaps = async (
  wallets: { walletAddress: string }[]
): Promise<ParsedTx[]> => {
  return await processInBatches(wallets, 10, (w) =>
    getLatestBuySellTransaction(w)
  );
};
