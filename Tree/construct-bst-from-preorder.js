function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function bstFromPreOrder(preOrder, left, right) {
  if(left > right) return null;
  let node = new TreeNode();
  node.data = preOrder[left];
  if(left === right) {
    return node;
  }
  let foundInd = -1;
  for(let i = right; i >= left + 1; i--) {
    if(preOrder[i] < node.data) {
      foundInd = i;
      break;
    }
  }
  node.left = foundInd !== -1 ? bstFromPreOrder(preOrder, left + 1, foundInd) : null;
  node.right = foundInd !== -1 ? bstFromPreOrder(preOrder, foundInd + 1, right) : bstFromPreOrder(preOrder, right, right);
  return node;
}

function func(preOrder) {
  let ans = bstFromPreOrder(preOrder, 0, preOrder.length - 1);
  return ans;
}
//    0  1  2  3  4   5   6   7  8   9
func([7, 1, 4, 6, 15, 12, 9, 11, 20, 16]);
// func([15, 9, 10]);