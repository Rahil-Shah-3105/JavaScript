const logger = console;
import { palindrome } from './Palindrome'

/*
 * Given a string s, return all possible palindrome partitionings of s.
 * A palindrome partitioning partitions a string into palindromic substrings.
 * @see https://www.cs.columbia.edu/~sedwards/classes/2021/4995-fall/proposals/Palindrome.pdf
 */
const partitionPalindrome = (s) => {
logger.debug(`>>> Entering partitionPalindrome(s=${s})`);
  const result = []
  backtrack(s, [], result)
logger.debug(`partitionPalindrome(s=${s}): result → ${result}`);
logger.debug(`<<< Exiting partitionPalindrome(s=${s})`);
  return result
}

const backtrack = (s, path, result) => {
logger.debug(`>>> Entering backtrack(s=${s},path=${path},result=${result})`);
  if (s.length === 0) {
    result.push([...path])
    return
  }

  for (let i = 0; i < s.length; i++) {
    const prefix = s.substring(0, i + 1)
    if (palindrome(prefix)) {
	logger.debug(`backtrack(s=${s},path=${path},result=${result}): prefix → ${prefix}`);
      path.push(prefix)
      backtrack(s.substring(i + 1), path, result)
      path.pop()
    }
  }
logger.debug(`<<< Exiting backtrack(s=${s},path=${path},result=${result})`);
}

export default partitionPalindrome
