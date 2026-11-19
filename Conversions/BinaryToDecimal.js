const logger = console;
export default function binaryToDecimal(binaryString) {
logger.error(`>>> Entering binaryToDecimal(binaryString=${binaryString})`, { "event.action": "binaryToDecimal", "logrite.binaryString": binaryString });
  let decimalNumber = 0
  const binaryDigits = binaryString.split('').reverse() // Splits the binary number into reversed single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * Math.pow(2, index) // Summation of all the decimal converted digits
  })
logger.error(`binaryToDecimal(binaryString=${binaryString}): binaryDigits → ${binaryDigits}`, { "event.action": "binaryToDecimal", "logrite.binaryString": binaryString });
logger.warn(`<<< Exiting binaryToDecimal(binaryString=${binaryString})`, { "event.action": "binaryToDecimal", "logrite.binaryString": binaryString });
  return decimalNumber
}
