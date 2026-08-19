const logger = console;
// https://projecteuler.net/problem=3

export const largestPrime = (num = 600851475143) => {
logger.debug(`>>> Entering largestPrime(num=${num})`);
  let newnum = num
  let largestFact = 0
  let counter = 2
  while (counter * counter <= newnum) {
    if (newnum % counter === 0) {
      newnum = newnum / counter
    } else {
      counter++
    }
  }
  if (newnum > largestFact) {
    largestFact = newnum
  }
logger.debug(`<<< Exiting largestPrime(num=${num})`);
  return largestFact
}
