function ListNode(val) {
  this.val = val
  this.next = null
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * 二叉树
 */
function BinaryTree() {
  var root = null

  // 根据
  this.appendTo = function (val) {
    var newNode = new TreeNode(val)
    if (root == null) {
      root = newNode
    } else {
      var p = root
      // while(p.)
    }
  }

  /**
   * [1,4,5,8,1,10,11,4]
   * 根据数组来还原一个二叉树
   * 层序遍历的顺序为数组的顺序 空节点为null
   * @param {Array} arr
   * @returns {TreeNode}
   */
  this.makeBinaryTreeTree = function (arr) {
    if (!arr.length) return null
    if (arr.length === 1 && arr[0] == null) return null

    var lastArr = []  // 用来保存上一层节点的数组
    for (let i = 0; i < arr.length; i++) {
      var ele = arr[i];
      var newNode = new TreeNode(ele)
      if (root == null) {
        root = newNode
        lastArr.push(root)
      } else {
        for (let j = 0; j < lastArr.length; j++) {
          // 如果是空的话 还需要绕过
          var last = lastArr[j]
          // 如果是 val 为 null 不处理 这是之前的占位节点 本应该是空节点
          if (last.val == null) continue
          if (last.left == null) {
            last.left = newNode
            lastArr.push(newNode)
            break
          } else if (last.right == null) {
            last.right = newNode

            // 在删掉之前 把节点上为值null的节点去掉
            if (last.left.val == null) last.left = null
            if (last.right.val == null) last.right = null
            lastArr.splice(j, 1)
            lastArr.push(newNode)
            // console.log(lastArr)
            break
          }
        }
      }
    }
  }

  /**
   * 层序遍历
   * 将空节点用null返回回来
   */
  this.levelOrderTraverse = function () {
    if (root == null) return []
    var parent = [root]
    var arr = [[root.val]]
    while (parent.length) {
      var tempArr = []
      var temp = []
      for (let i = 0; i < parent.length; i++) {
        var n = parent[i]
        if (n.left) {
          tempArr.push(n.left.val)
          temp.push(n.left)
        }
        if (n.right) {
          tempArr.push(n.right.val)
          temp.push(n.right)
        }
      }
      if (tempArr.length) arr.push(tempArr)
      parent = temp
    }

    return arr
  }

  this.getRoot = function () {
    return root
  }
}

// TODO 找一个库来做二叉树的可视化

module.exports = BinaryTree

