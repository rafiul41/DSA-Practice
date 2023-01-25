function Node(data) {
  this.data = data;
  this.next = null;
}

function reverseList(info) {
  let p1 = null, p2 = info.head;
  while(p2 !== null) {
    let tmp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = tmp;
  }
  return p1;
}

function evenReverse(head) {
  let curr = head;
  let evenNodeHead = new Node(0), evenNodePointer = evenNodeHead;
  while(curr && curr.next) {
    evenNodePointer.next = curr.next;
    evenNodePointer = evenNodePointer.next;
    curr.next = curr.next.next;
    curr = curr.next;
    evenNodePointer.next = null;
  }
  let evenNodeReverseHead = reverseList({head: evenNodeHead.next});

  let p1 = head, p2 = evenNodeReverseHead, ans = new Node(0), ansPointer = ans;
  while(p1 !== null && p2 !== null) {
    ansPointer.next = p1;
    ansPointer = ansPointer.next;
    p1 = p1.next;
    ansPointer.next = p2;
    ansPointer = ansPointer.next;
    p2 = p2.next;
  }

  if(p1 !== null) {
    ansPointer.next = p1;
  }

  if(p2 !== null) {
    ansPointer.next = p2;
  }

  return ans.next;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
let z = evenReverse(head);
console.log(z);