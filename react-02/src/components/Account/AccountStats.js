import React, { Component } from "react";
import { AppContext } from "../AppContext";

import "../../App.css";

class AccountStats extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div
        className="data-item"
        style={{
          background: this.context.theme[this.context.state.theme].background2,
        }}>
        <div>
          <h2
            style={{
              color: this.context.theme[this.context.state.theme].h1,
            }}>
            Accounts total:
          </h2>
          <p>
            <span>{this.context.state.total}</span>
          </p>
        </div>
        <div>
          <h2
            style={{
              color: this.context.theme[this.context.state.theme].h1,
            }}>
            Largest account:
          </h2>
          <p>
            <span>{this.context.state.highestAccount.accountName}</span>
            <span>{this.context.state.highestAccount.balance}</span>
          </p>
        </div>
        <div>
          <h2
            style={{
              color: this.context.theme[this.context.state.theme].h1,
            }}>
            Smallest account:
          </h2>
          <p>
            <span>{this.context.state.lowestAccount.accountName}</span>
            <span>{this.context.state.lowestAccount.balance}</span>
          </p>
        </div>
      </div>
    );
  }
}

export { AccountStats as default };
