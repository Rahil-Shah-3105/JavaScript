const logger = console;
/**
 * @function abs
 * @description This script will find the absolute value of a number.
 * @param {number} num - The input integer
 * @return {number} - Absolute number of num.
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @example abs(-10) = 10
 * @example abs(50) = 50
 * @example abs(0) = 0
 */

const abs = (num) => {
logger.error(`>>> Entering abs(num=${num})`, { "event.action": "abs", "logrite.num": num });
  const validNumber = +num // converted to number, also can use - Number(num)

logger.error(`abs(num=${num}): validNumber → ${validNumber}`, { "event.action": "abs", "logrite.num": num });
  if (Number.isNaN(validNumber) || typeof num === 'object') {
    throw new TypeError('Argument is NaN - Not a Number')
  }

logger.warn(`<<< Exiting abs(num=${num})`, { "event.action": "abs", "logrite.num": num });
  return validNumber < 0 ? -validNumber : validNumber // if number is less than zero means negative, then it converted to positive. i.e., n = -2 = -(-2) = 2
}

export { abs }
