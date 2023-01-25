function Node(data) {
  this.data = data;
  this.next = null;
}

function quickSortList(head) {
  if(head === null || head.next === null) return head;
  let toSplitHead = head.next;
  head.next = null;
  let leftHead = new Node(0), rightHead = new Node(0);
  let leftPtr = leftHead, rightPtr = rightHead, splitPtr = toSplitHead;
  while(splitPtr !== null) {
    let tmp = splitPtr.next;
    splitPtr.next = null;
    if(splitPtr.data < head.data) {
      leftPtr.next = splitPtr;
      leftPtr = leftPtr.next;
    } else {
      rightPtr.next = splitPtr;
      rightPtr = rightPtr.next;
    }
    splitPtr = tmp;
  }
  let sortedLeftHead = quickSortList(leftHead.next);
  let sortedRightHead = quickSortList(rightHead.next);
  if(sortedLeftHead !== null) {
    leftPtr = sortedLeftHead;
    while(leftPtr.next !== null) {
      leftPtr = leftPtr.next;
    }
    leftPtr.next = head;
    head.next = sortedRightHead;
    return sortedLeftHead;
  } else {
    head.next = sortedRightHead;
    return head;
  }
}

let head = new Node(1);
head.next = new Node(5);
head.next.next = new Node(4);
head.next.next.next = new Node(3);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
let z = quickSortList(head);
console.log(z);