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

  _contains(node, val) {
    if (node === null) return false;
    if (val > node.val) {
      return this._contains(node.right, val);
    } else if (val < node.val) {
      return this._contains(node.left, val);
    } else {
      return true;
    }
  }

  _insertNode(node, val) {
    if (node === null) return new TreeNode(val);
    if (val > node.val) {
      node.right = this._insertNode(node.right, val);
    } else {
      node.left = this._insertNode(node.left, val);
    }

    this._update(node);
    return this._balance(node);
  }

  _update(node) {
    node.height =
      1 + Math.max(this._getHeight(node.right), this._getHeight(node.left));
    node.nodeCnt =
      this._getNodeCnt(node.right) + this._getNodeCnt(node.left) + 1;
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

  removeVal(val) {
    const isValPresent = this._contains(this.root, val);
    if (!isValPresent) {
      this.root = this._removeNode(this.root, val);
      return true;
    }
    return false;
  }

  _removeNode(node, val) {
    if (node === null) return;
    if (node.val > val) {
      node.left = this._removeNode(node.left, val);
    } else if (node.val < val) {
      node.right = this._removeNode(node.right, val);
    } else {
      if (!node.right) {
        return node.left;
      } else if (!node.left) {
        return node.right;
      } else {
        // It is better to delete node from the subtree which have more height for less balancing
        if (this._getHeight(node.right) > this._getHeight(node.left)) {
          let minVal = this._getMinVal(node.right);
          node.val = minVal;
          node.right = this._removeNode(node.right, minVal);
        } else {
          let maxVal = this._getMaxVal(node.left);
          node.val = maxVal;
          node.left = this._removeNode(node.left, maxVal);
        }
      }
    }

    this._update(node);
    return this._balance(node);
  }

  _getMaxVal(node) {
    let curr = node;
    while (curr.right !== null) {
      curr = curr.right;
    }
    return curr.val;
  }

  _getMinVal(node) {
    let curr = node;
    while (curr.left !== null) {
      curr = curr.left;
    }
    return curr.val;
  }

  // ------------------------------- EXTRA FUNCTIONS ------------------------------
  // Gives the closest value present in the tree
  // which is greater or equal to the given value
  getClosestLowerElement(val) {
    let curr = this.root,
      ans = null,
      minPositiveDist = Number.MAX_SAFE_INTEGER;
    while (curr !== null) {
      // This must be positive
      const currDist = val - curr.val;
      if (currDist === 0) return val;
      // distance positive means we need to search for more closer values to the right
      if (currDist > 0) {
        if (currDist < minPositiveDist) {
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

  _getNodeCntGreaterThanK(root, val) {
    if (root === null) return 0;
    if (root.val > val) {
      return (
        this._getNodeCntGreaterThanK(root.left, val) +
        1 +
        this._getNodeCnt(root.right)
      );
    }
    return this._getNodeCntGreaterThanK(root.right, val);
  }

  // First we need to find the closest element present in the tree lower or equal than given val
  getNodeCntGreaterThanVal(val) {
    return this._getNodeCntGreaterThanK(this.root, val);
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
tree.removeVal(2);

console.log(tree.getClosestLowerElement(6));

console.log('end');
