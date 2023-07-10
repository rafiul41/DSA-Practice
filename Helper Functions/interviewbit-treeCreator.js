function createTree(arr) {
  let queue = [];
  let root = new TreeNode(arr[0]);
  queue.push(root);
  let currInd = 1;
  while (queue.length !== 0) {
    let currNode = queue[0];
    queue.shift();
    let leftData = arr[currInd];
    let rightData = arr[currInd + 1];
    currInd += 2;
    if (leftData !== -1) {
      let leftNode = new TreeNode(leftData);
      currNode.left = leftNode;
      queue.push(leftNode);
    }
    if (rightData !== -1) {
      let rightNode = new TreeNode(rightData);
      currNode.right = rightNode;
      queue.push(rightNode);
    }
  }
  return root;
}

const root = createTree([11, 6, 2, 8, 0, 4, 7, 9, -1, -1, 3, 5])