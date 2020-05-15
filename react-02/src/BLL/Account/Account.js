/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-04-10 19:26:57
 *
 * @name Account
 * @class
 */
class Account {


    /**
     * jsDoc
     * @description 
     * @name constructor
     * @param {number} account key
     * @param {string} accName -- name of the account.
     * @param {number} initialBalance -- amount deposited when account was created.
     */
    constructor(name, initialBalance, key = null) {
        try {
            if (this.isValidNumber(initialBalance)) {
                this.accountName = name;
                this.balance = initialBalance;
                this.key = key;

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
        return this.key;
    }

        toString() {
            return `{'key': '${this.key}', 'accountName': '${this.accountName}','balance': '${this.balance}'}`;
        }
        isValidNumber(number) {
            let result = true;
            if (!isNaN(number)) {
                result = true;
            } else {
                result = false;
            }
            return result;

        };
};
/******************************************************************************************************* */
/**
 * Copyright (c) 2020
 *
 * @summary Working with objects 
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-17 12:15:00
 * Last modified  : 2020-05-10 16:52:38
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
     * @param {string} key -- unique id of account.
     * @name createAccount
     * @param {number} key
     * @param {string} name -- name of account.
     * @param {number} initialBalance -- amount deposited at time of account creation.
     * @return {{ key:string, accountName: string, balance:number}}  -- return a account object.
     */
    createAccount(name, initialBalance, key = null) {
         if (key === null) {
                if (this.accounts.length >= 1) {
                    var maxKey = this.accounts.reduce((a, b) => a.key > b.key ? a : b).key;
                    key = maxKey + 1;
                } else {
                    key = 1;
                }
            }
        try {
            let account = new Account(name, initialBalance, key);
            if (account) {
                this.accounts.push(account);
            }
              else {
                    throw new Error("account not created");
                }
            
        } catch (err) {
            throw err.message;
        }
    }

    /**
     * @description removes Accounts
     * @name removeAccount
     * @param {string} accountName -- name of account.
     * @return {{ accountName: string, balance:number, key:string}}  -- return a account object.
     */
    getAccount(key) {
        let results;
        try {
            let acc = this.accounts.find(x => x.getAccountNumber === key);
            let index = this.accounts.indexOf(acc);
            if (this.accounts[index]) {
                results = this.accounts[index];
            } else {
                throw new Error("account not found");
            }
        } catch (err) {
            throw err.message;
        }
        return results;

    }
    /**
     * @description removes Accounts
     * @name removeAccount
     * @param {string} accountName -- name of account.
     * @return {{ accountName: string, balance:number, key:string}}  -- return a account object.
     */
    removeAccount(key) {
        let results;
        try {
            let acc = this.accounts.find(x => x.getAccountNumber === key);
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
     * @description gets the number of accounts
     * @name getAccountTotal
     * @return {number}  -- returns the number of accounts owned by client.
     */
    get getAccountTotal() {
        let result = 0;
        for(let i =0; i<this.accounts.length; i++){
            result+= this.accounts[i]["balance"];
        }

        return result;
    }

    /**
     * @description get highest valued account
     * @name getHighestValuedAccount
     * @return {{ accountName: string, balance:number, key:string}}  -- return a account object.
     */
    getHighestValuedAccount() {
        let result;
        try {
            if (this.accounts) {
                this.accounts.sort(function(a, b) {
                    return b.getBalance - a.getBalance;
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

    /**
     * @description get lowest valued account
     * @name getLowestValuedAccount
     * @return {{ accountName: string, balance:number, key:string}}  -- return a account object.
     */
    getLowestValuedAccount() {

        let result;
        try {
            if (this.accounts) {
                this.accounts.sort(function(a, b) {
                    return a.getBalance - b.getBalance;
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

    /**
     * @description get all accounts
     * @name getAllAccounts
     * @return {{ accountName: string, balance:number, key:string}[]}  -- array of accounts
     */
    getAllAccounts() {
        return this.accounts;
    }



}

export {Account, AccountController}
