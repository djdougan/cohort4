import { Account, AccountController } from "../../../BLL/Account/Account.js";
import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, render, screen, act } from "@testing-library/react";

import App from "../../../App";

describe("Account Test", () => {
  test("testing Account and AccountController", () => {
    let controller = new AccountController();
    controller.createAccount("checking", 10.0, 1);
    controller.createAccount("savings", 5.0, 2);
    controller.createAccount("investment", 15.0, 3);
    expect(controller.getAccountTotal()).toBe(30.0);
    expect(controller.getLowestValuedAccount()).toEqual({
      accountName: "savings",
      balance: 5,
      key: 2,
    });
    expect(controller.getHighestValuedAccount()).toEqual({
      accountName: "investment",
      balance: 15,
      key: 3,
    });

    let checking = controller.getAccount(1);
    expect(checking.toString()).toBe(
      "{'key': '1', 'accountName': 'checking','balance': '10'}"
    );

    expect(checking.getAccountNumber).toBe(1);
    expect(checking.getAccountName).toBe("checking");
    expect(checking.getBalance).toBe(10.0);
    checking.deposit(5.0);
    expect(checking.getBalance).toBe(15.0);
    checking.withdrawal(5.0);
    expect(checking.getBalance).toBe(10.0);
  });
});

describe("React test", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("", async () => {
    const accounts = [
      { key: 1, accountName: "Checking", Balance: 5.0 },
      { key: 2, accountName: "Saving", Balance: 10.0 },
      { key: 3, accountName: "Car Saving", Balance: 10.0 },
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(accounts),
      })
    );
    await act(async () => {
      render(<App />);
    });
  });
});
