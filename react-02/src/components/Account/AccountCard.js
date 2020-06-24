import React, { Component } from "react";

import "../../App.css";
import { AppContext } from "../AppContext";

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
    this.props.account.balance += parseInt(this.state.amount);
    this.setState({ balance: this.state.amount });
  };

  handleWithdrawal = (e) => {
    this.props.account.balance -= parseInt(this.state.amount);
    this.setState({ balance: this.state.amount });
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
                color: this.context.theme[this.context.state.theme].h,
              }}>
              Account key:
            </h3>
            <p>
              <span className="key">{this.props.account.key}</span>
            </p>
          </div>
          <div>
            <h3
              style={{
                color: this.context.theme[this.context.state.theme].h,
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
                color: this.context.theme[this.context.state.theme].h,
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
              onClick={() => this.props.handleDelete(this.props.account.key)}>
              Delete
            </button>
          </div>
        </div>
        <div>
          <div className="input-box">
            <label className="ctrl-header" htmlFor="amountChanged">
              Deposit/Withdrawal amount
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
