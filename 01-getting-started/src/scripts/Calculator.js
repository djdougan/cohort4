

const calculator = {
    add: (number1, number2) => {
        let result = parseInt(number1) + parseInt(number2)
        return result;
    },
    subtract: (number1, number2) => {
        let result = parseInt(number1) - parseInt(number2)
        return result;
    },
    multiply: (number1, number2) => {
        let result = parseInt(number1) * parseInt(number2)
        return result;
    },
    divide: (number1, number2) => {

        let result = parseInt(number1) / parseInt(number2)
        return result;
    },
};

export default calculator;
