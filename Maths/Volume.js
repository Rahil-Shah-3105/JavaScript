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
logger.debug(`>>> Entering volCuboid(width=${width},length=${length},height=${height})`);
  isNumber(width, 'Width')
  isNumber(length, 'Length')
  isNumber(height, 'Height')
logger.debug(`<<< Exiting volCuboid(width=${width},length=${length},height=${height})`);
  return width * length * height
}

/*
  Calculate the volume for a Cube
  Reference: https://www.cuemath.com/measurement/volume-of-cube/
  return length * length * length
*/
const volCube = (length) => {
logger.debug(`>>> Entering volCube(length=${length})`);
  isNumber(length, 'Length')
logger.debug(`<<< Exiting volCube(length=${length})`);
  return length ** 3
}

/*
  Calculate the volume for a Cone
  Reference: https://www.cuemath.com/measurement/volume-of-cone/
  return PI * radius^2 * height/3
*/
const volCone = (radius, height) => {
logger.debug(`>>> Entering volCone(radius=${radius},height=${height})`);
  isNumber(radius, 'Radius')
  isNumber(height, 'Height')
logger.debug(`<<< Exiting volCone(radius=${radius},height=${height})`);
  return (Math.PI * radius ** 2 * height) / 3.0
}

/*
  Calculate the volume for a Pyramid
  Reference: https://www.cuemath.com/measurement/volume-of-pyramid/
  return (baseLength * baseWidth * height) / 3
*/
const volPyramid = (baseLength, baseWidth, height) => {
logger.debug(`>>> Entering volPyramid(baseLength=${baseLength},baseWidth=${baseWidth},height=${height})`);
  isNumber(baseLength, 'BaseLength')
  isNumber(baseWidth, 'BaseWidth')
  isNumber(height, 'Height')
logger.debug(`<<< Exiting volPyramid(baseLength=${baseLength},baseWidth=${baseWidth},height=${height})`);
  return (baseLength * baseWidth * height) / 3.0
}

/*
  Calculate the volume for a Cylinder
  Reference: https://www.cuemath.com/measurement/volume-of-cylinder/
  return PI * radius^2 * height
*/
const volCylinder = (radius, height) => {
logger.debug(`>>> Entering volCylinder(radius=${radius},height=${height})`);
  isNumber(radius, 'Radius')
  isNumber(height, 'Height')
logger.debug(`<<< Exiting volCylinder(radius=${radius},height=${height})`);
  return Math.PI * radius ** 2 * height
}

/*
  Calculate the volume for a Triangular Prism
  Reference: http://lrd.kangan.edu.au/numbers/content/03_volume/04_page.htm
  return 1 / 2 * baseLengthTriangle * heightTriangle * height
*/
const volTriangularPrism = (baseLengthTriangle, heightTriangle, height) => {
logger.debug(`>>> Entering volTriangularPrism(baseLengthTriangle=${baseLengthTriangle},heightTriangle=${heightTriangle},height=${height})`);
  isNumber(baseLengthTriangle, 'BaseLengthTriangle')
  isNumber(heightTriangle, 'HeightTriangle')
  isNumber(height, 'Height')
logger.debug(`<<< Exiting volTriangularPrism(baseLengthTriangle=${baseLengthTriangle},heightTriangle=${heightTriangle},height=${height})`);
  return (1 / 2) * baseLengthTriangle * heightTriangle * height
}

/*
  Calculate the volume for a Pentagonal Prism
  Reference: https://www.cuemath.com/measurement/volume-of-pentagonal-prism/
  return 5/2 * pentagonalLength * pentagonalBaseLength * height
*/
const volPentagonalPrism = (pentagonalLength, pentagonalBaseLength, height) => {
logger.debug(`>>> Entering volPentagonalPrism(pentagonalLength=${pentagonalLength},pentagonalBaseLength=${pentagonalBaseLength},height=${height})`);
  isNumber(pentagonalLength, 'PentagonalLength')
  isNumber(pentagonalBaseLength, 'PentagonalBaseLength')
  isNumber(height, 'Height')
logger.debug(`<<< Exiting volPentagonalPrism(pentagonalLength=${pentagonalLength},pentagonalBaseLength=${pentagonalBaseLength},height=${height})`);
  return (5 / 2) * pentagonalLength * pentagonalBaseLength * height
}

/*
  Calculate the volume for a Sphere
  Reference: https://www.cuemath.com/measurement/volume-of-sphere/
  return 4/3 * PI * radius^3
*/
const volSphere = (radius) => {
logger.debug(`>>> Entering volSphere(radius=${radius})`);
  isNumber(radius, 'Radius')
logger.debug(`<<< Exiting volSphere(radius=${radius})`);
  return (4 / 3) * Math.PI * radius ** 3
}

/*
  Calculate the volume for a Hemisphere
  Reference: https://www.cuemath.com/measurement/volume-of-hemisphere/
  return (2 * PI * radius^3)/3
*/
const volHemisphere = (radius) => {
logger.debug(`>>> Entering volHemisphere(radius=${radius})`);
  isNumber(radius, 'Radius')
logger.debug(`<<< Exiting volHemisphere(radius=${radius})`);
  return (2.0 * Math.PI * radius ** 3) / 3.0
}

const isNumber = (number, noName = 'number') => {
logger.debug(`>>> Entering isNumber(number=${number},noName=${noName})`);
  if (typeof number !== 'number') {
    throw new TypeError('The ' + noName + ' should be Number type')
  } else if (number < 0 || !Number.isFinite(number)) {
	logger.debug(`<<< Exiting isNumber(number=${number},noName=${noName})`);
    throw new Error('The ' + noName + ' only accepts positive values')
  }
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
