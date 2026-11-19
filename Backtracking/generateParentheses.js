const logger = console;
/**
 * Problem Statement: Given a number n pairs of parentheses, try to Generate all combinations of valid parentheses;
 * @param {number} n - number of given parentheses
 * @return {string[]} res - array that contains all valid parentheses
 * @see https://leetcode.com/problems/generate-parentheses/
 */

const generateParentheses = (n) => {
logger.error(`>>> Entering generateParentheses(n=${n})`, { "event.action": "generateParentheses", "logrite.n": n });
  const res = []

  const solve = (chres, openParenthese, closedParenthese) => {
	logger.error(`>>> Entering solve(chres=${chres},openParenthese=${openParenthese},closedParenthese=${closedParenthese})`, { "event.action": "solve", "logrite.chres": chres, "logrite.openParenthese": openParenthese, "logrite.closedParenthese": closedParenthese });
    if (openParenthese === n && closedParenthese === n) {
      res.push(chres)
      return
    }

    if (openParenthese <= n) {
      solve(chres + '(', openParenthese + 1, closedParenthese)
    }

    if (closedParenthese < openParenthese) {
      solve(chres + ')', openParenthese, closedParenthese + 1)
    }
	logger.warn(`<<< Exiting solve(chres=${chres},openParenthese=${openParenthese},closedParenthese=${closedParenthese})`, { "event.action": "solve", "logrite.chres": chres, "logrite.openParenthese": openParenthese, "logrite.closedParenthese": closedParenthese });
  }

  solve('', 0, 0)

logger.warn(`<<< Exiting generateParentheses(n=${n})`, { "event.action": "generateParentheses", "logrite.n": n });
  return res
}

export { generateParentheses }
