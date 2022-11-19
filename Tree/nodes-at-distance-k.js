function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let ans;

function dfs(node, target, height) {
  if(node === null) return -1;
  if(node.data === target) {
    func(node, height);
    return 1;
  }
  let left = dfs(node.left);
  let right = dfs(node.right);
  if(left > 0) {
    func(node.left, height - left);
    return left + 1;
  } else if(right > 0) {
    func(node.right, height - right);
    return right + 1;
  }
  return -1;
}

function func(node, height) {
  if(height < 0 || node === null) return;
  if(height === 0) {
    ans.push(node.data);
  }
  func(node.left, height - 1);
  func(node.right, height - 1);
}

function getNodesAtDistK(root, target, height) {
  ans = [];
  dfs(root, target, height);
  return ans;
}
