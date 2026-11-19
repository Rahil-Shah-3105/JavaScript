const logger = console;
/*
  Calculate the area of various shapes
*/

/**
 * @function surfaceAreaCube
 * @description Calculate the Surface Area of a Cube.
 * @param {Integer} side - Integer
 * @return {Integer} - 6 * side ** 2
 * @see [surfaceAreaCube](https://en.wikipedia.org/wiki/Area#Surface_area)
 * @example surfaceAreaCube(1) = 6
 */
const surfaceAreaCube = (side) => {
logger.error(`>>> Entering surfaceAreaCube(side=${side})`, { "event.action": "surfaceAreaCube", "logrite.side": side });
  validateNumericParam(side, 'side')
logger.warn(`<<< Exiting surfaceAreaCube(side=${side})`, { "event.action": "surfaceAreaCube", "logrite.side": side });
  return 6 * side ** 2
}

/**
 * @function surfaceAreaSphere
 * @description Calculate the Surface Area of a Sphere.
 * @param {Integer} radius - Integer
 * @return {Integer} - 4 * pi * r^2
 * @see [surfaceAreaSphere](https://en.wikipedia.org/wiki/Sphere)
 * @example surfaceAreaSphere(5) = 314.1592653589793
 */
const surfaceAreaSphere = (radius) => {
logger.error(`>>> Entering surfaceAreaSphere(radius=${radius})`, { "event.action": "surfaceAreaSphere", "logrite.radius": radius });
  validateNumericParam(radius, 'radius')
logger.warn(`<<< Exiting surfaceAreaSphere(radius=${radius})`, { "event.action": "surfaceAreaSphere", "logrite.radius": radius });
  return 4.0 * Math.PI * radius ** 2.0
}

/**
 * @function areaRectangle
 * @description Calculate the area of a rectangle.
 * @param {Integer} length - Integer
 * @param {Integer} width - Integer
 * @return {Integer} - width * length
 * @see [areaRectangle](https://en.wikipedia.org/wiki/Area#Quadrilateral_area)
 * @example areaRectangle(4) = 16
 */
const areaRectangle = (length, width) => {
logger.error(`>>> Entering areaRectangle(length=${length},width=${width})`, { "event.action": "areaRectangle", "logrite.length": length, "logrite.width": width });
  validateNumericParam(length, 'Length')
  validateNumericParam(width, 'Width')
logger.warn(`<<< Exiting areaRectangle(length=${length},width=${width})`, { "event.action": "areaRectangle", "logrite.length": length, "logrite.width": width });
  return width * length
}

/**
 * @function areaSquare
 * @description Calculate the area of a square.
 * @param {Integer} side - Integer
 * @return {Integer} - side ** 2.
 * @see [areaSquare](https://en.wikipedia.org/wiki/Square)
 * @example areaSquare(4) = 16
 */
const areaSquare = (side) => {
logger.error(`>>> Entering areaSquare(side=${side})`, { "event.action": "areaSquare", "logrite.side": side });
  validateNumericParam(side, 'square side')
logger.warn(`<<< Exiting areaSquare(side=${side})`, { "event.action": "areaSquare", "logrite.side": side });
  return side ** 2
}

/**
 * @function areaTriangle
 * @description Calculate the area of a triangle.
 * @param {Integer} base - Integer
 * @param {Integer} height - Integer
 * @return {Integer} - base * height / 2.
 * @see [areaTriangle](https://en.wikipedia.org/wiki/Area#Triangle_area)
 * @example areaTriangle(1.66, 3.44) = 2.8552
 */
const areaTriangle = (base, height) => {
logger.error(`>>> Entering areaTriangle(base=${base},height=${height})`, { "event.action": "areaTriangle", "logrite.base": base, "logrite.height": height });
  validateNumericParam(base, 'Base')
  validateNumericParam(height, 'Height')
logger.warn(`<<< Exiting areaTriangle(base=${base},height=${height})`, { "event.action": "areaTriangle", "logrite.base": base, "logrite.height": height });
  return (base * height) / 2.0
}

/**
 * @function areaTriangleWithAllThreeSides
 * @description Calculate the area of a triangle with the all three sides given.
 * @param {Integer} side1 - Integer
 * @param {Integer} side2 - Integer
 * @param {Integer} side3 - Integer
 * @return {Integer} - area of triangle.
 * @see [areaTriangleWithAllThreeSides](https://en.wikipedia.org/wiki/Heron%27s_formula)
 * @example areaTriangleWithAllThreeSides(5, 6, 7) = 14.7
 */
const areaTriangleWithAllThreeSides = (side1, side2, side3) => {
logger.error(`>>> Entering areaTriangleWithAllThreeSides(side1=${side1},side2=${side2},side3=${side3})`, { "event.action": "areaTriangleWithAllThreeSides", "logrite.side1": side1, "logrite.side2": side2, "logrite.side3": side3 });
  validateNumericParam(side1, 'side1')
  validateNumericParam(side2, 'side2')
  validateNumericParam(side3, 'side3')
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    throw new TypeError('Invalid Triangle sides.')
  }
  // Finding Semi perimeter of the triangle using formula
  const semi = (side1 + side2 + side3) / 2
