import functions from './functions.js';
import calculator from './Calculator.js';
import canadianTax from './canadian-tax.js';
import workingWithArrays from './WorkingWithArrays.js'
import workingWithDictionaries from './workingWithDictionaries.js'
//Add the event listeners

const idNumber = document.getElementById("idNumber");
const idNumberSize = document.getElementById("idNumberSize");
const idNumberSizexx = document.getElementById("idNumberSizexx");
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// Calculator
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

//  Tax Calculator
const btnCalculateTax = document.getElementById("btnCalculateTax");
const txtIncome = document.getElementById("txtIncome");
const txtResults = document.getElementById("txtResult");
const txtOvertime = document.getElementById("txtOvertime");
const txtOvertimeTax = document.getElementById("txtOvertimeTax");
const txtDifference = document.getElementById("txtDifference");
const txtTaxRate = document.getElementById("txtTaxRate");

btnCalculateTax.addEventListener("click", function () {

    let income = parseFloat(txtIncome.value);
    let tax = parseFloat(canadianTax.calculateTax(income).toFixed(2));
    txtResults.value = "$" + tax.toFixed(2);
    let ot = parseFloat(txtIncome.value) + parseFloat(txtOvertime.value);
    let overTimeTax = canadianTax.calculateTax(ot);
    txtOvertimeTax.value = "$" + overTimeTax;
    let diff = overTimeTax - tax;
    if (diff < 0) {
        txtDifference.value = 0.00;
        txtTaxRate.value = 0.00;
    } else {
        txtDifference.value = "$" + diff.toFixed(2);
        txtTaxRate.value = (canadianTax.calculateTaxRate(ot, overTimeTax) * 100).toFixed(2) + "%";
    }

});
/**
 * Working with Arrays
 */
const txtArrayNumber = document.querySelector("#txtArrayNumber");
const btnAdd1 = document.querySelector("#btnAdd1");
const btnShow1 = document.querySelector("#btnShow1");
const btnTotal1 = document.querySelector("#btnTotal1");
const btnClear1 = document.querySelector("#btnClear1");
const txtMessageBoard1 = document.querySelector("#txtMessageBoard1");
let arrayWorker = new workingWithArrays();

btnAdd1.addEventListener("click", (e) => {
    let num = txtArrayNumber.value;
    // clear output for new data
    clearMessageBoard(txtMessageBoard1);
    printData(txtMessageBoard1, arrayWorker.add(num));
    clearInput(txtArrayNumber);
    setFocus(txtArrayNumber);
    e.preventDefault();
});
btnShow1.addEventListener("click", (e) => {
    // clear output for new data
    clearMessageBoard(txtArrayNumber);
    printData(txtMessageBoard1, arrayWorker.show());
    e.preventDefault();
});
btnTotal1.addEventListener("click", (e) => {
    // clear output for new data
    clearMessageBoard(txtMessageBoard1);

    printData(txtMessageBoard1, arrayWorker.total());
    e.preventDefault();
});

btnClear1.addEventListener("click", (e) => {
    // clear output for new data
    clearMessageBoard(txtMessageBoard1);
    printData(txtMessageBoard1, arrayWorker.clear());
    e.preventDefault();
});

// Working with Dictionaries

const txtProvince = document.querySelector("#txtProvince");
const btnLookUp = document.querySelector("#btnLookUp");
const txtMessageBoard2 = document.querySelector("#txtMessageBoard2");
let dictionaryWorker = new workingWithDictionaries();

btnLookUp.addEventListener("click", (e) => {
    let province = txtProvince.value;
    // clear output for new data
    clearMessageBoard(txtMessageBoard2);
    printData(txtMessageBoard2, dictionaryWorker.lookUp(province));
    clearInput(txtProvince);
    setFocus(txtProvince);
    e.preventDefault();
});
function clearMessageBoard(ctrl) {
    ctrl.textContent = "";
}
function printData(ctrl, data) {
    ctrl.textContent = data;
}
function clearInput(ctrl) {
    ctrl.value = "";
}
function setFocus(ctrl) {
    ctrl.focus();
}