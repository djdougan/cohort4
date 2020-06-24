import React, { Component } from "react";
import "../../App.css";
import { AppContext } from "../AppContext";

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
      <div
        className="container"
        style={{
          color: this.context.theme[this.context.state.theme].color1,
          background: this.context.theme[this.context.state.theme].background1,
        }}>
        <div>{this.state.selected}</div>
        <div>
          <div
            className="App-logo clockwise"
            style={{
              color: this.context.theme[this.context.state.theme].icon,
            }}
            alt="logo"></div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
