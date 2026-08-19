const logger = console;
/**
 * This function converts liters to US gallons
 * https://en.wikipedia.org/wiki/Gallon
 * @constructor
 * @param {number} liters - Amount of liters to convert to gallons
 */
const litersToUSGallons = (liters) => {
logger.debug(`>>> Entering litersToUSGallons(liters=${liters})`);
logger.debug(`<<< Exiting litersToUSGallons(liters=${liters})`);
  return liters / 3.785411784
}

export default litersToUSGallons
