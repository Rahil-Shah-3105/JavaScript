const logger = console;
/*
 * Find Second Largest is a real technical interview question.
 * Chances are you will be asked to find the second largest value
 * inside of an array of numbers. You must also be able to filter
 * out duplicate values.  It's important to know how to do this with
 * clean code that is also easy to explain.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

const secondLargestElement = (array) => {
logger.debug(`>>> Entering secondLargestElement(array=${array})`);
  const largestElement = Math.max(...array)
  let element = -Number.MAX_VALUE
logger.debug(`secondLargestElement(array=${array}): largestElement → ${largestElement}`);

  for (let i = 0; i < array.length; i++) {
    if (element < array[i] && array[i] !== largestElement) {
      element = array[i]
    }
  }

logger.debug(`<<< Exiting secondLargestElement(array=${array})`);
  return element
}

export { secondLargestElement }
