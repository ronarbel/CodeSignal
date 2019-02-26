// -------- O(n^2) reducing sliding window -------- //
function findLongestSubarrayBySum(s, arr) {
  let win = arr.length;
  while (win > 0) {
    let start = 0;
    while (start + win <= arr.length) {
      const tempSum = arr.slice(start, start + win).reduce((a, v) => a + v);
      if (tempSum === s) return [start + 1, start + win];
      start += 1;
    }
    win -= 1;
  }
  return [-1];
}

// -------- optimized 0(n) solution -------- //
// Key: return *longest* subarray by sum.
function findLongestSubarrayBySum(s, arr) {
  // edgecase of s = 0, arr = [1,2,3,4,0,0,0,0]
  if (s === 0) {
    let firstIndex = arr.indexOf(0);
    let lastIndex = arr.lastIndexOf(0);
    if (firstIndex === -1) return [-1];
    return [firstIndex + 1, lastIndex + 1];
  }
  
  let longestSolutionLength = 0;
  let result = [-1]
  
  let tempSum = arr[0];
  let start = 0;
  for (let i = 1; i <= arr.length; i += 1) {
    // if tempSum > s, decrement tempSum from start index
    while (tempSum > s && start < i) {
      tempSum -= arr[start];
      start += 1;
    }
    
    // if correct sum and next element isn't 0, try to set new result
    if (tempSum === s && arr[i] !== 0) {
      let tempSolutionLength = i - start;
      if (tempSolutionLength > longestSolutionLength) {
        longestSolutionLength = tempSolutionLength;
        result = [start + 1, i];
      }
    }
    
    // otherwise add next element to tempSum
    tempSum += arr[i];
  }
  return result;
}