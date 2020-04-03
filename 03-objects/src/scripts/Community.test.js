import { City, Community } from "./City";


describe('contains test Community.createCity(city)', () => {
    const community = new Community();
    test("Test: Community.createCity('Calgary', 51.049999, -114.066666, 1239220)", () => {
        expect(community.createCity("Calgary", 51.049999, -114.066666, 1239220))
            .toMatchObject({
                "name": "Calgary",
                "latitude": 51.049999,
                "longitude": -114.066666,
                "population": 1239220
            }
            ) // .toContain
    });

    test("Test: Community.createCity('Edmonton', 53.631611, -113.323975, 932546)", () => {
        expect(community.createCity("Edmonton", 53.631611, -113.323975, 932546))
            .toMatchObject({
                name: "Edmonton",
                latitude: 53.631611,
                longitude: -113.323975,
                population: 932546
            }
            ) // .toContain
    }); // test
});

describe("contains test Community.getPopulation()", () => {

    const community = new Community();

    test("Test: Community.getPopulation()", () => {
        community.createCity("Calgary", 51.049999, -114.066666, 1239220)
        expect(community.getPopulation()).toEqual(1239220);
    });

    test("Test: Community.getPopulation()", () => {
        community.createCity("Edmonton", 53.631611, -113.323975, 932546);
        expect(community.getPopulation()).toBe(2171766);
    });

    test("Test: Community.getPopulation()", () => {
        community.createCity("Red Deer", 52.268112, -113.811241, 100418);
        expect(community.getPopulation()).toBe(2272184);
    });

    test("Test: Community.getPopulation()", () => {
        community.createCity("Airdrie", 51.292641, -114.008858, 61581);
        expect(community.getPopulation()).toBe(2333765);
    });

    test("Test: Community.getPopulation()", () => {
        community.createCity("Carstairs", 51.565750, -114.105080, 4077);
        expect(community.getPopulation()).toBe(2337842);
    });


    test("Test: Community.getPopulation()", () => {
        community.createCity("Acadia", 51.602552, -112.517493, 493);
        expect(community.getPopulation()).toBe(2338335);
    });


    test("Test: Community.getPopulation()", () => {
        community.createCity("Bottrel", 51.4012150618, -114.468764792, 5);
        expect(community.getPopulation()).toBe(2338340);
    });

}); // describe



describe("contains test Community.deleteCity(city)", () => {

    const community = new Community();

    community.createCity("Calgary", 51.049999, -114.066666, 1239220);
    community.createCity("Edmonton", 53.631611, -113.323975, 932546);
    community.createCity("Red Deer", 52.268112, -113.811241, 100418);
    community.createCity("Airdrie", 51.292641, -114.008858, 61581);
    community.createCity("Carstairs", 51.565750, -114.105080, 4077);
    community.createCity("Acadia", 51.602552, -112.517493, 493);
    community.createCity("Bottrel", 51.4012150618, -114.468764792, 5);

    test("Test: Community.deleteCity('Carstairs')", () => {
        expect(community.deleteCity('Carstairs')).not.toContainEqual({
            name: "Carstairs",
            latitude: 51.565750,
            longitude: -114.008858,
            population: 4077
        });
    });

    test("Test: Community.deleteCity('Red Deer')", () => {
        expect(community.deleteCity('Red Deer')).not.toContainEqual({
            name: "Red Deer",
            latitude: 52.268112,
            longitude: -113.811241,
            population: 100418
        });
    });

    test("Test: Community.deleteCity('Calgary')", () => {
        expect(community.deleteCity('Calgary')).not.toContainEqual({
            name: "Calgary",
            latitude: 51.049999,
            longitude: -114.066666,
            population: 1239220
        });
    });

    test("Test: Community.deleteCity('Edmonton')", () => {
        expect(community.deleteCity('Edmonton')).not.toContainEqual({
            name: "Edmonton",
            latitude: 53.631611,
            longitude: -113.323975,
            population: 932546
        });
    });

    test("Test: Community.deleteCity('Airdrie')", () => {
        expect(community.deleteCity('Airdrie')).not.toContainEqual({
            name: "Airdrie",
            latitude: 51.292641,
            longitude: -114.008858,
            population: 61581
        });
    });


    test("Test: Community.deleteCity('Bottrel')", () => {
        expect(community.deleteCity('Bottrel')).not.toContainEqual({
            name: "Bottrel",
            latitude: 51.4012150618,
            longitude: -114.468764792,
            population: 5
        });
    });


    test("Test: Community.deleteCity('Acadia')", () => {
        expect(community.deleteCity('Acadia')).not.toContainEqual({
            name: "Acadia",
            latitude: 51.602552,
            longitude: -112.517493,
            population: 493
        });
    });

});

