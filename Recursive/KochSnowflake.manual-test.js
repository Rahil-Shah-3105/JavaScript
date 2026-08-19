const logger = console;
import { Vector2, iterate } from './KochSnowflake'

/**
 * Method to render the Koch snowflake to a canvas.
 *
 * @param canvasWidth The width of the canvas.
 * @param steps The number of iterations.
 * @returns The canvas of the rendered Koch snowflake.
 */
function getKochSnowflake(canvasWidth = 600, steps = 5) {
logger.debug(`>>> Entering getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps})`);
  if (canvasWidth <= 0) {
    throw new Error('canvasWidth should be greater than zero')
  }

  const offsetX = canvasWidth / 10.0
  const offsetY = canvasWidth / 3.7
  const vector1 = new Vector2(offsetX, offsetY)
  const vector2 = new Vector2(
    canvasWidth / 2,
    Math.sin(Math.PI / 3) * canvasWidth * 0.8 + offsetY
  )
  const vector3 = new Vector2(canvasWidth - offsetX, offsetY)
  const initialVectors = []
logger.debug(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vector1 → ${vector1}`);
logger.debug(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vector2 → ${vector2}`);
logger.debug(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vector3 → ${vector3}`);
  initialVectors.push(vector1)
  initialVectors.push(vector2)
  initialVectors.push(vector3)
  initialVectors.push(vector1)
  const vectors = iterate(initialVectors, steps)
logger.debug(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vectors → ${vectors}`);
logger.debug(`<<< Exiting getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps})`);
  return drawToCanvas(vectors, canvasWidth, canvasWidth)
}

/**
 * Utility-method to render the Koch snowflake to a canvas.
 *
 * @param vectors The vectors defining the edges to be rendered.
 * @param canvasWidth The width of the canvas.
 * @param canvasHeight The height of the canvas.
 * @returns The canvas of the rendered edges.
 */
function drawToCanvas(vectors, canvasWidth, canvasHeight) {
logger.debug(`>>> Entering drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight})`);
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
logger.debug(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): canvas → ${canvas}`);
logger.debug(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): canvas.width → ${canvas.width}`);
  canvas.height = canvasHeight
logger.debug(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): canvas.height → ${canvas.height}`);

  // Draw the edges
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(vectors[0].x, vectors[0].y)
  for (let i = 1; i < vectors.length; i++) {
logger.debug(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): ctx → ${ctx}`);
    ctx.lineTo(vectors[i].x, vectors[i].y)
  }
  ctx.stroke()

logger.debug(`<<< Exiting drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight})`);
  return canvas
}

// plot the results if the script is executed in a browser with a window-object
if (typeof window !== 'undefined') {
  const canvas = getKochSnowflake()
  document.body.append(canvas)
}
