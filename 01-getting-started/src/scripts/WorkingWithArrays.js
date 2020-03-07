/**
 * Copyright (c) 2020
 *
 * @summary Working with arrays project
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-06 07:30:00
 * Last modified  : 2020-03-07 15:47:31
 * 
 * @name myArrayList
 * Creates a stack like with array as it's container
 * @class
 */

class myArrayList {

    /**
     * @description constructor takes not parameters
     */
    constructor() {
        this.data = [];

    };

    /**
     * @description adds a number to the array
    * @name add
      * @param {number} num -- array to be updated.
      * @return {string} -- "Not a valid number." | "The number has been added to the array.".
     */
    add(num) {
        let result = "";
        if (typeof num === 'string') {
            num = parseFloat(num);
        }
        if (isNaN(num)) {
            result = "Not a valid number.";
        } else {
            this.data.push(num);
            result = "The number has been added to the array.";
        }
        return result;
    };
    /**
    * @description Shows the contents of the array.
    * @name show
    * @return {string} -- array contents in string format.
    */
    show() {
        return this.data.toString();
    };
    /**
    * @description adds the array contents total value
    * @name total
    * @return {number} -- array values total value .
    */
    total() {
        var result = 0;
        this.data.forEach(x => {
            result += x;
        });
        return result;
    };
    /**
    * @description adds a number to the array
    * @name clear
    * @return {string} -- "array is empty".
    */
    clear() {
        this.data.length = 0;
        return "The array is empty.";
    };
};

export default myArrayList;