const logger = console;
// Methods - size, head, isEmpty, getElementAt, addAtFirst, add, clean, insertAt, remove, removeData, printData, get, clear
import { Node } from './SinglyLinkedList.js'

class SinglyCircularLinkedList {
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.headNode = null
	logger.debug(`constructor(): this.headNode → ${this.headNode}`, { "event.action": "constructor" });
    this.length = 0
	logger.debug(`constructor(): this.length → ${this.length}`, { "event.action": "constructor" });
	logger.warn('<<< Exiting constructor()', { "event.action": "constructor" });
  }

  // Get size of the linkedList
  size = () => this.length
  // Get the headNode data
  head = () => this.headNode?.data || null
  // Check if the linkedList is empty
  isEmpty = () => this.length === 0

  // initiate the node and index
  initiateNodeAndIndex() {
	logger.error('>>> Entering initiateNodeAndIndex()', { "event.action": "initiateNodeAndIndex" });
	logger.warn('<<< Exiting initiateNodeAndIndex()', { "event.action": "initiateNodeAndIndex" });
    return { currentNode: this.headNode, currentIndex: 0 }
  }

  // get the data specific to an index
  getElementAt(index) {
	logger.error(`>>> Entering getElementAt(index=${index})`, { "event.action": "getElementAt", "logrite.index": index });
    if (this.length !== 0 && index >= 0 && index <= this.length) {
      let { currentNode } = this.initiateNodeAndIndex()
      for (let i = 0; i < index && currentNode !== null; i++) {
        currentNode = currentNode.next
      }
      return currentNode
    }
	logger.warn(`<<< Exiting getElementAt(index=${index})`, { "event.action": "getElementAt", "logrite.index": index });
    return undefined
  }

  // Add the element in the first position
  addAtFirst(data) {
	logger.error(`>>> Entering addAtFirst(data=${data})`, { "event.action": "addAtFirst" });
    const node = new Node(data)
    node.next = this.headNode
	logger.error(`addAtFirst(data=${data}): node → ${node}`, { "event.action": "addAtFirst" });
	logger.debug(`addAtFirst(data=${data}): node.next → ${node.next}`, { "event.action": "addAtFirst" });
    this.headNode = node
    this.length++
	logger.debug(`addAtFirst(data=${data}): this.headNode → ${this.headNode}`, { "event.action": "addAtFirst" });
	logger.warn(`<<< Exiting addAtFirst(data=${data})`, { "event.action": "addAtFirst" });
    return this.length
  }

  // Add any data to the end of the linkedList
  add(data) {
	logger.error(`>>> Entering add(data=${data})`, { "event.action": "add" });
    if (!this.headNode) {
      return this.addAtFirst(data)
    }
    const node = new Node(data)
    // Getting the last node
	logger.error(`add(data=${data}): node → ${node}`, { "event.action": "add" });
    const currentNode = this.getElementAt(this.length - 1)
    currentNode.next = node
	logger.debug(`add(data=${data}): currentNode.next → ${currentNode.next}`, { "event.action": "add" });
	logger.error(`add(data=${data}): currentNode → ${currentNode}`, { "event.action": "add" });
    node.next = this.headNode
	logger.debug(`add(data=${data}): node.next → ${node.next}`, { "event.action": "add" });
    this.length++
	logger.warn(`<<< Exiting add(data=${data})`, { "event.action": "add" });
    return this.length
  }

  // insert data at a specific position
  insertAt(index, data) {
	logger.error(`>>> Entering insertAt(index=${index},data=${data})`, { "event.action": "insertAt", "logrite.index": index });
    if (index === 0) return this.addAtFirst(data)
    if (index === this.length) return this.add(data)
    if (index < 0 || index > this.length)
      throw new RangeError(`Index is out of range max ${this.length}`)
    const node = new Node(data)
    const previousNode = this.getElementAt(index - 1)
    node.next = previousNode.next
	logger.debug(`insertAt(index=${index},data=${data}): node.next → ${node.next}`, { "event.action": "insertAt", "logrite.index": index });
	logger.error(`insertAt(index=${index},data=${data}): node → ${node}`, { "event.action": "insertAt", "logrite.index": index });
    previousNode.next = node
	logger.debug(`insertAt(index=${index},data=${data}): previousNode.next → ${previousNode.next}`, { "event.action": "insertAt", "logrite.index": index });
    this.length++
	logger.warn(`<<< Exiting insertAt(index=${index},data=${data})`, { "event.action": "insertAt", "logrite.index": index });
    return this.length
  }

  // find the first index of the data
  indexOf(data) {
	logger.error(`>>> Entering indexOf(data=${data})`, { "event.action": "indexOf" });
    let { currentNode } = this.initiateNodeAndIndex()
    // initializing currentIndex as -1
    let currentIndex = -1
    while (currentNode) {
      if (currentNode.data === data) {
        return currentIndex + 1
      }
      currentIndex++
      currentNode = currentNode.next
    }
	logger.warn(`<<< Exiting indexOf(data=${data})`, { "event.action": "indexOf" });
    return -1
  }

  // remove the data from the end of the list
  remove() {
	logger.error('>>> Entering remove()', { "event.action": "remove" });
    if (this.isEmpty()) return null
    const secondLastNode = this.getElementAt(this.length - 2)
    const removedNode = secondLastNode.next
	logger.error(`remove(): secondLastNode → ${secondLastNode}`, { "event.action": "remove" });
    secondLastNode.next = this.headNode
	logger.debug(`remove(): secondLastNode.next → ${secondLastNode.next}`, { "event.action": "remove" });
    this.length--
	logger.warn('<<< Exiting remove()', { "event.action": "remove" });
    return removedNode.data || null
  }

  // remove the data from the first of the list
  removeFirst() {
	logger.error('>>> Entering removeFirst()', { "event.action": "removeFirst" });
    if (this.isEmpty()) return null
    const removedNode = this.headNode
    if (this.length === 1) {
      this.clear()
      return removedNode.data
    }
    const lastNode = this.getElementAt(this.length - 1)
    this.headNode = this.headNode.next
	logger.error(`removeFirst(): lastNode → ${lastNode}`, { "event.action": "removeFirst" });
    lastNode.next = this.headNode
	logger.debug(`removeFirst(): lastNode.next → ${lastNode.next}`, { "event.action": "removeFirst" });
	logger.debug(`removeFirst(): this.headNode → ${this.headNode}`, { "event.action": "removeFirst" });
    this.length--
	logger.warn('<<< Exiting removeFirst()', { "event.action": "removeFirst" });
    return removedNode.data || null
  }

  // remove the data from the index
  removeAt(index) {
	logger.error(`>>> Entering removeAt(index=${index})`, { "event.action": "removeAt", "logrite.index": index });
    if (this.isEmpty()) return null
    if (index === 0) return this.removeFirst()
    if (index === this.length) return this.remove()
    if (index < 0 && index > this.length) return null
    const previousNode = this.getElementAt(index - 1)
    const currentNode = previousNode.next
	logger.error(`removeAt(index=${index}): previousNode → ${previousNode}`, { "event.action": "removeAt", "logrite.index": index });
    previousNode.next = currentNode.next
	logger.debug(`removeAt(index=${index}): previousNode.next → ${previousNode.next}`, { "event.action": "removeAt", "logrite.index": index });
    this.length--
	logger.warn(`<<< Exiting removeAt(index=${index})`, { "event.action": "removeAt", "logrite.index": index });
    return currentNode.data || null
  }

  // remove if the data is present
  removeData(data) {
	logger.error(`>>> Entering removeData(data=${data})`, { "event.action": "removeData" });
    if (this.isEmpty()) return null
    const index = this.indexOf(data)
	logger.warn(`<<< Exiting removeData(data=${data})`, { "event.action": "removeData" });
    return this.removeAt(index)
  }

  // logs the data
  printData(output = (value) => console.log(value)) {
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()

    while (currentNode !== null && currentIndex < this.length) {
      output(currentNode.data)
      currentNode = currentNode.next
	logger.debug(`printData(output=${output}): currentNode → ${currentNode}`, { "event.action": "printData", "logrite.output": output });
      currentIndex++
    }
  }

  // get the data from the linkedList
  get() {
	logger.error('>>> Entering get()', { "event.action": "get" });
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const list = []
    while (currentNode !== null && currentIndex < this.length) {
      list.push(currentNode.data)
      currentNode = currentNode.next
	logger.debug(`get(): currentNode → ${currentNode}`, { "event.action": "get" });
      currentIndex++
    }
    return list
  }

  clear() {
	logger.error('>>> Entering clear()', { "event.action": "clear" });
    this.headNode = null
	logger.debug(`clear(): this.headNode → ${this.headNode}`, { "event.action": "clear" });
    this.length = 0
	logger.debug(`clear(): this.length → ${this.length}`, { "event.action": "clear" });
	logger.warn('<<< Exiting clear()', { "event.action": "clear" });
  }
}

export { SinglyCircularLinkedList }
