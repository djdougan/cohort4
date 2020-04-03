

/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-31 ‏‎20:17:55
 * Last modified  : 2020-04-02, ‏‎12:27:04
 *
 * @name City
 * @class
 */
class City {
    /**
 * 
* @description creates a city object 
* @name constructor
* @param {string} name -- Name of the city.
* @param {number} latitude -- the angle, which ranges from 0° at the Equator to 90° (North(+) or South(-)) at the poles.
* @param {number} longitude -- the angle east or west from the Prime Meridian, ranging from 0° at the Prime Meridian to +180° eastward and −180° westward.
* @param {number} population -- The latest known population
*/
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    };

    /**
    * @description return all properties of the city object
    * @name show
    * @return {{}} -- returns string of city similar to toString
    */
    show() {
        // creates a single string with the 4 attributes 
        // since property.name is a string, number catenation will result in string
        let result = { name: this.name, latitude: this.latitude, longitude: this.longitude, population: this.population };
        return result;
    };

    /**
    * @description Adds people to city population
    * @name moveIn
    * @param {number} increase number of people to add to population
    * @return {number} -- returns new population
    */
    movedIn(increase) {
        // receives a number that will be added to the city’s population 
        try {
            if (!isNaN(increase)) {
                if (!Number.isInteger(increase)) {
                    this.population += parseInt(increase);
                } else {
                    this.population += increase;
                }
            } else {
                throw new Error(`The value ${increase} is not a valid number.`);
            }
        } catch (err) {
            throw err
            console.log(err);
        }
        return this.population;
    };

    /**
    * @description remove people from city population
    * @name moveOut
    * @param {number} decrease number of people to add to population
    * @return {number} -- returns new population
    */
    movedOut(decrease) {

        try {
            // receives a number that will be subtracted from the city’s population
            if (!isNaN(decrease)) {
                if (!Number.isInteger(decrease)) {
                    this.population -= parseInt(decrease);
                } else {
                    this.population -= decrease;
                }
            } else {
                throw new Error(`The value ${decrease} is not a valid number.`);
            }
        }
        catch (err) {
            console.log(err);
            throw err
        }
        return this.population;
    };

    /**
    * @description remove people from city population
    * @name howBig
    * @return {string} --
    *       -  "City" – a population > 100,000,
    *       -  "Large town" – a large town has a population of 20, 000 to 100,000,
    *       -  "Town" – a town has a population of 1, 000 to 20,000,
    *       -  "Village" – larger than a hamlet but smaller than a town,
    *       -  "Hamlet" – population 1 - 100
    * 
    * 
    */
    howBig() {
        let result = "";

        if (this.population > 100000) {
            // City – a population > 100,000
            result = "City";
        } else if (this.population >= 20000 && this.population <= 100000) {
            // Large town – a large town has a population of 20, 000 to 100,000
            result = "Large Town";
        } else if (this.population >= 1000 && this.population < 20000) {
            // Town – a town has a population of 1, 000 to 20,000
            result = "Town";
        } else if (this.population > 100 && this.population < 1000) {
            // Village – larger than a hamlet but smaller than a town
            result = "Village";
        } else if (this.population > 1 && this.population < 100) {
            // Hamlet – population 1 - 100
            result = "Hamlet";
        }

        return result;

    };
}


/**
 * @name Community
 * @class
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
    * @returns {city} city object
    */
    createCity(name, latitude, longitude, population) {
        let city = new City(name, latitude, longitude, population);
        this.communities.push(city);
        return city;
    }

    /**
    * @description creates a city object
    * @name deleteCity
    * @param {string} name -- Name of the city.
    * @returns {[]} name od city removed
    */
    deleteCity(name) {
        let city = this.communities.filter(x => x.name === name);
        let index = this.communities.findIndex(x => x.name === name)
        this.communities.splice(index, 1);
        return this.communities;
    }

    /**
    * @description returns the Hemisphere based on the value latitude
    * @name whichSphere
    * @param {string} name -- name of city.
    * @returns {string} "Northern/Southern Hemisphere"
    */
    whichSphere(city) {
        //Northern Hemisphere or Southern
        let result = '';
        let community = this.communities.find(c => c.name === city);
        if (community.latitude > 0) {
            result = "Northern Hemisphere";
        } else {
            result = "Southern Hemisphere";
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
export { City, Community };