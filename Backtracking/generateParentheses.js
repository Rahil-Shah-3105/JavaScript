const logger = console;
/**
 * Problem Statement: Given a number n pairs of parentheses, try to Generate all combinations of valid parentheses;
 * @param {number} n - number of given parentheses
 * @return {string[]} res - array that contains all valid parentheses
 * @see https://leetcode.com/problems/generate-parentheses/
 */

const generateParentheses = (n) => {
logger.debug(`>>> Entering generateParentheses(n=${n})`);
  const res = []

  const solve = (chres, openParenthese, closedParenthese) => {
	logger.debug(`>>> Entering solve(chres=${chres},openParenthese=${openParenthese},closedParenthese=${closedParenthese})`);
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
	logger.debug(`<<< Exiting solve(chres=${chres},openParenthese=${openParenthese},closedParenthese=${closedParenthese})`);
  }

  solve('', 0, 0)

logger.debug(`<<< Exiting generateParentheses(n=${n})`);
  return res
}

export { generateParentheses }
