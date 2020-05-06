import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Game from './components/Game/Game';
import logo from './logo.svg';
import bull from './images/tribalbull.svg';
 import tictactoe from './images/tictactoe.svg';
import bank from './images/piggy-bank-icon.svg';
import git from './images/Git-logo.svg';
import './App.css';
import Home from './components/Home/Home'
// import * as serviceWorker from './serviceWorker';

class App extends Component {

  constructor(){
    super();
            this.state = {
          message: "",
          selected: null
        };
}
  handleClick = (message, comp) => e => {
    this.setState({message : message, selected: comp})
    console.log(message, comp)
};
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div className='grid-container'>
        <div onClick={this.handleClick("Home", <Home/>)}>
          <img src={bull}  className="icon counter" alt="logo" />
          <p>App</p>
          
        </div>
        <div onClick={this.handleClick("Tic Tac Toe", <Game/>)}>
          <img src={tictactoe} className="icon clockwise" alt="logo" />
          <p>Tic Tac Toe</p>
        </div>
        <div onClick={this.handleClick("Accounts")}>
          <img src={bank} className="icon counter" alt="logo" />
          <p>Maple Leaf</p>
        </div>
        <div onClick={this.handleClick("Git was clicked")}>
          <img src={git} className="icon clockwise" alt="logo" />
          <p> Git</p>
        </div>
      </div> {/**End grid container */}
      <div id="messageBox">
          {this.state.message}
      </div>
      </header>
      <main>
        <div>{this.state.selected}</div>
</main>
        </div>
  );
  }
}

export default App;
