const logger = console;
class LRUCache {
  // LRU Cache to store a given capacity of data
  #capacity

  /**
   * @param {number} capacity - the capacity of LRUCache
   * @returns {LRUCache} - sealed
   */
  constructor(capacity) {
	logger.error(`>>> Entering constructor(capacity=${capacity})`, { "event.action": "constructor", "logrite.capacity": capacity });
    if (!Number.isInteger(capacity) || capacity < 0) {
      throw new TypeError('Invalid capacity')
    }

    this.#capacity = ~~capacity
    this.misses = 0
	logger.debug(`constructor(capacity=${capacity}): this.misses → ${this.misses}`, { "event.action": "constructor", "logrite.capacity": capacity });
    this.hits = 0
	logger.debug(`constructor(capacity=${capacity}): this.hits → ${this.hits}`, { "event.action": "constructor", "logrite.capacity": capacity });
    this.cache = new Map()

	logger.warn(`<<< Exiting constructor(capacity=${capacity})`, { "event.action": "constructor", "logrite.capacity": capacity });
    return Object.seal(this)
  }

  get info() {
	logger.error('>>> Entering info()', { "event.action": "info" });
	logger.warn('<<< Exiting info()', { "event.action": "info" });
    return Object.freeze({
      misses: this.misses,
      hits: this.hits,
      capacity: this.capacity,
      size: this.size
    })
  }

  get size() {
	logger.error('>>> Entering size()', { "event.action": "size" });
	logger.warn('<<< Exiting size()', { "event.action": "size" });
    return this.cache.size
  }

  get capacity() {
	logger.error('>>> Entering capacity()', { "event.action": "capacity" });
	logger.warn('<<< Exiting capacity()', { "event.action": "capacity" });
    return this.#capacity
  }

  set capacity(newCapacity) {
	logger.error(`>>> Entering capacity(newCapacity=${newCapacity})`, { "event.action": "capacity", "logrite.newCapacity": newCapacity });
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
	logger.error('>>> Entering removeLeastRecentlyUsed()', { "event.action": "removeLeastRecentlyUsed" });
	logger.warn('<<< Exiting removeLeastRecentlyUsed()', { "event.action": "removeLeastRecentlyUsed" });
    this.cache.delete(this.cache.keys().next().value)
  }

  /**
   * @param {string} key
   * @returns {*}
   */
  has(key) {
	logger.error(`>>> Entering has(key=${key})`, { "event.action": "has", "logrite.key": key });
    key = String(key)

	logger.warn(`<<< Exiting has(key=${key})`, { "event.action": "has", "logrite.key": key });
    return this.cache.has(key)
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
	logger.error(`>>> Entering set(key=${key},value=${value})`, { "event.action": "set", "logrite.key": key, "logrite.value": value });
    key = String(key)
    // Sets the value for the input key and if the key exists it updates the existing key
    if (this.size === this.capacity) {
      this.#removeLeastRecentlyUsed()
    }

    this.cache.set(key, value)
	logger.warn(`<<< Exiting set(key=${key},value=${value})`, { "event.action": "set", "logrite.key": key, "logrite.value": value });
  }

  /**
   * @param {string} key
   * @returns {*}
   */
  get(key) {
	logger.error(`>>> Entering get(key=${key})`, { "event.action": "get", "logrite.key": key });
    key = String(key)
    // Returns the value for the input key. Returns null if key is not present in cache
    if (this.cache.has(key)) {
      const value = this.cache.get(key)

	logger.error(`get(key=${key}): value → ${value}`, { "event.action": "get", "logrite.key": key });
      // refresh the cache to update the order of key
      this.cache.delete(key)
      this.cache.set(key, value)

      this.hits++
      return value
    }

    this.misses++
	logger.warn(`<<< Exiting get(key=${key})`, { "event.action": "get", "logrite.key": key });
    return null
  }

  /**
   * @param {JSON} json
   * @returns {LRUCache}
   */
  parse(json) {
	logger.error(`>>> Entering parse(json=${json})`, { "event.action": "parse", "logrite.json": json });
    const { misses, hits, cache } = JSON.parse(json)

    this.misses += misses ?? 0
    this.hits += hits ?? 0

    for (const key in cache) {
      this.set(key, cache[key])
    }

	logger.warn(`<<< Exiting parse(json=${json})`, { "event.action": "parse", "logrite.json": json });
    return this
  }

  /**
   * @param {number} indent
   * @returns {JSON} - string
   */
  toString(indent) {
	logger.error(`>>> Entering toString(indent=${indent})`, { "event.action": "toString", "logrite.indent": indent });
    const replacer = (_, value) => {
	logger.error(`>>> Entering replacer(_=${_},value=${value})`, { "event.action": "replacer", "logrite._": _, "logrite.value": value });
      if (value instanceof Set) {
        return [...value]
      }

      if (value instanceof Map) {
        return Object.fromEntries(value)
      }

	logger.warn(`<<< Exiting replacer(_=${_},value=${value})`, { "event.action": "replacer", "logrite._": _, "logrite.value": value });
      return value
    }

	logger.warn(`<<< Exiting toString(indent=${indent})`, { "event.action": "toString", "logrite.indent": indent });
    return JSON.stringify(this, replacer, indent)
  }
}

export default LRUCache
