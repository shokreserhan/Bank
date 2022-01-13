import React, { Component } from "react";

class Operations extends Component {

  EMPTY_STRING = "";
  constructor () {
    super()
    this.state={
      inputs: {
        amount: this.EMPTY_STRING,
        vendor: this.EMPTY_STRING,
        category: this.EMPTY_STRING,
      }
    }
  }

  handleChangeInput = (event, isNumbersOnly = false) => {
    const inputs = { ...this.state.inputs };
    const value = event.target.value;
    if (isNumbersOnly) {
      const numericValue = value.match(/\d+/);
      if (numericValue !== null) {
        inputs[event.target.className] = numericValue[0];
      }
    } else {
      inputs[event.target.className] = value;
    }
    this.setState({ inputs });
  };

  handelDeposit = () => {
    this.props.addTransaction(Number(this.state.inputs['amount']), this.state.inputs.vendor, this.state.inputs.category)
    let tempInputs= {...this.state.inputs}
    tempInputs.amount = this.EMPTY_STRING
    tempInputs.vendor = this.EMPTY_STRING
    tempInputs.category = this.EMPTY_STRING
    this.setState({inputs:tempInputs})
  }

  render(){
  return (
    <div className="operations-container">
      <div className="inputs-container">
        <input type="text" className="vendor" value={this.state.inputs.vendor} onChange={this.handleChangeInput} placeholder="vendor" />
        <input type="text" className="amount" value={this.state.inputs.amount} onChange={(event) => this.handleChangeInput(event, true)} pattern="/^[0-9\b]+$/" placeholder="amount" />
        <input type="text" className="category" value={this.state.inputs.category} onChange={this.handleChangeInput} placeholder="category" />
      </div>

      <div className="buttons-containers">
        <button onClick={this.handelDeposit}> Deposit </button>
        <button onClick={() => this.props.addTransaction(Number("-" + this.state.inputs['amount']), this.state.inputs.vendor, this.state.inputs.category)}> Withdraw </button>
      </div>
    </div>
  );
  }
}

export default Operations;