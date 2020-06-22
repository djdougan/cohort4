import React, { Component } from "react";
import App from "../App";

import DoublyLinkedList from "../BLL/Data-Structures/DoublyLinkedList.js";
import Queue from "../BLL/Data-Structures/Queue";
import Stack from "../BLL/Data-Structures/Stack";
import { AccountController } from "../BLL/Account/Account.js";
import Community from "../BLL/Communities/Community.js";

export const AppContext = React.createContext();

export class ContextProvider extends Component {
  dLinkedList = new DoublyLinkedList();
  queue = new Queue();
  stack = new Stack();
  accountCtrl = new AccountController();
  community = new Community();

  state = {
    // doublylinkedlist
    current: null,
    // queue and stack
    queue: [],
    stack: [],
    // accounts
    accounts: [],
    total: 0,
    highestAccount: { accountName: "", balance: 0, key: null },
    lowestAccount: { accountName: "", balance: 0, key: null },
    newAccount: { accountName: "", balance: 0, key: null },
    // cities and community
    communities: {},
    northern: {},
    southern: {},
    population: 0,
    loadLocalData: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleStateChange = (states) => {
    for (let i = 0; i < states.length; i++) {
      this.setState({
        [states[i].state]: states[i].newState,
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
          state: this.state,
          accountCtrl: this.accountCtrl,
          community: this.community,
          dLinkedList: this.dLinkedList,
          queue: this.queue,
          stack: this.stack,
          handleStateChange: this.handleStateChange,
          handleAccountState: this.handleAccountState,
          handleHighestAccountState: this.handleHighestAccountState,
          handleLowestAccountState: this.handleLowestAccountState,
        }}>
        <App />
      </AppContext.Provider>
    );
  }
}
