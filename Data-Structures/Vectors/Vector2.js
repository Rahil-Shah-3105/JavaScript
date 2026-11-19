const logger = console;
/**
 * In mathematics and physics, a vector is an element of a vector space.
 *
 * The Vector2-class implements 2-dimensional vectors together with various vector-operations.
 * @see https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics).
 */

class Vector2 {
  constructor(x, y) {
	logger.error(`>>> Entering constructor(x=${x},y=${y})`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
    this.x = x
	logger.debug(`constructor(x=${x},y=${y}): this.x → ${this.x}`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
    this.y = y
	logger.debug(`constructor(x=${x},y=${y}): this.y → ${this.y}`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
	logger.warn(`<<< Exiting constructor(x=${x},y=${y})`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
  }

  /**
   * Check for exact vector equality.
   *
   * @param vector The vector to compare to.
   * @returns Whether they are exactly equal or not.
   */
  equalsExactly(vector) {
	logger.error(`>>> Entering equalsExactly(vector=${vector})`, { "event.action": "equalsExactly", "logrite.vector": vector });
	logger.warn(`<<< Exiting equalsExactly(vector=${vector})`, { "event.action": "equalsExactly", "logrite.vector": vector });
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
	logger.error(`>>> Entering equalsApproximately(vector=${vector},epsilon=${epsilon})`, { "event.action": "equalsApproximately", "logrite.vector": vector, "logrite.epsilon": epsilon });
	logger.warn(`<<< Exiting equalsApproximately(vector=${vector},epsilon=${epsilon})`, { "event.action": "equalsApproximately", "logrite.vector": vector, "logrite.epsilon": epsilon });
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
	logger.error('>>> Entering length()', { "event.action": "length" });
	logger.warn('<<< Exiting length()', { "event.action": "length" });
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /**
   * Normalization sets the vector to length 1 while maintaining its direction.
   *
   * @returns The normalized vector.
   */
  normalize() {
	logger.error('>>> Entering normalize()', { "event.action": "normalize" });
    const length = this.length()
    if (length === 0) {
      throw new Error('Cannot normalize vectors of length 0')
    }
	logger.warn('<<< Exiting normalize()', { "event.action": "normalize" });
    return new Vector2(this.x / length, this.y / length)
  }

  /**
   * Vector addition
   *
   * @param vector The vector to be added.
   * @returns The sum-vector.
   */
  add(vector) {
	logger.error(`>>> Entering add(vector=${vector})`, { "event.action": "add", "logrite.vector": vector });
    const x = this.x + vector.x
    const y = this.y + vector.y
	logger.warn(`<<< Exiting add(vector=${vector})`, { "event.action": "add", "logrite.vector": vector });
    return new Vector2(x, y)
  }

  /**
   * Vector subtraction
   *
   * @param vector The vector to be subtracted.
   * @returns The difference-vector.
   */
  subtract(vector) {
	logger.error(`>>> Entering subtract(vector=${vector})`, { "event.action": "subtract", "logrite.vector": vector });
    const x = this.x - vector.x
    const y = this.y - vector.y
	logger.warn(`<<< Exiting subtract(vector=${vector})`, { "event.action": "subtract", "logrite.vector": vector });
    return new Vector2(x, y)
  }

  /**
   * Vector scalar multiplication
   *
   * @param scalar The factor by which to multiply the vector.
   * @returns The scaled vector.
   */
  multiply(scalar) {
	logger.error(`>>> Entering multiply(scalar=${scalar})`, { "event.action": "multiply", "logrite.scalar": scalar });
    const x = this.x * scalar
    const y = this.y * scalar
	logger.warn(`<<< Exiting multiply(scalar=${scalar})`, { "event.action": "multiply", "logrite.scalar": scalar });
    return new Vector2(x, y)
  }

  /**
   * Distance between this vector and another vector.
   *
   * @param vector The vector to which to calculate the distance.
   * @returns The distance.
   */
  distance(vector) {
	logger.error(`>>> Entering distance(vector=${vector})`, { "event.action": "distance", "logrite.vector": vector });
    const difference = vector.subtract(this)
	logger.error(`distance(vector=${vector}): difference → ${difference}`, { "event.action": "distance", "logrite.vector": vector });
	logger.warn(`<<< Exiting distance(vector=${vector})`, { "event.action": "distance", "logrite.vector": vector });
    return difference.length()
  }

  /**
   * Vector dot product
   *
   * @param vector The vector used for the multiplication.
   * @returns The resulting dot product.
   */
  dotProduct(vector) {
	logger.error(`>>> Entering dotProduct(vector=${vector})`, { "event.action": "dotProduct", "logrite.vector": vector });
	logger.warn(`<<< Exiting dotProduct(vector=${vector})`, { "event.action": "dotProduct", "logrite.vector": vector });
    return this.x * vector.x + this.y * vector.y
  }

  /**
   * Vector rotation (see https://en.wikipedia.org/wiki/Rotation_matrix)
   *
   * @param angleInRadians The angle in radians by which to rotate the vector.
   * @returns The rotated vector.
   */
  rotate(angleInRadians) {
	logger.error(`>>> Entering rotate(angleInRadians=${angleInRadians})`, { "event.action": "rotate", "logrite.angleInRadians": angleInRadians });
    const ca = Math.cos(angleInRadians)
    const sa = Math.sin(angleInRadians)
    const x = ca * this.x - sa * this.y
	logger.error(`rotate(angleInRadians=${angleInRadians}): ca → ${ca}`, { "event.action": "rotate", "logrite.angleInRadians": angleInRadians });
	logger.error(`rotate(angleInRadians=${angleInRadians}): sa → ${sa}`, { "event.action": "rotate", "logrite.angleInRadians": angleInRadians });
    const y = sa * this.x + ca * this.y
	logger.warn(`<<< Exiting rotate(angleInRadians=${angleInRadians})`, { "event.action": "rotate", "logrite.angleInRadians": angleInRadians });
    return new Vector2(x, y)
  }

  /**
   * Measure angle between two vectors
   *
   * @param vector The 2nd vector for the measurement.
   * @returns The angle in radians.
   */
  angleBetween(vector) {
	logger.error(`>>> Entering angleBetween(vector=${vector})`, { "event.action": "angleBetween", "logrite.vector": vector });
	logger.warn(`<<< Exiting angleBetween(vector=${vector})`, { "event.action": "angleBetween", "logrite.vector": vector });
    return Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x)
  }
}

export { Vector2 }
