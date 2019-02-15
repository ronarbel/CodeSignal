const assert = require('assert');

const isCryptSolution = (crypt, solution) => {
  const solObj = {};
  solution.forEach(pair => (solObj[pair[0]] = pair[1]));

  let value1 = '';
  let value2 = '';
  let sum = '';
  for (let i = 0; i < crypt[0].length; i++) {
    const letter = crypt[0][i];
    value1 += solObj[letter];
  }
  for (let j = 0; j < crypt[1].length; j++) {
    const letter = crypt[1][j];
    value2 += solObj[letter];
  }
  for (let x = 0; x < crypt[2].length; x++) {
    const letter = crypt[2][x];
    sum += solObj[letter];
  }
  if (
    (value1[0] === '0' && value1.length > 1)
    || (value2[0] === '0' && value2.length > 1)
    || (sum[0] === '0' && sum.length > 1)
  ) {
    return false;
  }
  return Number(value1) + Number(value2) === Number(sum);
};

const crypt1 = ['SEND', 'MORE', 'MONEY'];
const solution1 = [
  ["O","0"], 
  ["M","1"], 
  ["Y","2"], 
  ["E","5"], 
  ["N","6"], 
  ["D","7"], 
  ["R","8"], 
  ["S","9"]
];

assert(isCryptSolution(crypt1, solution1), true);

const crypt2 = ["TEN", "TWO", "ONE"];
const solution2 = [
  ["O","1"], 
  ["T","0"], 
  ["W","9"], 
  ["E","5"], 
  ["N","4"]
];

assert(isCryptSolution(crypt2, solution2), false);
