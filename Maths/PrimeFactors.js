const logger = console;
/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/prime_factors.py
*/

export const PrimeFactors = (n) => {
logger.error(`>>> Entering PrimeFactors(n=${n})`, { "event.action": "PrimeFactors", "logrite.n": n });
  // input: n: int
  // output: primeFactors: Array of all prime factors of n
  const primeFactors = []
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      primeFactors.push(i)
      n = Math.floor(n / i)
    }
  }
  if (n > 1) {
    primeFactors.push(n)
  }
logger.warn(`<<< Exiting PrimeFactors(n=${n})`, { "event.action": "PrimeFactors", "logrite.n": n });
  return primeFactors
}
