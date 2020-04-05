import City from "./City";
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
    createCity(name, latitude, longitude, population) {
        let city; // city object to be returned
        try {
            // check if name is a string,
            if (!isNaN(name)) {
                if (Number.isInteger(parseInt(name))) {
                    throw new Error('name is not a string')
                }
            }
            // check if latitude is a number
            if (!isNaN(latitude)) {
                // latitude is a string
                if (!Number.isInteger(latitude)) {
                    latitude = parseFloat(latitude);
                }

            } else {
                throw new Error('latitude is not a number')
            }
            // check if longitude is a number
            if (!isNaN(longitude)) {
                // longitude is a string
                if (!Number.isInteger(longitude)) {
                    longitude = parseFloat(longitude);
                }

            } else {
                throw new Error('longitude is not a number')
            }
            // check if population is a number
            if (!isNaN(population)) {
                // latitude is a string
                if (!Number.isInteger(population)) {
                    population = parseFloat(population);
                }

            } else {
                throw new Error('population is not a number')
            }
            // check if latitude is out of range
            if (latitude > 90 || latitude < -90) {
                throw new Error(`${latitude} is out of range, value must be between -90 and 90 `);
            }
            // check if latitude is out of range
            if (longitude > 180 || longitude < -180) {
                throw new Error(`${longitude} is out of range, value must be between -180 and 180 `);
            }

            city = new City(name, latitude, longitude, population);
            this.communities.push(city);

        } catch (err) {
            throw err
        }
        return city;
    }

    /**
    * @description deletes a city
    * @name deleteCity
    * @param {string} cityName -- Name of the city.
    * @returns {City} city that was removed
    */
    deleteCity(cityName) {
        let city;
        try {
            // if cityName is null or a number is passed throw error
            if (typeof (cityName) === "string") {
                if (isNaN(cityName)) {


                    let index = this.communities.findIndex(x => x.name === cityName);
                    // [0] get only the first item in the array
                    city = this.communities.splice(index, 1)[0];
                    // throw error if city.name does not match cityName
                    if (city.name !== cityName) {
                        throw new Error(`${cityName} was not removed`)
                    }
                } else {
                    throw new Error(`${cityName} is a number.`)
                }

            } else if (!cityName) {
                throw new Error("name is a empty string or null")
            }

        } catch (err) {
            throw err;
        }
        return city;
    }

    /**
    * @description returns the Hemisphere based on the value latitude
    * @name whichSphereNS
    * @param {string} cityName -- name of city.
    * @returns {string} "Northern/Southern Hemisphere"
    */
    whichSphereNS(cityName) {
        let result;
        let city;
        try {
            city = this.communities.find(c => {
                return c.name === cityName
            });

            // if city doesn't exit throw error
            if (!city) {
                throw new Error(`{cityName} does not exits.`)
            } else {
                if (city.latitude > 0) {
                    result = "Northern Hemisphere";
                } else {
                    result = "Southern Hemisphere";
                }
            }
        }

        catch (err) {
            throw err;
        }

        return result;
    }
    /**
    * @description returns the Hemisphere based on the value longitude
    * @name whichSphereEW
    * @param {string} cityName -- name of city.
    * @returns {string} "Western/Eastern Hemisphere"
    */
    whichSphereEW(cityName) {
        let result;
        let city;
        try {
            city = this.communities.find(c => {
                return c.name === cityName
            });

            // if city doesn't exit throw error
            if (!city) {
                throw new Error(`{cityName} does not exits.`)
            } else {
                if (city.longitude > 0) {
                    result = "Eastern Hemisphere";
                } else {
                    result = "Western Hemisphere";
                }
            }
        }

        catch (err) {
            throw err;
        }

        return result;
    }

    /**
    * @description get the most northern city
    * @name getMostNorthern
    * @returns {{}} most northern city object
    */
    getMostNorthern() {
        let highestLatitude = Math.max.apply(Math, this.communities.map(function (city) { return city.latitude; }))
        return this.communities.find(city => city.latitude === highestLatitude);
    }

    /**
    * @description get most southern city based on latitude
    * @name getMostSouthern
    * @returns {{}} most southern city object
    */
    getMostSouthern() {

        let lowestLatitude = Math.min.apply(Math, this.communities.map(function (city) { return city.latitude; }))
        return this.communities.find(city => city.latitude === lowestLatitude);
    }
    /**
    * @description get the total population of entire community
    * @name getPopulation
    * @returns {number} population of all cities in the community
    */
    getPopulation() {
        //total for all
        let results = 0;
        let length = this.communities.length;
        let index;
        for (index = 0; index < length; index++) {
            results += this.communities[index].population;
        }
        return results;
    }


}
export default Community;