/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-19 20:21:30
 *
 */
import { Account } from './Account'


test("Test: Account constructor()", () => {
    let checking = new Account('checkingAccount', 25.00);
    expect(checking.accountName).toBe("checkingAccount");
    expect(checking.balance()).toBe(25.00);
});

test("Test: Account balance()", () => {
    let checking = new Account('checkingAccount', 25.00);
    expect(checking.balance()).toBe(25.00);
});

test("Test: Account deposit()", () => {
    let checking = new Account('checkingAccount', 25.00);
    checking.deposit(15.50);
    expect(checking.balance()).toBe(40.50);
});

test("Test: Account withdraw()", () => {
    let checking = new Account('checkingAccount', 25.00);
    checking.withdrawal(15.50);
    expect(checking.balance()).toBe(9.50);
});


test("Test: Account constructor() with non numbers values", () => {
    let amount = "abc"
    expect(() => {
        //code block that should throw error
        let checking = new Account('checkingAccount', amount);
    }).toThrow(`The value ${amount} is not a valid number.`)
});


test("Test: Account deposit() with non numbers values", () => {
    let amount = "abc"
    expect(() => {
        //code block that should throw error
        let checking = new Account('checkingAccount', 25.00);
        checking.deposit(amount);
    }).toThrow(`The value ${amount} is not a valid number.`)
});
test("Test: Account withdrawal() with non numbers values", () => {
    let amount = "abc"
    expect(() => {
        //code block that should throw error
        let checking = new Account('checkingAccount', 25.00);
        checking.withdrawal(amount)
    }).toThrow(`The value ${amount} is not a valid number.`)
});