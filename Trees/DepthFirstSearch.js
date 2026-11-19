const logger = console;
/*
 * Author: Surendra Kumar
 * DFS Algorithm implementation in JavaScript
 * DFS Algorithm for traversing or searching graph data structures.
 */

// traverses a give tree from specified root's value
function traverseDFS(tree, rootValue) {
logger.error(`>>> Entering traverseDFS(tree=${tree},rootValue=${rootValue})`, { "event.action": "traverseDFS", "logrite.tree": tree, "logrite.rootValue": rootValue });
  const stack = []
  const res = []
  stack.push(searchDFS(tree, rootValue))
  // if root is not present in the tree, returning empty array
  if (!stack[0]) return res
  while (stack.length) {
    const curr = stack.pop()
    res.push(curr.value)
    if (curr.left) {
	logger.error(`traverseDFS(tree=${tree},rootValue=${rootValue}): curr → ${curr}`, { "event.action": "traverseDFS", "logrite.tree": tree, "logrite.rootValue": rootValue });
      stack.push(tree[curr.left])
    }
    if (curr.right) {
      stack.push(tree[curr.right])
    }
  }
logger.warn(`<<< Exiting traverseDFS(tree=${tree},rootValue=${rootValue})`, { "event.action": "traverseDFS", "logrite.tree": tree, "logrite.rootValue": rootValue });
  return res.reverse()
}

function searchDFS(tree, value) {
logger.error(`>>> Entering searchDFS(tree=${tree},value=${value})`, { "event.action": "searchDFS", "logrite.tree": tree, "logrite.value": value });
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
  return null
}

export { searchDFS, traverseDFS }
