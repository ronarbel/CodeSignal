// -------- O(3n) solution -------- //
function isTreeSymmetric(t) {
  const leftMirror = [];
  const rightMirror = [];

  const leftTraverse = (node) => {
    const queue = [node];
    while (queue.length) {
      const current = queue.shift();
      if (current) {
        leftMirror.push(current.value);
        queue.push(current.left, current.right);
      } else {
        leftMirror.push(null);
      }
    }
  };

  const rightTraverse = (node) => {
    const queue = [node];
    while (queue.length) {
      const current = queue.shift();
      if (current) {
        rightMirror.push(current.value);
        queue.push(current.right, current.left);
      } else {
        rightMirror.push(null);
      }
    }
  };

  leftTraverse(t);
  rightTraverse(t);

  for (let i = 0; i < leftMirror.length; i += 1) {
    if (leftMirror[i] !== rightMirror[i]) return false;
  }
  return true;
}


// -------- optimized O(n) -------- //
function isTreeSymmetric(t) {
  if (!t) return true;
  
  const isMirror = (left, right) => {
    if (!left || !right) return left === right;
    return left.value === right.value
    && isMirror (left.left, right.right)
    && isMirror (left.right, right.left);
  }
  
  return isMirror(t.left, t.right)
}
