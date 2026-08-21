const logger = console;
class CacheNode {
  constructor(key, value, frequency) {
	logger.debug(`>>> Entering constructor(key=${key},value=${value},frequency=${frequency})`);
    this.key = key
    this.value = value
    this.frequency = frequency
	logger.debug(`constructor(key=${key},value=${value},frequency=${frequency}): this.key → ${this.key}`);

	logger.debug(`<<< Exiting constructor(key=${key},value=${value},frequency=${frequency})`);
    return Object.seal(this)
  }
}

// This frequency map class will act like javascript Map DS with more two custom method refresh & insert
class FrequencyMap extends Map {
  static get [Symbol.species]() {
    return Map
  } // for using Symbol.species we can access Map constructor  @see -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species
  get [Symbol.toStringTag]() {
    return ''
  }

  /**
   * @method refresh
   * @description - It's revive a CacheNode, increment of this nodes frequency and refresh the frequencyMap via new incremented nodes frequency
   * @param {CacheNode} node
   */
  refresh(node) {
	logger.debug(`>>> Entering refresh(node=${node})`);
    const { frequency } = node
    const freqSet = this.get(frequency)
    freqSet.delete(node)

	logger.debug(`refresh(node=${node}): freqSet → ${freqSet}`);
    node.frequency++

    this.insert(node)
	logger.debug(`<<< Exiting refresh(node=${node})`);
  }

  /**
   * @method insert
   * @description - Add new CacheNode into HashSet by the frequency
   * @param {CacheNode} node
   */
  insert(node) {
	logger.debug(`>>> Entering insert(node=${node})`);
    const { frequency } = node

    if (!this.has(frequency)) {
      this.set(frequency, new Set())
    }

    this.get(frequency).add(node)
	logger.debug(`<<< Exiting insert(node=${node})`);
  }
}

class LFUCache {
  #capacity
  #frequencyMap

  /**
   * @param {number} capacity - The range of LFUCache
   * @returns {LFUCache} - sealed
   */
  constructor(capacity) {
	logger.debug(`>>> Entering constructor(capacity=${capacity})`);
    this.#capacity = capacity
    this.#frequencyMap = new FrequencyMap()
    this.misses = 0
    this.hits = 0
	logger.debug(`constructor(capacity=${capacity}): this.misses → ${this.misses}`);
    this.cache = new Map()

	logger.debug(`constructor(capacity=${capacity}): this.hits → ${this.hits}`);
    return Object.seal(this)
  }

  /**
   * Get the capacity of the LFUCache
   * @returns {number}
   */
  get capacity() {
	logger.debug('>>> Entering capacity()');
	logger.debug('<<< Exiting capacity()');
    return this.#capacity
  }

  /**
   * Get the current size of LFUCache
   * @returns {number}
   */
  get size() {
	logger.debug('>>> Entering size()');
	logger.debug('<<< Exiting size()');
    return this.cache.size
  }

  /**
   * Set the capacity of the LFUCache if you decrease the capacity its removed CacheNodes following the LFU - least frequency used
   */
  set capacity(newCapacity) {
	logger.debug(`>>> Entering capacity(newCapacity=${newCapacity})`);
    if (this.#capacity > newCapacity) {
      let diff = this.#capacity - newCapacity // get the decrement number of capacity

      while (diff--) {
        this.#removeCacheNode()
      }

      this.cache.size === 0 && this.#frequencyMap.clear()
    }

    this.#capacity = newCapacity
  }

  get info() {
	logger.debug('>>> Entering info()');
	logger.debug('<<< Exiting info()');
    return Object.freeze({
      misses: this.misses,
      hits: this.hits,
      capacity: this.capacity,
      currentSize: this.size,
      leastFrequency: this.leastFrequency
    })
  }

  get leastFrequency() {
	logger.debug('>>> Entering leastFrequency()');
    const freqCacheIterator = this.#frequencyMap.keys()
    let leastFrequency = freqCacheIterator.next().value || null
	logger.debug(`leastFrequency(): freqCacheIterator → ${freqCacheIterator}`);

    // select the non-empty frequency Set
    while (this.#frequencyMap.get(leastFrequency)?.size === 0) {
      leastFrequency = freqCacheIterator.next().value
    }

	logger.debug('<<< Exiting leastFrequency()');
    return leastFrequency
  }

