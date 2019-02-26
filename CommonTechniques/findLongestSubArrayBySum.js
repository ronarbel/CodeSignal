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
