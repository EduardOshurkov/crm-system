import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar, FaMoneyBillWave } from "react-icons/fa";
import "./Navbar.scss";
const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar__menu">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li className={location.pathname === "/counterparties" ? "active" : ""}>
          <Link to="/counterparties">
            <FaUsers /> Counterparties
          </Link>
        </li>
        <li className={location.pathname === "/transactions" ? "active" : ""}>
          <Link to="/transactions">
            <FaMoneyBillWave /> Transactions
          </Link>
        </li>
        <li className={location.pathname === "/reports" ? "active" : ""}>
          <Link to="/reports">
            <FaChartBar /> Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
