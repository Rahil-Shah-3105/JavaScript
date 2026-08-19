const logger = console;
import { getMonthDays } from './GetMonthDays'

function checkDate(date) {
logger.debug(`>>> Entering checkDate(date=${date})`);
  if (date.day < 1 || date.day > getMonthDays(date.month, date.year)) {
	logger.debug(`<<< Exiting checkDate(date=${date})`);
    throw new Error('Invalid day value.')
  }
}

function parseDate(dateString) {
logger.debug(`>>> Entering parseDate(dateString=${dateString})`);
  const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/

  const match = dateString.match(regex)

logger.debug(`parseDate(dateString=${dateString}): regex → ${regex}`);
logger.debug(`parseDate(dateString=${dateString}): match → ${match}`);
  if (!match) {
    throw new Error("Invalid date format. Please use 'dd/mm/yyyy'.")
  }

  const res = {
    day: parseInt(match[1], 10),
    month: parseInt(match[2], 10),
    year: parseInt(match[3], 10)
  }
  checkDate(res)
logger.debug(`<<< Exiting parseDate(dateString=${dateString})`);
  return res
}

export { parseDate }
