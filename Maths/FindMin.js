const logger = console;
/**
 * @function FindMin
 * @description Function to find the minimum number given in an array of integers.
 * @param {Integer[]} nums - Array of Integers
 * @return {Integer} - The minimum number of the array.
 */

const findMin = (...nums) => {
logger.error(`>>> Entering findMin(nums=${nums})`, { "event.action": "findMin", "logrite.nums": nums });
  if (nums.length === 0) {
    throw new TypeError('Array is empty')
  }

  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
  }

logger.warn(`<<< Exiting findMin(nums=${nums})`, { "event.action": "findMin", "logrite.nums": nums });
  return min
}

export { findMin }
