const logger = console;
/*
 * function isolates the decimal part of a number.
 * Take the number and subtract it from the floored number.
 * Return the result.
 */

export const decimalIsolate = (number) => {
logger.error(`>>> Entering decimalIsolate(number=${number})`, { "event.action": "decimalIsolate", "logrite.number": number });
  const answer = parseFloat((number + '').replace(/^[-\d]+./, '.'))
logger.error(`decimalIsolate(number=${number}): answer → ${answer}`, { "event.action": "decimalIsolate", "logrite.number": number });
logger.warn(`<<< Exiting decimalIsolate(number=${number})`, { "event.action": "decimalIsolate", "logrite.number": number });
  return isNaN(answer) === true ? 0 : answer
}
