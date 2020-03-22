import Card from "./Card"
import { Account, AccountController } from "./Account";
import MiscScripts from "./misc-scripts";


let uuid = MiscScripts.createUUID();

test("Test: Build Card", () => {
    let account = new Account("Checking", 500, uuid)
    let card = new Card(account);
    let div = card.buildCard();
    expect(div).toBeTruthy();

});
