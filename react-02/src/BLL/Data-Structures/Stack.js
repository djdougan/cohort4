// LIFO stack
import Collection from "./Collection.js";

class Stack extends Collection {
  ///This adds a new item (or several items) to the top of the stack.
  push(element) {
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

  pop() {
    return this.collection.shift();
  }
  peek() {
    return this.collection[0];
  }
}
export { Stack as default };
