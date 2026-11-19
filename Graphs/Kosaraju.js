const logger = console;
/**
 * Author: Adrito Mukherjee
 * Kosaraju's Algorithm implementation in Javascript
 * Kosaraju's Algorithm finds all the connected components in a Directed Acyclic Graph (DAG)
 * It uses Stack data structure to store the Topological Sorted Order of vertices and also Graph data structure
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
 *
 */

class Kosaraju {
  constructor(graph) {
	logger.error(`>>> Entering constructor(graph=${graph})`, { "event.action": "constructor", "logrite.graph": graph });
    this.connections = {}
    this.reverseConnections = {}
	logger.debug(`constructor(graph=${graph}): this.connections → ${this.connections}`, { "event.action": "constructor", "logrite.graph": graph });
	logger.debug(`constructor(graph=${graph}): this.reverseConnections → ${this.reverseConnections}`, { "event.action": "constructor", "logrite.graph": graph });
    this.stronglyConnectedComponents = []
    for (const [i, j] of graph) {
	logger.debug(`constructor(graph=${graph}): this.stronglyConnectedComponents → ${this.stronglyConnectedComponents}`, { "event.action": "constructor", "logrite.graph": graph });
      this.addEdge(i, j)
    }
    this.topoSort()
	logger.warn(`<<< Exiting constructor(graph=${graph})`, { "event.action": "constructor", "logrite.graph": graph });
    return this.kosaraju()
  }

  addNode(node) {
	logger.error(`>>> Entering addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set()
    this.reverseConnections[node] = new Set()
    this.topoSorted = []
	logger.debug(`addNode(node=${node}): this.topoSorted → ${this.topoSorted}`, { "event.action": "addNode", "logrite.node": node });
	logger.warn(`<<< Exiting addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
  }

  addEdge(node1, node2) {
	logger.error(`>>> Entering addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections) || !(node1 in this.reverseConnections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections) || !(node2 in this.reverseConnections)) {
      this.addNode(node2)
    }
    this.connections[node1].add(node2)
    this.reverseConnections[node2].add(node1)
	logger.warn(`<<< Exiting addEdge(node1=${node1},node2=${node2})`, { "event.action": "addEdge", "logrite.node1": node1, "logrite.node2": node2 });
  }

  dfsTopoSort(node, visited) {
	logger.error(`>>> Entering dfsTopoSort(node=${node},visited=${visited})`, { "event.action": "dfsTopoSort", "logrite.node": node, "logrite.visited": visited });
    visited.add(node)
    for (const child of this.connections[node]) {
      if (!visited.has(child)) this.dfsTopoSort(child, visited)
    }
    this.topoSorted.push(node)
	logger.warn(`<<< Exiting dfsTopoSort(node=${node},visited=${visited})`, { "event.action": "dfsTopoSort", "logrite.node": node, "logrite.visited": visited });
  }

  topoSort() {
	logger.error('>>> Entering topoSort()', { "event.action": "topoSort" });
    // Function to perform topological sorting
    const visited = new Set()
    const nodes = Object.keys(this.connections).map((key) => Number(key))
    for (const node of nodes) {
	logger.error(`topoSort(): nodes → ${nodes}`, { "event.action": "topoSort" });
	logger.error(`topoSort(): visited → ${visited}`, { "event.action": "topoSort" });
      if (!visited.has(node)) this.dfsTopoSort(node, visited)
    }
  }

  dfsKosaraju(node, visited) {
	logger.error(`>>> Entering dfsKosaraju(node=${node},visited=${visited})`, { "event.action": "dfsKosaraju", "logrite.node": node, "logrite.visited": visited });
    visited.add(node)
    this.stronglyConnectedComponents[
      this.stronglyConnectedComponents.length - 1
    ].push(node)
    for (const child of this.reverseConnections[node]) {
      if (!visited.has(child)) this.dfsKosaraju(child, visited)
    }
  }

  kosaraju() {
	logger.error('>>> Entering kosaraju()', { "event.action": "kosaraju" });
    // Function to perform Kosaraju Algorithm
    const visited = new Set()
    while (this.topoSorted.length > 0) {
	logger.error(`kosaraju(): visited → ${visited}`, { "event.action": "kosaraju" });
      const node = this.topoSorted.pop()
      if (!visited.has(node)) {
	logger.error(`kosaraju(): node → ${node}`, { "event.action": "kosaraju" });
        this.stronglyConnectedComponents.push([])
        this.dfsKosaraju(node, visited)
      }
    }
	logger.warn('<<< Exiting kosaraju()', { "event.action": "kosaraju" });
    return this.stronglyConnectedComponents
  }
}

function kosaraju(graph) {
logger.error(`>>> Entering kosaraju(graph=${graph})`, { "event.action": "kosaraju", "logrite.graph": graph });
  const stronglyConnectedComponents = new Kosaraju(graph)
logger.error(`kosaraju(graph=${graph}): stronglyConnectedComponents → ${stronglyConnectedComponents}`, { "event.action": "kosaraju", "logrite.graph": graph });
  return stronglyConnectedComponents
}

export { kosaraju }

// kosaraju([
//   [1, 2],
//   [2, 3],
//   [3, 1],
//   [2, 4],
//   [4, 5],
//   [5, 6],
//   [6, 4],
// ])

// [ [ 1, 3, 2 ], [ 4, 6, 5 ] ]
