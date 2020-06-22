function ListNode(val) {
  this.val = val
  this.next = null
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * 单向链表 用来构造测试数据进行算法测试
 * var ll = new LinkedList()
 * ll.makeLinkedList()
 */
function LinkedList() {
  var head = null

  this.append = function (val) {
    var newNode = new ListNode(val)

    if (head == null) {
      head = newNode
    } else {
      var p = head
      while (p.next) {
        p = p.next
      }
      p.next = newNode
    }
  }

  /**
   * 构造链表测试数据
   * @param {Array} arr
   * @returns {ListNode}
   */
  this.makeLinkedList = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      var ele = arr[i];
      this.append(ele)
    }
    return head
  }

  /**
   * 打印出所有的值 用逗号隔开的字符串
   */
  this.toString = function () {
    var str = '', p = head
    while (p) {
      str += (p.val + ',')
      p = p.next
    }
    return str.substring(0, str.length - 1)
  }
}

/**
 * 二叉树 用于构造二叉树的测试数据
 * var tree = new BinaryTree()
 * tree.makeBinaryTree([1,4,5,8,1,10,11,4])
 */
function BinaryTree() {
  var root = null

  /**
   * 根据数组来还原一个二叉树
   * 层序遍历的顺序为数组的顺序 空节点为null
   * @param {Array} arr
   * @returns {TreeNode}
   */
  this.makeBinaryTree = function (arr) {
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
    return root
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
          temp.push(n.left)
        }
        tempArr.push(n.left && n.left.val || null)
        if (n.right) {
          temp.push(n.right)
        }
        tempArr.push(n.right && n.right.val || null)
      }
      // 处理一下tempArr 从后遍历 去掉后面的null 一旦遇到非null 停止遍历
      for (let j = tempArr.length - 1; j >= 0; j--) {
        if (tempArr[j] == null) tempArr.pop()
        else break
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

export {
  ListNode,
  TreeNode,
  BinaryTree,
  LinkedList
}

