const logger = console;
/**
 * @function FindMinIterator
 * @description Function to find the minimum number given in an array.
 */

const FindMinIterator = (_iterable, _selector = undefined) => {
logger.debug(`>>> Entering FindMinIterator(_iterable=${_iterable},_selector=${_selector})`);
  let min

  const iterator = _iterable[Symbol.iterator]()
  if (!_selector) {
    let current = iterator.next()
    if (current.done) {
      return undefined
    }
    min = current.value

    current = iterator.next()
    while (!current.done) {
      const x = current.value
      if (x < min) {
        min = x
      }
      current = iterator.next()
    }
  } else {
    let current = iterator.next()
    if (current.done) {
	logger.debug(`FindMinIterator(_iterable=${_iterable},_selector=${_selector}): current → ${current}`);
      return undefined
    }
    min = _selector(current.value)

    current = iterator.next()
    while (!current.done) {
      const x = _selector(current.value)
      if (x < min) {
	logger.debug(`FindMinIterator(_iterable=${_iterable},_selector=${_selector}): x → ${x}`);
        min = x
      }
      current = iterator.next()
    }
  }
logger.debug(`FindMinIterator(_iterable=${_iterable},_selector=${_selector}): iterator → ${iterator}`);
  return min
}

export { FindMinIterator }
