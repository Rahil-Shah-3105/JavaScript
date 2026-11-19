const logger = console;
/**
 * The Koch snowflake is a fractal curve and one of the earliest fractals to have been described.
 *
 * The Koch snowflake can be built up iteratively, in a sequence of stages. The first stage is an equilateral triangle,
 * and each successive stage is formed by adding outward bends to each side of the previous stage, making smaller
 * equilateral triangles. This can be achieved through the following steps for each line:
 * 1. divide the line segment into three segments of equal length.
 * 2. draw an equilateral triangle that has the middle segment from step 1 as its base and points outward.
 * 3. remove the line segment that is the base of the triangle from step 2.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Koch_snowflake)
 * (for a more detailed explanation and an implementation in the Processing language, see
 * https://natureofcode.com/book/chapter-8-fractals/ #84-the-koch-curve-and-the-arraylist-technique).
 */

/** Class to handle the vector calculations. */
export class Vector2 {
  constructor(x, y) {
	logger.error(`>>> Entering constructor(x=${x},y=${y})`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
    this.x = x
	logger.debug(`constructor(x=${x},y=${y}): this.x → ${this.x}`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
    this.y = y
	logger.debug(`constructor(x=${x},y=${y}): this.y → ${this.y}`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
	logger.warn(`<<< Exiting constructor(x=${x},y=${y})`, { "event.action": "constructor", "logrite.x": x, "logrite.y": y });
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
   * Vector rotation (see https://en.wikipedia.org/wiki/Rotation_matrix)
   *
   * @param angleInDegrees The angle by which to rotate the vector.
   * @returns The rotated vector.
   */
  rotate(angleInDegrees) {
	logger.error(`>>> Entering rotate(angleInDegrees=${angleInDegrees})`, { "event.action": "rotate", "logrite.angleInDegrees": angleInDegrees });
    const radians = (angleInDegrees * Math.PI) / 180
    const ca = Math.cos(radians)
    const sa = Math.sin(radians)
    const x = ca * this.x - sa * this.y
	logger.error(`rotate(angleInDegrees=${angleInDegrees}): radians → ${radians}`, { "event.action": "rotate", "logrite.angleInDegrees": angleInDegrees });
	logger.error(`rotate(angleInDegrees=${angleInDegrees}): ca → ${ca}`, { "event.action": "rotate", "logrite.angleInDegrees": angleInDegrees });
    const y = sa * this.x + ca * this.y
	logger.warn(`<<< Exiting rotate(angleInDegrees=${angleInDegrees})`, { "event.action": "rotate", "logrite.angleInDegrees": angleInDegrees });
    return new Vector2(x, y)
  }
}

/**
 * Go through the number of iterations determined by the argument "steps".
 *
 * Be careful with high values (above 5) since the time to calculate increases exponentially.
 *
 * @param initialVectors The vectors composing the shape to which the algorithm is applied.
 * @param steps The number of iterations.
 * @returns The transformed vectors after the iteration-steps.
 */
export function iterate(initialVectors, steps) {
logger.error(`>>> Entering iterate(initialVectors=${initialVectors},steps=${steps})`, { "event.action": "iterate", "logrite.initialVectors": initialVectors, "logrite.steps": steps });
  let vectors = initialVectors
  for (let i = 0; i < steps; i++) {
    vectors = iterationStep(vectors)
  }

logger.warn(`<<< Exiting iterate(initialVectors=${initialVectors},steps=${steps})`, { "event.action": "iterate", "logrite.initialVectors": initialVectors, "logrite.steps": steps });
  return vectors
}

/**
 * Loops through each pair of adjacent vectors.
 *
 * Each line between two adjacent vectors is divided into 4 segments by adding 3 additional vectors in-between the
 * original two vectors. The vector in the middle is constructed through a 60 degree rotation so it is bent outwards.
 *
 * @param vectors The vectors composing the shape to which the algorithm is applied.
 * @returns The transformed vectors after the iteration-step.
 */
function iterationStep(vectors) {
logger.error(`>>> Entering iterationStep(vectors=${vectors})`, { "event.action": "iterationStep", "logrite.vectors": vectors });
  const newVectors = []
  for (let i = 0; i < vectors.length - 1; i++) {
    const startVector = vectors[i]
    const endVector = vectors[i + 1]
    newVectors.push(startVector)
    const differenceVector = endVector.subtract(startVector).multiply(1 / 3)
    newVectors.push(startVector.add(differenceVector))
    newVectors.push(
      startVector.add(differenceVector).add(differenceVector.rotate(60))
    )
    newVectors.push(startVector.add(differenceVector.multiply(2)))
  }

  newVectors.push(vectors[vectors.length - 1])
logger.warn(`<<< Exiting iterationStep(vectors=${vectors})`, { "event.action": "iterationStep", "logrite.vectors": vectors });
  return newVectors
}
