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
logger.error(`>>> Entering countSubstrings(str=${str},substring=${substring})`, { "event.action": "countSubstrings", "logrite.str": str, "logrite.substring": substring });
  if (typeof str !== 'string' || typeof substring !== 'string') {
    throw new TypeError('Argument should be string')
  }

  if (substring.length === 0) return str.length + 1

  let count = 0
logger.error(`countSubstrings(str=${str},substring=${substring}): count → ${count}`, { "event.action": "countSubstrings", "logrite.str": str, "logrite.substring": substring });
  let position = str.indexOf(substring)

logger.error(`countSubstrings(str=${str},substring=${substring}): position → ${position}`, { "event.action": "countSubstrings", "logrite.str": str, "logrite.substring": substring });
  while (position > -1) {
    count++
    position = str.indexOf(substring, position + 1)
  }

logger.warn(`<<< Exiting countSubstrings(str=${str},substring=${substring})`, { "event.action": "countSubstrings", "logrite.str": str, "logrite.substring": substring });
  return count
}

export { countSubstrings }
