const logger = console;
/**
 * @function Palindrome
 * @description Check whether the given string is Palindrome or not.
 * @param {String} str - The input string
 * @return {Boolean}.
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 */

const palindrome = (str) => {
logger.error(`>>> Entering palindrome(str=${str})`, { "event.action": "palindrome", "logrite.str": str });
  if (typeof str !== 'string') {
    throw new TypeError('Invalid Input')
  }

  if (str.length <= 1) {
    return true
  }

  if (str[0] !== str[str.length - 1]) {
    return false
  } else {
logger.warn(`<<< Exiting palindrome(str=${str})`, { "event.action": "palindrome", "logrite.str": str });
    return palindrome(str.slice(1, str.length - 1))
  }
}

export { palindrome }
