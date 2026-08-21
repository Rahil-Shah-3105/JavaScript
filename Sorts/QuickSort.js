const logger = console;
/**
 * @function QuickSort
 * @description Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * @param {Integer[]} items - Array of integers
 * @return {Integer[]} - Sorted array.
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
 */
function quickSort(items) {
logger.debug(`>>> Entering quickSort(items=${items})`);
  const length = items.length

  if (length <= 1) {
    return items
  }
  const PIVOT = items[0]
  const GREATER = []
  const LESSER = []

  for (let i = 1; i < length; i++) {
    if (items[i] > PIVOT) {
      GREATER.push(items[i])
    } else {
      LESSER.push(items[i])
    }
  }

  const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]
logger.debug(`quickSort(items=${items}): sorted → ${sorted}`);
  return sorted
}

export { quickSort }
