const logger = console;
/**
 * In mathematics and physics, a vector is an element of a vector space.
 *
 * The Vector2-class implements 2-dimensional vectors together with various vector-operations.
 * @see https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics).
 */

class Vector2 {
  constructor(x, y) {
	logger.debug(`>>> Entering constructor(x=${x},y=${y})`);
    this.x = x
    this.y = y
	logger.debug(`constructor(x=${x},y=${y}): this.y → ${this.y}`);
  }

  /**
   * Check for exact vector equality.
   *
   * @param vector The vector to compare to.
   * @returns Whether they are exactly equal or not.
   */
  equalsExactly(vector) {
	logger.debug(`>>> Entering equalsExactly(vector=${vector})`);
	logger.debug(`<<< Exiting equalsExactly(vector=${vector})`);
    return this.x === vector.x && this.y === vector.y
  }

  /**
   * Check for approximate vector equality.
   *
   * @param vector The vector to compare to.
   * @param epsilon The allowed discrepancy for the x-values and the y-values.
   * @returns Whether they are approximately equal or not.
   */
  equalsApproximately(vector, epsilon) {
	logger.debug(`>>> Entering equalsApproximately(vector=${vector},epsilon=${epsilon})`);
	logger.debug(`<<< Exiting equalsApproximately(vector=${vector},epsilon=${epsilon})`);
    return (
      Math.abs(this.x - vector.x) < epsilon &&
      Math.abs(this.y - vector.y) < epsilon
    )
  }

  /**
   * Vector length.
   *
   * @returns The length of the vector.
   */
  length() {
	logger.debug('>>> Entering length()');
	logger.debug('<<< Exiting length()');
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /**
   * Normalization sets the vector to length 1 while maintaining its direction.
   *
   * @returns The normalized vector.
   */
  normalize() {
	logger.debug('>>> Entering normalize()');
    const length = this.length()
    if (length === 0) {
      throw new Error('Cannot normalize vectors of length 0')
    }
	logger.debug('<<< Exiting normalize()');
    return new Vector2(this.x / length, this.y / length)
  }

  /**
   * Vector addition
   *
   * @param vector The vector to be added.
   * @returns The sum-vector.
   */
  add(vector) {
	logger.debug(`>>> Entering add(vector=${vector})`);
    const x = this.x + vector.x
    const y = this.y + vector.y
	logger.debug(`<<< Exiting add(vector=${vector})`);
    return new Vector2(x, y)
  }

  /**
   * Vector subtraction
   *
   * @param vector The vector to be subtracted.
   * @returns The difference-vector.
   */
  subtract(vector) {
	logger.debug(`>>> Entering subtract(vector=${vector})`);
    const x = this.x - vector.x
    const y = this.y - vector.y
	logger.debug(`<<< Exiting subtract(vector=${vector})`);
    return new Vector2(x, y)
  }

  /**
   * Vector scalar multiplication
   *
   * @param scalar The factor by which to multiply the vector.
   * @returns The scaled vector.
   */
  multiply(scalar) {
	logger.debug(`>>> Entering multiply(scalar=${scalar})`);
    const x = this.x * scalar
    const y = this.y * scalar
	logger.debug(`<<< Exiting multiply(scalar=${scalar})`);
    return new Vector2(x, y)
  }

  /**
   * Distance between this vector and another vector.
   *
   * @param vector The vector to which to calculate the distance.
   * @returns The distance.
   */
  distance(vector) {
	logger.debug(`>>> Entering distance(vector=${vector})`);
    const difference = vector.subtract(this)
	logger.debug(`distance(vector=${vector}): difference → ${difference}`);
    return difference.length()
  }

  /**
   * Vector dot product
   *
   * @param vector The vector used for the multiplication.
   * @returns The resulting dot product.
   */
  dotProduct(vector) {
	logger.debug(`>>> Entering dotProduct(vector=${vector})`);
	logger.debug(`<<< Exiting dotProduct(vector=${vector})`);
    return this.x * vector.x + this.y * vector.y
  }

  /**
   * Vector rotation (see https://en.wikipedia.org/wiki/Rotation_matrix)
   *
   * @param angleInRadians The angle in radians by which to rotate the vector.
   * @returns The rotated vector.
   */
  rotate(angleInRadians) {
	logger.debug(`>>> Entering rotate(angleInRadians=${angleInRadians})`);
    const ca = Math.cos(angleInRadians)
    const sa = Math.sin(angleInRadians)
    const x = ca * this.x - sa * this.y
	logger.debug(`rotate(angleInRadians=${angleInRadians}): ca → ${ca}`);
	logger.debug(`rotate(angleInRadians=${angleInRadians}): sa → ${sa}`);
    const y = sa * this.x + ca * this.y
	logger.debug(`<<< Exiting rotate(angleInRadians=${angleInRadians})`);
    return new Vector2(x, y)
  }

  /**
   * Measure angle between two vectors
   *
   * @param vector The 2nd vector for the measurement.
   * @returns The angle in radians.
   */
  angleBetween(vector) {
	logger.debug(`>>> Entering angleBetween(vector=${vector})`);
	logger.debug(`<<< Exiting angleBetween(vector=${vector})`);
    return Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x)
  }
}

export { Vector2 }
