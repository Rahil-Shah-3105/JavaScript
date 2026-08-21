const logger = console;
// Methods - size, head, isEmpty, getElementAt, addAtFirst, add, clean, insertAt, remove, removeData, printData, get, clear
import { Node } from './SinglyLinkedList.js'

class SinglyCircularLinkedList {
  constructor() {
	logger.debug('>>> Entering constructor()');
    this.headNode = null
    this.length = 0
	logger.debug(`constructor(): this.headNode → ${this.headNode}`);
  }

  // Get size of the linkedList
  size = () => this.length
  // Get the headNode data
  head = () => this.headNode?.data || null
  // Check if the linkedList is empty
  isEmpty = () => this.length === 0

  // initiate the node and index
  initiateNodeAndIndex() {
	logger.debug('>>> Entering initiateNodeAndIndex()');
	logger.debug('<<< Exiting initiateNodeAndIndex()');
    return { currentNode: this.headNode, currentIndex: 0 }
  }

  // get the data specific to an index
  getElementAt(index) {
	logger.debug(`>>> Entering getElementAt(index=${index})`);
    if (this.length !== 0 && index >= 0 && index <= this.length) {
      let { currentNode } = this.initiateNodeAndIndex()
      for (let i = 0; i < index && currentNode !== null; i++) {
        currentNode = currentNode.next
      }
      return currentNode
    }
	logger.debug(`<<< Exiting getElementAt(index=${index})`);
    return undefined
  }

  // Add the element in the first position
  addAtFirst(data) {
	logger.debug(`>>> Entering addAtFirst(data=${data})`);
    const node = new Node(data)
    node.next = this.headNode
	logger.debug(`addAtFirst(data=${data}): node → ${node}`);
	logger.debug(`addAtFirst(data=${data}): node.next → ${node.next}`);
    this.headNode = node
    this.length++
	logger.debug(`addAtFirst(data=${data}): this.headNode → ${this.headNode}`);
    return this.length
  }

  // Add any data to the end of the linkedList
  add(data) {
	logger.debug(`>>> Entering add(data=${data})`);
    if (!this.headNode) {
      return this.addAtFirst(data)
    }
    const node = new Node(data)
    // Getting the last node
	logger.debug(`add(data=${data}): node → ${node}`);
    const currentNode = this.getElementAt(this.length - 1)
    currentNode.next = node
	logger.debug(`add(data=${data}): currentNode → ${currentNode}`);
    node.next = this.headNode
	logger.debug(`add(data=${data}): currentNode.next → ${currentNode.next}`);
    this.length++
	logger.debug(`add(data=${data}): node.next → ${node.next}`);
    return this.length
  }

  // insert data at a specific position
  insertAt(index, data) {
	logger.debug(`>>> Entering insertAt(index=${index},data=${data})`);
    if (index === 0) return this.addAtFirst(data)
    if (index === this.length) return this.add(data)
    if (index < 0 || index > this.length)
      throw new RangeError(`Index is out of range max ${this.length}`)
    const node = new Node(data)
    const previousNode = this.getElementAt(index - 1)
    node.next = previousNode.next
	logger.debug(`insertAt(index=${index},data=${data}): node → ${node}`);
	logger.debug(`insertAt(index=${index},data=${data}): previousNode → ${previousNode}`);
    previousNode.next = node
	logger.debug(`insertAt(index=${index},data=${data}): node.next → ${node.next}`);
    this.length++
	logger.debug(`insertAt(index=${index},data=${data}): previousNode.next → ${previousNode.next}`);
    return this.length
  }

  // find the first index of the data
  indexOf(data) {
	logger.debug(`>>> Entering indexOf(data=${data})`);
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
	logger.debug(`<<< Exiting indexOf(data=${data})`);
    return -1
  }

  // remove the data from the end of the list
  remove() {
	logger.debug('>>> Entering remove()');
    if (this.isEmpty()) return null
    const secondLastNode = this.getElementAt(this.length - 2)
    const removedNode = secondLastNode.next
	logger.debug(`remove(): secondLastNode → ${secondLastNode}`);
    secondLastNode.next = this.headNode
	logger.debug(`remove(): secondLastNode.next → ${secondLastNode.next}`);
    this.length--
	logger.debug('<<< Exiting remove()');
    return removedNode.data || null
  }

  // remove the data from the first of the list
  removeFirst() {
	logger.debug('>>> Entering removeFirst()');
    if (this.isEmpty()) return null
    const removedNode = this.headNode
    if (this.length === 1) {
      this.clear()
      return removedNode.data
    }
    const lastNode = this.getElementAt(this.length - 1)
    this.headNode = this.headNode.next
	logger.debug(`removeFirst(): lastNode → ${lastNode}`);
    lastNode.next = this.headNode
    this.length--
	logger.debug(`removeFirst(): this.headNode → ${this.headNode}`);
    return removedNode.data || null
  }

  // remove the data from the index
  removeAt(index) {
	logger.debug(`>>> Entering removeAt(index=${index})`);
    if (this.isEmpty()) return null
    if (index === 0) return this.removeFirst()
    if (index === this.length) return this.remove()
    if (index < 0 && index > this.length) return null
    const previousNode = this.getElementAt(index - 1)
    const currentNode = previousNode.next
	logger.debug(`removeAt(index=${index}): previousNode → ${previousNode}`);
    previousNode.next = currentNode.next
	logger.debug(`removeAt(index=${index}): previousNode.next → ${previousNode.next}`);
    this.length--
	logger.debug(`<<< Exiting removeAt(index=${index})`);
    return currentNode.data || null
  }

  // remove if the data is present
  removeData(data) {
	logger.debug(`>>> Entering removeData(data=${data})`);
    if (this.isEmpty()) return null
    const index = this.indexOf(data)
	logger.debug(`<<< Exiting removeData(data=${data})`);
    return this.removeAt(index)
  }

  // logs the data
  printData(output = (value) => console.log(value)) {
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()

    while (currentNode !== null && currentIndex < this.length) {
      output(currentNode.data)
      currentNode = currentNode.next
      currentIndex++
    }
  }

  // get the data from the linkedList
  get() {
	logger.debug('>>> Entering get()');
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const list = []
    while (currentNode !== null && currentIndex < this.length) {
      list.push(currentNode.data)
      currentNode = currentNode.next
      currentIndex++
    }
    return list
  }

  clear() {
	logger.debug('>>> Entering clear()');
    this.headNode = null
    this.length = 0
	logger.debug(`clear(): this.length → ${this.length}`);
  }
}

export { SinglyCircularLinkedList }
