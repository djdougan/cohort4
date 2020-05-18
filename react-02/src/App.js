import React, { Component } from 'react';
import Game from './components/Game/Game';
import AccountApp from './components/Account/AccountApp';
import logo from './logo.svg';
 import tictactoe from './images/tictactoe.svg';
import bank from './images/piggy-bank.svg';
import git from './images/Git-logo.svg';
import './App.css';
import Home from './components/Home/Home'
class App extends Component {

  constructor(){
    super();
            this.state = {
          message: "",
          selected: <Home/>
        };
        
}
  handleClick = (message, comp) => e => {
    this.setState({message : message, selected: comp})
};
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div className='grid-container'>
        <div onClick={this.handleClick("Home", <Home/>)}>
          <img src={logo}  className="icon counter" alt="Home" />
          <p>Home</p>
        </div>
        <div onClick={this.handleClick("Tic Tac Toe", <Game/>)}>
          <img src={tictactoe} className="icon clockwise" alt="Tic Tac Toe" />
          <p>Tic Tac Toe</p>
        </div>
        <div onClick={this.handleClick("Accounts", <AccountApp/>)}>
          <img src={bank} className="icon counter" alt="Accounts" />
          <p>Accounts</p>
        </div>
        <div onClick={this.handleClick("Git was clicked")}>
          <img src={git} className="icon clockwise" alt="Git Hub" />
          <p> Git</p>
        </div>
      </div> {/**End grid container */}
      <div id="messageBox">
          {this.state.message}
      </div>
      </header>
      <main>{this.state.selected}
        </main>
        <footer></footer>
        </div>
  );
  }
}

export default App;
