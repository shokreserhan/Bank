import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import Balance from "./components/Balance";
import Operations from "./components/Operations";
import Transactions from "./components/Transactions";
import CatigoriesOfTransactions from "./components/CatigoriesOfTransactions";
import "./App.css";

class App extends Component {
  APP_URL = "http://localhost:3001";
  EMPTY_STRING = "";
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
      inputs: {
        amount: this.EMPTY_STRING,
        vendor: this.EMPTY_STRING,
        category: this.EMPTY_STRING,
      },
    };
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = async () => {
    let transactions = (await axios.get(this.APP_URL + "/transactions")).data;
    let balance = 0;
    transactions.map((transaction) => (balance += transaction.amount));
    this.setState({
      transactions,
      inputs: {
        amount: this.EMPTY_STRING,
        vendor: this.EMPTY_STRING,
        category: this.EMPTY_STRING,
      },
      balance,
    });
  };

  addTransaction = (amount, vendor, category) => {
    if (!amount || !vendor || !category) return null;
    axios.post(this.APP_URL + "/transaction", {
        amount,
        vendor,
        category,
      }).then(() => {
        this.getTransactions();
      });
  };

  handleDelete = (transactionId) => {
    axios.delete(this.APP_URL + "/transaction", {
        data: { _id: transactionId },
      }).then(() => this.getTransactions());
  };

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

  render() {
    return (
      <Fragment>
        <Router>
          <div className="app">
            <NavBar />
            <Balance balance={this.state.balance} />
            <Route exact path="/transactions" render={() => (<Transactions transactions={this.state.transactions} onDelete={this.handleDelete} />)}/>
            <Route path={"/operations"} render={() => ( <Operations inputs={this.state.inputs} onChangeInput={this.handleChangeInput} addTransaction={this.addTransaction} />)} />
            <Route path="/CatigoriesOfTransactions" render={() => (<CatigoriesOfTransactions transactions={this.state.transactions}/>)}/>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;