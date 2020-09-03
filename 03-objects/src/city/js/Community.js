import City from "./City.js";
/**
 * Copyright (c) 2020
 *
 * @summary Handles the operations od City
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-31 ‏‎20:17:55
 * Last modified  : 2020-04-02, ‏‎12:27:04
 *
 * @class Community
 */

class Community {
  constructor() {
    this.communities = [];
  }

  createCity(key, name, latitude, longitude, population) {
    // get largest
    let city; // city object to be returned
    try {
      if (key === null) {
        if (this.communities.length >= 1) {
          let maxKey = this.communities.reduce((a, b) =>
            a.key > b.key ? a : b
          ).key;
          key = maxKey + 1;
        } else {
          key = 1;
        }
      }
      // check if latitude is a number
      if (!isNaN(key)) {
        // latitude is a string
        if (!Number.isInteger(key)) {
          key = parseFloat(key);
        }
      } else {
        throw new Error(`${key} is not a number`);
      }

      // check if name is a string,
      if (!isNaN(name)) {
        if (Number.isInteger(parseInt(name))) {
          throw new Error("name is not a string");
        }
      }

      // check if latitude is a number
      latitude = isValidNumber(latitude, "latitude", -90, 90);
      // check if longitude is a number
      longitude = isValidNumber(longitude, "longitude", -180, 180);

      // check if population is a number
      population = isValidNumber(population, "population", 0, Number.MAX_VALUE);
      city = new City(key, name, latitude, longitude, population);
      this.communities.push(city);
    } catch (err) {
      throw err;
    }

    return city;
  }


  getCity(key) {
    let city;
    try {
      // if cityName is null or a number is passed throw error
      if (typeof key === "number") {
        if (!isNaN(key)) {
          let index = this.communities.findIndex((x) => x.key === key);
          city = this.communities[index];
          // throw error if city.name does not match cityName
          if (city.key !== key) {
            throw new Error(`City with ${key} was not removed`);
          }
        } else {
          throw new Error(`${key} is a string.`);
        }
      } else if (!key) {
        throw new Error("key is null");
      }
    } catch (err) {
      throw err;
    }
    return city;
  }
  deleteCity(key) {
    let city;
    try {
      // if cityName is null or a number is passed throw error
      if (typeof key === "number") {
        if (!isNaN(key)) {
          let index = this.communities.findIndex((x) => x.key === key);
          // [0] get only the first item in the array
          city = this.communities.splice(index, 1)[0];
          // throw error if city.name does not match cityName
          if (city.key !== key) {
            throw new Error(`City with ${key} was not removed`);
          }
        } else {
          throw new Error(`${key} is a string.`);
        }
      } else if (!key) {
        throw new Error("key is null");
      }
    } catch (err) {
      throw err;
    }
    return city;
  }

  getMostNorthern() {
    let highestLatitude = Math.max.apply(
      Math,
      this.communities.map(function (city) {
        return city.latitude;
      })
    );
    return this.communities.find((city) => city.latitude === highestLatitude);
  }

  getMostSouthern() {
    let lowestLatitude = Math.min.apply(
      Math,
      this.communities.map(function (city) {
        return city.latitude;
      })
    );
    return this.communities.find((city) => city.latitude === lowestLatitude);
  }

  getPopulation() {
    let results = 0;
    let length = this.communities.length;
    let index;
    for (index = 0; index < length; index++) {
      results += this.communities[index].population;
    }
    return results;
  }
}

function isValidNumber(value, fieldName, min, max) {
  if (!isNaN(value)) {
    // value is a string
    if (!Number.isInteger(value)) {
      value = parseFloat(value);
    }
  } else {
    throw new Error(`${fieldName} is not a number`);
  }

  // check if value is out of range
  if (value < min || value > max) {
    throw new Error(
      `${value} is out of range, value must be between ${min} and ${max} `
    );
  }
  return value;
}
export default Community;
