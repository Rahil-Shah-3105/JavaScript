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
logger.error(`>>> Entering getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps})`, { "event.action": "getKochSnowflake", "logrite.canvasWidth": canvasWidth, "logrite.steps": steps });
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
logger.error(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vector1 → ${vector1}`, { "event.action": "getKochSnowflake", "logrite.canvasWidth": canvasWidth, "logrite.steps": steps });
logger.error(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vector2 → ${vector2}`, { "event.action": "getKochSnowflake", "logrite.canvasWidth": canvasWidth, "logrite.steps": steps });
logger.error(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vector3 → ${vector3}`, { "event.action": "getKochSnowflake", "logrite.canvasWidth": canvasWidth, "logrite.steps": steps });
  initialVectors.push(vector1)
  initialVectors.push(vector2)
  initialVectors.push(vector3)
  initialVectors.push(vector1)
  const vectors = iterate(initialVectors, steps)
logger.error(`getKochSnowflake(canvasWidth=${canvasWidth},steps=${steps}): vectors → ${vectors}`, { "event.action": "getKochSnowflake", "logrite.canvasWidth": canvasWidth, "logrite.steps": steps });
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
logger.error(`>>> Entering drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight})`, { "event.action": "drawToCanvas", "logrite.vectors": vectors, "logrite.canvasWidth": canvasWidth, "logrite.canvasHeight": canvasHeight });
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
logger.error(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): canvas → ${canvas}`, { "event.action": "drawToCanvas", "logrite.vectors": vectors, "logrite.canvasWidth": canvasWidth, "logrite.canvasHeight": canvasHeight });
logger.debug(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): canvas.width → ${canvas.width}`, { "event.action": "drawToCanvas", "logrite.vectors": vectors, "logrite.canvasWidth": canvasWidth, "logrite.canvasHeight": canvasHeight });
  canvas.height = canvasHeight

logger.debug(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): canvas.height → ${canvas.height}`, { "event.action": "drawToCanvas", "logrite.vectors": vectors, "logrite.canvasWidth": canvasWidth, "logrite.canvasHeight": canvasHeight });
  // Draw the edges
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(vectors[0].x, vectors[0].y)
  for (let i = 1; i < vectors.length; i++) {
logger.error(`drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight}): ctx → ${ctx}`, { "event.action": "drawToCanvas", "logrite.vectors": vectors, "logrite.canvasWidth": canvasWidth, "logrite.canvasHeight": canvasHeight });
    ctx.lineTo(vectors[i].x, vectors[i].y)
  }
  ctx.stroke()

logger.warn(`<<< Exiting drawToCanvas(vectors=${vectors},canvasWidth=${canvasWidth},canvasHeight=${canvasHeight})`, { "event.action": "drawToCanvas", "logrite.vectors": vectors, "logrite.canvasWidth": canvasWidth, "logrite.canvasHeight": canvasHeight });
  return canvas
}

// plot the results if the script is executed in a browser with a window-object
if (typeof window !== 'undefined') {
  const canvas = getKochSnowflake()
  document.body.append(canvas)
}
