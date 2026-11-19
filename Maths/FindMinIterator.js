const logger = console;
/**
 * @function FindMinIterator
 * @description Function to find the minimum number given in an array.
 */

const FindMinIterator = (_iterable, _selector = undefined) => {
logger.error(`>>> Entering FindMinIterator(_iterable=${_iterable},_selector=${_selector})`, { "event.action": "FindMinIterator", "logrite._iterable": _iterable, "logrite._selector": _selector });
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
	logger.error(`FindMinIterator(_iterable=${_iterable},_selector=${_selector}): current → ${current}`, { "event.action": "FindMinIterator", "logrite._iterable": _iterable, "logrite._selector": _selector });
      return undefined
    }
    min = _selector(current.value)

    current = iterator.next()
    while (!current.done) {
      const x = _selector(current.value)
      if (x < min) {
	logger.error(`FindMinIterator(_iterable=${_iterable},_selector=${_selector}): x → ${x}`, { "event.action": "FindMinIterator", "logrite._iterable": _iterable, "logrite._selector": _selector });
        min = x
      }
      current = iterator.next()
    }
  }
logger.error(`FindMinIterator(_iterable=${_iterable},_selector=${_selector}): iterator → ${iterator}`, { "event.action": "FindMinIterator", "logrite._iterable": _iterable, "logrite._selector": _selector });
logger.warn(`<<< Exiting FindMinIterator(_iterable=${_iterable},_selector=${_selector})`, { "event.action": "FindMinIterator", "logrite._iterable": _iterable, "logrite._selector": _selector });
  return min
}

export { FindMinIterator }
