import WorkingWithArrays from './WorkingWithArrays.js';


test("Test: clear(array) returns []", () => {
    expect(WorkingWithArrays.clear([1, 2, 3, 4, 5, 6])).toEqual([]);
    expect(WorkingWithArrays.clear(["a", "s", "y", "w", "e", "e"])).toEqual([]);
    expect(WorkingWithArrays.clear([{ x: 1, y: 3 }, { x: 4, y: 6 }, { x: 1, y: 3 },])).toEqual([]);
});

test("Test: clear(array) returns []")