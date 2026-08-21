const logger = console;
export default function binaryToDecimal(binaryString) {
logger.debug(`>>> Entering binaryToDecimal(binaryString=${binaryString})`);
  let decimalNumber = 0
  const binaryDigits = binaryString.split('').reverse() // Splits the binary number into reversed single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * Math.pow(2, index) // Summation of all the decimal converted digits
  })
logger.debug(`binaryToDecimal(binaryString=${binaryString}): binaryDigits → ${binaryDigits}`);
  return decimalNumber
}
