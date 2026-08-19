const logger = console;
/**
 * Check if the Character is letter or not
 * @param {String} str - character to check
 * @return {object} An array with the character or null if isn't a letter
 */
function isLetter(str) {
logger.debug(`>>> Entering isLetter(str=${str})`);
logger.debug(`<<< Exiting isLetter(str=${str})`);
  return str.length === 1 && str.match(/[a-zA-Z]/i)
}

/**
 * Check if is Uppercase or Lowercase
 * @param {String} character - character to check
 * @return {Boolean} result of the checking
 */
function isUpperCase(character) {
logger.debug(`>>> Entering isUpperCase(character=${character})`);
  if (character === character.toUpperCase()) {
    return true
  }
  if (character === character.toLowerCase()) {
logger.debug(`<<< Exiting isUpperCase(character=${character})`);
    return false
  }
}

/**
 * Encrypt a Vigenere cipher
 * @param {String} message - string to be encrypted
 * @param {String} key - key for encrypt
 * @return {String} result - encrypted string
 */
function encrypt(message, key) {
logger.debug(`>>> Entering encrypt(message=${message},key=${key})`);
  let result = ''

logger.debug(`encrypt(message=${message},key=${key}): result → ${result}`);
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
	logger.debug(`encrypt(message=${message},key=${key}): c → ${c}`);
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26) +
            65
        ) // A: 65
      } else {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26) +
            97
        ) // a: 97
      }
    } else {
      result += c
    }
    j = ++j % key.length
  }
logger.debug(`<<< Exiting encrypt(message=${message},key=${key})`);
  return result
}

/**
 * Decrypt a Vigenere cipher
 * @param {String} message - string to be decrypted
 * @param {String} key - key for decrypt
 * @return {String} result - decrypted string
 */
function decrypt(message, key) {
logger.debug(`>>> Entering decrypt(message=${message},key=${key})`);
  let result = ''

logger.debug(`decrypt(message=${message},key=${key}): result → ${result}`);
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
	logger.debug(`decrypt(message=${message},key=${key}): c → ${c}`);
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          90 - ((25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        )
      } else {
        result += String.fromCharCode(
          122 -
            ((25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
        )
      }
    } else {
      result += c
    }
    j = ++j % key.length
  }
logger.debug(`<<< Exiting decrypt(message=${message},key=${key})`);
  return result
}

export { encrypt, decrypt }

// > encrypt('Hello World!', 'code')
// 'Jsopq Zstzg!'

// > decrypt('Jsopq Zstzg!', 'code')
// 'Hello World!'
