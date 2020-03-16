/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-16 15:48:36
 *
 */
import Account from './Account'


let checking;
test("Test: Account constructor()", () => {
    checking = new Account('checkingAccount', 25.00);
    expect(checking._accountName).toBe("checkingAccount");
    expect(checking.balance()).toBe(25.00);
});

test("Test: Account balance()", () => {
    expect(checking.balance()).toBe(25.00);
});

test("Test: Account deposit()", () => {
    checking.deposit(15.50);
    expect(checking.balance()).toBe(40.50);
});

test("Test: Account withdraw()", () => {
    checking.withdraw(15.50);
    expect(checking.balance()).toBe(25.00);
});
