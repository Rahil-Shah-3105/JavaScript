const logger = console;
/*
 *  This algorithm accepts a month in the format mm/yyyy.
 *  And prints out the month's calendar.
 *  It uses an epoch of 1/1/1900, Monday.
 */
import { isLeapYear } from '../Maths/LeapYear'

class Month {
  constructor() {
	logger.debug('>>> Entering constructor()');
    this.Days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su']
    this.BDays = ['M', 'Su', 'S', 'F', 'Th', 'W', 'T']
    this.epoch = { month: 1, year: 1900 }
	logger.debug(`constructor(): this.Days → ${this.Days}`);
    this.monthDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.monthDaysLeap = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	logger.debug(`constructor(): this.BDays → ${this.BDays}`);
	logger.debug(`constructor(): this.monthDaysLeap → ${this.monthDaysLeap}`);
	logger.debug('<<< Exiting constructor()');
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
	logger.debug(`>>> Entering parseDate(date=${date})`);
    const dateAr = []
    let block = ''
	logger.debug(`parseDate(date=${date}): block → ${block}`);
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
	logger.debug(`<<< Exiting parseDate(date=${date})`);
    return dateOb
  }

  isGreater(startDate, endDate) {
	logger.debug(`>>> Entering isGreater(startDate=${startDate},endDate=${endDate})`);
    if (startDate.year > endDate.year) {
      return true
    } else if (startDate.year < endDate.year) {
      return false
    } else if (startDate.month > endDate.month) {
      return true
    } else if (startDate.month < endDate.month) {
      return false
    }
	logger.debug(`<<< Exiting isGreater(startDate=${startDate},endDate=${endDate})`);
    return true
  }

  getDayDiff(startDate, endDate) {
	logger.debug(`>>> Entering getDayDiff(startDate=${startDate},endDate=${endDate})`);
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
	logger.debug(`getDayDiff(startDate=${startDate},endDate=${endDate}): startDate.year → ${startDate.year}`);
    }
    while (startDate.month !== endDate.month) {
      if (startDate.month < endDate.month) {
        if (isLeapYear(startDate.year))
          diff += this.monthDaysLeap[startDate.month]
        else diff += this.monthDays[startDate.month]
        startDate.month = startDate.month + 1
		logger.debug(`getDayDiff(startDate=${startDate},endDate=${endDate}): startDate.month → ${startDate.month}`);
      } else {
        if (isLeapYear(startDate.year))
          diff -= this.monthDaysLeap[startDate.month - 1]
        else diff -= this.monthDays[startDate.month - 1]
        startDate.month = startDate.month - 1
      }
    }
	logger.debug(`<<< Exiting getDayDiff(startDate=${startDate},endDate=${endDate})`);
    return diff
  }

  generateMonthCal(date) {
	logger.debug(`>>> Entering generateMonthCal(date=${date})`);
    const Month = this.parseDate(date)
    let day = ''
	logger.debug(`generateMonthCal(date=${date}): Month → ${Month}`);
	logger.debug(`generateMonthCal(date=${date}): day → ${day}`);
    let difference = this.getDayDiff(this.epoch, Month)
    difference = difference % 7
	logger.debug(`generateMonthCal(date=${date}): difference → ${difference}`);
    let Month2 = this.parseDate(date)
    day = this.isGreater(Month2, this.epoch)
      ? this.Days[difference]
      : this.BDays[difference]
    Month2 = this.parseDate(date)
    if (isLeapYear(Month2.year))
      this.printCal(this.monthDaysLeap[Month2.month], day)
    else this.printCal(this.monthDays[Month2.month], day)
	logger.debug(`<<< Exiting generateMonthCal(date=${date})`);
  }
}

export { Month }

// const x = new Month()
// x.generateMonthCal('1/2021')
