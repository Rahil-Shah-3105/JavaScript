const logger = console;
/**
 * Hamming Distance: https://en.wikipedia.org/wiki/Hamming_distance
 *
 *
 * Hamming distance is a metric for comparing two binary data strings.
 *
 * While comparing two binary strings of equal length, Hamming distance
 * is the number of bit positions in which the two bits are different.
 * The Hamming distance between two strings, a and b is denoted as d(a,b)
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

export const hammingDistance = (a, b) => {
logger.error(`>>> Entering hammingDistance(a=${a},b=${b})`, { "event.action": "hammingDistance", "logrite.a": a, "logrite.b": b });
  if (a.length !== b.length) {
    throw new Error('Strings must be of the same length')
  }

  let distance = 0

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      distance += 1
    }
  }

logger.warn(`<<< Exiting hammingDistance(a=${a},b=${b})`, { "event.action": "hammingDistance", "logrite.a": a, "logrite.b": b });
  return distance
}
