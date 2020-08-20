class Card {
  constructor(account) {
    this.account = account;
  }

  buildCard() {
    let card = document.createElement("div"); // Card container
    let input = document.createElement("input");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let btnClose = document.createElement("a"); // close button
    card.className = "card";
    card.dataset.uuid = this.account.uuid;
    input.setAttribute("type", "text");
    input.setAttribute("name", "account-name");
    input.className = "account-name border-bottom";
    input.value = this.account.accountName;
    card.appendChild(input);
    h3.textContent = "Balance";
    card.appendChild(h3);
    p.appendChild(document.createTextNode("$"));

    p.appendChild(span);
    span.textContent = this.account.balance;
    card.appendChild(p);
    let i = document.createElement("i");
    btnClose.title = "Close account";
    btnClose.className = "btnClose";
    btnClose.textContent = "X";
    // i.className = "far fa-window-close";
    btnClose.appendChild(i);
    card.appendChild(btnClose);
    return card;
  }
}
export default Card;
