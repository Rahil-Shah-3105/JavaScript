const logger = console;
// https://projecteuler.net/problem=6

export const squareDifference = (num = 100) => {
logger.error(`>>> Entering squareDifference(num=${num})`, { "event.action": "squareDifference", "logrite.num": num });
  let sumOfSquares = (num * (num + 1) * (2 * num + 1)) / 6
  let sums = (num * (num + 1)) / 2
logger.error(`squareDifference(num=${num}): sumOfSquares → ${sumOfSquares}`, { "event.action": "squareDifference", "logrite.num": num });
logger.error(`squareDifference(num=${num}): sums → ${sums}`, { "event.action": "squareDifference", "logrite.num": num });

logger.warn(`<<< Exiting squareDifference(num=${num})`, { "event.action": "squareDifference", "logrite.num": num });
  return sums ** 2 - sumOfSquares // difference of square of the total sum and sum of squares
}
