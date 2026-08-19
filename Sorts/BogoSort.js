const logger = console;
/**
 * Checks whether the given array is sorted in ascending order.
 */
export function isSorted(array) {
logger.debug(`>>> Entering isSorted(array=${array})`);
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
logger.debug(`<<< Exiting isSorted(array=${array})`);
  return true
}

/**
 * Shuffles the given array randomly in place.
 */
function shuffle(array) {
logger.debug(`>>> Entering shuffle(array=${array})`);
  for (let i = array.length - 1; i; i--) {
    const m = Math.floor(Math.random() * i)
    const n = array[i - 1]
	logger.debug(`shuffle(array=${array}): m → ${m}`);
    array[i - 1] = array[m]
    array[m] = n
	logger.debug(`<<< Exiting shuffle(array=${array})`);
  }
}

/**
 * Implementation of the bogosort algorithm.
 *
 * This sorting algorithm randomly rearranges the array until it is sorted.
 *
 * For more information see: https://en.wikipedia.org/wiki/Bogosort
 */
export function bogoSort(items) {
logger.debug(`>>> Entering bogoSort(items=${items})`);
  while (!isSorted(items)) {
    shuffle(items)
  }
logger.debug(`<<< Exiting bogoSort(items=${items})`);
  return items
}
