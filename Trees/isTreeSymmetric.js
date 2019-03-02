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
