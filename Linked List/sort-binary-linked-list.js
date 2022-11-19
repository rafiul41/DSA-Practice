function Node(data) {
  this.data = data;
  this.next = null;
}

function sortBinaryLinkedList(head) {
  let curr = head;
  let zeroCnt = 0;
  while(curr !== null) {
    if(curr.data === 0) {
      zeroCnt++;
    }
    curr = curr.next;
  }
  curr = head;
  while(curr !== null) {
    if(zeroCnt) {
      curr.data = 0;
      zeroCnt--;
    } else {
      curr.data = 1;
    }
    curr = curr.next;
  }
  return head;
}
