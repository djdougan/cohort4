import Card from './CardManager';


test("Test: Build Card", () => {
    let card = new Card();
    let d = new Date();
    let div = card.buildCard(d.toLocaleTimeString());
    expect(div).toBeTruthy();

});

test("Does The insertBefore work", () => {
    let card = new Card();
    let d = new Date();
    let card1 = card.buildCard(d.toLocaleTimeString());
    // create a test Container and add a card to it
    const testContainer = document.createElement("div");
    testContainer.appendChild(card1);
    expect(testContainer.children.length).toBe(1);
    // get insertBefore and fire the click event
    let btnBefore = testContainer.querySelector("button.btn-before");
    btnBefore.click()
    // there should be 2
    expect(testContainer.children.length).toBe(2);
});

test("Does The insertAfter work", () => {
    let card = new Card();
    let d = new Date();
    let card1 = card.buildCard(d.toLocaleTimeString());
    // create a test Container and add a card to it
    const testContainer = document.createElement("div");
    testContainer.appendChild(card1);
    expect(testContainer.children.length).toBe(1);
    // get insertAfter and fire the click event
    let btnAfter = testContainer.querySelector("button.btn-after");
    btnAfter.click()
    // there should be 2
    expect(testContainer.children.length).toBe(2);
});

test("Does The Delete work", () => {
    let card = new Card();
    let d = new Date();
    let card1 = card.buildCard(d.toLocaleTimeString());
    // create a test Container and add a card to it
    const testContainer = document.createElement("div");
    testContainer.appendChild(card1);
    expect(testContainer.children.length).toBe(1);
    // get delete and fire the click event
    let btnDelete = testContainer.querySelector("button.btn-delete");
    btnDelete.click()
    // there should be 0
    expect(testContainer.children.length).toBe(0);

});


