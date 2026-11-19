const logger = console;
/**
 * This function converts liters to imperial gallons
 * @constructor
 * @param {number} liters - Amount of liters to convert to gallons
 * @see https://en.wikipedia.org/wiki/Gallon
 */
const litersToImperialGallons = (liters) => {
logger.error(`>>> Entering litersToImperialGallons(liters=${liters})`, { "event.action": "litersToImperialGallons", "logrite.liters": liters });
logger.warn(`<<< Exiting litersToImperialGallons(liters=${liters})`, { "event.action": "litersToImperialGallons", "logrite.liters": liters });
  return liters / 4.54609
}

export default litersToImperialGallons
