import { Account, AccountController } from "./Account.js";
import Card from "./Card.js";
import MiscScripts from "./misc-scripts.js";


const accountList = document.querySelector("#accountList");
const txtAccountName = document.querySelector("#txtAccountName");
const spnAccountName = document.querySelector("#spnAccountName")
const txtStartingBalance = document.querySelector("#txtStartingBalance");
const btnCreateAccount = document.querySelector("#btnCreateAccount");
const txtAccountTransaction = document.querySelector("#txtAccountTransaction");
const btnDeposit = document.querySelector("#btnDeposit");
const btnWithdrawal = document.querySelector("#btnWithdrawal");


const AC = new AccountController();

btnCreateAccount.addEventListener("click", (e) => {
    let accountName = txtAccountName.value;
    let balance = txtStartingBalance.value;
    let account = AC.createAccount(accountName, balance, MiscScripts.createUUID());
    let card = new Card(account);
    accountList.appendChild(card.buildCard());
})

accountList.addEventListener("click", cardClick, false)
function cardClick(e) {
    let target = e.target;
    if (target.tagName === "P" || target.tagName === "SPAN" ||
        target.tagName === "H3" || target.tagName === "INPUT") {
        target = target.parentElement;
        if (target.tagName === "P") {
            target = target.parentElement;
        }
    }
    let collection = Array.from(target.parentElement.children);
    collection.forEach(card => {
        card.classList.remove("active");
    });
    target.classList.add("active");
    spnAccountName.textContent = target.querySelector("input").value;
    return target;
};
accountList.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        console.log(` The ${e.key}`);
    }
}, false);

btnDeposit.addEventListener("click", e => {
    let activeAccount = getActiveAccount();
    console.log(activeAccount);

});


btnWithdrawal.addEventListener("click", e => {

    let activeAccount = getActiveAccount();
    console.log(activeAccount);
});



function getActiveAccount() {
    let acitveCard = document.querySelector(".active");
    let activeAccount = acitveCard.querySelector("input").value;
    let account = AC.accounts.find(x => x.accountName == activeAccount);
    return account;
}




