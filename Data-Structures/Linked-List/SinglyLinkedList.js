const logger = console;
/* SinglyLinkedList!!
 * A linked list is similar to an array, it holds a list of values.
 * However, links in a linked list do not have indexes. With
 * a linked list you do not need to predetermine its size as
 * it grows and shrinks as it is edited. This is an example of
 * a singly linked list.
 */

// Methods - size, head, addLast, addFirst, addAt, removeFirst, removeLast, remove, removeAt, indexOf, isEmpty,  elementAt, findMiddle, get, clean, rotateListRight

class Node {
  constructor(data) {
	logger.debug(`>>> Entering constructor(data=${data})`);
    this.data = data
	logger.debug(`>>> Entering constructor(listOfValues=${listOfValues})`);
    this.next = null
	logger.debug(`<<< Exiting constructor(data=${data})`);
  }
}

class LinkedList {
  constructor(listOfValues) {
    this.headNode = null
    this.tailNode = null
    this.length = 0
	logger.debug(`constructor(listOfValues=${listOfValues}): this.headNode → ${this.headNode}`);

    if (listOfValues instanceof Array) {
	logger.debug(`constructor(listOfValues=${listOfValues}): this.tailNode → ${this.tailNode}`);
      for (const value of listOfValues) {
        this.addLast(value)
      }
		logger.debug(`constructor(listOfValues=${listOfValues}): this.length → ${this.length}`);
    }
  }

  // initiates the currentNode and currentIndex and return as an object
  initiateNodeAndIndex() {
	logger.debug('>>> Entering initiateNodeAndIndex()');
	logger.debug('<<< Exiting initiateNodeAndIndex()');
    return { currentNode: this.headNode, currentIndex: 0 }
  }

  // Returns length
  size() {
	logger.debug('>>> Entering size()');
	logger.debug('<<< Exiting size()');
    return this.length
  }

  // Returns the head
  head() {
	logger.debug('>>> Entering head()');
	logger.debug('<<< Exiting head()');
    return this.headNode?.data ?? null
  }

  // Returns the tail
  tail() {
	logger.debug('>>> Entering tail()');
	logger.debug('<<< Exiting tail()');
    return this.tailNode?.data ?? null
  }

  // Return if the list is empty
  isEmpty() {
	logger.debug('>>> Entering isEmpty()');
	logger.debug('<<< Exiting isEmpty()');
    return this.length === 0
  }

  // add a node at last it to linklist
  addLast(element) {
	logger.debug(`>>> Entering addLast(element=${element})`);
    // Check if its the first element
    if (this.headNode === null) {
      return this.addFirst(element)
    }
    const node = new Node(element)
    // Adding node at the end of the list and increase the length
	logger.debug(`addLast(element=${element}): node → ${node}`);
    this.tailNode.next = node
    this.tailNode = node
    this.length++
	logger.debug(`addLast(element=${element}): this.tailNode → ${this.tailNode}`);
    return this.size()
  }

  // add a node at first it to linklist
  addFirst(element) {
	logger.debug(`>>> Entering addFirst(element=${element})`);
    const node = new Node(element)
    // Check if its the first element
    if (this.headNode === null) {
	logger.debug(`addFirst(element=${element}): node → ${node}`);
      this.tailNode = node
    }
    // Adding node at the start of the list and increase the length
    node.next = this.headNode
	logger.debug(`addFirst(element=${element}): this.tailNode → ${this.tailNode}`);
	logger.debug(`addFirst(element=${element}): node.next → ${node.next}`);
    this.headNode = node
    this.length++
	logger.debug(`addFirst(element=${element}): this.headNode → ${this.headNode}`);
    return this.size()
  }

