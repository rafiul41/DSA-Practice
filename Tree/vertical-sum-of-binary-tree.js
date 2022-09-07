function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function getLength(root, isLeft) {
  let curr = root, res = 0;
  while(curr !== null) {
    res++;
    if(isLeft) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return res;
}

let ans;

function incrementValues(node, ind) {
  if(node === null) return;
  ans[ind] += node.data;
  incrementValues(node.left, ind - 1);
  incrementValues(node.right, ind + 1);
}

function getVerticalSum(root) {
  let left = getLength(root, true);
  ans = Array(getLength(root) + 1 + left).fill(0);
  let rootInd = left;
  incrementValues(root, rootInd);
  return ans;
}