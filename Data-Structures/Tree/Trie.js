const logger = console;
class TrieNode {
  constructor(key, parent) {
	logger.debug(`>>> Entering constructor(key=${key},parent=${parent})`);
	logger.debug('>>> Entering constructor()');
    this.key = key
    this.count = 0
    this.children = Object.create(null)
    if (parent === undefined) {
	logger.debug(`constructor(key=${key},parent=${parent}): this.key → ${this.key}`);
      this.parent = null
    } else {
      this.parent = parent
	logger.debug(`<<< Exiting constructor(key=${key},parent=${parent})`);
    }
	logger.debug('<<< Exiting constructor()');
  }
}

class Trie {
  constructor() {
    // create only root with null key and parent
    this.root = new TrieNode(null, null)
  }

  // Recursively finds the occurrence of all words in a given node
  static findAllWords(root, word, output) {
	logger.debug(`>>> Entering findAllWords(root=${root},word=${word},output=${output})`);
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
	logger.debug(`<<< Exiting findAllWords(root=${root},word=${word},output=${output})`);
  }

  insert(word) {
	logger.debug(`>>> Entering insert(word=${word})`);
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
	logger.debug(`<<< Exiting insert(word=${word})`);
  }

  findPrefix(word) {
	logger.debug(`>>> Entering findPrefix(word=${word})`);
    if (typeof word !== 'string') return null
    let node = this.root
    const len = word.length
    let i
    // After end of this loop node will be at desired prefix
    for (i = 0; i < len; i++) {
      if (node.children[word.charAt(i)] === undefined) return null // No such prefix exists
      node = node.children[word.charAt(i)]
    }
	logger.debug(`<<< Exiting findPrefix(word=${word})`);
    return node
  }

  remove(word, count) {
	logger.debug(`>>> Entering remove(word=${word},count=${count})`);
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
	logger.debug(`<<< Exiting remove(word=${word},count=${count})`);
  }

  findAllWords(prefix) {
	logger.debug(`>>> Entering findAllWords(prefix=${prefix})`);
    const output = []
    // find the node with provided prefix
    const node = this.findPrefix(prefix)
    // No such prefix exists
	logger.debug(`findAllWords(prefix=${prefix}): node → ${node}`);
    if (node === null) return output
    Trie.findAllWords(node, prefix, output)
	logger.debug(`<<< Exiting findAllWords(prefix=${prefix})`);
    return output
  }

  contains(word) {
	logger.debug(`>>> Entering contains(word=${word})`);
    // find the node with given prefix
    const node = this.findPrefix(word)
    // No such word exists
	logger.debug(`contains(word=${word}): node → ${node}`);
	logger.debug(`<<< Exiting contains(word=${word})`);
    return node !== null && node.count !== 0
  }

  findOccurrences(word) {
	logger.debug(`>>> Entering findOccurrences(word=${word})`);
    // find the node with given prefix
    const node = this.findPrefix(word)
    // No such word exists
	logger.debug(`findOccurrences(word=${word}): node → ${node}`);
    if (node === null) return 0
	logger.debug(`<<< Exiting findOccurrences(word=${word})`);
    return node.count
  }
}

export { Trie }
