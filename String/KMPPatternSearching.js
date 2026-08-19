const logger = console;
// Implementing KMP Search Algorithm to search all the instances of pattern in
// given text
// Reference Book: Introduction to Algorithms, CLRS

// Explanation: https://www.topcoder.com/community/competitive-programming/tutorials/introduction-to-string-searching-algorithms/

const computeLPS = (pattern) => {
logger.debug(`>>> Entering computeLPS(pattern=${pattern})`);
  const lps = Array(pattern.length)
  lps[0] = 0
logger.debug(`computeLPS(pattern=${pattern}): lps → ${lps}`);
  for (let i = 1; i < pattern.length; i++) {
    let matched = lps[i - 1]
    while (matched > 0 && pattern[i] !== pattern[matched]) {
      matched = lps[matched - 1]
    }
    if (pattern[i] === pattern[matched]) {
      matched++
    }
    lps[i] = matched
  }
logger.debug(`<<< Exiting computeLPS(pattern=${pattern})`);
  return lps
}

/**
 * Returns all indices where pattern starts in text
 * @param {*} text a big text in which pattern string is to find
 * @param {*} pattern the string to find
 */
const KMPSearch = (text, pattern) => {
logger.debug(`>>> Entering KMPSearch(text=${text},pattern=${pattern})`);
  if (!pattern || !text) {
    return [] // no results
  }

  // lps[i] = length of proper prefix of pattern[0]...pattern[i-1]
  //          which is also proper suffix of it
  const lps = computeLPS(pattern)
  const result = []
logger.debug(`KMPSearch(text=${text},pattern=${pattern}): lps → ${lps}`);
logger.debug(`KMPSearch(text=${text},pattern=${pattern}): result → ${result}`);

  let matched = 0
  for (let i = 0; i < text.length; i++) {
    while (matched > 0 && text[i] !== pattern[matched]) {
      matched = lps[matched - 1]
    }
    if (text[i] === pattern[matched]) {
      matched++
    }
    if (matched === pattern.length) {
      result.push(i - pattern.length + 1)
      matched = lps[matched - 1]
    }
  }

logger.debug(`<<< Exiting KMPSearch(text=${text},pattern=${pattern})`);
  return result
}

export { KMPSearch }
