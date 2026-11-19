const logger = console;
/**
 * This function converts liters to US gallons
 * https://en.wikipedia.org/wiki/Gallon
 * @constructor
 * @param {number} liters - Amount of liters to convert to gallons
 */
const litersToUSGallons = (liters) => {
logger.error(`>>> Entering litersToUSGallons(liters=${liters})`, { "event.action": "litersToUSGallons", "logrite.liters": liters });
logger.warn(`<<< Exiting litersToUSGallons(liters=${liters})`, { "event.action": "litersToUSGallons", "logrite.liters": liters });
  return liters / 3.785411784
}

export default litersToUSGallons
