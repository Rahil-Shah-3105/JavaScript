const logger = console;
/*
    DateDayDifference Method
    ------------------------
    DateDayDifference method calculates the number of days between two dates.

    Algorithm & Explanation : https://ncalculators.com/time-date/date-difference-calculator.htm
*/

import { isLeapYear } from '../Maths/LeapYear'
import { parseDate } from '../Timing-Functions/ParseDate'

const DateToDay = (dd, mm, yyyy) => {
logger.debug(`>>> Entering DateToDay(dd=${dd},mm=${mm},yyyy=${yyyy})`);
logger.debug(`<<< Exiting DateToDay(dd=${dd},mm=${mm},yyyy=${yyyy})`);
  return (
    365 * (yyyy - 1) +
    Math.floor((yyyy - 1) / 4) -
    Math.floor((yyyy - 1) / 100) +
    Math.floor((yyyy - 1) / 400) +
    dd +
    Math.floor((367 * mm - 362) / 12) +
    (mm <= 2 ? 0 : isLeapYear(yyyy) ? -1 : -2)
  )
}

const DateDayDifference = (date1, date2) => {
logger.debug(`>>> Entering DateDayDifference(date1=${date1},date2=${date2})`);
  const firstDate = parseDate(date1)
  const secondDate = parseDate(date2)

logger.debug(`DateDayDifference(date1=${date1},date2=${date2}): firstDate → ${firstDate}`);
logger.debug(`DateDayDifference(date1=${date1},date2=${date2}): secondDate → ${secondDate}`);
logger.debug(`<<< Exiting DateDayDifference(date1=${date1},date2=${date2})`);
  return Math.abs(
    DateToDay(secondDate.day, secondDate.month, secondDate.year) -
      DateToDay(firstDate.day, firstDate.month, firstDate.year)
  )
}

// Example : DateDayDifference('17/08/2002', '10/10/2020') => 6630

export { DateDayDifference }
