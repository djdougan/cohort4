/**
 * Copyright (c) 2020
 *
 * @summary Working with Cards
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 110 exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-08 07:30:00
 * Last modified  : 2020-03-22 14:57:05
 *
 * @name Card
 * Creates a Card with a 'insert Before', 'insert after' and 'delete' buttons
 * @class
 */
class Card {
  /**
   * @description constructor takes a node "body"
   */
  constructor(total) {
    this.count = total;
  }

  /**
   * @description Builds and returns a Card.
   * @name buildCard
   * @returns {HTMLDivElement} html div container with 3 buttons and a time stamp
   */
  buildCard() {
    this.count;
    let divClassName = "idCard";
    let div = document.createElement("div");
    div.className = divClassName;

    let d = new Date();
    let p = document.createElement("p");
    p.appendChild(
      document.createTextNode(d.toLocaleTimeString() + " " + this.count)
    );
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

  /**
   * @description Insert a element before
   * @name InsertBefore
   * @param {event} event -- Event
   */
  insertBefore(event) {
    let parentNode = event.target.parentElement;
    let card = new Card(total);
    let d = new Date();
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(d.toLocaleTimeString()));
    parentNode.parentNode.insertBefore(card.buildCard(), parentNode);
  }

  /**
   * @description Insert a element After
   * @name InsertAfter
   * @param {event} event -- Event
   */
  insertAfter(event) {
    let parentNode = event.target.parentElement;
    let card = new Card(total);
    let d = new Date();
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(d.toLocaleTimeString()));
    parentNode.parentNode.insertBefore(
      card.buildCard(p),
      parentNode.nextSibling
    );
  }

  /**
   * @description deletes Card "parent of button"
   * @name delete
   * @param {string} event -- Event
   */
  delete(event) {
    let parent = event.target.parentElement;
    let container = parent.parentElement;
    container.removeChild(parent);
    return "success";
  }

  /**
   * @description creates a button
   * @name createButton
   * @param {string} textContent -- text on the button
   * @param {string} className -- the name(s) of the class
   * @param {function} callback -- callback function to be passed to event listener
   */
  createButton(textContent, className, callback) {
    let btn = document.createElement("button");
    btn.textContent = textContent;
    btn.className = className;
    btn.addEventListener("click", callback);
    return btn;
  }
}

export default Card;
