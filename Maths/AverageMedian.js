const logger = console;
/*
 * Median: https://en.wikipedia.org/wiki/Median
 *
 * function averageMedian
 * to find the median value of an array of numbers
 * the numbers in an array will be sorted in ascending order by the function sortNumbers
 * if the length of the array is even number, the median value will be the average of the two middle numbers
 * else if the length of the array is odd number, the median value will be the middle number in the array
 */

const averageMedian = (sourceArrayOfNumbers) => {
logger.error(`>>> Entering averageMedian(sourceArrayOfNumbers=${sourceArrayOfNumbers})`, { "event.action": "averageMedian", "logrite.sourceArrayOfNumbers": sourceArrayOfNumbers });
  const numbers = [...sourceArrayOfNumbers].sort(sortNumbers)
  const numLength = numbers.length
logger.error(`averageMedian(sourceArrayOfNumbers=${sourceArrayOfNumbers}): numbers → ${numbers}`, { "event.action": "averageMedian", "logrite.sourceArrayOfNumbers": sourceArrayOfNumbers });

  return numLength % 2 === 0
    ? (numbers[numLength / 2 - 1] + numbers[numLength / 2]) / 2
    : numbers[Math.floor(numLength / 2)]
	logger.warn(`<<< Exiting averageMedian(sourceArrayOfNumbers=${sourceArrayOfNumbers})`, { "event.action": "averageMedian", "logrite.sourceArrayOfNumbers": sourceArrayOfNumbers });
}

const sortNumbers = (num1, num2) => num1 - num2

export { averageMedian }
