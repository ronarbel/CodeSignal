function isListPalindrome(l) {
  if (!l) return true;
  if (!l.next) return true;
  if (!l.next.next) {
    return l.value === l.next.value;
  }

  const findSecondHalfInfo = (l) => {
    let totalLength = 0;
    let current = l;
    while (current) {
      totalLength += 1;
      current = current.next;
    }
    const index = Math.floor((totalLength - 1) / 2 + 1);
    let node = l;
    let counter = 0;
    while (counter !== index) {
      node = node.next;
      counter += 1;
    }
    return [node, totalLength - index];
  };

  const reverse = (l, length) => {
    if (length === 1) return l;
    if (length === 2) {
      l.next.next = l;
      return l.next;
    }
    let newNext = l;
    let current = l.next;
    let oldNext = l.next.next;
    while (oldNext) {
      current.next = newNext;
      newNext = current;
      current = oldNext;
      oldNext = oldNext.next;
    }
    current.next = newNext;
    return current;
  };

  const secondHalfInfo = findSecondHalfInfo(l);
  const secondHalfNode = secondHalfInfo[0];
  const secondHalfLength = secondHalfInfo[1];
  const secondHalfReversed = reverse(secondHalfNode, secondHalfLength);

  let node1 = l;
  let node2 = secondHalfReversed;
  let counter = 0;
  while (counter !== secondHalfLength) {
    if (node1.value !== node2.value) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
    counter += 1;
  }
  return true;
}
