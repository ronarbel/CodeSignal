// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

const removeKFromList = (l, k) => {
  if (!l) return l;

  while (l.value === k) {
    if (l.next) {
      l = l.next;
    } else {
      return null;
    }
  }

  let prev = l;
  let current = l.next;
  while (current) {
    if (current.value === k) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return l;
};
