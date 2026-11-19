const logger = console;
export const shuffle = (array) => {
logger.error(`>>> Entering shuffle(array=${array})`, { "event.action": "shuffle", "logrite.array": array });
  let maxLength = array.length
  let temp
  let idx

  // While there remain elements to shuffle...
  while (maxLength) {
    // Pick a remaining element...
    idx = Math.floor(Math.random() * maxLength--)

    // And swap it with the current element
    temp = array[maxLength]
    array[maxLength] = array[idx]
    array[idx] = temp
  }

logger.warn(`<<< Exiting shuffle(array=${array})`, { "event.action": "shuffle", "logrite.array": array });
  return array
}
