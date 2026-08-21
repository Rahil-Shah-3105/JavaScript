const logger = console;
export function TopologicalSorter() {
logger.debug('>>> Entering TopologicalSorter()');
  const graph = {}
  let isVisitedNode
  let finishTimeCount
  let finishingTimeList
  let nextNode

  this.addOrder = function (nodeA, nodeB) {
	logger.debug(`>>> Entering function(nodeA=${nodeA},nodeB=${nodeB})`);
    nodeA = String(nodeA)
    nodeB = String(nodeB)
    graph[nodeA] = graph[nodeA] || []
	logger.debug(`<<< Exiting function(nodeA=${nodeA},nodeB=${nodeB})`);
    graph[nodeA].push(nodeB)
  }

  this.sortAndGetOrderedItems = function () {
    isVisitedNode = Object.create(null)
    finishTimeCount = 0
    finishingTimeList = []

    for (const node in graph) {
      if (
        Object.prototype.hasOwnProperty.call(graph, node) &&
        !isVisitedNode[node]
      ) {
        dfsTraverse(node)
      }
    }

    finishingTimeList.sort(function (item1, item2) {
	logger.debug('>>> Entering sort()');
      return item1.finishTime > item2.finishTime ? -1 : 1
    })

    return finishingTimeList.map(function (value) {
	logger.debug('>>> Entering map()');
      return value.node
    })
  }

  function dfsTraverse(node) {
	logger.debug(`>>> Entering dfsTraverse(node=${node})`);
    isVisitedNode[node] = true
    if (graph[node]) {
      for (let i = 0; i < graph[node].length; i++) {
        nextNode = graph[node][i]
        if (isVisitedNode[nextNode]) continue
        dfsTraverse(nextNode)
      }
		logger.debug(`<<< Exiting dfsTraverse(node=${node})`);
    }

    finishingTimeList.push({
      node,
      finishTime: ++finishTimeCount
    })
  }
}

/* TEST */
// const topoSorter = new TopologicalSorter()
// topoSorter.addOrder(5, 2)
// topoSorter.addOrder(5, 0)
// topoSorter.addOrder(4, 0)
// topoSorter.addOrder(4, 1)
// topoSorter.addOrder(2, 3)
// topoSorter.addOrder(3, 1)
// topoSorter.sortAndGetOrderedItems()
