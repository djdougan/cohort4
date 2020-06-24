import { AppContext } from "../AppContext";
import React, { Component } from "react";
import "../../App.css";

// Child component its only purpose is to render

class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.city.key,
      amount: "",
    };
  }
  static contextType = AppContext;

  onDelete = (e) => {
    this.props.handleDelete(this.state.key);
    e.preventDefault();
  };
  onIncrease = (e) => {
    if (this.state.amount !== "") {
      this.props.handleIncrease(this.state.key, this.state.amount);
    }
    e.preventDefault();
  };
  onDecrease = (e) => {
    if (this.state.amount !== "") {
      this.props.handleDecrease(this.state.key, this.state.amount);
    }
    e.preventDefault();
  };
  onChange = (e) => {
    this.setState({ amount: parseInt(e.target.value) });
  };

  render() {
    return (
      <div
        className="data-item"
        style={{
          background: this.context.theme[this.context.state.theme].background2,
        }}
        key={this.props.city.id}>
        <div className="input-box">
          <label id="name-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="city-input"
            value={this.props.city.name}
            aria-labelledby="name=label"
            disabled
          />
        </div>
        <div className="input-box">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            name="latitude"
            className="city-input"
            value={this.props.city.latitude}
            disabled
          />
        </div>
        <div className="input-box">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            name="longitude"
            className="city-input"
            value={this.props.city.longitude}
            disabled
          />
        </div>
        <div className="input-box">
          <label htmlFor="population">Population:</label>
          <input
            type="text"
            name="population"
            className="city-input"
            value={this.props.city.population}
            disabled
          />
        </div>
        <div className="input-box">
          <label htmlFor="transaction">Population Change:</label>
          <input
            type="text"
            name="population-change"
            className="city-input"
            onChange={this.onChange}
          />
        </div>
        <div className="group-ctrl">
          <button onClick={this.onIncrease} className="btn">
            Increase
          </button>
          <button onClick={this.onDecrease} className="btn">
            Decrease
          </button>
          <button onClick={this.onDelete} className="btn">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default CityCard;
