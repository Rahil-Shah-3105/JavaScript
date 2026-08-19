const logger = console;
function hexStringToRGB(hexString) {
logger.debug(`>>> Entering hexStringToRGB(hexString=${hexString})`);
  let r = hexString.substring(0, 2)
  let g = hexString.substring(2, 4)
  let b = hexString.substring(4, 6)

logger.debug(`hexStringToRGB(hexString=${hexString}): g → ${g}`);
logger.debug(`hexStringToRGB(hexString=${hexString}): b → ${b}`);
  r = parseInt(r, 16)
logger.debug(`hexStringToRGB(hexString=${hexString}): r → ${r}`);
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  const obj = { r, g, b }

logger.debug(`<<< Exiting hexStringToRGB(hexString=${hexString})`);
  return obj
}

export { hexStringToRGB }

// > hexStringToRGB('ffffff')
// { r: 255, g: 255, b: 255 }
