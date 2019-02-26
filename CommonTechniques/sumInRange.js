// -------- naive solution -------- //
function sumInRange(nums, queries) {
  let result = 0;
  queries.forEach((query) => {
    for (let i = query[0]; i <= query[1]; i += 1) {
      result += nums[i];
    }
  });
  return result;
}


// -------- store seen values -------- //
function sumInRange(nums, queries) {
  let result = 0;
  let seen = {};
  queries.forEach(query => {
    let tempSum = 0;
    let q = JSON.stringify(query)
    if (seen[q]) {
      result += seen[q];
    } else {
      for (let i = query[0]; i <= query[1]; i += 1) {
        tempSum += nums[i];
      }
      result += tempSum;
      seen[q] = tempSum;
    }
    
  });
  let bigNum = Math.pow(10, 9) + 7;
  return (result + bigNum) % bigNum;
}