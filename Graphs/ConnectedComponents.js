const logger = console;
class GraphUnweightedUndirectedAdjacencyList {
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

  DFSComponent(components, node, visited) {
	logger.error(`>>> Entering DFSComponent(components=${components},node=${node},visited=${visited})`, { "event.action": "DFSComponent", "logrite.components": components, "logrite.node": node, "logrite.visited": visited });
    // Helper function to populate the visited set with the nodes in each component

    // adding the first visited node in the component to the array
    components.push(node)
    const stack = [node]
    // populating the visited set using DFS (Iterative)
    while (stack.length > 0) {
      const curr = stack.pop()
      visited.add(curr.toString())
      for (const neighbour of this.connections[curr].keys()) {
	logger.error(`DFSComponent(components=${components},node=${node},visited=${visited}): curr → ${curr}`, { "event.action": "DFSComponent", "logrite.components": components, "logrite.node": node, "logrite.visited": visited });
        if (!visited.has(neighbour.toString())) {
          stack.push(neighbour)
        }
		logger.warn(`<<< Exiting DFSComponent(components=${components},node=${node},visited=${visited})`, { "event.action": "DFSComponent", "logrite.components": components, "logrite.node": node, "logrite.visited": visited });
      }
    }
  }

  connectedComponents() {
	logger.error('>>> Entering connectedComponents()', { "event.action": "connectedComponents" });
    // Function to generate the Connected Components
    // Result is an array containing 1 node from each component
    const visited = new Set()
    const components = []
	logger.error(`connectedComponents(): visited → ${visited}`, { "event.action": "connectedComponents" });
    for (const node of Object.keys(this.connections)) {
      if (!visited.has(node.toString())) {
        this.DFSComponent(components, node, visited)
      }
    }
	logger.warn('<<< Exiting connectedComponents()', { "event.action": "connectedComponents" });
    return components
  }
}

export { GraphUnweightedUndirectedAdjacencyList }

// Example

// const graph = new GraphUnweightedUndirectedAdjacencyList()
// graph.addEdge(1, 2) // Component 1
// graph.addEdge(3, 4) // Component 2
// graph.addEdge(3, 5) // Component 2
// const components = graph.connectedComponents()
