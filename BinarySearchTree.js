/**
 * BST 二叉搜索树 - 左侧的数值比右侧的小
 * 对于搜索特定的值来说效率比较高 和二分法差不多
 * 缺点 - 树的某些分支可能会非常深；在该分支上添加，移除，搜索时会有性能问题
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
    if (newNode.val < node.val) {
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

  /**
   * 中序遍历 最小到最大
   * @param {Function} cb
   */
  this.inOrderTraverse = function (cb) {
    inOrderTraverseNode(root, cb)
  }
  function inOrderTraverseNode(node, cb) {
    if (node == null) return
    inOrderTraverseNode(node.left, cb)
    cb(node.val)
    inOrderTraverseNode(node.right, cb)
  }

  /**
   * 先序遍历 打印结构化文档
   * @param {Function} cb
   */
  this.preOrderTraverse = function (cb) {
    preOrderTraverseNode(root, cb)
  }
  function preOrderTraverseNode(node, cb) {
    if (node == null) return
    cb(node.val)
    preOrderTraverseNode(node.left, cb)
    preOrderTraverseNode(node.right, cb)
  }

  /**
   * 后序遍历 一个例子：计算一个目录和其子目录所有文件所占空间大小
   * @param {Function} cb
   */
  this.postOrderTraverse = function (cb) {
    postOrderTraverseNode(root, cb)
  }
  function postOrderTraverseNode(node, cb) {
    if (node == null) return
    postOrderTraverseNode(node.left, cb)
    postOrderTraverseNode(node.right, cb)
    cb(node.val)
  }

  /**
   * 层序遍历
   * @param {Function} cb
   */
  this.levelOrderTraverse = function (cb) {
    levelOrderTraverseNode(root, cb)
  }
  function levelOrderTraverseNode(node, cb) {

  }

  this.remove = function (val) {
    root = removeNode(root, val)
  }
  function removeNode(node, val) {
    if (node == null) return null

    // 找到该val所在节点
    if (node.val > val) {
      // 此时的node相当于parent
      // 移除掉左子节点后 需要重新为其left赋值 保证树不会断 同时 removeNode 要返回新的子节点
      node.left = removeNode(node.left, val)
      // tip 一定要返回node
      return node
    } else if (node.val < val) {
      node.right = removeNode(node.right, val)
      return node
    } else {
      // 没有子节点 其父节点的left也应该为null 所以返回null
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      // 如果左节点为空 那么右节点作为父节点的子节点返回
      if (node.left == null) {
        node = node.right
        return node
      }
      // 如果右节点为空 那么左节点作为父节点的子节点返回
      if (node.right == null) {
        node = node.left
        return node
      }

      // 如果左右子节点都不为空
      // 找到右侧节点中最小节点 aux
      var aux = findMinNode(node.right)
      // 将节点的值改为 aux 的值 等于将该节点移除了
      node.val = aux.val
      // 将右侧节点中最小节点移除
      node.right = removeNode(node.right, aux.val)
      return node
    }
  }
  // 与minNode不同的是返回的是node节点
  function findMinNode(node) {
    if (node == null) return null
    while (node.left) {
      node = node.left
    }
    return node
  }

  // 返回最大深度 leetcode 104 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
  this.depth = function () {
    // depth = max(左子树深度，右子树深度) + 1
    if (root == null) return 0
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1
  }
  function getDepth(node) {
    if (node == null) return 0
    if (node.left == null && node.right == null) return 1
    if (node.left == null) {
      return getDepth(node.right) + 1
    }
    if (node.right == null) {
      return getDepth(node.left) + 1
    }
    return Math.max(getDepth(node.left), getDepth(node.right)) + 1
  }

  /**
   * 搜索是否有该值 因为left肯定比right小 该算法类似二分法
   * @param {any} val
   * @returns {boolean}
   */
  this.search = function (val) {
    return searchNode(root, val)
  }
  function searchNode(node, val) {
    if (!val || node == null) return false
    if (node.val > val) {
      return searchNode(node.left, val)
    } else if (node.val < val) {
      return searchNode(node.right, val)
    } else {
      return true
    }
  }

  this.min = function () {
    return minNode(root)
  }
  function minNode(node) {
    if (node == null) return null
    while (node.left) {
      node = node.left
    }
    return node.val
  }

  this.max = function () {
    return maxNode(root)
  }
  function maxNode(node) {
    if (node == null) return null
    while (node.right) {
      node = node.right
    }
    return node.val
  }

  this.root = function () {
    return root
  }
}

module.exports = BinarySearchTree