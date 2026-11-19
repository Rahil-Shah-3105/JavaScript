const logger = console;
class DisjointSetTreeNode {
  // Disjoint Set Node to store the parent and rank
  constructor(key) {
	logger.error(`>>> Entering constructor(key=${key})`, { "event.action": "constructor", "logrite.key": key });
    this.key = key
    this.parent = this
	logger.debug(`constructor(key=${key}): this.key → ${this.key}`, { "event.action": "constructor", "logrite.key": key });
    this.rank = 0
	logger.debug(`constructor(key=${key}): this.rank → ${this.rank}`, { "event.action": "constructor", "logrite.key": key });
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
	logger.debug(`constructor(): this.map → ${this.map}`, { "event.action": "constructor" });
  }
}

class DisjointSetTree {
  // Disjoint Set DataStructure
  constructor() {
    // map to from node name to the node object
    this.map = {}
	logger.debug(`constructor(): this.nodes → ${this.nodes}`, { "event.action": "constructor" });
  }

  makeSet(x) {
	logger.error(`>>> Entering makeSet(x=${x})`, { "event.action": "makeSet", "logrite.x": x });
    // Function to create a new set with x as its member
    this.map[x] = new DisjointSetTreeNode(x)
	logger.warn(`<<< Exiting makeSet(x=${x})`, { "event.action": "makeSet", "logrite.x": x });
  }

  findSet(x) {
	logger.error(`>>> Entering findSet(x=${x})`, { "event.action": "findSet", "logrite.x": x });
    // Function to find the set x belongs to (with path-compression)
    if (this.map[x] !== this.map[x].parent) {
      this.map[x].parent = this.findSet(this.map[x].parent.key)
    }
	logger.warn(`<<< Exiting findSet(x=${x})`, { "event.action": "findSet", "logrite.x": x });
    return this.map[x].parent
  }

  union(x, y) {
	logger.error(`>>> Entering union(x=${x},y=${y})`, { "event.action": "union", "logrite.x": x, "logrite.y": y });
    // Function to merge 2 disjoint sets
    this.link(this.findSet(x), this.findSet(y))
	logger.warn(`<<< Exiting union(x=${x},y=${y})`, { "event.action": "union", "logrite.x": x, "logrite.y": y });
  }

  link(x, y) {
	logger.error(`>>> Entering link(x=${x},y=${y})`, { "event.action": "link", "logrite.x": x, "logrite.y": y });
    // Helper function for union operation
    if (x.rank > y.rank) {
      y.parent = x
    } else {
      x.parent = y
	logger.debug(`link(x=${x},y=${y}): x.parent → ${x.parent}`, { "event.action": "link", "logrite.x": x, "logrite.y": y });
      if (x.rank === y.rank) {
        y.rank += 1
		logger.warn(`<<< Exiting link(x=${x},y=${y})`, { "event.action": "link", "logrite.x": x, "logrite.y": y });
      }
    }
  }
}

class GraphWeightedUndirectedAdjacencyList {
  // Weighted Undirected Graph class
  constructor() {
    this.connections = {}
    this.nodes = 0
  }

  addNode(node) {
	logger.error(`>>> Entering addNode(node=${node})`, { "event.action": "addNode", "logrite.node": node });
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = {}
    this.nodes += 1
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

  KruskalMST() {
	logger.error('>>> Entering KruskalMST()', { "event.action": "KruskalMST" });
    // Kruskal's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
    // Details: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
    // getting the edges in ascending order of weights
    const edges = []
    const seen = new Set()
    for (const start of Object.keys(this.connections)) {
	logger.error(`KruskalMST(): seen → ${seen}`, { "event.action": "KruskalMST" });
      for (const end of Object.keys(this.connections[start])) {
        if (!seen.has(`${start} ${end}`)) {
          seen.add(`${end} ${start}`)
          edges.push([start, end, this.connections[start][end]])
        }
      }
    }
    edges.sort((a, b) => a[2] - b[2])
    // creating the disjoint set
    const disjointSet = new DisjointSetTree()
    Object.keys(this.connections).forEach((node) => disjointSet.makeSet(node))
    // MST generation
	logger.error(`KruskalMST(): disjointSet → ${disjointSet}`, { "event.action": "KruskalMST" });
    const graph = new GraphWeightedUndirectedAdjacencyList()
    let numEdges = 0
	logger.error(`KruskalMST(): graph → ${graph}`, { "event.action": "KruskalMST" });
    let index = 0
    while (numEdges < this.nodes - 1) {
      const [u, v, w] = edges[index]
      index += 1
      if (disjointSet.findSet(u) !== disjointSet.findSet(v)) {
        numEdges += 1
        graph.addEdge(u, v, w)
        disjointSet.union(u, v)
      }
    }
	logger.warn('<<< Exiting KruskalMST()', { "event.action": "KruskalMST" });
    return graph
  }
}

export { GraphWeightedUndirectedAdjacencyList }

// const graph = new GraphWeightedUndirectedAdjacencyList()
// graph.addEdge(1, 2, 1)
// graph.addEdge(2, 3, 2)
// graph.addEdge(3, 4, 1)
// graph.addEdge(3, 5, 100) // Removed in MST
// graph.addEdge(4, 5, 5)
// graph.KruskalMST()