describe("contains test Community.whichSphere(city)", () => {

    const community = new Community();

    community.createCity("Calgary", 51.049999, -114.066666, 1239220);
    community.createCity("Buenos Aires", -34.603722, -58.381592, 15057000);
    community.createCity("Tokyo", 35.652832, 139.839478, 13929286);
    community.createCity("Sydney", -33.865143, 151.209900, 5312163);
    community.createCity("Mexico City", 19.432608, -99.133209, 21672000);
    community.createCity("Mumbai", 19.076090, 72.877426, 20185000);
    community.createCity("Perm", 58.000000, 56.316666, 1067000);


    test("Test: Community.whichSphere('Calgary')", () => {
        expect(community.whichSphere('Calgary')).toBe("Northern Hemisphere");
    });

    test("Test: Community.whichSphere('Buenos Aires')", () => {
        expect(community.whichSphere('Buenos Aires')).toBe("Southern Hemisphere");
    });

    test("Test: Community.whichSphere('Perm')", () => {
        expect(community.whichSphere('Perm')).toBe("Northern Hemisphere");
    });

    test("Test: Community.whichSphere('Mumbai')", () => {
        expect(community.whichSphere('Mumbai')).toBe("Northern Hemisphere");
    });

    test("Test: Community.whichSphere('Mexico City')", () => {
        expect(community.whichSphere('Mexico City')).toBe("Northern Hemisphere");
    });

    test("Test: Community.whichSphere('Tokyo')", () => {
        expect(community.whichSphere('Tokyo')).toBe("Northern Hemisphere");
    });

});


describe("contains test Community.getMostNorthern()", () => {


    test('Test: Community.getMostNorthern() ', () => {
        const community = new Community();

        community.createCity("Calgary", 51.049999, -114.066666, 1239220);
        community.createCity("Buenos Aires", -34.603722, -58.381592, 15057000);
        community.createCity("Tokyo", 35.652832, 139.839478, 13929286);
        community.createCity("Sydney", -33.865143, 151.209900, 5312163);
        community.createCity("Mexico City", 19.432608, -99.133209, 21672000);
        community.createCity("Mumbai", 19.076090, 72.877426, 20185000);
        community.createCity("Perm", 58.000000, 56.316666, 1067000);

        expect(community.getMostNorthern()).toEqual({ name: "Perm", latitude: 58.000000, longitude: 56.316666, population: 1067000 });

    });


});

describe("contains test Community.getMostSouthern()", () => {

    const community = new Community();

    community.createCity("Calgary", 51.049999, -114.066666, 1239220);
    community.createCity("Buenos Aires", -34.603722, -58.381592, 15057000);
    community.createCity("Tokyo", 35.652832, 139.839478, 13929286);
    community.createCity("Sydney", -33.865143, 151.209900, 5312163);
    community.createCity("Mexico City", 19.432608, -99.133209, 21672000);
    community.createCity("Mumbai", 19.076090, 72.877426, 20185000);
    community.createCity("Perm", 58.000000, 56.316666, 1067000);

    expect(community.getMostSouthern()).toEqual({
        name: "Buenos Aires", latitude: -34.603722, longitude: -58.381592, population: 15057000
    });

});