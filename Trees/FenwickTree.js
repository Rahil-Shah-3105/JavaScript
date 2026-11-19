const logger = console;
/*
 * Author: Mohit Kumar
 * Fenwick Tree Implementation in JavaScript
 * Fenwick Tree Implementation for finding prefix sum.
 */

class FenwickTree {
  constructor(feneickArray, array, n) {
	logger.error(`>>> Entering constructor(feneickArray=${feneickArray},array=${array},n=${n})`, { "event.action": "constructor", "logrite.feneickArray": feneickArray, "logrite.array": array, "logrite.n": n });
    for (let i = 1; i <= n; i++) {
      feneickArray[i] = 0
    }
    for (let i = 0; i < n; i++) {
      this.update(feneickArray, n, i, array[i])
    }
	logger.warn(`<<< Exiting constructor(feneickArray=${feneickArray},array=${array},n=${n})`, { "event.action": "constructor", "logrite.feneickArray": feneickArray, "logrite.array": array, "logrite.n": n });
  }

  update(feneickArray, n, index, value) {
	logger.error(`>>> Entering update(feneickArray=${feneickArray},n=${n},index=${index},value=${value})`, { "event.action": "update", "logrite.feneickArray": feneickArray, "logrite.n": n, "logrite.index": index, "logrite.value": value });
    index = index + 1
    while (index <= n) {
      feneickArray[index] += value
      index += index & -index
	logger.warn(`<<< Exiting update(feneickArray=${feneickArray},n=${n},index=${index},value=${value})`, { "event.action": "update", "logrite.feneickArray": feneickArray, "logrite.n": n, "logrite.index": index, "logrite.value": value });
    }
  }

  getPrefixSum(feneickArray, index) {
	logger.error(`>>> Entering getPrefixSum(feneickArray=${feneickArray},index=${index})`, { "event.action": "getPrefixSum", "logrite.feneickArray": feneickArray, "logrite.index": index });
    let currSum = 0
    index = index + 1
    while (index > 0) {
      currSum += feneickArray[index]
      index -= index & -index
    }

	logger.warn(`<<< Exiting getPrefixSum(feneickArray=${feneickArray},index=${index})`, { "event.action": "getPrefixSum", "logrite.feneickArray": feneickArray, "logrite.index": index });
    return currSum
  }
}
export { FenwickTree }
