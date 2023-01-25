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

function listLen(info) {
  let res = 0, curr = info.head;
  while(curr !== null) {
    curr = curr.next;
    res++;
  }
  return res;
}

function getKthNode(info) {
  let curr = info.head, k = info.k;
  while(k--) {
    curr = curr.next;
  }
  return curr;
}

function kthNodeFromMiddle(head, k) {
  let len = listLen({head});
  let midNodeInd = Math.floor(len / 2);
  if(k > midNodeInd) return -1;
  let kthNode = getKthNode({head, k: midNodeInd});
  kthNode.next = null;
  let reversedHead = reverseList({head});
  return getKthNode({head: reversedHead, k}).data;
}

let head = new Node(1);
head.next = new Node(14);
head.next.next = new Node(6);
head.next.next.next = new Node(16);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(10);
let z = kthNodeFromMiddle(head, 2);
console.log(z);