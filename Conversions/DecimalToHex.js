const logger = console;
function intToHex(num) {
logger.error(`>>> Entering intToHex(num=${num})`, { "event.action": "intToHex", "logrite.num": num });
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
logger.warn(`<<< Exiting intToHex(num=${num})`, { "event.action": "intToHex", "logrite.num": num });
  return num
}

function decimalToHex(num) {
logger.error(`>>> Entering decimalToHex(num=${num})`, { "event.action": "decimalToHex", "logrite.num": num });
  const hexOut = []
  while (num > 15) {
    hexOut.unshift(intToHex(num % 16))
    num = Math.floor(num / 16)
  }
logger.warn(`<<< Exiting decimalToHex(num=${num})`, { "event.action": "decimalToHex", "logrite.num": num });
  return intToHex(num) + hexOut.join('')
}

export { decimalToHex }
