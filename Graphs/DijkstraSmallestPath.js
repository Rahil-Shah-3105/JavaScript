const logger = console;
// starting at s
function solve(graph, s) {
logger.error(`>>> Entering solve(graph=${graph},s=${s})`, { "event.action": "solve", "logrite.graph": graph, "logrite.s": s });
  const solutions = {}
  solutions[s] = []
  solutions[s].dist = 0

  while (true) {
    let p = null
    let neighbor = null
    let dist = Infinity

    for (const n in solutions) {
      if (!solutions[n]) {
        continue
      }
      const ndist = solutions[n].dist
      const adj = graph[n]

      for (const a in adj) {
        if (solutions[a]) {
          continue
        }

        const d = adj[a] + ndist
        if (d < dist) {
          p = solutions[n]
          neighbor = a
          dist = d
        }
      }
    }

    // no more solutions
    if (dist === Infinity) {
      break
    }

    // extend parent's solution path
    solutions[neighbor] = p.concat(neighbor)
    // extend parent's cost
    solutions[neighbor].dist = dist
  }

logger.warn(`<<< Exiting solve(graph=${graph},s=${s})`, { "event.action": "solve", "logrite.graph": graph, "logrite.s": s });
  return solutions
}

export { solve }
