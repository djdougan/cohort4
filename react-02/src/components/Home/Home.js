import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Home extends Component {

  constructor(){
    super();
            this.state = {
          message: "",
          selected: null
        };
}
  handleClick = (message, comp) => e => {
    this.setState({message : message, selected: comp})
};
  render(){
  return (
      <div>
      <div>{this.state.selected}</div>
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
      </div>
  );
  }
}

export default Home;
