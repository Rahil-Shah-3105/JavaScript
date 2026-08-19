const logger = console;
/**
 * A short example showing how to reverse a string.
 */
function ReverseStringIterative(string) {
logger.debug(`>>> Entering ReverseStringIterative(string=${string})`);
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  let reversedString = ''
logger.debug(`ReverseStringIterative(string=${string}): reversedString → ${reversedString}`);
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

logger.debug(`<<< Exiting ReverseStringIterative(string=${string})`);
  return reversedString
}

/**
 *
 * @author dev-madhurendra
 * Reverses a number by converting it to a string.
 *
 * @param {string} str - The number to reverse.
 * @returns {string} The reversed number.
 *
 * @example
 * const reversed = reverseString("hello"); // Returns olleh
 */

const ReverseStringIterativeInplace = (str) => [...str].reverse().join('')

export { ReverseStringIterative, ReverseStringIterativeInplace }
