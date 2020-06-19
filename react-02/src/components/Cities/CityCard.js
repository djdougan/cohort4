import React, { Component } from "react";
import "../../css/red/community.css";

// Child component its only purpose is to render

class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.city.key,
      amount: "",
    };
  }

  onDelete = (e) => {
    this.props.handleDelete(this.props.account.key);
    e.preventDefault();
  };
  onIncrease = (e) => {
    if (this.state.amount !== "") {
      this.props.handleIncrease(this.state.key, this.state.amount);
    }
    console.log(this.state.amount);
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
      <div className="city-card" key={this.props.city.id}>
        <div className="group-ctrl">
          <label id="name-label" htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              className="city-input"
              value={this.props.city.name}
              disabled
              aria-labelledby="name=label"
            />
          </label>
        </div>
        <div className="group-ctrl">
          <label htmlFor="latitude">
            Latitude:
            <input
              type="text"
              name="latitude"
              className="city-input"
              value={this.props.city.latitude}
              disabled
            />
          </label>
        </div>
        <div className="group-ctrl">
          <label htmlFor="longitude">
            Longitude:
            <input
              type="test"
              name="longitude"
              className="city-input"
              value={this.props.city.longitude}
              disabled
            />
          </label>
        </div>
        <div className="group-ctrl">
          <label htmlFor="population">
            Population:
            <input
              type="text"
              name="population"
              className="city-input"
              value={this.props.city.population}
              disabled
            />
          </label>
        </div>
        <div className="group-ctrl">
          <label htmlFor="transaction">
            Population Change:
            <input
              type="text"
              name="population-change"
              className="city-input"
              onChange={this.onChange}
            />
          </label>
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
