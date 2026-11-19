const logger = console;
// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
	logger.error(`>>> Entering constructor(noOfVertices=${noOfVertices})`, { "event.action": "constructor", "logrite.noOfVertices": noOfVertices });
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
	logger.debug(`constructor(noOfVertices=${noOfVertices}): this.noOfVertices → ${this.noOfVertices}`, { "event.action": "constructor", "logrite.noOfVertices": noOfVertices });
  }

  // functions to be implemented

  // addVertex(v)
  // addEdge(v, w)
  // printGraph()

  // bfs(v)
  // dfs(v)

  // add vertex to the graph
  addVertex(v) {
	logger.error(`>>> Entering addVertex(v=${v})`, { "event.action": "addVertex", "logrite.v": v });
    // initialize the adjacent list with a
    // null array

    this.AdjList.set(v, [])
	logger.warn(`<<< Exiting addVertex(v=${v})`, { "event.action": "addVertex", "logrite.v": v });
  }

  // add edge to the graph
  addEdge(v, w) {
	logger.error(`>>> Entering addEdge(v=${v},w=${w})`, { "event.action": "addEdge", "logrite.v": v });
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w)

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v)
	logger.warn(`<<< Exiting addEdge(v=${v},w=${w})`, { "event.action": "addEdge", "logrite.v": v });
  }

  // Prints the vertex and adjacency list
  printGraph(output = (value) => console.log(value)) {
    // get all the vertices
    const getKeys = this.AdjList.keys()

    // iterate over the vertices
    for (const i of getKeys) {
      // get the corresponding adjacency list
      // for the vertex
      const getValues = this.AdjList.get(i)
      let conc = ''

      // iterate over the adjacency list
      // concatenate the values into a string
      for (const j of getValues) {
        conc += j + ' '
      }

      // print the vertex and its adjacency list
      output(i + ' -> ' + conc)
    }
  }
}

export { Graph }
