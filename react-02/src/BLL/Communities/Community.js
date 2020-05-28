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
 * @classdesc
 */

class Community {
  /**
   * jsDoc
   * @description
   * @name constructor
   */
  constructor() {
    this.communities = [];
  }

  /**
   * @description creates a city object
   * @name createCity
   * @param {string} name -- Name of the city.
   * @param {number} latitude -- the angle, which ranges from 0° at the Equator to 90° (North(+) or South(-)) at the poles.
   * @param {number} longitude -- the angle east or west from the Prime Meridian, ranging from 0° at the Prime Meridian to +180° eastward and −180° westward.
   * @param {number} population -- The latest known population
   * @returns {City} city object
   */
  createCity(name, latitude, longitude, population, key = null) {
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
          key = 0;
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
      city = new City(name, latitude, longitude, population, key);
      this.communities.push(city);
    } catch (err) {
      throw err;
    }

    return city;
  }

  /**
   * @description deletes a city
   * @name getCity
   * @param {number} key -- key of the city.
   * @returns {City} city that was removed
   */
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
  /**
   * @description deletes a city
   * @name deleteCity
   * @param {number} key -- key of the city.
   * @returns {City} city that was removed
   */
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

  /**
   * @description returns the Hemisphere based on the value latitude
   * @name whichSphereNS
   * @param {number} key -- name of city.
   * @returns {string} "Northern/Southern Hemisphere"
   */
  whichSphereNS(key) {
    let result;
    let city;
    try {
      city = this.communities.find((c) => {
        return c.key === key;
      });

      // if city doesn't exit throw error
      if (!city) {
        throw new Error(`City ${key} does not exits.`);
      } else {
        if (city.latitude > 0) {
          result = "Northern Hemisphere";
        } else {
          result = "Southern Hemisphere";
        }
      }
    } catch (err) {
      throw err;
    }

    return result;
  }
  /**
   * @description returns the Hemisphere based on the value longitude
   * @name whichSphereEW
   * @param {number} key -- name of city.
   * @returns {string} "Western/Eastern Hemisphere"
   */
  whichSphereEW(key) {
    let result;
    let city;
    try {
      city = this.communities.find((c) => {
        return c.key === key;
      });

      // if city doesn't exit throw error
      if (!city) {
        throw new Error(`City with ${key} does not exits.`);
      } else {
        if (city.longitude > 0) {
          result = "Eastern Hemisphere";
        } else {
          result = "Western Hemisphere";
        }
      }
    } catch (err) {
      throw err;
    }

    return result;
  }

  /**
   * @description get the most northern city
   * @name getMostNorthern
   * @returns {{City}} most northern city object
   */
  getMostNorthern() {
    let highestLatitude = Math.max.apply(
      Math,
      this.communities.map(function (city) {
        return city.latitude;
      })
    );
    return this.communities.find((city) => city.latitude === highestLatitude);
  }

  /**
   * @description get most southern city based on latitude
   * @name getMostSouthern
   * @returns {{City}} most southern city object
   */
  getMostSouthern() {
    let lowestLatitude = Math.min.apply(
      Math,
      this.communities.map(function (city) {
        return city.latitude;
      })
    );
    return this.communities.find((city) => city.latitude === lowestLatitude);
  }
  /**
   * @description get the total population of entire community
   * @name getPopulation
   * @returns {number} population of all cities in the community
   */
  getPopulation() {
    // //total for all
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
    throw new Error(`${fieldName} ${value} is not a number`);
  }

  // check if value is out of range
  if (value <= min || value >= max) {
    throw new Error(
      `${value} is out of range, value must be between ${min} and ${max} `
    );
  }
  return value;
}
export default Community;
