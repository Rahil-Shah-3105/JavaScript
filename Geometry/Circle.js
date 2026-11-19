const logger = console;
/**
 * This class represents a circle and can calculate it's perimeter and area
 * https://en.wikipedia.org/wiki/Circle
 * @constructor
 * @param {number} radius - The radius of the circle.
 */
export default class Circle {
  constructor(radius) {
	logger.error(`>>> Entering constructor(radius=${radius})`, { "event.action": "constructor", "logrite.radius": radius });
    this.radius = radius
	logger.debug(`constructor(radius=${radius}): this.radius → ${this.radius}`, { "event.action": "constructor", "logrite.radius": radius });
	logger.warn(`<<< Exiting constructor(radius=${radius})`, { "event.action": "constructor", "logrite.radius": radius });
  }

  perimeter = () => {
	logger.error('>>> Entering perimeter()', { "event.action": "perimeter" });
	logger.warn('<<< Exiting perimeter()', { "event.action": "perimeter" });
    return this.radius * 2 * Math.PI
  }

  area = () => {
	logger.error('>>> Entering area()', { "event.action": "area" });
	logger.warn('<<< Exiting area()', { "event.action": "area" });
    return Math.pow(this.radius, 2) * Math.PI
  }
}
