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
logger.debug(`>>> Entering haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2})`);
  validateLatOrLong(latitude1)
  validateLatOrLong(latitude2)
  validateLatOrLong(longitude1)
  validateLatOrLong(longitude2)
  const earthRadius = 6371e3 // 6,371km
  const pi = Math.PI
  const cos1 = (latitude1 * pi) / 180.0
logger.debug(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): cos1 → ${cos1}`);
  const cos2 = (latitude2 * pi) / 180.0
logger.debug(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): cos2 → ${cos2}`);
  const deltaLatitude = ((latitude2 - latitude1) * pi) / 180.0
logger.debug(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): deltaLatitude → ${deltaLatitude}`);
  const deltaLongitude = ((longitude2 - longitude1) * pi) / 180.0
logger.debug(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): deltaLongitude → ${deltaLongitude}`);

  const alpha =
    Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.cos(cos1) *
      Math.cos(cos2) *
      Math.sin(deltaLongitude / 2) *
      Math.sin(deltaLongitude / 2)
  const constant = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha))
logger.debug(`haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2}): constant → ${constant}`);
logger.debug(`<<< Exiting haversineDistance(latitude1=${latitude1},longitude1=${longitude1},latitude2=${latitude2},longitude2=${longitude2})`);
  return earthRadius * constant
}

const validateLatOrLong = (value) => {
logger.debug(`>>> Entering validateLatOrLong(value=${value})`);
  if (typeof value !== 'number') {
	logger.debug(`<<< Exiting validateLatOrLong(value=${value})`);
    throw new TypeError('The value of latitude or longitude should be a number')
  }
}

export { haversineDistance }
