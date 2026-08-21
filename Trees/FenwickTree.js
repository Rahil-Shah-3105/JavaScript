const logger = console;
/*
 * Author: Mohit Kumar
 * Fenwick Tree Implementation in JavaScript
 * Fenwick Tree Implementation for finding prefix sum.
 */

class FenwickTree {
  constructor(feneickArray, array, n) {
	logger.debug(`>>> Entering constructor(feneickArray=${feneickArray},array=${array},n=${n})`);
    for (let i = 1; i <= n; i++) {
      feneickArray[i] = 0
    }
    for (let i = 0; i < n; i++) {
      this.update(feneickArray, n, i, array[i])
    }
	logger.debug(`<<< Exiting constructor(feneickArray=${feneickArray},array=${array},n=${n})`);
  }

  update(feneickArray, n, index, value) {
	logger.debug(`>>> Entering update(feneickArray=${feneickArray},n=${n},index=${index},value=${value})`);
    index = index + 1
    while (index <= n) {
      feneickArray[index] += value
      index += index & -index
	logger.debug(`<<< Exiting update(feneickArray=${feneickArray},n=${n},index=${index},value=${value})`);
    }
  }

  getPrefixSum(feneickArray, index) {
	logger.debug(`>>> Entering getPrefixSum(feneickArray=${feneickArray},index=${index})`);
    let currSum = 0
    index = index + 1
    while (index > 0) {
      currSum += feneickArray[index]
      index -= index & -index
    }

	logger.debug(`<<< Exiting getPrefixSum(feneickArray=${feneickArray},index=${index})`);
    return currSum
  }
}
export { FenwickTree }
