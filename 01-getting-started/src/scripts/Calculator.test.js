import calculator from "./Calculator";



test("Test: add(num1, num2) returns number", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(10, 20)).toBe(30);
    expect(calculator.add(15, 25)).toBe(40);
    expect(calculator.add(110, 210)).toBe(320);
    expect(calculator.add(65, 52)).toBe(117);
    expect(calculator.add(13, 13)).toBe(26);
    expect(calculator.add(10, 22)).toBe(32);

});
test("Test: subtract(num1, num2) returns number", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.subtract(13, 3)).toBe(10);
    expect(calculator.subtract(78, 34)).toBe(44);
    expect(calculator.subtract(19, 23)).toBe(-4);
    expect(calculator.subtract(34, 12)).toBe(22);
    expect(calculator.subtract(89, 13)).toBe(76);

});
test("Test: multiply(num1, num2) returns number", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(23, 12)).toBe(276);
    expect(calculator.multiply(5, 32)).toBe(160);
    expect(calculator.multiply(6, 2)).toBe(12);
    expect(calculator.multiply(34, 7)).toBe(238);
    expect(calculator.multiply(2, 56)).toBe(112);

});
test("Test: divide(num1, num2) returns number", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
    expect(calculator.divide(23, 12)).toBe(1.9166666666666667);
    expect(calculator.divide(50, 10)).toBe(5);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(35, 7)).toBe(5);
    expect(calculator.divide(200, 56)).toBe(3.5714285714285716);
});