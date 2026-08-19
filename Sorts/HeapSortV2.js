const logger = console;
let arrayLength = 0

/* to create MAX  array */

function heapRoot(input, i) {
logger.debug(`>>> Entering heapRoot(input=${input},i=${i})`);
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i

  if (left < arrayLength && input[left] > input[max]) {
    max = left
  }

  if (right < arrayLength && input[right] > input[max]) {
    max = right
  }

  if (max !== i) {
    swap(input, i, max)
    heapRoot(input, max)
  }
	logger.debug(`<<< Exiting heapRoot(input=${input},i=${i})`);
}

function swap(input, indexA, indexB) {
logger.debug(`>>> Entering swap(input=${input},indexA=${indexA},indexB=${indexB})`);
  ;[input[indexA], input[indexB]] = [input[indexB], input[indexA]]
logger.debug(`<<< Exiting swap(input=${input},indexA=${indexA},indexB=${indexB})`);
}

export function heapSort(input) {
logger.debug(`>>> Entering heapSort(input=${input})`);
  arrayLength = input.length

  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i)
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i)
    arrayLength--

    heapRoot(input, 0)
  }
logger.debug(`<<< Exiting heapSort(input=${input})`);
  return input
}
