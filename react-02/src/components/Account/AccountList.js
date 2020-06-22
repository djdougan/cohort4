import React, { Component } from "react";
import "./account.css";
import AccountCard from "./AccountCard";

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.props.handleDelete.bind(this);
  }
  render() {
    const accounts = this.props.accounts.map((account, i) => {
      return (
        <AccountCard
          key={account.key}
          account={account}
          handleDelete={this.props.handleDelete}
          handleDeposit={this.props.handleDeposit}
          handleWithdrawal={this.props.handleWithdrawal}
        />
      );
    });
    return <div className="account-list">{accounts}</div>;
  }
}

export default AccountList;
