/**
 * Copyright (c) 2020
 *
 * @summary canadian Tax test file
 * @author Douglas J Dougan djdougan@gmail.com
 *
 * Created at     : 2020-03-02 08:30:00
 * Last modified  : 2020-03-04 10:31:41
 */
import ct from "./canadianTax";

test("Test: calculateTax(rate, earnings) number", () => {
  expect(ct.getTaxRates(0.205, 48534)).toBe(9949.47);
  expect(ct.getTaxRates(0.26, 53404)).toBe(13885.04);
  expect(ct.getTaxRates(0.29, 63895)).toBe(18529.55);
  expect(ct.getTaxRates(0.33, 50000)).toBe(16500);
  expect(ct.getTaxRates(0.15, 48535)).toBe(7280.25);
});

test("Test: calculateTaxRate(income. tax)", () => {
  expect(ct.calculateTaxRate(100, 18.78)).toBe(0.18780000000000002);
  expect(ct.calculateTaxRate(10, 1.5)).toBe(0.15);
  expect(ct.calculateTaxRate(1500, 305.78)).toBe(0.2038533333333333);
  expect(ct.calculateTaxRate(2300, 469.78)).toBe(0.20425217391304346);
});
test("Test:calculateTax(earning) return number", () => {
  expect(ct.calculateTax(1)).toBe(0.15);
  expect(ct.calculateTax(2)).toBe(0.3);
  expect(ct.calculateTax(50000)).toBe(7580.37);
  expect(ct.calculateTax(100000)).toBe(17991.32);
  expect(ct.calculateTax(160000)).toBe(33876.84);
  expect(ct.calculateTax(250000)).toBe(61401.8);
});
test("should ", () => {
  expect(ct.calculateOvertimeTax(50000, 2000)).toBe(410);
  expect(ct.calculateOvertimeTax(100000, 2000)).toBe(520);
  expect(ct.calculateOvertimeTax(160000, 2000)).toBe(580);
  expect(ct.calculateOvertimeTax(250000, 2000)).toBe(660);
});
