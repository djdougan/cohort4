/**
 * Copyright (c) 2020
 * 
 * @summary Canadian income tax rates for individuals
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00 
 * Last modified  : 2020-03-04 08:28:54
 */

const canadianTax = {

    /**
     * @description calculate the percent of tax-owed/income
    * @name calculateTaxRate
      * @param {number} income -- array to be updated.
      * @param {number} tax -- .monies paid into tax
      * @return {number} -- the percent of income paid to tax.
     */
    calculateTaxRate: (income, tax) => {
        return tax / income;
    },
    /**
    * @description calculates the amount of tax owed based on a tax rate
    * @name getTaxRates
    * @param {number} rate -- predetermined tax rate.
    * @param {number} earnings -- total income to be tax
    * @return {number} -- the amount of income paid to tax.
    */
    getTaxRates: (rate, earning) => {
        return rate * earning;
    },
    /**
    * @description calculates the amount of tax owed based on a tax rate
    * @name calculateTax
    * @param {number} earning -- total income to be taxed
    * @return {number} -- the amount of income paid to tax.
    */
    calculateTax: (earning) => {
        let taxRate = 0;

        if (earning <= 48535) {
            // .15   tax bracket 
            taxRate = canadianTax.getTaxRates(0.15, earning);
        } else if (earning > 48535 && earning <= 97069) {
            //.205  tax bracket
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, earning - 48534)

        } else if (earning > 97069 && earning <= 150473) {
            //.26   tax bracket
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, 97069 - 48534)
            taxRate += canadianTax.getTaxRates(.26, earning - 53404);

        } else if (earning > 150473 && earning <= 214368) {
            //29  tax bracket
            taxRate = canadianTax.getTaxRates(.15, 48535);
            taxRate += canadianTax.getTaxRates(.205, 97069 - 48534)
            taxRate += canadianTax.getTaxRates(.26, 150473 - 53404);
            taxRate += canadianTax.getTaxRates(.29, earning - 150473);
        } else if (earning > 214368) {
            //33  tax bracket
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