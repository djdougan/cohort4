import React, { Component } from "react";

class Benchmark extends Component {
  render() {
    return (
      <div className="benchmark">
        <div className="benchmark-group">
          <h3>Most Northern:</h3>
          <p>{this.props.northern.name}</p>
        </div>
        <div className="benchmark-group">
          <h3>Most Southern:</h3>
          <p>{this.props.southern.name}</p>
        </div>
        <div className="benchmark-group">
          <h3>Total Population:</h3>
          <p>{this.props.population}</p>
        </div>
      </div>
    );
  }
}
export default Benchmark;
