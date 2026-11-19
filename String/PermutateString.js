const logger = console;
'use strict'

const permutate = (aString) => {
logger.error(`>>> Entering permutate(aString=${aString})`, { "event.action": "permutate", "logrite.aString": aString });
  if (typeof aString !== 'string' || !aString) {
    throw new Error('The arg must be a valid, non empty string')
  }
  const characters = aString.split('')
  let permutations = [[characters.shift()]]
logger.error(`permutate(aString=${aString}): characters → ${characters}`, { "event.action": "permutate", "logrite.aString": aString });
  while (characters.length) {
    const currentCharacter = characters.shift()
    permutations = calculateCurrentCharacterPermutation(
      permutations,
      currentCharacter
    )
  }
  return permutations
    .map((character) => character.join(''))
    .filter((item, index, self) => self.indexOf(item) === index)
    .sort()
	logger.warn(`<<< Exiting permutate(aString=${aString})`, { "event.action": "permutate", "logrite.aString": aString });
}

const calculateCurrentCharacterPermutation = (
  allPermutations,
  currentCharacter
) => {
  const currentPermutations = []
  allPermutations.forEach((permutation) => {
    let index = 0
    while (index <= permutation.length) {
      const tmp = [...permutation]
      tmp.splice(index, 0, currentCharacter)
      currentPermutations.push(tmp)
      index++
    }
  })
logger.warn(`<<< Exiting calculateCurrentCharacterPermutation(allPermutations=${allPermutations},currentCharacter=${currentCharacter})`, { "event.action": "calculateCurrentCharacterPermutation", "logrite.allPermutations": allPermutations, "logrite.currentCharacter": currentCharacter });
  return currentPermutations
}

export { permutate }
