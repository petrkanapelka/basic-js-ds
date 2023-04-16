const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
   this.value = x;
   this.next = null;
  }
}
class Queue {

  getUnderlyingList() {
      return this.node;
  }

  enqueue(data) {
      if (!this.hasOwnProperty('node')){
          this.node = new ListNode(data);
      } else {
          addNode(this.node,data);
      }
      function addNode(node,data) {
          if (node.next == null){
              node.next = new ListNode(data)
          }else {
              addNode(node.next,data)
          }
      }
  }

  dequeue() {
      let top = this.node.value;
      this.node = this.node.next;
      return top;
  }
}

module.exports = {
  Queue
};
