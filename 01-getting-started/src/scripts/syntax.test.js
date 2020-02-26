

/** 
 * @author Douglas J Dougan <djdougan@gmail.com>
 * @
 * @description test file for syntax.js
 * @example to run syntax tests use: npm test 'syntax.test.js'
 * 
 */
import syntax from './syntax';
test("Test the numbers", () => {
    expect(syntax.power(2, 4)).toBe(16);
    expect(syntax.power(2, 4)).not.toBe(9);
    expect(syntax.power(2, 5)).toBe(32);
    expect(syntax.power(2, 5)).not.toBe(40);
});


test("Test character removal", () => {
    expect(syntax.removeChosenOne('Full stack web developer', 'ae')).toMatch('Full stck wb dvlopr');

    expect(syntax.removeChosenOne('Supercalifragilisticexpialidocious', 'aeiouy')).toMatch('Sprclfrglstcxpldcs');
    expect(syntax.removeChosenOne('smart water', 'a')).toMatch('smrt wter');
    expect(syntax.removeChosenOne('super function', 'u')).toMatch('sper fnction');
    expect(syntax.removeChosenOne('The quick brown fox jumps over the lazy dog', 'aeiouy')).toMatch('Th qck brwn fx jmps vr th lz dg');
    // did not remove the y out of lazy
    expect(syntax.removeChosenOne('The quick brown fox jumps over the lazy dog', 'aeiouy')).not.toMatch('Th qck brwn fx jmps vr th lzy dg');
});

test("Test if number is in range", () => {
    expect(syntax.inRange(10, 20, 15)).toBe(true);
    expect(syntax.inRange(10, 20, 21)).toBe(false);
    expect(syntax.inRange(10, 12, 11)).toBe(true);
    // min is larger than max
    expect(syntax.inRange(20, 10, 15)).toBe(false);
})

test("Test if only numbers are in array", () => {
    // all numbers returns true
    expect(syntax.onlyNumbersInArray([1, 5, 15, 20, 50, 100])).toBe(true);
    // contains a string return false
    expect(syntax.onlyNumbersInArray([1, 2, 3, "dog"])).toBe(false);
    expect(syntax.onlyNumbersInArray([111, 345, 315])).toBe(true);
    // contains a object returns false
    expect(syntax.onlyNumbersInArray([1, 2, 3, { x: 3, y: 5 }])).toBe(false);

});

test("Test persons age", () => {
    expect(syntax.ageCheck(18, { name: "James", age: 18 })).toBe(true);
    expect(syntax.ageCheck(21, { name: "Anne", age: 20 })).toBe(false);
    expect(syntax.ageCheck(55, { name: "Dan", age: 56 })).toBe(true);
    expect(syntax.ageCheck(65, { name: "Allen", age: 65 })).toBe(true);
});

test("Test if Object is undefined", () => {
    let a, b, c;
    let d = "", e = "", f = "";
    expect(syntax.isDefined(a)).toBe(false);
    expect(syntax.isDefined(b)).toBe(false);
    expect(syntax.isDefined(c)).toBe(false);
    expect(syntax.isDefined(d)).toBe(true);
    expect(syntax.isDefined(e)).toBe(true);
    expect(syntax.isDefined(f)).toBe(true);
});

test("Test if color is red", () => {
    expect(syntax.isRedColor("red")).toBe(true);
    expect(syntax.isRedColor("Red")).toBe(true);
    expect(syntax.isRedColor("Blue")).toBe(false);
    expect(syntax.isRedColor("orange")).toBe(false);
});
test("Test the number of arguments", () => {
    expect(syntax.countArgs(1, 2, 3, 4, 5)).toBe(5);
    expect(syntax.countArgs("dog", "cat", "love bird", "rabbit")).toBe(4);
    expect(syntax.countArgs({ make: "Ford", model: "f-150" }, { make: "GMC", model: "2500" })).toBe(2);
    expect(syntax.countArgs(1, "a", 2, 3, 4)).not.toBe(4);
    expect(syntax.countArgs()).toBe(0);
});

