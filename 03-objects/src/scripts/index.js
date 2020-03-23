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
const btnAscending = document.querySelector("#btnAscending");
const btnDescending = document.querySelector("#btnDescending");

const AC = new AccountController();
let activeAccount = "";

btnCreateAccount.addEventListener("click", (e) => {
    // debugger;
    let accountName = txtAccountName.value;
    let balance = parseInt(txtStartingBalance.value);
    let account = AC.createAccount(accountName, balance, MiscScripts.createUUID());
    let card = new Card(account);
    let div = card.buildCard();
    div.querySelector(".btnClose").addEventListener("click", closeAccount);
    accountList.prepend(div);
    setActiveAccount(div);

})

accountList.addEventListener("click", cardClick, false)

function cardClick(e) {
    let target = e.target;
    setActiveAccount(target);
    return target;
};

function closeAccount(e) {

    let card = e.target.parentElement;
    e.preventDefault();
    e.stopPropagation();
    if (confirm('Are you sure you want to close this Account?')) {
        AC.removeAccount(card.dataset.uuid)
        let container = card.parentElement;
        container.removeChild(card);
    } else {
        // Do nothing!
    }
};


accountList.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        activeAccount = e.target.parentElement.dataset.uuid;
    }
}, false);

btnDeposit.addEventListener("click", e => {
    debugger;
    let activeAccount = getActiveAccount();
    let card = document.querySelector(`div[data-uuid='${activeAccount.uuid}']`);
    let span = card.querySelector("p span");
    let account = AC.deposit(parseInt(txtAccountTransaction.value), card.dataset.uuid);
    span.textContent = account.balance.toString();
});


btnWithdrawal.addEventListener("click", e => {

    let activeAccount = getActiveAccount();
    let card = document.querySelector(`div[data-uuid='${activeAccount.uuid}']`);
    let span = card.querySelector("p span");
    let account = AC.withdrawal(parseInt(txtAccountTransaction.value), card.dataset.uuid);
    span.textContent = account.balance.toString();
});



function getActiveAccount() {
    let activeCard = document.querySelector(".active");
    let activeAccount = activeCard.querySelector("input").value;
    let account = AC.getAllAccounts().find(x => x.accountName === activeAccount);
    return account;
}

function setActiveAccount(target) {
    if (target.tagName === "P" || target.tagName === "SPAN" || target.tagName === "BUTTON" ||
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
}



