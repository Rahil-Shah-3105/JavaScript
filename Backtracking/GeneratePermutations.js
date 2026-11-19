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
logger.error(`>>> Entering swap(arr=${arr},i=${i},j=${j})`, { "event.action": "swap", "logrite.arr": arr, "logrite.i": i, "logrite.j": j });
  const newArray = [...arr]

  ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]] // Swapping elements ES6 way

logger.warn(`<<< Exiting swap(arr=${arr},i=${i},j=${j})`, { "event.action": "swap", "logrite.arr": arr, "logrite.i": i, "logrite.j": j });
  return newArray
}

const permutations = (arr) => {
logger.error(`>>> Entering permutations(arr=${arr})`, { "event.action": "permutations", "logrite.arr": arr });
  const P = []
  const permute = (arr, low, high) => {
	logger.error(`>>> Entering permute(arr=${arr},low=${low},high=${high})`, { "event.action": "permute", "logrite.arr": arr, "logrite.low": low, "logrite.high": high });
    if (low === high) {
      P.push([...arr])
      return P
    }
    for (let i = low; i <= high; i++) {
      arr = swap(arr, low, i)
      permute(arr, low + 1, high)
    }
	logger.warn(`<<< Exiting permute(arr=${arr},low=${low},high=${high})`, { "event.action": "permute", "logrite.arr": arr, "logrite.low": low, "logrite.high": high });
    return P
  }
logger.warn(`<<< Exiting permutations(arr=${arr})`, { "event.action": "permutations", "logrite.arr": arr });
  return permute(arr, 0, arr.length - 1)
}

export { permutations }
