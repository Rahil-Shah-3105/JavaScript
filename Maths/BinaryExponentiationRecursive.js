const logger = console;
/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/binary_exponentiation.py

  Explanation:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring
*/

export const binaryExponentiation = (a, n) => {
logger.error(`>>> Entering binaryExponentiation(a=${a},n=${n})`, { "event.action": "binaryExponentiation", "logrite.a": a, "logrite.n": n });
  // input: a: int, n: int
  // returns: a^n: int
  if (n === 0) {
    return 1
  } else if (n % 2 === 1) {
    return binaryExponentiation(a, n - 1) * a
  } else {
    const b = binaryExponentiation(a, n / 2)
	logger.error(`binaryExponentiation(a=${a},n=${n}): b → ${b}`, { "event.action": "binaryExponentiation", "logrite.a": a, "logrite.n": n });
logger.warn(`<<< Exiting binaryExponentiation(a=${a},n=${n})`, { "event.action": "binaryExponentiation", "logrite.a": a, "logrite.n": n });
    return b * b
  }
}
