const logger = console;
/**
 * This class represents a circular cone and can calculate its volume and surface area
 * https://en.wikipedia.org/wiki/Cone
 * @constructor
 * @param {number} baseRadius - The radius of the base of the cone.
 * @param {number} height - The height of the cone
 */
export default class Cone {
  constructor(baseRadius, height) {
	logger.error(`>>> Entering constructor(baseRadius=${baseRadius},height=${height})`, { "event.action": "constructor", "logrite.baseRadius": baseRadius, "logrite.height": height });
    this.baseRadius = baseRadius
    this.height = height
	logger.debug(`constructor(baseRadius=${baseRadius},height=${height}): this.height → ${this.height}`, { "event.action": "constructor", "logrite.baseRadius": baseRadius, "logrite.height": height });
  }

  baseArea = () => {
	logger.error('>>> Entering baseArea()', { "event.action": "baseArea" });
    return Math.pow(this.baseRadius, 2) * Math.PI
  }

  volume = () => {
	logger.error('>>> Entering volume()', { "event.action": "volume" });
	logger.warn('<<< Exiting volume()', { "event.action": "volume" });
    return (this.baseArea() * this.height * 1) / 3
  }

  surfaceArea = () => {
	logger.error('>>> Entering surfaceArea()', { "event.action": "surfaceArea" });
	logger.warn('<<< Exiting surfaceArea()', { "event.action": "surfaceArea" });
    return (
      this.baseArea() +
      Math.PI *
        this.baseRadius *
        Math.sqrt(Math.pow(this.baseRadius, 2) + Math.pow(this.height, 2))
    )
  }
}
