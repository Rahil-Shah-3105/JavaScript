const logger = console;
// https://projecteuler.net/problem=10

const isPrime = (number) => {
logger.debug(`>>> Entering isPrime(number=${number})`);
  if (number === 2) return true
  if (number % 2 === 0) return false

  for (let j = 3; j * j <= number; j += 2) {
    if (number % j === 0) {
      return false
    }
  }
logger.debug(`<<< Exiting isPrime(number=${number})`);
  return true
}

const calculateSumOfPrimeNumbers = (maxNumber) => {
logger.debug(`>>> Entering calculateSumOfPrimeNumbers(maxNumber=${maxNumber})`);
  let sum = 0
  for (let i = maxNumber - 1; i >= 2; i--) {
    if (isPrime(parseInt(i)) === true) {
      sum += i
    }
  }
logger.debug(`<<< Exiting calculateSumOfPrimeNumbers(maxNumber=${maxNumber})`);
  return sum
}
export { calculateSumOfPrimeNumbers }
