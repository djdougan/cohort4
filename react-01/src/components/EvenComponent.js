import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from '../logo.svg';
import '../EvenComponent.css';
import * as serviceWorker from '../serviceWorker';

class EvenComponent extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h1>EvenComponent value {this.props.counter}</h1>
            </div>
        )
    }
}

export default EvenComponent;