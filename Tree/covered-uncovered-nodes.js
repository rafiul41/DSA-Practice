function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let layers;

function traverse(node, layer) {
  if(node === null) return;
  if(layers.length < layer) {
    layers.push([]);
  }
  layers[layer - 1].push(node.data);
  traverse(node.left, layer + 1);
  traverse(node.right, layer + 1);
}

function getAbsDiff(head) {
  layers = [];
  traverse(head, 1);
  let coveredSum = 0, uncoveredSum = 0;
  for(let layer of layers) {
    if(layer.length <= 2) {
      uncoveredSum += layer.reduce((preRes, curr) => preRes + curr, 0);
      continue;
    }
    uncoveredSum += layer[0];
    uncoveredSum += layer[layer.length - 1];
    for(let i = 1; i < layer.length - 1; i++) {
      coveredSum += layer[i];
    }
  }
  return Math.abs(coveredSum - uncoveredSum);
}

let tree = new TreeNode();
tree.data = 2;

tree.left = new TreeNode();
tree.left.data = 1;
tree.right = null;

console.log(getAbsDiff(tree));