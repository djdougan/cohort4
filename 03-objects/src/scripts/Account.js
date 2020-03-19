/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-19 12:01:04
 *
 * @name Account
 * @class
 */
class Account {
    /**
* @description 
* @name constructor
* @param {string} accName -- name of the account.
* @param {number} initialBalance -- amount deposited when account was created.
*/
    constructor(accName, initialBalance) {
        try {
            if (this.isValidNumber(initialBalance)) {
                this.accountName = accName;
                this.bal = initialBalance;
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
                    this.bal += amount;
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
                this.bal -= amount;
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
        return this.bal;
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
    createAccount(name, initialBalance) {
        let result;
        try {
            let account = new Account(name, initialBalance);
            if (account) {
                this.accounts.push(account);
                let index = this.accounts.indexOf(this.accounts.find(x => x.accountName === account.accountName));
                if (this.accounts[index]) {
                    result = this.accounts[index];
                } else {
                    throw "account not created";
                }
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }
    removeAccount(accName) {
        let results;
        try {
            let acc = this.accounts.find(x => x.accountName === accName);
            let index = this.accounts.indexOf(acc);
            if (this.accounts[index]) {
                this.accounts.splice(index, 1);
                results = this.accounts[index];
            } else {
                throw new Error("account not found");
            }
        } catch (err) {
            throw err.message;
        }
        return results;

    }

    nameAccount(prevAccountName, newAccountName) {
        let result;
        try {
            let index = this.accounts.indexOf(this.accounts.find(x => x.accountName === prevAccountName));
            if (this.accounts[index]) {
                this.accounts[index].accountName = newAccountName;
                result = this.accounts[index];
            } else {
                throw new Error("account not found");
            }
        } catch (err) {
            throw err.message;
        }

        return result;
    }

    getAccountTotal(accountName) {
        let result;
        try {
            let index = this.accounts.indexOf(this.accounts.find(x => x.accountName === accountName));
            if (this.accounts[index]) {
                result = this.accounts[index].bal;
            } else {
                throw new Error(`${accountName} not found`)
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }

    getHighestValuedAccount() {
        let result;
        try {
            if (this.accounts) {
                this.accounts.sort(function (a, b) {
                    return b.bal - a.bal
                });
                result = this.accounts[0];
            } else {
                throw new Error(`accounts not found`)
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }
    getLowestValuedAccount() {

        let result;
        try {
            if (this.accounts) {
                this.accounts.sort(function (a, b) {
                    return a.bal - b.bal
                });
                result = this.accounts[0];
            } else {
                throw new Error(`accounts not found`)
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }


}

export { Account, AccountController };
