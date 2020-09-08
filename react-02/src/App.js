import React, { Component } from "react";
import { AppContext } from "./components/AppContext";
import Game from "./components/Game/Game";
import AccountApp from "./components/Account/AccountApp";
import CommunityApp from "./components/Cities/CommunityApp";
import DoublyLinkedList from "./components/DoublyLinkedList/DoublyLinkedListApp";
import DataStructuresApp from "./components/DataStructures/DataStructuresApp";
import Home from "./components/Home/Home";
import Theme from "./components/Theme/Theme";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      // message: "",
      selected: <Home />,
    };
  }
  static contextType = AppContext;
  handleClick = (message, comp) => (e) => {
    this.setState({ selected: comp });
  };
  render() {
    return (
      <div className="App">
        <Theme />
        <header
          className="App-header"
          style={{
            color: this.context.theme[this.context.state.theme].color1,
            background: this.context.theme[this.context.state.theme]
              .background1,
          }}>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="home-icon svg-link-icon counter-clockwise"
              onClick={this.handleClick("Home", <Home />)}></div>
            <p>Home</p>
          </div>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="game-icon svg-link-icon clockwise"
              onClick={this.handleClick("Tic Tac Toe", <Game />)}></div>
            <p>Tic Tac Toe</p>
          </div>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="bank-icon svg-link-icon clockwise"
              onClick={this.handleClick("Accounts", <AccountApp />)}></div>
            <p>Accounts</p>
          </div>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="city-icon svg-link-icon"
              onClick={this.handleClick(
                "CommunityApp was click",
                <CommunityApp />
              )}></div>
            <p>Communities</p>
          </div>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="doubleLinkedList-icon svg-link-icon"
              onClick={this.handleClick(
                "Doubly Linked List was clicked",
                <DoublyLinkedList />
              )}></div>
            <p> Doubly Linked List</p>
          </div>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="queue-stack-icon svg-link-icon"
              onClick={this.handleClick(
                "Queues and Stacks was clicked",
                <DataStructuresApp />
              )}></div>
            <p> Queues and Stacks</p>
          </div>
          <div>
            <div
              style={{
                background: this.context.theme[this.context.state.theme].icon,
              }}
              className="github-icon svg-link-icon counter-clockwise"
              onClick={this.handleClick("Git was clicked")}></div>
            <p> Git</p>
          </div>
          {/**End grid container */}
        </header>
        <main>{this.state.selected}</main>
        <footer>
          <div className="grid-2">
            <div>
              <h3>Contact Douglas Dougan</h3>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/djdougan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Douglas's LinkedIn Account">
                    <i className="fa fa-linkedin hover-opacity"></i>linkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/djdougan/cohort4"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Douglas's GitHub Account">
                    <i className="fa fa-facebook-official hover-opacity"></i>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ddougan.CIS"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Douglas's Facebook Account">
                    <i className="fa fa-facebook-official hover-opacity"></i>
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/djdougan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Douglas's twitter Account">
                    <i className="fa fa-twitter hover-opacity"></i>twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://ddougan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="ddougan.com Web Site">
                    <i className="fa fa-globe hover-opacity"></i>ddougan.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Contact InceptionU(EvolveU)</h3>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/inceptionu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="InceptionU LinkedIn Account">
                    <i className="fa fa-linkedin hover-opacity"></i>linkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/inceptionu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="InceptionU Facebook account">
                    <i className="fa fa-facebook-official hover-opacity"></i>
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/_InceptionU"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="InceptionU Twitter account">
                    <i className="fa fa-twitter hover-opacity"></i>twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.inceptionu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="InceptionU Web Site">
                    <i className="fa fa-globe hover-opacity"></i>inceptionu.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
