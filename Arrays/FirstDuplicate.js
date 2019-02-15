const assert = require('assert');

const firstDuplicate = (a) => {
  const seenDigits = new Set();

  for (let num of a) {
    if (seenDigits.has(num)) {
      return num;
    } else {
      seenDigits.add(num);
    }
  }
  return -1;
};

assert.equal(firstDuplicate([2, 1, 3, 5, 3, 2]), 3);
assert.equal(firstDuplicate([5, 5]), 5);
assert.equal(firstDuplicate([2, 4, 3, 5, 1]), -1);
