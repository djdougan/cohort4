import React, { Component } from "react";
import "../../App.css";
import { AppContext } from "../AppContext";

import logo from '../../images/logo.svg';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      selected: null,
    };
  }
  static contextType = AppContext;
  handleClick = (message, comp) => (e) => {
    this.setState({ message: message, selected: comp });
  };
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a></div>
    );
  }
}

export default Home;
