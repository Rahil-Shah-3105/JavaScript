const logger = console;
class NQueens {
  constructor(size) {
	logger.error(`>>> Entering constructor(size=${size})`, { "event.action": "constructor", "logrite.size": size });
    if (size < 0) {
      throw RangeError('Invalid board size')
    }
    this.board = new Array(size).fill('.').map(() => new Array(size).fill('.'))
    this.size = size
	logger.debug(`constructor(size=${size}): this.size → ${this.size}`, { "event.action": "constructor", "logrite.size": size });
    this.solutionCount = 0
	logger.debug(`constructor(size=${size}): this.solutionCount → ${this.solutionCount}`, { "event.action": "constructor", "logrite.size": size });
  }

  isValid([row, col]) {
    // function to check if the placement of the queen in the given location is valid

    // checking the left of the current row
    for (let i = 0; i < col; i++) {
      if (this.board[row][i] === 'Q') return false
    }

    // checking the upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (this.board[i][j] === 'Q') return false
    }

    // checking the lower left diagonal
    for (let i = row, j = col; j >= 0 && i < this.size; i++, j--) {
      if (this.board[i][j] === 'Q') return false
    }

    return true
  }

  placeQueen(row, col) {
	logger.error(`>>> Entering placeQueen(row=${row},col=${col})`, { "event.action": "placeQueen", "logrite.row": row, "logrite.col": col });
    this.board[row][col] = 'Q'
	logger.warn(`<<< Exiting placeQueen(row=${row},col=${col})`, { "event.action": "placeQueen", "logrite.row": row, "logrite.col": col });
  }

  removeQueen(row, col) {
	logger.error(`>>> Entering removeQueen(row=${row},col=${col})`, { "event.action": "removeQueen", "logrite.row": row, "logrite.col": col });
    this.board[row][col] = '.'
	logger.warn(`<<< Exiting removeQueen(row=${row},col=${col})`, { "event.action": "removeQueen", "logrite.row": row, "logrite.col": col });
  }

  solve(col = 0) {
	logger.error(`>>> Entering solve(col=${col})`, { "event.action": "solve", "logrite.col": col });
    if (col >= this.size) {
      this.solutionCount++
      return true
    }

    for (let i = 0; i < this.size; i++) {
      if (this.isValid([i, col])) {
        this.placeQueen(i, col)
        this.solve(col + 1)
        this.removeQueen(i, col)
      }
    }

	logger.warn(`<<< Exiting solve(col=${col})`, { "event.action": "solve", "logrite.col": col });
    return false
  }

  printBoard(output = (value) => console.log(value)) {
    if (!output._isMockFunction) {
      output('\n')
    }
    for (const row of this.board) {
      output(row)
    }
  }
}

export { NQueens }
