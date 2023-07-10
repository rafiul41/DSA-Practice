class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;
  let p1 = head;
  let p2 = head;

  do {
    if (p1.next === null || p2.next === null || p2.next.next === null)
      return false;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  while (p1 !== p2)
  return true;
}

let one = new ListNode(1);
let two = new ListNode(2);
one.next = two;

console.log(hasCycle(one));
