class Collection {
  constructor() {
    this.collection = [];
  }

  peek() {
    throw new Error("Not implemented");
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.collection = [];
  }
  size() {
    return this.collection.length;
  }
}

export { Collection as default };
