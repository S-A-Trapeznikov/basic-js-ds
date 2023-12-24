const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      this.addNode(data, this.rootNode);
    }
  }

  has(data) {
    if (this.rootNode === null) {
      return false;
    } else {
      return this.hasData(data, this.rootNode);
    }
  }

  find(data) {
    if (this.rootNode === null) {
      return null;
    } else {
      return this.findNode(data, this.rootNode);
    }
  }

  remove(data) {
    if (this.has(data)) {
      this.rootNode = this.removeNode(data, this.rootNode);
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    return this.smallestNode(this.rootNode).data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    return this.biggestNode(this.rootNode).data;
  }

  hasData(data, node) {
    if (data === node.data) {
      return true;
    }
    if (node.data > data) {
      if (node.left !== null) {
        return this.hasData(data, node.left)
      }
    } else {
      if (node.right !== null) {
        return this.hasData(data, node.right)
      }
    }
    return false;
  }

  findNode(data, node) {
    if (data === node.data) {
      return node;
    }
    if (node.data > data) {
      if (node.left !== null) {
        return this.findNode(data, node.left)
      }
    } else {
      if (node.right !== null) {
        return this.findNode(data, node.right)
      }
    }
    return null;
  }

  addNode(data, node) {
    if (data === node.data) {
      return;
    }
    if (node.data > data) {
      if (node.left !== null) {
        this.addNode(data, node.left)
      } else {
        node.left = new Node(data);
      }
    } else {
      if (node.right !== null) {
        this.addNode(data, node.right)
      } else {
        node.right = new Node(data);
      }
    }
  }

  removeNode(data, node) {
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left !== null && node.right === null) {
        return node.left;
      } else if (node.left === null && node.right !== null) {
        return node.right;
      } else {
        let tempNode = this.smallestNode(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(tempNode.data, node.right);
        return node;
      }
    } else if (node.data > data) {
      node.left = this.removeNode(data, node.left);
      return node;
    } else {
      node.right = this.removeNode(data, node.right);
      return node;
    }
  }

  smallestNode(node) {
    while (node.left !== null)
      node = node.left;

    return node
  }

  biggestNode(node) {
    while (node.right !== null)
      node = node.right;

    return node
  }
}

module.exports = {
  BinarySearchTree
};