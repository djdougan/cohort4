


class Card {
    #account
    #card = document.createElement('div');
    #input = document.createElement("input");
    #h3 = document.createElement('h3');
    #p = document.createElement('p');
    #span = document.createElement('span');
    #btnClose = document.createElement("a");

    constructor(account) {
        this.#account = account;

    };

    buildCard() {
        this.#card.className = "card";
        this.#card.dataset.uuid = this.#account.uuid;
        this.#input.setAttribute("type", "text");
        this.#input.setAttribute("name", 'account-name');
        this.#input.className = "account-name border-bottom";
        this.#input.value = this.#account.accountName;
        this.#card.appendChild(this.#input);
        this.#h3.textContent = "Balance";
        this.#card.appendChild(this.#h3);
        this.#p.appendChild(document.createTextNode('$'))

        this.#p.appendChild(this.#span);
        this.#span.textContent = this.#account.balance;
        this.#card.appendChild(this.#p);
        let i = document.createElement("i");
        this.#btnClose.title = "Close account";
        i.className = "btnClose far fa-window-close";
        this.#btnClose.appendChild(i);
        this.#card.appendChild(this.#btnClose);
        return this.#card;

    }
    // updateCard(account) {
    //     this.#input.value = account.accountName;
    //     this.#span.textContent = account.balance;
    //     return this.#card;
    // }



}

export default Card;