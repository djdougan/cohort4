


class Card {
    #account
    constructor(account) {
        this.#account = account
        console.log("In Card", account);
    };

    buildCard() {
        let card = document.createElement('div');
        card.className = "card";
        card.dataset.uuid = this.#account.accountName;
        card.dataset.balance = this.#account.balance;
        card.dataset.uuid = this.#account.accountNumber;
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", 'account-name');
        input.className = "account-name border-bottom";
        input.value = this.#account.accountName;
        card.appendChild(input);
        let h3 = document.createElement('h3');
        h3.textContent = "Balance";
        card.appendChild(h3);
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('$'))

        let span = document.createElement('span');
        p.appendChild(span);
        span.textContent = this.#account.balance;
        card.appendChild(p);
        return card;

    }



}

export default Card;