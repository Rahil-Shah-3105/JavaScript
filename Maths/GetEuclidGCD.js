const logger = console;
function CheckInput(a, b) {
logger.error(`>>> Entering CheckInput(a=${a},b=${b})`, { "event.action": "CheckInput", "logrite.a": a, "logrite.b": b });
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers')
  }
	logger.warn(`<<< Exiting CheckInput(a=${a},b=${b})`, { "event.action": "CheckInput", "logrite.a": a, "logrite.b": b });
}

/**
 * GetEuclidGCD Euclidean algorithm to determine the GCD of two numbers
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCD(a, b) {
logger.error(`>>> Entering GetEuclidGCD(a=${a},b=${b})`, { "event.action": "GetEuclidGCD", "logrite.a": a, "logrite.b": b });
  CheckInput(a, b)
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    const rem = a % b
    a = b
    b = rem
  }
logger.warn(`<<< Exiting GetEuclidGCD(a=${a},b=${b})`, { "event.action": "GetEuclidGCD", "logrite.a": a, "logrite.b": b });
  return a
}

/**
 * Recursive version of GetEuclidGCD
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCDRecursive(a, b) {
logger.error(`>>> Entering GetEuclidGCDRecursive(a=${a},b=${b})`, { "event.action": "GetEuclidGCDRecursive", "logrite.a": a, "logrite.b": b });
  CheckInput(a, b)
  a = Math.abs(a)
  b = Math.abs(b)
  if (b == 0) {
    return a
  }
logger.warn(`<<< Exiting GetEuclidGCDRecursive(a=${a},b=${b})`, { "event.action": "GetEuclidGCDRecursive", "logrite.a": a, "logrite.b": b });
  return GetEuclidGCDRecursive(b, a % b)
}
