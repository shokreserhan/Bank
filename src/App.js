import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import Balance from "./components/Balance";
import Operations from "./components/Operations";
import Transactions from "./components/Transactions";
import CatigoriesOfTransactions from "./components/CatigoriesOfTransactions";
import "./App.css";

class App extends Component {
  APP_URL = "http://localhost:3001";
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
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

  render() {
    return (
      <Fragment>
        <Router>
          <div className="app">
            <NavBar />
            <Balance balance={this.state.balance} />
            <Route exact path="/transactions" render={() => (<Transactions transactions={this.state.transactions} onDelete={this.handleDelete} />)}/>
            <Route exact path={"/operations"} render={() => ( <Operations addTransaction={this.addTransaction} />)} />
            <Route exact path="/CatigoriesOfTransactions" render={() => (<CatigoriesOfTransactions transactions={this.state.transactions}/>)}/>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;