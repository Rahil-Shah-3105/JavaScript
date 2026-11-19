const logger = console;
class Node {
  constructor(element) {
	logger.error(`>>> Entering constructor(element=${element})`, { "event.action": "constructor", "logrite.element": element });
    this.element = element
    this.next = null
	logger.debug(`constructor(element=${element}): this.element → ${this.element}`, { "event.action": "constructor", "logrite.element": element });
	logger.debug(`constructor(): this.head → ${this.head}`, { "event.action": "constructor" });
    this.prev = null
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
	logger.debug(`constructor(): this.tail → ${this.tail}`, { "event.action": "constructor" });
  }
}

class DoubleLinkedList {
  constructor() {
    this.length = 0
    this.head = null
	logger.debug(`constructor(): this.length → ${this.length}`, { "event.action": "constructor" });
    this.tail = null
  }

  // Add new element
  append(element) {
	logger.error(`>>> Entering append(element=${element})`, { "event.action": "append", "logrite.element": element });
    const node = new Node(element)

	logger.error(`append(element=${element}): node → ${node}`, { "event.action": "append", "logrite.element": element });
	logger.debug(`append(element=${element}): node.prev → ${node.prev}`, { "event.action": "append", "logrite.element": element });
    if (!this.head) {
      this.head = node
	logger.debug(`append(element=${element}): this.head → ${this.head}`, { "event.action": "append", "logrite.element": element });
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  // Add element
  insert(position, element) {
	logger.error(`>>> Entering insert(position=${position},element=${element})`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
    // Check of out-of-bound values
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
	logger.error(`insert(position=${position},element=${element}): node → ${node}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
	logger.debug(`insert(position=${position},element=${element}): node.next → ${node.next}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
	logger.debug(`insert(position=${position},element=${element}): current.prev → ${current.prev}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
	logger.debug(`insert(position=${position},element=${element}): current.next → ${current.next}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
	logger.debug(`insert(position=${position},element=${element}): node.prev → ${node.prev}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
      let previous = 0
      let index = 0

      if (position === 0) {
		logger.debug(`insert(position=${position},element=${element}): previous.next → ${previous.next}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
        if (!this.head) {
          this.head = node
		logger.debug(`insert(position=${position},element=${element}): this.head → ${this.head}`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node

        // New
        current.prev = node
        node.prev = previous
      }

      this.length++
      return true
    } else {
	logger.warn(`<<< Exiting insert(position=${position},element=${element})`, { "event.action": "insert", "logrite.position": position, "logrite.element": element });
      return false
    }
  }

  // Remove element at any position
  removeAt(position) {
	logger.error(`>>> Entering removeAt(position=${position})`, { "event.action": "removeAt", "logrite.position": position });
    // look for out-of-bounds value
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = 0
	logger.debug(`removeAt(position=${position}): previous.next → ${previous.next}`, { "event.action": "removeAt", "logrite.position": position });
      let index = 0

      // Removing first item
      if (position === 0) {
        this.head = current.next
		logger.debug(`removeAt(position=${position}): this.head → ${this.head}`, { "event.action": "removeAt", "logrite.position": position });

        // if there is only one item, update this.tail //NEW
        if (this.length === 1) {
          this.tail = null
        } else {
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
        current.next.prev = previous
      }

      this.length--
      return current.element
    } else {
	logger.warn(`<<< Exiting removeAt(position=${position})`, { "event.action": "removeAt", "logrite.position": position });
      return null
    }
  }

  // Get the indexOf item
  indexOf(elm) {
	logger.error(`>>> Entering indexOf(elm=${elm})`, { "event.action": "indexOf", "logrite.elm": elm });
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
	logger.warn(`<<< Exiting indexOf(elm=${elm})`, { "event.action": "indexOf", "logrite.elm": elm });
    return -1
  }

  // Find the item in the list
  isPresent(elm) {
	logger.error(`>>> Entering isPresent(elm=${elm})`, { "event.action": "isPresent", "logrite.elm": elm });
	logger.warn(`<<< Exiting isPresent(elm=${elm})`, { "event.action": "isPresent", "logrite.elm": elm });
    return this.indexOf(elm) !== -1
  }

  // Delete an item from the list
  delete(elm) {
	logger.error(`>>> Entering delete(elm=${elm})`, { "event.action": "delete", "logrite.elm": elm });
	logger.warn(`<<< Exiting delete(elm=${elm})`, { "event.action": "delete", "logrite.elm": elm });
    return this.removeAt(this.indexOf(elm))
  }

  // Delete first item from the list
  deleteHead() {
	logger.error('>>> Entering deleteHead()', { "event.action": "deleteHead" });
    this.removeAt(0)
	logger.warn('<<< Exiting deleteHead()', { "event.action": "deleteHead" });
  }

  // Delete last item from the list
  deleteTail() {
	logger.error('>>> Entering deleteTail()', { "event.action": "deleteTail" });
    this.removeAt(this.length - 1)
	logger.warn('<<< Exiting deleteTail()', { "event.action": "deleteTail" });
  }

  // Print item of the string
  toString() {
	logger.error('>>> Entering toString()', { "event.action": "toString" });
    let current = this.head
    let string = ''
	logger.error(`toString(): string → ${string}`, { "event.action": "toString" });

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

	logger.warn('<<< Exiting toString()', { "event.action": "toString" });
    return string
  }

  // Convert list to array
  toArray() {
	logger.error('>>> Entering toArray()', { "event.action": "toArray" });
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.element)
      current = current.next
    }

	logger.warn('<<< Exiting toArray()', { "event.action": "toArray" });
    return arr
  }

  // Check if list is empty
  isEmpty() {
	logger.error('>>> Entering isEmpty()', { "event.action": "isEmpty" });
	logger.warn('<<< Exiting isEmpty()', { "event.action": "isEmpty" });
    return this.length === 0
  }

  // Get the size of the list
  size() {
	logger.error('>>> Entering size()', { "event.action": "size" });
	logger.warn('<<< Exiting size()', { "event.action": "size" });
    return this.length
  }

  // Get the this.head
  getHead() {
	logger.error('>>> Entering getHead()', { "event.action": "getHead" });
	logger.warn('<<< Exiting getHead()', { "event.action": "getHead" });
    return this.head
  }

  // Get the this.tail
  getTail() {
	logger.error('>>> Entering getTail()', { "event.action": "getTail" });
	logger.warn('<<< Exiting getTail()', { "event.action": "getTail" });
    return this.tail
  }

  // Method to iterate over the LinkedList
  iterator() {
	logger.error('>>> Entering iterator()', { "event.action": "iterator" });
    let currentNode = this.getHead()
    if (currentNode === null) return -1
	logger.error(`iterator(): currentNode → ${currentNode}`, { "event.action": "iterator" });

    const iterate = function* () {
	logger.error('>>> Entering iterate()', { "event.action": "iterate" });
      while (currentNode) {
        yield currentNode.element
        currentNode = currentNode.next
		logger.warn('<<< Exiting iterate()', { "event.action": "iterate" });
      }
    }
	logger.warn('<<< Exiting iterator()', { "event.action": "iterator" });
    return iterate()
  }

  // Method to log the LinkedList, for debugging
  // it' a circular structure, so can't use stringify to debug the whole structure
  log() {
	logger.error('>>> Entering log()', { "event.action": "log" });
    let currentNode = this.getHead()
    while (currentNode) {
      console.log(currentNode.element)
      currentNode = currentNode.next
	logger.warn('<<< Exiting log()', { "event.action": "log" });
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
