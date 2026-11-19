const logger = console;
/**
 * [LocalMaxima](https://www.geeksforgeeks.org/find-indices-of-all-local-maxima-and-local-minima-in-an-array/) is an algorithm to find relative bigger numbers compared to their neighbors
 *
 * Notes:
 * - works by using divide and conquer
 * - the function gets the array A with n Real numbers and returns the index of local max point (if more than one exists return the first one)
 *
 * @complexity: O(log(n)) (on average )
 * @complexity: O(log(n)) (worst case)
 * @flow
 */
const findMaxPointIndex = (
  array,
  rangeStartIndex,
  rangeEndIndex,
  originalLength
) => {
logger.error(`>>> Entering findMaxPointIndex(array=${array},rangeStartIndex=${rangeStartIndex},rangeEndIndex=${rangeEndIndex},originalLength=${originalLength})`, { "event.action": "findMaxPointIndex", "logrite.array": array, "logrite.rangeStartIndex": rangeStartIndex, "logrite.rangeEndIndex": rangeEndIndex, "logrite.originalLength": originalLength });
  // find index range middle point
  const middleIndex =
    rangeStartIndex + parseInt((rangeEndIndex - rangeStartIndex) / 2)

  // handle array bounds
  if (
    (middleIndex === 0 || array[middleIndex - 1] <= array[middleIndex]) &&
    (middleIndex === originalLength - 1 ||
      array[middleIndex + 1] <= array[middleIndex])
  ) {
    return middleIndex
  } else if (middleIndex > 0 && array[middleIndex - 1] > array[middleIndex]) {
    return findMaxPointIndex(
      array,
      rangeStartIndex,
      middleIndex - 1,
      originalLength
    )
  } else {
    // regular local max
	logger.warn(`<<< Exiting findMaxPointIndex(array=${array},rangeStartIndex=${rangeStartIndex},rangeEndIndex=${rangeEndIndex},originalLength=${originalLength})`, { "event.action": "findMaxPointIndex", "logrite.array": array, "logrite.rangeStartIndex": rangeStartIndex, "logrite.rangeEndIndex": rangeEndIndex, "logrite.originalLength": originalLength });
    return findMaxPointIndex(
      array,
      middleIndex + 1,
      rangeEndIndex,
      originalLength
    )
  }
}

const LocalMaximumPoint = (A) => findMaxPointIndex(A, 0, A.length - 1, A.length)

export { LocalMaximumPoint }
