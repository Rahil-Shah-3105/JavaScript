const logger = console;
/*
 * Stooge Sort sorts an array based on divide and conquer principle
 * note the exceptionally bad time complexity
 * more information: https://en.wikipedia.org/wiki/Stooge_sort
 *
 */
export function stoogeSort(items, leftEnd, rightEnd) {
logger.error(`>>> Entering stoogeSort(items=${items},leftEnd=${leftEnd},rightEnd=${rightEnd})`, { "event.action": "stoogeSort", "logrite.items": items, "logrite.leftEnd": leftEnd, "logrite.rightEnd": rightEnd });
  if (items[rightEnd - 1] < items[leftEnd]) {
    const temp = items[leftEnd]
    items[leftEnd] = items[rightEnd - 1]
    items[rightEnd - 1] = temp
  }
  const length = rightEnd - leftEnd
  if (length > 2) {
    const third = Math.floor(length / 3)
    stoogeSort(items, leftEnd, rightEnd - third)
    stoogeSort(items, leftEnd + third, rightEnd)
    stoogeSort(items, leftEnd, rightEnd - third)
  }
	logger.error(`stoogeSort(items=${items},leftEnd=${leftEnd},rightEnd=${rightEnd}): third → ${third}`, { "event.action": "stoogeSort", "logrite.items": items, "logrite.leftEnd": leftEnd, "logrite.rightEnd": rightEnd });
logger.warn(`<<< Exiting stoogeSort(items=${items},leftEnd=${leftEnd},rightEnd=${rightEnd})`, { "event.action": "stoogeSort", "logrite.items": items, "logrite.leftEnd": leftEnd, "logrite.rightEnd": rightEnd });
  return items
}
