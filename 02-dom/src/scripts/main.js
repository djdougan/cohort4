import PageManager from "./PageManager.js";
import CardManager from "./CardManager.js";

let card = new CardManager();
const btnPrependTo = document.querySelector("#btnPrependTo");
const btnAppendTo = document.querySelector("#btnAppendTo");
const btnShow = document.querySelector("#btnShow");
const btnDelete = document.querySelector("#btnDelete");
const btnCard = document.getElementById("btnCard");
const cardContainer = document.querySelector("#card-container");
// let total = 0;

const olList = document.querySelector("#olList");

btnPrependTo.addEventListener("click", function (e) {
  let pm = new PageManager();
  let count = olList.children.length + 1;

  let element = pm.createListElement(
    "Item " + count,
    "item" + count,
    "lstItem"
  );
  pm.prependElement(element, olList);

  e.preventDefault();
});

btnAppendTo.addEventListener("click", function (e) {
  let pm = new PageManager();
  let count = olList.children.length + 1;

  let element = pm.createListElement(
    "Item " + count,
    "item" + count,
    "lstItem"
  );
  pm.appendElement(element, olList);
  e.preventDefault();
});

btnShow.addEventListener("click", function (e) {
  if (btnShow.value === "Show") {
    btnShow.value = "Hide";
    olList.classList.remove("hidden");
  } else {
    btnShow.value = "Show";
    olList.classList.add("hidden");
  }
  e.preventDefault();
});
btnDelete.addEventListener("click", function (e) {
  let pm = new PageManager();
  let li = pm.getLastListItem(olList);
  pm.deleteListElement(olList, li.dataset.uuid);
  e.preventDefault();
});

olList.addEventListener("click", function (e) {
  e.target;
  e.preventDefault();
});

btnCard.addEventListener("click", (e) => {
  cardContainer.appendChild(card.buildCard(total));
  e.preventDefault();
});
