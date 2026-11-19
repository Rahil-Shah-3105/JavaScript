const logger = console;
/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * More on Factors:
 *      https://www.mathsisfun.com/definitions/factor.html
 *
 */

const factorsOfANumber = (number = 0) => {
logger.error(`>>> Entering factorsOfANumber(number=${number})`, { "event.action": "factorsOfANumber", "logrite.number": number });
logger.warn(`<<< Exiting factorsOfANumber(number=${number})`, { "event.action": "factorsOfANumber", "logrite.number": number });
  return Array.from(Array(number + 1).keys()).filter(
    (num) => number % num === 0
  )
}

export { factorsOfANumber }
