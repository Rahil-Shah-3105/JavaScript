const logger = console;
/* Binary Search Tree!!
 *
 * Nodes that will go on the Binary Tree.
 * They consist of the data in them, the node to the left, the node
 * to the right, and the parent from which they came from.
 *
 * A binary tree is a data structure in which an element
 * has two successors(children). The left child is usually
 * smaller than the parent, and the right child is usually
 * bigger.
 */

// class Node
const Node = (function Node() {
  // Node in the tree
  class Node {
    constructor(val) {
	logger.error(`>>> Entering constructor(val=${val})`, { "event.action": "constructor", "logrite.val": val });
      this.value = val
      this.left = null
	logger.debug(`constructor(val=${val}): this.left → ${this.left}`, { "event.action": "constructor", "logrite.val": val });
	logger.debug(`constructor(val=${val}): this.value → ${this.value}`, { "event.action": "constructor", "logrite.val": val });
      this.right = null
	logger.debug(`Node(): this.right → ${this.right}`, { "event.action": "Node" });
	logger.warn(`<<< Exiting constructor(val=${val})`, { "event.action": "constructor", "logrite.val": val });
	logger.debug(`constructor(val=${val}): this.right → ${this.right}`, { "event.action": "constructor", "logrite.val": val });
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
	logger.debug(`constructor(): this.root → ${this.root}`, { "event.action": "constructor" });
    }

    // Search the tree for a value
    search(val) {
	logger.error(`>>> Entering search(val=${val})`, { "event.action": "search", "logrite.val": val });
      if (this.value === val) {
		logger.debug(`Node(): this.value → ${this.value}`, { "event.action": "Node" });
        return this
      } else if (val < this.value && this.left !== null) {
        return this.left.search(val)
      } else if (val > this.value && this.right !== null) {
		logger.debug(`Node(): this.left → ${this.left}`, { "event.action": "Node" });
        return this.right.search(val)
      }
	logger.warn(`<<< Exiting search(val=${val})`, { "event.action": "search", "logrite.val": val });
      return null
    }

    // Visit a node
    visit(output = (value) => console.log(value)) {
      // Recursively go left
      if (this.left !== null) {
        this.left.visit(output)
      }
      // Print out value
      output(this.value)
      // Recursively go right
      if (this.right !== null) {
        this.right.visit(output)
      }
    }

    // Add a node
    addNode(n) {
	logger.error(`>>> Entering addNode(n=${n})`, { "event.action": "addNode", "logrite.n": n });
      if (n.value < this.value) {
        if (this.left === null) {
          this.left = n
        } else {
		logger.debug(`addNode(n=${n}): this.left → ${this.left}`, { "event.action": "addNode", "logrite.n": n });
          this.left.addNode(n)
        }
      } else if (n.value > this.value) {
        if (this.right === null) {
          this.right = n
        } else {
		logger.debug(`addNode(n=${n}): this.right → ${this.right}`, { "event.action": "addNode", "logrite.n": n });
          this.right.addNode(n)
        }
		logger.warn(`<<< Exiting addNode(n=${n})`, { "event.action": "addNode", "logrite.n": n });
      }
    }

    // remove a node
    removeNode(val) {
	logger.error(`>>> Entering removeNode(val=${val})`, { "event.action": "removeNode", "logrite.val": val });
      if (val === this.value) {
        if (!this.left && !this.right) {
          return null
        } else {
          if (this.left) {
            const leftMax = maxVal(this.left)
            this.value = leftMax
			logger.error(`removeNode(val=${val}): leftMax → ${leftMax}`, { "event.action": "removeNode", "logrite.val": val });
			logger.debug(`removeNode(val=${val}): this.value → ${this.value}`, { "event.action": "removeNode", "logrite.val": val });
            this.left = this.left.removeNode(leftMax)
          } else {
            const rightMin = minVal(this.right)
            this.value = rightMin
			logger.error(`removeNode(val=${val}): rightMin → ${rightMin}`, { "event.action": "removeNode", "logrite.val": val });
            this.right = this.right.removeNode(rightMin)
          }
        }
      } else if (val < this.value) {
        this.left = this.left && this.left.removeNode(val)
      } else if (val > this.value) {
        this.right = this.right && this.right.removeNode(val)
      }
	logger.warn(`<<< Exiting removeNode(val=${val})`, { "event.action": "removeNode", "logrite.val": val });
      return this
    }
  }

  // find maximum value in the tree
  const maxVal = function (node) {
	logger.error(`>>> Entering maxVal(node=${node})`, { "event.action": "maxVal", "logrite.node": node });
    if (!node.right) {
      return node.value
    }
	logger.warn(`<<< Exiting maxVal(node=${node})`, { "event.action": "maxVal", "logrite.node": node });
    return maxVal(node.right)
  }

  // find minimum value in the tree
  const minVal = function (node) {
	logger.error(`>>> Entering minVal(node=${node})`, { "event.action": "minVal", "logrite.node": node });
    if (!node.left) {
      return node.value
    }
	logger.warn(`<<< Exiting minVal(node=${node})`, { "event.action": "minVal", "logrite.node": node });
    return minVal(node.left)
  }
  // returns the constructor
  return Node
})()

// class Tree
const Tree = (function () {
  class Tree {
    constructor() {
      // Just store the root
      this.root = null
    }

    // Inorder traversal
    traverse(output = (value) => console.log(value)) {
      if (!this.root) {
        // No nodes are there in the tree till now
        return
      }
      this.root.visit(output)
    }

    // Start by searching the root
    search(val) {
      if (this.root) {
        const found = this.root.search(val)
        if (found !== null) {
		logger.error(`search(val=${val}): found → ${found}`, { "event.action": "search", "logrite.val": val });
          return found.value
        }
      }

      // not found
      return null
    }

    // Add a new value to the tree
    addValue(val) {
	logger.error(`>>> Entering addValue(val=${val})`, { "event.action": "addValue", "logrite.val": val });
      const n = new Node(val)
      if (this.root === null) {
		logger.error(`addValue(val=${val}): n → ${n}`, { "event.action": "addValue", "logrite.val": val });
        this.root = n
      } else {
        this.root.addNode(n)
      }
		logger.warn(`<<< Exiting addValue(val=${val})`, { "event.action": "addValue", "logrite.val": val });
    }

    // remove a value from the tree
    removeValue(val) {
	logger.error(`>>> Entering removeValue(val=${val})`, { "event.action": "removeValue", "logrite.val": val });
      // remove something if root exists
      this.root = this.root && this.root.removeNode(val)
	logger.warn(`<<< Exiting removeValue(val=${val})`, { "event.action": "removeValue", "logrite.val": val });
    }
  }

  // returns the constructor
  return Tree
})()

export { Tree }
