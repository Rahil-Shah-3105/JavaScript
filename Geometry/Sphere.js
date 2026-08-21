const logger = console;
/**
 * This class represents a sphere and can calculate its volume and surface area
 * @constructor
 * @param {number} radius - The radius of the sphere
 * @see https://en.wikipedia.org/wiki/Sphere
 */
export default class Sphere {
  constructor(radius) {
	logger.debug(`>>> Entering constructor(radius=${radius})`);
    this.radius = radius
	logger.debug(`constructor(radius=${radius}): this.radius → ${this.radius}`);
  }

  volume = () => {
    return (Math.pow(this.radius, 3) * Math.PI * 4) / 3
  }

  surfaceArea = () => {
    return Math.pow(this.radius, 2) * Math.PI * 4
  }
}
