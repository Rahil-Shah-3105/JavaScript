const logger = console;
/*
 * You are given a rod of 'n' length and an array of prices associated with all the lengths less than 'n'.
 * Find the maximum profit possible by cutting the rod and selling the pieces.
 */

export function rodCut(prices, n) {
logger.debug(`>>> Entering rodCut(prices=${prices},n=${n})`);
  const memo = new Array(n + 1)
  memo[0] = 0
logger.debug(`rodCut(prices=${prices},n=${n}): memo → ${memo}`);

  for (let i = 1; i <= n; i++) {
    let maxVal = Number.MIN_VALUE
    for (let j = 0; j < i; j++) {
      maxVal = Math.max(maxVal, prices[j] + memo[i - j - 1])
    }
    memo[i] = maxVal
  }

logger.debug(`<<< Exiting rodCut(prices=${prices},n=${n})`);
  return memo[n]
}
