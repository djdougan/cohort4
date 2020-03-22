import { AccountController } from "./Account";
import MiscScripts from "./misc-scripts"


let uuid = MiscScripts.createUUID();
test("Test: AccountController removeAccount", () => {

    let AC = new AccountController();

    AC.createAccount("checking", 100, uuid);
    expect(AC.getAccountTotal).toBe(1)
    let uuid2 = MiscScripts.createUUID();
    AC.createAccount("Car Savings", 200, uuid2);
    expect(AC.getAccountTotal).toBe(2);
    AC.removeAccount(uuid);
    expect(AC.getAccountTotal).toBe(1);
});
test("Test: AccountController nameAccount", () => {

    let AC = new AccountController();
    AC.createAccount("checking", 100, uuid);
    let uuid2 = MiscScripts.createUUID();
    AC.createAccount("Car Savings", 200, uuid2);
    expect(AC.nameAccount(uuid2, "F350 Savings")).toEqual({ "accountName": "F350 Savings", "balance": 200, "uuid": uuid2 })

});

test("Test: AccountController getAccountTotal", () => {

    let AC = new AccountController();
    AC.createAccount("checking", 100, uuid);
    AC.createAccount("Car Savings", 200, uuid)
    expect(AC.getAccountTotal).toBe(2);

});
test("Test: AccountController getHighestValuedAccount", () => {

    let AC = new AccountController();
    AC.createAccount("Checking", 100, uuid);
    AC.createAccount("Savings", 200, uuid);
    AC.createAccount("RESP", 4000, uuid);
    AC.createAccount("TFSA", 5000, uuid);
    AC.createAccount("F350 Savings", 600, uuid);
    AC.createAccount("Business Account", 10500, uuid);
    expect(AC.getHighestValuedAccount()).toEqual({ "accountName": "Business Account", "balance": 10500, "uuid": uuid });

});

test("Test: AccountController getLowestValuedAccount", () => {

    let AC = new AccountController();
    AC.createAccount("Checking", 100, uuid)
    AC.createAccount("Savings", 200, uuid)
    AC.createAccount("RESP", 4000, uuid)
    AC.createAccount("TFSA", 5000, uuid)
    AC.createAccount("F350 Savings", 600, uuid)
    AC.createAccount("Business Account", 10500, uuid)
    expect(AC.getHighestValuedAccount()).toEqual({ "accountName": "Business Account", "balance": 10500, "uuid": uuid });

});
test("Test: get all accounts", () => {

    let AC = new AccountController();
    AC.createAccount("Checking", 100, uuid);
    AC.createAccount("Savings", 200, uuid);
    AC.createAccount("RESP", 4000, uuid);
    AC.createAccount("TFSA", 5000, uuid);
    AC.createAccount("F350 Savings", 600, uuid);
    AC.createAccount("Business Account", 10500, uuid);
    expect(AC.getAllAccounts()).toEqual([
        { "accountName": "Checking", "balance": 100, "uuid": uuid },
        { "accountName": "Savings", "balance": 200, "uuid": uuid },
        { "accountName": "RESP", "balance": 4000, "uuid": uuid },
        { "accountName": "TFSA", "balance": 5000, "uuid": uuid },
        { "accountName": "F350 Savings", "balance": 600, "uuid": uuid },
        { "accountName": "Business Account", "balance": 10500, "uuid": uuid }
    ]);
})
