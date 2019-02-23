// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// -------- initial solution -------- //
cosnt addTwoHugeNumbers = (a, b) => {
  const createNumber = (l) => {
    let current = l;
    let strNumber = '';
    while (current) {
      let quad = current.value.toString();
      // zero pad until length of 4
      while (quad.length !== 4) {
        quad = `0${quad}`;
      }
      // add quad to current built strNumber, continue to next node;
      strNumber += quad;
      current = current.next;
    }
    return parseInt(strNumber, 10);
  };

  let sumString = (createNumber(a) + createNumber(b)).toString();

  if (sumString.includes('e+')) {
    const parts = sumString.split('e+');
    const zeros = parseInt(parts[1], 10);
    const nums = parts[0].split('.');
    let num = nums[0] + (nums[1] || '');
    console.log(num, 'INITIAL');
    while (num.length !== zeros + 1) {
      num += '0';
    }
    sumString = num;
  } else {
    while (sumString.length % 4 !== 0) {
      sumString = `0${sumString}`;
    }
  }

  sumString = sumString
    .split('')
    .reverse()
    .join('');
  const result = [];
  let index = 0;
  while (index < sumString.length) {
    let chunk = sumString.substring(index, index + 4);
    chunk = chunk
      .split('')
      .reverse()
      .join('');
    result.unshift(parseInt(chunk, 10));
    index += 4;
  }

  return result;
}
