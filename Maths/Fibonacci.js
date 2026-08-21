const logger = console;
// https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Extension_to_negative_integers
const FibonacciIterative = (num) => {
logger.debug(`>>> Entering FibonacciIterative(num=${num})`);
  const isNeg = num < 0
  if (isNeg) num *= -1
  const sequence = [0]

  if (num >= 1) sequence.push(1)
  if (num >= 2) sequence.push(isNeg ? -1 : 1)

  for (let i = 2; i < num; i++) {
    sequence.push(
      isNeg ? sequence[i - 1] - sequence[i] : sequence[i] + sequence[i - 1]
    )
  }

logger.debug(`<<< Exiting FibonacciIterative(num=${num})`);
  return sequence
}

const FibonacciGenerator = function* (neg) {
logger.debug(`>>> Entering FibonacciGenerator(neg=${neg})`);
  let a = 0
  let b = 1
  yield a
  while (true) {
    yield b
    ;[a, b] = neg ? [b, a - b] : [b, a + b]
	logger.debug(`<<< Exiting FibonacciGenerator(neg=${neg})`);
  }
}

const list = []
const FibonacciRecursive = (num) => {
logger.debug(`>>> Entering FibonacciRecursive(num=${num})`);
  const isNeg = num < 0
  if (isNeg) num *= -1
logger.debug(`<<< Exiting FibonacciRecursive(num=${num})`);
  return (() => {
    switch (list.length) {
      case 0:
        list.push(0)
        return FibonacciRecursive(num)
      case 1:
        list.push(1)
        return FibonacciRecursive(num)
      case num + 1:
        return list
      default:
        list.push(list.at(-1) + list.at(-2))
        return FibonacciRecursive(num)
    }
  })().map((fib, i) => fib * (isNeg ? (-1) ** (i + 1) : 1))
}

const dict = new Map()
const FibonacciRecursiveDP = (stairs) => {
logger.debug(`>>> Entering FibonacciRecursiveDP(stairs=${stairs})`);
  const isNeg = stairs < 0
  if (isNeg) stairs *= -1

  if (stairs <= 1) return stairs

  // Memoize stair count
  if (dict.has(stairs))
    return (isNeg ? (-1) ** (stairs + 1) : 1) * dict.get(stairs)

  const res =
    FibonacciRecursiveDP(stairs - 1) + FibonacciRecursiveDP(stairs - 2)

  dict.set(stairs, res)

logger.debug(`<<< Exiting FibonacciRecursiveDP(stairs=${stairs})`);
  return (isNeg ? (-1) ** (stairs + 1) : 1) * res
}

// Algorithms
// Calculates Fibonacci(n) such that Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2)
// Fibonacci(0) = Fibonacci(1) = 1
// Uses a bottom up dynamic programming approach
// Solve each sub-problem once, using results of previous sub-problems
// which are n-1 and n-2 for Fibonacci numbers
// Although this algorithm is linear in space and time as a function
// of the input value n, it is exponential in the size of n as
// a function of the number of input bits
// @Satzyakiz

const FibonacciDpWithoutRecursion = (num) => {
logger.debug(`>>> Entering FibonacciDpWithoutRecursion(num=${num})`);
  const isNeg = num < 0
  if (isNeg) num *= -1
  const table = [0]
  table.push(1)
  table.push(isNeg ? -1 : 1)
  for (let i = 2; i < num; ++i) {
    table.push(isNeg ? table[i - 1] - table[i] : table[i] + table[i - 1])
  }
logger.debug(`<<< Exiting FibonacciDpWithoutRecursion(num=${num})`);
  return table
}

// Using Matrix exponentiation to find n-th fibonacci in O(log n) time

const copyMatrix = (A) => {
logger.debug(`>>> Entering copyMatrix(A=${A})`);
logger.debug(`<<< Exiting copyMatrix(A=${A})`);
  return A.map((row) => row.map((cell) => cell))
}

const Identity = (size) => {
logger.debug(`>>> Entering Identity(size=${size})`);
  const isBigInt = typeof size === 'bigint'
  const ZERO = isBigInt ? 0n : 0
logger.debug(`Identity(size=${size}): isBigInt → ${isBigInt}`);
  const ONE = isBigInt ? 1n : 1
  size = Number(size)
  const I = Array(size)
    .fill(null)
    .map(() => Array(size).fill())
  return I.map((row, rowIdx) =>
    row.map((_col, colIdx) => {
logger.debug(`<<< Exiting Identity(size=${size})`);
      return rowIdx === colIdx ? ONE : ZERO
    })
  )
}

