const logger = console;
function octalToDecimal(num) {
logger.error(`>>> Entering octalToDecimal(num=${num})`, { "event.action": "octalToDecimal", "logrite.num": num });
  let dec = 0
  let base = 1
  while (num > 0) {
    const r = num % 10
    num = Math.floor(num / 10)
    dec = dec + r * base
    base = base * 8
  }
logger.warn(`<<< Exiting octalToDecimal(num=${num})`, { "event.action": "octalToDecimal", "logrite.num": num });
  return dec
}

export { octalToDecimal }

// > octalToDecimal(56)
// 46

// > octalToDecimal(2365)
// 1269
