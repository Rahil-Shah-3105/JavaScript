const logger = console;
/**
 * [QuickSelect](https://www.geeksforgeeks.org/quickselect-algorithm/) is an algorithm to find the kth smallest number
 *
 * Notes:
 * -QuickSelect is related to QuickSort, thus has optimal best and average
 * -case (O(n)) but unlikely poor worst case (O(n^2))
 * -This implementation uses randomly selected pivots for better performance
 *
 * @complexity: O(n) (on average )
 * @complexity: O(n^2) (worst case)
 * @flow
 */

function QuickSelect(items, kth) {
logger.debug(`>>> Entering QuickSelect(items=${items},kth=${kth})`);
  if (kth < 1 || kth > items.length) {
    throw new RangeError('Index Out of Bound')
  }

logger.debug(`<<< Exiting QuickSelect(items=${items},kth=${kth})`);
  return RandomizedSelect(items, 0, items.length - 1, kth)
}

function RandomizedSelect(items, left, right, i) {
logger.debug(`>>> Entering RandomizedSelect(items=${items},left=${left},right=${right},i=${i})`);
  if (left === right) return items[left]

  const pivotIndex = RandomizedPartition(items, left, right)
  const k = pivotIndex - left + 1
logger.debug(`RandomizedSelect(items=${items},left=${left},right=${right},i=${i}): pivotIndex → ${pivotIndex}`);

  if (i === k) return items[pivotIndex]
  if (i < k) return RandomizedSelect(items, left, pivotIndex - 1, i)

logger.debug(`<<< Exiting RandomizedSelect(items=${items},left=${left},right=${right},i=${i})`);
  return RandomizedSelect(items, pivotIndex + 1, right, i - k)
}

function RandomizedPartition(items, left, right) {
logger.debug(`>>> Entering RandomizedPartition(items=${items},left=${left},right=${right})`);
  const rand = getRandomInt(left, right)
  Swap(items, rand, right)
logger.debug(`RandomizedPartition(items=${items},left=${left},right=${right}): rand → ${rand}`);
logger.debug(`<<< Exiting RandomizedPartition(items=${items},left=${left},right=${right})`);
  return Partition(items, left, right)
}

function Partition(items, left, right) {
logger.debug(`>>> Entering Partition(items=${items},left=${left},right=${right})`);
  const x = items[right]
  let pivotIndex = left - 1

  for (let j = left; j < right; j++) {
    if (items[j] <= x) {
      pivotIndex++
      Swap(items, pivotIndex, j)
    }
  }

  Swap(items, pivotIndex + 1, right)

logger.debug(`<<< Exiting Partition(items=${items},left=${left},right=${right})`);
  return pivotIndex + 1
}

function getRandomInt(min, max) {
logger.debug(`>>> Entering getRandomInt(min=${min},max=${max})`);
logger.debug(`<<< Exiting getRandomInt(min=${min},max=${max})`);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Swap(arr, x, y) {
logger.debug(`>>> Entering Swap(arr=${arr},x=${x},y=${y})`);
  ;[arr[x], arr[y]] = [arr[y], arr[x]]
logger.debug(`<<< Exiting Swap(arr=${arr},x=${x},y=${y})`);
}

export { QuickSelect }
