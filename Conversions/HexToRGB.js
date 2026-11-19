const logger = console;
function hexStringToRGB(hexString) {
logger.error(`>>> Entering hexStringToRGB(hexString=${hexString})`, { "event.action": "hexStringToRGB", "logrite.hexString": hexString });
  let r = hexString.substring(0, 2)
  let g = hexString.substring(2, 4)
  let b = hexString.substring(4, 6)

logger.error(`hexStringToRGB(hexString=${hexString}): g → ${g}`, { "event.action": "hexStringToRGB", "logrite.hexString": hexString });
  r = parseInt(r, 16)
logger.error(`hexStringToRGB(hexString=${hexString}): r → ${r}`, { "event.action": "hexStringToRGB", "logrite.hexString": hexString });
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  const obj = { r, g, b }

logger.warn(`<<< Exiting hexStringToRGB(hexString=${hexString})`, { "event.action": "hexStringToRGB", "logrite.hexString": hexString });
  return obj
}

export { hexStringToRGB }

// > hexStringToRGB('ffffff')
// { r: 255, g: 255, b: 255 }
