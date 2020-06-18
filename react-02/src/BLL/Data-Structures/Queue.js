// LIFO stack
import Collection from "./Collection.js";

class Queue extends Collection {
  ///This adds a new item (or several items) to the top of the stack.
  enqueue(element) {
    let args = Array.from(arguments);
    if (args.length >= 1) {
      args.forEach((el) => {
        if (Array.isArray(el)) {
          el.forEach((sub) => {
            this.collection.push(sub);
          });
        } else {
          this.collection.push(el);
        }
      });
    }
  }

  dequeue() {
    return this.collection.shift();
  }
  peek() {
    return this.collection[0];
  }
}
export { Queue as default };
