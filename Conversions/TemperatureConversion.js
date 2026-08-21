const logger = console;
// This files has functions to convert different temperature units
// Functions take temperature value as a argument and returns corresponding converted value

const celsiusToFahrenheit = (celsius) => {
logger.debug(`>>> Entering celsiusToFahrenheit(celsius=${celsius})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
logger.debug(`<<< Exiting celsiusToFahrenheit(celsius=${celsius})`);
  return Math.round((celsius * 9) / 5 + 32)
}

const celsiusToKelvin = (celsius) => {
logger.debug(`>>> Entering celsiusToKelvin(celsius=${celsius})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
logger.debug(`<<< Exiting celsiusToKelvin(celsius=${celsius})`);
  return Math.round(celsius + 273.15)
}

const celsiusToRankine = (celsius) => {
logger.debug(`>>> Entering celsiusToRankine(celsius=${celsius})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
logger.debug(`<<< Exiting celsiusToRankine(celsius=${celsius})`);
  return Math.round((celsius * 9) / 5 + 491.67)
}

const fahrenheitToCelsius = (fahrenheit) => {
logger.debug(`>>> Entering fahrenheitToCelsius(fahrenheit=${fahrenheit})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
logger.debug(`<<< Exiting fahrenheitToCelsius(fahrenheit=${fahrenheit})`);
  return Math.round(((fahrenheit - 32) * 5) / 9)
}

const fahrenheitToKelvin = (fahrenheit) => {
logger.debug(`>>> Entering fahrenheitToKelvin(fahrenheit=${fahrenheit})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
logger.debug(`<<< Exiting fahrenheitToKelvin(fahrenheit=${fahrenheit})`);
  return Math.round(((fahrenheit - 32) * 5) / 9 + 273.15)
}

const fahrenheitToRankine = (fahrenheit) => {
logger.debug(`>>> Entering fahrenheitToRankine(fahrenheit=${fahrenheit})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
logger.debug(`<<< Exiting fahrenheitToRankine(fahrenheit=${fahrenheit})`);
  return Math.round(fahrenheit + 459.67)
}

const kelvinToCelsius = (kelvin) => {
logger.debug(`>>> Entering kelvinToCelsius(kelvin=${kelvin})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
logger.debug(`<<< Exiting kelvinToCelsius(kelvin=${kelvin})`);
  return Math.round(kelvin - 273.15)
}

const kelvinToFahrenheit = (kelvin) => {
logger.debug(`>>> Entering kelvinToFahrenheit(kelvin=${kelvin})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
logger.debug(`<<< Exiting kelvinToFahrenheit(kelvin=${kelvin})`);
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32)
}

const kelvinToRankine = (kelvin) => {
logger.debug(`>>> Entering kelvinToRankine(kelvin=${kelvin})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
logger.debug(`<<< Exiting kelvinToRankine(kelvin=${kelvin})`);
  return Math.round((kelvin * 9) / 5)
}

const rankineToCelsius = (rankine) => {
logger.debug(`>>> Entering rankineToCelsius(rankine=${rankine})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
logger.debug(`<<< Exiting rankineToCelsius(rankine=${rankine})`);
  return Math.round(((rankine - 491.67) * 5) / 9)
}

const rankineToFahrenheit = (rankine) => {
logger.debug(`>>> Entering rankineToFahrenheit(rankine=${rankine})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
logger.debug(`<<< Exiting rankineToFahrenheit(rankine=${rankine})`);
  return Math.round(rankine - 459.67)
}

const rankineToKelvin = (rankine) => {
logger.debug(`>>> Entering rankineToKelvin(rankine=${rankine})`);
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
logger.debug(`<<< Exiting rankineToKelvin(rankine=${rankine})`);
  return Math.round((rankine * 5) / 9)
}

const reaumurToKelvin = (reaumur) => {
logger.debug(`>>> Entering reaumurToKelvin(reaumur=${reaumur})`);
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.debug(`<<< Exiting reaumurToKelvin(reaumur=${reaumur})`);
  return Math.round(reaumur * 1.25 + 273.15)
}

const reaumurToFahrenheit = (reaumur) => {
logger.debug(`>>> Entering reaumurToFahrenheit(reaumur=${reaumur})`);
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.debug(`<<< Exiting reaumurToFahrenheit(reaumur=${reaumur})`);
  return Math.round(reaumur * 2.25 + 32)
}

const reaumurToCelsius = (reaumur) => {
logger.debug(`>>> Entering reaumurToCelsius(reaumur=${reaumur})`);
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.debug(`<<< Exiting reaumurToCelsius(reaumur=${reaumur})`);
  return Math.round(reaumur * 1.25)
}

const reaumurToRankine = (reaumur) => {
logger.debug(`>>> Entering reaumurToRankine(reaumur=${reaumur})`);
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.debug(`<<< Exiting reaumurToRankine(reaumur=${reaumur})`);
  return Math.round(reaumur * 2.25 + 32 + 459.67)
}

export {
  celsiusToFahrenheit,
  celsiusToKelvin,
  celsiusToRankine,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
  kelvinToCelsius,
  kelvinToFahrenheit,
  kelvinToRankine,
  rankineToCelsius,
  rankineToFahrenheit,
  rankineToKelvin,
  reaumurToCelsius,
  reaumurToFahrenheit,
  reaumurToKelvin,
  reaumurToRankine
}
