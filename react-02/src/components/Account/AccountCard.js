import React, { Component } from "react";
import { AppContext } from "../AppContext";
import "../../App.css";

class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      balance: this.props.account.balance,
    };
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdrawal = this.handleWithdrawal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  static contextType = AppContext;
  handleDeposit = (e) => {
    try{
    // this.props.account.balance += parseInt(this.state.amount);
    this.context.accountCtrl.deposit(this.state.amount, this.props.account.accountNumber);
     this.context.handleStateChange([
       {
         state: "highestAccount",
         newState: this.context.accountCtrl.getHighestValuedAccount()
           ? this.context.accountCtrl.getHighestValuedAccount()
           : { accountName: "", balance: 0, accountNumber: "" },
       },
       {
         state: "lowestAccount",
         newState: this.context.accountCtrl.getLowestValuedAccount()
           ? this.context.accountCtrl.getLowestValuedAccount()
           : { accountName: "", balance: 0, accountNumber: "" },
       },
       {
         state: "total",
         newState: this.context.accountCtrl.getAccountTotal(),
       },
     ]);
    this.setState({ balance: this.state.amount });
    }catch(err){
       this.context.handleStateChange([ 
         {
           state: "error",
           newState: err,
         },
       ]);
    }
  };

  handleWithdrawal = (e) => {
    // this.props.account.balance -= parseInt(this.state.amount);
    try{
    this.context.accountCtrl.withdrawal(
      this.state.amount,
      this.props.account.accountNumber
    );
     this.context.handleStateChange([
       {
         state: "highestAccount",
         newState: this.context.accountCtrl.getHighestValuedAccount()
           ? this.context.accountCtrl.getHighestValuedAccount()
           : { accountName: "", balance: 0, accountNumber: "" },
       },
       {
         state: "lowestAccount",
         newState: this.context.accountCtrl.getLowestValuedAccount()
           ? this.context.accountCtrl.getLowestValuedAccount()
           : { accountName: "", balance: 0, accountNumber: "" },
       },
       {
         state: "total",
         newState: this.context.accountCtrl.getAccountTotal(),
       },
     ]);
    this.setState({ balance: this.state.amount });
     }catch(err){
       this.context.handleStateChange([ 
         {
           state: "error",
           newState: err,
         },
       ]);
    }
  };

  handleChange(e) {
    this.setState({ amount: parseInt(e.target.value) });
  }

  render() {
    return (
      <div
        className="data-item"
        style={{
          background: this.context.theme[this.context.state.theme].background2,
        }}>
        <div>
          <div>
            <h3
              style={{
                color: this.context.theme[this.context.state.theme].h1,
              }}>
              Account key:
            </h3>
            <p>
              <span className="key">{this.props.account.accountNumber}</span>
            </p>
          </div>
          <div>
            <h3
              style={{
                color: this.context.theme[this.context.state.theme].h1,
              }}>
              Account Name:
            </h3>
            <p>
              <span>{this.props.account.accountName}</span>
            </p>
          </div>
          <div>
            <h3
              style={{
                color: this.context.theme[this.context.state.theme].h1,
              }}>
              Account Balance:
            </h3>
            <p>
              <span>{this.props.account.balance}</span>
            </p>
          </div>
          <div className="top-right">
            <button
              className="btn"
              onClick={() => this.props.handleDelete(this.props.account.accountNumber)}>
              Delete
            </button>
          </div>
        </div>
        <div>
          <div className="input-box">
            <label className="ctrl-header" htmlFor="amountChanged">
              Transaction
            </label>
            <input
              id="amountChanged"
              name="amountChanged"
              title="amount"
              type="text"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <div className="grid grid-2">
            <button className="btn" onClick={this.handleDeposit}>
              Deposit
            </button>
            <button className="btn" onClick={this.handleWithdrawal}>
              Withdrawal
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AccountCard;
