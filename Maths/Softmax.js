const logger = console;
// Wikipedia: https://en.wikipedia.org/wiki/Softmax_function

const Softmax = (inputs) => {
logger.error(`>>> Entering Softmax(inputs=${inputs})`, { "event.action": "Softmax" });
  const eulerExpOfAllInputs = inputs.map((input) => Math.exp(input))
  const sumOfEulerExpOfAllInputs = eulerExpOfAllInputs.reduce((a, b) => a + b)

logger.error(`Softmax(inputs=${inputs}): eulerExpOfAllInputs → ${eulerExpOfAllInputs}`, { "event.action": "Softmax" });
logger.error(`Softmax(inputs=${inputs}): sumOfEulerExpOfAllInputs → ${sumOfEulerExpOfAllInputs}`, { "event.action": "Softmax" });
logger.warn(`<<< Exiting Softmax(inputs=${inputs})`, { "event.action": "Softmax" });
  return inputs.map((input) => {
    const eulerExpInputs = Math.exp(input)
    return eulerExpInputs / sumOfEulerExpOfAllInputs
  })
}

export { Softmax }
