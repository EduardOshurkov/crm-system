import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CounterpartiesPage from "./pages/CounterpartiesPage";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportsPage";
import TransactionsPage from "./pages/TransactionsPage";
import Navbar from "./components/main-navbar/Navbar";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="body-wrapper">
        <nav>
          <Navbar />
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counterparties" element={<CounterpartiesPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
