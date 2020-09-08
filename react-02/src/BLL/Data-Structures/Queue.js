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
            this.collection.unshift(sub);
          });
        } else {
          this.collection.unshift(el);
        }
      });
    }
  }

  dequeue() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.size()-1];
  }
}
export { Queue as default };