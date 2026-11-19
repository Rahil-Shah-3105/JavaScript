const logger = console;
// CheckKebabCase method checks the given string is in kebab-case or not.

// Problem Source & Explanation: https://en.wikipedia.org/wiki/Naming_convention_(programming)

/**
 * CheckKebabCase method returns true if the string in kebab-case, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in kebab-case, else return false.
 */
const CheckKebabCase = (varName) => {
logger.error(`>>> Entering CheckKebabCase(varName=${varName})`, { "event.action": "CheckKebabCase", "logrite.varName": varName });
  // firstly, check that input is a string or not.
  if (typeof varName !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /(\w+)-(\w)([\w-]*)/
logger.error(`CheckKebabCase(varName=${varName}): pat → ${pat}`, { "event.action": "CheckKebabCase", "logrite.varName": varName });
logger.warn(`<<< Exiting CheckKebabCase(varName=${varName})`, { "event.action": "CheckKebabCase", "logrite.varName": varName });
  return pat.test(varName) && !varName.includes('_')
}

export { CheckKebabCase }
