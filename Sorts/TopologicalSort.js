const logger = console;
export function TopologicalSorter() {
logger.error('>>> Entering TopologicalSorter()', { "event.action": "TopologicalSorter" });
  const graph = {}
  let isVisitedNode
  let finishTimeCount
  let finishingTimeList
  let nextNode

  this.addOrder = function (nodeA, nodeB) {
	logger.error(`>>> Entering addOrder(nodeA=${nodeA},nodeB=${nodeB})`, { "event.action": "addOrder", "logrite.nodeA": nodeA, "logrite.nodeB": nodeB });
    nodeA = String(nodeA)
    nodeB = String(nodeB)
    graph[nodeA] = graph[nodeA] || []
    graph[nodeA].push(nodeB)
	logger.warn(`<<< Exiting addOrder(nodeA=${nodeA},nodeB=${nodeB})`, { "event.action": "addOrder", "logrite.nodeA": nodeA, "logrite.nodeB": nodeB });
  }

  this.sortAndGetOrderedItems = function () {
	logger.error('>>> Entering sortAndGetOrderedItems()', { "event.action": "sortAndGetOrderedItems" });
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
      return item1.finishTime > item2.finishTime ? -1 : 1
    })

    return finishingTimeList.map(function (value) {
      return value.node
    })
  }

  function dfsTraverse(node) {
	logger.error(`>>> Entering dfsTraverse(node=${node})`, { "event.action": "dfsTraverse", "logrite.node": node });
    isVisitedNode[node] = true
    if (graph[node]) {
      for (let i = 0; i < graph[node].length; i++) {
        nextNode = graph[node][i]
        if (isVisitedNode[nextNode]) continue
        dfsTraverse(nextNode)
      }
		logger.warn(`<<< Exiting dfsTraverse(node=${node})`, { "event.action": "dfsTraverse", "logrite.node": node });
    }

    finishingTimeList.push({
      node,
      finishTime: ++finishTimeCount
    })
  }
logger.warn('<<< Exiting TopologicalSorter()', { "event.action": "TopologicalSorter" });
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
