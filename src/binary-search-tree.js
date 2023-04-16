const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (this.hasOwnProperty('rooter')){
      return this.rooter;
    } else {
      return null;
    }
  }

  add(data) {
      if (!this.hasOwnProperty('rooter')){
          this.rooter = {'data':data};
      } else {
          addNode(this.rooter,data)
      }
      function addNode(node,data) {
          if (data < node.data && !node.hasOwnProperty('left')) {
              node.left = {'data':data};
          } else if(data < node.data && node.hasOwnProperty('left')){
              addNode(node.left,data)
          }
          if (data > node.data && !node.hasOwnProperty('right')) {
              node.right = {'data':data};
          } else if (data > node.data && node.hasOwnProperty('right')){
              addNode (node.right,data);
          }
          if (data == node.data) {
              node.data = data;
          }
      }
  }

  has(data) {
    if (!this.hasOwnProperty('rooter')) {
      return false;
    } else {
      return hasData(this.rooter,data);
    }
      function hasData(node,value) {
        if(node == null) {
          return false;
        }
          if(node.data == value) {
            return true;
          } else if (value > node.data && node.hasOwnProperty('right')){
            return hasData(node.right,data);
          } else if (value < node.data && node.hasOwnProperty('left')){
            return hasData(node.left,data);
          } else {
            return false;
          }
      }
  }

  find(data) {
    if (!this.hasOwnProperty('rooter')) {
      return null;
    } else {
      return findData(this.rooter,data);
    }
      function findData(node,value) {
        if(node == null) {
          return null;
        }
          if(node.data == value) {
            return node;
          } else if (value > node.data && node.hasOwnProperty('right')){
            return findData(node.right,data);
          } else if (value < node.data && node.hasOwnProperty('left')){
            return findData(node.left,data);
          } else {
            return null;
          }
      }
  }

  remove(data) {
    this.rooter = deleteNode(this.rooter, data);

    function deleteNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = deleteNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = deleteNode(node.right, value);
        return node;
      } else {
        if (!node.hasOwnProperty('left') && !node.hasOwnProperty('right')) {
            return null;
        }

        if (!node.hasOwnProperty('left')) {
          node = node.right;
          return node;
        }

        if (!node.hasOwnProperty('right')) {
          node = node.left;
          return node;
        }

        let minimumRight = node.right;
        while (minimumRight.left) {
          minimumRight = minimumRight.left;
        }
        node.data = minimumRight.data;

        node.right = deleteNode(node.right, minimumRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.hasOwnProperty('rooter')) {
      return null;
    } else {
      return findMin(this.rooter);
    }
      function findMin(node) {
          if (node.hasOwnProperty('left')){
            return findMin(node.left);
          } else {
            return node.data;
          }
      }
  }

  max() {
    if (!this.hasOwnProperty('rooter')) {
      return null;
    } else {
      return findMax(this.rooter);
    }
      function findMax(node) {
          if (node.hasOwnProperty('right')){
            return findMax(node.right);
          } else {
            return node.data;
          }
      }
  }
}

module.exports = {
  BinarySearchTree
};