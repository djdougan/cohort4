import React, { Component } from "react";
import App from "../App";

import DoublyLinkedList from "../BLL/Data-Structures/DoublyLinkedList.js";
import { AccountController } from "../BLL/Account/Account.js";

export const AppContext = React.createContext();

export class ContextProvider extends Component {
  dLinkedList = new DoublyLinkedList();
  accountCtrl = new AccountController();

  state = {
    current: null,
    accounts: [],
    total: 0,
    highestAccount: { accountName: "", balance: 0, key: null },
    lowestAccount: { accountName: "", balance: 0, key: null },
    newAccount: { accountName: "", balance: 0, key: null },
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleStateChange = (state) => {
    for (let i = 0; i <= state.length; i++) {
      this.setState({
        [state[i].state]: state[i].newState,
      });
    }
  };
  handleAccountState = (accounts) => {
    console.log(accounts);
    this.setState({ accounts: accounts });
  };
  handleHighestAccountState = (accounts) => {
    console.log(accounts);
    this.setState({ highestAccount: accounts });
  };
  handleLowestAccountState = (accounts) => {
    console.log(accounts);
    this.setState({ lowestAccount: accounts });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          dLinkedList: this.dLinkedList,
          accountCtrl: this.accountCtrl,
          handleStateChange: this.handleStateChange,
          handleAccountState: this.handleAccountState,
          handleHighestAccountState: this.handleHighestAccountState,
          handleLowestAccountState: this.handleLowestAccountState,
          state: this.state,
        }}>
        <App />
      </AppContext.Provider>
    );
  }
}
