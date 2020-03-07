/**
 * Copyright (c) 2020
 *
 * @summary Working with Dictionaries
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-06 07:30:00
 * Last modified  : 2020-03-07 16:03:08
 *
 * @name myArrayList
 * looks up province name using a key/value pair like a dictionary
 * @class
 */

class CanadianProvinces {
    /**
    * @description constructor takes not parameters
    */
    constructor() {
        this.items = {
            "AB": "Alberta",
            "BC": "British Columbia",
            "MB": "Manitoba",
            "NB": "New Brunswick",
            "NL": "Newfoundland and Labrador",
            "NT": "Northwest Territories",
            "NS": "Nova Scotia",
            "NU": "Nunavut",
            "ON": "Ontario",
            "PE": "Prince Edward Island",
            "QC": "Quebec",
            "SK": "Saskatchewan",
            "YT": "Yukon Territory"
        };
    };

    /**string
     * @description Looks up provinces by two letter Abbreviation.
     * @name lookUp
    * @param {string} abbr -- A word or sentence.
    * @returns {string} province's name or 'province not found' message.
     */
    lookUp(abbr) {
        let result = '';
        abbr = abbr.toUpperCase();
        result = this.items[abbr];
        if (result === undefined) {
            if (abbr.length === 2) {
                result = "Province not found.";
            } else {
                result = "Province abbreviation should be 2 characters long.";
            }
            console.log(abbr.length, result);
        }
        return result;
    };
};

export default CanadianProvinces;