import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import App from "./App.tsx";
import "./index.css";

// --- New Wallet Imports ---
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

// --- Solana RPC Endpoint ---
const endpoint = "https://api.mainnet-beta.solana.com";
const wallets = [new PhantomWalletAdapter()];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <AppProvider>
            <Router>
              <App />
            </Router>
          </AppProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>
);
