import Node from "./Node";
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  insert(subject, amount) {
    let newNode = new Node(subject, amount);
    if (!this.current) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
      return newNode;
    } else if (this.current === this.tail) {
      this.current.next = newNode;
      newNode.prev = this.current;
      this.tail = newNode;
      this.current = newNode;
      newNode.next = null;
      return newNode;
    } else {
      newNode.prev = this.current;
      newNode.next = this.current.next;
      this.current.next = newNode;
      newNode.next.prev = newNode;
      this.current = newNode;
      return newNode;
    }
  }
  delete(node) {
    if (!node) {
      return null;
    } else {
      if (node === this.head && node === this.tail) {
        this.head = null;
        this.tail = null;
        this.current = null;
        node = null;
        return null;
      }
      if (node === this.head) {
        this.head = node.next;
        this.head.prev = null;
        this.current = this.head;
        node = null;
        return this.head;
      }
      if (node === this.tail) {
        this.tail = node.prev;
        this.tail.next = null;
        this.current = this.tail;
        node = null;
        return this.tail;
      } else {
        let newNode = node.prev;
        newNode.next = node.next;
        node.next.prev = newNode;
        this.current = newNode;
        node = null;
        return newNode;
      }
    }
  }

  first() {
    if (!this.head) {
      return null;
    }
    this.current = this.head;
    return this.head;
  }

  last() {
    if (!this.tail) {
      return null;
    }
    this.current = this.tail;
    return this.tail;
  }

  next(node) {
    if (!node) {
      return null;
    } else if (!node.next) {
      this.current = node;
      return node;
    } else {
      let nextNode = node.next;
      this.current = nextNode;
      return nextNode;
    }
  }

  prev(node) {
    if (!node) {
      return null;
    } else if (!node.prev) {
      this.current = node;
      return node;
    } else {
      let prevNode = node.prev;
      this.current = prevNode;
      return this.current;
    }
  }

  total() {
    if (!this.head) {
      return 0;
    } else {
      let currentNode = this.head;
      let total = 0;
      while (currentNode) {
        total += parseInt(currentNode.amount);
        currentNode = currentNode.next;
      }
      return total;
    }
  }
}
export { DoublyLinkedList as default };
