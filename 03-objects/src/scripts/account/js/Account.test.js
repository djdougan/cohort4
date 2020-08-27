import { Account, AccountController } from "./Account";

test("Test: Account", () => {
  let checking = new Account("checkingAccount", 25.0, 1);
  expect(checking.getAccountName()).toBe("checkingAccount");
  checking.setAccountName("checking");
  expect(checking.getAccountName()).toBe("checking");
  expect(checking.getAccountNumber()).toBe(1);
  expect(checking.getBalance()).toBe(25.0);
  checking.deposit(10);
  expect(checking.getBalance()).toBe(35.0);
  try {
    checking.deposit(-1);
  } catch (e) {
    expect(e.message).toBe("The value -1 is not a valid number.");
  }
  expect(checking.getBalance()).toBe(35.0);
  try {
    checking.withdrawal(35);
  } catch (e) {
    expect(e.message).toBe("You can't withdrawal more than your balance.");
  }
  expect(checking.getBalance()).toBe(0.0);
  expect(checking.getAccountDetails()).toEqual(
    '{"accountName":"checking","balance":0,"accountNumber":1}'
  );
});

test("Testing AccountController", () => {
  const accCtrl = new AccountController();
  const savings = accCtrl.createAccount("A", 1.0);
  const checking = accCtrl.createAccount("B", 2.0);
  const tfsa = accCtrl.createAccount("C", 3.0);
  const xmas = accCtrl.createAccount("D", 4.0);
  accCtrl.renameAccount(xmas.getAccountNumber(), "E");
  expect(xmas.getAccountName()).toBe("E");
  expect(accCtrl.getAccountTotal()).toBe(10);
  expect(accCtrl.getHighestValuedAccount()).toEqual(
    '{"accountName":"E","balance":4,"accountNumber":4}'
  );
  expect(accCtrl.getLowestValuedAccount()).toEqual(
    '{"accountName":"A","balance":1,"accountNumber":1}'
  );
  expect(accCtrl.getAllAccounts()).toEqual([
    {
      accountName: "A",
      accountNumber: 1,
      balance: 1,
    },
    {
      accountName: "B",
      accountNumber: 2,
      balance: 2,
    },
    {
      accountName: "C",
      accountNumber: 3,
      balance: 3,
    },
    {
      accountName: "E",
      accountNumber: 4,
      balance: 4,
    },
  ]);

  try {
    accCtrl.removeAccount(4);
  } catch (e) {
    expect(e.message).toBe("Accounts with balances cannot be deleted");
  }

  try {
    let transfer = accCtrl.withdrawal(2, 4);
    accCtrl.deposit(transfer, 3);
    accCtrl.removeAccount(4);

    expect(accCtrl.getAllAccounts()).toEqual([
      {
        accountName: "A",
        accountNumber: 1,
        balance: 1,
      },
      {
        accountName: "B",
        accountNumber: 2,
        balance: 2,
      },
      {
        accountName: "C",
        accountNumber: 3,
        balance: 3,
      },
      {
        accountName: "E",
        accountNumber: 4,
        balance: 2,
      },
    ]);
  } catch (e) {
    expect(e.message).toBe("Accounts with balances cannot be deleted");
  }
  
  try {
    let transfer = accCtrl.withdrawal(2, 4);
    accCtrl.deposit(transfer, 3);
    accCtrl.removeAccount(4);

    expect(accCtrl.getAllAccounts()).toEqual([
      {
        accountName: "A",
        accountNumber: 1,
        balance: 1,
      },
      {
        accountName: "B",
        accountNumber: 2,
        balance: 2,
      },
      {
        accountName: "C",
        accountNumber: 3,
        balance: 7,
      },
    ]);
  } catch (e) {
    expect(e.message).toBe("Accounts with balances cannot be deleted");
  }

});