test("Test adding to start of array", () => {
    expect(syntax.LIFO(["Tom", "Sara"], "Sally")).toBe("Sally");
    expect(syntax.LIFO(["Tom", "Sara"], "Billy")).toBe("Billy");
    expect(syntax.LIFO(["Tom", "Sara"], "Jerry")).not.toBe("Sally");
});

test("Test adding to end of array", () => {
    expect(syntax.LILO(["Tom", "Sara"], "Sally")).toBe("Sally");
    expect(syntax.LILO(["Tom", "Sara"], "Billy")).toBe("Billy");
    expect(syntax.LILO(["Tom", "Sara"], "Jerry")).not.toBe("Sally");
});

test("Test update element in array", () => {
    expect(syntax.updateArray([1, 4], 1, 5)).toEqual([5, 4]);
    expect(syntax.updateArray([3, 9, 12], 9, 5)).toEqual([3, 5, 12]);
    // nothing will be updated no match found
    expect(syntax.updateArray([5, 18, 21], 9, 5)).toEqual([5, 18, 21]);
    expect(syntax.updateArray(["Bob", "Sam"], "Bob", "Tom")).toEqual(["Tom", "Sam"]);
    expect(syntax.updateArray(["Bob", "Sam"], "Sam", "Tom")).toEqual(["Bob", "Tom"]);
});

test("Test add a value to each element in array", () => {
    expect(syntax.addToEach([2, 2, 3, 4, 5], 1)).toEqual([3, 3, 4, 5, 6]);
    expect(syntax.addToEach([11, 15, 31, 35, 56], 5)).toEqual([16, 20, 36, 40, 61]);
    expect(syntax.addToEach([100, 200, 3, 55], 21)).toEqual([121, 221, 24, 76]);
});

test("Test validate a 3d point", () => {
    expect(syntax.validatePoint({ x: -10, y: 100, z: 200 })).toBe(true);
    expect(syntax.validatePoint({ x: 2, y: 10, z: -2 })).toBe(true);
    // not a valid point
    expect(syntax.validatePoint({ x: 2, y: 10, z: null })).toBe(false);

});

test("Test incremental array numbers", () => {
    expect(syntax.fillArray(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(syntax.fillArray(0)).toEqual([]);
    expect(syntax.fillArray(3)).toEqual([0, 1, 2]);
});

test("The reduced numbers added up", () => {
    expect(syntax.reduce(1)).toBe(1);
    expect(syntax.reduce(10)).toBe(55);
    expect(syntax.reduce(100)).toBe(5050);
});

test("Test toUpperCaseArray ", () => {
    expect(syntax.toUpperCaseArray(['Sam', 'Sara', 'Bob'])).toEqual(['SAM', 'SARA', 'BOB']);
    expect(syntax.toUpperCaseArray(['luke', 'kim', 'phil'])).toEqual(['LUKE', 'KIM', 'PHIL']);
    expect(syntax.toUpperCaseArray(['bIlLy', 'DeAN'])).toEqual(['BILLY', 'DEAN']);

});

test("Test the createObject", () => {
    expect(syntax.createObject(1, 100)).toEqual({ key: 1, value: 100 });
    expect(syntax.createObject(2, 200)).toEqual({ key: 2, value: 200 });
    expect(syntax.createObject(3, 300)).toEqual({ key: 3, value: 300 });
    expect(syntax.createObject(101, 1010)).toEqual({ key: 101, value: 1010 });
});

test("Test keyValueLookUp", () => {
    const employees = [
        { id: 1, name: "James" },
        { id: 2, name: "Lori" },
        { id: 3, name: "Tom" },
        { id: 4, name: "Frank" },
        { id: 5, name: "Sara" },
        { id: 6, name: "Jackie" }];

    expect(syntax.keyValueLookUp(3, employees)).toEqual({ id: 3, name: "Tom" });
    expect(syntax.keyValueLookUp(6, employees)).toEqual({ id: 6, name: "Jackie" });
    expect(syntax.keyValueLookUp(2, employees)).toEqual({ id: 2, name: "Lori" });
});