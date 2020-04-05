import Community from "./Community";
import City from "./City";


describe('Contains tests for Community.createCity()', () => {

    test("Test: Should be 14 after population 10 + 4", () => {
        const comm = new Community();
        let A = comm.createCity("A", 5, -2, 10);
        expect(A.show()).toEqual(
            {
                name: "A",
                latitude: 5,
                longitude: -2,
                population: 10
            }
        );
        let B = comm.createCity("B", 2, 5, 4)
        expect(B.show()).toEqual(
            {
                name: "B",
                latitude: 2,
                longitude: 5,
                population: 4
            }
        );
        expect(comm.getPopulation()).toBe(14);

    });


    test("Test: Should be 14 after population strings 10 + 4", () => {
        const comm = new Community();
        let A = comm.createCity("A", 5, -2, "10");
        expect(A.show()).toEqual(
            {
                name: "A",
                latitude: 5,
                longitude: -2,
                population: 10
            }
        );
        let B = comm.createCity("B", 2, 5, "4")
        expect(B.show()).toEqual(
            {
                name: "B",
                latitude: 2,
                longitude: 5,
                population: 4
            }
        );
        expect(comm.getPopulation()).toBe(14);


    });

    test("Test: Should throw a error if non numeric population", () => {
        const comm = new Community();
        expect(() => {
            let B = comm.createCity("B", 2, 5, "OO") // oh's         
        }).toThrow();


    });

    test("Test: Should throw error if latitude is less than -90", () => {
        let com = new Community();
        expect(() => {
            com.createCity("A", -91, 1, 1);
        }).toThrow();
    }); // Test: Should throw error if latitude is less than -180
    test("Test: Should throw error if latitude is greater than 90", () => {
        let com = new Community();
        expect(() => {
            com.createCity("A", 91, 1, 1);
        }).toThrow();
    }); // Test: Should throw error if latitude is greater than 180

    test("Test: Should throw error if longitude is less than -180", () => {
        let com = new Community();
        expect(() => {
            com.createCity("A", 1, -181, 1);
        }).toThrow();
    }); // Test: Should throw error if longitude is less than -90

    test("Test: Should throw error if longitude is greater than 180", () => {
        let com = new Community();
        expect(() => {
            com.createCity("A", 1, 181, 1);
        }).toThrow();
    }); // Test: Should throw error if longitude is greater than 90
}); // Contains tests for Community.createCity()


describe("contains test Community.deleteCity(city)", () => {

    test("Test: Should delete city and return city if exist", () => {
        const com = new Community();
        let A = com.createCity("A", 1, 1, 1);
        let B = com.createCity("B", 2, 2, 2);
        // population should be 3
        expect(com.getPopulation()).toBe(3);

        expect(com.deleteCity(A.name)).toEqual({
            name: 'A',
            latitude: 1,
            longitude: 1,
            population: 1
        });
        expect(com.getPopulation()).toBe(2);
        expect(com.deleteCity(B.name)).toEqual({
            name: 'B',
            latitude: 2,
            longitude: 2,
            population: 2
        });
        // there should be 0 population
        expect(com.getPopulation()).toBe(0);

    }); //Test: Should delete city and return city if exist


    test("Test: Should throw exception if city does not exist", () => {
        const com = new Community();

        com.createCity("A", 1, 1, 1);
        com.createCity("B", 2, 2, 2);
        com.createCity("C", 3, 3, 3);
        // delete city C and check if 
        expect(
            com.deleteCity('C')
        ).not.toContain(
            {
                name: 'C',
                latitude: "3",
                longitude: '3',
                population: "3"
            }
        );

        expect(() => {
            com.deleteCity('C')
        }).toThrow();
    }); //Test: Should throw exception if city does not exist

});

describe("contains test Community.whichSphereNS(city)", () => {

    test("Test: Should be Northern or Southern", () => {
        const com = new Community();
        com.createCity("A", 1, 1, 1);
        expect(com.whichSphereNS('A')).toEqual("Northern Hemisphere");
        com.createCity("B", -2, -2, 2);
        expect(com.whichSphereNS('B')).toBe("Southern Hemisphere");
    });// Test: Should be Northern or Southern

    test("Test: Should throw error if city doesn't exist", () => {
        const com = new Community();
        com.createCity("A", 1, 1, 1);
        com.createCity("B", -2, -2, 2);
        expect(() => {
            com.whichSphereNS('C')
        }).toThrow();
    });// Test: Should throw error if city doesn't exist

    test("Test: Should throw error if number passed as name", () => {
        const com = new Community();
        com.createCity("A", 1, 1, 1);
        com.createCity("B", -2, -2, 2);
        expect(() => {
            com.whichSphereNS(1)
        }).toThrow();
    }); // Test: Should throw error if number passed as name

}); // contains test Community.whichSphereNS(city)

describe("contains test Community.whichSphereEW(city)", () => {


    test("Test: Should be Eastern or Western", () => {
        const com = new Community();
        com.createCity("A", 1, 1, 1);
        expect(com.whichSphereEW('A')).toEqual("Eastern Hemisphere");
        com.createCity("B", -2, -2, 2);
        expect(com.whichSphereEW('B')).toBe("Western Hemisphere");
    });// Test: Should be Eastern or Western

    test("Test: Should throw error if city doesn't exist", () => {
        const com = new Community();
        com.createCity("A", 1, 1, 1);
        com.createCity("B", -2, -2, 2);
        expect(() => {
            com.whichSphereEW('C')
        }).toThrow();
    });// Test: Should throw error if city doesn't exist

    test("Test: Should throw error if number passed as name", () => {
        const com = new Community();
        com.createCity("A", 1, 1, 1);
        com.createCity("B", -2, -2, 2);
        expect(() => {
            com.whichSphereEW(1)
        }).toThrow();
    }); // Test: Should throw error if number passed as name

});


describe("Contains test Community.getMostNorthern()", () => {


    test('Test: Should return city with largest latitude value', () => {
        const com = new Community();

        com.createCity("A", 1, 1, 1);
        com.createCity("B", 2, 2, 2);
        com.createCity("C", -1, -1, -1);
        expect(com.getMostNorthern()).toEqual({ name: "B", latitude: 2, longitude: 2, population: 2 });
    }); Test: Should return city with largest latitude value

}); //Contains test Community.getMostNorthern()

describe("Contains test Community.getMostSouthern()", () => {


    test('Test: Should return city with smallest latitude value', () => {
        const com = new Community();

        com.createCity("A", 1, 1, 1);
        com.createCity("B", 2, 2, 2);
        com.createCity("C", -1, -1, -1);
        expect(com.getMostSouthern()).toEqual({ name: "C", latitude: -1, longitude: -1, population: -1 });
    }); //Test: Should return city with smallest latitude value

}); //Contains test Community.getMostSouthern()


describe("Contains tests for getPopulation", () => {

    test("Test: should be 3", () => {
        const community = new Community();

        let A = community.createCity("A", 1, 1, 1)
        expect(community.getPopulation()).toEqual(1);
        let B = community.createCity("B", 2, 2, 2);
        expect(community.getPopulation()).toBe(3);

    }); // Test: should be 3


}); //describe: Contains tests for getPopulation
