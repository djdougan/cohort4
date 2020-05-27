import React, { Component } from "react";
import "./community.css";
import CityCard from "./CityCard";

// Child component its only purpose is to render

class CommunityList extends Component {
  render() {
    const cityList = this.props.cities.map((city, i) => {
      return (
        <CityCard
          key={city.key}
          city={city}
          handleDelete={this.props.onDelete}
          handleIncrease={this.props.onIncrease}
          handleDecrease={this.props.onDecrease}
          onChange={this.props.onChange}
        />
      );
    });
    return <div>{cityList}</div>;
  }
}

export default CommunityList;
