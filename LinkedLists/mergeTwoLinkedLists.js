// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let resultHolder = new ListNode('holder');
  let resultTail = resultHolder;
  let l1Node = l1;
  let l2Node = l2;
  while (l1Node || l2Node) {
    if (l1Node === null) {
      resultTail.next = new ListNode(l2Node.value);
      resultTail = resultTail.next;
      l2Node = l2Node.next;
    } else if (l2Node === null) {
      resultTail.next = new ListNode(l1Node.value);
      resultTail = resultTail.next;
      l1Node = l1Node.next;
    } else if (l1Node.value > l2Node.value) {
      resultTail.next = new ListNode(l2Node.value);
      resultTail = resultTail.next;
      l2Node = l2Node.next;
    } else {
      resultTail.next = new ListNode(l1Node.value);
      resultTail = resultTail.next;
      l1Node = l1Node.next;
    }
  }
  return resultHolder.next;
}
