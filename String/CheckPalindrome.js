const logger = console;
// Palindrome check is case sensitive; i.e., Aba is not a palindrome
// input is a string
const checkPalindrome = (str) => {
logger.error(`>>> Entering checkPalindrome(str=${str})`, { "event.action": "checkPalindrome", "logrite.str": str });
  // check that input is a string
  if (typeof str !== 'string') {
    return 'Not a string'
  }
  if (str.length === 0) {
    return 'Empty string'
  }
  // Reverse only works with array, thus convert the string to array, reverse it and convert back to string
  // return as palindrome if the reversed string is equal to the input string
  const reversed = [...str].reverse().join('')
logger.error(`checkPalindrome(str=${str}): reversed → ${reversed}`, { "event.action": "checkPalindrome", "logrite.str": str });
logger.warn(`<<< Exiting checkPalindrome(str=${str})`, { "event.action": "checkPalindrome", "logrite.str": str });
  return str === reversed ? 'Palindrome' : 'Not a Palindrome'
}

export { checkPalindrome }
