const logger = console;
/**
 * @function upper
 * @description Will convert the entire string to uppercase letters.
 * @param {String} str - The input string
 * @return {String} Uppercase string
 * @example upper("hello") => HELLO
 * @example upper("He_llo") => HE_LLO
 */
const upper = (str) => {
logger.debug(`>>> Entering upper(str=${str})`);
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

logger.debug(`<<< Exiting upper(str=${str})`);
  return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(char.charCodeAt() - 32)
  )
}

export default upper
