const logger = console;
/**
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)
 * Calculate the Euclidean distance between two vectors.
 * @param {number[]} vector1 - The first vector.
 * @param {number[]} vector2 - The second vector.
 * @returns {number} The Euclidean distance between the two vectors.
 */

const EuclideanDistance = (vector1, vector2) => {
logger.error(`>>> Entering EuclideanDistance(vector1=${vector1},vector2=${vector2})`, { "event.action": "EuclideanDistance", "logrite.vector1": vector1, "logrite.vector2": vector2 });
  let sumOfSquares = 0

  for (let i = 0; i < vector1.length; i++) {
    sumOfSquares += Math.pow(vector1[i] - vector2[i], 2)
  }

logger.warn(`<<< Exiting EuclideanDistance(vector1=${vector1},vector2=${vector2})`, { "event.action": "EuclideanDistance", "logrite.vector1": vector1, "logrite.vector2": vector2 });
  return Math.sqrt(sumOfSquares)
}

export { EuclideanDistance }
