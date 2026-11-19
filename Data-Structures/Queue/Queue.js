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
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.head = null
    this.tail = null
	logger.debug(`constructor(): this.head → ${this.head}`, { "event.action": "constructor" });
	logger.debug(`constructor(): this.tail → ${this.tail}`, { "event.action": "constructor" });
    this.#size = 0

	logger.warn('<<< Exiting constructor()', { "event.action": "constructor" });
    return Object.seal(this)
  }

  get length() {
	logger.error('>>> Entering length()', { "event.action": "length" });
	logger.warn('<<< Exiting length()', { "event.action": "length" });
    return this.#size
  }

  /**
   * @description - Add a value to the end of the queue
   * @param {*} data
   * @returns {number} - The current size of queue
   */
  enqueue(data) {
	logger.error(`>>> Entering enqueue(data=${data})`, { "event.action": "enqueue" });
    const node = { data, next: null }

    if (!this.head && !this.tail) {
      this.head = node
	logger.debug(`enqueue(data=${data}): this.head → ${this.head}`, { "event.action": "enqueue" });
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

	logger.warn(`<<< Exiting enqueue(data=${data})`, { "event.action": "enqueue" });
    return ++this.#size
  }

  /**
   * @description - Removes the value at the front of the queue
   * @returns {*} - The first data of the queue
   */
  dequeue() {
	logger.error('>>> Entering dequeue()', { "event.action": "dequeue" });
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }

    const firstData = this.peekFirst()

	logger.error(`dequeue(): firstData → ${firstData}`, { "event.action": "dequeue" });
    this.head = this.head.next
	logger.debug(`dequeue(): this.head → ${this.head}`, { "event.action": "dequeue" });

    if (!this.head) {
      this.tail = null
	logger.debug(`dequeue(): this.tail → ${this.tail}`, { "event.action": "dequeue" });
    }

    this.#size--

	logger.warn('<<< Exiting dequeue()', { "event.action": "dequeue" });
    return firstData
  }

  /**
   * @description - Return the item at the front of the queue
   * @returns {*}
   */
  peekFirst() {
	logger.error('>>> Entering peekFirst()', { "event.action": "peekFirst" });
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }

	logger.warn('<<< Exiting peekFirst()', { "event.action": "peekFirst" });
    return this.head.data
  }

  /**
   * @description - Return the item at the tail of the queue
   * @returns {*}
   */
  peekLast() {
	logger.error('>>> Entering peekLast()', { "event.action": "peekLast" });
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }

	logger.warn('<<< Exiting peekLast()', { "event.action": "peekLast" });
    return this.tail.data
  }

  /**
   * @description - Return the array of Queue
   * @returns {Array<*>}
   */
  toArray() {
	logger.error('>>> Entering toArray()', { "event.action": "toArray" });
    const array = []
    let node = this.head

    while (node) {
      array.push(node.data)
      node = node.next
    }

	logger.warn('<<< Exiting toArray()', { "event.action": "toArray" });
    return array
  }

  /**
   * @description - Return is queue empty or not
   * @returns {boolean}
   */
  isEmpty() {
	logger.error('>>> Entering isEmpty()', { "event.action": "isEmpty" });
	logger.warn('<<< Exiting isEmpty()', { "event.action": "isEmpty" });
    return this.length === 0
  }
}

export default Queue
