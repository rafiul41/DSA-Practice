function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  let newHead = new Node(Number.MIN_SAFE_INTEGER);
  newHead.next = head;
  let p1 = newHead, p2 = newHead.next;
  while(p2 !== null) {
    let curr = p2.next, isDuplicatedPresent = false;
    while(curr !== null && curr.data === p2.data) {
      isDuplicatedPresent = true;
      curr = curr.next;
    }
    if(isDuplicatedPresent) {
      p1.next = curr;
      p2 = curr;
    } else {
      p1 = p1.next;
      p2 = p1.next;
    }
  }
  return newHead.next;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(4);

let z = removeDuplicates(head);
console.log('FINISHED');