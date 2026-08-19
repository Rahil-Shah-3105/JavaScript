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
logger.debug('>>> Entering Node()');
  // Node in the tree
  class Node {
    constructor(val) {
	logger.debug(`>>> Entering constructor(val=${val})`);
      this.value = val
      this.left = null
	logger.debug(`Node(): this.value → ${this.value}`);
      this.right = null
	logger.debug(`constructor(val=${val}): this.value → ${this.value}`);
	logger.debug(`<<< Exiting constructor(val=${val})`);
	logger.debug('>>> Entering constructor()');
	logger.debug('<<< Exiting constructor()');
    }

    // Search the tree for a value
    search(val) {
	logger.debug(`>>> Entering search(val=${val})`);
      if (this.value === val) {
        return this
      } else if (val < this.value && this.left !== null) {
        return this.left.search(val)
      } else if (val > this.value && this.right !== null) {
		logger.debug(`Node(): this.left → ${this.left}`);
        return this.right.search(val)
      }
	logger.debug(`<<< Exiting search(val=${val})`);
	logger.debug(`Node(): this.right → ${this.right}`);
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
	logger.debug(`>>> Entering addNode(n=${n})`);
      if (n.value < this.value) {
        if (this.left === null) {
          this.left = n
        } else {
          this.left.addNode(n)
        }
      } else if (n.value > this.value) {
		logger.debug(`addNode(n=${n}): this.left → ${this.left}`);
        if (this.right === null) {
          this.right = n
        } else {
          this.right.addNode(n)
        }
		logger.debug(`<<< Exiting addNode(n=${n})`);
      }
	logger.debug(`addNode(n=${n}): this.right → ${this.right}`);
    }

    // remove a node
    removeNode(val) {
	logger.debug(`>>> Entering removeNode(val=${val})`);
      if (val === this.value) {
        if (!this.left && !this.right) {
          return null
        } else {
          if (this.left) {
            const leftMax = maxVal(this.left)
            this.value = leftMax
			logger.debug(`removeNode(val=${val}): leftMax → ${leftMax}`);
            this.left = this.left.removeNode(leftMax)
          } else {
            const rightMin = minVal(this.right)
            this.value = rightMin
			logger.debug(`removeNode(val=${val}): rightMin → ${rightMin}`);
            this.right = this.right.removeNode(rightMin)
          }
        }
      } else if (val < this.value) {
        this.left = this.left && this.left.removeNode(val)
      } else if (val > this.value) {
		logger.debug(`removeNode(val=${val}): this.value → ${this.value}`);
        this.right = this.right && this.right.removeNode(val)
      }
	logger.debug(`<<< Exiting removeNode(val=${val})`);
      return this
    }
  }

  // find maximum value in the tree
  const maxVal = function (node) {
	logger.debug(`>>> Entering maxVal(node=${node})`);
    if (!node.right) {
      return node.value
    }
	logger.debug(`<<< Exiting maxVal(node=${node})`);
logger.debug('<<< Exiting Node()');
    return maxVal(node.right)
  }

  // find minimum value in the tree
  const minVal = function (node) {
	logger.debug(`>>> Entering minVal(node=${node})`);
    if (!node.left) {
      return node.value
    }
	logger.debug(`<<< Exiting minVal(node=${node})`);
    return minVal(node.left)
  }
  // returns the constructor
  return Node
})()

// class Tree
const Tree = (function () {
logger.debug('>>> Entering function()');
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
		logger.debug(`search(val=${val}): found → ${found}`);
          return found.value
        }
      }

      // not found
      return null
    }

    // Add a new value to the tree
    addValue(val) {
	logger.debug(`>>> Entering addValue(val=${val})`);
      const n = new Node(val)
      if (this.root === null) {
		logger.debug(`addValue(val=${val}): n → ${n}`);
        this.root = n
      } else {
        this.root.addNode(n)
      }
		logger.debug(`<<< Exiting addValue(val=${val})`);
		logger.debug(`addValue(val=${val}): this.root → ${this.root}`);
    }

    // remove a value from the tree
    removeValue(val) {
	logger.debug(`>>> Entering removeValue(val=${val})`);
      // remove something if root exists
      this.root = this.root && this.root.removeNode(val)
	logger.debug(`<<< Exiting removeValue(val=${val})`);
    }
  }

logger.debug('<<< Exiting function()');
  // returns the constructor
  return Tree
})()

export { Tree }
