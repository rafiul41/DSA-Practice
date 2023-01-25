function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNode(info) {
  let head = info.head, node = info.node;
  let curr = head, isInserted = false;
  while(curr.next !== null) {
    if(curr.next.data > node.data) {
      isInserted = true;
      let tmp = curr.next;
      curr.next = node;
      node.next = tmp;
      break;
    }
    curr = curr.next;
  }
  if(!isInserted) {
    curr.next = node;
  }
}

function insertionSortList(head) {
  let ans = new Node(Number.MIN_SAFE_INTEGER), curr = head;

  while(curr !== null) {
    let tmp = curr.next;
    curr.next = null;
    insertNode({head: ans, node: curr});
    curr = tmp;
  }

  return ans.next;
}

let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
let z = insertionSortList(head);
console.log(z);