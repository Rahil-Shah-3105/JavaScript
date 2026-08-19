const logger = console;
/**
 * @function calculateLevenshteinDp
 * @description A Dynamic Programming based solution for calculation of the Levenshtein Distance.
 * @param {String} x - Word to be converted.
 * @param {String} y - Desired result after operations.
 * @return {Integer} The Levenshtein distance between x and y.
 * @see [Levenshtein_distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
 */

function minimum(a, b, c) {
logger.debug(`>>> Entering minimum(a=${a},b=${b},c=${c})`);
  if (a < b && a < c) {
    return a
  } else if (b < a && b < c) {
    return b
  } else {
logger.debug(`<<< Exiting minimum(a=${a},b=${b},c=${c})`);
    return c
  }
}

function costOfSubstitution(x, y) {
logger.debug(`>>> Entering costOfSubstitution(x=${x},y=${y})`);
logger.debug(`<<< Exiting costOfSubstitution(x=${x},y=${y})`);
  return x === y ? 0 : 1
}

// Levenshtein distance between x and y
function calculateLevenshteinDp(x, y) {
logger.debug(`>>> Entering calculateLevenshteinDp(x=${x},y=${y})`);
  const dp = new Array(x.length + 1)
  for (let i = 0; i < x.length + 1; i++) {
	logger.debug(`calculateLevenshteinDp(x=${x},y=${y}): dp → ${dp}`);
    dp[i] = new Array(y.length + 1)
  }

  for (let i = 0; i < x.length + 1; i++) {
    for (let j = 0; j < y.length + 1; j++) {
      if (i === 0) {
        dp[i][j] = j
      } else if (j === 0) {
        dp[i][j] = i
      } else {
        dp[i][j] = minimum(
          dp[i - 1][j - 1] +
            costOfSubstitution(x.charAt(i - 1), y.charAt(j - 1)),
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        )
      }
    }
  }

logger.debug(`<<< Exiting calculateLevenshteinDp(x=${x},y=${y})`);
  return dp[x.length][y.length]
}

export { calculateLevenshteinDp }