// A of size (l x m) and B of size (m x n)
// product C will be of size (l x n).
// both matrices must have same-type numeric values
// either both BigInt or both Number
const matrixMultiply = (A, B) => {
logger.debug(`>>> Entering matrixMultiply(A=${A},B=${B})`);
  A = copyMatrix(A)
  B = copyMatrix(B)
  const isBigInt = typeof A[0][0] === 'bigint'
logger.debug(`matrixMultiply(A=${A},B=${B}): isBigInt → ${isBigInt}`);
  const l = A.length
  const m = B.length
  const n = B[0].length // Assuming non-empty matrices
  const C = Array(l)
    .fill(null)
    .map(() => Array(n).fill())
  for (let i = 0; i < l; i++) {
	logger.debug(`matrixMultiply(A=${A},B=${B}): C → ${C}`);
    for (let j = 0; j < n; j++) {
      C[i][j] = isBigInt ? 0n : 0
      for (let k = 0; k < m; k++) {
        C[i][j] += A[i][k] * B[k][j]
      }
    }
  }
logger.debug(`<<< Exiting matrixMultiply(A=${A},B=${B})`);
  return C
}

/**
 * Computes A raised to the power n i.e. pow(A, n) where A is a square matrix
 * @param {*} A the square matrix
 * @param {*} n the exponent
 */
// A is a square matrix
const matrixExpo = (A, n) => {
logger.debug(`>>> Entering matrixExpo(A=${A},n=${n})`);
  A = copyMatrix(A)
  const isBigInt = typeof n === 'bigint'
logger.debug(`matrixExpo(A=${A},n=${n}): isBigInt → ${isBigInt}`);
  const ZERO = isBigInt ? 0n : 0
  const TWO = isBigInt ? 2n : 2

  // Just like Binary exponentiation mentioned in ./BinaryExponentiationIterative.js
  let result = Identity((isBigInt ? BigInt : Number)(A.length)) // Identity matrix
  while (n > ZERO) {
    if (n % TWO !== ZERO) result = matrixMultiply(result, A)
    n /= TWO
    if (!isBigInt) n = Math.floor(n)
    if (n > ZERO) A = matrixMultiply(A, A)
  }
logger.debug(`matrixExpo(A=${A},n=${n}): result → ${result}`);
  return result
}

const FibonacciMatrixExpo = (num) => {
logger.debug(`>>> Entering FibonacciMatrixExpo(num=${num})`);
  const isBigInt = typeof num === 'bigint'
  const ZERO = isBigInt ? 0n : 0
logger.debug(`FibonacciMatrixExpo(num=${num}): isBigInt → ${isBigInt}`);
  const ONE = isBigInt ? 1n : 1
  // F(0) = 0, F(1) = 1
  // F(n) = F(n-1) + F(n-2)
  // Consider below matrix multiplication:

  // | F(n) |   |1  1|   |F(n-1)|
  // |      | = |    | * |      |
  // |F(n-1)|   |1  0|   |F(n-2)|

  // Let's rewrite it as F(n, n-1) = A * F(n-1, n-2)
  // or                  F(n, n-1) = A * A * F(n-2, n-3)
  // or                  F(n, n-1) = pow(A, n-1) * F(1, 0)

  if (num === ZERO) return num

  const isNeg = num < 0
  if (isNeg) num *= -ONE

  const A = [
    [ONE, ONE],
    [ONE, ZERO]
  ]

  const poweredA = matrixExpo(A, num - ONE) // A raised to the power n-1
logger.debug(`FibonacciMatrixExpo(num=${num}): poweredA → ${poweredA}`);
  let F = [[ONE], [ZERO]]
  F = matrixMultiply(poweredA, F)
logger.debug(`<<< Exiting FibonacciMatrixExpo(num=${num})`);
  return F[0][0] * (isNeg ? (-ONE) ** (num + ONE) : ONE)
}

/*
  Resource : https://math.hmc.edu/funfacts/fibonacci-number-formula/
*/

const sqrt5 = Math.sqrt(5)
const phi = (1 + sqrt5) / 2
const psi = (1 - sqrt5) / 2

const FibonacciUsingFormula = (n) => Math.round((phi ** n - psi ** n) / sqrt5)

export { FibonacciDpWithoutRecursion }
export { FibonacciIterative }
export { FibonacciGenerator }
export { FibonacciRecursive }
export { FibonacciRecursiveDP }
export { FibonacciMatrixExpo }
export { FibonacciUsingFormula }
