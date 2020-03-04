/**
 * Copyright (c) 2020
 *
 * @summary canadian Tax test file
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00
 * Last modified  : 2020-03-04 08:08:26
 */
import ct from './canadian-tax'


test("Test: calculateTax(rate, earnings) number", () => {
    expect(ct.getTaxRates(.205, 48534)).toBe(9949.47);
    expect(ct.getTaxRates(.26, 53404)).toBe(13885.04);
    expect(ct.getTaxRates(.29, 63895)).toBe(18529.55);
    expect(ct.getTaxRates(.33, 50000)).toBe(16500);
    expect(ct.getTaxRates(.15, 48535)).toBe(7280.25);
});

test("Test: calculateTaxRate(income. tax)", () => {
    expect(ct.calculateTaxRate(100, 18.78)).toBe(0.18780000000000002);
    expect(ct.calculateTaxRate(10, 1.50)).toBe(0.15);
    expect(ct.calculateTaxRate(1500, 305.78)).toBe(0.19718181818181818);
    expect(ct.calculateTaxRate(2300, 469.78)).toBe(0.19718181818181818);
});


