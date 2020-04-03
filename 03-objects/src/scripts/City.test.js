import { City } from './City';

describe('Contains test for city constructor and show', () => {

    test("Test: Show output should be \"name, latitude, longitude, population\"", () => {
        const calgary = new City("Calgary", 51.049999, -114.066666, 1239220);
        expect(calgary.show()).toEqual({
            "name": "Calgary", "latitude": 51.049999, "longitude": -114.066666, "population": 1239220
        });
    });

    test("Test: Show output should be \"name, latitude, longitude, population\"", () => {
        const edmonton = new City("Edmonton", 53.631611, -113.323975, 932546);
        expect(edmonton.show()).toEqual({
            "name": "Edmonton", "latitude": 53.631611, "longitude": -113.323975, "population": 932546
        });
    });

    test("Test: Show output should be \"name, latitude, longitude, population\"", () => {
        const london = new City("Edmonton", 51.509865, -0.118092, 8908081);
        expect(london.show()).toEqual({
            "name": "Edmonton", "latitude": 51.509865, "longitude": -0.118092, "population": 8908081
        });
    });

});

describe('Contains test for moveIn', () => {

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
        const london = new City("London", 51.509865, -0.118092, 8908081);
        expect(london.movedIn("8765")).toBe(8916846);
    });

    test("Test: moveIn() should add to current population", () => {
        // test strings pa
        try {
            const tokyo = new City("Tokyo", 35.652832, 139.839478, 13929286);
            tokyo.movedIn('abc');
        } catch (e) {
            expect(e).toEqual(Error('The value abc is not a valid number.'));
        }
    });

});

describe('Contains test for moveOut', () => {


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
        try {
            const tokyo = new City("Tokyo", 35.652832, 139.839478, 13929286);
            let pop = tokyo.movedOut('www');
        } catch (e) {
            expect(e).toEqual(Error('The value www is not a valid number.'))
        }
    });

});
describe('Contains a test for howBig()', () => {

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

});

describe('Comparison test', () => {
    // write a test that creates a city “myCity”
    // make myFav = myCity
    // check the population of both references
    // add some population to one of the references
    // check the population of both references
    // what happened and why
    // create a test to make sure it keeps working
    test('should be equal', () => {
        const myCity = new City("Calgary", 51.049999, -114.066666, 1239220);
        const myFav = myCity;
        expect(myCity.population).toEqual(myFav.population);
        myCity.movedIn(20);
        expect(myCity.population).toEqual(myFav.population);
        myFav.movedIn(100);
        expect(myCity.population).toEqual(myFav.population);

        // myCity and myFav both point to the same place in memory
        // because objects are reference types 
    });

});

