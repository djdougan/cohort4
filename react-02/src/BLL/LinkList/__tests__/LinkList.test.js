import LinkList from "../LinkedList.js";
import ListNode from "../ListNode.js";

describe("LinkedList and ListNode", () => {
  describe("ListNode", () => {
    test("should be created", () => {
      const node = new ListNode("Javascript Skill", 7);
      expect(node.subject).toBe("Javascript Skill");
    });
  });
});
