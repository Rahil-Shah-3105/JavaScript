const logger = console;
/* Queue
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a FIFO (First In First Out)
 * system, where the first item to enter the queue is the first to be removed,
 * All these operation complexities are O(1).
 * This implementation following the linked list structure.
 */

class Queue {
  #size

  constructor() {
	logger.debug('>>> Entering constructor()');
    this.head = null
    this.tail = null
    this.#size = 0
	logger.debug(`constructor(): this.head → ${this.head}`);

	logger.debug(`constructor(): this.tail → ${this.tail}`);
    return Object.seal(this)
  }

  get length() {
	logger.debug('>>> Entering length()');
	logger.debug('<<< Exiting length()');
    return this.#size
  }

  /**
   * @description - Add a value to the end of the queue
   * @param {*} data
   * @returns {number} - The current size of queue
   */
  enqueue(data) {
	logger.debug(`>>> Entering enqueue(data=${data})`);
    const node = { data, next: null }

    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
	logger.debug(`enqueue(data=${data}): this.tail → ${this.tail}`);
    }

	logger.debug(`<<< Exiting enqueue(data=${data})`);
    return ++this.#size
  }

  /**
   * @description - Removes the value at the front of the queue
   * @returns {*} - The first data of the queue
   */
  dequeue() {
	logger.debug('>>> Entering dequeue()');
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }

    const firstData = this.peekFirst()

	logger.debug(`dequeue(): firstData → ${firstData}`);
    this.head = this.head.next

	logger.debug(`dequeue(): this.head → ${this.head}`);
    if (!this.head) {
      this.tail = null
    }

	logger.debug(`dequeue(): this.tail → ${this.tail}`);
    this.#size--

	logger.debug('<<< Exiting dequeue()');
    return firstData
  }

  /**
   * @description - Return the item at the front of the queue
   * @returns {*}
   */
  peekFirst() {
	logger.debug('>>> Entering peekFirst()');
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }

	logger.debug('<<< Exiting peekFirst()');
    return this.head.data
  }

  /**
   * @description - Return the item at the tail of the queue
   * @returns {*}
   */
  peekLast() {
	logger.debug('>>> Entering peekLast()');
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }

	logger.debug('<<< Exiting peekLast()');
    return this.tail.data
  }

  /**
   * @description - Return the array of Queue
   * @returns {Array<*>}
   */
  toArray() {
	logger.debug('>>> Entering toArray()');
    const array = []
    let node = this.head

    while (node) {
      array.push(node.data)
      node = node.next
    }

	logger.debug('<<< Exiting toArray()');
    return array
  }

  /**
   * @description - Return is queue empty or not
   * @returns {boolean}
   */
  isEmpty() {
	logger.debug('>>> Entering isEmpty()');
	logger.debug('<<< Exiting isEmpty()');
    return this.length === 0
  }
}

export default Queue
