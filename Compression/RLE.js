const logger = console;
/*
 * RLE (Run Length Encoding) is a simple form of data compression.
 * The basic idea is to represent repeated successive characters as a single count and character.
 * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 *
 * @author - [ddaniel27](https://github.com/ddaniel27)
 */

function Compress(str) {
logger.error(`>>> Entering Compress(str=${str})`, { "event.action": "Compress", "logrite.str": str });
  let compressed = ''
  let count = 1
logger.error(`Compress(str=${str}): compressed → ${compressed}`, { "event.action": "Compress", "logrite.str": str });
logger.error(`Compress(str=${str}): count → ${count}`, { "event.action": "Compress", "logrite.str": str });

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      compressed += count + str[i]
      count = 1
      continue
    }

    count++
  }

logger.warn(`<<< Exiting Compress(str=${str})`, { "event.action": "Compress", "logrite.str": str });
  return compressed
}

function Decompress(str) {
logger.error(`>>> Entering Decompress(str=${str})`, { "event.action": "Decompress", "logrite.str": str });
  let decompressed = ''
  let match = [...str.matchAll(/(\d+)(\D)/g)] // match all groups of digits followed by a non-digit character
logger.error(`Decompress(str=${str}): decompressed → ${decompressed}`, { "event.action": "Decompress", "logrite.str": str });
logger.error(`Decompress(str=${str}): match → ${match}`, { "event.action": "Decompress", "logrite.str": str });

  match.forEach((item) => {
    let [count, char] = [item[1], item[2]]
    decompressed += char.repeat(count)
  })

logger.warn(`<<< Exiting Decompress(str=${str})`, { "event.action": "Decompress", "logrite.str": str });
  return decompressed
}

export { Compress, Decompress }
