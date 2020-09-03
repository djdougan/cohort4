
import Card from "./AccountCard";
import { Account, AccountController } from "./Account";


test("Test: Build Card", () => {
    let account = new Account("Checking", 500, 1)
    let card = new Card(account);
    let ac = card.buildCard();

    let container = document.createElement('div')
    container.appendChild(ac);
    expect(container.children.length).toBe(1)

    const btnClose = ac.querySelector(".btnClose");
    ac.withdrawal(500);
    expect(ac.balance()).toBe(0)
    btnClose.click();
    expect(container.children.length).toBe(0);
});
