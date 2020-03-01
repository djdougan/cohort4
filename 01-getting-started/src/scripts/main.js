import functions from './functions.js';
import calculator from './Calculator.js';

// **********
//
// Add the event listeners
// 
const idNumber = document.getElementById("idNumber");
const idNumberSize = document.getElementById("idNumberSizexx");
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

var btnCalc = document.getElementById("btnCalculate")
var number1 = document.getElementById("txtNumber1");
var number2 = document.getElementById("txtNumber2");
var radio = document.getElementsByClassName("operand");
var results = document.getElementById("txtResults");

btnCalc.addEventListener("click", (e) => {
    results.textContent = mathOperation(btnCalc.dataset.current, number1.value, number2.value).toString();
    e.preventDefault()
});


const buildRadio = (radio) => {
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener('click', function (e) {
            btnCalc.dataset.current = e.target.dataset.sym;
        });
    }
}
const mathOperation = (operand, number1, number2) => {
    let result;
    switch (operand) {
        case "+":
            result = calculator.add(number1, number2);
            break;
        case "-":
            result = calculator.subtract(number1, number2);;
            break;
        case "*":
            result = calculator.multiply(number1, number2);
            break;
        case "/":
            result = calculator.divide(number1, number2);
            break;
        default:
            return 'error';
            break;
    };
    return result;
}

buildRadio(radio);