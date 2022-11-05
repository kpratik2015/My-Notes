class Queue {
  data = Object.create(null);
  enqueueIdx = 0;
  dequeueIdx = 0;
  /** Enqueues the item in O(1) */
  push(item) {
    this.data[this.enqueueIdx] = item;
    this.enqueueIdx++;
  }
  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  shift() {
    if (this.enqueueIdx !== this.dequeueIdx) {
      const item = this.data[this.dequeueIdx];
      delete this.data[this.dequeueIdx];
      this.dequeueIdx++;
      return item;
    }
  }
  /**
   * Returns the number of elements in the queue
   */
  size() {
    return this.enqueueIdx - this.dequeueIdx;
  }
}

// Demo

const queue = new Queue();

queue.push(1);
console.log("Size: ", queue.size());
console.log("Shift: ", queue.shift());
console.log("Size: ", queue.size());
