const logger = console;
/**
 * Given an array of integers, find two numbers that add up to a specific target.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers.
 *
 * @example
 * const nums = [2, 7, 11, 15];
 * const target = 9;
 * const result = twoSum(nums, target);
 * // The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
 */

const TwoSum = (nums, target) => {
logger.error(`>>> Entering TwoSum(nums=${nums},target=${target})`, { "event.action": "TwoSum", "logrite.nums": nums, "logrite.target": target });
  const numIndicesMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (numIndicesMap.has(complement)) return [numIndicesMap.get(complement), i]
    numIndicesMap.set(nums[i], i)
  }
logger.error(`TwoSum(nums=${nums},target=${target}): numIndicesMap → ${numIndicesMap}`, { "event.action": "TwoSum", "logrite.nums": nums, "logrite.target": target });
logger.warn(`<<< Exiting TwoSum(nums=${nums},target=${target})`, { "event.action": "TwoSum", "logrite.nums": nums, "logrite.target": target });
  return []
}
export { TwoSum }
