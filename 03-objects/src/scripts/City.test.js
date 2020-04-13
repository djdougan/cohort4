import Community from './Community';
import City from './City';


describe('Contains test for city constructor and show', () => {

    test("Test: Show output should be JSON", () => {
        const com = new Community();
        let A = com.createCity(1, "A", 1, 1, 1);
        expect(A.show()).toEqual('{"key":1,"name":"A","latitude":1,"longitude":1,"population":1}');

        let B = com.createCity(2, "B", 2, 2, 2);
        expect(B.show()).toEqual('{"key":2,"name":"B","latitude":2,"longitude":2,"population":2}');

        let C = com.createCity(3, "C", "1", "1", "1");
        expect(C.show()).toEqual('{"key":3,"name":"C","latitude":1,"longitude":1,"population":1}');
        let D = com.createCity(4, "D", "2", "2", "2");
        expect(D.show()).toEqual('{"key":4,"name":"D","latitude":2,"longitude":2,"population":2}');


    });

    test("Test: Should Throw Error, with Invalid Data", () => {

        // 
        const com = new Community();
        expect(() => {
            // second value should be a string
            let E = com.createCity(1, 1, 1, 1, 1);
            E.show();
        }).toThrowError();

        expect(() => {
            // last 3 args should be numberic
            let F = com.createCity(1, "2", "2", "2", "2");
            F.show();
        }).toThrowError();

        expect(() => {
            // last 3 items should be numbers
            let F = com.createCity(1, "A", "B", "C", "D");
            F.show();
        }).toThrowError();
    });
});


describe('Contains test for moveIn', () => {

    // Test moveIn()
    test("Test: moveIn(1) should add to current population", () => {
        const com = new Community();
        let A = com.createCity(1, "a", 1, 2, 1);
        let B = com.createCity(2, "b", 2, 3, 2);
        expect(com.getPopulation()).toBe(3);
        A.movedIn(1);
        expect(com.getPopulation()).toBe(4);
        B.movedIn(2);
        expect(com.getPopulation()).toBe(6);
    });


    test("Test: moveIn('1') should add to current population", () => {
        const com = new Community();
        let A = com.createCity(1, "a", 1, 2, 1);
        let B = com.createCity(2, "b", 2, 3, 2);
        A.movedIn("1");
        expect(com.getPopulation()).toBe(4);
        B.movedIn("2");
        expect(com.getPopulation()).toBe(6);
    });

    test("Test: moveIn('a') should add to current population", () => {

        const com = new Community();
        let A = com.createCity(1, "a", 1, 2, 1);
        let B = com.createCity(2, "b", 2, 3, 2);
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
        let A = com.createCity(1, "a", 1, 2, 10);
        let B = com.createCity(2, "b", 2, 3, 5);
        A.movedOut(5);
        expect(com.getPopulation()).toBe(10);
        B.movedOut(4);
        expect(com.getPopulation()).toBe(6);
    });
    test("Test: moveOut('1') should add to current population", () => {
        const com = new Community();
        let A = com.createCity(1, "a", 1, 2, 10);
        let B = com.createCity(2, "b", 2, 3, 5);
        A.movedOut("5");
        expect(com.getPopulation()).toBe(10);
        B.movedOut("4");
        expect(com.getPopulation()).toBe(6);
    });

    test("Test: moveOut('a') should add to current population", () => {


        const com = new Community();
        let A = com.createCity(1, "a", 1, 2, 10);
        let B = com.createCity(2, "b", 2, 3, 5);
        expect(() => {
            A.movedOut("a");
            com.getPopulation()
        }).toThrow();
    });

});

describe('Contains test for city for moveIn', () => {
    test('should be 10', () => {
        const com = new Community();
        let A = com.createCity(1, "A", 1, 1, 1);
        A.movedIn(2);
        expect(com.getPopulation()).toBe(3);
        A.movedIn(1);
        expect(com.getPopulation()).toBe(4);
    });
});
describe('Contains test for city for moveOut', () => {
    test('should be 10', () => {
        const com = new Community();
        let A = com.createCity(1, "A", 1, 1, 10);
        A.movedOut(2);
        expect(com.getPopulation()).toBe(8);
        A.movedOut(1);
        expect(com.getPopulation()).toBe(7);
    });
});



describe('Contains a test for howBig()', () => {

    // Test howBig();
    test("Test: howBig() City – a population > 100,000", () => {
        let com = new Community();

        const A = com.createCity(1, "A", 1, 1, 100001);
        expect(A.howBig()).toBe("City");
    });
    test("Test: howBig() Large town – a large town has a population of 20,000 to 100,000", () => {
        let com = new Community();
        const A = com.createCity(1, "A", 1, 1, 90000);
        expect(A.howBig()).toBe('Large Town');
    });
    test("Test: howBig() Town – a town has a population of 1,000 to 20,000", () => {
        let com = new Community();
        const A = com.createCity(1, "A", 1, 1, 15000);
        expect(A.howBig()).toBe("Town");
    });
    test("Test: howBig() Village – larger than a hamlet but smaller than a town", () => {
        let com = new Community();
        const A = com.createCity(1, "A", 1, 1, 500);
        expect(A.howBig()).toBe("Village");

    });
    test("Test: howBig() Hamlet – population 1 - 100", () => {
        let com = new Community();
        const A = com.createCity(1, "A", 1, 1, 50);
        expect(A.howBig()).toBe("Hamlet");

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

        const myCity = new City(1, "A", 1, 1, 1);
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