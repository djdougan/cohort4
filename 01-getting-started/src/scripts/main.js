import functions from './functions.js';
import canadianTaxes from './canadian-tax';
import syntax from "./syntax"


// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

