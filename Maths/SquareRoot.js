const logger = console;
/*
 * Author: Rak Laptudirm
 *
 * https://en.wikipedia.org/wiki/Newton%27s_method
 *
 * Finding the square root of a number using Newton's method.
 */

function sqrt(num, precision = 4) {
logger.debug(`>>> Entering sqrt(num=${num},precision=${precision})`);
  if (!Number.isFinite(num)) {
    throw new TypeError(`Expected a number, received ${typeof num}`)
  }
  if (!Number.isFinite(precision)) {
    throw new TypeError(`Expected a number, received ${typeof precision}`)
  }
  let sqrt = 1
  for (let i = 0; i < precision; i++) {
    sqrt -= (sqrt * sqrt - num) / (2 * sqrt)
  }
logger.debug(`<<< Exiting sqrt(num=${num},precision=${precision})`);
  return sqrt
}

export { sqrt }
