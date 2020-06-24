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
          <div>
            <div>
              <address>
                Written by
                <a href="mailto:ddougan@ddougan.com">Douglas Dougan</a>
                .<br />
                Visit me at:
                <br />
                ddougan.com
                <br />
                Calgary, Alberta
                <br />
                Canada
              </address>
            </div>
            <div>
              <address>
                Written by
                <a href="mailto:ddougan@ddougan.com">Douglas Dougan</a>
                .<br />
                Visit me at:
                <br />
                ddougan.com
                <br />
                Calgary, Alberta
                <br />
                Canada
              </address>
            </div>
            <div>
              <address>
                Written by:
                <a href="mailto:ddougan@ddougan.com">Douglas Dougan</a>
                .<br />
                Phone:
                <a href="tel:+14035856207">+1-(403)-585-6207</a>
                <br />
                <br /> Visit me at:
                <br />
                ddougan.com
                <br />
                Calgary, Alberta
                <br />
                Canada
              </address>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
