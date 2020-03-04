import functions from './functions.js';
import ct from './canadian-tax.js';
import syntax from "./syntax.js"


// **********
//
// Add the event listeners
// 
const idNumber = document.getElementById("idNumber");
const idNumberSize = document.getElementById("idNumberSize");
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

const btnCalculate = document.getElementById("btnCalculate");
const txtIncome = document.getElementById("txtIncome");
const txtResults = document.getElementById("txtResult");
const txtOvertime = document.getElementById("txtOvertime");
const txtOvertimeTax = document.getElementById("txtOvertimeTax");
const txtDifference = document.getElementById("txtDifference");
const txtTaxRate = document.getElementById("txtTaxRate");

btnCalculate.addEventListener("click", function () {

    let income = parseFloat(txtIncome.value);
    let tax = parseFloat(ct.calculateTax(income));
    txtResults.value = "$" + tax.toFixed(2);
    let ot = parseFloat(txtIncome.value) + parseFloat(txtOvertime.value);
    let overTimeTax = ct.calculateTax(ot);
    txtOvertimeTax.value = "$" + overTimeTax;
    let diff = overTimeTax - tax;
    if (diff < 0) {
        txtDifference.value = 0.00;
        txtTaxRate.value = 0.00;
    } else {
        txtDifference.value = "$" + diff.toFixed(2);
        txtTaxRate.value = (ct.calculateTaxRate(ot, overTimeTax) * 100).toFixed(2) + "%";
    }

})