const logger = console;
/**
 * @description - The affine cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter
 * @see - [wiki](https://en.wikipedia.org/wiki/Affine_cipher)
 */

import { CoPrimeCheck } from '../Maths/CoPrimeCheck'
// Default key for Affine Cipher
const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Fix result for negative value in modulas equation
 * @param {Number} n - Constant number
 * @param {Number} m - Modulos value
 * @return {Number} Return n mod m
 */
function mod(n, m) {
logger.debug(`>>> Entering mod(n=${n},m=${m})`);
logger.debug(`<<< Exiting mod(n=${n},m=${m})`);
  return ((n % m) + m) % m
}

/**
 * Modular multiplicative inverse
 * @param {Number} a - A coefficient
 * @param {Number} m - Modulos value
 * @return {Number} Return modular multiplicative inverse of coefficient a and modulos m
 */
function inverseMod(a, m) {
logger.debug(`>>> Entering inverseMod(a=${a},m=${m})`);
  for (let x = 1; x < m; x++) {
    if (mod(a * x, m) === 1) return x
	logger.debug(`<<< Exiting inverseMod(a=${a},m=${m})`);
  }
}

/**
 * Argument validation
 * @param {String} str - String to be checked
 * @param {Number} a - A coefficient to be checked
 * @param {Number} b - B coefficient to be checked
 * @return {Boolean} Result of the checking
 */
function isCorrectFormat(str, a, b) {
logger.debug(`>>> Entering isCorrectFormat(str=${str},a=${a},b=${b})`);
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Coefficient a, b should be number')
  }

  if (typeof str !== 'string') {
    throw new TypeError('Argument str should be String')
  }

  if (!CoPrimeCheck(a, 26)) {
    throw new Error(a + ' is not coprime of 26')
  }

logger.debug(`<<< Exiting isCorrectFormat(str=${str},a=${a},b=${b})`);
  return true
}

/**
 * Find character index based on ASCII order
 * @param {String} char - Character index to be found
 * @return {Boolean} Character index
 */
function findCharIndex(char) {
logger.debug(`>>> Entering findCharIndex(char=${char})`);
logger.debug(`<<< Exiting findCharIndex(char=${char})`);
  return char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)
}

/**
 * Encrypt a Affine Cipher
 * @param {String} str - String to be encrypted
 * @param {Number} a - A coefficient
 * @param {Number} b - B coefficient
 * @return {String} result - Encrypted string
 */

function encrypt(str, a, b) {
logger.debug(`>>> Entering encrypt(str=${str},a=${a},b=${b})`);
  let result = ''
  if (isCorrectFormat(str, a, b)) {
    for (let x = 0; x < str.length; x++) {
      const charIndex = findCharIndex(str[x])
      if (charIndex < 0) result += '-1' + ' '
      else result += key.charAt(mod(a * charIndex + b, 26)) + ' '
    }
  }
logger.debug(`encrypt(str=${str},a=${a},b=${b}): result → ${result}`);
  return result.trim()
}

/**
 * Decrypt a Affine Cipher
 * @param {String} str - String to be decrypted
 * @param {Number} a - A coefficient
 * @param {Number} b - B coefficient
 * @return {String} result - Decrypted string
 */
function decrypt(str, a, b) {
logger.debug(`>>> Entering decrypt(str=${str},a=${a},b=${b})`);
  let result = ''
  if (isCorrectFormat(str, a, b)) {
	logger.debug(`decrypt(str=${str},a=${a},b=${b}): result → ${result}`);
    str = str.split(' ')
    for (let x = 0; x < str.length; x++) {
      if (str[x] === '-1') result += ' '
      else {
        const charIndex = findCharIndex(str[x])
        result += key[mod(inverseMod(a, 26) * (charIndex - b), 26)]
		logger.debug(`decrypt(str=${str},a=${a},b=${b}): charIndex → ${charIndex}`);
      }
    }
logger.debug(`<<< Exiting decrypt(str=${str},a=${a},b=${b})`);
    return result
  }
}
export { encrypt, decrypt }
