const logger = console;
function hexToInt(hexNum) {
logger.debug(`>>> Entering hexToInt(hexNum=${hexNum})`);
  if (!/^[0-9A-F]+$/.test(hexNum)) {
    throw new Error('Invalid hex string.')
  }
  const numArr = hexNum.split('') // converts number to array
logger.debug(`hexToInt(hexNum=${hexNum}): numArr → ${numArr}`);
logger.debug(`<<< Exiting hexToInt(hexNum=${hexNum})`);
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
logger.debug(`>>> Entering hexToDecimal(hexNum=${hexNum})`);
  const intItemsArr = hexToInt(hexNum)
logger.debug(`<<< Exiting hexToDecimal(hexNum=${hexNum})`);
  return intItemsArr.reduce((accumulator, current, index) => {
logger.debug(`hexToDecimal(hexNum=${hexNum}): intItemsArr → ${intItemsArr}`);
    return (
      accumulator + current * Math.pow(16, intItemsArr.length - (1 + index))
    )
  }, 0)
}

export { hexToDecimal }
