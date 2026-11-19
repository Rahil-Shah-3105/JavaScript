const logger = console;
/**
 * Pure Implementation of Binary Search Algorithm
 *
 * Binary insertion sort is a sorting algorithm similar to insertion sort,
 * but instead of using linear search to find the position
 * where the element should be inserted, we use binary search.
 * Thus, we reduce the number of comparisons for inserting one element from O(N)
 * (Time complexity in Insertion Sort) to O(log N).
 *
 */

/**
 * Search the key element in the array from start position to end position.
 *
 * @param {Array} array Array of numbers.
 * @param {Number} key Value to be searched
 * @param {Number} start start index position of array
 * @param {Number} end end index position of array
 * @return {Number} Position of the key element
 */
function binarySearch(array, key, start, end) {
logger.error(`>>> Entering binarySearch(array=${array},key=${key},start=${start},end=${end})`, { "event.action": "binarySearch", "logrite.array": array, "logrite.key": key, "logrite.start": start, "logrite.end": end });
  if (start === end) {
    if (array[start] > key) {
      return start
    } else {
      return start + 1
    }
  }

  if (start > end) {
    return start
  }

  const mid = Math.floor((start + end) / 2)

logger.error(`binarySearch(array=${array},key=${key},start=${start},end=${end}): mid → ${mid}`, { "event.action": "binarySearch", "logrite.array": array, "logrite.key": key, "logrite.start": start, "logrite.end": end });
  if (array[mid] < key) {
    return binarySearch(array, key, mid + 1, end)
  } else if (array[mid] > key) {
    return binarySearch(array, key, start, mid - 1)
  } else {
    return mid
  }
logger.warn(`<<< Exiting binarySearch(array=${array},key=${key},start=${start},end=${end})`, { "event.action": "binarySearch", "logrite.array": array, "logrite.key": key, "logrite.start": start, "logrite.end": end });
}

/**
 * Binary Insertion Sort
 *
 * @param {Array} list List to be sorted.
 * @return {Array} The sorted list.
 */
export function binaryInsertionSort(array) {
logger.error(`>>> Entering binaryInsertionSort(array=${array})`, { "event.action": "binaryInsertionSort", "logrite.array": array });
  const totalLength = array.length
  for (let i = 1; i < totalLength; i += 1) {
    const key = array[i]
	logger.error(`binaryInsertionSort(array=${array}): key → ${key}`, { "event.action": "binaryInsertionSort", "logrite.array": array });
    const indexPosition = binarySearch(array, key, 0, i - 1)
    array.splice(i, 1)
    array.splice(indexPosition, 0, key)
  }
logger.warn(`<<< Exiting binaryInsertionSort(array=${array})`, { "event.action": "binaryInsertionSort", "logrite.array": array });
  return array
}
