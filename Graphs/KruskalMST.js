const logger = console;
class DisjointSetTreeNode {
  // Disjoint Set Node to store the parent and rank
  constructor(key) {
	logger.debug(`>>> Entering constructor(key=${key})`);
	logger.debug('>>> Entering constructor()');
    this.key = key
    this.parent = this
    this.rank = 0
	logger.debug(`constructor(key=${key}): this.rank → ${this.rank}`);
	logger.debug(`<<< Exiting constructor(key=${key})`);
	logger.debug('<<< Exiting constructor()');
	logger.debug(`constructor(): this.map → ${this.map}`);
  }
}
logger.debug('<<< Exiting constructor()');

class DisjointSetTree {
  // Disjoint Set DataStructure
  constructor() {
    // map to from node name to the node object
    this.map = {}
  }

  makeSet(x) {
	logger.debug(`>>> Entering makeSet(x=${x})`);
    // Function to create a new set with x as its member
    this.map[x] = new DisjointSetTreeNode(x)
	logger.debug(`<<< Exiting makeSet(x=${x})`);
  }

  findSet(x) {
	logger.debug(`>>> Entering findSet(x=${x})`);
    // Function to find the set x belongs to (with path-compression)
    if (this.map[x] !== this.map[x].parent) {
      this.map[x].parent = this.findSet(this.map[x].parent.key)
    }
	logger.debug(`<<< Exiting findSet(x=${x})`);
    return this.map[x].parent
  }

  union(x, y) {
	logger.debug(`>>> Entering union(x=${x},y=${y})`);
    // Function to merge 2 disjoint sets
    this.link(this.findSet(x), this.findSet(y))
	logger.debug(`<<< Exiting union(x=${x},y=${y})`);
  }

  link(x, y) {
	logger.debug(`>>> Entering link(x=${x},y=${y})`);
    // Helper function for union operation
    if (x.rank > y.rank) {
      y.parent = x
	logger.debug(`link(x=${x},y=${y}): y.parent → ${y.parent}`);
    } else {
      x.parent = y
	logger.debug(`link(x=${x},y=${y}): x.parent → ${x.parent}`);
      if (x.rank === y.rank) {
        y.rank += 1
		logger.debug(`<<< Exiting link(x=${x},y=${y})`);
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
	logger.debug(`>>> Entering addNode(node=${node})`);
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = {}
    this.nodes += 1
	logger.debug(`<<< Exiting addNode(node=${node})`);
  }

  addEdge(node1, node2, weight) {
	logger.debug(`>>> Entering addEdge(node1=${node1},node2=${node2},weight=${weight})`);
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2)
    }
    this.connections[node1][node2] = weight
    this.connections[node2][node1] = weight
	logger.debug(`<<< Exiting addEdge(node1=${node1},node2=${node2},weight=${weight})`);
  }

  KruskalMST() {
	logger.debug('>>> Entering KruskalMST()');
    // Kruskal's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
    // Details: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
    // getting the edges in ascending order of weights
    const edges = []
    const seen = new Set()
    for (const start of Object.keys(this.connections)) {
	logger.debug(`KruskalMST(): seen → ${seen}`);
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
	logger.debug(`KruskalMST(): disjointSet → ${disjointSet}`);
    const graph = new GraphWeightedUndirectedAdjacencyList()
    let numEdges = 0
	logger.debug(`KruskalMST(): graph → ${graph}`);
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
	logger.debug('<<< Exiting KruskalMST()');
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
