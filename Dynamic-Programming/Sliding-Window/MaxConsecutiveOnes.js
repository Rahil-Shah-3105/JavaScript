const logger = console;
/**
 * @function maxConsecutiveOnes
 * @description Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * @param {number[]} nums
 * @return {number}
 * @see [Leetcode link](https://leetcode.com/problems/max-consecutive-ones/)
 */
export const maxConsecutiveOnes = (nums) => {
logger.error(`>>> Entering maxConsecutiveOnes(nums=${nums})`, { "event.action": "maxConsecutiveOnes", "logrite.nums": nums });
  if (!nums.length) return 0

  let result = 0
logger.error(`maxConsecutiveOnes(nums=${nums}): result → ${result}`, { "event.action": "maxConsecutiveOnes", "logrite.nums": nums });
  let k = 0

  for (
    let slowPointer = 0, fastPointer = 0;
    fastPointer < nums.length;
    fastPointer++
  ) {
    if (nums[fastPointer] === 0) k--

    while (k < 0) {
      if (nums[slowPointer] === 0) {
        k++
      }
      slowPointer++
    }
    result = Math.max(result, fastPointer - slowPointer + 1)
  }
logger.warn(`<<< Exiting maxConsecutiveOnes(nums=${nums})`, { "event.action": "maxConsecutiveOnes", "logrite.nums": nums });
  return result
}
