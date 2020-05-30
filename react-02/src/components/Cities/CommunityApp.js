import React, { Component } from "react";
import CommunityList from "./CommunityList";
import CityControl from "./CityControl";
import Benchmark from "./Benchmark";
import Community from "../../BLL/Communities/Community.js";
import fetchApi from "../../BLL/Communities/fetchApi";

class CommunityApp extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      communities: {},
      northern: {},
      southern: {},
      population: 0,
      loadLocalData: true,
    };
    this.url = "http://127.0.0.1:5000/";
    this.comm = new Community();
  }

  onDeleteHandler = async (key) => {
    console.log(key);
    this.comm.deleteCity(key);
    this.setState({ communities: this.comm.communities });
    await fetchApi.delete(this.url, { key: key });
    this.setState({
      northern: this.comm.getMostNorthern() ? this.comm.getMostNorthern() : {},
      southern: this.comm.getMostSouthern() ? this.comm.getMostSouthern() : {},
      population: this.comm.getPopulation() ? this.comm.getPopulation() : 0,
    });
  };
  onIncreaseHandler = async (key, amount) => {
    console.log("CommunityApp.onIncreaseHandler", key, amount);
    const city = this.comm.getCity(key);
    city.movedIn(amount);
    this.setState({ communities: this.comm.communities });
    await fetchApi.update(this.url, city);
    this.setState({
      northern: this.comm.getMostNorthern() ? this.comm.getMostNorthern() : {},
      southern: this.comm.getMostSouthern() ? this.comm.getMostSouthern() : {},
      population: this.comm.getPopulation() ? this.comm.getPopulation() : 0,
    });
  };
  onDecreaseHandler = async (key, amount) => {
    console.log("CommunityApp.onDecreaseHandler", key, amount);
    const city = this.comm.getCity(key);
    city.movedOut(amount);
    this.setState({ communities: this.comm.communities });
    await fetchApi.update(this.url, city);
    this.setState({
      northern: this.comm.getMostNorthern() ? this.comm.getMostNorthern() : {},
      southern: this.comm.getMostSouthern() ? this.comm.getMostSouthern() : {},
      population: this.comm.getPopulation() ? this.comm.getPopulation() : 0,
    });
  };

  onCreate = async (city) => {
    city = this.comm.createCity(
      city.name,
      city.latitude,
      city.longitude,
      city.population
    );
    this.setState({ communities: this.comm.communities });
    await fetchApi.add(this.url, city);
  };

  async componentDidMount() {
    let data = await fetchApi.all(this.url);
    console.log(data);
    if (data.status === 200) {
      for (let i = 0; i < data.length; i++) {
        this.comm.createCity(
          data[i].name,
          data[i].latitude,
          data[i].longitude,
          data[i].population,
          data[i].key
        );
      }
      this.setState({
        isLoaded: true,
        communities: data,
        northern: this.comm.getMostNorthern()
          ? this.comm.getMostNorthern()
          : {},
        southern: this.comm.getMostSouthern()
          ? this.comm.getMostSouthern()
          : {},
        population: this.comm.getPopulation() ? this.comm.getPopulation() : 0,
        loadLocalData: this.comm.communities.length > 5 ? false : true,
      });
    }
  }
  loadData = async (e) => {
    // read our JSON
    let response = await fetch("cities.json");
    let cities = await response.json();
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    for (let key in cities) {
      if (cities.hasOwnProperty(key)) {
        this.onCreate(cities[key]);
      }
    }
    this.setState({ loadLocalData: false });
  };
  render() {
    const { error, isLoaded, communities } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Cities and Communities</h1>
          {this.state.loadLocalData && (
            <button onClick={this.loadData}>
              Load local data on to server
            </button>
          )}
          <CityControl
            handleInput={this.onCreate}
            // onChange={this.handleChange}
          />
          <Benchmark
            northern={this.state.northern}
            southern={this.state.southern}
            population={this.state.population}
          />
          <CommunityList
            cities={communities}
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
