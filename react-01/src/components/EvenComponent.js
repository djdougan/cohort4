import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from '../logo.svg';
import '../index.css';
import * as serviceWorker from '../serviceWorker';

class EvenComponent extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h1>EvenComponent value: <span class="blue">{this.props.counter}</span></h1>
            </div>
        )
    }
}

export default EvenComponent;