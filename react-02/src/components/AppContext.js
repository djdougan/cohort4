import React, { Component } from "react";
import App from "../App";

import DoublyLinkedList from "../BLL/Data-Structures/DoublyLinkedList.js";

export const AppContext = React.createContext();

export class ContextProvider extends Component {
  dLinkedList = new DoublyLinkedList();

  state = {
    current: null,
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
          handleStateChange: this.handleStateChange,
        }}>
        <App />
      </AppContext.Provider>
    );
  }
}
