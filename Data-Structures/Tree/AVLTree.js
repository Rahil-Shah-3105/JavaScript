const logger = console;
/**
 * Adelson-Velsky and Landis Tree
 * [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
 * [A video lecture](http://www.youtube.com/watch?v=TbvhGcf6UJU)
 */
'use strict'

/**
 * A utility class for comparator
 * A comparator is expected to have following structure
 *
 * comp(a, b) RETURN < 0 if a < b
 * RETURN > 0 if a > b
 * MUST RETURN 0 if a == b
 */
let utils
;(function (_utils) {
  function comparator() {
	logger.error('>>> Entering comparator()', { "event.action": "comparator" });
    return function (v1, v2) {
      if (v1 < v2) return -1
      if (v2 < v1) return 1
	logger.warn('<<< Exiting comparator()', { "event.action": "comparator" });
      return 0
    }
  }
  _utils.comparator = comparator
})(utils || (utils = {}))

/**
 * @constructor
 * A class for AVL Tree
 * @argument comp - A function used by AVL Tree For Comparison
 * If no argument is sent it uses utils.comparator
 */
class AVLTree {
  constructor(comp) {
	logger.error(`>>> Entering constructor(comp=${comp})`, { "event.action": "constructor", "logrite.comp": comp });
    /** @public comparator function */
    this._comp = undefined
    this._comp = comp !== undefined ? comp : utils.comparator()
	logger.debug(`constructor(comp=${comp}): this._comp → ${this._comp}`, { "event.action": "constructor", "logrite.comp": comp });

    /** @public root of the AVL Tree */
    this.root = null
	logger.debug(`constructor(comp=${comp}): this.root → ${this.root}`, { "event.action": "constructor", "logrite.comp": comp });
    /** @public number of elements in AVL Tree */
    this.size = 0
	logger.debug(`constructor(comp=${comp}): this.size → ${this.size}`, { "event.action": "constructor", "logrite.comp": comp });
  }

  /* Public Functions */
  /**
   * For Adding Elements to AVL Tree
   * @param {any} _val
   * Since in AVL Tree an element can only occur once so
   * if a element exists it return false
   * @returns {Boolean} element added or not
   */
  add(_val) {
	logger.error(`>>> Entering add(_val=${_val})`, { "event.action": "add", "logrite._val": _val });
    const prevSize = this.size
    this.root = insert(this.root, _val, this)
	logger.warn(`<<< Exiting add(_val=${_val})`, { "event.action": "add", "logrite._val": _val });
    return this.size !== prevSize
  }

  /**
   * TO check is a particular element exists or not
   * @param {any} _val
   * @returns {Boolean} exists or not
   */
  find(_val) {
	logger.error(`>>> Entering find(_val=${_val})`, { "event.action": "find", "logrite._val": _val });
    const temp = searchAVLTree(this.root, _val, this)
	logger.warn(`<<< Exiting find(_val=${_val})`, { "event.action": "find", "logrite._val": _val });
    return temp != null
  }

  /**
   *
   * @param {any} _val
   * It is possible that element doesn't exists in tree
   * in that case it return false
   * @returns {Boolean} if element was found and deleted
   */
  remove(_val) {
	logger.error(`>>> Entering remove(_val=${_val})`, { "event.action": "remove", "logrite._val": _val });
    const prevSize = this.size
    this.root = deleteElement(this.root, _val, this)
	logger.warn(`<<< Exiting remove(_val=${_val})`, { "event.action": "remove", "logrite._val": _val });
    return prevSize !== this.size
  }
}

// creates new Node Object
class Node {
  constructor(val) {
	logger.error(`>>> Entering constructor(val=${val})`, { "event.action": "constructor", "logrite.val": val });
    this._val = val
    this._left = null
	logger.debug(`constructor(val=${val}): this._val → ${this._val}`, { "event.action": "constructor", "logrite.val": val });
	logger.debug(`constructor(val=${val}): this._left → ${this._left}`, { "event.action": "constructor", "logrite.val": val });
    this._right = null
    this._height = 1
	logger.debug(`constructor(val=${val}): this._height → ${this._height}`, { "event.action": "constructor", "logrite.val": val });
  }
}

