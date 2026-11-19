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
	logger.error(`>>> Entering constructor(data=${data})`, { "event.action": "constructor" });
    this.data = data
	logger.debug(`constructor(data=${data}): this.data → ${this.data}`, { "event.action": "constructor" });
	logger.warn(`<<< Exiting constructor(data=${data})`, { "event.action": "constructor" });
    this.next = null
	logger.debug(`constructor(data=${data}): this.next → ${this.next}`, { "event.action": "constructor" });
	logger.warn(`<<< Exiting constructor(data=${data})`, { "event.action": "constructor", "logrite.listOfValues": listOfValues });
  }
}

class LinkedList {
  constructor(listOfValues) {
	logger.error(`>>> Entering constructor(listOfValues=${listOfValues})`, { "event.action": "constructor", "logrite.listOfValues": listOfValues });
    this.headNode = null
    this.tailNode = null
	logger.debug(`constructor(listOfValues=${listOfValues}): this.headNode → ${this.headNode}`, { "event.action": "constructor", "logrite.listOfValues": listOfValues });
	logger.debug(`constructor(listOfValues=${listOfValues}): this.tailNode → ${this.tailNode}`, { "event.action": "constructor", "logrite.listOfValues": listOfValues });
    this.length = 0

	logger.debug(`constructor(listOfValues=${listOfValues}): this.length → ${this.length}`, { "event.action": "constructor", "logrite.listOfValues": listOfValues });
    if (listOfValues instanceof Array) {
      for (const value of listOfValues) {
        this.addLast(value)
      }
    }
  }

  // initiates the currentNode and currentIndex and return as an object
  initiateNodeAndIndex() {
	logger.error('>>> Entering initiateNodeAndIndex()', { "event.action": "initiateNodeAndIndex" });
	logger.warn('<<< Exiting initiateNodeAndIndex()', { "event.action": "initiateNodeAndIndex" });
    return { currentNode: this.headNode, currentIndex: 0 }
  }

  // Returns length
  size() {
	logger.error('>>> Entering size()', { "event.action": "size" });
	logger.warn('<<< Exiting size()', { "event.action": "size" });
    return this.length
  }

  // Returns the head
  head() {
	logger.error('>>> Entering head()', { "event.action": "head" });
	logger.warn('<<< Exiting head()', { "event.action": "head" });
    return this.headNode?.data ?? null
  }

  // Returns the tail
  tail() {
	logger.error('>>> Entering tail()', { "event.action": "tail" });
	logger.warn('<<< Exiting tail()', { "event.action": "tail" });
    return this.tailNode?.data ?? null
  }

  // Return if the list is empty
  isEmpty() {
	logger.error('>>> Entering isEmpty()', { "event.action": "isEmpty" });
	logger.warn('<<< Exiting isEmpty()', { "event.action": "isEmpty" });
    return this.length === 0
  }

  // add a node at last it to linklist
  addLast(element) {
	logger.error(`>>> Entering addLast(element=${element})`, { "event.action": "addLast", "logrite.element": element });
    // Check if its the first element
    if (this.headNode === null) {
      return this.addFirst(element)
    }
    const node = new Node(element)
    // Adding node at the end of the list and increase the length
	logger.error(`addLast(element=${element}): node → ${node}`, { "event.action": "addLast", "logrite.element": element });
    this.tailNode.next = node
    this.tailNode = node
	logger.debug(`addLast(element=${element}): this.tailNode → ${this.tailNode}`, { "event.action": "addLast", "logrite.element": element });
    this.length++
	logger.warn(`<<< Exiting addLast(element=${element})`, { "event.action": "addLast", "logrite.element": element });
    return this.size()
  }

  // add a node at first it to linklist
  addFirst(element) {
	logger.error(`>>> Entering addFirst(element=${element})`, { "event.action": "addFirst", "logrite.element": element });
    const node = new Node(element)
    // Check if its the first element
    if (this.headNode === null) {
	logger.error(`addFirst(element=${element}): node → ${node}`, { "event.action": "addFirst", "logrite.element": element });
      this.tailNode = node
	logger.debug(`addFirst(element=${element}): this.tailNode → ${this.tailNode}`, { "event.action": "addFirst", "logrite.element": element });
    }
    // Adding node at the start of the list and increase the length
    node.next = this.headNode
	logger.debug(`addFirst(element=${element}): node.next → ${node.next}`, { "event.action": "addFirst", "logrite.element": element });
    this.headNode = node
	logger.debug(`addFirst(element=${element}): this.headNode → ${this.headNode}`, { "event.action": "addFirst", "logrite.element": element });
    this.length++
	logger.warn(`<<< Exiting addFirst(element=${element})`, { "event.action": "addFirst", "logrite.element": element });
    return this.size()
  }

