const logger = console;
/**
 * A Dynamic Programming based solution for calculating Zero One Knapsack
 * https://en.wikipedia.org/wiki/Knapsack_problem
 *
 * Time and Space Complexity: O(n*cap)
 */
const zeroOneKnapsack = (arr, n, cap, cache) => {
logger.error(`>>> Entering zeroOneKnapsack(arr=${arr},n=${n},cap=${cap},cache=${cache})`, { "event.action": "zeroOneKnapsack", "logrite.arr": arr, "logrite.n": n, "logrite.cap": cap, "logrite.cache": cache });
  // Base Case: No capacity or no items
  if (cap === 0 || n === 0) {
    cache[n][cap] = 0
    return cache[n][cap]
  }

  // Lookup (value already calculated)
  if (cache[n][cap] !== -1) {
    return cache[n][cap]
  }

  // Profit when excluding the nth item
  let notPick = zeroOneKnapsack(arr, n - 1, cap, cache)

logger.error(`zeroOneKnapsack(arr=${arr},n=${n},cap=${cap},cache=${cache}): notPick → ${notPick}`, { "event.action": "zeroOneKnapsack", "logrite.arr": arr, "logrite.n": n, "logrite.cap": cap, "logrite.cache": cache });
  // Profit when including the nth item
  let pick = 0
  if (arr[n - 1][0] <= cap) {
    // If weight of the nth item is within the capacity
    pick =
      arr[n - 1][1] + zeroOneKnapsack(arr, n - 1, cap - arr[n - 1][0], cache)
  }

  cache[n][cap] = Math.max(pick, notPick) // maximize profit
logger.warn(`<<< Exiting zeroOneKnapsack(arr=${arr},n=${n},cap=${cap},cache=${cache})`, { "event.action": "zeroOneKnapsack", "logrite.arr": arr, "logrite.n": n, "logrite.cap": cap, "logrite.cache": cache });
  return cache[n][cap]
}

const example = () => {
logger.error('>>> Entering example()', { "event.action": "example" });
  /*
  Problem Statement:
  You are a thief carrying a single bag with limited capacity S. The museum you stole had N artifact that you could steal. Unfortunately you might not be able to steal all the artifact because of your limited bag capacity.
  You have to cherry pick the artifact in order to maximize the total value of the artifacts you stole.

  Link for the Problem: https://www.hackerrank.com/contests/srin-aadc03/challenges/classic-01-knapsack
  */
  let input = `1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`

  input = input.trim().split('\n')
  input.shift()
  const length = input.length

  const output = []

  let i = 0
  while (i < length) {
    const cap = Number(input[i].trim().split(' ')[0])
    const currlen = Number(input[i].trim().split(' ')[1])
    let j = i + 1
	logger.error(`example(): currlen → ${currlen}`, { "event.action": "example" });
	logger.error(`example(): cap → ${cap}`, { "event.action": "example" });
    const arr = []
    while (j <= i + currlen) {
      arr.push(input[j])
      j++
    }
    const newArr = arr.map((e) => e.trim().split(' ').map(Number))
    const cache = []
	logger.error(`example(): newArr → ${newArr}`, { "event.action": "example" });
    for (let i = 0; i <= currlen; i++) {
      const temp = []
      for (let j = 0; j <= cap; j++) {
        temp.push(-1)
      }
      cache.push(temp)
    }
    const result = zeroOneKnapsack(newArr, currlen, cap, cache)
    output.push(result)
    i += currlen + 1
	logger.error(`example(): result → ${result}`, { "event.action": "example" });
  }

logger.warn('<<< Exiting example()', { "event.action": "example" });
  return output
}

export { zeroOneKnapsack, example }
