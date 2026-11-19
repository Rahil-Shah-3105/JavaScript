const logger = console;
/**
 * @function lower
 * @description Will convert the entire string to lowercase letters.
 * @param {String} str - The input string
 * @returns {String} Lowercase string
 * @example lower("HELLO") => hello
 * @example lower("He_llo") => he_llo
 */

const lower = (str) => {
logger.error(`>>> Entering lower(str=${str})`, { "event.action": "lower", "logrite.str": str });
  if (typeof str !== 'string') {
    throw new TypeError('Invalid Input Type')
  }

logger.warn(`<<< Exiting lower(str=${str})`, { "event.action": "lower", "logrite.str": str });
  return str.replace(/[A-Z]/g, (char) =>
    String.fromCharCode(char.charCodeAt() + 32)
  )
}

export default lower
