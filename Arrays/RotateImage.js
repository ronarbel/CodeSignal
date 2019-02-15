const assert = require('assert');

const rotateImage = (a) => {
  for (let row = 0; row < a.length; row++) {
    for (let col = row; col < a.length; col++) {
      const storage = a[row][col];
      a[row][col] = a[col][row];
      a[col][row] = storage;
    }
  }
  return a.map(row => row.reverse());
};

assert.deepEqual(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
assert.deepEqual(rotateImage([[1]]), [[1]]);
assert.deepEqual(rotateImage([[10,9,6,3,7], [6,10,2,9,7], [7,6,3,8,2], [8,9,7,9,9], [6,8,6,8,2]]), [[6,8,7,6,10], [8,9,6,10,9], [6,7,3,2,6], [8,9,8,9,3], [2,9,2,7,7]]);
