class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  buildTree(array) {
    const arrayFix = array
      .filter((num, index) => array.indexOf(num) === index)
      .sort((a, b) => a - b);

    function orderTree(array, start = 0, end = array.length - 1) {
      if (start > end) return null;
      let mid = Math.floor((start + end) / 2);
      console.log(mid);
      let root = new Node(array[mid]);
      root.left = orderTree(array, start, mid - 1);
      root.right = orderTree(array, mid + 1, end);

      return root;
    }
    this.root = orderTree(arrayFix);
    return this.root;
  }

  insert(value, root = this.root) {
  

    if (root === null) {
      return new Node(value);
    }
    if (value === root.data) return this.root;
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {
    
  }
}

const arrayT = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
const array = [1, 2, 5, 6, 8, 9, 10, 11];
const test = new Tree();

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
const nodes = test.buildTree(array);
console.log(test.insert(4));
prettyPrint(nodes);
