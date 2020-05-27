/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-31 20:00:45
 *
 */
import { Account } from "../Account.js";

test("Test: Account constructor()", () => {
  let checking = new Account("acc1", 5.0, 1);
  expect(checking.getAccountName).toBe("acc1");
  expect(checking.getBalance).toBe(5.0);
  checking.deposit(1.0);
  expect(checking.getBalance).toBe(6.0);

  checking.withdrawal(2.0);
  expect(checking.getBalance).toBe(4.0);
  let amount = "abc";
  expect(() => {
    //code block that should throw error
    let checking = new Account("checkingAccount", 25.0, 1);
    checking.deposit(amount);
  }).toThrow(`The value ${amount} is not a valid number.`);
  expect(() => {
    //code block that should throw error
    let checking = new Account("checkingAccount", 25.0, 1);
    checking.withdrawal(amount);
  }).toThrow(`The value ${amount} is not a valid number.`);
});

test("Test: Account constructor() with non numbers values", () => {
  let amount = "abc";
  expect(() => {
    //code block that should throw error
    let checking = new Account("checkingAccount", amount, 1);
  }).toThrow(`The value ${amount} is not a valid number.`);
});
