// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
  if (!l) return l;
  if (!n) return l;
  const reconnectHead = l;
  let newTail = l;

  let reconnectTail = l;
  let counter = 0;
  while (counter !== n) {
    reconnectTail = reconnectTail.next;
    counter += 1;
  }

  if (!reconnectTail) return l;

  while (reconnectTail.next) {
    newTail = newTail.next;
    reconnectTail = reconnectTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;
  reconnectTail.next = reconnectHead;
  return newHead;
}
