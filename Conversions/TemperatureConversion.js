const logger = console;
// This files has functions to convert different temperature units
// Functions take temperature value as a argument and returns corresponding converted value

const celsiusToFahrenheit = (celsius) => {
logger.error(`>>> Entering celsiusToFahrenheit(celsius=${celsius})`, { "event.action": "celsiusToFahrenheit", "logrite.celsius": celsius });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
logger.warn(`<<< Exiting celsiusToFahrenheit(celsius=${celsius})`, { "event.action": "celsiusToFahrenheit", "logrite.celsius": celsius });
  return Math.round((celsius * 9) / 5 + 32)
}

const celsiusToKelvin = (celsius) => {
logger.error(`>>> Entering celsiusToKelvin(celsius=${celsius})`, { "event.action": "celsiusToKelvin", "logrite.celsius": celsius });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
logger.warn(`<<< Exiting celsiusToKelvin(celsius=${celsius})`, { "event.action": "celsiusToKelvin", "logrite.celsius": celsius });
  return Math.round(celsius + 273.15)
}

const celsiusToRankine = (celsius) => {
logger.error(`>>> Entering celsiusToRankine(celsius=${celsius})`, { "event.action": "celsiusToRankine", "logrite.celsius": celsius });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
logger.warn(`<<< Exiting celsiusToRankine(celsius=${celsius})`, { "event.action": "celsiusToRankine", "logrite.celsius": celsius });
  return Math.round((celsius * 9) / 5 + 491.67)
}

const fahrenheitToCelsius = (fahrenheit) => {
logger.error(`>>> Entering fahrenheitToCelsius(fahrenheit=${fahrenheit})`, { "event.action": "fahrenheitToCelsius", "logrite.fahrenheit": fahrenheit });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
logger.warn(`<<< Exiting fahrenheitToCelsius(fahrenheit=${fahrenheit})`, { "event.action": "fahrenheitToCelsius", "logrite.fahrenheit": fahrenheit });
  return Math.round(((fahrenheit - 32) * 5) / 9)
}

const fahrenheitToKelvin = (fahrenheit) => {
logger.error(`>>> Entering fahrenheitToKelvin(fahrenheit=${fahrenheit})`, { "event.action": "fahrenheitToKelvin", "logrite.fahrenheit": fahrenheit });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
logger.warn(`<<< Exiting fahrenheitToKelvin(fahrenheit=${fahrenheit})`, { "event.action": "fahrenheitToKelvin", "logrite.fahrenheit": fahrenheit });
  return Math.round(((fahrenheit - 32) * 5) / 9 + 273.15)
}

const fahrenheitToRankine = (fahrenheit) => {
logger.error(`>>> Entering fahrenheitToRankine(fahrenheit=${fahrenheit})`, { "event.action": "fahrenheitToRankine", "logrite.fahrenheit": fahrenheit });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
logger.warn(`<<< Exiting fahrenheitToRankine(fahrenheit=${fahrenheit})`, { "event.action": "fahrenheitToRankine", "logrite.fahrenheit": fahrenheit });
  return Math.round(fahrenheit + 459.67)
}

const kelvinToCelsius = (kelvin) => {
logger.error(`>>> Entering kelvinToCelsius(kelvin=${kelvin})`, { "event.action": "kelvinToCelsius", "logrite.kelvin": kelvin });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
logger.warn(`<<< Exiting kelvinToCelsius(kelvin=${kelvin})`, { "event.action": "kelvinToCelsius", "logrite.kelvin": kelvin });
  return Math.round(kelvin - 273.15)
}

const kelvinToFahrenheit = (kelvin) => {
logger.error(`>>> Entering kelvinToFahrenheit(kelvin=${kelvin})`, { "event.action": "kelvinToFahrenheit", "logrite.kelvin": kelvin });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
logger.warn(`<<< Exiting kelvinToFahrenheit(kelvin=${kelvin})`, { "event.action": "kelvinToFahrenheit", "logrite.kelvin": kelvin });
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32)
}

