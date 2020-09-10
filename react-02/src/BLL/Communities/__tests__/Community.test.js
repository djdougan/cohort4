import Community from "../Community";
import City from "../City";

describe("Contains tests for Community.createCity()", () => {
  test("Test: Should be 14 after population increased by 4", () => {
    const comm = new Community();
    let A = comm.createCity(1, "A", 1, 1, 10);
    expect(A.show()).toBe(
      '{"key":1,"name":"A","latitude":1,"longitude":1,"population":10}'
    );
    let B = comm.createCity(2, "B", 2, 2, 4);
    expect(B.show()).toBe(
      '{"key":2,"name":"B","latitude":2,"longitude":2,"population":4}'
    );
    expect(comm.getPopulation()).toBe(14);
  });

  test("Test: Should be 14 after population strings 10 + 4", () => {
    const comm = new Community();
    let A = comm.createCity(1, "A", 1, 1, "10");
    expect(A.show()).toBe(
      '{"key":1,"name":"A","latitude":1,"longitude":1,"population":10}'
    );
    let B = comm.createCity(2, "B", 2, 2, "4");
    expect(B.show()).toBe(
      '{"key":2,"name":"B","latitude":2,"longitude":2,"population":4}'
    );
    expect(comm.getPopulation()).toBe(14);
  });

  test("Test: Should throw a error if non numeric population", () => {
    const comm = new Community();
    expect(() => {
      let B = comm.createCity(2, "B", 2, 5, "OO"); // oh's
    }).toThrow();
  });

  test("Test: Should throw error if latitude is less than -90", () => {
    let com = new Community();
    expect(() => {
      com.createCity(1, "A", -91, 1, 1);
    }).toThrow();
  }); // Test: Should throw error if latitude is less than -180

  test("Test: Should throw error if latitude is greater than 90", () => {
    let com = new Community();
    expect(() => {
      com.createCity(1, "A", 91, 1, 1);
    }).toThrow();
  }); // Test: Should throw error if latitude is greater than 180

  test("Test: Should throw error if longitude is less than -180", () => {
    let com = new Community();
    expect(() => {
      com.createCity(1, "A", 1, -181, 1);
    }).toThrow();
  }); // Test: Should throw error if longitude is less than -90

  test("Test: Should throw error if longitude is greater than 180", () => {
    let com = new Community();
    expect(() => {
      com.createCity(1, "A", 1, 181, 1);
    }).toThrow();
  }); // Test: Should throw error if longitude is greater than 90
}); // Contains tests for Community.createCity()

describe("contains test Community.deleteCity(city)", () => {
  test("Test: Should delete city and return city if exist", () => {
    const com = new Community();
    let A = com.createCity(1, "A", 1, 1, 1);
    let B = com.createCity(2, "B", 2, 2, 2);
    // population should be 3
    expect(com.getPopulation()).toBe(3);

    expect(com.deleteCity(1)).toEqual({
      key: 1,
      name: "A",
      latitude: 1,
      longitude: 1,
      population: 1,
    });
    expect(com.getPopulation()).toBe(2);
    expect(com.deleteCity(2)).toEqual({
      key: 2,
      name: "B",
      latitude: 2,
      longitude: 2,
      population: 2,
    });
    // there should be 0 population
    expect(com.getPopulation()).toBe(0);
  }); //Test: Should delete city and return city if exist

  test("Test: Should throw exception if city does not exist", () => {
    const com = new Community();

    com.createCity(null, "A", 1, 1, 1);
    com.createCity(2, "B", 2, 2, 2);
    com.createCity(null, "C", 3, 3, 3);
    // delete city C and check if
    expect(com.deleteCity(3)).not.toContain({
      key: 3,
      name: "C",
      latitude: "3",
      longitude: "3",
      population: "3",
    });
    // try to delete C again
    expect(() => {
      com.deleteCity(3);
    }).toThrow();
  }); //Test: Should throw exception if city does not exist
});

describe("Contains test Community.getMostNorthern()", () => {
  test("Test: Should return city with largest latitude value", () => {
    const com = new Community();

    com.createCity(1, "A", 1, 1, 1);
    com.createCity(2, "B", 2, 2, 2);
    com.createCity(3, "C", -1, -1, 1);
    expect(com.getMostNorthern()).toEqual({
      key: 2,
      name: "B",
      latitude: 2,
      longitude: 2,
      population: 2,
    });
  }); //Test: Should  return city with largest latitude value
}); //Contains test Community.getMostNorthern()

describe("Contains test Community.getMostSouthern()", () => {
  test("Test: Should return city with smallest latitude value", () => {
    const com = new Community();

    com.createCity(1, "A", 1, 1, 1);
    com.createCity(2, "B", 2, 2, 2);
    com.createCity(3, "C", -1, -1, 1);
    expect(com.getMostSouthern()).toEqual({
      key: 3,
      name: "C",
      latitude: -1,
      longitude: -1,
      population: 1,
    });
  }); //Test: Should return city with smallest latitude value
}); //Contains test Community.getMostSouthern()

describe("Contains tests for getPopulation", () => {
  test("Test: should be 3", () => {
    const community = new Community();

    let A = community.createCity(1, "A", 1, 1, 1);
    expect(community.getPopulation()).toEqual(1);
    let B = community.createCity(2, "B", 2, 2, 2);
    expect(community.getPopulation()).toBe(3);
  }); // Test: should be 3
}); //describe: Contains tests for getPopulation
