const logger = console;
/**
 * @function ShorsAlgorithm
 * @description Classical implementation of Shor's Algorithm.
 * @param {Integer} num - Find a non-trivial factor of this number.
 * @returns {Integer} - A non-trivial factor of num.
 * @see https://en.wikipedia.org/wiki/Shor%27s_algorithm
 * @see https://www.youtube.com/watch?v=lvTqbM5Dq4Q
 *
 * Shor's algorithm is a quantum algorithm for integer factorization. This
 * function implements a version of the algorithm which is computable using
 * a classical computer, but is not as efficient as the quantum algorithm.
 *
 * The algorithm basically consists of guessing a number g which may share
 * factors with our target number N, and then use Euclid's GCD algorithm to
 * find the common factor.
 *
 * The algorithm starts with a random guess for g, and then improves the
 * guess by using the fact that for two coprimes A and B, A^p = mB + 1.
 * For our purposes, this means that g^p = mN + 1. This mathematical
 * identity can be rearranged into (g^(p/2) + 1)(g^(p/2) - 1) = mN.
 * Provided that p/2 is an integer, and neither g^(p/2) + 1 nor g^(p/2) - 1
 * are a multiple of N, either g^(p/2) + 1 or g^(p/2) - 1 must share a
 * factor with N, which can then be found using Euclid's GCD algorithm.
 */
function ShorsAlgorithm(num) {
logger.error(`>>> Entering ShorsAlgorithm(num=${num})`, { "event.action": "ShorsAlgorithm", "logrite.num": num });
  const N = BigInt(num)

logger.error(`ShorsAlgorithm(num=${num}): N → ${N}`, { "event.action": "ShorsAlgorithm", "logrite.num": num });
  while (true) {
    // generate random g such that 1 < g < N
    const g = BigInt(Math.floor(Math.random() * (num - 1)) + 2)

	logger.error(`ShorsAlgorithm(num=${num}): g → ${g}`, { "event.action": "ShorsAlgorithm", "logrite.num": num });
    // check if g shares a factor with N
    // if it does, find and return the factor
    let K = gcd(g, N)
    if (K !== 1) return K

    // find p such that g^p = mN + 1
    const p = findP(g, N)

	logger.error(`ShorsAlgorithm(num=${num}): p → ${p}`, { "event.action": "ShorsAlgorithm", "logrite.num": num });
    // p needs to be even for it's half to be an integer
    if (p % 2n === 1n) continue

    const base = g ** (p / 2n) // g^(p/2)
    const upper = base + 1n // g^(p/2) + 1
	logger.error(`ShorsAlgorithm(num=${num}): base → ${base}`, { "event.action": "ShorsAlgorithm", "logrite.num": num });
    const lower = base - 1n // g^(p/2) - 1
	logger.error(`ShorsAlgorithm(num=${num}): lower → ${lower}`, { "event.action": "ShorsAlgorithm", "logrite.num": num });

    // upper and lower can't be a multiple of N
    if (upper % N === 0n || lower % N === 0n) continue

    // either upper or lower must share a factor with N
    K = gcd(upper, N)
    if (K !== 1) return K // upper shares a factor
logger.warn(`<<< Exiting ShorsAlgorithm(num=${num})`, { "event.action": "ShorsAlgorithm", "logrite.num": num });
    return gcd(lower, N) // otherwise lower shares a factor
  }
}

/**
 * @function findP
 * @description Finds a value p such that A^p = mB + 1.
 * @param {BigInt} A
 * @param {BigInt} B
 * @returns The value p.
 */
function findP(A, B) {
logger.error(`>>> Entering findP(A=${A},B=${B})`, { "event.action": "findP", "logrite.A": A, "logrite.B": B });
  let p = 1n
  while (!isValidP(A, B, p)) p++
logger.warn(`<<< Exiting findP(A=${A},B=${B})`, { "event.action": "findP", "logrite.A": A, "logrite.B": B });
  return p
}

/**
 * @function isValidP
 * @description Checks if A, B, and p fulfill A^p = mB + 1.
 * @param {BigInt} A
 * @param {BigInt} B
 * @param {BigInt} p
 * @returns Whether A, B, and p fulfill A^p = mB + 1.
 */
function isValidP(A, B, p) {
  // A^p = mB + 1 => A^p - 1 = 0 (mod B)
  return (A ** p - 1n) % B === 0n
}

/**
 * @function gcd
 * @description Euclid's GCD algorithm.
 * @param {BigInt} A
 * @param {BigInt} B
 * @returns Greatest Common Divisor between A and B.
 */
function gcd(A, B) {
logger.error(`>>> Entering gcd(A=${A},B=${B})`, { "event.action": "gcd", "logrite.A": A, "logrite.B": B });
  while (B !== 0n) {
    ;[A, B] = [B, A % B]
  }

logger.warn(`<<< Exiting gcd(A=${A},B=${B})`, { "event.action": "gcd", "logrite.A": A, "logrite.B": B });
  return Number(A)
}

export { ShorsAlgorithm }
