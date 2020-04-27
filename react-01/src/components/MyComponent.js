import React, { Component } from 'react';
import ReactDom from "react-dom";
import '../MyComponent.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';

class MyComponent extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <h1>Hello World from MyComp. {this.props.whatToSay}</h1>
            </div>
        )
    }
}

export default MyComponent;