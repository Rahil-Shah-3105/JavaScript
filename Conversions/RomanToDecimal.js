const logger = console;
const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

export function romanToDecimal(romanNumber) {
logger.debug(`>>> Entering romanToDecimal(romanNumber=${romanNumber})`);
  let prev = ' '

logger.debug(`romanToDecimal(romanNumber=${romanNumber}): prev → ${prev}`);
  let sum = 0

  let newPrev = 0
  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const c = romanNumber.charAt(i)

	logger.debug(`romanToDecimal(romanNumber=${romanNumber}): c → ${c}`);
    if (prev !== ' ') {
      newPrev = values[prev] > newPrev ? values[prev] : newPrev
    }

    const currentNum = values[c]
    if (currentNum >= newPrev) {
      sum += currentNum
    } else {
      sum -= currentNum
    }

    prev = c
  }
logger.debug(`<<< Exiting romanToDecimal(romanNumber=${romanNumber})`);
  return sum
}
