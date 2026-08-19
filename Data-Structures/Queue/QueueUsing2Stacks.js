const logger = console;
// implementation of Queue using 2 stacks
// contribution made by hamza chabchoub for a university project

class Queue {
  constructor() {
	logger.debug('>>> Entering constructor()');
    this.inputStack = []
    this.outputStack = []
	logger.debug(`constructor(): this.outputStack → ${this.outputStack}`);
	logger.debug(`constructor(): this.inputStack → ${this.inputStack}`);
	logger.debug('<<< Exiting constructor()');
  }

  // Push item into the inputstack
  enqueue(item) {
	logger.debug(`>>> Entering enqueue(item=${item})`);
    this.inputStack.push(item)
	logger.debug(`<<< Exiting enqueue(item=${item})`);
  }

  dequeue() {
	logger.debug('>>> Entering dequeue()');
    // push all items to outputstack
    this.outputStack = []
    while (this.inputStack.length > 0) {
	logger.debug(`dequeue(): this.outputStack → ${this.outputStack}`);
      this.outputStack.push(this.inputStack.pop())
    }
    // return the top element of the outputstack if any
    if (this.outputStack.length > 0) {
      const top = this.outputStack.pop()
      // repush all the items to the inputstack
	logger.debug(`dequeue(): top → ${top}`);
      this.inputStack = []
      while (this.outputStack.length > 0) {
		logger.debug(`dequeue(): this.inputStack → ${this.inputStack}`);
        this.inputStack.push(this.outputStack.pop())
      }
	logger.debug('<<< Exiting dequeue()');
      return top
    }
  }
}

export { Queue }
