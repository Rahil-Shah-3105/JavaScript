const logger = console;
/**
 * @function SwapSort
 * @description Swap Sort is an algorithm to find the number of swaps required to sort an array.
    Time complexity of Swap Sort Algorithm is O(nlogn).
    Auxiliary Space required for Swap Sort Algorithm is O(n).
 * @param {Integer[]} items - Array of integers
 * @return {Integer} - Number of swaps required to sort the array.
 * @see [SwapSort](https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/)
 */

export function minSwapsToSort(items) {
logger.debug(`>>> Entering minSwapsToSort(items=${items})`);
  const sortedArray = items.slice()
  sortedArray.sort()
  const indexMap = {}
logger.debug(`minSwapsToSort(items=${items}): sortedArray → ${sortedArray}`);
  for (let i = 0; i < items.length; i++) {
    indexMap[items[i]] = i
  }
  let swaps = 0
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== sortedArray[i]) {
      const temp = items[i]
      items[i] = items[indexMap[sortedArray[i]]]
      items[indexMap[sortedArray[i]]] = temp

      indexMap[temp] = indexMap[sortedArray[i]]
      indexMap[sortedArray[i]] = i
      swaps++
    }
  }
logger.debug(`<<< Exiting minSwapsToSort(items=${items})`);
  return swaps
}
