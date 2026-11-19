const logger = console;
/**
 * @function Fibonacci
 * @description Function to return the N-th Fibonacci number.
 * @param {Integer} n - The input integer
 * @return {Integer} - Return the N-th Fibonacci number
 * @see [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)
 */

const fibonacci = (n) => {
logger.error(`>>> Entering fibonacci(n=${n})`, { "event.action": "fibonacci", "logrite.n": n });
  if (n < 2) {
    return n
  }
logger.warn(`<<< Exiting fibonacci(n=${n})`, { "event.action": "fibonacci", "logrite.n": n });
  return fibonacci(n - 2) + fibonacci(n - 1)
}

export { fibonacci }
