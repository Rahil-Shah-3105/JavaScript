const logger = console;
/**
 * This function converts ounces to kilograms
 * https://en.wikipedia.org/wiki/Ounce
 * @constructor
 * @param {number} oz - Amount of ounces to convert to kilograms
 */
const ouncesToKilograms = (oz) => {
logger.error(`>>> Entering ouncesToKilograms(oz=${oz})`, { "event.action": "ouncesToKilograms", "logrite.oz": oz });
logger.warn(`<<< Exiting ouncesToKilograms(oz=${oz})`, { "event.action": "ouncesToKilograms", "logrite.oz": oz });
  return (oz * 28.3498) / 1000
}

export default ouncesToKilograms
