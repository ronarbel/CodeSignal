// -------- naive solution -------- //
function arrayMaxConsecutiveSum2(a) {
  let maxSum = -Infinity;
  let win = 1;
  while (win <= a.length) {
    let tempSum = 0;
    for (let i = 0; i < a.length - win + 1; i++) {
      tempSum = a.slice(i, i + win).reduce((a, v) => a + v);
      maxSum = Math.max(tempSum, maxSum);
    }
    win += 1;
  }
  return maxSum;
}


// -------- optimized sliding window -------- //
function arrayMaxConsecutiveSum2(a) {
  let maxSum = -Infinity;
  let win = 1;
  while (win <= a.length) {
    let tempSum = a.slice(0, win).reduce((a, v) => a + v);
    maxSum = Math.max(tempSum, maxSum);
    for (let i = win; i < a.length; i++) {
      tempSum += a[i] - a[i - win]
      maxSum = Math.max(tempSum, maxSum);
    }
    win += 1;
  }
  return maxSum;
}

// -------- optimized but still quadratic -------- //
// optimizations:
// sliding window
// start index at first positive integer or zero
// remove negative integers from end of array
// increase starting window to contain largest number of continuous integers >= 0

function arrayMaxConsecutiveSum2(a) {
  // start index at 0 or first positive integer
  let start = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > 0) {
      start = i; 
      break;
    }
  }
  
  // if positive integers exist
  let win = 1;
  if (a[start] > 0) {
    // remove negative integers from end of array
    for (let i = a.length - 1; i >= 0; i -= 1) {
      if (a[i] < 0) {
        a.pop();
      } else {
        break;
      }
    }
    // increase window until first negative integer
    for (let i = start + 1; i < a.length; i += 1) {
      if (a[i] < 0) {
        break
      } else {
        win += 1;;
      }
    }
  }
  
  let maxSum = -Infinity;
  let startTempSum = 0;
  for (let i = start; i < start + win; i += 1) {
    startTempSum += a[i];
  }

  while (win <= a.length - start) {
    let tempSum = startTempSum;
    maxSum = Math.max(tempSum, maxSum);
    for (let i = start + win; i < a.length; i++) {
      tempSum += a[i] - a[i - win]
      maxSum = Math.max(tempSum, maxSum);
    }
    startTempSum += a[start + win];
    win += 1;
  }
  return maxSum;
}

// -------- Linear - Kadane's algorithm -------- //
function arrayMaxConsecutiveSum2(a) {
  let maxSum = -Infinity;
  let sumSoFar = 0;
  for (let i = 0; i < a.length; i += 1) {
    sumSoFar += a[i];
    maxSum = Math.max(sumSoFar, maxSum);
    sumSoFar = Math.max(sumSoFar, 0);
  }
  return maxSum;
}