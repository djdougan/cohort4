import { AppContext } from "../../components/AppContext";
import React, { Component, useContext } from "react";

import AccountList from "./AccountList";
import AccountControl from "./AccountControl";
// import { AccountController } from "../../BLL/Account/Account.js";

class AccountApp extends Component {
  constructor() {
    super();

    // context = {
    //   accountList: [],
    //   total: 0,
    //   highestAccount: { accountName: "", balance: 0, key: null },
    //   lowestAccount: { accountName: "", balance: 0, key: null },
    //   newAccount: { accountName: "", balance: 0, key: null },
    // };
    // this.accountCtrl = new AccountController();
    this.createAccount = this.createAccount.bind(this);
  }

  static contextType = AppContext;
  componentWillMount() {
    if (this.context.accountCtrl.accounts.length >= 1) {
      let highest = this.context.accountCtrl.getHighestValuedAccount();
      let lowest = this.context.accountCtrl.getLowestValuedAccount();

      this.context.handleStateChange({
        accountList: this.context.accountCtrl.accounts,
        total: this.context.accountCtrl.getAccountTotal,
        highestAccount: {
          accountName: highest.accountName,
          balance: highest.balance,
          key: highest.key,
        },
        lowestAccount: {
          accountName: lowest.accountName,
          balance: lowest.balance,
          key: lowest.key,
        },
      });
    }
  }
  createAccount = (e) => {
    this.context.accountCtrl.createAccount(
      this.context.newAccount.accountName,
      this.context.newAccount.balance
    );
    this.context.handleStateChange({ accountList: this.context.accounts });
    // this.setState({
    //   accountList: this.accountCtrl.accounts,
    // });
  };

  // handleChange=(e)=> {
  //     const { newAccount } = { ...context };
  //     console.log(newAccount)
  //     const account = newAccount;
  //     const { name, value } = e.target;
  //     account[name] = value;
  //     this.setState({ newAccount: {
  //             accountName: newAccount.accountName,
  //             balance: newAccount.balance,
  //             key: newAccount.key
  //         }});

  // }

  handleDelete = (key) => {
    this.accountCtrl.removeAccount(key);
    this.context.handleStateChange({ accountList: this.context.accounts });
    // this.setState({
    //   AccountList: this.accountCtrl.accounts,
    // });
  };

  render() {
    return (
      <div className="account-app">
        <h2>Accounts</h2>
        <div>
          <AccountControl
            onCreate={this.createAccount}
            onChange={this.handleChange}
            newAccount={this.context.newAccount}
          />
        </div>
        <div>
          <h2>
            Accounts total: <span>{this.context.total}</span>
          </h2>
          <h2>
            Largest account:{" "}
            <span>{this.context.highestAccount.accountName}</span>
            <span>{this.context.highestAccount.balance}</span>
          </h2>
          <h2>
            Smallest account:{" "}
            <span>{this.context.lowestAccount.accountName}</span>
            <span>{this.context.lowestAccount.balance}</span>
          </h2>
        </div>
        <div>
          <AccountList
            accountList={this.context.accountList}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
export default AccountApp;
