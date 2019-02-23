// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// -------- initial solution (fails for extra huge numbers) -------- //
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


// -------- Complete solution -------- //

// idea: reverse, add sections based on digits, account for 9999 + 1

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  let ai = invert(a);
  let bi = invert(b);
  
  return sum(ai, bi);
}

function sum(a, b) {
  let res = 0;
  let r = null;
  
  while(a || b) {
      aval = a ? parseInt(a.value) : 0;
      bval = b ? parseInt(b.value) : 0;
      
      let sum = aval + bval + res;
      if (sum >= 10000) {
          sum -= 10000;
          res = 1;
      } else {
          res = 0;
      }
      
      let i = new ListNode(sum);
      i.next = r;
      
      r = i;
      
      a = a ? a.next : null;
      b = b ? b.next : null;
  }
  
  if (res == 1) {
      let i = new ListNode(res);
      i.next = r;
      
      r = i;
  }
  
  return r;
}

function invert(l) {
  let r = null;
  
  while (l) {
      let i = new ListNode(l.value);
      i.next = r;
      
      r = i;
      l = l.next;
  }
  
  return r;
}
