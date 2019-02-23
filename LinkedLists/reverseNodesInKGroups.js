// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(l, k) {
  const findLength = (l) => {
    let counter = 0;
    let current = l;
    while (current) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }
  
  const reverse = (l) => {
    if (!l.next) return [l, l];
    if (!l.next.next) {
      l.next.next = l;
      return [l.next, l];
    }
    let newNext = l;
    let current = l.next;
    let oldNext = l.next.next;
    newNext.next = null;
    while (oldNext) {
      current.next = newNext;
      newNext = current;
      current = oldNext;
      oldNext = oldNext.next;
    }
    current.next = newNext;
    return [current, l];
  };

  let reversals = Math.floor(findLength(l) / k);
  const resultHolder = new ListNode('holder');
  let resultTail = resultHolder;
  let reconnectHead = resultHolder;
  let currentHead = l;
  let currentTail = l;
  while (reversals) {
    let counter = 1;
    while (counter !== k) {
      currentTail = currentTail.next
      counter += 1;
    }
    reconnectHead = currentTail.next;
    currentTail.next = null;
    const flipped = reverse(currentHead);
    resultTail.next = flipped[0];
    resultTail = flipped[1];
    flipped[1].next = reconnectHead;
    currentHead = reconnectHead;
    currentTail = currentHead
    reversals -= 1;
  }

  return resultHolder.next;
}
