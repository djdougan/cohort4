import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import OddComponent from './components/OddComponent';
import EvenComponent from './components/EvenComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      myState: "TBD",
      counter: 21
    };
    this.onPushMe = this.onPushMe.bind(this)
  }
  onPushMe() {
  this.setState(state=>({
    counter: this.state.counter + 1,
    myState: this.state.counter, // this will always be one behind
  }));
    console.log("You pushed Me ");
  }
  render(){        
    const oddEven = this.state.counter % 2===0 ? <EvenComponent counter={this.state.counter}/> :
          <OddComponent counter={this.state.counter}/>
        ;

    return (
      <div className="App">
        <header className="App-header">
          <button class="btn btn-primary" onClick={this.onPushMe}>
            Push Me
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application</h1>
          <h2> and my name is Doug</h2>
          <h3>{this.state.myState}</h3>
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
          <MyComponent whatToSay={"My First React App"} />
          {oddEven}
        </header>
      </div>
    );
  };
  }


export default App;
