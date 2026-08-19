const logger = console;
class LRUCache {
  // LRU Cache to store a given capacity of data
  #capacity

  /**
   * @param {number} capacity - the capacity of LRUCache
   * @returns {LRUCache} - sealed
   */
  constructor(capacity) {
	logger.debug(`>>> Entering constructor(capacity=${capacity})`);
    if (!Number.isInteger(capacity) || capacity < 0) {
      throw new TypeError('Invalid capacity')
    }

    this.#capacity = ~~capacity
    this.misses = 0
    this.hits = 0
	logger.debug(`constructor(capacity=${capacity}): this.misses → ${this.misses}`);
    this.cache = new Map()

	logger.debug(`constructor(capacity=${capacity}): this.hits → ${this.hits}`);
	logger.debug(`<<< Exiting constructor(capacity=${capacity})`);
    return Object.seal(this)
  }

  get info() {
	logger.debug('>>> Entering info()');
	logger.debug('<<< Exiting info()');
    return Object.freeze({
      misses: this.misses,
      hits: this.hits,
      capacity: this.capacity,
      size: this.size
    })
  }

  get size() {
	logger.debug('>>> Entering size()');
    return this.cache.size
  }

  get capacity() {
	logger.debug('>>> Entering capacity()');
	logger.debug('<<< Exiting capacity()');
    return this.#capacity
  }

  set capacity(newCapacity) {
    if (newCapacity < 0) {
      throw new RangeError('Capacity should be greater than 0')
    }

    if (newCapacity < this.capacity) {
      let diff = this.capacity - newCapacity

      while (diff--) {
        this.#removeLeastRecentlyUsed()
      }
    }

    this.#capacity = newCapacity
  }

  /**
   * delete oldest key existing in map by the help of iterator
   */
  #removeLeastRecentlyUsed() {
	logger.debug('>>> Entering removeLeastRecentlyUsed()');
	logger.debug('<<< Exiting removeLeastRecentlyUsed()');
    this.cache.delete(this.cache.keys().next().value)
  }

  /**
   * @param {string} key
   * @returns {*}
   */
  has(key) {
	logger.debug(`>>> Entering has(key=${key})`);
    key = String(key)

	logger.debug(`<<< Exiting has(key=${key})`);
    return this.cache.has(key)
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
	logger.debug(`>>> Entering set(key=${key},value=${value})`);
    key = String(key)
    // Sets the value for the input key and if the key exists it updates the existing key
    if (this.size === this.capacity) {
      this.#removeLeastRecentlyUsed()
    }

    this.cache.set(key, value)
	logger.debug(`<<< Exiting set(key=${key},value=${value})`);
  }

  /**
   * @param {string} key
   * @returns {*}
   */
  get(key) {
	logger.debug(`>>> Entering get(key=${key})`);
    key = String(key)
    // Returns the value for the input key. Returns null if key is not present in cache
    if (this.cache.has(key)) {
      const value = this.cache.get(key)

	logger.debug(`get(key=${key}): value → ${value}`);
      // refresh the cache to update the order of key
      this.cache.delete(key)
      this.cache.set(key, value)

      this.hits++
      return value
    }

    this.misses++
	logger.debug(`<<< Exiting get(key=${key})`);
    return null
  }

  /**
   * @param {JSON} json
   * @returns {LRUCache}
   */
  parse(json) {
	logger.debug(`>>> Entering parse(json=${json})`);
    const { misses, hits, cache } = JSON.parse(json)

    this.misses += misses ?? 0
    this.hits += hits ?? 0

    for (const key in cache) {
      this.set(key, cache[key])
    }

	logger.debug(`<<< Exiting parse(json=${json})`);
    return this
  }

  /**
   * @param {number} indent
   * @returns {JSON} - string
   */
  toString(indent) {
	logger.debug(`>>> Entering toString(indent=${indent})`);
    const replacer = (_, value) => {
      if (value instanceof Set) {
        return [...value]
      }

      if (value instanceof Map) {
        return Object.fromEntries(value)
      }

	logger.debug(`<<< Exiting replacer(_=${_},value=${value})`);
      return value
    }

	logger.debug(`<<< Exiting toString(indent=${indent})`);
    return JSON.stringify(this, replacer, indent)
  }
}

export default LRUCache
