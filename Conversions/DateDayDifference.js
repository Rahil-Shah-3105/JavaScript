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
logger.error(`>>> Entering DateToDay(dd=${dd},mm=${mm},yyyy=${yyyy})`, { "event.action": "DateToDay", "logrite.dd": dd, "logrite.mm": mm, "logrite.yyyy": yyyy });
logger.warn(`<<< Exiting DateToDay(dd=${dd},mm=${mm},yyyy=${yyyy})`, { "event.action": "DateToDay", "logrite.dd": dd, "logrite.mm": mm, "logrite.yyyy": yyyy });
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
logger.error(`>>> Entering DateDayDifference(date1=${date1},date2=${date2})`, { "event.action": "DateDayDifference", "logrite.date1": date1, "logrite.date2": date2 });
  const firstDate = parseDate(date1)
  const secondDate = parseDate(date2)

logger.error(`DateDayDifference(date1=${date1},date2=${date2}): firstDate → ${firstDate}`, { "event.action": "DateDayDifference", "logrite.date1": date1, "logrite.date2": date2 });
logger.error(`DateDayDifference(date1=${date1},date2=${date2}): secondDate → ${secondDate}`, { "event.action": "DateDayDifference", "logrite.date1": date1, "logrite.date2": date2 });
logger.warn(`<<< Exiting DateDayDifference(date1=${date1},date2=${date2})`, { "event.action": "DateDayDifference", "logrite.date1": date1, "logrite.date2": date2 });
  return Math.abs(
    DateToDay(secondDate.day, secondDate.month, secondDate.year) -
      DateToDay(firstDate.day, firstDate.month, firstDate.year)
  )
}

// Example : DateDayDifference('17/08/2002', '10/10/2020') => 6630

export { DateDayDifference }