  // remove the first from the linklist
  removeFirst() {
	logger.error('>>> Entering removeFirst()', { "event.action": "removeFirst" });
    // Check if head is null
    if (this.headNode === null) {
      return null
    }
    // Removing node at the start of the list and decrease the length
    const removedNode = this.headNode
    this.headNode = this.headNode.next
	logger.debug(`removeFirst(): this.headNode → ${this.headNode}`, { "event.action": "removeFirst" });
    this.length--
    // Check if the list is empty
    if (this.isEmpty()) {
      this.tailNode = null
	logger.debug(`removeFirst(): this.tailNode → ${this.tailNode}`, { "event.action": "removeFirst" });
    }
	logger.warn('<<< Exiting removeFirst()', { "event.action": "removeFirst" });
    return removedNode?.data
  }

  // remove the last from the linklist
  removeLast() {
	logger.error('>>> Entering removeLast()', { "event.action": "removeLast" });
    if (this.isEmpty()) return null
    // Check if there is only one element
    if (this.length === 1) {
      return this.removeFirst()
    }
    // Removing node at the end of the list and decrease the length
    const removedNode = this.tailNode
    let { currentNode } = this.initiateNodeAndIndex()
    while (currentNode.next.next) {
	logger.debug(`removeLast(): currentNode.next → ${currentNode.next}`, { "event.action": "removeLast" });
      currentNode = currentNode.next
    }
    currentNode.next = null
    this.tailNode = currentNode
	logger.debug(`removeLast(): this.tailNode → ${this.tailNode}`, { "event.action": "removeLast" });
    this.length--
	logger.warn('<<< Exiting removeLast()', { "event.action": "removeLast" });
    return removedNode.data
  }

