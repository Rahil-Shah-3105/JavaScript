const logger = console;
// https://projecteuler.net/problem=3

export const largestPrime = (num = 600851475143) => {
logger.error(`>>> Entering largestPrime(num=${num})`, { "event.action": "largestPrime", "logrite.num": num });
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
logger.warn(`<<< Exiting largestPrime(num=${num})`, { "event.action": "largestPrime", "logrite.num": num });
  return largestFact
}
