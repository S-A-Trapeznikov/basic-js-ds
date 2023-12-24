const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.cur = 0;
    this.arr = [];
  }

  push(element) {
    this.arr[this.cur] = element;
    this.cur++;
  }

  pop() {
    let temp = this.arr[this.cur - 1];
    this.cur--;
    return temp;
  }

  peek() {
    return this.arr[this.cur - 1];
  }
}

module.exports = {
  Stack
};
