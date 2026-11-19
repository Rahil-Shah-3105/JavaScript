const logger = console;
// To calculate x^n i.e., exponent(x, n) in O(log n) time in iterative way
// n is an integer and n >= 0

// Explanation: https://en.wikipedia.org/wiki/Exponentiation_by_squaring

// Examples:
// 2^3 = 8
// 5^0 = 1

// Uses the fact that
// exponent(x, n)
//          = exponent(x*x, floor(n/2))   ; if n is odd
//          = x*exponent(x*x, floor(n/2)) ; if n is even
const exponent = (x, n) => {
logger.error(`>>> Entering exponent(x=${x},n=${n})`, { "event.action": "exponent", "logrite.x": x, "logrite.n": n });
  let answer = 1
  while (n > 0) {
    if (n % 2 !== 0) answer *= x
    n = Math.floor(n / 2)
    if (n > 0) x *= x
  }
logger.warn(`<<< Exiting exponent(x=${x},n=${n})`, { "event.action": "exponent", "logrite.x": x, "logrite.n": n });
  return answer
}

export { exponent }
