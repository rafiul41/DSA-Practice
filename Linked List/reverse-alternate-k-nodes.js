function Node(data) {
  this.data = data;
  this.next = null;
}

// this will return 
// the next node to iterate
// head and tail of the reversed list
function reverseKNodes(info) {
  let k = info.k;
  let p1 = null, p2 = info.head;
  while(k--) {
    let tmp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = tmp;
  }
  return {
    head: p1,
    tail: info.head,
    nextNode: p2
  }
}

function reverseAlternateKNodes(head, k) {
  let curr = head, ans = new Node(0), previousNode = ans;
  while(curr) {
    let info = reverseKNodes({head: curr, k});
    info.tail.next = info.nextNode;
    previousNode.next = info.head;
    curr = info.nextNode;
    if(!curr) break;
    let toSkip = k - 1;
    while(toSkip--) {
      curr = curr.next;
    }
    previousNode = curr;
    curr = curr.next;
  }
  return ans.next;
}

let head = new Node(1);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(10);
// head.next.next.next.next.next.next = new Node(15);
// head.next.next.next.next.next.next.next = new Node(61);
// head.next.next.next.next.next.next.next.next = new Node(16);
let z = reverseAlternateKNodes(head, 2);
console.log(z);