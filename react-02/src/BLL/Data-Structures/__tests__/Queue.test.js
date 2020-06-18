import Queue from "../Queue";

test("Test Queue Functions", () => {
  const queue = new Queue();
  expect(queue.size()).toBe(0);
  expect(queue.isEmpty()).toBeTruthy();
  queue.enqueue(1);
  expect(queue.size()).toBe(1);
  expect(queue.isEmpty()).not.toBeTruthy();
  queue.enqueue(2, 3, 4);
  expect(queue.size()).toBe(4);
  queue.enqueue([5, 6, 7]);
  expect(queue.size()).toBe(7);
  queue.enqueue([8, 9, 10]);
  expect(queue.peek()).toBe(1);
  expect(queue.size()).toBe(10);
  queue.enqueue(["A", "B", "C"]);
  queue.enqueue(["D", "E"], ["F"]);
  expect(queue.size()).toBe(16);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.peek()).toBe(3);
  expect(queue.dequeue()).toBe(3);
  expect(queue.peek()).toBe(4);
  queue.clear();
  expect(queue.size()).toBe(0);
  expect(queue.isEmpty()).toBeTruthy();
});
