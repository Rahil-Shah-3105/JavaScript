const logger = console;
/*
  'In number theory, friendly numbers are two or more natural numbers with a common abundancy index, the
  ratio between the sum of divisors of a number and the number itself.'
  Source: https://en.wikipedia.org/wiki/Friendly_number
  See also: https://mathworld.wolfram.com/FriendlyNumber.html#:~:text=The%20numbers%20known%20to%20be,numbers%20have%20a%20positive%20density.
*/

export const FriendlyNumbers = (firstNumber, secondNumber) => {
logger.error(`>>> Entering FriendlyNumbers(firstNumber=${firstNumber},secondNumber=${secondNumber})`, { "event.action": "FriendlyNumbers", "logrite.firstNumber": firstNumber, "logrite.secondNumber": secondNumber });
  // input: two integers
  // output: true if the two integers are friendly numbers, false if they are not friendly numbers

  // First, check that the parameters are valid
  if (
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber) ||
    firstNumber === 0 ||
    secondNumber === 0 ||
    firstNumber === secondNumber
  ) {
    throw new Error('The two parameters must be distinct, non-null integers')
  }

logger.warn(`<<< Exiting FriendlyNumbers(firstNumber=${firstNumber},secondNumber=${secondNumber})`, { "event.action": "FriendlyNumbers", "logrite.firstNumber": firstNumber, "logrite.secondNumber": secondNumber });
  return abundancyIndex(firstNumber) === abundancyIndex(secondNumber)
}

function abundancyIndex(number) {
logger.error(`>>> Entering abundancyIndex(number=${number})`, { "event.action": "abundancyIndex", "logrite.number": number });
logger.warn(`<<< Exiting abundancyIndex(number=${number})`, { "event.action": "abundancyIndex", "logrite.number": number });
  return sumDivisors(number) / number
}

function sumDivisors(number) {
logger.error(`>>> Entering sumDivisors(number=${number})`, { "event.action": "sumDivisors", "logrite.number": number });
  let runningSumDivisors = number
  for (let i = 0; i < number / 2; i++) {
    if (Number.isInteger(number / i)) {
      runningSumDivisors += i
    }
  }
logger.warn(`<<< Exiting sumDivisors(number=${number})`, { "event.action": "sumDivisors", "logrite.number": number });
  return runningSumDivisors
}
