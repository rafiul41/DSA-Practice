class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.height = 0;
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
    const isValPresent = this._contains(this, val);
    if (!isValPresent) {
      this._insertNode(this, val);
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
    const toReturn = this._balance(root);
    return toReturn;
  }

  _update(node) {
    const leftHeight = node.left === null ? -1 : node.left.height;
    const rightHeight = node.right === null ? -1 : node.right.height;

    node.height = 1 + Math.max(leftHeight, rightHeight);
    node.balanceFactor = rightHeight - leftHeight;
  }

  _balance(node) {
    // left heavy
    if (node.balanceFactor === -2) {
      if (node.left.balanceFactor <= 0) {
        return this._leftLeftCase(node);
      } else {
        return this._leftRightCase(node);
      }
    } else if (node.balanceFactor === 2) {
      if (node.right.balanceFactor >= 0) {
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
}

let root = new AVLTreeNode(0);
let treeStart = new AVLTreeNode(1);
root.right = treeStart;
console.log(treeStart.insertVal(2));
console.log(treeStart.insertVal(3));
// console.log(root.insertVal(4));
// console.log(root.insertVal(5));

console.log('end');
