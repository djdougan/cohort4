import React, { Component } from "react";
import { AppContext } from "../AppContext";
import "../../App.css";

class CityControl extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      latitude: "",
      longitude: "",
      population: "",
      errorMessage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    // this.onCreate = this.onCreate.bind(this);
  }
  static contextType = AppContext;
  onClear = (e) => {
    this.setState({
      key: null,
      name: "",
      latitude: "",
      longitude: "",
      population: "",
    });
    e.preventDefault();
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  onCreate = (e) => {
    if (
      this.state.latitude <= 90 &&
      this.state.latitude >= -90 &&
      this.state.longitude <= 180 &&
      this.state.latitude >= -180 &&
      this.state.latitude !== "" &&
      this.state.longitude !== ""
    ) {
      this.setState({ errorMessage: "" });
      const city = {
        name: this.state.name,
        latitude: parseInt(this.state.latitude),
        longitude: parseInt(this.state.longitude),
        population: parseInt(this.state.population),
      };
      this.props.handleInput(city);
      this.onClear(e);
    } else {
      this.setState({
        errorMessage: "Min/Max latitude:-90/90 , longitude: -180/180",
      });
    }
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div>
          {this.state.errorMessage && (
            <h3 style={{ color: "red" }} className="error">
              {" "}
              {this.state.errorMessage}{" "}
            </h3>
          )}
        </div>

        <form action="#">
          <div className="city-ctrl">
            <div className="input-box">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="city-input"
                value={this.state.name}
                placeholder="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="latitude">Latitude:</label>
              <input
                type="text"
                name="latitude"
                className="city-input"
                placeholder="latitude"
                value={this.state.latitude}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="longitude">Longitude:</label>
              <input
                type="text"
                name="longitude"
                className="city-input"
                placeholder="longitude"
                value={this.state.longitude}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="population">Population:</label>
              <input
                type="number"
                name="population"
                className="city-input"
                placeholder="population"
                value={this.state.population}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="group-ctrl">
            <button className="btn" onClick={this.onCreate}>
              Create
            </button>
            <button className="btn" onClick={this.onClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default CityControl;