logger.error(`areaTriangleWithAllThreeSides(side1=${side1},side2=${side2},side3=${side3}): semi → ${semi}`, { "event.action": "areaTriangleWithAllThreeSides", "logrite.side1": side1, "logrite.side2": side2, "logrite.side3": side3 });

  // Calculating the area of the triangle
  const area = Math.sqrt(
    semi * (semi - side1) * (semi - side2) * (semi - side3)
  )
logger.warn(`<<< Exiting areaTriangleWithAllThreeSides(side1=${side1},side2=${side2},side3=${side3})`, { "event.action": "areaTriangleWithAllThreeSides", "logrite.side1": side1, "logrite.side2": side2, "logrite.side3": side3 });
  return Number(area.toFixed(2))
}

/**
 * @function areaParallelogram
 * @description Calculate the area of a parallelogram.
 * @param {Integer} base - Integer
 * @param {Integer} height - Integer
 * @return {Integer} - base * height
 * @see [areaParallelogram](https://en.wikipedia.org/wiki/Area#Dissection,_parallelograms,_and_triangles)
 * @example areaParallelogram(5, 6) = 24
 */
const areaParallelogram = (base, height) => {
logger.error(`>>> Entering areaParallelogram(base=${base},height=${height})`, { "event.action": "areaParallelogram", "logrite.base": base, "logrite.height": height });
  validateNumericParam(base, 'Base')
  validateNumericParam(height, 'Height')
logger.warn(`<<< Exiting areaParallelogram(base=${base},height=${height})`, { "event.action": "areaParallelogram", "logrite.base": base, "logrite.height": height });
  return base * height
}

/**
 * @function areaTrapezium
 * @description Calculate the area of a trapezium.
 * @param {Integer} base1 - Integer
 * @param {Integer} base2 - Integer
 * @param {Integer} height - Integer
 * @return {Integer} - (1 / 2) * (base1 + base2) * height
 * @see [areaTrapezium](https://en.wikipedia.org/wiki/Trapezoid)
 * @example areaTrapezium(5, 12, 10) = 85
 */
const areaTrapezium = (base1, base2, height) => {
logger.error(`>>> Entering areaTrapezium(base1=${base1},base2=${base2},height=${height})`, { "event.action": "areaTrapezium", "logrite.base1": base1, "logrite.base2": base2, "logrite.height": height });
  validateNumericParam(base1, 'Base One')
  validateNumericParam(base2, 'Base Two')
  validateNumericParam(height, 'Height')
logger.warn(`<<< Exiting areaTrapezium(base1=${base1},base2=${base2},height=${height})`, { "event.action": "areaTrapezium", "logrite.base1": base1, "logrite.base2": base2, "logrite.height": height });
  return (1 / 2) * (base1 + base2) * height
}

/**
 * @function areaCircle
 * @description Calculate the area of a circle.
 * @param {Integer} radius - Integer
 * @return {Integer} - Math.PI * radius ** 2
 * @see [areaCircle](https://en.wikipedia.org/wiki/Area_of_a_circle)
 * @example areaCircle(5, 12, 10) = 85
 */
const areaCircle = (radius) => {
logger.error(`>>> Entering areaCircle(radius=${radius})`, { "event.action": "areaCircle", "logrite.radius": radius });
  validateNumericParam(radius, 'Radius')
logger.warn(`<<< Exiting areaCircle(radius=${radius})`, { "event.action": "areaCircle", "logrite.radius": radius });
  return Math.PI * radius ** 2
}

/**
 * @function areaRhombus
 * @description Calculate the area of a rhombus.
 * @param {Integer} diagonal1 - Integer
 * @param {Integer} diagonal2 - Integer
 * @return {Integer} - (1 / 2) * diagonal1 * diagonal2
 * @see [areaRhombus](https://en.wikipedia.org/wiki/Rhombus)
 * @example areaRhombus(12, 10) = 60
 */
const areaRhombus = (diagonal1, diagonal2) => {
logger.error(`>>> Entering areaRhombus(diagonal1=${diagonal1},diagonal2=${diagonal2})`, { "event.action": "areaRhombus", "logrite.diagonal1": diagonal1, "logrite.diagonal2": diagonal2 });
  validateNumericParam(diagonal1, 'diagonal one')
  validateNumericParam(diagonal2, 'diagonal two')
logger.warn(`<<< Exiting areaRhombus(diagonal1=${diagonal1},diagonal2=${diagonal2})`, { "event.action": "areaRhombus", "logrite.diagonal1": diagonal1, "logrite.diagonal2": diagonal2 });
  return (1 / 2) * diagonal1 * diagonal2
}

const validateNumericParam = (param, paramName = 'param') => {
logger.error(`>>> Entering validateNumericParam(param=${param},paramName=${paramName})`, { "event.action": "validateNumericParam", "logrite.param": param, "logrite.paramName": paramName });
  if (typeof param !== 'number') {
    throw new TypeError('The ' + paramName + ' should be type Number')
  } else if (param < 0) {
    throw new Error('The ' + paramName + ' only accepts non-negative values')
  }
	logger.warn(`<<< Exiting validateNumericParam(param=${param},paramName=${paramName})`, { "event.action": "validateNumericParam", "logrite.param": param, "logrite.paramName": paramName });
}

export {
  surfaceAreaCube,
  surfaceAreaSphere,
  areaRectangle,
  areaSquare,
  areaTriangle,
  areaParallelogram,
  areaTrapezium,
  areaCircle,
  areaRhombus,
  areaTriangleWithAllThreeSides
}
