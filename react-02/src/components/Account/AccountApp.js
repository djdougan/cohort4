import { AppContext } from "../../components/AppContext";
<<<<<<< HEAD
import React, { Component, useContext } from "react";
=======

import React, { Component } from "react";
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714

import AccountList from "./AccountList";
import AccountControl from "./AccountControl";
// import { AccountController } from "../../BLL/Account/Account.js";

class AccountApp extends Component {
  constructor() {
    super();
<<<<<<< HEAD

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
=======
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
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
  };

  render() {
    return (
      <div className="account-app">
        <h2>Accounts</h2>
        <div>
          <AccountControl
            onCreate={this.createAccount}
            onChange={this.handleChange}
<<<<<<< HEAD
            newAccount={this.context.newAccount}
=======
            newAccount={this.context.state.newAccount}
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
          />
        </div>
        <div>
          <h2>
<<<<<<< HEAD
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
=======
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
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
          </h2>
        </div>
        <div>
          <AccountList
<<<<<<< HEAD
            accountList={this.context.accountList}
=======
            accounts={this.context.state.accounts}
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default AccountApp;
