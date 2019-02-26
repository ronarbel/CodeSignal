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


//-------- slide query sum based on prev query sum -------- //function sumInRange(nums, queries) {
  let result = 0;
  for (let i = queries[0][0]; i <= queries[0][1]; i += 1) {
    result += nums[i];
  }
  
  let querySum = result;
  let left = queries[0][0];
  let right = queries[0][1];
  for (let i = 1; i < queries.length; i += 1) {
    let newLeft = queries[i][0];
    let newRight = queries[i][1];
    while (left > newLeft) {
      left -= 1;
      querySum += nums[left];
    }
    while (left < newLeft) {
      querySum -= nums[left];
      left += 1;
    }
    while (right > newRight) {
      querySum -= nums[right];
      right -= 1;
    }
    while (right < newRight) {
      right += 1;
      querySum += nums[right];
    }
    result += querySum;
  }

  let bigNum = Math.pow(10, 9) + 7;
  return (result + bigNum) % bigNum;
}

// -------- optimized using prefixSumsArray -------- //
// not passing test 13, unknown
function sumInRange(nums, queries) {
  // turn nums into prefixSumArray
  for (let i = 1; i < nums.length; i += 1) {
    nums[i] = nums[i] + nums[i - 1];
  }
  
  let result = 0
  queries.forEach(query => {
    let lower = query[0];
    let higher = query[1];
    let tempSum = nums[higher] - (nums[lower - 1] || 0);
    result += tempSum;
  })

  return (result + 1000000007) % 1000000007;
}
