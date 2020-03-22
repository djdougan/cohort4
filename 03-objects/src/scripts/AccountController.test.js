import { AccountController } from "./Account";
import MiscScripts from "./misc-scripts"


let uuid = MiscScripts.createUUID();
test("Test: AccountController removeAccount", () => {

    let AC = new AccountController();

    expect(AC.createAccount("checking", 100, uuid)).toEqual({ "accountName": "checking", "balance": 100, "uuid": uuid });
    expect(AC.getAccountTotal).toBe(1);
    expect(AC.createAccount("Car Savings", 200, uuid)).toEqual({ "accountName": "Car Savings", "balance": 200, "uuid": uuid });
    expect(AC.getAccountTotal).toBe(2);

    AC.removeAccount("Car Savings");
    expect(AC.getAccountTotal).toBe(1);
});
test("Test: AccountController nameAccount", () => {

    let AC = new AccountController();
    expect(AC.createAccount("checking", 100, uuid)).toEqual({ "accountName": "checking", "balance": 100, "uuid": uuid });
    expect(AC.createAccount("Car Savings", 200, uuid)).toEqual({ "accountName": "Car Savings", "balance": 200, "uuid": uuid });
    expect(AC.nameAccount("Car Savings", "F350 Savings")).toEqual({ "accountName": "F350 Savings", "balance": 200, "uuid": uuid })

});

test("Test: AccountController getAccountTotal", () => {

    let AC = new AccountController();
    expect(AC.createAccount("checking", 100, uuid)).toEqual({ "accountName": "checking", "balance": 100, "uuid": uuid });
    expect(AC.createAccount("Car Savings", 200, uuid)).toEqual({ "accountName": "Car Savings", "balance": 200, "uuid": uuid });
    expect(AC.getAccountTotal).toBe(2);

});
test("Test: AccountController getHighestValuedAccount", () => {

    let AC = new AccountController();
    expect(AC.createAccount("Checking", 100, uuid)).toEqual({ "accountName": "Checking", "balance": 100, "uuid": uuid });
    expect(AC.createAccount("Savings", 200, uuid)).toEqual({ "accountName": "Savings", "balance": 200, "uuid": uuid });
    expect(AC.createAccount("RESP", 4000, uuid)).toEqual({ "accountName": "RESP", "balance": 4000, "uuid": uuid });
    expect(AC.createAccount("TFSA", 5000, uuid)).toEqual({ "accountName": "TFSA", "balance": 5000, "uuid": uuid });
    expect(AC.createAccount("F350 Savings", 600, uuid)).toEqual({ "accountName": "F350 Savings", "balance": 600, "uuid": uuid });
    expect(AC.createAccount("Business Account", 10500, uuid)).toEqual({ "accountName": "Business Account", "balance": 10500, "uuid": uuid });
    expect(AC.getHighestValuedAccount()).toEqual({ "accountName": "Business Account", "balance": 10500, "uuid": uuid });

});

test("Test: AccountController getLowestValuedAccount", () => {

    let AC = new AccountController();
    expect(AC.createAccount("Checking", 100, uuid)).toEqual({ "accountName": "Checking", "balance": 100, "uuid": uuid });
    expect(AC.createAccount("Savings", 200, uuid)).toEqual({ "accountName": "Savings", "balance": 200, "uuid": uuid });
    expect(AC.createAccount("RESP", 4000, uuid)).toEqual({ "accountName": "RESP", "balance": 4000, "uuid": uuid });
    expect(AC.createAccount("TFSA", 5000, uuid)).toEqual({ "accountName": "TFSA", "balance": 5000, "uuid": uuid });
    expect(AC.createAccount("F350 Savings", 600, uuid)).toEqual({ "accountName": "F350 Savings", "balance": 600, "uuid": uuid });
    expect(AC.createAccount("Business Account", 10500, uuid)).toEqual({ "accountName": "Business Account", "balance": 10500, "uuid": uuid });
    expect(AC.getHighestValuedAccount()).toEqual({ "accountName": "Business Account", "balance": 10500, "uuid": uuid });

});
