// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import "./App.css";
import { useTitle } from "./hooks";
import Trades from "./pages/Trades";
import Leaderboard from "./pages/Leaderboard";
import UserDetail from "./pages/UserDetail";

const App = () => {
  useTitle();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/trades" replace />} />
        <Route path="trades" element={<Trades />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="account/:id" element={<UserDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
