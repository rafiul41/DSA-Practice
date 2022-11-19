function Node(data) {
  this.data = data;
  this.next = null;
}

function partitionList(head, x) {
  if(head === null) return null;
  let smallerHead = new Node(0);
  let greaterHead = new Node(0);
  let curr = head, smallerPointer = smallerHead, greaterPointer = greaterHead;
  while(curr !== null) {
    let tmp = curr;
    curr = curr.next;
    if(tmp.data >= x) {
      greaterPointer.next = tmp;
      greaterPointer = greaterPointer.next;
      greaterPointer.next = null;
    } else {
      smallerPointer.next = tmp;
      smallerPointer = smallerPointer.next;
      smallerPointer.next = null;
    }
  }
  smallerPointer.next = greaterHead.next;
  return smallerHead.next;
}

let head = new Node(1);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(2);

let z = partitionList(head);
console.log(z.data);