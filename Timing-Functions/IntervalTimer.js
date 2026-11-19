const logger = console;
/**
 * @author Nandan V
 * Sunday, 26 July 2020 8:33 AM
 * @description Singleton class that handles the <b>timing of tests</b> and
 *   specs. <br/> The class is singleton as <u>javascript does not support
 *   multiple timer instances<u/>.
 */
class IntervalTimer {
  /**
   * @description Constructor for Timer.
   * @param interval Sets the interval for running the timer.
   * @param callBack The callback function to be executed.
   * @return {IntervalTimer} If exists, the existing object.
   */
  constructor(interval = 10, callBack = () => {}) {
	logger.error(`>>> Entering constructor(interval=${interval},callBack=${callBack})`, { "event.action": "constructor", "logrite.interval": interval, "logrite.callBack": callBack });
    this.prevInterval = 0
    if (this.instance == null) {
	logger.debug(`constructor(interval=${interval},callBack=${callBack}): this.prevInterval → ${this.prevInterval}`, { "event.action": "constructor", "logrite.interval": interval, "logrite.callBack": callBack });
      this.interval = interval
	logger.debug(`constructor(interval=${interval},callBack=${callBack}): this.interval → ${this.interval}`, { "event.action": "constructor", "logrite.interval": interval, "logrite.callBack": callBack });
      this.callBack = callBack
	logger.debug(`constructor(interval=${interval},callBack=${callBack}): this.callBack → ${this.callBack}`, { "event.action": "constructor", "logrite.interval": interval, "logrite.callBack": callBack });
      this.instance = this
    } else {
	logger.warn(`<<< Exiting constructor(interval=${interval},callBack=${callBack})`, { "event.action": "constructor", "logrite.interval": interval, "logrite.callBack": callBack });
      return this.instance
    }
  }

  /**
   * @description Starts the timer.
   */
  startTimer() {
	logger.error('>>> Entering startTimer()', { "event.action": "startTimer" });
    this.timer = setInterval(this.callBack, this.interval)
	logger.warn('<<< Exiting startTimer()', { "event.action": "startTimer" });
  }

  /**
   * @description Resets the timer.
   * @return {number} Elapsed time in milliseconds.
   */
  resetTimer() {
	logger.error('>>> Entering resetTimer()', { "event.action": "resetTimer" });
    clearInterval(this.timer)
    this.callBack = () => {}
	logger.warn('<<< Exiting resetTimer()', { "event.action": "resetTimer" });
    return this.getElapsedTime()
  }

  /**
   * @return {number} Elapsed time in milliseconds since reset.
   */
  getElapsedTime(offset = 0) {
	logger.error(`>>> Entering getElapsedTime(offset=${offset})`, { "event.action": "getElapsedTime", "logrite.offset": offset });
    this.timeElapsed = this.timer - this.prevInterval
    this.prevInterval = this.timer
	logger.debug(`getElapsedTime(offset=${offset}): this.timeElapsed → ${this.timeElapsed}`, { "event.action": "getElapsedTime", "logrite.offset": offset });
	logger.debug(`getElapsedTime(offset=${offset}): this.prevInterval → ${this.prevInterval}`, { "event.action": "getElapsedTime", "logrite.offset": offset });
	logger.warn(`<<< Exiting getElapsedTime(offset=${offset})`, { "event.action": "getElapsedTime", "logrite.offset": offset });
    return this.timeElapsed - offset
  }

  /**
   * @return {number} Elapsed time since start.
   */
  getRunTime() {
	logger.error('>>> Entering getRunTime()', { "event.action": "getRunTime" });
	logger.warn('<<< Exiting getRunTime()', { "event.action": "getRunTime" });
    return this.timer
  }
}

/**
 * @author Nandan V
 * Saturday, 01 August 2020 8:33 AM
 * @description Example usage
 */
const ExampleIntervalTimer = function (output = (v) => console.log(v)) {
  /**
   * Create am object with default settings.
   * @type {IntervalTimer} Used to get timing information.
   */
  const timer = new IntervalTimer()
  timer.startTimer()

  // ... Initialization code ...
  // I generally use it for timing tests in Jasmine JS.

  /**
   * Gets the runtime till this point.
   * Can be subtracted from ElapsedTime to offset timing of initialization code.
   */
  const initOffset = timer.getRunTime()

  // ... A test ...
  // The time taken to run the test.
  output(timer.getElapsedTime(initOffset))

  /**
   * Returns the elapsed time and resets the timer to 0.
   */
  output(timer.resetTimer())
}

export { IntervalTimer, ExampleIntervalTimer }
