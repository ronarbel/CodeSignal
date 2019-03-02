//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// return true if tree has path root > leaf with sum === s

function hasPathWithGivenSum(t, s) {
  if (!t) return false;
  let result = false;

  const dive = (node, curSum) => {
    const newSum = node.value + curSum;
    if (!node.left && !node.right && newSum === s) result = true;
    if (node.left) dive(node.left, newSum);
    if (node.right) dive(node.right, newSum);
  };
  dive(t, 0);

  return result;
}
