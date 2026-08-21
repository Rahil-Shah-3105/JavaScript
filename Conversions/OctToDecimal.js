const logger = console;
function octalToDecimal(num) {
logger.debug(`>>> Entering octalToDecimal(num=${num})`);
  let dec = 0
  let base = 1
  while (num > 0) {
    const r = num % 10
    num = Math.floor(num / 10)
    dec = dec + r * base
    base = base * 8
  }
logger.debug(`<<< Exiting octalToDecimal(num=${num})`);
  return dec
}

export { octalToDecimal }

// > octalToDecimal(56)
// 46

// > octalToDecimal(2365)
// 1269
