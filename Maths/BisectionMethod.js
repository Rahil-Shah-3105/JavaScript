const logger = console;
/**
 *
 * @file
 * @brief Find real roots of a function in a specified interval [a, b], where f(a)*f(b) < 0
 *
 * @details Given a function f(x) and an interval [a, b], where f(a) * f(b) < 0, find an approximation of the root
 * by calculating the middle m = (a + b) / 2, checking f(m) * f(a) and f(m) * f(b) and then by choosing the
 * negative product that means Bolzano's theorem is applied,, define the new interval with these points. Repeat until
 * we get the precision we want [Wikipedia](https://en.wikipedia.org/wiki/Bisection_method)
 *
 * @author [ggkogkou](https://github.com/ggkogkou)
 *
 */

const findRoot = (a, b, func, numberOfIterations) => {
logger.error(`>>> Entering findRoot(a=${a},b=${b},func=${func},numberOfIterations=${numberOfIterations})`, { "event.action": "findRoot", "logrite.a": a, "logrite.b": b, "logrite.func": func, "logrite.numberOfIterations": numberOfIterations });
  // Check if a given  real value belongs to the function's domain
  const belongsToDomain = (x, f) => {
	logger.error(`>>> Entering belongsToDomain(x=${x},f=${f})`, { "event.action": "belongsToDomain", "logrite.x": x, "logrite.f": f });
    const res = f(x)
	logger.error(`belongsToDomain(x=${x},f=${f}): res → ${res}`, { "event.action": "belongsToDomain", "logrite.x": x, "logrite.f": f });
	logger.warn(`<<< Exiting belongsToDomain(x=${x},f=${f})`, { "event.action": "belongsToDomain", "logrite.x": x, "logrite.f": f });
    return !Number.isNaN(res)
  }
  if (!belongsToDomain(a, func) || !belongsToDomain(b, func))
    throw Error("Given interval is not a valid subset of function's domain")

  // Bolzano theorem
  const hasRoot = (a, b, func) => {
	logger.error(`>>> Entering hasRoot(a=${a},b=${b},func=${func})`, { "event.action": "hasRoot", "logrite.a": a, "logrite.b": b, "logrite.func": func });
	logger.warn(`<<< Exiting hasRoot(a=${a},b=${b},func=${func})`, { "event.action": "hasRoot", "logrite.a": a, "logrite.b": b, "logrite.func": func });
    return func(a) * func(b) <= 0
  }
  if (hasRoot(a, b, func) === false) {
    throw Error(
      'Product f(a)*f(b) has to be negative so that Bolzano theorem is applied'
    )
  }

  // Declare m
  const m = (a + b) / 2
logger.error(`findRoot(a=${a},b=${b},func=${func},numberOfIterations=${numberOfIterations}): m → ${m}`, { "event.action": "findRoot", "logrite.a": a, "logrite.b": b, "logrite.func": func, "logrite.numberOfIterations": numberOfIterations });

  // Recursion terminal condition
  if (numberOfIterations === 0) {
    return m
  }

  // Find the products of f(m) and f(a), f(b)
  const fm = func(m)
  const prod1 = fm * func(a)
  const prod2 = fm * func(b)

logger.error(`findRoot(a=${a},b=${b},func=${func},numberOfIterations=${numberOfIterations}): fm → ${fm}`, { "event.action": "findRoot", "logrite.a": a, "logrite.b": b, "logrite.func": func, "logrite.numberOfIterations": numberOfIterations });
  // Depending on the sign of the products above, decide which position will m fill (a's or b's)
  if (prod2 <= 0) return findRoot(m, b, func, --numberOfIterations)

  return findRoot(a, m, func, --numberOfIterations)
}

export { findRoot }
