function Transaction({ transaction, onDelete }) {
  function getAmountClasses() {
    return transaction.amount > 0 ?  "positive" : "negative";
  }

  return (
    <div className="transaction-container">
      <h4> Amount: <span className={getAmountClasses()}>{transaction.amount}</span> </h4>
      <h4>Vendor: {transaction.vendor}</h4>
      <h4>Category: {transaction.category}</h4>
      <button className="delete-transaction" onClick={() => onDelete(transaction._id)}> Delete </button>
    </div>
  );
}

export default Transaction;