import { AccountController } from "./Account";



test("Test: AccountController constructor", () => {
    let AC = new AccountController();
    AC.createAccount("checking");
    expect(AC.accounts.length).toBe(1);
});