const logger = console;
// Checks if a number is divisible by another number.

export const isDivisible = (num1, num2) => {
logger.debug(`>>> Entering isDivisible(num1=${num1},num2=${num2})`);
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new TypeError('Expected a valid real number')
  }
  if (num2 === 0) {
    return false
  }
logger.debug(`<<< Exiting isDivisible(num1=${num1},num2=${num2})`);
  return num1 % num2 === 0
}

// isDivisible(10, 5) // returns true
// isDivisible(123498175, 5) // returns true
// isDivisible(99, 5) // returns false
