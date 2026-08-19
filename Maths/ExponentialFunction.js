const logger = console;
/**
 * @function exponentialFunction
 * @description Calculates the n+1 th order Taylor series approximation of exponential function e^x given n
 * @param {Integer} power
 * @param {Integer} order - 1
 * @returns exponentialFunction(2,20) = 7.3890560989301735
 * @url https://en.wikipedia.org/wiki/Exponential_function
 */
function exponentialFunction(power, n) {
logger.debug(`>>> Entering exponentialFunction(power=${power},n=${n})`);
  let output = 0
  let fac = 1
  if (isNaN(power) || isNaN(n) || n < 0) {
    throw new TypeError('Invalid Input')
  }
  if (n === 0) {
    return 1
  }
  for (let i = 0; i < n; i++) {
    output += power ** i / fac
    fac *= i + 1
  }
logger.debug(`<<< Exiting exponentialFunction(power=${power},n=${n})`);
  return output
}

export { exponentialFunction }
