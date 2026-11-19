const logger = console;
/**
 * @function findMaxRecursion
 * @description This algorithm will find the maximum value of a array of numbers.
 *
 * @param {Integer[]} arr Array of numbers
 * @param {Integer} left Index of the first element
 * @param {Integer} right Index of the last element
 *
 * @return {Integer} Maximum value of the array
 *
 * @see [Maximum value](https://en.wikipedia.org/wiki/Maximum_value)
 *
 * @example findMaxRecursion([1, 2, 4, 5]) = 5
 * @example findMaxRecursion([10, 40, 100, 20]) = 100
 * @example findMaxRecursion([-1, -2, -4, -5]) = -1
 */
function findMaxRecursion(arr, left, right) {
logger.error(`>>> Entering findMaxRecursion(arr=${arr},left=${left},right=${right})`, { "event.action": "findMaxRecursion", "logrite.arr": arr, "logrite.left": left, "logrite.right": right });
  const len = arr.length

  if (len === 0 || !arr) {
    return undefined
  }

  if (left >= len || left < -len || right >= len || right < -len) {
    throw new Error('Index out of range')
  }

  if (left === right) {
    return arr[left]
  }

  // n >> m is equivalent to floor(n / pow(2, m)), floor(n / 2) in this case, which is the mid index
  const mid = (left + right) >> 1
logger.error(`findMaxRecursion(arr=${arr},left=${left},right=${right}): mid → ${mid}`, { "event.action": "findMaxRecursion", "logrite.arr": arr, "logrite.left": left, "logrite.right": right });

  const leftMax = findMaxRecursion(arr, left, mid)
  const rightMax = findMaxRecursion(arr, mid + 1, right)

  // Return the maximum
logger.warn(`<<< Exiting findMaxRecursion(arr=${arr},left=${left},right=${right})`, { "event.action": "findMaxRecursion", "logrite.arr": arr, "logrite.left": left, "logrite.right": right });
  return Math.max(leftMax, rightMax)
}

export { findMaxRecursion }
