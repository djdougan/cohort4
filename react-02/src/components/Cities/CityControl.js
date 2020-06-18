import React, { Component } from "react";

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
    // if (event.target.name === "latitude") {
    //   console.log("latitude");
    // } else if (event.target.name === "longitude") {
    //   console.log("longitude");
    // } else if (event.target.name === "name") {
    //   console.log("name");
    // } else {
    //   console.log("pop");
    // }
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
      <div>
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
            <div className="group-ctrl">
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  name="name"
                  className="city-input"
                  value={this.state.name}
                  placeholder="name"
                  onChange={this.handleChange}
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
                  placeholder="latitude"
                  value={this.state.latitude}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="group-ctrl">
              <label htmlFor="longitude">
                Longitude:
                <input
                  type="text"
                  name="longitude"
                  className="city-input"
                  placeholder="longitude"
                  value={this.state.longitude}
                  onChange={this.handleChange}
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
                  placeholder="population"
                  value={this.state.population}
                  onChange={this.handleChange}
                />
              </label>
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
