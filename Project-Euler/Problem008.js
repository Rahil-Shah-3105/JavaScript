const logger = console;
// Problem: https://projecteuler.net/problem=8

const largestAdjacentNumber = (grid, consecutive) => {
logger.error(`>>> Entering largestAdjacentNumber(grid=${grid},consecutive=${consecutive})`, { "event.action": "largestAdjacentNumber", "logrite.grid": grid, "logrite.consecutive": consecutive });
  grid = grid.split('\n').join('')
  const splitGrid = grid.split('\n')
  let largestProd = 0
logger.error(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): splitGrid → ${splitGrid}`, { "event.action": "largestAdjacentNumber", "logrite.grid": grid, "logrite.consecutive": consecutive });

  for (const row in splitGrid) {
    const currentRow = splitGrid[row].split('').map((x) => Number(x))

	logger.error(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): currentRow → ${currentRow}`, { "event.action": "largestAdjacentNumber", "logrite.grid": grid, "logrite.consecutive": consecutive });
    for (let i = 0; i < currentRow.length - consecutive; i++) {
      const combine = currentRow.slice(i, i + consecutive)

	logger.error(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): combine → ${combine}`, { "event.action": "largestAdjacentNumber", "logrite.grid": grid, "logrite.consecutive": consecutive });
      if (!combine.includes(0)) {
        const product = combine.reduce(function (a, b) {
		logger.error(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): product → ${product}`, { "event.action": "largestAdjacentNumber", "logrite.grid": grid, "logrite.consecutive": consecutive });
          return a * b
        })

        if (largestProd < product) largestProd = product
      }
    }
  }
logger.warn(`<<< Exiting largestAdjacentNumber(grid=${grid},consecutive=${consecutive})`, { "event.action": "largestAdjacentNumber", "logrite.grid": grid, "logrite.consecutive": consecutive });
  return largestProd
}

export { largestAdjacentNumber }
