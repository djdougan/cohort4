
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
//          o	parameters
//          o	returns
// •	arrays
//          o	add to the front
//          o	add to the end
//          o	update values
// •	loops
//          o	for
//          o	for/in
//          o	while
//          o	do while
//          o	forEach(with array and function)
// •	Objects / Dictionaries
//          o	declare object
//          o	lookup key to retrieve value
