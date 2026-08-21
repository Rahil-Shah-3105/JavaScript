const logger = console;
// https://projecteuler.net/problem=6

export const squareDifference = (num = 100) => {
logger.debug(`>>> Entering squareDifference(num=${num})`);
  let sumOfSquares = (num * (num + 1) * (2 * num + 1)) / 6
  let sums = (num * (num + 1)) / 2
logger.debug(`squareDifference(num=${num}): sumOfSquares → ${sumOfSquares}`);
logger.debug(`squareDifference(num=${num}): sums → ${sums}`);

logger.debug(`<<< Exiting squareDifference(num=${num})`);
  return sums ** 2 - sumOfSquares // difference of square of the total sum and sum of squares
}
