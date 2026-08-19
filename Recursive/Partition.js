const logger = console;
/**
 * @function canPartition
 * @description Check whether it is possible to partition the given array into two equal sum subsets using recursion.
 * @param {number[]} nums - The input array of numbers.
 * @param {number} index - The current index in the array being considered.
 * @param {number} target - The target sum for each subset.
 * @return {boolean}.
 * @see [Partition Problem](https://en.wikipedia.org/wiki/Partition_problem)
 */

const canPartition = (nums, index = 0, target = 0) => {
logger.debug(`>>> Entering canPartition(nums=${nums},index=${index},target=${target})`);
  if (!Array.isArray(nums)) {
    throw new TypeError('Invalid Input')
  }

  const sum = nums.reduce((acc, num) => acc + num, 0)

logger.debug(`canPartition(nums=${nums},index=${index},target=${target}): sum → ${sum}`);
  if (sum % 2 !== 0) {
    return false
  }

  if (target === sum / 2) {
    return true
  }

  if (index >= nums.length || target > sum / 2) {
    return false
  }

  // Include the current number in the first subset and check if a solution is possible.
  const withCurrent = canPartition(nums, index + 1, target + nums[index])

logger.debug(`canPartition(nums=${nums},index=${index},target=${target}): withCurrent → ${withCurrent}`);
  // Exclude the current number from the first subset and check if a solution is possible.
  const withoutCurrent = canPartition(nums, index + 1, target)

logger.debug(`canPartition(nums=${nums},index=${index},target=${target}): withoutCurrent → ${withoutCurrent}`);
logger.debug(`<<< Exiting canPartition(nums=${nums},index=${index},target=${target})`);
  return withCurrent || withoutCurrent
}

export { canPartition }
