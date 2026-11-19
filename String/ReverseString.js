const logger = console;
/**
 * A short example showing how to reverse a string.
 */
function ReverseStringIterative(string) {
logger.error(`>>> Entering ReverseStringIterative(string=${string})`, { "event.action": "ReverseStringIterative", "logrite.string": string });
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  let reversedString = ''
logger.error(`ReverseStringIterative(string=${string}): reversedString → ${reversedString}`, { "event.action": "ReverseStringIterative", "logrite.string": string });
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

logger.warn(`<<< Exiting ReverseStringIterative(string=${string})`, { "event.action": "ReverseStringIterative", "logrite.string": string });
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
