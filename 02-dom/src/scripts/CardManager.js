/**
 * Copyright (c) 2020
 *
 * @summary Working with Cards
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 110 exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-08 07:30:00
 * Last modified  : 2020-03-22 14:57:05
 *
 * @name CardManager
 * Creates a Card with a 'insert Before', 'insert after' and 'delete' buttons
 * @class
 */
class CardManager {
  constructor(parent) {
    this.parent = parent;
  }

  buildCard() {
    let highest = 0;
    const cards = Array.from(document.querySelectorAll(".card p"));
    if (cards.length > 0) {
      highest = Math.max.apply(
        Math,
        cards.map(function (o) {
          return parseInt(o.getAttribute("data-id"));
        })
      );
    }
    highest++;
    let divClassName = "card";
    let div = document.createElement("div");
    div.className = divClassName;

    let p = document.createElement("p");
    p.id = "p-" + highest;
    p.setAttribute("data-id", highest);
    p.appendChild(document.createTextNode(highest));
    div.appendChild(
      this.createButton("Insert Before", "btn btn-before", this.insertBefore)
    );
    div.appendChild(
      this.createButton("Insert After", "btn btn-after", this.insertAfter)
    );
    div.appendChild(this.createButton("Delete", "btn btn-delete", this.delete));
    div.appendChild(p);
    return div;
  }

  insertBefore(event) {
    let parentNode = event.target.parentElement;
    let card = new CardManager();
    parentNode.parentNode.insertBefore(card.buildCard(), parentNode);
  }

  insertAfter(event) {
    let parentNode = event.target.parentElement;
    let card = new CardManager();
    parentNode.parentNode.insertBefore(
      card.buildCard(),
      parentNode.nextSibling
    );
  }

  delete(event) {
    let parent = event.target.parentElement;
    let container = parent.parentElement;
    container.removeChild(parent);
    
    return true;
  }

  createButton(textContent, className, callback) {
    let btn = document.createElement("button");
    btn.textContent = textContent;
    btn.className = className;
    btn.addEventListener("click", callback);
    return btn;
  }
}

export default CardManager;
