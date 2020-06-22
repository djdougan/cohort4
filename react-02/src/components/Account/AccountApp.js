import { AppContext } from "../../components/AppContext";

import React, { Component } from "react";

import AccountList from "./AccountList";
import AccountControl from "./AccountControl";
// import { AccountController } from "../../BLL/Account/Account.js";

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
    this.context.handleAccountState(this.context.accountCtrl.accounts);
    this.context.handleHighestAccountState(
      this.context.accountCtrl.getHighestValuedAccount()
    );
    this.context.handleLowestAccountState(
      this.context.accountCtrl.getLowestValuedAccount()
    );
  };

  handleDelete = (key) => {
    this.context.accountCtrl.removeAccount(key);
    this.context.handleAccountState(this.context.accountCtrl.accounts);
    this.context.handleHighestAccountState(
      this.context.accountCtrl.getHighestValuedAccount()
    );
    this.context.handleLowestAccountState(
      this.context.accountCtrl.getLowestValuedAccount()
    );
  };

  render() {
    return (
      <div className="account-app">
        <h2>Accounts</h2>
        <div>
          <AccountControl
            onCreate={this.createAccount}
            onChange={this.handleChange}
            newAccount={this.context.state.newAccount}
          />
        </div>
        <div>
          <h2>
            Accounts total: <span>{this.context.state.total}</span>
          </h2>
          <h2>
            Largest account:
            <span>{this.context.state.highestAccount.accountName}</span>
            <span>{this.context.state.highestAccount.balance}</span>
          </h2>
          <h2>
            Smallest account:
            <span>{this.context.state.lowestAccount.accountName}</span>
            <span>{this.context.state.lowestAccount.balance}</span>
          </h2>
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
