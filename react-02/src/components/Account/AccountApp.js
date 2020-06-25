import { AppContext } from "../../components/AppContext";
import React, { Component } from "react";
import AccountList from "./AccountList";
import AccountControl from "./AccountControl";
import AccountStats from "./AccountStats";

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
    console.log(
      "createAccount",
      this.context.accountCtrl.getHighestValuedAccount(),
      this.context.state.highestAccount
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
    console.log(
      "handleDelete",
      this.context.accountCtrl.getHighestValuedAccount(),
      this.context.state.highestAccount
    );
    this.context.handleStateChange([
      { state: "accounts", newState: this.context.accountCtrl.accounts },
      {
        state: "highestAccount",
        newState: this.context.accountCtrl.getHighestValuedAccount()
          ? this.context.accountCtrl.getHighestValuedAccount()
          : { accountName: "", balance: 0, key: "" },
      },
      {
        state: "lowestAccount",
        newState: this.context.accountCtrl.getLowestValuedAccount()
          ? this.context.accountCtrl.getLowestValuedAccount()
          : { accountName: "", balance: 0, key: "" },
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
        <AccountStats />
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
