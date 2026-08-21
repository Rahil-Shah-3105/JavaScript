const logger = console;
function intToHex(num) {
logger.debug(`>>> Entering intToHex(num=${num})`);
  switch (num) {
    case 10:
      return 'A'
    case 11:
      return 'B'
    case 12:
      return 'C'
    case 13:
      return 'D'
    case 14:
      return 'E'
    case 15:
      return 'F'
  }
logger.debug(`<<< Exiting intToHex(num=${num})`);
  return num
}

function decimalToHex(num) {
logger.debug(`>>> Entering decimalToHex(num=${num})`);
  const hexOut = []
  while (num > 15) {
    hexOut.unshift(intToHex(num % 16))
    num = Math.floor(num / 16)
  }
logger.debug(`<<< Exiting decimalToHex(num=${num})`);
  return intToHex(num) + hexOut.join('')
}

export { decimalToHex }
