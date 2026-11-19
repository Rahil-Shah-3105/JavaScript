const logger = console;
/*
  Breadth First Tree Traversal or level order traversal implementation in javascript
  Author: @GerardUbuntu
*/

class Node {
  constructor(data) {
	logger.error(`>>> Entering constructor(data=${data})`, { "event.action": "constructor" });
    this.data = data
    this.left = null
	logger.debug(`constructor(data=${data}): this.left → ${this.left}`, { "event.action": "constructor" });
	logger.debug(`constructor(data=${data}): this.data → ${this.data}`, { "event.action": "constructor" });
    this.right = null
	logger.debug(`constructor(data=${data}): this.right → ${this.right}`, { "event.action": "constructor" });
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
	logger.warn('<<< Exiting constructor()', { "event.action": "constructor" });
	logger.debug(`constructor(): this.root → ${this.root}`, { "event.action": "constructor" });
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  breadthFirstIterative() {
	logger.error('>>> Entering breadthFirstIterative()', { "event.action": "breadthFirstIterative" });
    const traversal = []
    if (this.root) {
      traversal.push(this.root)
    }
    for (let i = 0; i < traversal.length; i++) {
      const currentNode = traversal[i]
      if (currentNode.left) {
        traversal.push(currentNode.left)
      }
      if (currentNode.right) {
        traversal.push(currentNode.right)
      }
      traversal[i] = currentNode.data
    }
	logger.warn('<<< Exiting breadthFirstIterative()', { "event.action": "breadthFirstIterative" });
    return traversal
  }

  breadthFirstRecursive() {
	logger.error('>>> Entering breadthFirstRecursive()', { "event.action": "breadthFirstRecursive" });
    const traversal = []
    const h = this.getHeight(this.root)
    for (let i = 0; i !== h; i++) {
      this.traverseLevel(this.root, i, traversal)
    }
	logger.error(`breadthFirstRecursive(): h → ${h}`, { "event.action": "breadthFirstRecursive" });
	logger.warn('<<< Exiting breadthFirstRecursive()', { "event.action": "breadthFirstRecursive" });
    return traversal
  }

  // Computing the height of the tree
  getHeight(node) {
	logger.error(`>>> Entering getHeight(node=${node})`, { "event.action": "getHeight", "logrite.node": node });
    if (node === null) {
	logger.warn(`<<< Exiting getHeight(node=${node})`, { "event.action": "getHeight", "logrite.node": node });
      return 0
    }
    const lheight = this.getHeight(node.left)
    const rheight = this.getHeight(node.right)
    return lheight > rheight ? lheight + 1 : rheight + 1
  }

  traverseLevel(node, levelRemaining, traversal) {
	logger.error(`>>> Entering traverseLevel(node=${node},levelRemaining=${levelRemaining},traversal=${traversal})`, { "event.action": "traverseLevel", "logrite.node": node, "logrite.levelRemaining": levelRemaining, "logrite.traversal": traversal });
    if (node === null) {
      return
    }
    if (levelRemaining === 0) {
      traversal.push(node.data)
    } else {
      this.traverseLevel(node.left, levelRemaining - 1, traversal)
      this.traverseLevel(node.right, levelRemaining - 1, traversal)
    }
	logger.warn(`<<< Exiting traverseLevel(node=${node},levelRemaining=${levelRemaining},traversal=${traversal})`, { "event.action": "traverseLevel", "logrite.node": node, "logrite.levelRemaining": levelRemaining, "logrite.traversal": traversal });
  }
}

export { BinaryTree, Node }
