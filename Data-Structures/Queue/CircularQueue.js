const logger = console;
// Circular Queues offer a quick to store FIFO data with a maximum size.
// Conserves memory as we only store up to our capacity
// It is opposed to a queue which could continue to grow if input outpaces output
// Doesn’t use dynamic memory so No memory leaks

class CircularQueue {
  constructor(maxLength) {
	logger.debug(`>>> Entering constructor(maxLength=${maxLength})`);
    this.queue = []
    this.front = 0
    this.rear = 0
	logger.debug(`constructor(maxLength=${maxLength}): this.queue → ${this.queue}`);
	logger.debug(`constructor(maxLength=${maxLength}): this.front → ${this.front}`);
    this.maxLength = maxLength
  }

  // ADD ELEMENTS TO QUEUE
  enqueue(value) {
	logger.debug(`>>> Entering enqueue(value=${value})`);
    if (this.checkOverflow()) return
    if (this.checkEmpty()) {
      this.front += 1
      this.rear += 1
    } else {
      if (this.rear === this.maxLength) {
        this.rear = 1
      } else this.rear += 1
	logger.debug(`enqueue(value=${value}): this.rear → ${this.rear}`);
    }
    this.queue[this.rear] = value
	logger.debug(`<<< Exiting enqueue(value=${value})`);
  }

  // REMOVES ELEMENTS
  dequeue() {
	logger.debug('>>> Entering dequeue()');
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

	logger.debug('<<< Exiting dequeue()');
    return y // Returns the removed element and replaces it with a star
  }

  // checks if the queue is empty or not
  checkEmpty() {
	logger.debug('>>> Entering checkEmpty()');
    if (this.front === 0 && this.rear === 0) {
	logger.debug('<<< Exiting checkEmpty()');
      return true
    }
  }

  checkSingleelement() {
	logger.debug('>>> Entering checkSingleelement()');
    if (this.front === this.rear && this.rear !== 0) {
      this.front = this.rear = 0
	logger.debug(`checkSingleelement(): this.front → ${this.front}`);
	logger.debug('<<< Exiting checkSingleelement()');
      return true
    }
  }

  // Checks if max capacity of queue has been reached or not
  checkOverflow() {
	logger.debug('>>> Entering checkOverflow()');
    if (
      (this.front === 1 && this.rear === this.maxLength) ||
      this.front === this.rear + 1
    ) {
      // CIRCULAR QUEUE OVERFLOW
	logger.debug('<<< Exiting checkOverflow()');
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
	logger.debug('>>> Entering length()');
	logger.debug('<<< Exiting length()');
    return this.checkEmpty() ? 0 : this.queue.length - 1
  }

  // Display the top most value of queue
  peek() {
	logger.debug('>>> Entering peek()');
	logger.debug('<<< Exiting peek()');
    return this.queue[this.front]
  }
}

export { CircularQueue }
