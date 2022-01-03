function Transaction({ transaction, onDelete }) {
    return (
      <div className="transaction-container">
        <h4>Amount: {transaction.amount}</h4>
        <h4>Vendor: {transaction.vendor}</h4>
        <h4>Category: {transaction.category}</h4>
        <button className="delete-transaction" onClick={() => onDelete(transaction)}>Delete</button>
      </div>
    );
  }
  
  export default Transaction;