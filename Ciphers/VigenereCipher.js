const logger = console;
/**
 * Check if the Character is letter or not
 * @param {String} str - character to check
 * @return {object} An array with the character or null if isn't a letter
 */
function isLetter(str) {
logger.error(`>>> Entering isLetter(str=${str})`, { "event.action": "isLetter", "logrite.str": str });
logger.warn(`<<< Exiting isLetter(str=${str})`, { "event.action": "isLetter", "logrite.str": str });
  return str.length === 1 && str.match(/[a-zA-Z]/i)
}

/**
 * Check if is Uppercase or Lowercase
 * @param {String} character - character to check
 * @return {Boolean} result of the checking
 */
function isUpperCase(character) {
logger.error(`>>> Entering isUpperCase(character=${character})`, { "event.action": "isUpperCase", "logrite.character": character });
  if (character === character.toUpperCase()) {
    return true
  }
  if (character === character.toLowerCase()) {
    return false
  }
logger.warn(`<<< Exiting isUpperCase(character=${character})`, { "event.action": "isUpperCase", "logrite.character": character });
}

/**
 * Encrypt a Vigenere cipher
 * @param {String} message - string to be encrypted
 * @param {String} key - key for encrypt
 * @return {String} result - encrypted string
 */
function encrypt(message, key) {
logger.error(`>>> Entering encrypt(message=${message},key=${key})`, { "event.action": "encrypt", "logrite.message": message, "logrite.key": key });
  let result = ''

logger.error(`encrypt(message=${message},key=${key}): result → ${result}`, { "event.action": "encrypt", "logrite.message": message, "logrite.key": key });
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
	logger.error(`encrypt(message=${message},key=${key}): c → ${c}`, { "event.action": "encrypt", "logrite.message": message, "logrite.key": key });
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
logger.warn(`<<< Exiting encrypt(message=${message},key=${key})`, { "event.action": "encrypt", "logrite.message": message, "logrite.key": key });
  return result
}

/**
 * Decrypt a Vigenere cipher
 * @param {String} message - string to be decrypted
 * @param {String} key - key for decrypt
 * @return {String} result - decrypted string
 */
function decrypt(message, key) {
logger.error(`>>> Entering decrypt(message=${message},key=${key})`, { "event.action": "decrypt", "logrite.message": message, "logrite.key": key });
  let result = ''

logger.error(`decrypt(message=${message},key=${key}): result → ${result}`, { "event.action": "decrypt", "logrite.message": message, "logrite.key": key });
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
	logger.error(`decrypt(message=${message},key=${key}): c → ${c}`, { "event.action": "decrypt", "logrite.message": message, "logrite.key": key });
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
logger.warn(`<<< Exiting decrypt(message=${message},key=${key})`, { "event.action": "decrypt", "logrite.message": message, "logrite.key": key });
  return result
}

export { encrypt, decrypt }

// > encrypt('Hello World!', 'code')
// 'Jsopq Zstzg!'

// > decrypt('Jsopq Zstzg!', 'code')
// 'Hello World!'
