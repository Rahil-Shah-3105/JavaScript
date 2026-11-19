const logger = console;
/*
 *  This algorithm accepts a month in the format mm/yyyy.
 *  And prints out the month's calendar.
 *  It uses an epoch of 1/1/1900, Monday.
 */
import { isLeapYear } from '../Maths/LeapYear'

class Month {
  constructor() {
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
    this.Days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su']
    this.BDays = ['M', 'Su', 'S', 'F', 'Th', 'W', 'T']
	logger.debug(`constructor(): this.Days → ${this.Days}`, { "event.action": "constructor" });
	logger.debug(`constructor(): this.BDays → ${this.BDays}`, { "event.action": "constructor" });
    this.epoch = { month: 1, year: 1900 }
    this.monthDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	logger.debug(`constructor(): this.epoch → ${this.epoch}`, { "event.action": "constructor" });
    this.monthDaysLeap = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	logger.debug(`constructor(): this.monthDaysLeap → ${this.monthDaysLeap}`, { "event.action": "constructor" });
  }

  printCal(days, startDay, output = (value) => console.log(value)) {
    output('M   T   W   Th  F   S   Su')
    const dates = []
    let i
    for (i = 1; i <= days; i++) {
      dates.push(i)
    }
    for (i = 0; i < this.Days.indexOf(startDay); i++) {
      dates.unshift(' ')
    }
    while (true) {
      let row = ''
      for (i = 0; i < 7 && dates.length !== 0; i++) {
        row += dates.shift()
        while (row.length % 4 !== 0) {
          row += ' '
        }
      }
      output(row)
      if (dates.length === 0) break
    }
  }

  parseDate(date) {
	logger.error(`>>> Entering parseDate(date=${date})`, { "event.action": "parseDate", "logrite.date": date });
    const dateAr = []
    let block = ''
	logger.error(`parseDate(date=${date}): block → ${block}`, { "event.action": "parseDate", "logrite.date": date });
    let i
    for (i = 0; i < date.length; i++) {
      if (date[i] === '/') {
        dateAr.push(parseInt(block))
        block = ''
        continue
      }
      block += date[i]
    }
    dateAr.push(parseInt(block))
    if (dateAr.length !== 2) throw new Error('Improper string encoding')
    const dateOb = { month: dateAr[0], year: dateAr[1] }
	logger.warn(`<<< Exiting parseDate(date=${date})`, { "event.action": "parseDate", "logrite.date": date });
    return dateOb
  }

  isGreater(startDate, endDate) {
	logger.error(`>>> Entering isGreater(startDate=${startDate},endDate=${endDate})`, { "event.action": "isGreater", "logrite.startDate": startDate, "logrite.endDate": endDate });
    if (startDate.year > endDate.year) {
      return true
    } else if (startDate.year < endDate.year) {
      return false
    } else if (startDate.month > endDate.month) {
      return true
    } else if (startDate.month < endDate.month) {
      return false
    }
	logger.warn(`<<< Exiting isGreater(startDate=${startDate},endDate=${endDate})`, { "event.action": "isGreater", "logrite.startDate": startDate, "logrite.endDate": endDate });
    return true
  }

  getDayDiff(startDate, endDate) {
	logger.error(`>>> Entering getDayDiff(startDate=${startDate},endDate=${endDate})`, { "event.action": "getDayDiff", "logrite.startDate": startDate, "logrite.endDate": endDate });
    if (this.isGreater(startDate, endDate) === null) {
      return 0
    } else if (this.isGreater(startDate, endDate) === true) {
      const midDate = startDate
      startDate = endDate
      endDate = midDate
    }
    let diff = 0
    while (startDate.year !== endDate.year) {
      diff += isLeapYear(startDate.year) ? 366 : 365
      startDate.year = startDate.year + 1
	logger.debug(`getDayDiff(startDate=${startDate},endDate=${endDate}): startDate.year → ${startDate.year}`, { "event.action": "getDayDiff", "logrite.startDate": startDate, "logrite.endDate": endDate });
    }
    while (startDate.month !== endDate.month) {
      if (startDate.month < endDate.month) {
        if (isLeapYear(startDate.year))
          diff += this.monthDaysLeap[startDate.month]
        else diff += this.monthDays[startDate.month]
        startDate.month = startDate.month + 1
      } else {
        if (isLeapYear(startDate.year))
          diff -= this.monthDaysLeap[startDate.month - 1]
        else diff -= this.monthDays[startDate.month - 1]
        startDate.month = startDate.month - 1
      }
    }
	logger.warn(`<<< Exiting getDayDiff(startDate=${startDate},endDate=${endDate})`, { "event.action": "getDayDiff", "logrite.startDate": startDate, "logrite.endDate": endDate });
    return diff
  }

  generateMonthCal(date) {
	logger.error(`>>> Entering generateMonthCal(date=${date})`, { "event.action": "generateMonthCal", "logrite.date": date });
    const Month = this.parseDate(date)
    let day = ''
	logger.error(`generateMonthCal(date=${date}): Month → ${Month}`, { "event.action": "generateMonthCal", "logrite.date": date });
	logger.error(`generateMonthCal(date=${date}): day → ${day}`, { "event.action": "generateMonthCal", "logrite.date": date });
    let difference = this.getDayDiff(this.epoch, Month)
    difference = difference % 7
	logger.error(`generateMonthCal(date=${date}): difference → ${difference}`, { "event.action": "generateMonthCal", "logrite.date": date });
    let Month2 = this.parseDate(date)
    day = this.isGreater(Month2, this.epoch)
      ? this.Days[difference]
      : this.BDays[difference]
    Month2 = this.parseDate(date)
    if (isLeapYear(Month2.year))
      this.printCal(this.monthDaysLeap[Month2.month], day)
    else this.printCal(this.monthDays[Month2.month], day)
	logger.warn(`<<< Exiting generateMonthCal(date=${date})`, { "event.action": "generateMonthCal", "logrite.date": date });
  }
}

export { Month }

// const x = new Month()
// x.generateMonthCal('1/2021')
