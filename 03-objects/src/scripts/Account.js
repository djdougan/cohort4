/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-17 16:19:09
 *
 * @name Account
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
        try {
            if (this.isValidNumber(initialBalance)) {
                this._accountName = accountName;
                this._balance = initialBalance;
            } else {

                throw new Error(`The value ${initialBalance} is not a valid number.`)
            }
        } catch (err) {
            throw err
        }

    };

    /**
  * @description deposits amount to account
  * @name deposit
  * @param {number} amount -- amount to be deposit
 */
    deposit(amount) {
        try {
            if (this.isValidNumber(amount)) {
                if (amount > 0) {
                    this._balance += amount;
                }
            } else {

                throw new Error(`The value ${amount} is not a valid number.`)
            }
        } catch (err) {
            throw err;
        }
    };
    /**
  * @description withdraws amount from account
  * @name withdraw
  * @param {number} amount -- amount to withdraw from account.
 */
    withdrawal(amount) {
        try {
            if (this.isValidNumber(amount)) {
                // over draft is allowed
                this._balance -= amount;
            } else {

                throw new Error(`The value ${amount} is not a valid number.`)
            }
        } catch (err) {
            throw err;
        }
    };
    /**
  * @description gets account balance
  * @name balance
  * @return {number} -- return a account balance.
 */
    balance() {
        return this._balance;
    };

    isValidNumber(number) {
        let result = true;
        if (!isNaN(number)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;

    };


};


/**
 * Copyright (c) 2020
 *
 * @summary Working with objects 
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-17 12:15:00
 * Last modified  : 2020-03-17 12:01:49
 *
 * @name AccountController
 * @class
 */
class AccountController {

    constructor() {
        this.accounts = [];
    }
    createAccount(account) {
        if (account) {
            this.accounts.push(account);
        }
    }
    removeAccount(account) {

    }
    nameAccount() {

    }

    getAccountTotal(account) {

    }
    getHighestValuedAccount() {

    }
    getLowestValuedAccount() {

    }


}

export { Account, AccountController };
