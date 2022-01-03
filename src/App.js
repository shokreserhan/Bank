import { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Operations from "./components/Operations";
import Transactions from "./components/Transactions";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
    };
  }

  handleDelete = (transaction) => {
    const transactions = [...this.state.transactions].map((t) => {
      if (
        t.amount !== transaction.amount &&
        t.vendor !== transaction.vendor &&
        t.category !== transaction.category
      )
        return t;
    });
    this.setState({ transactions });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        {/* <Operations amount={} vendor={} category={} /> */}
        {/* <Transactions
          transactions={this.state.transactions}
          onDelete={this.handleDelete}
        /> */}

        {/* <Router>
          <Switch>
            <Route
              path="/transactions"
              id="2"
              render={() => (
                
              )}
            />
            <Route></Route>
          </Switch>
        </Router> */}
      </Fragment>
    );
  }
}

export default App;