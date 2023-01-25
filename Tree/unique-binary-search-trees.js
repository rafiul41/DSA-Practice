function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function generateBST(givenNumbers) {
  if(givenNumbers.length === 0) return [null];
  if(givenNumbers.length === 1) return [new TreeNode(givenNumbers[0])];
  let ans = [];
  for(let i = 0; i < givenNumbers.length; i++) {
    let leftNumbers = givenNumbers.filter(numb => numb < givenNumbers[i]);
    let rightNumbers = givenNumbers.filter(numb => numb > givenNumbers[i]);
    let leftTrees = generateBST(leftNumbers);
    let rightTrees = generateBST(rightNumbers);
    for(let j = 0; j < leftTrees.length; j++) {
      for(let k = 0; k < rightTrees.length; k++) {
        let node = new TreeNode(givenNumbers[i]);
        node.left = leftTrees[j];
        node.right = rightTrees[k];
        ans.push(node);
      }
    }
  }
  return ans;
}

function getAllBST(n) {
  let givenNumbers = [];
  for(let i = 0; i < n; i++) {
    givenNumbers.push(i + 1);
  }
  return generateBST(givenNumbers);
}

let res = getAllBST(3);
console.log('ajaira');