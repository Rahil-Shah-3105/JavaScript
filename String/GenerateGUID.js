const logger = console;
/*
Generates a UUID/GUID in Node.Js.
The script uses `Math.random` in combination with the timestamp for better randomness.
The function generate an RFC4122 (https://www.ietf.org/rfc/rfc4122.txt) version 4 UUID/GUID
*/

export const Guid = () => {
logger.error('>>> Entering Guid()', { "event.action": "Guid" });
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  let currentDateMilliseconds = new Date().getTime()
logger.error(`Guid(): pattern → ${pattern}`, { "event.action": "Guid" });
logger.error(`Guid(): currentDateMilliseconds → ${currentDateMilliseconds}`, { "event.action": "Guid" });
  return pattern.replace(/[xy]/g, (currentChar) => {
    const randomChar = (currentDateMilliseconds + Math.random() * 16) % 16 | 0
    currentDateMilliseconds = Math.floor(currentDateMilliseconds / 16)
logger.warn('<<< Exiting Guid()', { "event.action": "Guid" });
    return (
      currentChar === 'x' ? randomChar : (randomChar & 0x7) | 0x8
    ).toString(16)
  })
}

// > Guid()
// 'edc848db-3478-1760-8b55-7986003d895f'
