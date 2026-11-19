const logger = console;
/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Binomial Coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
 * function to find binomial coefficient of numbers n and k.
 * return binomial coefficient of n,k
 */

/**
 * @function findBinomialCoefficient
 * @description -> this function returns binomial coefficient
 * of two numbers n & k given by n!/((n-k)!k!)
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

import { calcFactorial } from './Factorial'

export const findBinomialCoefficient = (n, k) => {
logger.error(`>>> Entering findBinomialCoefficient(n=${n},k=${k})`, { "event.action": "findBinomialCoefficient", "logrite.n": n, "logrite.k": k });
  if (typeof n !== 'number' || typeof k !== 'number') {
    throw Error('Type of arguments must be number.')
  }
  if (n < 0 || k < 0) {
    throw Error('Arguments must be greater than zero.')
  }
  let product = 1
  for (let i = n; i > k; i--) {
    product *= i
  }
logger.warn(`<<< Exiting findBinomialCoefficient(n=${n},k=${k})`, { "event.action": "findBinomialCoefficient", "logrite.n": n, "logrite.k": k });
  return product / calcFactorial(n - k)
}
