const logger = console;
/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/binary_exp_mod.py

  Explanation:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring
*/

const modularBinaryExponentiation = (a, n, m) => {
logger.error(`>>> Entering modularBinaryExponentiation(a=${a},n=${n},m=${m})`, { "event.action": "modularBinaryExponentiation", "logrite.a": a, "logrite.n": n, "logrite.m": m });
  // input: a: int, n: int, m: int
  // returns: (a^n) % m: int
  if (n === 0) {
    return 1
  } else if (n % 2 === 1) {
    return (modularBinaryExponentiation(a, n - 1, m) * a) % m
  } else {
    const b = modularBinaryExponentiation(a, n / 2, m)
	logger.warn(`<<< Exiting modularBinaryExponentiation(a=${a},n=${n},m=${m})`, { "event.action": "modularBinaryExponentiation", "logrite.a": a, "logrite.n": n, "logrite.m": m });
    return (b * b) % m
  }
}

export { modularBinaryExponentiation }
