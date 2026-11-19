const logger = console;
class GraphUnweightedUndirected {
  // Unweighted Undirected Graph class
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.connections = {}
	logger.debug(`constructor(): this.connections → ${this.connections}`, { "event.action": "constructor" });
	logger.warn('<<< Exiting constructor()', { "event.action": "constructor" });
  }

  addNode(node) {
	logger.error(`>>> Entering addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set()
	logger.warn(`<<< Exiting addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
  }

  addEdge(node1, node2) {
	logger.error(`>>> Entering addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2)
    }
    this.connections[node1].add(node2)
    this.connections[node2].add(node1)
	logger.warn(`<<< Exiting addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
  }

  DFSRecursive(node, value, visited = new Set()) {
	logger.error(`>>> Entering DFSRecursive(node=${node},value=${value},visited=${visited})`, { "event.action": "DFSRecursive", "logrite.node": node, "logrite.value": value, "logrite.visited": visited });
    // DFS Function to search if a node with the given value is present in the graph
    // checking if the searching node has been found
    if (node === value) {
      return true
    }
    // adding the current node to the visited set
    visited.add(node)
    // calling the helper function recursively for all unvisited nodes
    for (const neighbour of this.connections[node]) {
      if (!visited.has(neighbour)) {
        if (this.DFSRecursive(neighbour, value, visited)) {
          return true
        }
      }
    }
	logger.warn(`<<< Exiting DFSRecursive(node=${node},value=${value},visited=${visited})`, { "event.action": "DFSRecursive", "logrite.node": node, "logrite.value": value, "logrite.visited": visited });
    return false
  }
}

export { GraphUnweightedUndirected }

// const graph = new GraphUnweightedUndirected()
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(2, 4)
// graph.addEdge(3, 5)
// graph.DFSRecursive(5, 1)
// graph.DFSRecursive(5, 100)
