import { Account, AccountController } from "./Account.js";
import Card from "./AccountCard.js";

// inputs
const txtAccountName = document.getElementById("txtAccountName");
const txtStartingBalance = document.getElementById("txtStartingBalance");
const txtAccountTransaction = document.getElementById("txtAccountTransaction");
const accountDropDownList = document.getElementById("accountDropDownList");
// Buttons
const btnCreateAccount = document.getElementById("btnCreateAccount");
const btnDeposit = document.getElementById("btnDeposit");
const btnWithdrawal = document.getElementById("btnWithdrawal");

// containers
const accountList = document.getElementById("accountList");
// variables
const ac = new AccountController();
const totalOfAccounts = document.getElementById("totalOfAccounts");

btnCreateAccount.addEventListener("click", (e) => {
  try {
    let accountName = txtAccountName.value;
    let startingBalance = txtStartingBalance.value;
    const account = ac.createAccount(accountName, startingBalance);
    const card = new Card(account);
    accountList.appendChild(card.buildCard());
    var option = document.createElement("option");
    option.text = accountName;   
    option.id = account.accountNumber;
    accountDropDownList.add(option, account.accountNumber);
    updateTotal();
  } catch (e) {
    alert(e.message);
  }
});

btnDeposit.addEventListener("click", (e) => {
  try {
      let deposit = txtAccountTransaction.value;
      if(deposit===""){
        return;
      }
      let accountNumber = accountDropDownList[accountDropDownList.selectedIndex].id;
      ac.deposit(deposit, accountNumber);
      let card = document.querySelector(`div[data-number="${accountNumber}"]`);
      
      card.deposit(deposit);
      updateTotal();


  } catch (e) {
    alert(e.message);
  }
});

btnWithdrawal.addEventListener("click", (e) => {
  try {
      let withdrawal = txtAccountTransaction.value;
      if(withdrawal===""){
        return;
      }
      let accountNumber = accountDropDownList[accountDropDownList.selectedIndex].id;
      ac.withdrawal(withdrawal, accountNumber);
      let card = document.querySelector(`div[data-number="${accountNumber}"]`);
      
      card.withdrawal(withdrawal);
      updateTotal();

  } catch (e) {
    alert(e.message);
  }
});

const updateTotal=()=>{
  totalOfAccounts.textContent = ac.getAccountTotal();
}
