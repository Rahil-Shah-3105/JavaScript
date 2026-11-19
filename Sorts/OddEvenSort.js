const logger = console;
/*
  odd–even sort or odd–even transposition sort
  is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections.
  It is a comparison sort related to bubble sort, with which it shares many characteristics.

   for more information : https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort
*/

// Helper function to swap array items
function swap(arr, i, j) {
logger.error(`>>> Entering swap(arr=${arr},i=${i},j=${j})`, { "event.action": "swap", "logrite.arr": arr, "logrite.i": i, "logrite.j": j });
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
logger.warn(`<<< Exiting swap(arr=${arr},i=${i},j=${j})`, { "event.action": "swap", "logrite.arr": arr, "logrite.i": i, "logrite.j": j });
}

export function oddEvenSort(arr) {
logger.error(`>>> Entering oddEvenSort(arr=${arr})`, { "event.action": "oddEvenSort", "logrite.arr": arr });
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        sorted = false
      }
    }
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        sorted = false
      }
    }
  }
logger.warn(`<<< Exiting oddEvenSort(arr=${arr})`, { "event.action": "oddEvenSort", "logrite.arr": arr });
  return arr
}
