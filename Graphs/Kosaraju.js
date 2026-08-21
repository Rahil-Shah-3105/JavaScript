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
	logger.debug(`>>> Entering constructor(graph=${graph})`);
    this.connections = {}
    this.reverseConnections = {}
    this.stronglyConnectedComponents = []
	logger.debug(`constructor(graph=${graph}): this.connections → ${this.connections}`);
    for (const [i, j] of graph) {
      this.addEdge(i, j)
    }
	logger.debug(`constructor(graph=${graph}): this.reverseConnections → ${this.reverseConnections}`);
    this.topoSort()
	logger.debug(`constructor(graph=${graph}): this.stronglyConnectedComponents → ${this.stronglyConnectedComponents}`);
	logger.debug(`<<< Exiting constructor(graph=${graph})`);
    return this.kosaraju()
  }

  addNode(node) {
	logger.debug(`>>> Entering addNode(node=${node})`);
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set()
    this.reverseConnections[node] = new Set()
    this.topoSorted = []
	logger.debug(`addNode(node=${node}): this.topoSorted → ${this.topoSorted}`);
  }

  addEdge(node1, node2) {
	logger.debug(`>>> Entering addEdge(node1=${node1},node2=${node2})`);
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections) || !(node1 in this.reverseConnections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections) || !(node2 in this.reverseConnections)) {
      this.addNode(node2)
    }
    this.connections[node1].add(node2)
    this.reverseConnections[node2].add(node1)
	logger.debug(`<<< Exiting addEdge(node1=${node1},node2=${node2})`);
  }

  dfsTopoSort(node, visited) {
	logger.debug(`>>> Entering dfsTopoSort(node=${node},visited=${visited})`);
    visited.add(node)
    for (const child of this.connections[node]) {
      if (!visited.has(child)) this.dfsTopoSort(child, visited)
    }
    this.topoSorted.push(node)
	logger.debug(`<<< Exiting dfsTopoSort(node=${node},visited=${visited})`);
  }

  topoSort() {
	logger.debug('>>> Entering topoSort()');
    // Function to perform topological sorting
    const visited = new Set()
    const nodes = Object.keys(this.connections).map((key) => Number(key))
    for (const node of nodes) {
	logger.debug(`topoSort(): visited → ${visited}`);
	logger.debug(`topoSort(): nodes → ${nodes}`);
      if (!visited.has(node)) this.dfsTopoSort(node, visited)
    }
  }

  dfsKosaraju(node, visited) {
	logger.debug(`>>> Entering dfsKosaraju(node=${node},visited=${visited})`);
    visited.add(node)
    this.stronglyConnectedComponents[
      this.stronglyConnectedComponents.length - 1
    ].push(node)
    for (const child of this.reverseConnections[node]) {
      if (!visited.has(child)) this.dfsKosaraju(child, visited)
    }
  }

  kosaraju() {
	logger.debug('>>> Entering kosaraju()');
    // Function to perform Kosaraju Algorithm
    const visited = new Set()
    while (this.topoSorted.length > 0) {
	logger.debug(`kosaraju(): visited → ${visited}`);
      const node = this.topoSorted.pop()
      if (!visited.has(node)) {
	logger.debug(`kosaraju(): node → ${node}`);
        this.stronglyConnectedComponents.push([])
        this.dfsKosaraju(node, visited)
      }
    }
	logger.debug(`<<< Exiting kosaraju(graph=${graph})`);
    return this.stronglyConnectedComponents
  }
}

function kosaraju(graph) {
  const stronglyConnectedComponents = new Kosaraju(graph)
logger.debug(`kosaraju(graph=${graph}): stronglyConnectedComponents → ${stronglyConnectedComponents}`);
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
