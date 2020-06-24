/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-15 18:00:00
 * Last modified  : 2020-03-31 20:00:45
 *
 */
import { Account, AccountController } from "../Account.js";

test("Test: Account constructor()", () => {
  const accountCtrl = new AccountController();
  accountCtrl.createAccount("acc1", 5.0, 1);
  expect(accountCtrl.getAccount(1).accountName).toBe("acc1");
  expect(accountCtrl.getAccount(1).getBalance).toBe(5);
  let acc1 = accountCtrl.getAccount(1);
  acc1.deposit(10);
  expect(accountCtrl.getAccountTotal()).toBe(15);
  accountCtrl.createAccount("acc2", 10.0, 2);
  expect(accountCtrl.getAccount(2).accountName).toBe("acc2");
  let acc2 = accountCtrl.getAccount(2);
  expect(acc2.getBalance).toBe(10);
  acc2.deposit(10);
  expect(accountCtrl.getAccountTotal()).toBe(35);
});
