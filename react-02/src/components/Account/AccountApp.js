import { AppContext } from "../../components/AppContext";
import React, { Component } from "react";
import AccountList from "./AccountList";
import AccountControl from "./AccountControl";

import "../../App.css";

class AccountApp extends Component {
  constructor() {
    super();
    this.createAccount = this.createAccount.bind(this);
  }
  static contextType = AppContext;
  createAccount = (e) => {
    this.context.accountCtrl.createAccount(
      this.context.state.newAccount.accountName,
      this.context.state.newAccount.balance
    );

    this.context.handleStateChange([
      { state: "accounts", newState: this.context.accountCtrl.accounts },
      {
        state: "highestAccount",
        newState: this.context.accountCtrl.getHighestValuedAccount(),
      },
      {
        state: "lowestAccount",
        newState: this.context.accountCtrl.getLowestValuedAccount(),
      },
      {
        state: "total",
        newState: this.context.accountCtrl.getAccountTotal(),
      },
    ]);
  };

  handleDelete = (key) => {
    this.context.accountCtrl.removeAccount(key);
    this.context.handleStateChange([
      { state: "accounts", newState: this.context.accountCtrl.accounts },
      {
        state: "highestAccount",
        newState: this.context.accountCtrl.getHighestValuedAccount(),
      },
      {
        state: "lowestAccount",
        newState: this.context.accountCtrl.getLowestValuedAccount(),
      },
      {
        state: "total",
        newState: this.context.accountCtrl.getAccountTotal(),
      },
    ]);
  };

  render() {
    return (
      <div
        className="container"
        style={{
          color: this.context.theme[this.context.state.theme].color1,
          background: this.context.theme[this.context.state.theme].background1,
        }}>
        <h2>Accounts</h2>
        <div>
          <AccountControl
            onCreate={this.createAccount}
            onChange={this.handleChange}
            newAccount={this.context.state.newAccount}
          />
        </div>
        <div className="data-item">
          <div>
            <h2
              style={{
                color: this.context.theme[this.context.state.theme].h,
              }}>
              Accounts total:
            </h2>
            <p>
              <span>{this.context.state.total}</span>
            </p>
          </div>
          <div>
            <h2
              style={{
                color: this.context.theme[this.context.state.theme].h,
              }}>
              Largest account:
            </h2>
            <p>
              <span>{this.context.state.highestAccount.accountName}</span>
              <span>{this.context.state.highestAccount.balance}</span>
            </p>
          </div>
          <div>
            <h2
              style={{
                color: this.context.theme[this.context.state.theme].h,
              }}>
              Smallest account:
            </h2>
            <p>
              <span>{this.context.state.lowestAccount.accountName}</span>
              <span>{this.context.state.lowestAccount.balance}</span>
            </p>
          </div>
        </div>
        <div>
          <AccountList
            accounts={this.context.state.accounts}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default AccountApp;
