import React from "react";

function Operations({ onChangeInput, inputs, addTransaction }) {
  const { vendor, category, amount } = inputs;
  return (
    <div className="operations-container">
      <div className="inputs-container">
        <input type="text" className="vendor" value={inputs.vendor} onChange={onChangeInput} placeholder="vendor" />
        <input type="text" className="amount" value={inputs.amount} onChange={(event) => onChangeInput(event, true)} pattern="/^[0-9\b]+$/" placeholder="amount" />
        <input type="text" className="category" value={inputs.category} onChange={onChangeInput} placeholder="category" />
      </div>

      <div className="buttons-containers">
        <button onClick={() => addTransaction(Number(amount), vendor, category)}> Deposit </button>
        <button onClick={() => addTransaction(Number("-" + amount), vendor, category)}> Withdraw </button>
      </div>
    </div>
  );
}

export default Operations;