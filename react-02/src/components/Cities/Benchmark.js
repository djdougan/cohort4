import { AppContext } from "../AppContext";
import React, { Component } from "react";

import "../../App.css";
class Benchmark extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div
        className="benchmark"
        style={{
          color: this.context.theme[this.context.state.theme].color1,
          background: this.context.theme[this.context.state.theme].background2,
        }}>
        <div className="benchmark-group">
          <h3
            style={{
              color: this.context.theme[this.context.state.theme].h,
            }}>
            Most Northern:
          </h3>
          <p>{this.props.northern.name}</p>
        </div>
        <div className="benchmark-group">
          <h3
            style={{
              color: this.context.theme[this.context.state.theme].h,
            }}>
            Most Southern:
          </h3>
          <p>{this.props.southern.name}</p>
        </div>
        <div className="benchmark-group">
          <h3
            style={{
              color: this.context.theme[this.context.state.theme].h,
            }}>
            Total Population:
          </h3>
          <p>{this.props.population}</p>
        </div>
      </div>
    );
  }
}
export default Benchmark;
