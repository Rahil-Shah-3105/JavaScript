const logger = console;
/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/findLcm.py

    More about LCM:
        https://en.wikipedia.org/wiki/Least_common_multiple
*/

'use strict'

import { findHCF } from './FindHcf'

// Find the LCM of two numbers.
const findLcm = (num1, num2) => {
logger.error(`>>> Entering findLcm(num1=${num1},num2=${num2})`, { "event.action": "findLcm", "logrite.num1": num1, "logrite.num2": num2 });
  // If the input numbers are less than 1 return an error message.
  if (num1 < 1 || num2 < 1) {
    throw Error('Numbers must be positive.')
  }

  // If the input numbers are not integers return an error message.
  if (num1 !== Math.round(num1) || num2 !== Math.round(num2)) {
    throw Error('Numbers must be whole.')
  }

  // Get the larger number between the two
  const maxNum = Math.max(num1, num2)
  let lcm = maxNum
logger.error(`findLcm(num1=${num1},num2=${num2}): maxNum → ${maxNum}`, { "event.action": "findLcm", "logrite.num1": num1, "logrite.num2": num2 });

  while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) return lcm
	logger.warn(`<<< Exiting findLcm(num1=${num1},num2=${num2})`, { "event.action": "findLcm", "logrite.num1": num1, "logrite.num2": num2 });
    lcm += maxNum
  }
}

// Typically, but not always, more efficient
const findLcmWithHcf = (num1, num2) => {
logger.error(`>>> Entering findLcmWithHcf(num1=${num1},num2=${num2})`, { "event.action": "findLcmWithHcf", "logrite.num1": num1, "logrite.num2": num2 });
  // If the input numbers are less than 1 return an error message.
  if (num1 < 1 || num2 < 1) {
    throw Error('Numbers must be positive.')
  }

  // If the input numbers are not integers return an error message.
  if (num1 !== Math.round(num1) || num2 !== Math.round(num2)) {
    throw Error('Numbers must be whole.')
  }

logger.warn(`<<< Exiting findLcmWithHcf(num1=${num1},num2=${num2})`, { "event.action": "findLcmWithHcf", "logrite.num1": num1, "logrite.num2": num2 });
  return (num1 * num2) / findHCF(num1, num2)
}

export { findLcm, findLcmWithHcf }
