const logger = console;
// https://en.wikipedia.org/wiki/Neighbourhood_(graph_theory)

class Graph {
  // Generic graph: the algorithm works regardless of direction or weight
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.edges = []
	logger.debug(`constructor(): this.edges → ${this.edges}`, { "event.action": "constructor" });
  }

  addEdge(node1, node2) {
	logger.error(`>>> Entering addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
    // Adding edges to the graph
    this.edges.push({
      node1,
      node2
    })
	logger.warn(`<<< Exiting addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
  }

  nodeNeighbors(node) {
	logger.error(`>>> Entering nodeNeighbors(node=${node})`, { "event.action": "nodeNeighbors", "logrite.node": node });
    // Returns an array with all of the node neighbors
    const neighbors = new Set()
    for (const edge of this.edges) {
      // Checks if they have an edge between them and if the neighbor is not
      // already in the neighbors array
      if (edge.node1 === node && !neighbors.has(edge.node2)) {
        neighbors.add(edge.node2)
      } else if (edge.node2 === node && !neighbors.has(edge.node1)) {
        neighbors.add(edge.node1)
      }
    }
	logger.error(`nodeNeighbors(node=${node}): neighbors → ${neighbors}`, { "event.action": "nodeNeighbors", "logrite.node": node });
    return neighbors
  }
}

export { Graph }

// const graph = new Graph()
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(3, 5)
// graph.addEdge(1, 5)
// graph.nodeNeighbors(1)
