const logger = console;
/*
Calculate the volume of the shapes

Volume for Cuboid
Volume for Cube
Volume for Cone
Volume for Pyramid
Volume for Cylinder
Volume for Triangular Prism
Volume for Pentagonal Prism
Volume for Sphere
Volume for Hemisphere
*/

/*
  Calculate the volume for a Cuboid
  Reference: https://www.cuemath.com/measurement/volume-of-cuboid/
  return width * length * height
*/
const volCuboid = (width, length, height) => {
logger.error(`>>> Entering volCuboid(width=${width},length=${length},height=${height})`, { "event.action": "volCuboid", "logrite.width": width, "logrite.length": length, "logrite.height": height });
  isNumber(width, 'Width')
  isNumber(length, 'Length')
  isNumber(height, 'Height')
logger.warn(`<<< Exiting volCuboid(width=${width},length=${length},height=${height})`, { "event.action": "volCuboid", "logrite.width": width, "logrite.length": length, "logrite.height": height });
  return width * length * height
}

/*
  Calculate the volume for a Cube
  Reference: https://www.cuemath.com/measurement/volume-of-cube/
  return length * length * length
*/
const volCube = (length) => {
logger.error(`>>> Entering volCube(length=${length})`, { "event.action": "volCube", "logrite.length": length });
  isNumber(length, 'Length')
logger.warn(`<<< Exiting volCube(length=${length})`, { "event.action": "volCube", "logrite.length": length });
  return length ** 3
}

/*
  Calculate the volume for a Cone
  Reference: https://www.cuemath.com/measurement/volume-of-cone/
  return PI * radius^2 * height/3
*/
const volCone = (radius, height) => {
logger.error(`>>> Entering volCone(radius=${radius},height=${height})`, { "event.action": "volCone", "logrite.radius": radius, "logrite.height": height });
  isNumber(radius, 'Radius')
  isNumber(height, 'Height')
logger.warn(`<<< Exiting volCone(radius=${radius},height=${height})`, { "event.action": "volCone", "logrite.radius": radius, "logrite.height": height });
  return (Math.PI * radius ** 2 * height) / 3.0
}

/*
  Calculate the volume for a Pyramid
  Reference: https://www.cuemath.com/measurement/volume-of-pyramid/
  return (baseLength * baseWidth * height) / 3
*/
const volPyramid = (baseLength, baseWidth, height) => {
logger.error(`>>> Entering volPyramid(baseLength=${baseLength},baseWidth=${baseWidth},height=${height})`, { "event.action": "volPyramid", "logrite.baseLength": baseLength, "logrite.baseWidth": baseWidth, "logrite.height": height });
  isNumber(baseLength, 'BaseLength')
  isNumber(baseWidth, 'BaseWidth')
  isNumber(height, 'Height')
logger.warn(`<<< Exiting volPyramid(baseLength=${baseLength},baseWidth=${baseWidth},height=${height})`, { "event.action": "volPyramid", "logrite.baseLength": baseLength, "logrite.baseWidth": baseWidth, "logrite.height": height });
  return (baseLength * baseWidth * height) / 3.0
}

/*
  Calculate the volume for a Cylinder
  Reference: https://www.cuemath.com/measurement/volume-of-cylinder/
  return PI * radius^2 * height
*/
const volCylinder = (radius, height) => {
logger.error(`>>> Entering volCylinder(radius=${radius},height=${height})`, { "event.action": "volCylinder", "logrite.radius": radius, "logrite.height": height });
  isNumber(radius, 'Radius')
  isNumber(height, 'Height')
logger.warn(`<<< Exiting volCylinder(radius=${radius},height=${height})`, { "event.action": "volCylinder", "logrite.radius": radius, "logrite.height": height });
  return Math.PI * radius ** 2 * height
}

