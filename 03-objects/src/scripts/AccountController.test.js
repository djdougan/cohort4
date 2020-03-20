import { AccountController } from "./Account";



test("Test: AccountController constructor", () => {
    let AC = new AccountController();
    expect(AC.createAccount("checking", 100)).toEqual({ "accountName": "checking", "bal": 100 });
    expect(AC.accounts.length).toBe(1);
    expect(AC.createAccount("Car Savings", 200)).toEqual({ "accountName": "Car Savings", "bal": 200 });
    expect(AC.accounts.length).toBe(2);
});
test("Test: AccountController removeAccount", () => {

    let AC = new AccountController();
    expect(AC.createAccount("checking", 100)).toEqual({ "accountName": "checking", "bal": 100 });
    expect(AC.accounts.length).toBe(1);
    expect(AC.createAccount("Car Savings", 200)).toEqual({ "accountName": "Car Savings", "bal": 200 });
    expect(AC.accounts.length).toBe(2);

    AC.removeAccount("Car Savings");
    expect(AC.accounts.length).toBe(1);
});
test("Test: AccountController nameAccount", () => {

    let AC = new AccountController();
    expect(AC.createAccount("checking", 100)).toEqual({ "accountName": "checking", "bal": 100 });
    expect(AC.createAccount("Car Savings", 200)).toEqual({ "accountName": "Car Savings", "bal": 200 });
    expect(AC.nameAccount("Car Savings", "F350 Savings")).toEqual({ "accountName": "F350 Savings", "bal": 200 })

});

test("Test: AccountController getAccountTotal", () => {

    let AC = new AccountController();
    expect(AC.createAccount("checking", 100)).toEqual({ "accountName": "checking", "bal": 100 });
    expect(AC.createAccount("Car Savings", 200)).toEqual({ "accountName": "Car Savings", "bal": 200 });
    expect(AC.getAccountTotal("Car Savings")).toBe(200);

});
test("Test: AccountController getAccountTotal", () => {

    let AC = new AccountController();
    expect(AC.createAccount("Checking", 100)).toEqual({ "accountName": "Checking", "bal": 100 });
    expect(AC.createAccount("Savings", 200)).toEqual({ "accountName": "Savings", "bal": 200 });
    expect(AC.createAccount("RESP", 4000)).toEqual({ "accountName": "RESP", "bal": 4000 });
    expect(AC.createAccount("TFSA", 5000)).toEqual({ "accountName": "TFSA", "bal": 5000 });
    expect(AC.createAccount("F350 Savings", 600)).toEqual({ "accountName": "F350 Savings", "bal": 600 });
    expect(AC.createAccount("Business Account", 10500)).toEqual({ "accountName": "Business Account", "bal": 10500 });
    expect(AC.getHighestValuedAccount()).toEqual({ "accountName": "Business Account", "bal": 10500 });

});
