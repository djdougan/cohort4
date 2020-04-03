/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-04-02 16:17:34
 *
 * @name Account
 * @class
 */
class Account {


    /**
     * jsDoc
* @description 
* @name constructor
* @param {string} accName -- name of the account.
* @param {number} initialBalance -- amount deposited when account was created.
*/
    constructor(accName, initialBalance, uuid) {
        try {
            if (this.isValidNumber(initialBalance)) {
                this.accountName = accName;
                this.balance = initialBalance;
                this.uuid = uuid;

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
                    this.balance += amount;
                }
            } else {

                throw Error(`The value ${amount} is not a valid number.`)
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
                this.balance -= amount;
            } else {

                throw new Error(`The value ${amount} is not a valid number.`)
            }
        } catch (err) {
            throw err;
        }
    };
    /**
    * @description gets account balance
    * @name getBalance
    * @return {number} -- return a account balance.
    */
    get getBalance() {
        return this.balance;
    };

    /**
    * @description gets account name
    * @name getAccountName
    * @return {string} -- return a account name.
    */
    get getAccountName() {
        return this.accountName;
    }

    /**
    * @description gets account object
    * @name getAccountDetails
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    get getAccountDetails() {
        var result = {
            accountName: this.accountName,
            balance: this.balance,
            uuid: this.uuid
        };
        return result;
    }
    /**
    * @description gets account name
    * @name setAccountName
    * @return {string} -- return a account name.
    */
    set setAccountName(value) {
        this.accountName = value;
    }
    /**
    * @description gets account balance
    * @name getAccountNumber
    * @return {string} -- return a account number.
    */
    get getAccountNumber() {
        return this.uuid;
    }

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
    /**
    * @description AccountController constructor
    * @name constructor
    */
    constructor() {
        this.accounts = [];
    }

    /**
    * @description creates a account object
    * @name createAccount
    * @param {string} name -- name of account.
    * @param {number} initialBalance -- amount deposited at time of account creation.
    * @param {string} uuid -- unique id of account.
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    createAccount(name, initialBalance, uuid) {
        let result;
        try {
            let account = new Account(name, initialBalance, uuid);
            if (account) {
                this.accounts.push(account);
                let index = this.accounts.length - 1;
                if (this.accounts[index]) {
                    result = this.accounts[index].getAccountDetails;
                } else {
                    throw "account not created";
                }
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }

    /**
    * @description deposits funds in correct account
    * @name deposit
    * @param {number} amount -- amount to deposit.
    * @param {string} uuid -- unique id of account.
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    deposit(amount, uuid) {
        let results = { "accountName": "", "balance": 0.0, "uuid": "" };
        this.accounts.forEach((acc, i) => {
            if (acc.getAccountNumber === uuid) {
                acc.deposit(amount);
                results = acc.getAccountDetails;
            }
        });
        return results;
    }
    /**
* @description withdrawals funds from correct account
* @name withdrawal
* @param {number} amount -- amount to deposit.
* @param {string} uuid -- unique id of account.
* @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
*/
    withdrawal(amount, uuid) {

        let results = { "accountName": "", "balance": 0.0, "uuid": "" };
        this.accounts.forEach((acc, i) => {
            if (acc.getAccountNumber === uuid) {
                acc.withdrawal(amount);
                results = acc.getAccountDetails;
            }
        });
        return results;
    }

    /**
    * @description removes Accounts
    * @name removeAccount
    * @param {string} accountName -- name of account.
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    removeAccount(uuid) {
        let results = { "accountName": "", "balance": 0.0, "uuid": "" };
        try {
            let acc = this.accounts.find(x => x.getAccountNumber === uuid);
            let index = this.accounts.indexOf(acc);
            if (this.accounts[index]) {
                results = this.accounts.splice(index, 1);
            } else {
                throw new Error("account not found");
            }
        } catch (err) {
            throw err.message;
        }
        return results;

    }

    /**
    * @description renames a Account
    * @name nameAccount
    * @param {string} uuid -- uuid of account.
    * @param {string} newAccountName -- new name of account.
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    nameAccount(uuid, newAccountName) {
        let result;
        try {
            let index = this.accounts.indexOf(this.accounts.find(x => x.getAccountNumber === uuid));
            if (this.accounts[index]) {
                this.accounts[index].setAccountName = newAccountName;
                result = this.accounts[index].getAccountDetails;
            } else {
                throw new Error("account not found");
            }
        } catch (err) {
            throw err.message;
        }

        return result;
    }

    /**
    * @description gets the number of accounts
    * @name getAccountTotal
    * @return {number}  -- returns the number of accounts owned by client.
    */
    get getAccountTotal() {
        let result = this.accounts.length;
        return result;
    }

    /**
    * @description get highest valued account
    * @name getHighestValuedAccount
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    getHighestValuedAccount() {
        let result;
        try {
            if (this.accounts) {
                this.accounts.sort(function (a, b) {
                    return b.getBalance - a.getBalance;
                });
                result = this.accounts[0].getAccountDetails;
            } else {
                throw new Error(`accounts not found`)
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }

    /**
    * @description get lowest valued account
    * @name getLowestValuedAccount
    * @return {{ accountName: string, balance:number, uuid:string}}  -- return a account object.
    */
    getLowestValuedAccount() {

        let result;
        try {
            if (this.accounts) {
                this.accounts.sort(function (a, b) {
                    return a.getBalance - b.getBalance;
                });
                result = this.accounts[0].getAccountDetails;
            } else {
                throw new Error(`accounts not found`)
            }
        } catch (err) {
            throw err.message;
        }
        return result;
    }

    /**
    * @description get all accounts
    * @name getAllAccounts
    * @return {{ accountName: string, balance:number, uuid:string}[]}  -- array of accounts
    */
    getAllAccounts() {
        let results = [];
        for (let account of this.accounts) {
            results.push(account.getAccountDetails)
        }
        return results;
    }



}

export { Account, AccountController };
