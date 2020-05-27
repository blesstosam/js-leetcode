/**
 * BST 二叉搜索树
 * 左侧的数值比右侧的小
 */
function BinarySearchTree() {
  function Node(val) {
    this.val = val
    this.left = this.right = null
  }

  var root = null
  
  this.insert = function (val) {
    var newNode = new Node(val)
    if (root == null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  function insertNode(node, newNode) {
    if (newNode.val < node.val ) {
      if (node.left == null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  

  this.search = function () { }

  // 中序遍历 最小到最大
  this.inOrderTraverse = function (cb) { 
    inOrderTraverseNode(root, cb)
  }
  function inOrderTraverseNode(node, cb) {
    if (node == null) return
    inOrderTraverseNode(node.left, cb)
    cb(node.val)
    inOrderTraverseNode(node.right, cb)
  }

  // 先序遍历 打印结构化文档
  this.preOrderTraverse = function (cb) {
    preOrderTraverseNode(root, cb)
  }
  function preOrderTraverseNode(node, cb) {
    if (node == null) return
    cb(node.val)
    preOrderTraverseNode(node.left, cb)
    preOrderTraverseNode(node.right, cb)
  }

  // 后序遍历
  this.postOrderTraverse = function (cb) {
    postOrderTraverseNode(root, cb)
  }
  function postOrderTraverseNode(node, cb) {
    if (node == null) return
    cb(node.val)
    postOrderTraverseNode(node.left, cb)
    postOrderTraverseNode(node.right, cb)
  }

  this.remove = function () { }

  this.min = function () { }

  this.max = function () { }

  // 返回最大深度
  this.depth = function () { }
}

module.exports = BinarySearchTree