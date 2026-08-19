const logger = console;
/**
 * @function fastFibonacci
 * @description fastFibonacci is same as fibonacci algorithm by calculating the sum of previous two fibonacci numbers but in O(log(n)).
 * @param {Integer} N - The input integer
 * @return {Integer} fibonacci of N.
 * @see [Fast_Fibonacci_Numbers](https://www.geeksforgeeks.org/fast-doubling-method-to-find-the-nth-fibonacci-number/)
 */

// recursive function that returns (F(n), F(n-1))
const fib = (N) => {
logger.debug(`>>> Entering fib(N=${N})`);
  if (N === 0) return [0, 1]
  const [a, b] = fib(Math.trunc(N / 2))
  const c = a * (b * 2 - a)
  const d = a * a + b * b
logger.debug(`fib(N=${N}): c → ${c}`);
logger.debug(`<<< Exiting fib(N=${N})`);
  return N % 2 ? [d, c + d] : [c, d]
}

const fastFibonacci = (N) => {
logger.debug(`>>> Entering fastFibonacci(N=${N})`);
  if (!Number.isInteger(N)) {
    throw new TypeError('Input should be integer')
  }
logger.debug(`<<< Exiting fastFibonacci(N=${N})`);
  return fib(N)[0]
}

export { fastFibonacci }
