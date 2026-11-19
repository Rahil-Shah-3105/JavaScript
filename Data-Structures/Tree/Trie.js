const logger = console;
class TrieNode {
  constructor(key, parent) {
	logger.error(`>>> Entering constructor(key=${key},parent=${parent})`, { "event.action": "constructor", "logrite.key": key });
    this.key = key
    this.count = 0
	logger.debug(`constructor(key=${key},parent=${parent}): this.key → ${this.key}`, { "event.action": "constructor", "logrite.key": key });
	logger.debug(`constructor(key=${key},parent=${parent}): this.count → ${this.count}`, { "event.action": "constructor", "logrite.key": key });
    this.children = Object.create(null)
    if (parent === undefined) {
      this.parent = null
    } else {
      this.parent = parent
	logger.warn(`<<< Exiting constructor(key=${key},parent=${parent})`, { "event.action": "constructor", "logrite.key": key });
    }
	logger.error('>>> Entering constructor()', { "event.action": "constructor" });
	logger.warn('<<< Exiting constructor()', { "event.action": "constructor" });
  }
}

class Trie {
  constructor() {
    // create only root with null key and parent
    this.root = new TrieNode(null, null)
  }

  // Recursively finds the occurrence of all words in a given node
  static findAllWords(root, word, output) {
	logger.error(`>>> Entering findAllWords(root=${root},word=${word},output=${output})`, { "event.action": "findAllWords", "logrite.root": root, "logrite.word": word, "logrite.output": output });
    if (root === null) return
    if (root.count > 0) {
      if (typeof output === 'object') {
        output.push({ word, count: root.count })
      }
    }
    let key
    for (key in root.children) {
      word += key
      this.findAllWords(root.children[key], word, output)
      word = word.slice(0, -1)
    }
	logger.warn(`<<< Exiting findAllWords(root=${root},word=${word},output=${output})`, { "event.action": "findAllWords", "logrite.root": root, "logrite.word": word, "logrite.output": output });
  }

  insert(word) {
	logger.error(`>>> Entering insert(word=${word})`, { "event.action": "insert", "logrite.word": word });
    if (typeof word !== 'string') return
    if (word === '') {
      this.root.count += 1
      return
    }
    let node = this.root
    const len = word.length
    let i
    for (i = 0; i < len; i++) {
      if (node.children[word.charAt(i)] === undefined) {
        node.children[word.charAt(i)] = new TrieNode(word.charAt(i), node)
      }
      node = node.children[word.charAt(i)]
    }
    node.count += 1
	logger.warn(`<<< Exiting insert(word=${word})`, { "event.action": "insert", "logrite.word": word });
  }

  findPrefix(word) {
	logger.error(`>>> Entering findPrefix(word=${word})`, { "event.action": "findPrefix", "logrite.word": word });
    if (typeof word !== 'string') return null
    let node = this.root
    const len = word.length
    let i
    // After end of this loop node will be at desired prefix
    for (i = 0; i < len; i++) {
      if (node.children[word.charAt(i)] === undefined) return null // No such prefix exists
      node = node.children[word.charAt(i)]
    }
	logger.warn(`<<< Exiting findPrefix(word=${word})`, { "event.action": "findPrefix", "logrite.word": word });
    return node
  }

  remove(word, count) {
	logger.error(`>>> Entering remove(word=${word},count=${count})`, { "event.action": "remove", "logrite.word": word, "logrite.count": count });
    if (typeof word !== 'string') return
    if (typeof count !== 'number') count = 1
    else if (count <= 0) return

    // for empty string just delete count of root
    if (word === '') {
      if (this.root.count >= count) this.root.count -= count
      else this.root.count = 0
      return
    }

    let child = this.root
    const len = word.length
    let i, key
    // child: node which is to be deleted
    for (i = 0; i < len; i++) {
      key = word.charAt(i)
      if (child.children[key] === undefined) return
      child = child.children[key]
    }

    // Delete no of occurrences specified
    if (child.count >= count) child.count -= count
    else child.count = 0

    // If some occurrences are left we don't delete it or else
    // if the object forms some other objects prefix we don't delete it
    // For checking an empty object
    // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    if (
      child.count <= 0 &&
      Object.keys(child.children).length &&
      child.children.constructor === Object
    ) {
      child.parent.children[child.key] = undefined
    }
	logger.warn(`<<< Exiting remove(word=${word},count=${count})`, { "event.action": "remove", "logrite.word": word, "logrite.count": count });
  }

  findAllWords(prefix) {
	logger.error(`>>> Entering findAllWords(prefix=${prefix})`, { "event.action": "findAllWords", "logrite.prefix": prefix });
    const output = []
    // find the node with provided prefix
    const node = this.findPrefix(prefix)
    // No such prefix exists
	logger.error(`findAllWords(prefix=${prefix}): node → ${node}`, { "event.action": "findAllWords", "logrite.prefix": prefix });
    if (node === null) return output
    Trie.findAllWords(node, prefix, output)
	logger.warn(`<<< Exiting findAllWords(prefix=${prefix})`, { "event.action": "findAllWords", "logrite.prefix": prefix });
    return output
  }

  contains(word) {
	logger.error(`>>> Entering contains(word=${word})`, { "event.action": "contains", "logrite.word": word });
    // find the node with given prefix
    const node = this.findPrefix(word)
    // No such word exists
	logger.error(`contains(word=${word}): node → ${node}`, { "event.action": "contains", "logrite.word": word });
	logger.warn(`<<< Exiting contains(word=${word})`, { "event.action": "contains", "logrite.word": word });
    return node !== null && node.count !== 0
  }

  findOccurrences(word) {
	logger.error(`>>> Entering findOccurrences(word=${word})`, { "event.action": "findOccurrences", "logrite.word": word });
    // find the node with given prefix
    const node = this.findPrefix(word)
    // No such word exists
	logger.error(`findOccurrences(word=${word}): node → ${node}`, { "event.action": "findOccurrences", "logrite.word": word });
    if (node === null) return 0
	logger.warn(`<<< Exiting findOccurrences(word=${word})`, { "event.action": "findOccurrences", "logrite.word": word });
    return node.count
  }
}

export { Trie }
