const logger = console;
class Node {
  constructor(element) {
	logger.debug(`>>> Entering constructor(element=${element})`);
	logger.debug('>>> Entering constructor()');
    this.element = element
    this.next = null
    this.prev = null
	logger.debug(`constructor(element=${element}): this.prev → ${this.prev}`);
	logger.debug(`constructor(): this.tail → ${this.tail}`);
  }
}

class DoubleLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  // Add new element
  append(element) {
	logger.debug(`>>> Entering append(element=${element})`);
    const node = new Node(element)

	logger.debug(`append(element=${element}): node → ${node}`);
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
	logger.debug(`append(element=${element}): this.tail → ${this.tail}`);
	logger.debug(`append(element=${element}): node.prev → ${node.prev}`);
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  // Add element
  insert(position, element) {
	logger.debug(`>>> Entering insert(position=${position},element=${element})`);
    // Check of out-of-bound values
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
	logger.debug(`insert(position=${position},element=${element}): node → ${node}`);
      let previous = 0
      let index = 0

      if (position === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
		logger.debug(`insert(position=${position},element=${element}): this.tail → ${this.tail}`);
		logger.debug(`insert(position=${position},element=${element}): node.next → ${node.next}`);
          current.prev = node
		logger.debug(`insert(position=${position},element=${element}): current.prev → ${current.prev}`);
          this.head = node
        }
      } else if (position === this.length) {
        current = this.tail
        current.next = node
		logger.debug(`insert(position=${position},element=${element}): current.next → ${current.next}`);
        node.prev = current
		logger.debug(`insert(position=${position},element=${element}): node.prev → ${node.prev}`);
        this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
		logger.debug(`insert(position=${position},element=${element}): previous.next → ${previous.next}`);

        // New
        current.prev = node
        node.prev = previous
      }

      this.length++
      return true
    } else {
	logger.debug(`<<< Exiting insert(position=${position},element=${element})`);
      return false
    }
  }

  // Remove element at any position
  removeAt(position) {
	logger.debug(`>>> Entering removeAt(position=${position})`);
    // look for out-of-bounds value
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = 0
      let index = 0

      // Removing first item
      if (position === 0) {
        this.head = current.next

		logger.debug(`removeAt(position=${position}): this.head → ${this.head}`);
        // if there is only one item, update this.tail //NEW
        if (this.length === 1) {
          this.tail = null
        } else {
		logger.debug(`removeAt(position=${position}): this.tail → ${this.tail}`);
          this.head.prev = null
        }
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // link previous with current's next - skip it
        previous.next = current.next
		logger.debug(`removeAt(position=${position}): previous.next → ${previous.next}`);
        current.next.prev = previous
      }

      this.length--
      return current.element
    } else {
	logger.debug(`<<< Exiting removeAt(position=${position})`);
      return null
    }
  }

  // Get the indexOf item
  indexOf(elm) {
	logger.debug(`>>> Entering indexOf(elm=${elm})`);
    let current = this.head
    let index = -1

    // If element found then return its position
    while (current) {
      if (elm === current.element) {
        return ++index
      }

      index++
      current = current.next
    }

    // Else return -1
	logger.debug(`<<< Exiting indexOf(elm=${elm})`);
    return -1
  }

  // Find the item in the list
  isPresent(elm) {
	logger.debug(`>>> Entering isPresent(elm=${elm})`);
	logger.debug(`<<< Exiting isPresent(elm=${elm})`);
    return this.indexOf(elm) !== -1
  }

  // Delete an item from the list
  delete(elm) {
	logger.debug(`>>> Entering delete(elm=${elm})`);
	logger.debug(`<<< Exiting delete(elm=${elm})`);
    return this.removeAt(this.indexOf(elm))
  }

  // Delete first item from the list
  deleteHead() {
	logger.debug('>>> Entering deleteHead()');
    this.removeAt(0)
	logger.debug('<<< Exiting deleteHead()');
  }

  // Delete last item from the list
  deleteTail() {
	logger.debug('>>> Entering deleteTail()');
    this.removeAt(this.length - 1)
	logger.debug('<<< Exiting deleteTail()');
  }

  // Print item of the string
  toString() {
	logger.debug('>>> Entering toString()');
    let current = this.head
    let string = ''
	logger.debug(`toString(): string → ${string}`);

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

	logger.debug('<<< Exiting toString()');
    return string
  }

  // Convert list to array
  toArray() {
	logger.debug('>>> Entering toArray()');
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.element)
      current = current.next
    }

	logger.debug('<<< Exiting toArray()');
    return arr
  }

  // Check if list is empty
  isEmpty() {
	logger.debug('>>> Entering isEmpty()');
	logger.debug('<<< Exiting isEmpty()');
    return this.length === 0
  }

  // Get the size of the list
  size() {
	logger.debug('>>> Entering size()');
	logger.debug('<<< Exiting size()');
    return this.length
  }

  // Get the this.head
  getHead() {
	logger.debug('>>> Entering getHead()');
	logger.debug('<<< Exiting getHead()');
    return this.head
  }

  // Get the this.tail
  getTail() {
	logger.debug('>>> Entering getTail()');
	logger.debug('<<< Exiting getTail()');
    return this.tail
  }

  // Method to iterate over the LinkedList
  iterator() {
	logger.debug('>>> Entering iterator()');
    let currentNode = this.getHead()
    if (currentNode === null) return -1
	logger.debug(`iterator(): currentNode → ${currentNode}`);

    const iterate = function* () {
	logger.debug('>>> Entering iterate()');
      while (currentNode) {
        yield currentNode.element
        currentNode = currentNode.next
		logger.debug('<<< Exiting iterate()');
      }
    }
	logger.debug('<<< Exiting iterator()');
    return iterate()
  }

  // Method to log the LinkedList, for debugging
  // it' a circular structure, so can't use stringify to debug the whole structure
  log() {
	logger.debug('>>> Entering log()');
    let currentNode = this.getHead()
    while (currentNode) {
	logger.debug(`log(): currentNode → ${currentNode}`);
      console.log(currentNode.element)
      currentNode = currentNode.next
	logger.debug('<<< Exiting log()');
    }
  }
}

// Example

// const newDoubleLinkedList = new DoubleLinkedList()
// newDoubleLinkedList.append(1)
// newDoubleLinkedList.append(2)
// newDoubleLinkedList.size() // returns 2
// const iterate = newDoubleLinkedList.iterator()
// console.log(iterate.next().value) // 1
// console.log(iterate.next().value) // 2
// console.log(newDoubleLinkedList.log())

export { DoubleLinkedList }
