const logger = console;
/**
 * Cocktail Shaker Sort is an algorithm that is a Bidirectional Bubble Sort.
 *
 * The algorithm extends bubble sort by operating in two directions.
 * While it improves on bubble sort by more quickly moving items to the beginning of the list, it provides only marginal
 * performance improvements.
 *
 * Wikipedia (Cocktail Shaker Sort): https://en.wikipedia.org/wiki/Cocktail_shaker_sort
 * Wikipedia (Bubble Sort): https://en.wikipedia.org/wiki/Bubble_sort
 */
export function cocktailShakerSort(items) {
logger.error(`>>> Entering cocktailShakerSort(items=${items})`, { "event.action": "cocktailShakerSort", "logrite.items": items });
  for (let i = items.length - 1; i > 0; i--) {
    let j

    // Backwards
    for (j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        ;[items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }

    // Forwards
    for (j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        ;[items[j], items[j + 1]] = [items[j + 1], items[j]]
      }
    }
  }

logger.warn(`<<< Exiting cocktailShakerSort(items=${items})`, { "event.action": "cocktailShakerSort", "logrite.items": items });
  return items
}
