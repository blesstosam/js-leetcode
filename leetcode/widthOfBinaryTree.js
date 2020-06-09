const { BinaryTree } = require('./util')

var t = new BinaryTree()
var root = t.makeBinaryTree(
  [-64,
    12, 18,
  -4, -53, null, 76,
    null, -51, null, null, -93, 3,
    null, -31, 47, null, 3, 53,
  -81, 33, 4, null, -51, -44, -60, 11, null, null, null, null, 78, null, -35, -64, 26, -81, -31, 27, 60, 74, null, null, 8, -38, 47, 12, -24, null, -59, -49, -11, -51, 67, null, null, null, null, null, null, null, -67, null, -37, -19, 10, -55, 72, null, null, null, -70, 17, -4, null, null, null, null, null, null, null, 3, 80, 44, -88, -91, null, 48, -90, -30, null, null, 90, -34, 37, null, null, 73, -38, -31, -85, -31, -96, null, null, -18, 67, 34, 72, null, -17, -77, null, 56, -65, -88, -53, null, null, null, -33, 86, null, 81, -42, null, null, 98, -40, 70, -26, 24, null, null, null, null, 92, 72, -27, null, null, null, null, null, null, -67, null, null, null, null, null, null, null, -54, -66, -36, null, -72, null, null, 43, null, null, null, -92, -1, -98, null, null, null, null, null, null, null, 39, -84, null, null, null, null, null, null, null, null, null, null, null, null, null, -93, null, null, null, 98])

/**
 * 使用广度优先搜索 解法是对的 但是超过时间限制 - -!
 * leetcode 662 https://leetcode-cn.com/problems/maximum-width-of-binary-tree/submissions/
 * 求二叉树的最大宽度
 * @param {TreeNode} root 
 * @returns {number}
 */
function widthOfBinaryTree(root) {
  if (root == null) return 0

  var parent = [root]
  var width = 1
  while (parent.length) {
    var tempArr = []
    var temp = []
    for (let i = 0; i < parent.length; i++) {
      var n = parent[i]
      if (n == null) {
        tempArr = [...tempArr, null, null]
        temp = [...temp, null, null]
      } else {
        temp = [...temp, n.left || null, n.right || null]
        tempArr = [...tempArr, n.left != null ? n.left.val : null, n.right != null ? n.right.val : null]
      }
    }
    console.log(tempArr, 'tempArr-before', temp.length)
    // 处理一下tempArr 从后遍历 去掉后面的null 一旦遇到非null 停止遍历
    for (let j = tempArr.length - 1; j >= 0; j--) {
      if (tempArr[j] == null) tempArr.pop()
      else break
    }
    // 也要去掉前面的null 因为算的是宽度
    for (let k = 0; k < tempArr.length; k++) {
      if (tempArr[k] == null) {
        tempArr.shift()
        k--
      }
      else break
    }
    console.log(tempArr.length, 'len')
    // 终止最后的一次循环
    if (tempArr.length === 0) return width
    if (tempArr.length > width) width = tempArr.length
    parent = temp
  }

  return width
};

/**
 * 优化一下上面的算法 tempArr不要存所有的节点值 直接存宽度值 后面就不用遍历了
 * leetcode 662 https://leetcode-cn.com/problems/maximum-width-of-binary-tree/submissions/
 * 求二叉树的最大宽度
 * @param {TreeNode} root 
 * @returns {number}
 */
function widthOfBinaryTree2(root) {
  if (root == null) return 0

  var parent = [root]
  var width = 1
  // numArr存储节点对应的索引位置
  var numArr = [0]
  while (parent.length) {
    var tempArr = []
    var temp = []
    for (let i = 0; i < parent.length; i++) {
      var n = parent[i], num = numArr.shift()
      if (n.left) {
        temp.push(n.left)
        tempArr.push(num * 2 + 1)
      }
      if (n.right) {
        temp.push(n.right)
        tempArr.push(num * 2 + 2)
      }
    }
    console.log(tempArr, 'tempArr-before', temp.length)

    var tempWidth = 0
    // 这个算法比较巧妙
    //计算tempNumArr中存储的这一层的宽度, 最后一位元素存储这一层级最大宽度的索引
    if (tempArr.length) {
      tempWidth = tempArr[tempArr.length - 1] - tempArr[0] + 1;
    }

    if (tempWidth > width) width = tempWidth
    parent = temp
    numArr = tempArr
  }

  return width
};

console.log(widthOfBinaryTree2(root))