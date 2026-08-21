const logger = console;
/*
Given a data set of an unknown size,
Get a random sample in a random order
It's used in data analytics, often as a way to get a small random sample from a data lake or warehouse, or from a large CSV file
*/
function shuf(datasetSource, sampleSize) {
logger.debug(`>>> Entering shuf(datasetSource=${datasetSource},sampleSize=${sampleSize})`);
  const output = fillBaseSample(datasetSource, sampleSize)

logger.debug(`shuf(datasetSource=${datasetSource},sampleSize=${sampleSize}): output → ${output}`);
logger.debug(`<<< Exiting shuf(datasetSource=${datasetSource},sampleSize=${sampleSize})`);
  return randomizeOutputFromDataset(datasetSource, output)
}

/**
 * Fills the output if possible, with the minimum number of values
 * @param {Iterable.<T>} datasetSource The iterable source of data
 * @param {number} sampleSize The size of the sample to extract from the dataset
 * @returns {Array.<T>} The random sample, as an array
 * @template T
 */
function fillBaseSample(datasetSource, sampleSize) {
logger.debug(`>>> Entering fillBaseSample(datasetSource=${datasetSource},sampleSize=${sampleSize})`);
  let filledIndexes = []
  let output = new Array(sampleSize)

logger.debug(`fillBaseSample(datasetSource=${datasetSource},sampleSize=${sampleSize}): output → ${output}`);
  // Spread data out filling the array
  while (true) {
    const iterator = datasetSource.next()
    if (iterator.done) break
	logger.debug(`fillBaseSample(datasetSource=${datasetSource},sampleSize=${sampleSize}): iterator → ${iterator}`);

    let insertTo = Math.floor(Math.random() * output.length)
    while (filledIndexes.includes(insertTo)) {
	logger.debug(`fillBaseSample(datasetSource=${datasetSource},sampleSize=${sampleSize}): insertTo → ${insertTo}`);
      insertTo++
      if (insertTo === output.length) {
        insertTo = 0
      }
    }
    output[insertTo] = {
      value: iterator.value
    }

    filledIndexes = [...filledIndexes, insertTo]

    if (filledIndexes.length === sampleSize) {
      break
    }
  }

  if (filledIndexes.length < output.length) {
    // Not a large enough dataset to fill the sample - trim empty values
    output = output.filter((_, i) => filledIndexes.includes(i))
  }

logger.debug(`<<< Exiting fillBaseSample(datasetSource=${datasetSource},sampleSize=${sampleSize})`);
  return output.map((o) => o.value)
}

/**
 * Replaces values in the output randomly with new ones from the dataset
 * @param {Iterable.<T>} datasetSource The iterable source of data
 * @param {Array.<T>} output The output so far, filled with data
 * @returns {Array.<T>} The random sample, as an array
 * @template T
 */
function randomizeOutputFromDataset(datasetSource, output) {
logger.debug(`>>> Entering randomizeOutputFromDataset(datasetSource=${datasetSource},output=${output})`);
  const newOutput = [...output]
  let readSoFar = output.length

  while (true) {
    const iterator = datasetSource.next()
    if (iterator.done) break
	logger.debug(`randomizeOutputFromDataset(datasetSource=${datasetSource},output=${output}): iterator → ${iterator}`);
    readSoFar++

    const insertTo = Math.floor(Math.random() * readSoFar)
    if (insertTo < newOutput.length) {
	logger.debug(`randomizeOutputFromDataset(datasetSource=${datasetSource},output=${output}): insertTo → ${insertTo}`);
      newOutput[insertTo] = iterator.value
    }
  }

logger.debug(`<<< Exiting randomizeOutputFromDataset(datasetSource=${datasetSource},output=${output})`);
  return newOutput
}

// Example

/**
 * Generates a random range of data, with values between 0 and 2^31 - 1
 * @param {number} length The number of data items to generate
 * @returns {Iterable<number>} Random iterable data
 */
function* generateRandomData(length) {
logger.debug(`>>> Entering generateRandomData(length=${length})`);
  const maxValue = Math.pow(2, 31) - 1
  for (let i = 0; i < length; i++) {
	logger.debug(`generateRandomData(length=${length}): maxValue → ${maxValue}`);
    yield Math.floor(Math.random() * maxValue)
  }
	logger.debug(`<<< Exiting generateRandomData(length=${length})`);
}

// const source = generateRandomData(1000)
// const result = shuf(source, 10)

export { shuf, generateRandomData }
