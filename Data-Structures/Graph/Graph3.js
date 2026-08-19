const logger = console;
class Graph {
  constructor() {
	logger.debug('>>> Entering constructor()');
    this.adjacencyObject = {}
	logger.debug(`constructor(): this.adjacencyObject → ${this.adjacencyObject}`);
	logger.debug('<<< Exiting constructor()');
  }

  addVertex(vertex) {
	logger.debug(`>>> Entering addVertex(vertex=${vertex})`);
    if (!this.adjacencyObject[vertex]) this.adjacencyObject[vertex] = []
	logger.debug(`<<< Exiting addVertex(vertex=${vertex})`);
  }

  addEdge(vertex1, vertex2) {
	logger.debug(`>>> Entering addEdge(vertex1=${vertex1},vertex2=${vertex2})`);
    this.adjacencyObject[vertex1].push(vertex2)
    this.adjacencyObject[vertex2].push(vertex1)
	logger.debug(`<<< Exiting addEdge(vertex1=${vertex1},vertex2=${vertex2})`);
  }

  removeEdge(vertex1, vertex2) {
	logger.debug(`>>> Entering removeEdge(vertex1=${vertex1},vertex2=${vertex2})`);
    this.adjacencyObject[vertex1] = this.adjacencyObject[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyObject[vertex2] = this.adjacencyObject[vertex2].filter(
      (v) => v !== vertex1
    )
	logger.debug(`<<< Exiting removeEdge(vertex1=${vertex1},vertex2=${vertex2})`);
  }

  removeVertex(vertex) {
	logger.debug(`>>> Entering removeVertex(vertex=${vertex})`);
    while (this.adjacencyObject[vertex].length) {
      const adjacentVertex = this.adjacencyObject[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
	logger.debug(`<<< Exiting removeVertex(vertex=${vertex})`);
  }

  /**
   * Return DFS (Depth First Search) List Using Recursive Method
   */
  DFS(start) {
	logger.debug(`>>> Entering DFS(start=${start})`);
    if (!start) return null

    const result = []
	logger.debug(`DFS(start=${start}): result → ${result}`);
    const visited = {}
    const adjacencyObject = this.adjacencyObject

    function dfs(vertex) {
	logger.debug(`>>> Entering dfs(vertex=${vertex})`);
      if (!vertex) return null
	logger.debug(`<<< Exiting dfs(vertex=${vertex})`);
      visited[vertex] = true
      result.push(vertex)
      adjacencyObject[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor)
        }
      })
    }

    dfs(start)
	logger.debug(`<<< Exiting DFS(start=${start})`);
    return result
  }

  /**
   * Return DFS(Depth First Search) List Using Iteration
   */
  DFSIterative(start) {
	logger.debug(`>>> Entering DFSIterative(start=${start})`);
    if (!start) return null

    const stack = [start]
    const visited = {}
    visited[start] = true

    const result = []
	logger.debug(`DFSIterative(start=${start}): result → ${result}`);
    let currentVertex

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyObject[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
	logger.debug(`<<< Exiting DFSIterative(start=${start})`);
    return result
  }

  BFS(start) {
	logger.debug(`>>> Entering BFS(start=${start})`);
    if (!start) return null

    const queue = [start]
    const visited = {}
    visited[start] = true

    let currentVertex
    const result = []
	logger.debug(`BFS(start=${start}): result → ${result}`);

    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyObject[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
	logger.debug(`<<< Exiting BFS(start=${start})`);
    return result
  }
}

export { Graph }
