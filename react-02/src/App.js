import React, { Component } from "react";
import Game from "./components/Game/Game";
import AccountApp from "./components/Account/AccountApp";
import CommunityApp from "./components/Cities/CommunityApp";
import DoublyLinkedList from "./components/DoublyLinkedList/DoublyLinkedListApp";
import "./App.css";
import Home from "./components/Home/Home";
class App extends Component {
  constructor() {
    super();
    this.state = {
      // message: "",
      selected: <Home />,
    };
  }
  handleClick = (message, comp) => (e) => {
    this.setState({ selected: comp });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid-container">
            <div>
              <div
                class="home-icon svg-link-icon counter-clockwise"
                onClick={this.handleClick("Home", <Home />)}></div>
              <p>Home</p>
            </div>
            <div>
              <div
                class="game-icon svg-link-icon clockwise"
                onClick={this.handleClick("Tic Tac Toe", <Game />)}></div>
              <p>Tic Tac Toe</p>
            </div>
            <div>
              <div
                class="bank-icon svg-link-icon clockwise"
                onClick={this.handleClick("Accounts", <AccountApp />)}></div>
              <p>Accounts</p>
            </div>
            <div>
              <div
                class="city-icon svg-link-icon counter-clockwise"
                onClick={this.handleClick(
                  "CommunityApp was click",
                  <CommunityApp />
                )}></div>
              <p>Communities</p>
            </div>
            <div>
              <div
                class="doubleLinkedList-icon svg-link-icon clockwise"
                onClick={this.handleClick(
                  "Doubly Linked List was clicked",
                  <DoublyLinkedList />
                )}></div>
              <p> Doubly Linked List</p>
            </div>
            <div>
              <div
                class="github-icon svg-link-icon counter-clockwise"
                onClick={this.handleClick("Git was clicked")}></div>
              <p> Git</p>
            </div>
          </div>
          {/**End grid container */}
        </header>
        <main>{this.state.selected}</main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
