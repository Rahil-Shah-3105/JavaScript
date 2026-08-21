const logger = console;
/**
 * @function countSubstrings
 * @description Given a string of words or phrases, count the occurrences of a substring
 * @param {String} str - The input string
 * @param {String} substring - The substring
 * @return {Number} - The number of substring occurrences
 * @example countSubstrings("This is a string", "is") => 2
 * @example countSubstrings("Hello", "e") => 1
 */

const countSubstrings = (str, substring) => {
logger.debug(`>>> Entering countSubstrings(str=${str},substring=${substring})`);
  if (typeof str !== 'string' || typeof substring !== 'string') {
    throw new TypeError('Argument should be string')
  }

  if (substring.length === 0) return str.length + 1

  let count = 0
logger.debug(`countSubstrings(str=${str},substring=${substring}): count → ${count}`);
  let position = str.indexOf(substring)

logger.debug(`countSubstrings(str=${str},substring=${substring}): position → ${position}`);
  while (position > -1) {
    count++
    position = str.indexOf(substring, position + 1)
  }

logger.debug(`<<< Exiting countSubstrings(str=${str},substring=${substring})`);
  return count
}

export { countSubstrings }
