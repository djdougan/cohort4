import React, { Component } from 'react';
import ReactDom from "react-dom";
import '../App.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';

class MyComponent extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
          <div>
            <h1>Hello World from MyComp.</h1>
            <h2>{this.props.whatToSay}</h2>
          </div>
        );
    }
}

export default MyComponent;