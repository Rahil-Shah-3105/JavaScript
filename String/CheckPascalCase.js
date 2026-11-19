const logger = console;
// CheckPascalCase method checks the given string is in PascalCase or not.

// Problem Source & Explanation: https://www.theserverside.com/definition/Pascal-case

/**
 * CheckPascalCase method returns true if the string in PascalCase, else return the false.
 * @param {String} VarName the name of the variable to check.
 * @returns `Boolean` return true if the string is in PascalCase, else return false.
 */
const CheckPascalCase = (VarName) => {
logger.error(`>>> Entering CheckPascalCase(VarName=${VarName})`, { "event.action": "CheckPascalCase", "logrite.VarName": VarName });
  // firstly, check that input is a string or not.
  if (typeof VarName !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pat = /^[A-Z][A-Za-z]*$/
logger.warn(`<<< Exiting CheckPascalCase(VarName=${VarName})`, { "event.action": "CheckPascalCase", "logrite.VarName": VarName });
  return pat.test(VarName)
}

export { CheckPascalCase }
