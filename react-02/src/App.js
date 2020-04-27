import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import bull from './images/tribalbull.svg';
 import horse from './images/angry-horse.svg';
  import flames from './images/calgaryflameshorse.svg';
import leaf from './images/maple-leaf.svg';
import git from './images/Git-logo.svg';
import './App.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {

  constructor(){
    super();
            this.state = {
          message: "",
        };
}
  handleClick = message => e => {
    this.setState({message : message});
};
  render(){
  return (
    <div className="App">
      <div className='grid-container'>
        <div onClick={this.handleClick("bull was clicked")}>
          <img src={bull}  className="icon counter" alt="logo" />
          <p> Bull</p>
        </div>
        <div onClick={this.handleClick("Horse was clicked")}>
          <img src={horse} className="icon clockwise" alt="logo" />
          <p> Bull</p>
        </div>
        <div onClick={this.handleClick("Maple Leaf was clicked")}>
          <img src={leaf} className="icon counter" alt="logo" />
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
      <header className="App-header">
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
        </a>
      </header>
    </div>
  );
  }
}

export default App;
