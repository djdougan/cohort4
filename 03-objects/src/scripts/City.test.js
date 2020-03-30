import { City } from './City';


test("Test: Show output should be \"name, latitude, longitude, population\"", () => {
    const calgary = new City("Calgary", 51.049999, -114.066666, 1239220);
    expect(calgary.show()).toBe("Calgary, 51.049999, -114.066666, 1239220");
});

test("Test: Show output should be \"name, latitude, longitude, population\"", () => {
    const edmonton = new City("Edmonton", 53.631611, -113.323975, 932546);
    expect(edmonton.show()).toBe("Edmonton, 53.631611, -113.323975, 932546");
});

test("Test: Show output should be \"name, latitude, longitude, population\"", () => {
    const london = new City("Edmonton", 51.509865, -0.118092, 8908081);
    expect(london.show()).toBe("Edmonton, 51.509865, -0.118092, 8908081");
});


// Test moveIn()
test("Test: moveIn() should add to current population", () => {
    const calgary = new City("Calgary", 51.049999, -114.066666, 1239220);
    expect(calgary.movedIn(1234)).toBe(1240454);
});

test("Test: moveIn() should add to current population", () => {
    const edmonton = new City("Edmonton", 53.631611, -113.323975, 932546);
    expect(edmonton.movedIn(3323)).toBe(935869);
});

test("Test: moveIn() should add to current population", () => {
    const london = new City("London", 51.509865, -0.118092, 8908081);
    expect(london.movedIn(8765)).toBe(8916846);
});

test("Test: moveIn() should add to current population", () => {
    // test strings pa
    const tokyo = new City("Tokyo", 35.652832, 139.839478, 13929286);
    expect(tokyo.movedIn('abc')).toBe(13929286);
});


// Test moveOut()
test("Test: moveOut should subtract to current population", () => {
    const calgary = new City("Calgary", 51.049999, -114.066666, 1239220);
    expect(calgary.movedOut(1234)).toBe(1237986);
});

test("Test: moveOut should subtract to current population", () => {
    const edmonton = new City("Edmonton", 53.631611, -113.323975, 932546);
    expect(edmonton.movedOut(3323)).toBe(929223);
});

test("Test: moveOut should subtract to current population", () => {
    const london = new City("London", 51.509865, -0.118092, 8908081);
    expect(london.movedOut(8765)).toBe(8899316);
});

test("Test: movOut should subtract to current population", () => {
    // test strings pa
    const tokyo = new City("Tokyo", 35.652832, 139.839478, 13929286);
    expect(tokyo.movedOut('abc')).toBe(13929286);
});

// Test howBig();
test("Test: howBig() City – a population > 100,000", () => {
    const redDeer = new City("Red Deer", 52.268112, -113.811241, 100418);
    expect(redDeer.howBig()).toBe("City");
});
test("Test: howBig() Large town – a large town has a population of 20,000 to 100,000", () => {
    const airdrie = new City("Airdrie", 51.292641, -114.008858, 61581);
    expect(airdrie.howBig()).toBe('Large Town');
});
test("Test: howBig() Town – a town has a population of 1,000 to 20,000", () => {
    const carstairs = new City("Carstairs", 51.565750, -114.105080, 4077);
    expect(carstairs.howBig()).toBe("Town");
});
test("Test: howBig() Village – larger than a hamlet but smaller than a town", () => {

    //  Acadia No. 34, Municipal district [Census subdivision], Alberta
    const acadia = new City("Acadia", 51.602552, -112.517493, 493);
    expect(acadia.howBig()).toBe("Village");

});
test("Test: howBig() Hamlet – population 1 - 100", () => {
    const bottrel = new City("Bottrel", 51.4012150618, 114.468764792, 5);
    expect(bottrel.howBig()).toBe("Hamlet");

});