const logger = console;
/*
 * Problem Statement: Generate all distinct permutations of an array (all permutations should be in sorted order);
 *
 * What is permutations?
 * - Permutation means possible arrangements in a set (here it is an array);
 *
 * Reference to know more about permutations:
 * - https://www.britannica.com/science/permutation
 *
 */

const swap = (arr, i, j) => {
logger.debug(`>>> Entering swap(arr=${arr},i=${i},j=${j})`);
  const newArray = [...arr]

  ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]] // Swapping elements ES6 way

logger.debug(`<<< Exiting swap(arr=${arr},i=${i},j=${j})`);
  return newArray
}

const permutations = (arr) => {
logger.debug(`>>> Entering permutations(arr=${arr})`);
  const P = []
  const permute = (arr, low, high) => {
	logger.debug(`>>> Entering permute(arr=${arr},low=${low},high=${high})`);
    if (low === high) {
      P.push([...arr])
      return P
    }
    for (let i = low; i <= high; i++) {
      arr = swap(arr, low, i)
      permute(arr, low + 1, high)
    }
	logger.debug(`<<< Exiting permute(arr=${arr},low=${low},high=${high})`);
    return P
  }
logger.debug(`<<< Exiting permutations(arr=${arr})`);
  return permute(arr, 0, arr.length - 1)
}

export { permutations }
