const logger = console;
// Problem: https://projecteuler.net/problem=8

const largestAdjacentNumber = (grid, consecutive) => {
logger.debug(`>>> Entering largestAdjacentNumber(grid=${grid},consecutive=${consecutive})`);
  grid = grid.split('\n').join('')
  const splitGrid = grid.split('\n')
  let largestProd = 0
logger.debug(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): splitGrid → ${splitGrid}`);

  for (const row in splitGrid) {
    const currentRow = splitGrid[row].split('').map((x) => Number(x))

	logger.debug(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): currentRow → ${currentRow}`);
    for (let i = 0; i < currentRow.length - consecutive; i++) {
      const combine = currentRow.slice(i, i + consecutive)

	logger.debug(`largestAdjacentNumber(grid=${grid},consecutive=${consecutive}): combine → ${combine}`);
      if (!combine.includes(0)) {
        const product = combine.reduce(function (a, b) {
		logger.debug(`>>> Entering reduce(b=${b})`);
          return a * b
        })

        if (largestProd < product) largestProd = product
      }
    }
  }
logger.debug(`<<< Exiting largestAdjacentNumber(grid=${grid},consecutive=${consecutive})`);
  return largestProd
}

export { largestAdjacentNumber }
