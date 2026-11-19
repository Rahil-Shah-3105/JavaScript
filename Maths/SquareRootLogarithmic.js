const logger = console;
/**
 * @function squareRootLogarithmic
 * @description
 * Return the square root of 'num' rounded down
 * to the nearest integer.
 * More info: https://leetcode.com/problems/sqrtx/
 * @param {Number} num Number whose square of root is to be found
 * @returns {Number} Square root
 * @see [BinarySearch](https://en.wikipedia.org/wiki/Binary_search_algorithm)
 * @example
 * const num1 = 4
 * logarithmicSquareRoot(num1) // ====> 2
 * @example
 * const num2 = 8
 * logarithmicSquareRoot(num1) // ====> 2
 *
 */
const squareRootLogarithmic = (num) => {
logger.error(`>>> Entering squareRootLogarithmic(num=${num})`, { "event.action": "squareRootLogarithmic", "logrite.num": num });
  if (typeof num !== 'number') {
    throw new Error('Input data must be numbers')
  }
  let answer = 0
  let sqrt = 0
  let edge = num

  while (sqrt <= edge) {
    const mid = Math.trunc((sqrt + edge) / 2)
    if (mid * mid === num) {
	logger.error(`squareRootLogarithmic(num=${num}): mid → ${mid}`, { "event.action": "squareRootLogarithmic", "logrite.num": num });
      return mid
    } else if (mid * mid < num) {
      sqrt = mid + 1
      answer = mid
    } else {
      edge = mid - 1
    }
  }

logger.warn(`<<< Exiting squareRootLogarithmic(num=${num})`, { "event.action": "squareRootLogarithmic", "logrite.num": num });
  return answer
}

export { squareRootLogarithmic }
