class Node {
  constructor(subject, amount) {
    this.subject = subject;
    this.amount = amount;
    this.next = null;
    this.prev = null;
  }

  show() {
    return { subject: this.subject, amount: this.amount };
  }
}

export { Node as default };
