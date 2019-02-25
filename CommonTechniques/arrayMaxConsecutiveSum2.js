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
