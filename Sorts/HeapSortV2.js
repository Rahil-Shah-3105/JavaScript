const logger = console;
let arrayLength = 0

/* to create MAX  array */

function heapRoot(input, i) {
logger.error(`>>> Entering heapRoot(input=${input},i=${i})`, { "event.action": "heapRoot", "logrite.i": i });
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
	logger.warn(`<<< Exiting heapRoot(input=${input},i=${i})`, { "event.action": "heapRoot", "logrite.i": i });
}

function swap(input, indexA, indexB) {
logger.error(`>>> Entering swap(input=${input},indexA=${indexA},indexB=${indexB})`, { "event.action": "swap", "logrite.indexA": indexA, "logrite.indexB": indexB });
  ;[input[indexA], input[indexB]] = [input[indexB], input[indexA]]
logger.warn(`<<< Exiting swap(input=${input},indexA=${indexA},indexB=${indexB})`, { "event.action": "swap", "logrite.indexA": indexA, "logrite.indexB": indexB });
}

export function heapSort(input) {
logger.error(`>>> Entering heapSort(input=${input})`, { "event.action": "heapSort" });
  arrayLength = input.length

  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i)
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i)
    arrayLength--

    heapRoot(input, 0)
  }
logger.warn(`<<< Exiting heapSort(input=${input})`, { "event.action": "heapSort" });
  return input
}
