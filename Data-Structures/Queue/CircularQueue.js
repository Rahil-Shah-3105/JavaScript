const logger = console;
// Circular Queues offer a quick to store FIFO data with a maximum size.
// Conserves memory as we only store up to our capacity
// It is opposed to a queue which could continue to grow if input outpaces output
// Doesn’t use dynamic memory so No memory leaks

class CircularQueue {
  constructor(maxLength) {
	logger.error(`>>> Entering constructor(maxLength=${maxLength})`, { "event.action": "constructor", "logrite.maxLength": maxLength });
    this.queue = []
    this.front = 0
	logger.debug(`constructor(maxLength=${maxLength}): this.queue → ${this.queue}`, { "event.action": "constructor", "logrite.maxLength": maxLength });
	logger.debug(`constructor(maxLength=${maxLength}): this.front → ${this.front}`, { "event.action": "constructor", "logrite.maxLength": maxLength });
    this.rear = 0
	logger.debug(`constructor(maxLength=${maxLength}): this.rear → ${this.rear}`, { "event.action": "constructor", "logrite.maxLength": maxLength });
    this.maxLength = maxLength
	logger.debug(`constructor(maxLength=${maxLength}): this.maxLength → ${this.maxLength}`, { "event.action": "constructor", "logrite.maxLength": maxLength });
	logger.warn(`<<< Exiting constructor(maxLength=${maxLength})`, { "event.action": "constructor", "logrite.maxLength": maxLength });
  }

  // ADD ELEMENTS TO QUEUE
  enqueue(value) {
	logger.error(`>>> Entering enqueue(value=${value})`, { "event.action": "enqueue", "logrite.value": value });
    if (this.checkOverflow()) return
    if (this.checkEmpty()) {
      this.front += 1
      this.rear += 1
    } else {
      if (this.rear === this.maxLength) {
        this.rear = 1
      } else this.rear += 1
    }
    this.queue[this.rear] = value
	logger.warn(`<<< Exiting enqueue(value=${value})`, { "event.action": "enqueue", "logrite.value": value });
  }

  // REMOVES ELEMENTS
  dequeue() {
	logger.error('>>> Entering dequeue()', { "event.action": "dequeue" });
    if (this.checkEmpty()) {
      // UNDERFLOW
      return
    }
    const y = this.queue[this.front]
    this.queue[this.front] = '*'
    if (!this.checkSingleelement()) {
      if (this.front === this.maxLength) this.front = 1
      else {
        this.front += 1
      }
    }

	logger.warn('<<< Exiting dequeue()', { "event.action": "dequeue" });
    return y // Returns the removed element and replaces it with a star
  }

  // checks if the queue is empty or not
  checkEmpty() {
	logger.error('>>> Entering checkEmpty()', { "event.action": "checkEmpty" });
    if (this.front === 0 && this.rear === 0) {
      return true
    }
	logger.warn('<<< Exiting checkEmpty()', { "event.action": "checkEmpty" });
  }

  checkSingleelement() {
	logger.error('>>> Entering checkSingleelement()', { "event.action": "checkSingleelement" });
    if (this.front === this.rear && this.rear !== 0) {
      this.front = this.rear = 0
	logger.debug(`checkSingleelement(): this.front → ${this.front}`, { "event.action": "checkSingleelement" });
      return true
    }
	logger.warn('<<< Exiting checkSingleelement()', { "event.action": "checkSingleelement" });
  }

  // Checks if max capacity of queue has been reached or not
  checkOverflow() {
	logger.error('>>> Entering checkOverflow()', { "event.action": "checkOverflow" });
    if (
      (this.front === 1 && this.rear === this.maxLength) ||
      this.front === this.rear + 1
    ) {
      // CIRCULAR QUEUE OVERFLOW
	logger.warn('<<< Exiting checkOverflow()', { "event.action": "checkOverflow" });
      return true
    }
  }

  // Prints the entire array ('*' represents blank space)
  display(output = (value) => console.log(value)) {
    for (let index = 1; index < this.queue.length; index++) {
      output(this.queue[index])
    }
  }

  // Displays the length of queue
  length() {
	logger.error('>>> Entering length()', { "event.action": "length" });
	logger.warn('<<< Exiting length()', { "event.action": "length" });
    return this.checkEmpty() ? 0 : this.queue.length - 1
  }

  // Display the top most value of queue
  peek() {
	logger.error('>>> Entering peek()', { "event.action": "peek" });
	logger.warn('<<< Exiting peek()', { "event.action": "peek" });
    return this.queue[this.front]
  }
}

export { CircularQueue }
