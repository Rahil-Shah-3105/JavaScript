const logger = console;
// Wikipedia: https://en.wikipedia.org/wiki/Softmax_function

const Softmax = (inputs) => {
logger.debug(`>>> Entering Softmax(inputs=${inputs})`);
  const eulerExpOfAllInputs = inputs.map((input) => Math.exp(input))
  const sumOfEulerExpOfAllInputs = eulerExpOfAllInputs.reduce((a, b) => a + b)

logger.debug(`Softmax(inputs=${inputs}): eulerExpOfAllInputs → ${eulerExpOfAllInputs}`);
logger.debug(`Softmax(inputs=${inputs}): sumOfEulerExpOfAllInputs → ${sumOfEulerExpOfAllInputs}`);
logger.debug(`<<< Exiting Softmax(inputs=${inputs})`);
  return inputs.map((input) => {
    const eulerExpInputs = Math.exp(input)
    return eulerExpInputs / sumOfEulerExpOfAllInputs
  })
}

export { Softmax }
