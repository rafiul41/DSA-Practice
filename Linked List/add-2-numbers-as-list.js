function Node(data) {
  this.data = data;
  this.next = null;
}

function addTwoNumbers(head1, head2) {
  let ans = new Node(0);
  let p1 = head1, p2 = head2, carry = 0, ansPtr = ans, sum;
  while(p1 !== null && p2 !== null) {
    sum = p1.data + p2.data + carry;
    ansPtr.next = new Node(sum % 10);
    ansPtr = ansPtr.next;
    carry = Math.floor(sum / 10);
    p1 = p1.next;
    p2 = p2.next;
  }

  while(p1 !== null) {
    sum = p1.data + carry;
    ansPtr.next = new Node(sum % 10);
    ansPtr = ansPtr.next;
    carry = Math.floor(sum / 10);
    p1 = p1.next;
  }

  while(p2 !== null) {
    sum = p2.data + carry;
    ansPtr.next = new Node(sum % 10);
    ansPtr = ansPtr.next;
    carry = Math.floor(sum / 10);
    p2 = p2.next;
  }

  return ans.next;
}