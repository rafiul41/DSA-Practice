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
    const isValPresent = this._contains(this.root, val);
    if (!isValPresent) {
      this._insertNode(this.root, val);
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
    console.log(root === this.root);
    if (root === null) {
      root = new TreeNode(val);
      console.log(root === this.root);
      return root;
    }
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
    node.height =
      1 + Math.max(this._getHeight(node.right), this._getHeight(node.left));
  }

  _getHeight(node) {
    // Height is the number of edges of a node to it's farthest node.
    // We are considering null node of height -1
    if (node === null) return -1;
    return node.height;
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
}

let root = new AVLTree();
root.insertVal(1);
root.insertVal(2);
root.insertVal(3);
// console.log(root.insertVal(4));
// console.log(root.insertVal(5));

console.log('end');
