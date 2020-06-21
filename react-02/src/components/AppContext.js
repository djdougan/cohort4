import React, { Component } from "react";
import App from "../App";

import DoublyLinkedList from "../BLL/Data-Structures/DoublyLinkedList.js";
import Queue from "../BLL/Data-Structures/Queue.js";
import Stack from "../BLL/Data-Structures/Stack.js";
import { AccountController } from "../BLL/Account/Account.js";
export const AppContext = React.createContext();

export class ContextProvider extends Component {
  dLinkedList = new DoublyLinkedList();
  queue = new Queue();
  stack = new Stack();
  accountCtrl = new AccountController();

  state = {
    current: null,
    queue: [],
    stack: [],
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],

    accountList: [],
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
    for (let i = 0; i < state.length; i++) {
      this.setState({
        [state[i].state]: state[i].newState,
      });
    }
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          dLinkedList: this.dLinkedList,
          queue: this.queue,
          stack: this.stack,
          accountCtrl: this.accountCtrl,
          accountList: this.accountList,
          total: this.total,
          highestAccount: this.highestAccount,
          lowestAccount: this.lowestAccount,
          newAccount: this.newAccount,

          handleStateChange: this.handleStateChange,
          handleChange: this.handleChange,
        }}>
        <App />
      </AppContext.Provider>
    );
  }
}
