const logger = console;
/*
  Breadth First Tree Traversal or level order traversal implementation in javascript
  Author: @GerardUbuntu
*/

class Node {
  constructor(data) {
	logger.debug(`>>> Entering constructor(data=${data})`);
	logger.debug('>>> Entering constructor()');
    this.data = data
    this.left = null
    this.right = null
	logger.debug(`constructor(): this.root → ${this.root}`);
	logger.debug(`constructor(data=${data}): this.right → ${this.right}`);
	logger.debug(`<<< Exiting constructor(data=${data})`);
	logger.debug('<<< Exiting constructor()');
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  breadthFirstIterative() {
	logger.debug('>>> Entering breadthFirstIterative()');
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
	logger.debug('<<< Exiting breadthFirstIterative()');
    return traversal
  }

  breadthFirstRecursive() {
	logger.debug('>>> Entering breadthFirstRecursive()');
    const traversal = []
    const h = this.getHeight(this.root)
    for (let i = 0; i !== h; i++) {
      this.traverseLevel(this.root, i, traversal)
    }
	logger.debug(`breadthFirstRecursive(): h → ${h}`);
	logger.debug('<<< Exiting breadthFirstRecursive()');
    return traversal
  }

  // Computing the height of the tree
  getHeight(node) {
	logger.debug(`>>> Entering getHeight(node=${node})`);
    if (node === null) {
      return 0
    }
    const lheight = this.getHeight(node.left)
    const rheight = this.getHeight(node.right)
	logger.debug(`<<< Exiting getHeight(node=${node})`);
    return lheight > rheight ? lheight + 1 : rheight + 1
  }

  traverseLevel(node, levelRemaining, traversal) {
	logger.debug(`>>> Entering traverseLevel(node=${node},levelRemaining=${levelRemaining},traversal=${traversal})`);
    if (node === null) {
      return
    }
    if (levelRemaining === 0) {
      traversal.push(node.data)
    } else {
      this.traverseLevel(node.left, levelRemaining - 1, traversal)
      this.traverseLevel(node.right, levelRemaining - 1, traversal)
    }
	logger.debug(`<<< Exiting traverseLevel(node=${node},levelRemaining=${levelRemaining},traversal=${traversal})`);
  }
}

export { BinaryTree, Node }
