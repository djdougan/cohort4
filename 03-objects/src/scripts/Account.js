/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-16 15:49:06
 *
 * @name Account
 * Creates a stack like with array as it's container
 * @class
 */
class Account {
    /**
* @description 
* @name constructor
* @param {string} accountName -- name of the account.
* @param {number} initialBalance -- amount deposited when account was created.
*/
    constructor(accountName, initialBalance) {
        this._accountName = accountName;
        this._balance = initialBalance;
    };

    /**
  * @description deposits amount to account
  * @name deposit
  * @param {number} amount -- amount to be deposit
 */
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    };
    /**
  * @description withdraws amount from account
  * @name withdraw
  * @param {number} amount -- amount to withdraw from account.
 */
    withdraw(amount) {
        // over draft is allowed
        this._balance -= amount;
    };
    /**
  * @description gets account balance
  * @name balance
  * @return {number} -- return a account balance.
 */
    balance() {
        return this._balance;
    };

}

export default Account;