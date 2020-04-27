import React, { Component } from 'react';
import css from '../App.css';


class Bank extends Component {
    constructor(props) {
        super();
    }

    render() {
        return ( 
            <div  className="box">
            <a className={ this.props.class }
            href={ this.props.href }
            target={ this.props.target }
            rel="noopener noreferrer" >
                    <svg id="Layer_1"className="icon" width={this.props.width} height={this.props.height}  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.6 236.01"><g id="node30"><path d="M259,151V251H126V151H259m2-2H124V253H261V149Z" transform="translate(-16 -17)" /><line x1="177" y1="134" x2="176" y2="236" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" /><text id="_20" data-name="20" transform="translate(114.28 196.15)" font-size="48" font-family="MyriadPro-Regular, Myriad Pro">30</text><ellipse cx="210" cy="184" rx="17" ry="16" /></g><g id="node20"><path d="M321,19V119H188V19H321m2-2H186V121H323V17Z" transform="translate(-16 -17)" /><line x1="239" y1="2" x2="238" y2="104" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" /><text id="_20-2" data-name="20" transform="translate(176.28 64.15)" font-size="48" font-family="MyriadPro-Regular, Myriad Pro">20</text><ellipse cx="272" cy="52" rx="17" ry="16" /></g><g id="node10"><path d="M151,19V119H18V19H151m2-2H16V121H153V17Z" transform="translate(-16 -17)" /><line x1="69" y1="2" x2="68" y2="104" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" /><text transform="translate(6.28 64.15)" font-size="48" font-family="MyriadPro-Regular, Myriad Pro">10</text><ellipse cx="102" cy="52" rx="17" ry="16" /></g><polygon points="101.98 53.59 147.19 54.25 147.02 65.82 170 53 147.41 39.51 147.24 51.08 102.02 50.41 101.98 53.59" fill="#202020" /><path d="M288,70.59h58.32s.08,0,.09,0v59.69c-.06.5.26,1.39-.57,1.15l-131.45,1.31L64.58,134.24l-10,.1-5.24.06-2.62,0H46s-.13,0-.13,0v1.8c0,3.49,0,7,.1,10.48l.2,9.65.44,18.71.16,9.69.06,10.5V196c0,.12.12.1.23.1h.33l1.31,0,2.62,0,5.23.07h5.22l4.7-.07c6.27-.14,12.49-.38,18.72-.46l9.34-.09h4.66l1.2,0,.77,0-.15,11.56c6.09-3.42,12.41-6.84,18.54-10.42l2.23-1.32A17.44,17.44,0,0,0,124,194a17.92,17.92,0,0,1-2.24-1.11l-2.21-1.24c-6.09-3.49-12-7.12-18.14-10.76l-.16,11.56h-.77l-1.21,0h-4.7l-9.38.1c-6.26.08-12.52.32-18.73.46L61.8,193H57.66l-4.12,0-2.06,0-1,0H50.2c-.09,0-.2,0-.16-.1v-.51L50,184.08l-.15-9-.44-18.73-.19-9.07c0-2.76-.08-5.5-.09-8.24v-1.42s.07,0,.1,0h.52l2.06,0,4.11,0,8.71-.08,149.81-1.5,134.44-1.34c1.05.31.64-.82.73-1.47V67.43s-.09,0-.13,0H288Z" transform="translate(-16 -17)" fill="#202020" /></svg>
            <p className="icon-paragraph">{this.props.name}</p> 
            </a> 
            </div>
        );
    }
}
export default Bank;