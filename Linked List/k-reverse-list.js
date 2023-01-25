function Node(data) {
  this.data = data;
  this.next = null;
}

function reverseList(info) {
  let head = info.head;
  let p1 = null, p2 = head;
  while(p2 !== null) {
    let tmp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = tmp;
  }
  return {
    head: p1,
    tail: head
  };
}

function kReverseList(head, k) {
  let nodeToReverse = head, toTraverse = k - 1, previousNode = null, ans;
  while(nodeToReverse !== null) {
    let curr = nodeToReverse;
    while(toTraverse--) {
      curr = curr.next;
    }
    let tmp = curr.next;
    curr.next = null;
    let info = reverseList({head: nodeToReverse});
    if(!ans) {
      ans = info.head;
    }
    if(previousNode) {
      previousNode.next = info.head;
    }
    nodeToReverse = tmp;
    info.tail.next = nodeToReverse;
    previousNode = info.tail;
    toTraverse = k - 1;
  }
  return ans;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
let z = kReverseList(head, 2);
console.log(z);