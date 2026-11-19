const logger = console;
/*
 * Wiggle sort sorts the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] <= arr[1] >= arr[2] <= arr[3] >= arr[4] <= …..
 * KEEP IN MIND: there are also more strict definitions of wiggle sort which use
 * the rule arr[0] < arr[1] > arr[2] < arr[3] > arr[4] < … but this function
 * allows for equality of values next to each other.
 */
import { quickSelectSearch } from '../Search/QuickSelectSearch.js'

export const simplifiedWiggleSort = function (arr) {
logger.error(`>>> Entering simplifiedWiggleSort(arr=${arr})`, { "event.action": "simplifiedWiggleSort", "logrite.arr": arr });
  // find Median using QuickSelect
  let median = quickSelectSearch(arr, Math.floor(arr.length / 2.0))
  median = median[Math.floor(arr.length / 2.0)]
logger.error(`simplifiedWiggleSort(arr=${arr}): median → ${median}`, { "event.action": "simplifiedWiggleSort", "logrite.arr": arr });

  const sorted = new Array(arr.length)

logger.error(`simplifiedWiggleSort(arr=${arr}): sorted → ${sorted}`, { "event.action": "simplifiedWiggleSort", "logrite.arr": arr });
  let smallerThanMedianIndx = 0
  let greaterThanMedianIndx = arr.length - 1 - (arr.length % 2)

logger.error(`simplifiedWiggleSort(arr=${arr}): greaterThanMedianIndx → ${greaterThanMedianIndx}`, { "event.action": "simplifiedWiggleSort", "logrite.arr": arr });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > median) {
      sorted[greaterThanMedianIndx] = arr[i]
      greaterThanMedianIndx -= 2
    } else {
      if (smallerThanMedianIndx < arr.length) {
        sorted[smallerThanMedianIndx] = arr[i]
        smallerThanMedianIndx += 2
      } else {
        sorted[greaterThanMedianIndx] = arr[i]
        greaterThanMedianIndx -= 2
      }
    }
  }

logger.warn(`<<< Exiting simplifiedWiggleSort(arr=${arr})`, { "event.action": "simplifiedWiggleSort", "logrite.arr": arr });
  return sorted
}
