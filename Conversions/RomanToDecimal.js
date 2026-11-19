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
logger.error(`>>> Entering romanToDecimal(romanNumber=${romanNumber})`, { "event.action": "romanToDecimal", "logrite.romanNumber": romanNumber });
  let prev = ' '

logger.error(`romanToDecimal(romanNumber=${romanNumber}): prev → ${prev}`, { "event.action": "romanToDecimal", "logrite.romanNumber": romanNumber });
  let sum = 0

  let newPrev = 0
  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const c = romanNumber.charAt(i)

	logger.error(`romanToDecimal(romanNumber=${romanNumber}): c → ${c}`, { "event.action": "romanToDecimal", "logrite.romanNumber": romanNumber });
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
logger.warn(`<<< Exiting romanToDecimal(romanNumber=${romanNumber})`, { "event.action": "romanToDecimal", "logrite.romanNumber": romanNumber });
  return sum
}
