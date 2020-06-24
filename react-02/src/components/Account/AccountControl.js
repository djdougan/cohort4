import React, { Component } from "react";
import "../../App.css";

class AccountControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      accountName: "",
      balance: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ accountName: e.target.value });
  };
  handleBalanceChange = (e) => {
    this.setState({ balance: parseInt(e.target.value) });
  };

  componentDidUpdate() {
    this.props.newAccount.accountName = this.state.accountName;
    this.props.newAccount.balance = parseInt(this.state.balance);
  }
  render() {
    return (
      <div className="account-ctrl">
        <div>
          <h2>Create Account</h2>
          <hr />
          <div className="input-box">
            <label htmlFor="AccountName">Account Name: </label>
            <input
              title="Account Name"
              type="text"
              name="accountName"
              value={this.state.accountName}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="balance">Account Balance:</label>
            <input
              title="Initial Balance"
              type="text"
              name="balance"
              value={this.state.balance}
              onChange={this.handleBalanceChange}
            />
          </div>
          <div>
            <input
              className="btn"
              type="submit"
              value="Create"
              onClick={this.props.onCreate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountControl;
