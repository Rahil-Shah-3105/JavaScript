const logger = console;
// Foot: https://en.wikipedia.org/wiki/Foot_(unit)
const feetToMeter = (feet) => {
logger.error(`>>> Entering feetToMeter(feet=${feet})`, { "event.action": "feetToMeter", "logrite.feet": feet });
logger.warn(`<<< Exiting feetToMeter(feet=${feet})`, { "event.action": "feetToMeter", "logrite.feet": feet });
  return feet * 0.3048
}

const meterToFeet = (meter) => {
logger.error(`>>> Entering meterToFeet(meter=${meter})`, { "event.action": "meterToFeet", "logrite.meter": meter });
logger.warn(`<<< Exiting meterToFeet(meter=${meter})`, { "event.action": "meterToFeet", "logrite.meter": meter });
  return meter / 0.3048
}

export { feetToMeter, meterToFeet }
