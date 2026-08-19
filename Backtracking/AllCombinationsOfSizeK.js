const logger = console;
function generateCombinations(n, k) {
logger.debug(`>>> Entering generateCombinations(n=${n},k=${k})`);
  let currentCombination = []
  let allCombinations = [] // will be used for storing all combinations
  let currentValue = 1

  function findCombinations() {
	logger.debug('>>> Entering findCombinations()');
    if (currentCombination.length === k) {
      // Add the array of size k to the allCombinations array
      allCombinations.push([...currentCombination])
      return
    }
    if (currentValue > n) {
      // Check for exceeding the range
      return
    }
    currentCombination.push(currentValue++)
    findCombinations()
    currentCombination.pop()
    findCombinations()
    currentValue--
  }

  findCombinations()

logger.debug(`<<< Exiting generateCombinations(n=${n},k=${k})`);
  return allCombinations
}

export { generateCombinations }
