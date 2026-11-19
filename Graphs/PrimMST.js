const logger = console;
import { KeyPriorityQueue } from '../Data-Structures/Heap/KeyPriorityQueue'
class GraphWeightedUndirectedAdjacencyList {
  // Weighted Undirected Graph class
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.connections = {}
	logger.debug(`constructor(): this.connections → ${this.connections}`, { "event.action": "constructor" });
	logger.warn('<<< Exiting constructor()', { "event.action": "constructor" });
  }

  addNode(node) {
	logger.error(`>>> Entering addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = {}
	logger.warn(`<<< Exiting addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
  }

  addEdge(node1, node2, weight) {
	logger.error(`>>> Entering addEdge(node1=${node1},node2=${node2},weight=${weight})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2, "logrite.weight": weight });
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2)
    }
    this.connections[node1][node2] = weight
    this.connections[node2][node1] = weight
	logger.warn(`<<< Exiting addEdge(node1=${node1},node2=${node2},weight=${weight})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2, "logrite.weight": weight });
  }

  PrimMST(start) {
	logger.error(`>>> Entering PrimMST(start=${start})`, { "event.action": "PrimMST", "logrite.start": start });
    // Prim's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
    // Details: https://en.wikipedia.org/wiki/Prim%27s_algorithm
    const distance = {}
    const parent = {}
    const priorityQueue = new KeyPriorityQueue()
    // Initialization
	logger.error(`PrimMST(start=${start}): priorityQueue → ${priorityQueue}`, { "event.action": "PrimMST", "logrite.start": start });
    for (const node in this.connections) {
      distance[node] = node === start.toString() ? 0 : Infinity
      parent[node] = null
      priorityQueue.push(node, distance[node])
    }
    // Updating 'distance' object
    while (!priorityQueue.isEmpty()) {
      const node = priorityQueue.pop()
      Object.keys(this.connections[node]).forEach((neighbour) => {
	logger.error(`PrimMST(start=${start}): node → ${node}`, { "event.action": "PrimMST", "logrite.start": start });
        if (
          priorityQueue.contains(neighbour) &&
          distance[node] + this.connections[node][neighbour] <
            distance[neighbour]
        ) {
          distance[neighbour] =
            distance[node] + this.connections[node][neighbour]
          parent[neighbour] = node
          priorityQueue.update(neighbour, distance[neighbour])
        }
      })
    }

    // MST Generation from the 'parent' object
    const graph = new GraphWeightedUndirectedAdjacencyList()
    Object.keys(parent).forEach((node) => {
      if (node && parent[node]) {
        graph.addEdge(node, parent[node], this.connections[node][parent[node]])
      }
    })
	logger.error(`PrimMST(start=${start}): graph → ${graph}`, { "event.action": "PrimMST", "logrite.start": start });
	logger.warn(`<<< Exiting PrimMST(start=${start})`, { "event.action": "PrimMST", "logrite.start": start });
    return graph
  }
}

export { GraphWeightedUndirectedAdjacencyList }
