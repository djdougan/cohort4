import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import OddComponent from './components/OddComponent';
import EventComponent from './components/EvenComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    // this.counter = 21;
    this.state={
      myState: "TBD",
      counter: 21
    };
    this.onPushMe = this.onPushMe.bind(this)
  }
  onPushMe() {
  this.setState(state=>({
    counter: this.state.counter+1,
    myState: "now " + this.state.counter,
  }));
    console.log("You pushed Me ");
  }
  render(){        
    const oddEven = this.state.counter % 2===0 ? <EventComponent counter={this.state.counter}/> :
          <OddComponent counter={this.state.counter}/>
        ;

    return(
    <div className="App">
      <header className="App-header">
      <button onClick={this.onPushMe}>PushMe</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am in control of this application and my name is Doug {this.state.myState}</h1>
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
    <MyComponent whatToSay={'What Ever'}/>
      {oddEven}
    </div>
  );
  };
  }


export default App;
