import React, { Component } from "react";
import CityCard from "./CityCard";
import CommunityList from "./CommunityList";
import CityControl from "./CityControl";
import City from "../../BLL/Communities/City";
import Community from "../../BLL/Communities/Community.js";
import fetchApi from "../../BLL/Communities/fetchApi";

class CommunityApp extends Component {
  constructor() {
    super();
    this.state = {
      communities: {},
      isLoaded: false,
    };
    this.url = "http://127.0.0.1:5000/";
    this.comm = new Community();
  }

  onDeleteHandler = async (key) => {
    console.log(key);
    this.comm.deleteCity(key);
    this.setState({ communities: this.comm.communities });
    await fetchApi.delete(this.url, { key: key });
  };
  onIncreaseHandler = async (key, amount) => {
    console.log("CommunityApp.onIncreaseHandler", key, amount);
    const city = this.comm.getCity(key);
    city.movedIn(amount);
    this.setState({ communities: this.comm.communities });
    await fetchApi.update(this.url, city);
  };
  onDecreaseHandler = async (key, amount) => {
    console.log("CommunityApp.onDecreaseHandler", key, amount);
    const city = this.comm.getCity(key);
    city.movedOut(amount);
    this.setState({ communities: this.comm.communities });
    await fetchApi.update(this.url, city);
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
        let city = this.comm.createCity(
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
      });
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <CityControl
            handleInput={this.onCreate}
            // onChange={this.handleChange}
          />
          <CommunityList
            cities={this.state.communities}
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
