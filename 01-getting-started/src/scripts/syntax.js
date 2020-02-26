
/**
 * <summary></summary>
 */
const syntax = {
    /**
     * @description Returns the result of a number raised to a power.
     * @name power
    * @param {number} number -- Required.The base number.It can be any real number.
    * @param {number} power -- Required.The exponent to which the base number is raised.
    * @returns {number} The result of a number raised to a power.
     */
    power: (number, power) => {
        return Math.pow(number, power);
    },
    /**
     * @description Removes a char(s) from a word or sentence.
     * @name removeChosenOne
    * @param {string} str -- A word or sentence.
    * @param {string} char -- character(s) to be removed from sentence.
    * @returns {string} The word(s) with the character(s) removed.
     */
    removeChosenOne: (str, char) => {
        let regExp = new RegExp(`([${char}])+`, 'gi');
        return str.replace(regExp, '');
    },

    /**
     * @description Checks if number is in a high low range.
     * @name inRange
    * @param {number} min -- A word or sentence.
    * @param {number} max -- character(s) to be removed from sentence.
    * @param {number} testNum -- character(s) to be removed from sentence.
    * @returns {boolean} The word(s) with the character(s) removed.
     */
    inRange: (min, max, testNum) => {
        return testNum >= min && testNum <= max;
    },

    /**
     * @description checks to see if only number are in the array.
     * @name onlyNumbersInArray
    * @param {number[]} numbers -- an array of numbers.
    * @returns {boolean} true is array has only number false if any other object found.
     */
    onlyNumbersInArray: (numberArray) => {
        return !numberArray.some(isNaN);
    },

    /**
     * @description Checks to see if person is a certain age or older.
     * @name ageCheck
    * @param {number} testAge -- age to test against.
    * @param {Object.<string, number>} Person -- person object to test against.
    * @returns {boolean} true if the person is over testAge, false if .
     */
    ageCheck: (testAge, personObject) => {
        return personObject.age >= testAge;
    },

    /**
       * @description Checks is the value has been assigned a value.
       * @name isDefined
      * @param {number|string|boolean} aType -- value to be tested for a value.
      * @returns {boolean} tue if the type has a value .
       */
    isDefined: (aType) => {
        return !(typeof aType === 'undefined');
    },

    /**
       * @description Checks if a color is red;
       * @name isRedColor
      * @param {string} color -- a color value.
      * @returns {boolean} tue if color is red .
       */
    isRedColor: (color) => {
        let result;
        if (color != 'undefined') {
            let col = color.toLowerCase();
            if (col === 'red') {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    },

    /**
       * @description counts the number arguments passed to function
       * @name countArgs
      * @param {number|string|boolean} ...args -- random number of arguments.
      * @returns {number} number of args passed in function.
       */
    countArgs: (...args) => {
        return args.length;
    },

    /**
       * @description adds to front of Array
       * @name FIFO First In First Out
      * @param {number[]|string[]|boolean[]} array -- array any type.
      * @param {number|string|boolean} item -- item to be added to front of array.
      * @returns {number|string|boolean} first item in array.
       */
    LIFO: (array, item) => {
        if (item !== undefined) {
            array.unshift(item);
        }
        return array[0];
    },
    /**
       * @description adds to end of Array
       * @name LILO
      * @param {number[]|string[]|boolean[]} array -- array any type.
      * @param {number|string|boolean} item -- item to be added to front of array.
      * @returns {number|string|boolean} first item in array.
       */
    LILO: (array, item) => {
        if (item !== undefined) {
            array.push(item);
        }
        return array[array.length - 1];
    },
    /**
       * @description updates a value in the array
       * @name updateArray
      * @param {number[]|string[]|boolean[]} arr -- array to be updated.
      * @param {number} oldValue -- value to find in array.
      * @param {number|string|boolean} newValue -- value used to update oldValue.
      * @return {number[]|string[]|boolean[]} -- updated array.
       */
    updateArray: (arr, oldValue, newValue) => {
        let index = arr.findIndex(x => x == oldValue);
        if (index >= 0) {
            arr[index] = newValue;
        }
        return arr;
    },
    /**
      * @description Add a value to each element in array
      * @name addToEach
     * @param {number[]} arr -- array to be updated.
     * @param {number} num -- value to be added to each element.
     * @return {number[]} -- updated array.
      */
    addToEach: (arr, num) => {
        let i;
        for (i = 0; i < arr.length; i++) {
            arr[i] += num;
        }
        return arr;
    },
    /**
      * @description validates a 3d point
      * @name validatePoint
     * @param {{x:number, y:number, z: number}} point -- point on a 3d plane.
     * @return {boolean} -- true if all planes have a value.
      */
    validatePoint: (point) => {
        let result;
        for (let value in point) {
            if (point[value] !== null) {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    },
    /**
      * @description fills an Array with incremental values
      * @name fillArray
     * @param {number} size -- creates an array with these many elements.
     * @return {number[]} -- array with incremental values.
      */
    fillArray: (size) => {
        let arr = [];
        let i = 0;
        while (i < size) {
            arr.push(i);
            i++;
        }
        return arr;
    },
    /**
      * @description adds all numbers from 0 to size
      * @name reduce
     * @param {number} size -- number of elements to add 
     * @return {number} -- the sum of numbers from 0 to size.
      */
    reduce: (size) => {
        let total = 0, i = 0;
        do {
            total += i;
            i++;
        } while (i <= size)
        return total;;
    },
    /**
      * @description adds all numbers from 0 to size
      * @name toUpperCaseArray
     * @param {string[]} array -- number of elements to add 
     * @return {string[]} -- the sum of numbers from 0 to size.
      */
    toUpperCaseArray: (array) => {
        array.forEach((x, i) => {
            array[i] = x.toUpperCase();
        });
        return array;
    },
    /**
      * @description creates a object with key/value pair
      * @name createObject
     * @param {number} key -- key for object
     * @param {number} value -- value for object
     * @return {{key:number, value: number}} -- object with key/value pair.
      */
    createObject: (key, value) => {
        let obj = {};
        obj.key = key;
        obj.value = value;
        return obj;
    },
    /**
      * @description find a  object by key in an array
      * @name keyValueLookUp
     * @param {number} id -- id to find in object array
     * @param {{id:number, name:string }[]} obj -- array of objects
     * @return {{id:number, name:string}} -- found object.
      */
    keyValueLookUp: (id, arr) => {
        var obj = arr.find(x => x.id === id);
        return obj;
    },




}


export default syntax;
// •    define attributes / variables
//        (X) o	number
//        (X) o	string
//        (X) o	boolean
//        (X) o	array
//        (X) o	dictionary / objects
//        (X) o	undefined
// •	(X) sample if / else
// •	functions
//         (X) o parameters
//         (X) o returns
// •	arrays
//          (X) o add to the front
//          (X) o add to the end
//          (X) o update values
// •	loops
//          (X) o for
//          (X) o for/in
//          (X) o while
//          (X) o do while
//          (X) o forEach(with array and function)
// •	Objects / Dictionaries
//          (X) o declare object
//          (X) o lookup key to retrieve value
