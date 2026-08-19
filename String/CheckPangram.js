const logger = console;
/**
 * What is Pangram?
 * Pangram is a sentence that contains all the letters in the alphabet https://en.wikipedia.org/wiki/Pangram
 */

/**
 * @function checkPangramRegex
 * @description - This function check pangram with the help of regex pattern
 * @param {string} string
 * @returns {boolean}
 * @example - checkPangramRegex("'The quick brown fox jumps over the lazy dog' is a pangram") => true
 * @example - checkPangramRegex('"Waltz, bad nymph, for quick jigs vex." is a pangram') => true
 */
const checkPangramRegex = (string) => {
logger.debug(`>>> Entering checkPangramRegex(string=${string})`);
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  /**
   * Match all 26 alphabets using regex, with the help of:
   * Capturing group - () -> Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
   * Character set - [a-z] -> Matches a char in the range a to z in case-insensitive for the 'i' flag
   * Negative lookahead - (?!) -> Specifies a group that can not match after the main expression (if it matches, the result is discarded).
   * Dot - . -> Matches any character except linebreaks. Equivalent to
   * Star - * -> Matches 0 or more of the preceding token.
   * Numeric reference - \{$n} -> Matches the results of a capture group. E.g. - \1  matches the results of the first capture group & \3 matches the third.
   */
logger.debug(`<<< Exiting checkPangramRegex(string=${string})`);
  return string.match(/([a-z])(?!.*\1)/gi).length === 26
}

/**
 * @function checkPangramSet
 * @description - This function detect the pangram sentence by HashSet
 * @param {string} string
 * @returns {boolean}
 */
const checkPangramSet = (string) => {
logger.debug(`>>> Entering checkPangramSet(string=${string})`);
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  const lettersSet = new Set()

logger.debug(`checkPangramSet(string=${string}): lettersSet → ${lettersSet}`);
  for (const letter of string.toUpperCase()) {
    if (/[A-Z]/.test(letter)) {
      // if the letter is a valid uppercase alphabet then the add method insert the letter to the HashSet
      lettersSet.add(letter)
    }
  }

logger.debug(`<<< Exiting checkPangramSet(string=${string})`);
  return lettersSet.size === 26
}

export { checkPangramRegex, checkPangramSet }
