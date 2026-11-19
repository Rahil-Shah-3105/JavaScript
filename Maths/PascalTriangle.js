const logger = console;
const addRow = (triangle) => {
logger.error(`>>> Entering addRow(triangle=${triangle})`, { "event.action": "addRow", "logrite.triangle": triangle });
  const previous = triangle[triangle.length - 1]
  const newRow = [1]
  for (let i = 0; i < previous.length - 1; i++) {
    const current = previous[i]
    const next = previous[i + 1]
    newRow.push(current + next)
  }
  newRow.push(1)
logger.warn(`<<< Exiting addRow(triangle=${triangle})`, { "event.action": "addRow", "logrite.triangle": triangle });
  return triangle.push(newRow)
}

const generate = (numRows) => {
logger.error(`>>> Entering generate(numRows=${numRows})`, { "event.action": "generate", "logrite.numRows": numRows });
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
logger.warn(`<<< Exiting generate(numRows=${numRows})`, { "event.action": "generate", "logrite.numRows": numRows });
  return triangle
}

export { generate }
