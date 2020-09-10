import { AppContext } from "../AppContext";
import React, { Component } from "react";
import CommunityList from "./CommunityList";
import CityControl from "./CityControl";
import Benchmark from "./Benchmark";
import fetchApi from "../../BLL/Communities/fetchApi";
import "../../App.css";

class CommunityApp extends Component {
  constructor() {
    super();
    this.url = "http://127.0.0.1:5000/";
  }
  static contextType = AppContext;

  onDeleteHandler = async (key) => {
    try {
      this.context.community.deleteCity(key);
      await fetchApi.delete(this.url, { key: key });
      this.context.handleStateChange([
        { state: "communities", newState: this.context.community.communities },
        {
          state: "northern",
          newState: this.context.community.getMostNorthern()
            ? this.context.community.getMostNorthern()
            : {},
        },
        {
          state: "southern",
          newState: this.context.community.getMostSouthern()
            ? this.context.community.getMostSouthern()
            : {},
        },
        {
          state: "population",
          newState: this.context.community.getPopulation()
            ? this.context.community.getPopulation()
            : 0,
        },
      ]);
    } catch (err) {

      this.context.handleStateChange([
        {
          state: "error",
          newState: err
        },
      ]);
    }
  };
  onIncreaseHandler = async (key, amount) => {
    try {
      const city = this.context.community.getCity(key);
      city.movedIn(amount);

      await fetchApi.update(this.url, city);
      this.context.handleStateChange([
        { state: "communities", newState: this.context.community.communities },
        {
          state: "northern",
          newState: this.context.community.getMostNorthern()
            ? this.context.community.getMostNorthern()
            : {},
        },
        {
          state: "southern",
          newState: this.context.community.getMostSouthern()
            ? this.context.community.getMostSouthern()
            : {},
        },
        {
          state: "population",
          newState: this.context.community.getPopulation()
            ? this.context.community.getPopulation()
            : 0,
        },
      ]);
    } catch (err) {

      this.context.handleStateChange([
        {
          state: "error",
          newState: err
        }
      ]);
    };
  };

  onDecreaseHandler = async (key, amount) => {
    try {
      console.log("CommunityApp.onDecreaseHandler", key, amount);
      const city = this.context.community.getCity(key);
      city.movedOut(amount);
      await fetchApi.update(this.url, city);

      this.context.handleStateChange([
        { state: "communities", newState: this.context.community.communities },
        {
          state: "northern",
          newState: this.context.community.getMostNorthern()
            ? this.context.community.getMostNorthern()
            : {},
        },
        {
          state: "southern",
          newState: this.context.community.getMostSouthern()
            ? this.context.community.getMostSouthern()
            : {},
        },
        {
          state: "population",
          newState: this.context.community.getPopulation()
            ? this.context.community.getPopulation()
            : 0,
        },
      ]);
    } catch (err) {

      this.context.handleStateChange([
        {
          state: "error",
          newState: err
        },
      ]);
    }
  };

  onCreate = async (city) => {
    try {
      city = this.context.community.createCity(
        city.name,
        city.latitude,
        city.longitude,
        city.population
      );
      await fetchApi.add(this.url, city);
      this.context.handleStateChange([
        { state: "communities", newState: this.context.community.communities },
        {
          state: "northern",
          newState: this.context.community.getMostNorthern()
            ? this.context.community.getMostNorthern()
            : {},
        },
        {
          state: "southern",
          newState: this.context.community.getMostSouthern()
            ? this.context.community.getMostSouthern()
            : {},
        },
        {
          state: "population",
          newState: this.context.community.getPopulation()
            ? this.context.community.getPopulation()
            : 0,
        },
      ]);
    } catch (err) {

      this.context.handleStateChange([
        {
          state: "error",
          newState: err
        },
      ]);
    }
  };

  async componentDidMount() {
    try {
      let data = await fetchApi.all(this.url);
      if (data.status === 200) {
        for (let i = 0; i < data.length; i++) {
          this.context.community.createCity(
            data[i].name,
            data[i].latitude,
            data[i].longitude,
            data[i].population,
            data[i].key
          );
        }
        this.context.handleStateChange([
          {
            state: "isLoaded",
            newState: true,
          },
          {
            state: "communities",
            newState: data,
          },
          {
            state: "northern",
            newState: this.context.community.getMostNorthern()
              ? this.context.community.getMostNorthern()
              : {},
          },
          {
            state: "southern",
            newState: this.context.community.getMostSouthern()
              ? this.context.community.getMostSouthern()
              : {},
          },
          {
            state: "population",
            newState: this.context.community.getPopulation()
              ? this.context.community.getPopulation()
              : 0,
          },
        ]);
      }
    } catch (err) {

      this.context.handleStateChange([
        {
          state: "error",
          newState: err
        },
      ]);
    }
  }
  loadData = async (e) => {
    try {
      // read our JSON
      let response = await fetch("cities.json");
      let cities = await response.json();
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      for (let key in cities) {
        if (cities.hasOwnProperty(key)) {
          this.onCreate(cities[key]);
        }
      }
    } catch (err) {
      this.context.handleStateChange([
        {
          state: "error",
          newState: err,
        },
      ]);
    }
  };
  render() {
    if (this.context.state.error) {
      return <div>Error: {this.context.state.error.message}</div>;
    } else if (!this.context.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div
          className="container"
          style={{
            color: this.context.theme[this.context.state.theme].color1,
            background: this.context.theme[this.context.state.theme]
              .background1,
          }}>
          <h1>Cities and Communities</h1>
          {this.context.state.loadLocalData && (
            <button className="btn" onClick={this.loadData}>
              Load fake data on to server
            </button>
          )}
          <CityControl
            handleInput={this.onCreate}
          // onChange={this.handleChange}
          />
          <Benchmark
            northern={this.context.state.northern}
            southern={this.context.state.southern}
            population={this.context.state.population}
          />
          <CommunityList
            cities={this.context.state.communities}
            onDelete={this.onDeleteHandler}
            onIncrease={this.onIncreaseHandler}
            onDecrease={this.onDecreaseHandler}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
}
export default CommunityApp;
