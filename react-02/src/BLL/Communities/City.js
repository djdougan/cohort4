/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-31 ‏‎20:17:55
 * Last modified  : 2020-04-02, ‏‎12:27:04
 *
 * @class City
 * @classdesc 
 */
class City {

    /**
     * @description creates a city object 
     * @name constructor
     * @param {string} name -- Name of the city.
     * @param {number} latitude -- the angle, which ranges from 0° at the Equator to 90° (North(+) or South(-)) at the poles.
     * @param {number} longitude -- the angle east or west from the Prime Meridian, ranging from 0° at the Prime Meridian to +180° eastward and −180° westward.
     * @param {number} population -- The latest known population
     */
    constructor(name, latitude, longitude, population, key ) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    /**
     * @description return all properties of the city object
     * @name show
     * @return {{}} -- returns string of city similar to toString
     */
    show() {
        // creates a single string with the 4 attributes 
        // since property.name is a string, number catenation will result in string
        let result = JSON.stringify({ "key": this.key, "name": this.name, "latitude": this.latitude, "longitude": this.longitude, "population": this.population });
        return result;
    }

    /**
     * @description Adds people to city population
     * @name moveIn
     * @param {number} increase number of people to add to population
     * @return {number} -- returns new population
     */
    movedIn(increase) {
        let moveIn = 0;
        try {
            // if this is a number
            if (!isNaN(increase)) {
                //
                if (Number.isInteger(increase)) {
                    moveIn = increase;
                } else {
                    moveIn = parseInt(increase);
                }
            } else {
                throw new Error(`The value ${increase} is not a valid number.`);
            }
        } catch (err) {
            throw err
        }
        this.population += moveIn;
        return this.population;
    }

    /**
     * @description remove people from city population
     * @name moveOut
     * @param {number} decrease number of people to add to population
     * @return {number} -- returns new population
     */
    movedOut(decrease) {
        let moveOut = 0;
        try {
            // if this is a number
            if (!isNaN(decrease)) {
                if (Number.isInteger(decrease)) {
                    moveOut = decrease;
                } else {
                    moveOut = parseInt(decrease);
                }
            } else {
                throw new Error(`
            The value $ { decrease }
            is not a valid number.
            `);
            }
        } catch (err) {
            throw err
        }
        this.population -= moveOut;
        return this.population;
    }

    /**
     * @description remove people from city population
     * @name howBig
     * @return {string} --
     *       -  'City' – a population > 100,000,
     *       -  'Large town' – a large town has a population of 20, 000 to 100,000,
     *       -  'Town' – a town has a population of 1, 000 to 20,000,
     *       -  'Village' – larger than a hamlet but smaller than a town,
     *       -  'Hamlet' – population 1 - 100
     */
    howBig() {
        let result = '';

        if (this.population > 100000) {
            // City – a population > 100,000
            result = 'City';
        } else if (this.population >= 20000 && this.population <= 100000) {
            // Large town – a large town has a population of 20, 000 to 100,000
            result = 'Large Town';
        } else if (this.population >= 1000 && this.population < 20000) {
            // Town – a town has a population of 1, 000 to 20,000
            result = 'Town';
        } else if (this.population > 100 && this.population < 1000) {
            // Village – larger than a hamlet but smaller than a town
            result = 'Village';
        } else if (this.population > 0 && this.population < 100) {
            // Hamlet – population 1 - 100
            result = 'Hamlet';
        }

        return result;

    };
}

export default City;