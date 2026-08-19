const logger = console;
// Foot: https://en.wikipedia.org/wiki/Foot_(unit)
const feetToMeter = (feet) => {
logger.debug(`>>> Entering feetToMeter(feet=${feet})`);
logger.debug(`<<< Exiting feetToMeter(feet=${feet})`);
  return feet * 0.3048
}

const meterToFeet = (meter) => {
logger.debug(`>>> Entering meterToFeet(meter=${meter})`);
logger.debug(`<<< Exiting meterToFeet(meter=${meter})`);
  return meter / 0.3048
}

export { feetToMeter, meterToFeet }
