/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-21 19:35:13
 *
 */
import { Account } from './Account';
import MiscScripts from "./misc-scripts";


let uuid = MiscScripts.createUUID();

test("Test: Account constructor()", () => {
    let checking = new Account('checkingAccount', 25.00, uuid);
    expect(checking.getAccountName).toBe("checkingAccount");
    expect(checking.getBalance).toBe(25.00);

});

test("Test: Account balance()", () => {
    let checking = new Account('checkingAccount', 25.00, uuid);
    expect(checking.getBalance).toBe(25.00);
});

test("Test: Account deposit()", () => {
    let checking = new Account('checkingAccount', 25.00, uuid);
    checking.deposit(15.50);
    expect(checking.getBalance).toBe(40.50);
});

test("Test: Account withdraw()", () => {
    let checking = new Account('checkingAccount', 25.00, uuid);
    checking.withdrawal(15.50);
    expect(checking.getBalance).toBe(9.50);
});


test("Test: Account constructor() with non numbers values", () => {
    let amount = "abc"
    expect(() => {
        //code block that should throw error
        let checking = new Account('checkingAccount', amount, uuid);
    }).toThrow(`The value ${amount} is not a valid number.`)
});


test("Test: Account deposit() with non numbers values", () => {
    let amount = "abc"
    expect(() => {
        //code block that should throw error
        let checking = new Account('checkingAccount', 25.00, uuid);
        checking.deposit(amount);
    }).toThrow(`The value ${amount} is not a valid number.`)
});
test("Test: Account withdrawal() with non numbers values", () => {
    let amount = "abc"
    expect(() => {
        //code block that should throw error
        let checking = new Account('checkingAccount', 25.00, uuid);
        checking.withdrawal(amount)
    }).toThrow(`The value ${amount} is not a valid number.`)
});