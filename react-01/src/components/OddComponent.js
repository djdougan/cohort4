import React, { Component } from 'react';
import ReactDom from 'react-dom';

import App from '../App';
import '../OddComponent.css';

import * as serviceWorker from '../serviceWorker';

class OddComponent extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <h1>OddComponent value: {this.props.counter}</h1>
            </div>
        )
    }
}
export default OddComponent;