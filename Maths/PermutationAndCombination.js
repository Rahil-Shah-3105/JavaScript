const logger = console;
/**
 * @details Calculates the number of permutations and combinations.
 * @external_link (Permutation And Combinations)[https://www.geeksforgeeks.org/permutation-and-combination/]
 */

/**
 * @brief Calculates the factorial of the given number.
 * @param num: integer
 * @details Factorial of n = n * (n - 1) * (n - 2) * ... * 1
 * @returns integer: Factorial of the number.
            NaN: if negative number is provided.
 */
const factorial = (n) => {
logger.debug(`>>> Entering factorial(n=${n})`);
  if (n >= 0) {
    if (n === 0) {
      return 1
    } else {
      return n * factorial(n - 1)
    }
  } else {
logger.debug(`<<< Exiting factorial(n=${n})`);
    return NaN
  }
}

/**
 * @brief Calculates the number of Permutations from the given data.
 * @param
 * n: integer -> number of items.
 * r: integer -> number of times n is taken.
 * @returns integer: The number of permutations.
            NaN: if negative number is provided.
 */
const permutation = (n, r) => {
logger.debug(`>>> Entering permutation(n=${n},r=${r})`);
logger.debug(`<<< Exiting permutation(n=${n},r=${r})`);
  return factorial(n) / factorial(n - r)
}

/**
 * @brief Calculates the number of Combinations from the given data.
 * @param
 * n -> number of items.
 * r -> number of times n is taken.
 * @returns integer: The number of combinations.
            NaN: if negative number is provided.
 */
const combination = (n, r) => {
logger.debug(`>>> Entering combination(n=${n},r=${r})`);
logger.debug(`<<< Exiting combination(n=${n},r=${r})`);
  return factorial(n) / (factorial(r) * factorial(n - r))
}

// Exports the functions to be used in other files.
export { factorial, permutation, combination }
