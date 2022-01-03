import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/transactions"><span>Transactions </span></Link>
      <Link to="/operations"><span>Operations </span></Link>
      <Link to="/CatigoriesOfTransactions"><span>Catigories of Transactions </span></Link>
    </div>
  );
}

export default NavBar;