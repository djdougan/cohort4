import React, { Component } from "react";
import App from "../App";

import DoublyLinkedList from "../BLL/Data-Structures/DoublyLinkedList.js";
<<<<<<< HEAD
import Queue from "../BLL/Data-Structures/Queue.js";
import Stack from "../BLL/Data-Structures/Stack.js";
import { AccountController } from "../BLL/Account/Account.js";
=======
import { AccountController } from "../BLL/Account/Account.js";

>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
export const AppContext = React.createContext();

export class ContextProvider extends Component {
  dLinkedList = new DoublyLinkedList();
<<<<<<< HEAD
  queue = new Queue();
  stack = new Stack();
=======
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
  accountCtrl = new AccountController();

  state = {
    current: null,
<<<<<<< HEAD
    queue: [],
    stack: [],
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],

    accountList: [],
=======
    accounts: [],
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
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
<<<<<<< HEAD

=======
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
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
  render() {
    return (
      <AppContext.Provider
        value={{
          dLinkedList: this.dLinkedList,
<<<<<<< HEAD
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
=======
          accountCtrl: this.accountCtrl,
          handleStateChange: this.handleStateChange,
          handleAccountState: this.handleAccountState,
          handleHighestAccountState: this.handleHighestAccountState,
          handleLowestAccountState: this.handleLowestAccountState,
          state: this.state,
>>>>>>> a27a3730a14baf9cc729a3aecc4fc64a60118714
        }}>
        <App />
      </AppContext.Provider>
    );
  }
}
