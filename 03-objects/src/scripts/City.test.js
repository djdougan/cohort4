import City from './City';
import Community from './Community';

describe('Contains test for city constructor and show', () => {

    test("Test: Show output should be JSON", () => {
        const com = new Community();
        let A = com.createCity("A", 1, 1, 1);
        expect(A.show()).toEqual({ "name": "A", "latitude": 1, "longitude": 1, "population": 1 });
        let B = com.createCity("B", 2, 2, 2);
        expect(B.show()).toEqual({ "name": "B", "latitude": 2, "longitude": 2, "population": 2 });

        let C = com.createCity("C", "1", "1", "1");
        expect(C.show()).toEqual({ "name": "C", "latitude": 1, "longitude": 1, "population": 1 });
        let D = com.createCity("D", "2", "2", "2");
        expect(D.show()).toEqual({ "name": "D", "latitude": 2, "longitude": 2, "population": 2 });


    });
    test("Test: Should Throw Error, with Invalid Data", () => {

        // 
        const com = new Community();
        expect(() => {
            let E = com.createCity(1, 1, 1, 1);
            E.show()
        }).toThrowError();

        expect(() => {
            let F = com.createCity("2", "2", "2", "2");
            F.show()
        }).toThrowError();

        expect(() => {
            let F = com.createCity("A", "B", "C", "D");
            F.show()
        }).toThrowError();
    });




});

describe('Contains test for moveIn', () => {

    // Test moveIn()
    test("Test: moveIn(1) should add to current population", () => {
        const com = new Community();
        let A = com.createCity("a", 1, 2, 1);
        let B = com.createCity("b", 2, 3, 2);
        A.movedIn(1);
        expect(com.getPopulation()).toBe(4);
        B.movedIn(2);
        expect(com.getPopulation()).toBe(6);
    });


    test("Test: moveIn('1') should add to current population", () => {
        const com = new Community();
        let A = com.createCity("a", 1, 2, 1);
        let B = com.createCity("b", 2, 3, 2);
        A.movedIn("1");
        expect(com.getPopulation()).toBe(4);
        B.movedIn("2");
        expect(com.getPopulation()).toBe(6);
    });

    test("Test: moveIn('a') should add to current population", () => {

        const com = new Community();
        let A = com.createCity("a", 1, 2, 1);
        let B = com.createCity("b", 2, 3, 2);
        expect(() => {
            com.getPopulation()
            A.movedIn("a");
            com.getPopulation()
        }).toThrow();
    });
});

describe('Contains tests for moveOut', () => {


    // Test moveOut()
    test("Test: moveOut(5) should subtract to current population", () => {
        const com = new Community();
        let A = com.createCity("a", 1, 2, 10);
        let B = com.createCity("b", 2, 3, 5);
        A.movedOut(5);
        expect(com.getPopulation()).toBe(10);
        B.movedOut(4);
        expect(com.getPopulation()).toBe(6);
    });
    test("Test: moveOut('1') should add to current population", () => {
        const com = new Community();
        let A = com.createCity("a", 1, 2, 10);
        let B = com.createCity("b", 2, 3, 5);
        A.movedOut("5");
        expect(com.getPopulation()).toBe(10);
        B.movedOut("4");
        expect(com.getPopulation()).toBe(6);
    });

    test("Test: moveOut('a') should add to current population", () => {


        const com = new Community();
        let A = com.createCity("a", 1, 2, 10);
        let B = com.createCity("b", 2, 3, 5);
        expect(() => {
            A.movedOut("a");
            com.getPopulation()
        }).toThrow();
    });

});

//     describe('Contains a test for howBig()', () => {

//         // Test howBig();
//         test("Test: howBig() City – a population > 100,000", () => {
//             const redDeer = new City("Red Deer", 52.268112, -113.811241, 100418);
//             expect(redDeer.howBig()).toBe("City");
//         });
//         test("Test: howBig() Large town – a large town has a population of 20,000 to 100,000", () => {
//             const airdrie = new City("Airdrie", 51.292641, -114.008858, 61581);
//             expect(airdrie.howBig()).toBe('Large Town');
//         });
//         test("Test: howBig() Town – a town has a population of 1,000 to 20,000", () => {
//             const carstairs = new City("Carstairs", 51.565750, -114.105080, 4077);
//             expect(carstairs.howBig()).toBe("Town");
//         });
//         test("Test: howBig() Village – larger than a hamlet but smaller than a town", () => {

//             //  Acadia No. 34, Municipal district [Census subdivision], Alberta
//             const acadia = new City("Acadia", 51.602552, -112.517493, 493);
//             expect(acadia.howBig()).toBe("Village");

//         });
//         test("Test: howBig() Hamlet – population 1 - 100", () => {
//             const bottrel = new City("Bottrel", 51.4012150618, 114.468764792, 5);
//             expect(bottrel.howBig()).toBe("Hamlet");

//         });

//     });

//     describe('Comparison test', () => {
//         // write a test that creates a city “myCity”
//         // make myFav = myCity
//         // check the population of both references
//         // add some population to one of the references
//         // check the population of both references
//         // what happened and why
//         // create a test to make sure it keeps working
//         test('should be equal', () => {
//             const myCity = new City("Calgary", 51.049999, -114.066666, 1239220);
//             const myFav = myCity;
//             expect(myCity.population).toEqual(myFav.population);
//             myCity.movedIn(20);
//             expect(myCity.population).toEqual(myFav.population);
//             myFav.movedIn(100);
//             expect(myCity.population).toEqual(myFav.population);

//             // myCity and myFav both point to the same place in memory
//             // because objects are reference types 
//         });


//     });

