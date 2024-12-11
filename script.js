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
    if (value === root.data) return root;
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {
    if (value === root.data) {
      if (root.right === null) {
        return root.left;
      }
      if (root.left === null) {
        return root.right;
      }
      if (root.left && root.right) {
        let current = root.right;
        while (current.left != null) {
          current = current.left;
        }
        root.data = current.data;
        root.right = this.delete(current.data, root.right);
        return root;
      }
    }
    if (value < root.data) {
      root.left = this.delete(value, root.left);
    } else if (value > root.data) {
      root.right = this.delete(value, root.right);
    }

    return root;
  }

  find(value, root = this.root) {
    if (value === root.data) {
      return root;
    }

    if (value < root.data) {
      return this.find(value, root.left);
    } else if (value > root.data) {
      return this.find(value, root.right);
    }
  }
  levelOrder(callback) {
    let queue = [];
    let logs = [];
    let tree = this.root;

    function load(root) {
      if (root) {
        queue.push(root);
        let current = queue[0];
        while (queue.length !== 0) {
          logs.push(current.data);
          if (current.left !== null) {
            queue.push(current.left);
          }
          if (current.right !== null) {
            queue.push(current.right);
          }
          queue.shift();
          current = queue[0];
        }
        return logs;
      }
    }
    load(tree);
    // return logs
    return callback(logs)
  }

  inOrder(callback){

  }

  preOrder(callback){

  }

  postOrder(callback){
    
  }
}

const arrayT = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 700, 6345]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
const nodes = test.buildTree(arrayT);
// console.log(test.insert(4));
console.log(test.delete(67));
// console.log(test.find(324));
prettyPrint(nodes);

const ifgreater = function (num) {
  let arr = [];
  num.forEach((num) => {
    arr.push(num);
  });
  return arr;
};

console.log(test.levelOrder(ifgreater));
// ifgreater([23, 33, 68, 27])
// console.log(ifgreater([23, 33, 68, 27]));
