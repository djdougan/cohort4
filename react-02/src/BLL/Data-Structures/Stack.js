// LIFO stack
import Collection from "./Collection.js";

class Stack extends Collection {
  // constructor() {
  //   super();
  // }
  ///This adds a new item (or several items) to the top of the stack.
  push(element) {
    let args = Array.from(arguments);
    if (args.length >= 1) {
      args.forEach((el) => {
        if (Array.isArray(el)) {
          el.forEach((sub) => {
            this.collection.push(sub);
          });
        } else {
          this.collection.unshift(el);
        }
      });
    }
  }

  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
}
export { Stack as default };
