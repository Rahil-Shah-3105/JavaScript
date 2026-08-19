const logger = console;
/*
The density of a network is a measure of how many edges exist proportional to
how many edges would exist in a complete network (where all possible edges).
https://networkx.org/documentation/networkx-1.9/reference/generated/networkx.classes.function.density.html
*/
function density(numberOfNodes, numberOfEdges, isDirected = false) {
logger.debug(`>>> Entering density(numberOfNodes=${numberOfNodes},numberOfEdges=${numberOfEdges},isDirected=${isDirected})`);
  const multi = isDirected ? 1 : 2
logger.debug(`<<< Exiting density(numberOfNodes=${numberOfNodes},numberOfEdges=${numberOfEdges},isDirected=${isDirected})`);
  return (multi * numberOfEdges) / (numberOfNodes * (numberOfNodes - 1))
}

export { density }
