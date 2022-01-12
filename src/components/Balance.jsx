import React from "react";

function Balance({ balance }) {

  function getAmountClasses() {
    return balance > 500 ? "positive" : "negative"
  }

  return (
    <div className="balance-container">
      <h1>
        Balance: <span className={getAmountClasses()}>{balance} $</span>
      </h1>
    </div>
  );
}

export default Balance;