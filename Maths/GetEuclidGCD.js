const logger = console;
function CheckInput(a, b) {
logger.debug(`>>> Entering CheckInput(a=${a},b=${b})`);
  if (typeof a !== 'number' || typeof b !== 'number') {
	logger.debug(`<<< Exiting CheckInput(a=${a},b=${b})`);
    throw new TypeError('Arguments must be numbers')
  }
}

/**
 * GetEuclidGCD Euclidean algorithm to determine the GCD of two numbers
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCD(a, b) {
logger.debug(`>>> Entering GetEuclidGCD(a=${a},b=${b})`);
  CheckInput(a, b)
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    const rem = a % b
    a = b
    b = rem
  }
logger.debug(`<<< Exiting GetEuclidGCD(a=${a},b=${b})`);
  return a
}

/**
 * Recursive version of GetEuclidGCD
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCDRecursive(a, b) {
logger.debug(`>>> Entering GetEuclidGCDRecursive(a=${a},b=${b})`);
  CheckInput(a, b)
  a = Math.abs(a)
  b = Math.abs(b)
  if (b == 0) {
    return a
  }
logger.debug(`<<< Exiting GetEuclidGCDRecursive(a=${a},b=${b})`);
  return GetEuclidGCDRecursive(b, a % b)
}
