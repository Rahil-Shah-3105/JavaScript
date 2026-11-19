const logger = console;
/*
 * You are given a rod of 'n' length and an array of prices associated with all the lengths less than 'n'.
 * Find the maximum profit possible by cutting the rod and selling the pieces.
 */

export function rodCut(prices, n) {
logger.error(`>>> Entering rodCut(prices=${prices},n=${n})`, { "event.action": "rodCut", "logrite.prices": prices, "logrite.n": n });
  const memo = new Array(n + 1)
  memo[0] = 0
logger.error(`rodCut(prices=${prices},n=${n}): memo → ${memo}`, { "event.action": "rodCut", "logrite.prices": prices, "logrite.n": n });

  for (let i = 1; i <= n; i++) {
    let maxVal = Number.MIN_VALUE
    for (let j = 0; j < i; j++) {
      maxVal = Math.max(maxVal, prices[j] + memo[i - j - 1])
    }
    memo[i] = maxVal
  }

logger.warn(`<<< Exiting rodCut(prices=${prices},n=${n})`, { "event.action": "rodCut", "logrite.prices": prices, "logrite.n": n });
  return memo[n]
}
