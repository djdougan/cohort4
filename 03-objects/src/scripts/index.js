import { Account } from "./Account.js";

const ddlAccountList = document.querySelector("#ddlAccounts");
const txtInitialDeposit = document.querySelector("#txtInitialDeposit");
const btnCreateAccount = document.querySelector("#btnCreateAccount");
const txtDepositAmount = document.querySelector("#txtDepositAmount");
const btnDeposit = document.querySelector("#btnDeposit");
const btnWithdrawal = document.querySelector("#btnWithdrawal");
const txtBalance = document.querySelector("#txtBalance");



let bankAccount;
btnCreateAccount.addEventListener("click", () => {
    let accountName = ddlAccountList.textContent;
    let initialBalance = parseInt(txtInitialDeposit.value);
    bankAccount = new Account(accountName, initialBalance);
    updateInterface();

});


btnDeposit.addEventListener("click", () => {
    let amount = parseInt(txtDepositAmount.value);
    bankAccount.deposit(amount);
    updateInterface();
});


btnWithdrawal.addEventListener("click", () => {
    let amount = parseInt(txtDepositAmount.value);
    bankAccount.withdrawal(amount);
    updateInterface();
});

function updateInterface() {
    txtBalance.value = bankAccount.balance();
}