  // remove the first from the linklist
  removeFirst() {
	logger.debug('>>> Entering removeFirst()');
    // Check if head is null
    if (this.headNode === null) {
      return null
    }
    // Removing node at the start of the list and decrease the length
    const removedNode = this.headNode
    this.headNode = this.headNode.next
    this.length--
    // Check if the list is empty
	logger.debug(`removeFirst(): this.headNode → ${this.headNode}`);
    if (this.isEmpty()) {
      this.tailNode = null
    }
	logger.debug(`removeFirst(): this.tailNode → ${this.tailNode}`);
    return removedNode?.data
  }

  // remove the last from the linklist
  removeLast() {
	logger.debug('>>> Entering removeLast()');
    if (this.isEmpty()) return null
    // Check if there is only one element
    if (this.length === 1) {
      return this.removeFirst()
    }
    // Removing node at the end of the list and decrease the length
    const removedNode = this.tailNode
    let { currentNode } = this.initiateNodeAndIndex()
    while (currentNode.next.next) {
      currentNode = currentNode.next
    }
    currentNode.next = null
	logger.debug(`removeLast(): currentNode.next → ${currentNode.next}`);
    this.tailNode = currentNode
    this.length--
	logger.debug(`removeLast(): this.tailNode → ${this.tailNode}`);
    return removedNode.data
  }

  // Removes the node with the value as param
  remove(element) {
	logger.debug(`>>> Entering remove(element=${element})`);
    if (this.isEmpty()) return null
    let { currentNode } = this.initiateNodeAndIndex()
    let removedNode = null
	logger.debug(`remove(element=${element}): currentNode → ${currentNode}`);
    // Check if the head node is the element to remove
    if (currentNode.data === element) {
      return this.removeFirst()
    }
    // Check if the tail node is the element to remove
    if (this.tailNode.data === element) {
      return this.removeLast()
    }
    // Check which node is the node to remove
    while (currentNode.next) {
      if (currentNode.next.data === element) {
        removedNode = currentNode.next
        currentNode.next = currentNode.next.next
		logger.debug(`remove(element=${element}): currentNode.next → ${currentNode.next}`);
        this.length--
        return removedNode.data
      }
      currentNode = currentNode.next
    }
	logger.debug(`<<< Exiting remove(element=${element})`);
    return removedNode?.data || null
  }

  // Returns the index of the element passed as param otherwise -1
  indexOf(element) {
	logger.debug(`>>> Entering indexOf(element=${element})`);
    if (this.isEmpty()) return -1
    let { currentNode, currentIndex } = this.initiateNodeAndIndex()
    while (currentNode) {
      if (currentNode.data === element) {
        return currentIndex
      }
      currentNode = currentNode.next
      currentIndex++
    }
	logger.debug(`indexOf(element=${element}): currentNode → ${currentNode}`);
    return -1
  }

  // Returns the element at an index
  elementAt(index) {
	logger.debug(`>>> Entering elementAt(index=${index})`);
    if (index >= this.length || index < 0) {
      throw new RangeError('Out of Range index')
    }
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while (currentIndex < index) {
      currentIndex++
      currentNode = currentNode.next
    }
	logger.debug(`elementAt(index=${index}): currentNode → ${currentNode}`);
    return currentNode.data
  }

  // Adds the element at specified index
  addAt(index, element) {
	logger.debug(`>>> Entering addAt(index=${index},element=${element})`);
    // Check if index is out of bounds of list
    if (index > this.length || index < 0) {
      throw new RangeError('Out of Range index')
    }
    if (index === 0) return this.addFirst(element)
    if (index === this.length) return this.addLast(element)
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const node = new Node(element)

	logger.debug(`addAt(index=${index},element=${element}): currentNode → ${currentNode}`);
	logger.debug(`addAt(index=${index},element=${element}): node → ${node}`);
    while (currentIndex !== index - 1) {
      currentIndex++
      currentNode = currentNode.next
    }

    // Adding the node at specified index
    const tempNode = currentNode.next
    currentNode.next = node
	logger.debug(`addAt(index=${index},element=${element}): currentNode.next → ${currentNode.next}`);
    node.next = tempNode
	logger.debug(`addAt(index=${index},element=${element}): node.next → ${node.next}`);
    // Incrementing the length
    this.length++
	logger.debug(`<<< Exiting addAt(index=${index},element=${element})`);
    return this.size()
  }

