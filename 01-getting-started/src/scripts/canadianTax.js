/**
 * Copyright (c) 2020
 *
 * @summary Canadian income tax rates for individuals
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00
 * Last modified  : 2020-03-07 15:32:43
 **/

const canadianTax = {
  taxRates: [
    { lower: 0, upper: 48535, tax: 0.15 },
    { lower: 48536, upper: 97069, tax: 0.205 },
    { lower: 97070, upper: 150473, tax: 0.26 },
    { lower: 150474, upper: 214368, tax: 0.29 },
    { lower: 214369, upper: 10000000, tax: 0.33 },
  ],

  earnings: { income: 0, overtime: 0, taxIndex: 0 },

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
    return Math.round(Math.ceil(rate * earning * 100)) / 100;
  },
  /**
   * @description calculates the amount of tax owed based on a tax rate
   * @name calculateTax
   * @param {number} earning -- total income to be taxed
   * @return {number} -- the amount of income paid to tax.
   */
  calculateTax: function (earning) {
    let taxIndex = 0;
    let accumulatedTax = 0;

    this.taxRates.forEach((rate) => {
      if (earning >= rate.lower && earning < rate.upper) {
        taxIndex = this.taxRates.indexOf(rate);
      }
    });

    accumulatedTax = this.getTaxRates(
      this.taxRates[taxIndex].tax,
      earning - this.taxRates[taxIndex].lower
    );

    for (let i = taxIndex - 1; i >= 0; i--) {
      accumulatedTax += this.getTaxRates(
        this.taxRates[i].tax,
        this.taxRates[i].upper - this.taxRates[i].lower
      );
    }
    return Math.round(accumulatedTax * 100) / 100;
  },
  calculateOvertimeTax: function (earnings, overtime) {
    const regularTax = this.calculateTax(earnings);
    const overTimeTax = this.calculateTax(earnings + overtime);
    return overTimeTax - regularTax;
  },
};
export default canadianTax;
