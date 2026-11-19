const logger = console;
/**
 * This class represents a sphere and can calculate its volume and surface area
 * @constructor
 * @param {number} radius - The radius of the sphere
 * @see https://en.wikipedia.org/wiki/Sphere
 */
export default class Sphere {
  constructor(radius) {
	logger.error(`>>> Entering constructor(radius=${radius})`, { "event.action": "constructor", "logrite.radius": radius });
    this.radius = radius
	logger.debug(`constructor(radius=${radius}): this.radius → ${this.radius}`, { "event.action": "constructor", "logrite.radius": radius });
  }

  volume = () => {
	logger.error('>>> Entering volume()', { "event.action": "volume" });
	logger.warn('<<< Exiting volume()', { "event.action": "volume" });
    return (Math.pow(this.radius, 3) * Math.PI * 4) / 3
  }

  surfaceArea = () => {
	logger.error('>>> Entering surfaceArea()', { "event.action": "surfaceArea" });
    return Math.pow(this.radius, 2) * Math.PI * 4
  }
}
