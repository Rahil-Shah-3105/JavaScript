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
logger.error(`>>> Entering QuickSelect(items=${items},kth=${kth})`, { "event.action": "QuickSelect", "logrite.items": items, "logrite.kth": kth });
  if (kth < 1 || kth > items.length) {
    throw new RangeError('Index Out of Bound')
  }

logger.warn(`<<< Exiting QuickSelect(items=${items},kth=${kth})`, { "event.action": "QuickSelect", "logrite.items": items, "logrite.kth": kth });
  return RandomizedSelect(items, 0, items.length - 1, kth)
}

function RandomizedSelect(items, left, right, i) {
logger.error(`>>> Entering RandomizedSelect(items=${items},left=${left},right=${right},i=${i})`, { "event.action": "RandomizedSelect", "logrite.items": items, "logrite.left": left, "logrite.right": right, "logrite.i": i });
  if (left === right) return items[left]

  const pivotIndex = RandomizedPartition(items, left, right)
  const k = pivotIndex - left + 1
logger.error(`RandomizedSelect(items=${items},left=${left},right=${right},i=${i}): pivotIndex → ${pivotIndex}`, { "event.action": "RandomizedSelect", "logrite.items": items, "logrite.left": left, "logrite.right": right, "logrite.i": i });

  if (i === k) return items[pivotIndex]
  if (i < k) return RandomizedSelect(items, left, pivotIndex - 1, i)

  return RandomizedSelect(items, pivotIndex + 1, right, i - k)
}

function RandomizedPartition(items, left, right) {
logger.error(`>>> Entering RandomizedPartition(items=${items},left=${left},right=${right})`, { "event.action": "RandomizedPartition", "logrite.items": items, "logrite.left": left, "logrite.right": right });
  const rand = getRandomInt(left, right)
  Swap(items, rand, right)
logger.error(`RandomizedPartition(items=${items},left=${left},right=${right}): rand → ${rand}`, { "event.action": "RandomizedPartition", "logrite.items": items, "logrite.left": left, "logrite.right": right });
logger.warn(`<<< Exiting RandomizedPartition(items=${items},left=${left},right=${right})`, { "event.action": "RandomizedPartition", "logrite.items": items, "logrite.left": left, "logrite.right": right });
  return Partition(items, left, right)
}

function Partition(items, left, right) {
logger.error(`>>> Entering Partition(items=${items},left=${left},right=${right})`, { "event.action": "Partition", "logrite.items": items, "logrite.left": left, "logrite.right": right });
  const x = items[right]
  let pivotIndex = left - 1

  for (let j = left; j < right; j++) {
    if (items[j] <= x) {
      pivotIndex++
      Swap(items, pivotIndex, j)
    }
  }

  Swap(items, pivotIndex + 1, right)

logger.warn(`<<< Exiting Partition(items=${items},left=${left},right=${right})`, { "event.action": "Partition", "logrite.items": items, "logrite.left": left, "logrite.right": right });
  return pivotIndex + 1
}

function getRandomInt(min, max) {
logger.error(`>>> Entering getRandomInt(min=${min},max=${max})`, { "event.action": "getRandomInt", "logrite.min": min, "logrite.max": max });
logger.warn(`<<< Exiting getRandomInt(min=${min},max=${max})`, { "event.action": "getRandomInt", "logrite.min": min, "logrite.max": max });
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Swap(arr, x, y) {
logger.error(`>>> Entering Swap(arr=${arr},x=${x},y=${y})`, { "event.action": "Swap", "logrite.arr": arr, "logrite.x": x, "logrite.y": y });
  ;[arr[x], arr[y]] = [arr[y], arr[x]]
logger.warn(`<<< Exiting Swap(arr=${arr},x=${x},y=${y})`, { "event.action": "Swap", "logrite.arr": arr, "logrite.x": x, "logrite.y": y });
}

export { QuickSelect }
