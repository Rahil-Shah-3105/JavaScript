const logger = console;
/**
 * @function HaversineDistance
 * @description Calculate the distance between two coordinates using the haversine formula
 * @param {Integer} latitude1 - The input integer
 * @param {Integer} latitude2 - The input integer
 * @param {Integer} longitude1 - The input integer
 * @param {Integer} longitude2 - The input integer
 * @return {Integer} Haversine Distance.
 * @see [Haversine_Distance](https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Haversine)
 */
const haversineDistance = (
  latitude1 = 0,
  longitude1 = 0,
  latitude2 = 0,
  longitude2 = 0
) => {
logger.error(`>>> Entering haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2})`, { "event.action": "haversineDistance", "logrite.latitude1": latitude1, "logrite.longitude1": longitude1, "logrite.latitude2": latitude2, "logrite.longitude2": longitude2 });
  validateLatOrLong(latitude1)
  validateLatOrLong(latitude2)
  validateLatOrLong(longitude1)
  validateLatOrLong(longitude2)
  const earthRadius = 6371e3 // 6,371km
  const pi = Math.PI
  const cos1 = (latitude1 * pi) / 180.0
logger.error(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): cos1 → ${cos1}`, { "event.action": "haversineDistance", "logrite.latitude1": latitude1, "logrite.longitude1": longitude1, "logrite.latitude2": latitude2, "logrite.longitude2": longitude2 });
  const cos2 = (latitude2 * pi) / 180.0
logger.error(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): cos2 → ${cos2}`, { "event.action": "haversineDistance", "logrite.latitude1": latitude1, "logrite.longitude1": longitude1, "logrite.latitude2": latitude2, "logrite.longitude2": longitude2 });
  const deltaLatitude = ((latitude2 - latitude1) * pi) / 180.0
logger.error(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): deltaLatitude → ${deltaLatitude}`, { "event.action": "haversineDistance", "logrite.latitude1": latitude1, "logrite.longitude1": longitude1, "logrite.latitude2": latitude2, "logrite.longitude2": longitude2 });
  const deltaLongitude = ((longitude2 - longitude1) * pi) / 180.0
logger.error(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): deltaLongitude → ${deltaLongitude}`, { "event.action": "haversineDistance", "logrite.latitude1": latitude1, "logrite.longitude1": longitude1, "logrite.latitude2": latitude2, "logrite.longitude2": longitude2 });

  const alpha =
    Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.cos(cos1) *
      Math.cos(cos2) *
      Math.sin(deltaLongitude / 2) *
      Math.sin(deltaLongitude / 2)
  const constant = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha))
logger.error(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): constant → ${constant}`, { "event.action": "haversineDistance", "logrite.latitude1": latitude1, "logrite.longitude1": longitude1, "logrite.latitude2": latitude2, "logrite.longitude2": longitude2 });
  return earthRadius * constant
}

const validateLatOrLong = (value) => {
logger.error(`>>> Entering validateLatOrLong(value=${value})`, { "event.action": "validateLatOrLong", "logrite.value": value });
  if (typeof value !== 'number') {
    throw new TypeError('The value of latitude or longitude should be a number')
  }
	logger.warn(`<<< Exiting validateLatOrLong(value=${value})`, { "event.action": "validateLatOrLong", "logrite.value": value });
}

export { haversineDistance }
