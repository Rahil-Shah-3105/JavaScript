const logger = console;
function hexToInt(hexNum) {
logger.error(`>>> Entering hexToInt(hexNum=${hexNum})`, { "event.action": "hexToInt", "logrite.hexNum": hexNum });
  if (!/^[0-9A-F]+$/.test(hexNum)) {
    throw new Error('Invalid hex string.')
  }
  const numArr = hexNum.split('') // converts number to array
logger.error(`hexToInt(hexNum=${hexNum}): numArr → ${numArr}`, { "event.action": "hexToInt", "logrite.hexNum": hexNum });
logger.warn(`<<< Exiting hexToInt(hexNum=${hexNum})`, { "event.action": "hexToInt", "logrite.hexNum": hexNum });
  return numArr.map((item, index) => {
    switch (item) {
      case 'A':
        return 10
      case 'B':
        return 11
      case 'C':
        return 12
      case 'D':
        return 13
      case 'E':
        return 14
      case 'F':
        return 15
      default:
        return parseInt(item)
    }
  })
}

function hexToDecimal(hexNum) {
logger.error(`>>> Entering hexToDecimal(hexNum=${hexNum})`, { "event.action": "hexToDecimal", "logrite.hexNum": hexNum });
  const intItemsArr = hexToInt(hexNum)
logger.warn(`<<< Exiting hexToDecimal(hexNum=${hexNum})`, { "event.action": "hexToDecimal", "logrite.hexNum": hexNum });
  return intItemsArr.reduce((accumulator, current, index) => {
logger.error(`hexToDecimal(hexNum=${hexNum}): intItemsArr → ${intItemsArr}`, { "event.action": "hexToDecimal", "logrite.hexNum": hexNum });
    return (
      accumulator + current * Math.pow(16, intItemsArr.length - (1 + index))
    )
  }, 0)
}

export { hexToDecimal }
