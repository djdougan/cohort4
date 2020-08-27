class Account {
  constructor(accName, amount, accountNumber) {
    try {
      if (amount >= 0) {
        this.accountName = accName;
        this.balance = parseFloat(amount);
        this.accountNumber = accountNumber;
      } else {
        throw new Error(`The value ${amount} is not a valid number.`);
      }
    } catch (error) {
      throw error;
    }
  }

  deposit(amount) {
    try {
      amount = parseFloat(amount)
      if (amount > 0) {
        if (amount > 0) {
          this.balance += amount;
        }
      } else {
        throw new Error(`The value ${amount} is not a valid number.`);
      }
    } catch (error) {
      throw error;
    }
  }
  withdrawal(amount) {
    try {
      amount = parseFloat(amount);
      amount = Math.abs(amount);
      if (amount > this.balance) {
        throw new Error(`You can't withdrawal more than your balance.`);
      }
      if (amount > 0) {
        this.balance -= amount;
      } else {
        throw new Error(`The value ${amount} is not a valid number.`);
      }
    } catch (error) {
      throw error;
    }
    return amount;
  }

  getBalance() {
    return this.balance;
  }

  getAccountName() {
    return this.accountName;
  }

  getAccountDetails() {

    return JSON.stringify(this);
  }
  setAccountName(value) {
    this.accountName = value;
  }
  getAccountNumber() {
    return this.accountNumber;
  }
}

class AccountController {
  constructor() {
    this.accounts = [];
  }

  createAccount(name, amount) {
    let accountNumber = 0;
    let account;
    try {
      accountNumber =
        this.accounts.reduce(
          (acc, a) => (acc = acc > a.accountNumber ? acc : a.accountNumber),
          0
        ) + 1;
      account = new Account(name, amount, accountNumber);
      if (account) {
        this.accounts.push(account);
      } else {
        throw new Error(`Account not created.`);
      }
    } catch (error) {
      throw error
    }
    console.log(account)
    return account;
  }

  deposit(amount, accountNumber) {
    try{
      amount = parseFloat(amount);
      this.accounts.forEach((acc, i) => {
      if (acc.getAccountNumber() === accountNumber) {
      let prevBalance = acc.getBalance();
       acc.deposit(amount);
       if (acc.getBalance() == prevBalance){
         throw new Error("Deposit failed.")
       }
      }
    });
    }catch(error){
      throw error
    }
    return amount;
  }

  withdrawal(amount, accountNumber) {
        try {
        amount = parseFloat(amount);
          this.accounts.forEach((acc, i) => {
            if (acc.getAccountNumber() === accountNumber) {
              let prevBalance = acc.getBalance();
              acc.withdrawal(amount);
              if (acc.getBalance() == prevBalance) {
                throw new Error("Withdrawal failed.");
              }
            }
          });
        } catch (error) {
          throw error;
        }
        return amount
  }

  removeAccount(accountNumber) {
  
    let results = {};
    try {
      let acc = this.accounts.find(
        (x) => x.getAccountNumber() === accountNumber
      );
      let index = this.accounts.indexOf(acc);
      if (this.accounts[index]) {
        if (acc.getBalance() > 0) {
          throw new Error("Accounts with balances cannot be deleted");
        }
        if (acc.getBalance() < 0) {
          throw new Error("Accounts with overdrafts cannot be deleted");
        } else {
          results = this.accounts.splice(index, 1);
        }
      } else {
        throw new Error("account not found");
      }
    } catch (error) {
      throw error
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
    } catch (error) {
      throw error;
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
    } catch (error) {
      throw error;
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
    } catch (error) {
      throw error;
    }
    return result;
  }

  getAllAccounts() {
    return this.accounts;
  }
}

export { Account, AccountController };
