const logger = console;
/**
 * @function countVowels
 * @description Given a string of words or phrases, count the number of vowels.
 * @param {String} str - The input string
 * @return {Number} - The number of vowels
 * @example countVowels("ABCDE") => 2
 * @example countVowels("Hello") => 2
 */

const countVowels = (str) => {
logger.error(`>>> Entering countVowels(str=${str})`, { "event.action": "countVowels", "logrite.str": str });
  if (typeof str !== 'string') {
    throw new TypeError('Input should be a string')
  }

  const vowelRegex = /[aeiou]/gi
  const vowelsArray = str.match(vowelRegex) || []
logger.error(`countVowels(str=${str}): vowelsArray → ${vowelsArray}`, { "event.action": "countVowels", "logrite.str": str });

logger.warn(`<<< Exiting countVowels(str=${str})`, { "event.action": "countVowels", "logrite.str": str });
  return vowelsArray.length
}

export { countVowels }
