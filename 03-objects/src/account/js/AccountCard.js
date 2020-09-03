

class Card {
  constructor(account) {
    this.account = account; 
    this.card = document.createElement("div"); // Card container
    this.input = document.createElement("input");
    this.h3 = document.createElement("h3");
    this.p = document.createElement("p");
    this.span = document.createElement("span");
    this.btnClose = document.createElement("a"); // close button

    this.buildCard = this.buildCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdrawal = this.withdrawal.bind(this);
    this.balance = this.balance.bind(this);
  }

  buildCard() {
   
    this.card.className = "card";
    this.card.dataset.number = this.account.accountNumber;
    this.input.setAttribute("type", "text");
    this.input.setAttribute("name", "account-name");
    this.input.className = "account-name border-bottom";
    this.input.value = this.account.accountName;
    this.card.appendChild(this.input);
    this.h3.textContent = "Balance";
    this.card.appendChild(this.h3);
    this.p.appendChild(document.createTextNode("$"));

    this.p.appendChild(this.span);
    this.span.textContent = this.account.balance;
    this.card.appendChild(this.p);
    let i = document.createElement("i");
    this.btnClose.title = "Close account";
    this.btnClose.className = "btnClose";
    this.btnClose.textContent = "X";
    this.btnClose.appendChild(i);
    this.card.appendChild(this.btnClose);
    this.btnClose.onclick = this.deleteCard;
    this.card.deposit = this.deposit;
    this.card.withdrawal = this.withdrawal;
    this.card.balance = this.balance;
    return this.card;

  } 

  deleteCard = (e) => { 
    try {
      if (this.account.getBalance() === 0) {
        let parent = e.target.parentElement;
        let container = parent.parentElement;
        container.removeChild(parent);

      } else if (this.account.getBalance() > 0) {
        throw new Error("Cannot delete a account with a balance.");
      } else if (this.account.getBalance() < 0) {
        throw new Error("Please add funds before you delete this account.");
      }
    } catch (e) { 
    alert(e.message);
    }
    return true;
  }

  deposit(amount){
    this.account.deposit(amount);
    this.span.textContent = this.account.getBalance();

  }
  withdrawal(amount, card)    {
    this.account.withdrawal(amount);
    this.span.textContent = this.account.getBalance();

  }
  balance(){
    return this.account.balance;
  }

}
export default Card;
