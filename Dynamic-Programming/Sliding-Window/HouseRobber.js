const logger = console;
/**
 * @function houseRobber
 * @description Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 * @see [Leetcode link](https://leetcode.com/problems/house-robber/)
 */
export const houseRobber = (nums) => {
logger.error(`>>> Entering houseRobber(nums=${nums})`, { "event.action": "houseRobber", "logrite.nums": nums });
  const length = nums.length

  if (length === 0) return 0
  if (length === 1) return nums[0]
  if (length === 2) return Math.max(nums[0], nums[1])

  const dp = Array(length) // last element of this array always contains biggest loot possible
logger.error(`houseRobber(nums=${nums}): dp → ${dp}`, { "event.action": "houseRobber", "logrite.nums": nums });
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }
logger.warn(`<<< Exiting houseRobber(nums=${nums})`, { "event.action": "houseRobber", "logrite.nums": nums });
  return dp[length - 1]
}
