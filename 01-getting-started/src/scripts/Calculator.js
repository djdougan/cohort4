
/**
 * @description calculator engine with four functions
 * @name calculator
 */
const calculator = {
    /**  
      * @description adds two numbers
      * @name add
      * @param {number} number1 -- array to be updated.
      * @param {number} number2 -- .
      * @return {number|string} -- the sum of two numbers or Error message.
     */
    add: (number1, number2) => {
        let result;
        try {
            if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
                number1 = parseFloat(number1);
                number2 = parseFloat(number2);
            }
            if (Number.isInteger(number1) && Number.isInteger(number2)) {
                result = number1 + number2;
            } else {
                throw new Error("Both number1 and number2 must be numbers");
            }
        } catch (e) {
            return "Error: " + e.message;
        }
        return result;
    },

    /**
      * @description subtracts two numbers
      * @name subtract
      * @param {number} number1 -- number to be subtracted from
      * @param {number} number2 -- number to subtract.
      * @return {number|string} -- the result of number1 subtracted from number2 or Error message.
     */
    subtract: (number1, number2) => {
        let result;
        try {
            if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
                number1 = parseFloat(number1);
                number2 = parseFloat(number2);
            }
            if (Number.isInteger(number1) && Number.isInteger(number2)) {
                result = number1 - number2;
            } else {
                throw new Error("Both number1 and number2 must be numbers");
            }
        } catch (e) {
            return "Error: " + e.message;
        }
        return result;
    },
    /**
  * @description multiplies two numbers
  * @name multiply
  * @param {number} number1 -- a number
  * @param {number} number2 -- a number.
  * @return {number|string} -- the result of number1 multiplied by number2 or Error message
 */
    multiply: (number1, number2) => {
        let result;
        try {
            if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
                number1 = parseFloat(number1);
                number2 = parseFloat(number2);
            }
            if (Number.isInteger(number1) && Number.isInteger(number2)) {
                result = number1 * number2;
            } else {
                throw new Error("Both number1 and number2 must be numbers");
            }
        } catch (e) {
            return "Error: " + e.message;
        }
        return result;
    },
    /**
  * @description adds two numbers
  * @name add
  * @param {number} dividend -- the number you are dividing up.
  * @param {number} divisor --  the number you are dividing by.
  * @return {number|string} -- quotient, the answer or Error message.
 */
    divide: (dividend, divisor) => {
        let quotient;
        try {
            if (!Number.isNaN(dividend) && !Number.isNaN(divisor)) {
                dividend = parseFloat(dividend);
                divisor = parseFloat(divisor);
            }
            if (divisor == 0) {
                throw new Error("Divide by 0, the divisor cannot be 0.");
            }

            if (Number.isInteger(dividend) && Number.isInteger(divisor)) {
                quotient = dividend / divisor;
            } else {
                throw new Error("Both dividend and divisor must be numbers");
            }
        } catch (e) {
            return "Error: " + e.message;
        }
        return quotient;
    },
};

export default calculator;
