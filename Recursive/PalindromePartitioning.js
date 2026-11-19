const logger = console;
import { palindrome } from './Palindrome'

/*
 * Given a string s, return all possible palindrome partitionings of s.
 * A palindrome partitioning partitions a string into palindromic substrings.
 * @see https://www.cs.columbia.edu/~sedwards/classes/2021/4995-fall/proposals/Palindrome.pdf
 */
const partitionPalindrome = (s) => {
logger.error(`>>> Entering partitionPalindrome(s=${s})`, { "event.action": "partitionPalindrome", "logrite.s": s });
  const result = []
  backtrack(s, [], result)
logger.error(`partitionPalindrome(s=${s}): result → ${result}`, { "event.action": "partitionPalindrome", "logrite.s": s });
logger.warn(`<<< Exiting partitionPalindrome(s=${s})`, { "event.action": "partitionPalindrome", "logrite.s": s });
  return result
}

const backtrack = (s, path, result) => {
logger.error(`>>> Entering backtrack(s=${s},path=${path},result=${result})`, { "event.action": "backtrack", "logrite.s": s, "logrite.path": path, "logrite.result": result });
  if (s.length === 0) {
    result.push([...path])
    return
  }

  for (let i = 0; i < s.length; i++) {
    const prefix = s.substring(0, i + 1)
    if (palindrome(prefix)) {
	logger.error(`backtrack(s=${s},path=${path},result=${result}): prefix → ${prefix}`, { "event.action": "backtrack", "logrite.s": s, "logrite.path": path, "logrite.result": result });
      path.push(prefix)
      backtrack(s.substring(i + 1), path, result)
      path.pop()
    }
  }
logger.warn(`<<< Exiting backtrack(s=${s},path=${path},result=${result})`, { "event.action": "backtrack", "logrite.s": s, "logrite.path": path, "logrite.result": result });
}

export default partitionPalindrome
