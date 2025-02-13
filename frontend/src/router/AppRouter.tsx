import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CounterpartiesPage from "../pages/CounterpartiesPage";
import TransactionsPage from "../pages/TransactionsPage";
import ReportsPage from "../pages/ReportsPage";
import Navbar from "../components/main-navbar/Navbar";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counterparties" element={<CounterpartiesPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
