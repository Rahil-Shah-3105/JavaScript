const logger = console;
/**
 * Find and retrieve the encryption key automatically.
 * @param {string} str - The input encrypted string.
 * @returns {number} - The encryption key found, or 0 if not found.
 */
function keyFinder(str) {
logger.error(`>>> Entering keyFinder(str=${str})`, { "event.action": "keyFinder", "logrite.str": str });
  // str is used to get the input of encrypted string
  const wordBank = [
    'I ',
    'You ',
    'We ',
    'They ',
    'He ',
    'She ',
    'It ',
    ' the ',
    'The ',
    ' of ',
    ' is ',
    'Is ',
    ' am ',
    'Am ',
    ' are ',
    'Are ',
    ' have ',
    'Have ',
    ' has ',
    'Has ',
    ' may ',
    'May ',
    ' be ',
    'Be '
  ]
  const inStr = str.toString() // convert the input to String
logger.error(`keyFinder(str=${str}): inStr → ${inStr}`, { "event.action": "keyFinder", "logrite.str": str });
  let outStr = '' // store the output value
logger.error(`keyFinder(str=${str}): outStr → ${outStr}`, { "event.action": "keyFinder", "logrite.str": str });
  let outStrElement = '' // temporary store the word inside the outStr, it is used for comparison
  for (let k = 0; k < 26; k++) {
    // try the number of key shifted, the sum of character from a-z or A-Z is 26
    outStr = caesarCipherEncodeAndDecodeEngine(inStr, k) // use the encryption engine to decrypt the input string

    // loop through the whole input string
    for (let s = 0; s < outStr.length; s++) {
      for (let i = 0; i < wordBank.length; i++) {
        // initialize the outStrElement which is a temp output string for comparison,
        // use a loop to find the next digit of wordBank element and compare with outStr's digit
        for (let w = 0; w < wordBank[i].length; w++) {
          outStrElement += outStr[s + w]
        }
        // this part need to be optimize with the calculation of the number of occurrence of word's probabilities
        // linked list will be used in the next stage of development to calculate the number of occurrence of the key
        if (wordBank[i] === outStrElement) {
          return k // return the key number if founded
        }
        outStrElement = '' // reset the temp word
      } // end for (let i=0; i < wordBank.length; i++)
    }
  }
logger.error(`keyFinder(str=${str}): outStrElement → ${outStrElement}`, { "event.action": "keyFinder", "logrite.str": str });
logger.warn(`<<< Exiting keyFinder(str=${str})`, { "event.action": "keyFinder", "logrite.str": str });
  return 0 // return 0 if found nothing
}

/**
 * This sub-function is used to assist the keyFinder in finding the key.
 * @param {string} inStr - The input string.
 * @param {number} numShifted - The number of characters to shift in the Caesar cipher.
 * @returns {string} - The decrypted string.
 */
function caesarCipherEncodeAndDecodeEngine(inStr, numShifted) {
logger.error(`>>> Entering caesarCipherEncodeAndDecodeEngine(inStr=${inStr},numShifted=${numShifted})`, { "event.action": "caesarCipherEncodeAndDecodeEngine", "logrite.inStr": inStr, "logrite.numShifted": numShifted });
  const shiftNum = numShifted
  let charCode = 0
  let shiftedCharCode = 0
  let result = 0
logger.error(`caesarCipherEncodeAndDecodeEngine(inStr=${inStr},numShifted=${numShifted}): result → ${result}`, { "event.action": "caesarCipherEncodeAndDecodeEngine", "logrite.inStr": inStr, "logrite.numShifted": numShifted });

  return inStr
    .split('')
    .map((char) => {
      charCode = char.charCodeAt()
      shiftedCharCode = charCode + shiftNum
      result = charCode

      if (charCode >= 48 && charCode <= 57) {
        if (shiftedCharCode < 48) {
          let diff = Math.abs(48 - 1 - shiftedCharCode) % 10

          while (diff >= 10) {
            diff = diff % 10
          }
          document.getElementById('diffID').innerHTML = diff

          shiftedCharCode = 57 - diff

          result = shiftedCharCode
        } else if (shiftedCharCode >= 48 && shiftedCharCode <= 57) {
          result = shiftedCharCode
        } else if (shiftedCharCode > 57) {
          let diff = Math.abs(57 + 1 - shiftedCharCode) % 10

          while (diff >= 10) {
            diff = diff % 10
          }
          document.getElementById('diffID').innerHTML = diff

          shiftedCharCode = 48 + diff

          result = shiftedCharCode
        }
      } else if (charCode >= 65 && charCode <= 90) {
        if (shiftedCharCode <= 64) {
          let diff = Math.abs(65 - 1 - shiftedCharCode) % 26

          while (diff % 26 >= 26) {
            diff = diff % 26
          }
          shiftedCharCode = 90 - diff
          result = shiftedCharCode
        } else if (shiftedCharCode >= 65 && shiftedCharCode <= 90) {
          result = shiftedCharCode
        } else if (shiftedCharCode > 90) {
          let diff = Math.abs(shiftedCharCode - 1 - 90) % 26

          while (diff % 26 >= 26) {
            diff = diff % 26
          }
          shiftedCharCode = 65 + diff
          result = shiftedCharCode
        }
      } else if (charCode >= 97 && charCode <= 122) {
        if (shiftedCharCode <= 96) {
          let diff = Math.abs(97 - 1 - shiftedCharCode) % 26

          while (diff % 26 >= 26) {
            diff = diff % 26
          }
          shiftedCharCode = 122 - diff
          result = shiftedCharCode
        } else if (shiftedCharCode >= 97 && shiftedCharCode <= 122) {
          result = shiftedCharCode
        } else if (shiftedCharCode > 122) {
          let diff = Math.abs(shiftedCharCode - 1 - 122) % 26

          while (diff % 26 >= 26) {
            diff = diff % 26
          }
          shiftedCharCode = 97 + diff
          result = shiftedCharCode
        }
      }
      return String.fromCharCode(parseInt(result))
    })
    .join('')
	logger.warn(`<<< Exiting caesarCipherEncodeAndDecodeEngine(inStr=${inStr},numShifted=${numShifted})`, { "event.action": "caesarCipherEncodeAndDecodeEngine", "logrite.inStr": inStr, "logrite.numShifted": numShifted });
}

export { keyFinder }

// > keyFinder('test')
// 0
