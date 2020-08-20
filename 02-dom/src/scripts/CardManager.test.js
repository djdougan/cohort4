import Card from "./CardManager";
import 

test("Test: Build Card", () => {
  let card = new Card();
  let div = card.buildCard();
  expect(div).toBeTruthy();
});

test("Does The insertBefore work", () => {
  let card = new Card();
  let d = new Date();
  let card1 = card.buildCard();
  // create a test Container and add a card to it
  const testContainer = document.createElement("div");
  testContainer.appendChild(card1);
  expect(testContainer.children.length).toBe(1);
  // get insertBefore and fire the click event
  let btnBefore = testContainer.querySelector("button.btn-before");
  btnBefore.click();
  // there should be 2
  expect(testContainer.children.length).toBe(2);
});

test("Does The insertAfter work", () => {
  let card = new Card();
  let d = new Date();
  let card1 = card.buildCard();
  // create a test Container and add a card to it
  const testContainer = document.createElement("div");
  testContainer.appendChild(card1);
  expect(testContainer.children.length).toBe(1);
  // get insertAfter and fire the click event
  let btnAfter = testContainer.querySelector("button.btn-after");
  btnAfter.click();
  // there should be 2
  expect(testContainer.children.length).toBe(2);
});

test("Does The Delete work", () => {
  let cm = new Card();
  let card = cm.buildCard();
  // create a test Container and add a card to it
  const testContainer = document.createElement("div");
  testContainer.appendChild(card);
  expect(testContainer.children.length).toBe(1);
  // get delete and fire the click event
  let  deleteButtons = testContainer.querySelectorAll(".btn-delete");
  deleteButtons[0].click();

  expect(testContainer.children.length).toBe(0)
});