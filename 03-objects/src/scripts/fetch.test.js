import request from './fetch'
const fetch = require('node-fetch');

describe('Contains test for request.getFirstName(data)', () => {

    test('should be Anabela ', () => {
        expect(request.getFirstName(data[0])).toBe("Anabela");
    });
});



describe('Contains test for request.getAllFirstNames(data)', () => {
    test('should be an array of firstNames ', () => {
        expect(request.getAllFirstNames(data)).toEqual(
            ["Anabela", "Silvian", "Ica De la", "Vlastimil", "Ľudovít", "Basarab", "Sita", "Zemfira", "Sylwester", "Kathy"]
        );
    });
});


describe('Contains test for request.postData(url = "", data = {})', () => {
    const me =
    {
        name: "Douglas",
        surname: "Dougan",
        gender: "Male",
        region: "Alberta"
    };

    test('fetchPerson()', async () => {
        expect(
            request.fetchUsers(request.url)).toBeTruthy();
    });
});


const data = [
    {
        "name": "Anabela",
        "surname": "Butnariu",
        "gender": "female",
        "region": "Romania"
    },
    {
        "name": "Silvian",
        "surname": "Florianu",
        "gender": "male",
        "region": "Romania"
    },
    {
        "name": "Ica De la",
        "surname": "Marina",
        "gender": "female",
        "region": "Romania"
    },
    {
        "name": "Vlastimil",
        "surname": "Kuba",
        "gender": "male",
        "region": "Slovakia"
    },
    {
        "name": "Ľudovít",
        "surname": "Polák",
        "gender": "male",
        "region": "Slovakia"
    },
    {
        "name": "Basarab",
        "surname": "Cucu",
        "gender": "male",
        "region": "Romania"
    },
    {
        "name": "Sita",
        "surname": "Shahi",
        "gender": "female",
        "region": "Nepal"
    },
    {
        "name": "Zemfira",
        "surname": "Əbdülzadə",
        "gender": "female",
        "region": "Azerbaijan"
    },
    {
        "name": "Sylwester",
        "surname": "Kubiak",
        "gender": "male",
        "region": "Poland"
    },
    {
        "name": "Kathy",
        "surname": "Bates",
        "gender": "female",
        "region": "United States"
    }
];