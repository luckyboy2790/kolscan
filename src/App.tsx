// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "./App.css";
import { useTitle } from "./hooks";

const App = () => {
  useTitle();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/trades" replace />} />
        <Route path="trades" element={<Home />} />
        <Route path="leaderboard" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
