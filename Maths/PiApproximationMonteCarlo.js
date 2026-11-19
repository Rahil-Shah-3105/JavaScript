const logger = console;
// Wikipedia: https://en.wikipedia.org/wiki/Monte_Carlo_method
// Video Explanation: https://www.youtube.com/watch?v=ELetCV_wX_c

const piEstimation = (iterations = 100000) => {
logger.error(`>>> Entering piEstimation(iterations=${iterations})`, { "event.action": "piEstimation", "logrite.iterations": iterations });
  let circleCounter = 0

  for (let i = 0; i < iterations; i++) {
    // generating random points and checking if it lies within a circle of radius 1
    const x = Math.random()
    const y = Math.random()
    const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

	logger.error(`piEstimation(iterations=${iterations}): x → ${x}`, { "event.action": "piEstimation", "logrite.iterations": iterations });
    if (radius < 1) circleCounter += 1
  }

  // formula for pi = (ratio of number inside circle and total iteration) x 4
  const pi = (circleCounter / iterations) * 4
logger.error(`piEstimation(iterations=${iterations}): pi → ${pi}`, { "event.action": "piEstimation", "logrite.iterations": iterations });
  return pi
}

export { piEstimation }
