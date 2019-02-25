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
function arrayMaxConsecutiveSum2(a) {
  let maxSum = -Infinity;
  let win = 1;
  while (win <= a.length) {
    let tempSum = a.slice(0, win).redfunction arrayMaxConsecutiveSum2(a) {
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
uce((a, v) => a + v);
    maxSum = Math.max(tempSum, maxSum);
    for (let i = win; i < a.length; i++) {
      tempSum += a[i] - a[i - win]
      maxSum = Math.max(tempSum, maxSum);
    }
    win += 1;
  }
  return maxSum;
}
