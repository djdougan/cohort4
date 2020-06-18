import Stack from "../Stack";

test("Test Stack Functions", () => {
  const stack = new Stack();
  expect(stack.size()).toBe(0);
  expect(stack.isEmpty()).toBeTruthy();
  stack.push(1);
  expect(stack.size()).toBe(1);
  expect(stack.isEmpty()).not.toBeTruthy();
  stack.push(2, 3, 4);
  expect(stack.size()).toBe(4);
  stack.push([5, 6, 7]);
  expect(stack.size()).toBe(7);
  stack.push([8, 9, 10]);
  expect(stack.peek()).toBe(10);
  expect(stack.size()).toBe(10);
  stack.push(["A", "B", "C"]);
  stack.push(["D", "E"], ["F"]);
  expect(stack.size()).toBe(16);
  expect(stack.pop()).toBe("F");
  expect(stack.pop()).toBe("E");
  expect(stack.peek()).toBe("D");
  expect(stack.pop()).toBe("D");
  expect(stack.peek()).toBe("C");
  stack.clear();
  expect(stack.size()).toBe(0);
  expect(stack.isEmpty()).toBeTruthy();
});
