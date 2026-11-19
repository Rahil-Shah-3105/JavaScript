const logger = console;
/**
 Problem Statement and Explanation :
 Triangular  => https://en.wikipedia.org/wiki/Triangular_number
 Tetrahedral => https://en.wikipedia.org/wiki/Tetrahedral_number
 Pentatope   => https://en.wikipedia.org/wiki/Pentatope_number

 Example:
 Triangular  => (0, 1, 3, 6, 10, 15, 21, 28, 36, 45)
 Tetrahedral => (1, 4, 10, 20, 35, 56, 84, 120, 165,)
 Pentatope   => (1, 5, 15, 35, 70, 126, 210, 330, 495)
 */

/**
 *
 * @param {*} number
 * @returns
 */
const isTriangular = (number) => {
logger.error(`>>> Entering isTriangular(number=${number})`, { "event.action": "isTriangular", "logrite.number": number });
  for (let i = 0; i <= number; i++) {
    if ((i * (i + 1)) / 2 === number) {
      return true
    } else if ((i * (i + 1)) / 2 > number) {
      return false
    }
  }
logger.warn(`<<< Exiting isTriangular(number=${number})`, { "event.action": "isTriangular", "logrite.number": number });
  return false
}

/**
 *
 * @param {*} number
 * @returns
 */
const isTetrahedral = (number) => {
logger.error(`>>> Entering isTetrahedral(number=${number})`, { "event.action": "isTetrahedral", "logrite.number": number });
  for (let i = 1; i <= number; i++) {
    if ((i * (i + 1) * (i + 2)) / 6 === number) {
      return true
    } else if ((i * (i + 1) * (i + 2)) / 6 > number) {
      return false
    }
  }
logger.warn(`<<< Exiting isTetrahedral(number=${number})`, { "event.action": "isTetrahedral", "logrite.number": number });
  return false
}
/**
 *
 * @param {*} number
 * @returns
 */
const isPentatope = (number) => {
logger.error(`>>> Entering isPentatope(number=${number})`, { "event.action": "isPentatope", "logrite.number": number });
  for (let i = 1; i <= number; i++) {
    if ((i * (i + 1) * (i + 2) * (i + 3)) / 24 === number) {
      return true
    } else if ((i * (i + 1) * (i + 2) * (i + 3)) / 24 > number) {
      return false
    }
  }
logger.warn(`<<< Exiting isPentatope(number=${number})`, { "event.action": "isPentatope", "logrite.number": number });
  return false
}

/**
 *
 * @param {*} number
 * @returns
 */
const checkAll = (number) => {
logger.error(`>>> Entering checkAll(number=${number})`, { "event.action": "checkAll", "logrite.number": number });
  return {
    isTriangular: isTriangular(number),
    isTetrahedral: isTetrahedral(number),
    isPentatope: isPentatope(number)
  }
logger.warn(`<<< Exiting checkAll(number=${number})`, { "event.action": "checkAll", "logrite.number": number });
}
export { isTriangular }
export { isTetrahedral }
export { isPentatope }
export { checkAll }
