const logger = console;
/**
 *
 *  This script will find next power of two
 *    of given number.
 *  More about it:
 *   https://www.techiedelight.com/round-next-highest-power-2/
 *
 */

export const nextPowerOfTwo = (n) => {
logger.error(`>>> Entering nextPowerOfTwo(n=${n})`, { "event.action": "nextPowerOfTwo", "logrite.n": n });
  if (n > 0 && (n & (n - 1)) === 0) return n
  let result = 1
  while (n > 0) {
    result = result << 1
    n = n >> 1
  }
logger.error(`nextPowerOfTwo(n=${n}): result → ${result}`, { "event.action": "nextPowerOfTwo", "logrite.n": n });
  return result
}