// get height of a node
const getHeight = function (node) {
logger.error(`>>> Entering getHeight(node=${node})`, { "event.action": "getHeight", "logrite.node": node });
  if (node == null) {
    return 0
  }
logger.warn(`<<< Exiting getHeight(node=${node})`, { "event.action": "getHeight", "logrite.node": node });
  return node._height
}

// height difference or balance factor of a node
const getHeightDifference = function (node) {
logger.error(`>>> Entering getHeightDifference(node=${node})`, { "event.action": "getHeightDifference", "logrite.node": node });
logger.warn(`<<< Exiting getHeightDifference(node=${node})`, { "event.action": "getHeightDifference", "logrite.node": node });
  return node == null ? 0 : getHeight(node._left) - getHeight(node._right)
}

// update height of a node based on children's heights
const updateHeight = function (node) {
logger.error(`>>> Entering updateHeight(node=${node})`, { "event.action": "updateHeight", "logrite.node": node });
  if (node == null) {
    return
  }
  node._height = Math.max(getHeight(node._left), getHeight(node._right)) + 1
logger.warn(`<<< Exiting updateHeight(node=${node})`, { "event.action": "updateHeight", "logrite.node": node });
}

// Helper: To check if the balanceFactor is valid
const isValidBalanceFactor = (balanceFactor) =>
  [0, 1, -1].includes(balanceFactor)

// rotations of AVL Tree
const leftRotate = function (node) {
logger.error(`>>> Entering leftRotate(node=${node})`, { "event.action": "leftRotate", "logrite.node": node });
  const temp = node._right
  node._right = temp._left
logger.debug(`leftRotate(node=${node}): node._right → ${node._right}`, { "event.action": "leftRotate", "logrite.node": node });
  temp._left = node
logger.debug(`leftRotate(node=${node}): temp._left → ${temp._left}`, { "event.action": "leftRotate", "logrite.node": node });
  updateHeight(node)
  updateHeight(temp)
logger.warn(`<<< Exiting leftRotate(node=${node})`, { "event.action": "leftRotate", "logrite.node": node });
  return temp
}
const rightRotate = function (node) {
logger.error(`>>> Entering rightRotate(node=${node})`, { "event.action": "rightRotate", "logrite.node": node });
  const temp = node._left
  node._left = temp._right
logger.debug(`rightRotate(node=${node}): node._left → ${node._left}`, { "event.action": "rightRotate", "logrite.node": node });
  temp._right = node
logger.debug(`rightRotate(node=${node}): temp._right → ${temp._right}`, { "event.action": "rightRotate", "logrite.node": node });
  updateHeight(node)
  updateHeight(temp)
logger.warn(`<<< Exiting rightRotate(node=${node})`, { "event.action": "rightRotate", "logrite.node": node });
  return temp
}

// check if tree is balanced else balance it for insertion
const insertBalance = function (node, _val, balanceFactor, tree) {
  if (balanceFactor > 1 && tree._comp(_val, node._left._val) < 0) {
    return rightRotate(node) // Left Left Case
  }
  if (balanceFactor < 1 && tree._comp(_val, node._right._val) > 0) {
    return leftRotate(node) // Right Right Case
  }
  if (balanceFactor > 1 && tree._comp(_val, node._left._val) > 0) {
    node._left = leftRotate(node._left) // Left Right Case
    return rightRotate(node)
  }
  node._right = rightRotate(node._right)
logger.warn(`<<< Exiting insertBalance(node=${node},_val=${_val},balanceFactor=${balanceFactor},tree=${tree})`, { "event.action": "insertBalance", "logrite.node": node, "logrite._val": _val, "logrite.balanceFactor": balanceFactor, "logrite.tree": tree });
  return leftRotate(node)
}

// check if tree is balanced after deletion
const delBalance = function (node) {
  const balanceFactor1 = getHeightDifference(node)
  if (isValidBalanceFactor(balanceFactor1)) {
    return node
  }
  if (balanceFactor1 > 1) {
    if (getHeightDifference(node._left) >= 0) {
      return rightRotate(node) // Left Left
    }
    node._left = leftRotate(node._left)
    return rightRotate(node) // Left Right
  }
  if (getHeightDifference(node._right) > 0) {
    node._right = rightRotate(node._right)
    return leftRotate(node) // Right Left
  }
  return leftRotate(node) // Right Right
}

