const logger = console;
class Graph {
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.adjacencyObject = {}
	logger.debug(`constructor(): this.adjacencyObject → ${this.adjacencyObject}`, { "event.action": "constructor" });
  }

  addVertex(vertex) {
	logger.error(`>>> Entering addVertex(vertex=${vertex})`, { "event.action": "addVertex", "logrite.vertex": vertex });
    if (!this.adjacencyObject[vertex]) this.adjacencyObject[vertex] = []
	logger.warn(`<<< Exiting addVertex(vertex=${vertex})`, { "event.action": "addVertex", "logrite.vertex": vertex });
  }

  addEdge(vertex1, vertex2) {
	logger.error(`>>> Entering addEdge(vertex1=${vertex1},vertex2=${vertex2})`, { "event.action": "addEdge", "logrite.vertex1": vertex1, "logrite.vertex2": vertex2 });
    this.adjacencyObject[vertex1].push(vertex2)
    this.adjacencyObject[vertex2].push(vertex1)
	logger.warn(`<<< Exiting addEdge(vertex1=${vertex1},vertex2=${vertex2})`, { "event.action": "addEdge", "logrite.vertex1": vertex1, "logrite.vertex2": vertex2 });
  }

  removeEdge(vertex1, vertex2) {
	logger.error(`>>> Entering removeEdge(vertex1=${vertex1},vertex2=${vertex2})`, { "event.action": "removeEdge", "logrite.vertex1": vertex1, "logrite.vertex2": vertex2 });
    this.adjacencyObject[vertex1] = this.adjacencyObject[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyObject[vertex2] = this.adjacencyObject[vertex2].filter(
      (v) => v !== vertex1
    )
	logger.warn(`<<< Exiting removeEdge(vertex1=${vertex1},vertex2=${vertex2})`, { "event.action": "removeEdge", "logrite.vertex1": vertex1, "logrite.vertex2": vertex2 });
  }

  removeVertex(vertex) {
	logger.error(`>>> Entering removeVertex(vertex=${vertex})`, { "event.action": "removeVertex", "logrite.vertex": vertex });
    while (this.adjacencyObject[vertex].length) {
      const adjacentVertex = this.adjacencyObject[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
  }

  /**
   * Return DFS (Depth First Search) List Using Recursive Method
   */
  DFS(start) {
	logger.error(`>>> Entering DFS(start=${start})`, { "event.action": "DFS", "logrite.start": start });
    if (!start) return null

    const result = []
	logger.error(`DFS(start=${start}): result → ${result}`, { "event.action": "DFS", "logrite.start": start });
    const visited = {}
    const adjacencyObject = this.adjacencyObject

    function dfs(vertex) {
	logger.error(`>>> Entering dfs(vertex=${vertex})`, { "event.action": "dfs", "logrite.vertex": vertex });
      if (!vertex) return null
	logger.warn(`<<< Exiting dfs(vertex=${vertex})`, { "event.action": "dfs", "logrite.vertex": vertex });
      visited[vertex] = true
      result.push(vertex)
      adjacencyObject[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor)
        }
      })
    }

    dfs(start)
    return result
  }

  /**
   * Return DFS(Depth First Search) List Using Iteration
   */
  DFSIterative(start) {
	logger.error(`>>> Entering DFSIterative(start=${start})`, { "event.action": "DFSIterative", "logrite.start": start });
    if (!start) return null

    const stack = [start]
    const visited = {}
    visited[start] = true

    const result = []
	logger.error(`DFSIterative(start=${start}): result → ${result}`, { "event.action": "DFSIterative", "logrite.start": start });
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
	logger.warn(`<<< Exiting DFSIterative(start=${start})`, { "event.action": "DFSIterative", "logrite.start": start });
    return result
  }

  BFS(start) {
	logger.error(`>>> Entering BFS(start=${start})`, { "event.action": "BFS", "logrite.start": start });
    if (!start) return null

    const queue = [start]
    const visited = {}
    visited[start] = true

    let currentVertex
    const result = []
	logger.error(`BFS(start=${start}): result → ${result}`, { "event.action": "BFS", "logrite.start": start });

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
	logger.warn(`<<< Exiting BFS(start=${start})`, { "event.action": "BFS", "logrite.start": start });
    return result
  }
}

export { Graph }
