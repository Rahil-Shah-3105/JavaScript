const logger = console;
/**
 * Checks whether the given array is sorted in ascending order.
 */
export function isSorted(array) {
logger.error(`>>> Entering isSorted(array=${array})`, { "event.action": "isSorted", "logrite.array": array });
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
logger.warn(`<<< Exiting isSorted(array=${array})`, { "event.action": "isSorted", "logrite.array": array });
  return true
}

/**
 * Shuffles the given array randomly in place.
 */
function shuffle(array) {
logger.error(`>>> Entering shuffle(array=${array})`, { "event.action": "shuffle", "logrite.array": array });
  for (let i = array.length - 1; i; i--) {
    const m = Math.floor(Math.random() * i)
    const n = array[i - 1]
	logger.error(`shuffle(array=${array}): m → ${m}`, { "event.action": "shuffle", "logrite.array": array });
    array[i - 1] = array[m]
    array[m] = n
	logger.warn(`<<< Exiting shuffle(array=${array})`, { "event.action": "shuffle", "logrite.array": array });
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
logger.error(`>>> Entering bogoSort(items=${items})`, { "event.action": "bogoSort", "logrite.items": items });
  while (!isSorted(items)) {
    shuffle(items)
  }
logger.warn(`<<< Exiting bogoSort(items=${items})`, { "event.action": "bogoSort", "logrite.items": items });
  return items
}