  // Removes the node with the value as param
  remove(element) {
	logger.error(`>>> Entering remove(element=${element})`, { "event.action": "remove", "logrite.element": element });
    if (this.isEmpty()) return null
    let { currentNode } = this.initiateNodeAndIndex()
    let removedNode = null
	logger.debug(`remove(element=${element}): currentNode.next → ${currentNode.next}`, { "event.action": "remove", "logrite.element": element });
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
        this.length--
        return removedNode.data
      }
      currentNode = currentNode.next
    }
    return removedNode?.data || null
  }

  // Returns the index of the element passed as param otherwise -1
  indexOf(element) {
	logger.error(`>>> Entering indexOf(element=${element})`, { "event.action": "indexOf", "logrite.element": element });
    if (this.isEmpty()) return -1
    let { currentNode, currentIndex } = this.initiateNodeAndIndex()
    while (currentNode) {
      if (currentNode.data === element) {
        return currentIndex
      }
      currentNode = currentNode.next
      currentIndex++
    }
	logger.warn(`<<< Exiting indexOf(element=${element})`, { "event.action": "indexOf", "logrite.element": element });
    return -1
  }

  // Returns the element at an index
  elementAt(index) {
	logger.error(`>>> Entering elementAt(index=${index})`, { "event.action": "elementAt", "logrite.index": index });
    if (index >= this.length || index < 0) {
	logger.warn(`<<< Exiting elementAt(index=${index})`, { "event.action": "elementAt", "logrite.index": index });
      throw new RangeError('Out of Range index')
    }
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while (currentIndex < index) {
      currentIndex++
      currentNode = currentNode.next
    }
	logger.debug(`elementAt(index=${index}): currentNode → ${currentNode}`, { "event.action": "elementAt", "logrite.index": index });
    return currentNode.data
  }

  // Adds the element at specified index
  addAt(index, element) {
	logger.error(`>>> Entering addAt(index=${index},element=${element})`, { "event.action": "addAt", "logrite.index": index, "logrite.element": element });
    // Check if index is out of bounds of list
    if (index > this.length || index < 0) {
	logger.debug(`addAt(index=${index},element=${element}): currentNode → ${currentNode}`, { "event.action": "addAt", "logrite.index": index, "logrite.element": element });
      throw new RangeError('Out of Range index')
    }
    if (index === 0) return this.addFirst(element)
    if (index === this.length) return this.addLast(element)
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const node = new Node(element)

	logger.error(`addAt(index=${index},element=${element}): node → ${node}`, { "event.action": "addAt", "logrite.index": index, "logrite.element": element });
    while (currentIndex !== index - 1) {
	logger.debug(`addAt(index=${index},element=${element}): currentNode.next → ${currentNode.next}`, { "event.action": "addAt", "logrite.index": index, "logrite.element": element });
      currentIndex++
      currentNode = currentNode.next
	logger.debug(`addAt(index=${index},element=${element}): node.next → ${node.next}`, { "event.action": "addAt", "logrite.index": index, "logrite.element": element });
    }

    // Adding the node at specified index
    const tempNode = currentNode.next
    currentNode.next = node
    node.next = tempNode
    // Incrementing the length
    this.length++
	logger.warn(`<<< Exiting addAt(index=${index},element=${element})`, { "event.action": "addAt", "logrite.index": index, "logrite.element": element });
    return this.size()
  }

  // Removes the node at specified index
  removeAt(index) {
	logger.error(`>>> Entering removeAt(index=${index})`, { "event.action": "removeAt", "logrite.index": index });
    // Check if index is present in list
    if (index < 0 || index >= this.length) {
	logger.debug(`removeAt(index=${index}): currentNode.next → ${currentNode.next}`, { "event.action": "removeAt", "logrite.index": index });
      throw new RangeError('Out of Range index')
    }
    if (index === 0) return this.removeFirst()
    if (index === this.length - 1) return this.removeLast()

    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while (currentIndex !== index - 1) {
      currentIndex++
      currentNode = currentNode.next
	logger.debug(`removeAt(index=${index}): currentNode → ${currentNode}`, { "event.action": "removeAt", "logrite.index": index });
    }
    const removedNode = currentNode.next
    currentNode.next = currentNode.next.next
    this.length--
	logger.warn(`<<< Exiting removeAt(index=${index})`, { "event.action": "removeAt", "logrite.index": index });
    return removedNode.data
  }

  // Returns a reference to middle node of linked list
  findMiddle() {
	logger.error('>>> Entering findMiddle()', { "event.action": "findMiddle" });
    // If there are two middle nodes, return the second middle node.
    let fast = this.headNode
    let slow = this.headNode

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
	logger.warn('<<< Exiting findMiddle()', { "event.action": "findMiddle" });
    return slow
  }

  // make the linkedList Empty
  clean() {
	logger.error('>>> Entering clean()', { "event.action": "clean" });
    this.headNode = null
    this.tailNode = null
	logger.debug(`clean(): this.headNode → ${this.headNode}`, { "event.action": "clean" });
	logger.debug(`clean(): this.tailNode → ${this.tailNode}`, { "event.action": "clean" });
    this.length = 0
	logger.debug(`clean(): this.length → ${this.length}`, { "event.action": "clean" });
  }

  // Method to get the LinkedList
  get() {
	logger.error('>>> Entering get()', { "event.action": "get" });
    const list = []
    let { currentNode } = this.initiateNodeAndIndex()
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }
	logger.warn('<<< Exiting get()', { "event.action": "get" });
    return list
  }

  // Method for Rotating a List to the right by k places
  rotateListRight(k) {
	logger.error(`>>> Entering rotateListRight(k=${k})`, { "event.action": "rotateListRight", "logrite.k": k });
    if (!this.headNode) return
    let current = this.headNode
	logger.debug(`rotateListRight(k=${k}): current.next → ${current.next}`, { "event.action": "rotateListRight", "logrite.k": k });
    let tail = this.tailNode
    let count = 1
	logger.error(`rotateListRight(k=${k}): count → ${count}`, { "event.action": "rotateListRight", "logrite.k": k });
    while (current.next) {
      count++
      current = current.next
    }
    current.next = this.headNode
    tail = current
    k %= count
    while (count - k > 0) {
      tail = tail.next
      count--
    }
    this.headNode = tail.next
	logger.debug(`rotateListRight(k=${k}): this.headNode → ${this.headNode}`, { "event.action": "rotateListRight", "logrite.k": k });
    tail.next = null
	logger.warn(`<<< Exiting rotateListRight(k=${k})`, { "event.action": "rotateListRight", "logrite.k": k });
  }

  // Method to iterate over the LinkedList
  iterator() {
	logger.error('>>> Entering iterator()', { "event.action": "iterator" });
    let { currentNode } = this.initiateNodeAndIndex()
    if (currentNode === null) return -1

    const iterate = function* () {
	logger.error('>>> Entering iterate()', { "event.action": "iterate" });
      while (currentNode) {
        yield currentNode.data
        currentNode = currentNode.next
		logger.warn('<<< Exiting iterate()', { "event.action": "iterate" });
      }
    }
	logger.warn('<<< Exiting iterator()', { "event.action": "iterator" });
    return iterate()
  }

  // Method to log the LinkedList
  log() {
	logger.error('>>> Entering log()', { "event.action": "log" });
    console.log(JSON.stringify(this.headNode, null, 2))
	logger.warn('<<< Exiting log()', { "event.action": "log" });
  }

  // Method to reverse the LinkedList
  reverse() {
	logger.error('>>> Entering reverse()', { "event.action": "reverse" });
    let head = this.headNode
    let prev = null
    let next = null
    while (head) {
      next = head.next
      head.next = prev
      prev = head
      head = next
    }
    this.tailNode = this.headNode
	logger.debug(`reverse(): this.tailNode → ${this.tailNode}`, { "event.action": "reverse" });
    this.headNode = prev
	logger.debug(`reverse(): this.headNode → ${this.headNode}`, { "event.action": "reverse" });
	logger.warn('<<< Exiting reverse()', { "event.action": "reverse" });
  }
}

export { Node, LinkedList }
