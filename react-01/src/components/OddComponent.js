import React, { Component } from 'react';
import ReactDom from 'react-dom';

import App from '../App';
import '../index.css';

import * as serviceWorker from '../serviceWorker';

class OddComponent extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
          <div>
            <h1>
              OddComponent value:  <span class="red">{this.props.counter}</span>
            </h1>
          </div>
        );
    }
}
export default OddComponent;