const logger = console;
/**
 * Exponential Search
 *
 * The algorithm consists of two stages. The first stage determines a
 * range in which the search key would reside if it were in the list.
 * In the second stage, a binary search is performed on this range.
 *
 *
 *
 */

function binarySearch(arr, value, floor, ceiling) {
logger.debug(`>>> Entering binarySearch(arr=${arr},value=${value},floor=${floor},ceiling=${ceiling})`);
  // Middle index
  const mid = Math.floor((floor + ceiling) / 2)

logger.debug(`binarySearch(arr=${arr},value=${value},floor=${floor},ceiling=${ceiling}): mid → ${mid}`);
  // If value is at the mid position return this position
  if (arr[mid] === value) {
    return mid
  }

  if (floor > ceiling) return -1

  // If the middle element is great than the value
  // search the left part of the array
  if (arr[mid] > value) {
    return binarySearch(arr, value, floor, mid - 1)
    // If the middle element is lower than the value
    // search the right part of the array
  } else {
logger.debug(`<<< Exiting binarySearch(arr=${arr},value=${value},floor=${floor},ceiling=${ceiling})`);
    return binarySearch(arr, value, mid + 1, ceiling)
  }
}

function exponentialSearch(arr, length, value) {
logger.debug(`>>> Entering exponentialSearch(arr=${arr},length=${length},value=${value})`);
  // If value is the first element of the array return this position
  if (arr[0] === value) {
    return 0
  }

  // Find range for binary search
  let i = 1
  while (i < length && arr[i] <= value) {
    i = i * 2
  }

  // Call binary search for the range found above
logger.debug(`<<< Exiting exponentialSearch(arr=${arr},length=${length},value=${value})`);
  return binarySearch(arr, value, i / 2, Math.min(i, length))
}

export { binarySearch, exponentialSearch }

// const arr = [2, 3, 4, 10, 40, 65, 78, 100]
// const value = 78
// const result = exponentialSearch(arr, arr.length, value)
