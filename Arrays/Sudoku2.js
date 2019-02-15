const assert = require('assert');

const sudoku2 = (grid) => {
  const is3x3Valid = (a) => {
    const checked = new Set;
    for (let row in a) {
      for (let col in a) {
        const number = a[row][col];
        if (number !== '.' && checked.has(number)) {
          return false
        } else {
          checked.add(number);
        }
      }
    }
    return true;
  }
  
  const areSquaresValid = (a) => {
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        const square = [
          a[row].slice(col, col + 3), 
          a[row + 1].slice(col, col + 3), 
          a[row + 2].slice(col, col + 3)
        ];
        if (!is3x3Valid(square)) {
          return false;
        };
      }
    }
    return true;
  }
  
  const areRowsValid = (a) => {
    for (let row = 0; row < a.length; row++) {
      const checked = new Set;
      for (let col = 0; col < a.length; col++){
        const number = a[row][col];
        if (number !== '.' && checked.has(number)) {
          return false
        } else {
          checked.add(number);
        }
      }
    }
    return true;
  }
  
  const areColsValid = (a) => {
    for (let col = 0; col < a.length; col++) {
      const checked = new Set;
      for (let row = 0; row < a.length; row++){
        const number = a[row][col];
        if (number !== '.' && checked.has(number)) {
          return false
        } else {
          checked.add(number);
        }
      }
    }
    return true;
  }
  
  if (areSquaresValid(grid) && areRowsValid(grid) && areColsValid(grid)) {
    return true
  }
  return false;
};

const grid1 = [
[".",".",".","1","4",".",".","2","."], 
[".",".","6",".",".",".",".",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".","1",".",".",".",".",".","."], 
[".","6","7",".",".",".",".",".","9"], 
[".",".",".",".",".",".","8","1","."], 
[".","3",".",".",".",".",".",".","6"], 
[".",".",".",".",".","7",".",".","."], 
[".",".",".","5",".",".",".","7","."]
];

assert(sudoku2(grid1), true, 'grid1');

const grid2 = [
  [".",".",".",".","2",".",".","9","."], 
  [".",".",".",".","6",".",".",".","."], 
  ["7","1",".",".","7","5",".",".","."], 
  [".","7",".",".",".",".",".",".","."], 
  [".",".",".",".","8","3",".",".","."], 
  [".",".","8",".",".","7",".","6","."], 
  [".",".",".",".",".","2",".",".","."], 
  [".","1",".","2",".",".",".",".","."], 
  [".","2",".",".","3",".",".",".","."]
];

assert(sudoku2(grid2), false, 'grid2');

const grid3 = [
[".",".","4",".",".",".","6","3","."], 
[".",".",".",".",".",".",".",".","."], 
["5",".",".",".",".",".",".","9","."], 
[".",".",".","5","6",".",".",".","."], 
["4",".","3",".",".",".",".",".","1"], 
[".",".",".","7",".",".",".",".","."], 
[".",".",".","5",".",".",".",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".",".",".",".",".",".",".","."]
];

assert(sudoku2(grid3), false, 'grid3');
