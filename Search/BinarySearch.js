const logger = console;
/* Binary Search: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * Search a sorted array by repeatedly dividing the search interval
 * in half. Begin with an interval covering the whole array. If the value of the
 * search key is less than the item in the middle of the interval, narrow the interval
 * to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * value is found or the interval is empty.
 */

function binarySearchRecursive(arr, x, low = 0, high = arr.length - 1) {
logger.error(`>>> Entering binarySearchRecursive(arr=${arr},x=${x},low=${low},high=${high})`, { "event.action": "binarySearchRecursive", "logrite.arr": arr, "logrite.x": x, "logrite.low": low, "logrite.high": high });
  const mid = Math.floor(low + (high - low) / 2)

logger.error(`binarySearchRecursive(arr=${arr},x=${x},low=${low},high=${high}): mid → ${mid}`, { "event.action": "binarySearchRecursive", "logrite.arr": arr, "logrite.x": x, "logrite.low": low, "logrite.high": high });
  if (high >= low) {
    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      return binarySearchRecursive(arr, x, low, mid - 1)
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      return binarySearchRecursive(arr, x, mid + 1, high)
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
logger.warn(`<<< Exiting binarySearchRecursive(arr=${arr},x=${x},low=${low},high=${high})`, { "event.action": "binarySearchRecursive", "logrite.arr": arr, "logrite.x": x, "logrite.low": low, "logrite.high": high });
    return -1
  }
}
function binarySearchIterative(arr, x, low = 0, high = arr.length - 1) {
logger.error(`>>> Entering binarySearchIterative(arr=${arr},x=${x},low=${low},high=${high})`, { "event.action": "binarySearchIterative", "logrite.arr": arr, "logrite.x": x, "logrite.low": low, "logrite.high": high });
  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2)

	logger.error(`binarySearchIterative(arr=${arr},x=${x},low=${low},high=${high}): mid → ${mid}`, { "event.action": "binarySearchIterative", "logrite.arr": arr, "logrite.x": x, "logrite.low": low, "logrite.high": high });
    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      high = mid - 1
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      low = mid + 1
    }
  }
  // if low > high => we have searched the whole array without finding the item
logger.warn(`<<< Exiting binarySearchIterative(arr=${arr},x=${x},low=${low},high=${high})`, { "event.action": "binarySearchIterative", "logrite.arr": arr, "logrite.x": x, "logrite.low": low, "logrite.high": high });
  return -1
}

export { binarySearchIterative, binarySearchRecursive }