// implement avl tree insertion
const insert = function (root, val, tree) {
logger.error(`>>> Entering insert(root=${root},val=${val},tree=${tree})`, { "event.action": "insert", "logrite.root": root, "logrite.val": val, "logrite.tree": tree });
  if (root == null) {
    tree.size++
    return new Node(val)
  }
  if (tree._comp(root._val, val) < 0) {
    root._right = insert(root._right, val, tree)
  } else if (tree._comp(root._val, val) > 0) {
    root._left = insert(root._left, val, tree)
  } else {
    return root
  }
  updateHeight(root)
  const balanceFactor = getHeightDifference(root)
  return isValidBalanceFactor(balanceFactor)
    ? root
    : insertBalance(root, val, balanceFactor, tree)
	logger.error(`insert(root=${root},val=${val},tree=${tree}): balanceFactor → ${balanceFactor}`, { "event.action": "insert", "logrite.root": root, "logrite.val": val, "logrite.tree": tree });
}

// delete am element
const deleteElement = function (root, _val, tree) {
logger.error(`>>> Entering deleteElement(root=${root},_val=${_val},tree=${tree})`, { "event.action": "deleteElement", "logrite.root": root, "logrite._val": _val, "logrite.tree": tree });
  if (root == null) {
    return root
  }
  if (tree._comp(root._val, _val) === 0) {
    // key found case
    if (root._left === null && root._right === null) {
      root = null
      tree.size--
    } else if (root._left === null) {
      root = root._right
      tree.size--
    } else if (root._right === null) {
      root = root._left
      tree.size--
    } else {
      let temp = root._right
      while (temp._left != null) {
        temp = temp._left
      }
      root._val = temp._val
      root._right = deleteElement(root._right, temp._val, tree)
    }
  } else {
    if (tree._comp(root._val, _val) < 0) {
      root._right = deleteElement(root._right, _val, tree)
    } else {
      root._left = deleteElement(root._left, _val, tree)
    }
  }
  updateHeight(root)
  root = delBalance(root)
logger.debug(`deleteElement(root=${root},_val=${_val},tree=${tree}): root._val → ${root._val}`, { "event.action": "deleteElement", "logrite.root": root, "logrite._val": _val, "logrite.tree": tree });
logger.warn(`<<< Exiting deleteElement(root=${root},_val=${_val},tree=${tree})`, { "event.action": "deleteElement", "logrite.root": root, "logrite._val": _val, "logrite.tree": tree });
  return root
}
// search tree for a element
const searchAVLTree = function (root, val, tree) {
logger.error(`>>> Entering searchAVLTree(root=${root},val=${val},tree=${tree})`, { "event.action": "searchAVLTree", "logrite.root": root, "logrite.val": val, "logrite.tree": tree });
  if (root == null) {
    return null
  }
  if (tree._comp(root._val, val) === 0) {
    return root
  }
  if (tree._comp(root._val, val) < 0) {
    return searchAVLTree(root._right, val, tree)
  }
logger.warn(`<<< Exiting searchAVLTree(root=${root},val=${val},tree=${tree})`, { "event.action": "searchAVLTree", "logrite.root": root, "logrite.val": val, "logrite.tree": tree });
  return searchAVLTree(root._left, val, tree)
}

/**
 * A Code for Testing the AVLTree
 */
// (function test () {
//   const newAVL = new AVLTree()
//   const size = Math.floor(Math.random() * 1000000)
//   let uniques = 0
//   let i, temp, j
//   const array = []
//   for (i = 0; i < size; i++) {
//     temp = Math.floor(Math.random() * Number.MAX_VALUE)
//     if (newAVL.add(temp)) {
//       uniques++
//       array.push(temp)
//     }
//   }
//   if (newAVL.size !== uniques) {
//     throw new Error('elements not inserted properly')
//   }
//   const findTestSize = Math.floor(Math.random() * uniques)
//   for (i = 0; i < findTestSize; i++) {
//     j = Math.floor(Math.random() * uniques)
//     if (!newAVL.find(array[j])) {
//       throw new Error('inserted elements not found')
//     }
//   }
//   const deleteTestSize = Math.floor(uniques * Math.random())
//   for (i = 0; i < deleteTestSize; i++) {
//     j = Math.floor(Math.random() * uniques)
//     temp = array[j]
//     if (newAVL.find(temp)) {
//       if (!newAVL.remove(temp)) {
//         throw new Error('delete not working properly')
//       }
//     }
//   }
// })()

export { AVLTree }
