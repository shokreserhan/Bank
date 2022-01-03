import React from "react";
import Transaction from "./Transaction";

function Transactions({ transactions, onDelete }) {
  return (
    <div className="transactions-container">
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Transactions;