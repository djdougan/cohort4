/**
 * Copyright (c) 2020
 * 
 * @summary Canadian income tax rates for individuals
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00 
 * Last modified  : 2020-03-02 21:57:11
 */

const canadianTax = {

    /**
      * @description gets predefined rates based on income
      * @name getRates
      * @param {number} earnings -- array to be updated.
    * @return {{base: number, fedTaxRate: number,line37Tax: number}} -- a predefined tax rates;
     */
    getRates: (earnings) => {
        let cond = "";
        let baseRate = {};
        if (earnings <= 48535) {
            baseRate.base = 0;
            baseRate.fedTaxRate = 0.15;
            baseRate.line37Tax = 0;
        } else if (earnings > 48535 && earnings <= 97069) {
            baseRate.base = -48535;
            baseRate.fedTaxRate = 0.205;
            baseRate.line37Tax = 7280;
        } else if (earnings > 97069 && earnings <= 150473) {
            baseRate.base = -97069;
            baseRate.fedTaxRate = 0.26;
            baseRate.line37Tax = 17230;
        } else if (earnings > 150473 && earnings <= 214368) {
            baseRate.base = -150473;
            baseRate.fedTaxRate = 0.29;
            baseRate.line37Tax = 31115;
        } else if (earnings > 214368) {
            baseRate.base = -214368;
            baseRate.fedTaxRate = 0.33;
            baseRate.line37Tax = 49645;
        }
        return baseRate;
    },
    /**
    * @description subtracts line 37 from line 36
    * @name line36MinusLine37
    * @param {number} line36 -- line36 from tax form
    * @param {number} line37 -- line37 from tax form.
    * @return {number} -- line 36 - line 37;
    */
    Line36MinusLine37: (line36, line37) => {
        return line36 - line37;
    },
    /**
    * @description multiplies line 38 by tax rate
    * @name multiplyLine38ByTaxRate
    * @param {number} line36 -- line36 from tax form
    * @param {number} taxRate -- line37 from tax form.
    * @return {number} -- results from line 38 * tax rate;
    */
    multiplyLine38ByTaxRate: (line38, taxRate) => {
        return line38 * taxRate;
    },
    /**
    * @description add line 40 and line 41
    * @name addLines40andLines41
    * @param {number} line40 -- line40 from tax form
    * @param {number} line41 -- line41 from tax form.
    * @return {number} -- results from line 40 + line 41;
    */
    addLines40andLines41: (line40, line41) => {
        return line40 + line41;
    }

}

export default canadianTax;