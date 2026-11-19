const logger = console;
/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Square free integer: https://en.wikipedia.org/wiki/Square-free_integer
 * function to check if an integer has repeated prime factors.
 * return false if the number as repeated prime factors.
 * else true
 */

/**
 * @function isSquareFree
 * @description -> Checking if number is square free using prime factorization
 * @param {number} number
 * @returns {boolean} true if the number has unique prime factors, otherwise false
 */

import { PrimeFactors } from './PrimeFactors.js'
export const isSquareFree = (number) => {
logger.error(`>>> Entering isSquareFree(number=${number})`, { "event.action": "isSquareFree", "logrite.number": number });
  const primeFactorsArray = PrimeFactors(number)
  if (number <= 0) {
    throw new Error('Number must be greater than zero.')
  }
logger.error(`isSquareFree(number=${number}): primeFactorsArray → ${primeFactorsArray}`, { "event.action": "isSquareFree", "logrite.number": number });
logger.warn(`<<< Exiting isSquareFree(number=${number})`, { "event.action": "isSquareFree", "logrite.number": number });
  return primeFactorsArray.length === new Set(primeFactorsArray).size
}
