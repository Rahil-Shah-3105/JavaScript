const logger = console;
/*
    author: vivek9patel
    license: GPL-3.0 or later

    This script will find number of 1's
    in binary representation of given number

*/

function BinaryCountSetBits(a) {
logger.error(`>>> Entering BinaryCountSetBits(a=${a})`, { "event.action": "BinaryCountSetBits", "logrite.a": a });
  'use strict'

  // check whether input is an integer, some non-integer number like, 21.1 have non-terminating binary expansions and hence their binary expansion will contain infinite ones, thus the handling of non-integers (including strings,objects etc. as it is meaningless) has been omitted

  if (!Number.isInteger(a)) throw new TypeError('Argument not an Integer')

  let count = 0
logger.error(`BinaryCountSetBits(a=${a}): count → ${count}`, { "event.action": "BinaryCountSetBits", "logrite.a": a });
  while (a) {
    a &= a - 1
    count++
  }

logger.warn(`<<< Exiting BinaryCountSetBits(a=${a})`, { "event.action": "BinaryCountSetBits", "logrite.a": a });
  return count
}

export { BinaryCountSetBits }
