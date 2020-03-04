/**
 * Copyright (c) 2020
 * 
 * @summary Canadian income tax rates for individuals
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00 
 * Last modified  : 2020-03-03 23:34:39
 */

const canadianTax = {

    calculateTaxRate: (income, tax) => {
        return tax / income;
    },
    getTaxRates: (rate, earning) => {
        return rate * earning;
    },
    calculateTax: (earning, rates) => {
        let taxRate = 0;

        if (earning <= 48535) {
            taxRate = canadianTax.getTaxRates(0.15, earning);
            // result += "1";
        } else if (earning > 48535 && earning <= 97069) {
            //.205
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, earning - 48534)

        } else if (earning > 97069 && earning <= 150473) {
            //.26 
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, 97069 - 48534)
            taxRate += canadianTax.getTaxRates(.26, earning - 53404);

        } else if (earning > 150473 && earning <= 214368) {
            //29
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, 97069 - 48534)
            taxRate += canadianTax.getTaxRates(.26, 150473 - 53404);
            taxRate += canadianTax.getTaxRates(.29, earning - 150473);
        } else if (earning > 214368) {
            //33
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, 97069 - 48534)
            taxRate += canadianTax.getTaxRates(.26, 150473 - 53404);
            taxRate += canadianTax.getTaxRates(.29, 214368 - 150474);
            taxRate += canadianTax.getTaxRates(.33, earning - 214369);
        }

        return taxRate;
    },

}

export default canadianTax;