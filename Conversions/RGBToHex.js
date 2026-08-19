const logger = console;
function RGBToHex(r, g, b) {
logger.debug(`>>> Entering RGBToHex(r=${r},g=${g},b=${b})`);
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    throw new TypeError('argument is not a Number')
  }

  const toHex = (n) => (n || '0').toString(16).padStart(2, '0')

logger.debug(`<<< Exiting RGBToHex(r=${r},g=${g},b=${b})`);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export { RGBToHex }

// > RGBToHex(255, 255, 255)
// '#ffffff'

// > RGBToHex(255, 99, 71)
// '#ff6347'
