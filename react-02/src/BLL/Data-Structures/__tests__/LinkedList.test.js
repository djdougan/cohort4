import DoublyLinkedList from "../DoublyLinkedList.js";

test("should create and populate LinkedList", () => {
  const dll = new DoublyLinkedList();
  expect(dll.first()).toBe(null);
  dll.insert("A", 5);
  expect(dll.first().show()).toStrictEqual({ subject: "A", amount: 5 });
  dll.insert("B", 0);
  expect(dll.last().show()).toStrictEqual({ subject: "B", amount: 0 });
  dll.insert("C", 1);
  expect(dll.first().show()).toStrictEqual({ subject: "A", amount: 5 });
  dll.next(dll.last());
  dll.insert("D", 6);
  expect(dll.last().show()).toStrictEqual({ subject: "D", amount: 6 });
  dll.next(dll.last());
  dll.insert("E", 1);
  expect(dll.last().show()).toStrictEqual({ subject: "E", amount: 1 });
  expect(dll.total()).toStrictEqual(13);
});
