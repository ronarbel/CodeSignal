// // -------- O(n^2) reducing sliding window -------- //
// function findLongestSubarrayBySum(s, arr) {
//   let win = arr.length;
//   while (win > 0) {
//     let start = 0;
//     while (start + win <= arr.length) {
//       const tempSum = arr.slice(start, start + win).reduce((a, v) => a + v);
//       if (tempSum === s) return [start + 1, start + win];
//       start += 1;
//     }
//     win -= 1;
//   }
//   return [-1];
// }

// -------- optimized 0(n) solution -------- //
// Key to pass last tests: return *longest* subarray by sum.
function findLongestSubarrayBySum(s, arr) {
  let subLength = 0;
  let result;

  let tempSum = arr[0];
  let start = 0;
  for (let i = 1; i <= arr.length; i += 1) {
    // if tempSum > s, decrement tempSum from start index
    while (tempSum > s && start < i) {
      tempSum -= arr[start];
      start += 1;
    }

    // if correct sum and subarray length > previous solution length, set result
    if (tempSum === s && i - start > subLength) {
      result = [start + 1, i];
      subLength = i - start;
    }

    // otherwise add next element to tempSum
    tempSum += arr[i];
  }
  return result || [-1];
}

// -------- alt solution -------- //
function findLongestSubarrayBySum(s, arr) {
  var current = []
  var left = 1;
  var sum = 0
  var longestVal = 0
  var longestArr
  
  arr.forEach((val, right) => {
      current.push(val)
      sum += val
      
      while (sum > s) {
          sum -= current.shift()
          left += 1
      }
       
      if (sum === s && current.length > longestVal) {
          longestVal = current.length
          longestArr = [left, right + 1]
      }
  })
  
  return longestArr || [-1]
}
