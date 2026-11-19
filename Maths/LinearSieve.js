const logger = console;
const LinearSieve = (n) => {
logger.error(`>>> Entering LinearSieve(n=${n})`, { "event.action": "LinearSieve", "logrite.n": n });
  /*
   * Calculates prime numbers till a number n
   * Time Complexity: O(n)
   * Explanation: https://cp-algorithms.com/algebra/prime-sieve-linear.html
   * :param n: Number up to which to calculate primes
   * :return: A list containing only primes
   */
  const isnPrime = new Array(n + 1)
  isnPrime[0] = isnPrime[1] = true
logger.error(`LinearSieve(n=${n}): isnPrime → ${isnPrime}`, { "event.action": "LinearSieve", "logrite.n": n });
  const primes = []
  for (let i = 2; i <= n; i++) {
    if (!isnPrime[i]) primes.push(i)
    for (const p of primes) {
      const k = i * p
      if (k > n) break
      isnPrime[k] = true
      if (i % p === 0) break
    }
  }
logger.warn(`<<< Exiting LinearSieve(n=${n})`, { "event.action": "LinearSieve", "logrite.n": n });
  return primes
}

export { LinearSieve }
