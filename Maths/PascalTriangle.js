const logger = console;
const addRow = (triangle) => {
logger.debug(`>>> Entering addRow(triangle=${triangle})`);
  const previous = triangle[triangle.length - 1]
  const newRow = [1]
  for (let i = 0; i < previous.length - 1; i++) {
    const current = previous[i]
    const next = previous[i + 1]
    newRow.push(current + next)
  }
  newRow.push(1)
logger.debug(`<<< Exiting addRow(triangle=${triangle})`);
  return triangle.push(newRow)
}

const generate = (numRows) => {
logger.debug(`>>> Entering generate(numRows=${numRows})`);
  const triangle = [[1], [1, 1]]

  if (numRows === 0) {
    return []
  } else if (numRows === 1) {
    return [[1]]
  } else {
    for (let i = 2; i < numRows; i++) {
      addRow(triangle)
    }
  }
logger.debug(`<<< Exiting generate(numRows=${numRows})`);
  return triangle
}

export { generate }