  #removeCacheNode() {
	logger.debug('>>> Entering removeCacheNode()');
    const leastFreqSet = this.#frequencyMap.get(this.leastFrequency)
    // Select the least recently used node from the least Frequency set
    const LFUNode = leastFreqSet.values().next().value
	logger.debug(`removeCacheNode(): leastFreqSet → ${leastFreqSet}`);
	logger.debug(`removeCacheNode(): LFUNode → ${LFUNode}`);

    leastFreqSet.delete(LFUNode)
	logger.debug('<<< Exiting removeCacheNode()');
    this.cache.delete(LFUNode.key)
  }

  /**
   * if key exist then return true otherwise false
   * @param {any} key
   * @returns {boolean}
   */
  has(key) {
	logger.debug(`>>> Entering has(key=${key})`);
    key = String(key) // converted to string

	logger.debug(`<<< Exiting has(key=${key})`);
    return this.cache.has(key)
  }

  /**
   * @method get
   * @description - This method return the value of key & refresh the frequencyMap by the oldNode
   * @param {string} key
   * @returns {any}
   */
  get(key) {
	logger.debug(`>>> Entering get(key=${key})`);
    key = String(key) // converted to string

    if (this.cache.has(key)) {
      const oldNode = this.cache.get(key)
      this.#frequencyMap.refresh(oldNode)

	logger.debug(`get(key=${key}): oldNode → ${oldNode}`);
      this.hits++

      return oldNode.value
    }

    this.misses++
	logger.debug(`<<< Exiting get(key=${key})`);
    return null
  }

  /**
   * @method set
   * @description - This method stored the value by key & add frequency if it doesn't exist
   * @param {string} key
   * @param {any} value
   * @param {number} frequency
   * @returns {LFUCache}
   */
  set(key, value, frequency = 1) {
	logger.debug(`>>> Entering set(key=${key},value=${value},frequency=${frequency})`);
    key = String(key) // converted to string

    if (this.#capacity === 0) {
      throw new RangeError('LFUCache ERROR: The Capacity is 0')
    }

    if (this.cache.has(key)) {
      const node = this.cache.get(key)
      node.value = value
	logger.debug(`set(key=${key},value=${value},frequency=${frequency}): node → ${node}`);
	const __log_start = Date.now();

      this.#frequencyMap.refresh(node)

	logger.debug(`set(key=${key},value=${value},frequency=${frequency}): node.value → ${node.value}`);
	logger.info(`set(key,value,frequency)=${key},${value},${frequency}: database operation took ${Date.now() - __log_start} ms`);
      return this
    }

    // if the cache size is full, then it's delete the Least Frequency Used node
    if (this.#capacity === this.cache.size) {
      this.#removeCacheNode()
    }

    const newNode = new CacheNode(key, value, frequency)

	logger.debug(`set(key=${key},value=${value},frequency=${frequency}): newNode → ${newNode}`);
    this.cache.set(key, newNode)
    this.#frequencyMap.insert(newNode)

	logger.debug(`<<< Exiting set(key=${key},value=${value},frequency=${frequency})`);
    return this
  }

  /**
   * @method parse
   * @description - This method receive a valid LFUCache JSON & run JSON.prase() method and merge with existing LFUCache
   * @param {JSON} json
   * @returns {LFUCache} - merged
   */
  parse(json) {
	logger.debug(`>>> Entering parse(json=${json})`);
    const { misses, hits, cache } = JSON.parse(json)

    this.misses += misses ?? 0
    this.hits += hits ?? 0

    for (const key in cache) {
      const { value, frequency } = cache[key]
      this.set(key, value, frequency)
    }

	logger.debug(`<<< Exiting parse(json=${json})`);
    return this
  }

  /**
   * @method clear
   * @description - This method cleared the whole LFUCache
   * @returns {LFUCache}
   */
  clear() {
	logger.debug('>>> Entering clear()');
    this.cache.clear()
    this.#frequencyMap.clear()

	logger.debug('<<< Exiting clear()');
    return this
  }

  /**
   * @method toString
   * @description - This method generate a JSON format of LFUCache & return it.
   * @param {number} indent
   * @returns {string} - JSON
   */
  toString(indent) {
	logger.debug(`>>> Entering toString(indent=${indent})`);
    const replacer = (_, value) => {
	logger.debug(`>>> Entering replacer(_=${_},value=${value})`);
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

export default LFUCache
