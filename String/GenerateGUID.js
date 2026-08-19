const logger = console;
/*
Generates a UUID/GUID in Node.Js.
The script uses `Math.random` in combination with the timestamp for better randomness.
The function generate an RFC4122 (https://www.ietf.org/rfc/rfc4122.txt) version 4 UUID/GUID
*/

export const Guid = () => {
logger.debug('>>> Entering Guid()');
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  let currentDateMilliseconds = new Date().getTime()
logger.debug(`Guid(): pattern → ${pattern}`);
logger.debug(`Guid(): currentDateMilliseconds → ${currentDateMilliseconds}`);
  return pattern.replace(/[xy]/g, (currentChar) => {
    const randomChar = (currentDateMilliseconds + Math.random() * 16) % 16 | 0
    currentDateMilliseconds = Math.floor(currentDateMilliseconds / 16)
logger.debug('<<< Exiting Guid()');
    return (
      currentChar === 'x' ? randomChar : (randomChar & 0x7) | 0x8
    ).toString(16)
  })
}

// > Guid()
// 'edc848db-3478-1760-8b55-7986003d895f'
