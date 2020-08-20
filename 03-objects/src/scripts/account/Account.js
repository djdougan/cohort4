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
  constructor(accName, initialBalance, accountNumber) {
    try {
      if (initialBalance >= 0) {
        this.accountName = accName;
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
      } else {
        throw new Error(`The value ${initialBalance} is not a valid number.`);
      }
    } catch (err) {
      throw err;
    }
  }

  deposit(amount) {
    try {
      if (amount > 0) {
        if (amount > 0) {
          this.balance += amount;
        }
      } else {
        throw new Error(`The value ${amount} is not a valid number.`);
      }
    } catch (err) {
      throw err;
    }
  }
  withdrawal(amount) {
    try {
      amount = Math.abs(amount);
      if (amount > this.balance) {
        throw new Error(`You can't withdrawal more than your balance.`);
      }
      if (amount > 0) {
        this.balance -= amount;
      } else {
        throw new Error(`The value ${amount} is not a valid number.`);
      }
    } catch (err) {
      throw err;
    }
  }
  getBalance() {
    return this.balance;
  }

  getAccountName() {
    return this.accountName;
  }

  getAccountDetails() {
    // var result = {
    //   accountName: this.accountName,
    //   balance: this.balance,
    //   accountNumber: this.accountNumber,
    // };
    return JSON.stringify(this);
  }
  setAccountName(value) {
    this.accountName = value;
  }
  getAccountNumber() {
    return this.accountNumber;
  }
}

/**
 * @name AccountController
 * @class
 */
class AccountController {
  constructor() {
    this.accounts = [];
  }

  createAccount(name, initialBalance) {
    let accountNumber = 0;
    let account = {};
    try {
      accountNumber =
        this.accounts.reduce(
          (acc, a) => (acc = acc > a.accountNumber ? acc : a.accountNumber),
          0
        ) + 1;
      account = new Account(name, initialBalance, accountNumber);
      if (account) {
        this.accounts.push(account);
      } else {
        throw new Error(`Account not created.`);
      }
    } catch (err) {
      throw err;
    }
    return account;
  }

  deposit(amount, accountNumber) {
    let results = { accountName: "", balance: 0.0, accountNumber: 0 };
    this.accounts.forEach((acc, i) => {
      if (acc.getAccountNumber === accountNumber) {
        acc.deposit(amount);
        results = acc.getAccountDetails;
      }
    });
    return results;
  }

  withdrawal(amount, accountNumber) {
    let results = { accountName: "", balance: 0.0, number: 0 };
    this.accounts.forEach((acc, i) => {
      if (acc.getAccountNumber === accountNumber) {
        acc.withdrawal(amount);
        results = acc.getAccountDetails;
      }
    });
    return results;
  }

  removeAccount(accountNumber) {
    let results = {};
    try {
      let acc = this.accounts.find(
        (x) => x.getAccountNumber() === accountNumber
      );
      if (acc.getBalance() > 0) {
        throw new Error("Accounts with balances cannot be deleted");
      }
      let index = this.accounts.indexOf(acc);
      if (this.accounts[index]) {
        results = this.accounts.splice(index, 1);
      } else {
        throw new Error("account not found");
      }
    } catch (err) {
      throw err;
    }
    return results;
  }

  renameAccount(accountNumber, newAccountName) {
    let result;
    try {
      let index = this.accounts.indexOf(
        this.accounts.find((x) => x.getAccountNumber() === accountNumber)
      );
      if (this.accounts[index]) {
        this.accounts[index].setAccountName(newAccountName);
        result = this.accounts[index].getAccountDetails();
      } else {
        throw new Error("account not found");
      }
    } catch (err) {
      throw err;
    }

    return result;
  }

  getAccountTotal() {
    let result = 0;
    this.accounts.forEach((element) => {
      result += element.getBalance();
    });
    return result;
  }

  getHighestValuedAccount() {
    let result;
    try {
      if (this.accounts) {
        this.accounts.sort(function (a, b) {
          return b.getBalance() - a.getBalance();
        });
        result = this.accounts[0].getAccountDetails();
      } else {
        throw new Error(`accounts not found`);
      }
    } catch (err) {
      throw err;
    }
    return result;
  }

  getLowestValuedAccount() {
    let result;
    try {
      if (this.accounts) {
        this.accounts.sort(function (a, b) {
          return a.getBalance() - b.getBalance();
        });
        result = this.accounts[0].getAccountDetails();
      } else {
        throw new Error(`accounts not found`);
      }
    } catch (err) {
      throw err;
    }
    return result;
  }

  getAllAccounts() {
    return this.accounts;
  }
}

export { Account, AccountController };
