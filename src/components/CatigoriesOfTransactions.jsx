import React from "react";
import Transaction from "./Transaction";

function CatigoriesOfTransactions({ transactions, onDelete }) {
  const catigorized = {};

  transactions.forEach((transaction) => {
    !catigorized[transaction.category] ? catigorized[transaction.category] = transaction.amount :  catigorized[transaction.category] += transaction.amount;
  });

  function getAmountClasses(amount) {
    return amount > 0 ? "positive": "negative"
  }

  return (
    <div className="categories-container">
      {Object.keys(catigorized).map((category) => (
        <div key={category} className="category-container">
          <h1>{category}</h1>
          <h4> Amount:{" "} <span className={getAmountClasses(catigorized[category])}> {" "} {catigorized[category]}{" "} $</span></h4>
        </div>
      ))}
    </div>
  );
}

export default CatigoriesOfTransactions;