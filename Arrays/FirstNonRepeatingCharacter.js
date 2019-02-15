const assert = require('assert');

const firstNotRepeatingCharacter = (s) => {
  const letters = s.slice().split('');
  const seenLetters = {};
  while (letters.length) {
    const letter = letters.shift();
    if (seenLetters[letter]) {
      seenLetters[letter] += 1;
    } else {
      seenLetters[letter] = 1;
    }
  }

  for (let letter in seenLetters) {
    if (seenLetters[letter] === 1) {
      return letter.toString();
    }
  }
  return '_';
};

assert.equal(firstNotRepeatingCharacter('abacabad'), 'c');
assert.equal(firstNotRepeatingCharacter('abacabaabacaba'), '_');
assert.equal(firstNotRepeatingCharacter('z'), 'z');