  // Removes the node at specified index
  removeAt(index) {
	logger.debug(`>>> Entering removeAt(index=${index})`);
    // Check if index is present in list
    if (index < 0 || index >= this.length) {
      throw new RangeError('Out of Range index')
    }
    if (index === 0) return this.removeFirst()
    if (index === this.length - 1) return this.removeLast()

    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while (currentIndex !== index - 1) {
	logger.debug(`removeAt(index=${index}): currentNode → ${currentNode}`);
      currentIndex++
      currentNode = currentNode.next
    }
    const removedNode = currentNode.next
    currentNode.next = currentNode.next.next
	logger.debug(`removeAt(index=${index}): currentNode.next → ${currentNode.next}`);
    this.length--
	logger.debug(`<<< Exiting removeAt(index=${index})`);
    return removedNode.data
  }

  // Returns a reference to middle node of linked list
  findMiddle() {
	logger.debug('>>> Entering findMiddle()');
    // If there are two middle nodes, return the second middle node.
    let fast = this.headNode
    let slow = this.headNode

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
	logger.debug('<<< Exiting findMiddle()');
    return slow
  }

  // make the linkedList Empty
  clean() {
	logger.debug('>>> Entering clean()');
    this.headNode = null
    this.tailNode = null
    this.length = 0
	logger.debug(`clean(): this.length → ${this.length}`);
  }

  // Method to get the LinkedList
  get() {
	logger.debug('>>> Entering get()');
    const list = []
    let { currentNode } = this.initiateNodeAndIndex()
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }
	logger.debug(`get(): currentNode → ${currentNode}`);
    return list
  }

  // Method for Rotating a List to the right by k places
  rotateListRight(k) {
	logger.debug(`>>> Entering rotateListRight(k=${k})`);
    if (!this.headNode) return
    let current = this.headNode
    let tail = this.tailNode
    let count = 1
	logger.debug(`rotateListRight(k=${k}): count → ${count}`);
    while (current.next) {
      count++
      current = current.next
    }
    current.next = this.headNode
	logger.debug(`rotateListRight(k=${k}): current.next → ${current.next}`);
    tail = current
    k %= count
    while (count - k > 0) {
      tail = tail.next
      count--
    }
    this.headNode = tail.next
    tail.next = null
	logger.debug(`rotateListRight(k=${k}): tail.next → ${tail.next}`);
  }

  // Method to iterate over the LinkedList
  iterator() {
	logger.debug('>>> Entering iterator()');
    let { currentNode } = this.initiateNodeAndIndex()
    if (currentNode === null) return -1
	logger.debug(`iterator(): currentNode → ${currentNode}`);

    const iterate = function* () {
	logger.debug('>>> Entering iterate()');
      while (currentNode) {
        yield currentNode.data
        currentNode = currentNode.next
		logger.debug('<<< Exiting iterate()');
      }
    }
	logger.debug('<<< Exiting iterator()');
    return iterate()
  }

  // Method to log the LinkedList
  log() {
	logger.debug('>>> Entering log()');
    console.log(JSON.stringify(this.headNode, null, 2))
	logger.debug('<<< Exiting log()');
  }

  // Method to reverse the LinkedList
  reverse() {
	logger.debug('>>> Entering reverse()');
    let head = this.headNode
    let prev = null
    let next = null
    while (head) {
      next = head.next
      head.next = prev
	logger.debug(`reverse(): head.next → ${head.next}`);
      prev = head
      head = next
    }
    this.tailNode = this.headNode
    this.headNode = prev
	logger.debug(`reverse(): this.headNode → ${this.headNode}`);
  }
}

export { Node, LinkedList }
