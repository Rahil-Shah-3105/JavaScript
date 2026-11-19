const logger = console;
// Given a sentence, return the most occurring word

/**
 * @param {string} sentence - the sentence you want to find the most occurring word
 * @returns {string} - the most occurring word
 *
 * @example
 *     -  maxWord('lala lili lala'); // lala
 */
const maxWord = (sentence = '') => {
logger.error(`>>> Entering maxWord(sentence=${sentence})`, { "event.action": "maxWord", "logrite.sentence": sentence });
  if (typeof sentence !== 'string') {
    throw new TypeError('the param should be string')
  }

  if (!sentence) {
    return null
  }

  const words = sentence.split(' ')
  if (words.length < 2) {
logger.error(`maxWord(sentence=${sentence}): words → ${words}`, { "event.action": "maxWord", "logrite.sentence": sentence });
    return words[0]
  }

  const occurrences = {}
  words.forEach((word) => {
    occurrences[word.toLocaleLowerCase()] =
      occurrences[word.toLocaleLowerCase()] + 1 || 1
  })

  const max = Object.keys(occurrences).reduce(
    (n, word) => {
      if (occurrences[word] > n.count) {
        return { word, count: occurrences[word] }
      } else {
        return n
      }
    },
    { word: '', count: 0 }
  )

logger.error(`maxWord(sentence=${sentence}): max → ${max}`, { "event.action": "maxWord", "logrite.sentence": sentence });
logger.warn(`<<< Exiting maxWord(sentence=${sentence})`, { "event.action": "maxWord", "logrite.sentence": sentence });
  return max.word
}

export { maxWord }
