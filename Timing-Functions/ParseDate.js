const logger = console;
import { getMonthDays } from './GetMonthDays'

function checkDate(date) {
logger.error(`>>> Entering checkDate(date=${date})`, { "event.action": "checkDate", "logrite.date": date });
  if (date.day < 1 || date.day > getMonthDays(date.month, date.year)) {
    throw new Error('Invalid day value.')
  }
	logger.warn(`<<< Exiting checkDate(date=${date})`, { "event.action": "checkDate", "logrite.date": date });
}

function parseDate(dateString) {
logger.error(`>>> Entering parseDate(dateString=${dateString})`, { "event.action": "parseDate", "logrite.dateString": dateString });
  const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/

logger.error(`parseDate(dateString=${dateString}): regex → ${regex}`, { "event.action": "parseDate", "logrite.dateString": dateString });
  const match = dateString.match(regex)

logger.error(`parseDate(dateString=${dateString}): match → ${match}`, { "event.action": "parseDate", "logrite.dateString": dateString });
  if (!match) {
    throw new Error("Invalid date format. Please use 'dd/mm/yyyy'.")
  }

  const res = {
    day: parseInt(match[1], 10),
    month: parseInt(match[2], 10),
    year: parseInt(match[3], 10)
  }
  checkDate(res)
logger.warn(`<<< Exiting parseDate(dateString=${dateString})`, { "event.action": "parseDate", "logrite.dateString": dateString });
  return res
}

export { parseDate }
