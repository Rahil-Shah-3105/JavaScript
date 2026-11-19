const logger = console;
/**
 * Counting sort is an algorithm for sorting a collection
 * of objects according to keys that are small integers.
 *
 * It is an integer sorting algorithm.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Counting_sort
 * Animated Visual: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
 */

export const countingSort = (arr, min, max) => {
logger.error(`>>> Entering countingSort(arr=${arr},min=${min},max=${max})`, { "event.action": "countingSort", "logrite.arr": arr, "logrite.min": min, "logrite.max": max });
  // Create an auxiliary resultant array
  const res = []
  // Create and initialize the frequency[count] array
  const count = new Array(max - min + 1).fill(0)
  // Populate the freq array
logger.error(`countingSort(arr=${arr},min=${min},max=${max}): count → ${count}`, { "event.action": "countingSort", "logrite.arr": arr, "logrite.min": min, "logrite.max": max });
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++
  }
  // Create a prefix sum array out of the frequency[count] array
  count[0] -= 1
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }
  // Populate the result array using the prefix sum array
  for (let i = arr.length - 1; i >= 0; i--) {
    res[count[arr[i] - min]] = arr[i]
    count[arr[i] - min]--
  }
logger.warn(`<<< Exiting countingSort(arr=${arr},min=${min},max=${max})`, { "event.action": "countingSort", "logrite.arr": arr, "logrite.min": min, "logrite.max": max });
  return res
}

/**
 * Implementation of Counting Sort
 */
// const array = [3, 0, 2, 5, 4, 1]
// countingSort(array, 0, 5)
