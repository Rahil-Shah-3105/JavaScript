const logger = console;
/*
 * Author: Surendra Kumar
 * DFS Algorithm implementation in JavaScript
 * DFS Algorithm for traversing or searching graph data structures.
 */

// traverses a give tree from specified root's value
function traverseDFS(tree, rootValue) {
logger.debug(`>>> Entering traverseDFS(tree=${tree},rootValue=${rootValue})`);
  const stack = []
  const res = []
  stack.push(searchDFS(tree, rootValue))
  // if root is not present in the tree, returning empty array
  if (!stack[0]) return res
  while (stack.length) {
    const curr = stack.pop()
    res.push(curr.value)
    if (curr.left) {
	logger.debug(`traverseDFS(tree=${tree},rootValue=${rootValue}): curr → ${curr}`);
      stack.push(tree[curr.left])
    }
    if (curr.right) {
      stack.push(tree[curr.right])
    }
  }
logger.debug(`<<< Exiting traverseDFS(tree=${tree},rootValue=${rootValue})`);
  return res.reverse()
}

function searchDFS(tree, value) {
logger.debug(`>>> Entering searchDFS(tree=${tree},value=${value})`);
  const stack = []
  stack.push(tree[0])
  while (stack.length !== 0) {
    for (let i = 0; i < stack.length; i++) {
      const node = stack.pop()
      if (node.value === value) {
        return node
      }
      if (node.right) {
        stack.push(tree[node.right])
      }
      if (node.left) {
        stack.push(tree[node.left])
      }
    }
  }
logger.debug(`<<< Exiting searchDFS(tree=${tree},value=${value})`);
  return null
}

export { searchDFS, traverseDFS }
