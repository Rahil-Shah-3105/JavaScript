const logger = console;
// implementation of Queue using 2 stacks
// contribution made by hamza chabchoub for a university project

class Queue {
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.inputStack = []
    this.outputStack = []
	logger.debug(`constructor(): this.outputStack → ${this.outputStack}`, { "event.action": "constructor" });
  }

  // Push item into the inputstack
  enqueue(item) {
	logger.error(`>>> Entering enqueue(item=${item})`, { "event.action": "enqueue", "logrite.item": item });
    this.inputStack.push(item)
	logger.warn(`<<< Exiting enqueue(item=${item})`, { "event.action": "enqueue", "logrite.item": item });
  }

  dequeue() {
	logger.error('>>> Entering dequeue()', { "event.action": "dequeue" });
    // push all items to outputstack
    this.outputStack = []
	logger.debug(`dequeue(): this.outputStack → ${this.outputStack}`, { "event.action": "dequeue" });
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop())
    }
    // return the top element of the outputstack if any
    if (this.outputStack.length > 0) {
      const top = this.outputStack.pop()
      // repush all the items to the inputstack
	logger.error(`dequeue(): top → ${top}`, { "event.action": "dequeue" });
      this.inputStack = []
	logger.debug(`dequeue(): this.inputStack → ${this.inputStack}`, { "event.action": "dequeue" });
      while (this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop())
      }
      return top
    }
	logger.warn('<<< Exiting dequeue()', { "event.action": "dequeue" });
  }
}

export { Queue }
