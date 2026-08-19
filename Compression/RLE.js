const logger = console;
/*
 * RLE (Run Length Encoding) is a simple form of data compression.
 * The basic idea is to represent repeated successive characters as a single count and character.
 * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 *
 * @author - [ddaniel27](https://github.com/ddaniel27)
 */

function Compress(str) {
logger.debug(`>>> Entering Compress(str=${str})`);
  let compressed = ''
  let count = 1
logger.debug(`Compress(str=${str}): compressed → ${compressed}`);
logger.debug(`Compress(str=${str}): count → ${count}`);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      compressed += count + str[i]
      count = 1
      continue
    }

    count++
  }

logger.debug(`<<< Exiting Compress(str=${str})`);
  return compressed
}

function Decompress(str) {
logger.debug(`>>> Entering Decompress(str=${str})`);
  let decompressed = ''
  let match = [...str.matchAll(/(\d+)(\D)/g)] // match all groups of digits followed by a non-digit character
logger.debug(`Decompress(str=${str}): decompressed → ${decompressed}`);
logger.debug(`Decompress(str=${str}): match → ${match}`);

  match.forEach((item) => {
    let [count, char] = [item[1], item[2]]
    decompressed += char.repeat(count)
  })

logger.debug(`<<< Exiting Decompress(str=${str})`);
  return decompressed
}

export { Compress, Decompress }
