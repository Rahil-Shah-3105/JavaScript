const logger = console;
// https://projecteuler.net/problem=4
/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/
export const largestPalindromic = (digits) => {
logger.debug(`>>> Entering largestPalindromic(digits=${digits})`);
  let i
  let n
  let m
  let d
  let limit
  let number = 0

  for (i = 1; i < digits; i++) {
    number = 10 * number + 9
  }
  const inf = number // highest (digits - 1) number, in this example highest 2 digit number
logger.debug(`largestPalindromic(digits=${digits}): inf → ${inf}`);
  const sup = 10 * number + 9 // highest (digits) number, in this example highest 3 digit number
logger.debug(`largestPalindromic(digits=${digits}): sup → ${sup}`);

  const isPalindromic = (n) => {
	logger.debug(`>>> Entering isPalindromic(n=${n})`);
    let p = 0
    const q = n
    let r
    while (n > 0) {
      r = n % 10
      p = 10 * p + r
      n = Math.floor(n / 10)
    }
	logger.debug(`<<< Exiting isPalindromic(n=${n})`);
    return p === q // returning whether the number is palindromic or not
  }

  for (n = sup * sup, m = inf * inf; n > m; n--) {
    if (isPalindromic(n)) {
      limit = Math.ceil(Math.sqrt(n))
      d = sup
      while (d >= limit) {
        if (n % d === 0 && n / d > inf) {
          return n
        }
        d -= 1
      }
    }
  }
logger.debug(`<<< Exiting largestPalindromic(digits=${digits})`);
  return NaN // returning not a number, if any such case arise
}
