const logger = console;
/**
 * This class represents a regular pyramid and can calculate its volume and surface area
 * https://en.wikipedia.org/wiki/Pyramid_(geometry)
 * @constructor
 * @param {number} bsl - The side length of the base of the pyramid.
 * @param {number} height - The height of the pyramid
 */
export default class Pyramid {
  constructor(bsl, height) {
	logger.error(`>>> Entering constructor(bsl=${bsl},height=${height})`, { "event.action": "constructor", "logrite.bsl": bsl, "logrite.height": height });
    this.bsl = bsl
    this.height = height
	logger.debug(`constructor(bsl=${bsl},height=${height}): this.bsl → ${this.bsl}`, { "event.action": "constructor", "logrite.bsl": bsl, "logrite.height": height });
  }

  baseArea = () => {
	logger.error('>>> Entering baseArea()', { "event.action": "baseArea" });
    return Math.pow(this.bsl, 2)
  }

  volume = () => {
	logger.error('>>> Entering volume()', { "event.action": "volume" });
	logger.warn('<<< Exiting volume()', { "event.action": "volume" });
    return (this.baseArea() * this.height) / 3
  }

  surfaceArea = () => {
	logger.error('>>> Entering surfaceArea()', { "event.action": "surfaceArea" });
	logger.warn('<<< Exiting surfaceArea()', { "event.action": "surfaceArea" });
    return (
      this.baseArea() +
      ((this.bsl * 4) / 2) *
        Math.sqrt(Math.pow(this.bsl / 2, 2) + Math.pow(this.height, 2))
    )
  }
}
