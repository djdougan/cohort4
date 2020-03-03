/**
 * Copyright (c) 2020
 *
 * @summary canadian Tax test file
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00
 * Last modified  : 2020-03-02 21:58:09
 */
import candaianTax from './canadian-tax'


test("Test: calculateBase() returns {base, taxRate}", () => {
    expect(candaianTax.getRates(40344)).toEqual({ "base": 0, "fedTaxRate": 0.15, "line37Tax": 0 });
    expect(candaianTax.getRates(80000)).toEqual({ "base": -48535, "fedTaxRate": 0.205, "line37Tax": 7280 });
    expect(candaianTax.getRates(110000)).toEqual({ "base": -97069, "fedTaxRate": 0.26, "line37Tax": 17230 });
    expect(candaianTax.getRates(170000)).toEqual({ "base": -150473, "fedTaxRate": 0.29, "line37Tax": 31115 });
    expect(candaianTax.getRates(250000)).toEqual({ "base": -214368, "fedTaxRate": 0.33, "line37Tax": 49645 });
});

test("Test: Line36MinusLine37() returns line37 - line38", () => {
    expect(candaianTax.Line36MinusLine37(20000, 10000)).toBe(10000);
    expect(candaianTax.Line36MinusLine37(210234, 10000)).toBe(200234);
    expect(candaianTax.Line36MinusLine37(12345, 10000)).toBe(2345);
    expect(candaianTax.Line36MinusLine37(23344, 10000)).toBe(13344);
    expect(candaianTax.Line36MinusLine37(34000, 10000)).toBe(24000);
});

test("Test: multiplyLine38ByTaxRate returns line38 * taxrate", () => {
    expect(candaianTax.multiplyLine38ByTaxRate(1, .15)).toBe(.15);
    expect(candaianTax.multiplyLine38ByTaxRate(2, .15)).toBe(.30);
    expect(candaianTax.multiplyLine38ByTaxRate(50000, .205)).toBe(10250);
    expect(candaianTax.multiplyLine38ByTaxRate(100000, .26)).toBe(26000);
    expect(candaianTax.multiplyLine38ByTaxRate(150000, .29)).toBe(43500);
    expect(candaianTax.multiplyLine38ByTaxRate(250000, .33)).toBe(82500);
});
test("Test: addLines40andLines41(line40, line41) returns number", () => {
    expect(candaianTax.addLines40andLines41(23457, 23452)).toBe(46909);
    expect(candaianTax.addLines40andLines41(34322, 43232)).toBe(77554);
    expect(candaianTax.addLines40andLines41(32122, 12002)).toBe(44124);
    expect(candaianTax.addLines40andLines41(23454, 21333)).toBe(44787);
    expect(candaianTax.addLines40andLines41(12111, 23322)).toBe(35433);

});