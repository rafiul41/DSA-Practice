class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.height = 0;
    this.nodeCnt = 1;
  }
}
/// We are only storing number values
// We will only store unique values
class AVLTree {
  // Only property of tree is it's root
  constructor() {
    this.root = null;
  }
  // Returns true if successfully inserted otherwise false
  insertVal(val) {
    // As we will only store unique values
    const isValPresent = this._contains(this.root, val);
    if (!isValPresent) {
      this.root = this._insertNode(this.root, val);
      return true;
    }
    return false;
  }

  _contains(root, val) {
    if (root === null) return false;
    if (val > root.val) {
      return this._contains(root.right, val);
    } else if (val < root.val) {
      return this._contains(root.left, val);
    } else {
      return true;
    }
  }

  _insertNode(root, val) {
    if (root === null) return new TreeNode(val);
    if (val > root.val) {
      root.right = this._insertNode(root.right, val);
    } else {
      root.left = this._insertNode(root.left, val);
    }

    this._update(root);
    return this._balance(root);
  }

  _update(node) {
    node.height =
      1 + Math.max(this._getHeight(node.right), this._getHeight(node.left));
    node.nodeCnt = this._getNodeCnt(node.right) + this._getNodeCnt(node.left) + 1;
  }

  _getHeight(node) {
    // Height is the number of edges of a node to it's farthest node.
    // We are considering null node of height -1
    return node === null ? -1 : node.height;
  }

  _getNodeCnt(node) {
    return node === null ? 0 : node.nodeCnt;
  }

  _getBalanceFactor(node) {
    return this._getHeight(node.right) - this._getHeight(node.left);
  }

  _balance(node) {
    // left heavy
    const balanceFactor = this._getBalanceFactor(node);
    if (balanceFactor === -2) {
      const leftBalanceFactor = this._getBalanceFactor(node.left);
      if (leftBalanceFactor <= 0) {
        return this._leftLeftCase(node);
      } else {
        return this._leftRightCase(node);
      }
    } else if (balanceFactor === 2) {
      const rightBalanceFactor = this._getBalanceFactor(node.right);
      if (rightBalanceFactor >= 0) {
        return this._rightRightCase(node);
      } else {
        return this._rightLeftCase(node);
      }
    }

    return node;
  }

  // Cases -----------------------

  _leftLeftCase(node) {
    return this._rightRotation(node);
  }

  _leftRightCase(node) {
    node.left = this._leftRotation(node.left);
    return this._leftLeftCase(node);
  }

  _rightRightCase(node) {
    return this._leftRotation(node);
  }

  _rightLeftCase(node) {
    node.right = this._rightRotation(node.right);
    return this._rightRightCase(node);
  }

  //Tree Rotations ----------------------

  _rightRotation(node) {
    const newParent = node.left;
    node.left = newParent.right;
    newParent.right = node;

    this._update(node);
    this._update(newParent);

    return newParent;
  }

  _leftRotation(node) {
    const newParent = node.right;
    node.right = newParent.left;
    newParent.left = node;

    this._update(node);
    this._update(newParent);

    return newParent;
  }
  // Gives the closest value present in the tree
  // which is greater or equal to the given value
  getClosestLowerElement(val) {
    let curr = this.root, ans = null, minPositiveDist = Number.MAX_SAFE_INTEGER;
    while(curr !== null) {
      // This must be positive
      const currDist = val - curr.val;
      if(currDist === 0) return val;
      // distance positive means we need to search for more closer values to the right
      if(currDist > 0) {
        if(currDist < minPositiveDist) {
          minPositiveDist = currDist;
          ans = curr.val;
        }
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    return ans;
  }

  _getNodeCntGreaterOrEqualThanK(root, val) {
    if(root === null) return 0;
    if(root.val >= val) {
      return this._getNodeCntGreaterOrEqualThanK(root.left, val) + 1 + this._getNodeCnt(root.right);
    }
    return this._getNodeCntGreaterOrEqualThanK(root.right, val);
  }

  // First we need to find the closest element present in the tree lower or equal than given val
  getNodeCntGreaterOrEqualThanVal(val) {
    return this._getNodeCntGreaterOrEqualThanK(this.root, val);
  }
}

let tree = new AVLTree();
tree.insertVal(7);
tree.insertVal(2);
tree.insertVal(3);
tree.insertVal(6);
tree.insertVal(5);
tree.insertVal(4);
tree.insertVal(1);

console.log(tree.getClosestLowerElement(6));

console.log('end');