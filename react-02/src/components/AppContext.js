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
    // doubly linked list
    current: null,
    // queue and stack
    queue: [],
    stack: [],
    // accounts
    accounts: [],
    total: 0,
    highestAccount: { accountName: "", balance: 0, accountNumber: "" },
    lowestAccount: { accountName: "", balance: 0, accountNumber: "" },
    newAccount: { accountName: "", balance: 0, accountNumber: "" },
    // cities and community
    communities: [],
    northern: {},
    southern: {},
    population: 0,
    loadLocalData: true,
    isLoaded: false,
    // tic-tac-toe
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
    theme: "default",
    error: "",
  };
  // default #283D3B #197278 #EDDDD4 #c44536 #772E25
  // colorSet1 #F4F1DE #E07A5F #3D405B #81B29A #F2CC8F
  // colorSet2 #0D3B66 #FAF0CA #F4D35E #EE964B #F95738
  // HIGH    #ffffff #ffff00 #3ff23f #1aebff #000000
  theme = {
    default: {
      icon: "#EDDDD4",
      color1: "#EDDDD4",
      color2: "#283D3B",
      h1: "#EDDDD4",
      h2: "#EDDDD4",
      background1: "#c44536",
      background2: "#772E25",
    },
    colorSet1: {
      icon: "#F4F1DE",
      color1: "#F4F1DE",
      color2: "#F2CC8F",
      h1: "#F2CC8F",
      h2: "#F2CC8F",
      background1: "#E07A5F",
      background2: "#81B29A",
    },
    colorSet2: {
      icon: "#F4F1DE",
      color1: "#F4F1DE",
      color2: "#F4D35E",
      h1: "#EE964B",
      h2: "#EE964B",
      background1: "#F95738",
      background2: "#0D3B66",
    },
    hightContrast: {
      icon: "#ffff00",
      color1: "#ffff00",
      color2: "#3ff23f",
      h1: "#3ff23f",
      h2: "#3ff23f",
      background1: "#000000",
      background2: "#000000",
    },
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

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          theme: this.theme,
          accountCtrl: this.accountCtrl,
          community: this.community,
          dLinkedList: this.dLinkedList,
          queue: this.queue,
          stack: this.stack,
          handleStateChange: this.handleStateChange,
          handleChange: this.handleChange,
        }}>
        <App />
      </AppContext.Provider>
    );
  }
}
