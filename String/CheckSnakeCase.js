const logger = console;
// CheckSnakeCase method checks the given string is in snake_case or not.

// Problem Source & Explanation: https://en.wikipedia.org/wiki/Naming_convention_(programming)

/**
 * checkSnakeCase method returns true if the string in snake_case, else return the false.
 * @param {String} varName the name of the variable to check.
 * @returns `Boolean` return true if the string is in snake_case, else return false.
 */
const checkSnakeCase = (varName) => {
logger.debug(`>>> Entering checkSnakeCase(varName=${varName})`);
  // firstly, check that input is a string or not.
  if (typeof varName !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /(.*?)_([a-zA-Z])*/
logger.debug(`checkSnakeCase(varName=${varName}): pat → ${pat}`);
logger.debug(`<<< Exiting checkSnakeCase(varName=${varName})`);
  return pat.test(varName)
}

export { checkSnakeCase }
