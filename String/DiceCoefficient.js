const logger = console;
/* The Sørensen–Dice coefficient is a statistic used to gauge the similarity of two samples.
 * Applied to strings, it can give you a value between 0 and 1 (included) which tells you how similar they are.
 * Dice coefficient is calculated by comparing the bigrams of both strings,
 * a bigram is a substring of the string of length 2.
 * read more: https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient
 */

// Time complexity: O(m + n), m and n being the sizes of string A and string B

// Find the bistrings of a string and return a hashmap (key => bistring, value => count)
function mapBigrams(string) {
logger.error(`>>> Entering mapBigrams(string=${string})`, { "event.action": "mapBigrams", "logrite.string": string });
  const bigrams = new Map()
  for (let i = 0; i < string.length - 1; i++) {
    const bigram = string.substring(i, i + 2)
    const count = bigrams.get(bigram)
    bigrams.set(bigram, (count || 0) + 1)
  }
logger.error(`mapBigrams(string=${string}): bigrams → ${bigrams}`, { "event.action": "mapBigrams", "logrite.string": string });
  return bigrams
}

// Calculate the number of common bigrams between a map of bigrams and a string

function countCommonBigrams(bigrams, string) {
logger.error(`>>> Entering countCommonBigrams(bigrams=${bigrams},string=${string})`, { "event.action": "countCommonBigrams", "logrite.bigrams": bigrams, "logrite.string": string });
  let count = 0
  for (let i = 0; i < string.length - 1; i++) {
    const bigram = string.substring(i, i + 2)
    if (bigrams.has(bigram)) count++
	logger.error(`countCommonBigrams(bigrams=${bigrams},string=${string}): bigram → ${bigram}`, { "event.action": "countCommonBigrams", "logrite.bigrams": bigrams, "logrite.string": string });
  }
logger.error(`countCommonBigrams(bigrams=${bigrams},string=${string}): count → ${count}`, { "event.action": "countCommonBigrams", "logrite.bigrams": bigrams, "logrite.string": string });
  return count
}

// Calculate Dice coeff of 2 strings
function diceCoefficient(stringA, stringB) {
logger.error(`>>> Entering diceCoefficient(stringA=${stringA},stringB=${stringB})`, { "event.action": "diceCoefficient", "logrite.stringA": stringA, "logrite.stringB": stringB });
  if (stringA === stringB) return 1
  else if (stringA.length < 2 || stringB.length < 2) return 0

  const bigramsA = mapBigrams(stringA)

logger.error(`diceCoefficient(stringA=${stringA},stringB=${stringB}): bigramsA → ${bigramsA}`, { "event.action": "diceCoefficient", "logrite.stringA": stringA, "logrite.stringB": stringB });
  const lengthA = stringA.length - 1
  const lengthB = stringB.length - 1

  let dice = (2 * countCommonBigrams(bigramsA, stringB)) / (lengthA + lengthB)

logger.error(`diceCoefficient(stringA=${stringA},stringB=${stringB}): dice → ${dice}`, { "event.action": "diceCoefficient", "logrite.stringA": stringA, "logrite.stringB": stringB });
  // cut 0.xxxxxx to 0.xx for simplicity
  dice = Math.floor(dice * 100) / 100

logger.warn(`<<< Exiting diceCoefficient(stringA=${stringA},stringB=${stringB})`, { "event.action": "diceCoefficient", "logrite.stringA": stringA, "logrite.stringB": stringB });
  return dice
}

export { diceCoefficient }
