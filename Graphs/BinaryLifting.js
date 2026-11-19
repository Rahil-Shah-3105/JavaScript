const logger = console;
/**
 * Author: Adrito Mukherjee
 * Binary Lifting implementation in Javascript
 * Binary Lifting is a technique that is used to find the kth ancestor of a node in a rooted tree with N nodes
 * The technique requires preprocessing the tree in O(N log N) using dynamic programming
 * The technique can answer Q queries about kth ancestor of any node in O(Q log N)
 * It is faster than the naive algorithm that answers Q queries with complexity O(Q K)
 * It can be used to find Lowest Common Ancestor of two nodes in O(log N)
 * Tutorial on Binary Lifting: https://codeforces.com/blog/entry/100826
 */

export class BinaryLifting {
  constructor(root, tree) {
	logger.error(`>>> Entering constructor(root=${root},tree=${tree})`, { "event.action": "constructor", "logrite.root": root, "logrite.tree": tree });
    this.root = root
    this.connections = new Map()
    this.up = new Map() // up[node][i] stores the 2^i-th  parent of node
	logger.debug(`constructor(root=${root},tree=${tree}): this.root → ${this.root}`, { "event.action": "constructor", "logrite.root": root, "logrite.tree": tree });
    for (const [i, j] of tree) {
      this.addEdge(i, j)
    }
    this.log = Math.ceil(Math.log2(this.connections.size))
    this.dfs(root, root)
	logger.warn(`<<< Exiting constructor(root=${root},tree=${tree})`, { "event.action": "constructor", "logrite.root": root, "logrite.tree": tree });
  }

  addNode(node) {
	logger.error(`>>> Entering addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
    // Function to add a node to the tree (connection represented by set)
    this.connections.set(node, new Set())
	logger.warn(`<<< Exiting addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
  }

  addEdge(node1, node2) {
	logger.error(`>>> Entering addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
    // Function to add an edge (adds the node too if they are not present in the tree)
    if (!this.connections.has(node1)) {
      this.addNode(node1)
    }
    if (!this.connections.has(node2)) {
      this.addNode(node2)
    }
    this.connections.get(node1).add(node2)
    this.connections.get(node2).add(node1)
	logger.warn(`<<< Exiting addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
  }

  dfs(node, parent) {
	logger.error(`>>> Entering dfs(node=${node},parent=${parent})`, { "event.action": "dfs", "logrite.node": node });
    // The dfs function calculates 2^i-th ancestor of all nodes for i ranging from 0 to this.log
    // We make use of the fact the two consecutive jumps of length 2^(i-1) make the total jump length 2^i
    this.up.set(node, new Map())
    this.up.get(node).set(0, parent)
    for (let i = 1; i < this.log; i++) {
      this.up
        .get(node)
        .set(i, this.up.get(this.up.get(node).get(i - 1)).get(i - 1))
    }
    for (const child of this.connections.get(node)) {
      if (child !== parent) this.dfs(child, node)
    }
  }

  kthAncestor(node, k) {
	logger.error(`>>> Entering kthAncestor(node=${node},k=${k})`, { "event.action": "kthAncestor", "logrite.node": node, "logrite.k": k });
    // if value of k is more than or equal to the number of total nodes, we return the root of the graph
    if (k >= this.connections.size) {
      return this.root
    }
    // if i-th bit is set in the binary representation of k, we jump from a node to its 2^i-th ancestor
    // so after checking all bits of k, we will have made jumps of total length k, in just log k steps
    for (let i = 0; i < this.log; i++) {
      if (k & (1 << i)) {
        node = this.up.get(node).get(i)
      }
    }
	logger.warn(`<<< Exiting kthAncestor(node=${node},k=${k})`, { "event.action": "kthAncestor", "logrite.node": node, "logrite.k": k });
    return node
  }
}

function binaryLifting(root, tree, queries) {
logger.error(`>>> Entering binaryLifting(root=${root},tree=${tree},queries=${queries})`, { "event.action": "binaryLifting", "logrite.root": root, "logrite.tree": tree, "logrite.queries": queries });
  const graphObject = new BinaryLifting(root, tree)
  const ancestors = []
logger.error(`binaryLifting(root=${root},tree=${tree},queries=${queries}): graphObject → ${graphObject}`, { "event.action": "binaryLifting", "logrite.root": root, "logrite.tree": tree, "logrite.queries": queries });
  for (const [node, k] of queries) {
    const ancestor = graphObject.kthAncestor(node, k)
    ancestors.push(ancestor)
  }
logger.warn(`<<< Exiting binaryLifting(root=${root},tree=${tree},queries=${queries})`, { "event.action": "binaryLifting", "logrite.root": root, "logrite.tree": tree, "logrite.queries": queries });
  return ancestors
}

export default binaryLifting
