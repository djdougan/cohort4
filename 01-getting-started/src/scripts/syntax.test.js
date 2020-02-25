

/** 
 * @author Douglas J Dougan <djdougan@gmail.com>
 * @
 * @description test file for syntax.js
 * @example to run syntax tests use: npm test -- 'syntax.test.js'
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