/*
  Calculate the volume for a Triangular Prism
  Reference: http://lrd.kangan.edu.au/numbers/content/03_volume/04_page.htm
  return 1 / 2 * baseLengthTriangle * heightTriangle * height
*/
const volTriangularPrism = (baseLengthTriangle, heightTriangle, height) => {
logger.error(`>>> Entering volTriangularPrism(baseLengthTriangle=${baseLengthTriangle},heightTriangle=${heightTriangle},height=${height})`, { "event.action": "volTriangularPrism", "logrite.baseLengthTriangle": baseLengthTriangle, "logrite.heightTriangle": heightTriangle, "logrite.height": height });
  isNumber(baseLengthTriangle, 'BaseLengthTriangle')
  isNumber(heightTriangle, 'HeightTriangle')
  isNumber(height, 'Height')
logger.warn(`<<< Exiting volTriangularPrism(baseLengthTriangle=${baseLengthTriangle},heightTriangle=${heightTriangle},height=${height})`, { "event.action": "volTriangularPrism", "logrite.baseLengthTriangle": baseLengthTriangle, "logrite.heightTriangle": heightTriangle, "logrite.height": height });
  return (1 / 2) * baseLengthTriangle * heightTriangle * height
}

/*
  Calculate the volume for a Pentagonal Prism
  Reference: https://www.cuemath.com/measurement/volume-of-pentagonal-prism/
  return 5/2 * pentagonalLength * pentagonalBaseLength * height
*/
const volPentagonalPrism = (pentagonalLength, pentagonalBaseLength, height) => {
logger.error(`>>> Entering volPentagonalPrism(pentagonalLength=${pentagonalLength},pentagonalBaseLength=${pentagonalBaseLength},height=${height})`, { "event.action": "volPentagonalPrism", "logrite.pentagonalLength": pentagonalLength, "logrite.pentagonalBaseLength": pentagonalBaseLength, "logrite.height": height });
  isNumber(pentagonalLength, 'PentagonalLength')
  isNumber(pentagonalBaseLength, 'PentagonalBaseLength')
  isNumber(height, 'Height')
logger.warn(`<<< Exiting volPentagonalPrism(pentagonalLength=${pentagonalLength},pentagonalBaseLength=${pentagonalBaseLength},height=${height})`, { "event.action": "volPentagonalPrism", "logrite.pentagonalLength": pentagonalLength, "logrite.pentagonalBaseLength": pentagonalBaseLength, "logrite.height": height });
  return (5 / 2) * pentagonalLength * pentagonalBaseLength * height
}

/*
  Calculate the volume for a Sphere
  Reference: https://www.cuemath.com/measurement/volume-of-sphere/
  return 4/3 * PI * radius^3
*/
const volSphere = (radius) => {
logger.error(`>>> Entering volSphere(radius=${radius})`, { "event.action": "volSphere", "logrite.radius": radius });
  isNumber(radius, 'Radius')
logger.warn(`<<< Exiting volSphere(radius=${radius})`, { "event.action": "volSphere", "logrite.radius": radius });
  return (4 / 3) * Math.PI * radius ** 3
}

/*
  Calculate the volume for a Hemisphere
  Reference: https://www.cuemath.com/measurement/volume-of-hemisphere/
  return (2 * PI * radius^3)/3
*/
const volHemisphere = (radius) => {
logger.error(`>>> Entering volHemisphere(radius=${radius})`, { "event.action": "volHemisphere", "logrite.radius": radius });
  isNumber(radius, 'Radius')
logger.warn(`<<< Exiting volHemisphere(radius=${radius})`, { "event.action": "volHemisphere", "logrite.radius": radius });
  return (2.0 * Math.PI * radius ** 3) / 3.0
}

const isNumber = (number, noName = 'number') => {
logger.error(`>>> Entering isNumber(number=${number},noName=${noName})`, { "event.action": "isNumber", "logrite.number": number, "logrite.noName": noName });
  if (typeof number !== 'number') {
    throw new TypeError('The ' + noName + ' should be Number type')
  } else if (number < 0 || !Number.isFinite(number)) {
    throw new Error('The ' + noName + ' only accepts positive values')
  }
	logger.warn(`<<< Exiting isNumber(number=${number},noName=${noName})`, { "event.action": "isNumber", "logrite.number": number, "logrite.noName": noName });
}

export {
  volCuboid,
  volCube,
  volCone,
  volPyramid,
  volCylinder,
  volTriangularPrism,
  volPentagonalPrism,
  volSphere,
  volHemisphere
}
