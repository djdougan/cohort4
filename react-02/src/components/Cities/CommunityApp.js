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
    this.state = {
      isLoaded: false,
      // communities: {},
      // northern: {},
      // southern: {},
      // population: 0,
      // loadLocalData: true,
    };
    this.url = "http://127.0.0.1:5000/";
    // this.comm = new Community();
  }
  static contextType = AppContext;

  onDeleteHandler = async (key) => {
    this.context.community.deleteCity(key);
    this.setState({ communities: this.context.community.communities });
    await fetchApi.delete(this.url, { key: key });
    this.setState({
      northern: this.context.community.getMostNorthern()
        ? this.context.community.getMostNorthern()
        : {},
      southern: this.context.community.getMostSouthern()
        ? this.context.community.getMostSouthern()
        : {},
      population: this.context.community.getPopulation()
        ? this.context.community.getPopulation()
        : 0,
    });
  };
  onIncreaseHandler = async (key, amount) => {
    const city = this.context.community.getCity(key);
    city.movedIn(amount);
    this.setState({ communities: this.context.community.communities });
    await fetchApi.update(this.url, city);
    this.setState({
      northern: this.context.community.getMostNorthern()
        ? this.context.community.getMostNorthern()
        : {},
      southern: this.context.community.getMostSouthern()
        ? this.context.community.getMostSouthern()
        : {},
      population: this.context.community.getPopulation()
        ? this.context.community.getPopulation()
        : 0,
    });
  };
  onDecreaseHandler = async (key, amount) => {
    const city = this.context.community.getCity(key);
    city.movedOut(amount);
    this.setState({ communities: this.context.community.communities });
    await fetchApi.update(this.url, city);
    this.setState({
      northern: this.context.community.getMostNorthern()
        ? this.context.community.getMostNorthern()
        : {},
      southern: this.context.community.getMostSouthern()
        ? this.context.community.getMostSouthern()
        : {},
      population: this.context.community.getPopulation()
        ? this.context.community.getPopulation()
        : 0,
    });
  };

  onCreate = async (city) => {
    city = this.context.community.createCity(
      city.name,
      city.latitude,
      city.longitude,
      city.population
    );
    this.setState({ communities: this.context.community.communities });
    await fetchApi.add(this.url, city);
  };

  async componentDidMount() {
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
      this.setState({
        isLoaded: true,
        communities: data,
        northern: this.context.community.getMostNorthern()
          ? this.context.community.getMostNorthern()
          : {},
        southern: this.context.community.getMostSouthern()
          ? this.context.community.getMostSouthern()
          : {},
        population: this.context.community.getPopulation()
          ? this.context.community.getPopulation()
          : 0,
        loadLocalData:
          this.context.community.communities.length > 5 ? false : true,
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
        <div
          className="container"
          style={{
            color: this.context.theme[this.context.state.theme].color1,
            background: this.context.theme[this.context.state.theme]
              .background1,
          }}>
          <h1>Cities and Communities</h1>
          {this.state.loadLocalData && (
            <button className="btn" onClick={this.loadData}>
              Load fake data on to server
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