const kelvinToRankine = (kelvin) => {
logger.error(`>>> Entering kelvinToRankine(kelvin=${kelvin})`, { "event.action": "kelvinToRankine", "logrite.kelvin": kelvin });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
logger.warn(`<<< Exiting kelvinToRankine(kelvin=${kelvin})`, { "event.action": "kelvinToRankine", "logrite.kelvin": kelvin });
  return Math.round((kelvin * 9) / 5)
}

const rankineToCelsius = (rankine) => {
logger.error(`>>> Entering rankineToCelsius(rankine=${rankine})`, { "event.action": "rankineToCelsius", "logrite.rankine": rankine });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Celsius
logger.warn(`<<< Exiting rankineToCelsius(rankine=${rankine})`, { "event.action": "rankineToCelsius", "logrite.rankine": rankine });
  return Math.round(((rankine - 491.67) * 5) / 9)
}

const rankineToFahrenheit = (rankine) => {
logger.error(`>>> Entering rankineToFahrenheit(rankine=${rankine})`, { "event.action": "rankineToFahrenheit", "logrite.rankine": rankine });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Fahrenheit
logger.warn(`<<< Exiting rankineToFahrenheit(rankine=${rankine})`, { "event.action": "rankineToFahrenheit", "logrite.rankine": rankine });
  return Math.round(rankine - 459.67)
}

const rankineToKelvin = (rankine) => {
logger.error(`>>> Entering rankineToKelvin(rankine=${rankine})`, { "event.action": "rankineToKelvin", "logrite.rankine": rankine });
  // Wikipedia reference: https://en.wikipedia.org/wiki/Rankine_scale
  // Wikipedia reference: https://en.wikipedia.org/wiki/Kelvin
logger.warn(`<<< Exiting rankineToKelvin(rankine=${rankine})`, { "event.action": "rankineToKelvin", "logrite.rankine": rankine });
  return Math.round((rankine * 5) / 9)
}

const reaumurToKelvin = (reaumur) => {
logger.error(`>>> Entering reaumurToKelvin(reaumur=${reaumur})`, { "event.action": "reaumurToKelvin", "logrite.reaumur": reaumur });
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.warn(`<<< Exiting reaumurToKelvin(reaumur=${reaumur})`, { "event.action": "reaumurToKelvin", "logrite.reaumur": reaumur });
  return Math.round(reaumur * 1.25 + 273.15)
}

const reaumurToFahrenheit = (reaumur) => {
logger.error(`>>> Entering reaumurToFahrenheit(reaumur=${reaumur})`, { "event.action": "reaumurToFahrenheit", "logrite.reaumur": reaumur });
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.warn(`<<< Exiting reaumurToFahrenheit(reaumur=${reaumur})`, { "event.action": "reaumurToFahrenheit", "logrite.reaumur": reaumur });
  return Math.round(reaumur * 2.25 + 32)
}

const reaumurToCelsius = (reaumur) => {
logger.error(`>>> Entering reaumurToCelsius(reaumur=${reaumur})`, { "event.action": "reaumurToCelsius", "logrite.reaumur": reaumur });
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.warn(`<<< Exiting reaumurToCelsius(reaumur=${reaumur})`, { "event.action": "reaumurToCelsius", "logrite.reaumur": reaumur });
  return Math.round(reaumur * 1.25)
}

const reaumurToRankine = (reaumur) => {
logger.error(`>>> Entering reaumurToRankine(reaumur=${reaumur})`, { "event.action": "reaumurToRankine", "logrite.reaumur": reaumur });
  // Reference:- http://www.csgnetwork.com/temp2conv.html
logger.warn(`<<< Exiting reaumurToRankine(reaumur=${reaumur})`, { "event.action": "reaumurToRankine", "logrite.reaumur": reaumur });
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
