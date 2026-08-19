const logger = console;
class NQueens {
  constructor(size) {
	logger.debug(`>>> Entering constructor(size=${size})`);
    if (size < 0) {
      throw RangeError('Invalid board size')
    }
    this.board = new Array(size).fill('.').map(() => new Array(size).fill('.'))
    this.size = size
    this.solutionCount = 0
	logger.debug(`constructor(size=${size}): this.size → ${this.size}`);
	logger.debug(`constructor(size=${size}): this.solutionCount → ${this.solutionCount}`);
	logger.debug(`<<< Exiting constructor(size=${size})`);
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
	logger.debug(`>>> Entering placeQueen(row=${row},col=${col})`);
    this.board[row][col] = 'Q'
	logger.debug(`<<< Exiting placeQueen(row=${row},col=${col})`);
  }

  removeQueen(row, col) {
	logger.debug(`>>> Entering removeQueen(row=${row},col=${col})`);
    this.board[row][col] = '.'
	logger.debug(`<<< Exiting removeQueen(row=${row},col=${col})`);
  }

  solve(col = 0) {
	logger.debug(`>>> Entering solve(col=${col})`);
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

	logger.debug(`<<< Exiting solve(col=${col})`);
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
