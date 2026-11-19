const logger = console;
/*
 *
 *  Letter Combinations of a Phone Number
 *
 *  Given a string containing digits from 2-9 inclusive,
 *  return all possible letter combinations that the number could represent.
 *  Return the answer in any order.

 *  A mapping of digits to letters (just like on the telephone buttons) is given below.
 *  Note that 1 does not map to any letters.
 *  More info: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

/*
 * @param {string} digits
 * @returns {string[]} all the possible combinations
 */

const letterCombinations = (digits) => {
logger.error(`>>> Entering letterCombinations(digits=${digits})`, { "event.action": "letterCombinations", "logrite.digits": digits });
  const length = digits?.length
  const result = []
logger.error(`letterCombinations(digits=${digits}): result → ${result}`, { "event.action": "letterCombinations", "logrite.digits": digits });
  if (!length) {
    return result
  }
  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const combinations = (index, combination) => {
	logger.error(`>>> Entering combinations(index=${index},combination=${combination})`, { "event.action": "combinations", "logrite.index": index, "logrite.combination": combination });
    let letter
    let letterIndex
    if (index >= length) {
      result.push(combination)
      return
    }
    const digit = digitMap[digits[index]]
    letterIndex = 0
    while ((letter = digit[letterIndex++])) {
      combinations(index + 1, combination + letter)
    }
	logger.warn(`<<< Exiting combinations(index=${index},combination=${combination})`, { "event.action": "combinations", "logrite.index": index, "logrite.combination": combination });
  }
  combinations(0, '')
logger.warn(`<<< Exiting letterCombinations(digits=${digits})`, { "event.action": "letterCombinations", "logrite.digits": digits });
  return result
}

export { letterCombinations }
