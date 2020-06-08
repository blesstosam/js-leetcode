const { BinaryTree } = require('./util')

var t = new BinaryTree()
var root = t.makeBinaryTree(
  [-64,
    12, 18,
  -4, -53, null, 76,
    null, -51, null, null, -93, 3,
    null, -31, 47, null, 3, 53, -81, 33, 4, null, -51, -44, -60, 11, null, null, null, null, 78, null, -35, -64, 26, -81, -31, 27, 60, 74, null, null, 8, -38, 47, 12, -24, null, -59, -49, -11, -51, 67, null, null, null, null, null, null, null, -67, null, -37, -19, 10, -55, 72, null, null, null, -70, 17, -4, null, null, null, null, null, null, null, 3, 80, 44, -88, -91, null, 48, -90, -30, null, null, 90, -34, 37, null, null, 73, -38, -31, -85, -31, -96, null, null, -18, 67, 34, 72, null, -17, -77, null, 56, -65, -88, -53, null, null, null, -33, 86, null, 81, -42, null, null, 98, -40, 70, -26, 24, null, null, null, null, 92, 72, -27, null, null, null, null, null, null, -67, null, null, null, null, null, null, null, -54, -66, -36, null, -72, null, null, 43, null, null, null, -92, -1, -98, null, null, null, null, null, null, null, 39, -84, null, null, null, null, null, null, null, null, null, null, null, null, null, -93, null, null, null, 98])

/**
 * leetcode 662
 * 求二叉树的最大宽度
 * @param {https://leetcode-cn.com/problems/maximum-width-of-binary-tree/submissions/} root 
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
      } else {
        // if (n.left) {
        //   temp.push(n.left)
        // }
        temp.push(n.left || null)
        tempArr.push(n.left && n.left.val || null)
        // if (n.right) {
        //   temp.push(n.right)
        // }
        temp.push(n.right || null)
        tempArr.push(n.right && n.right.val || null)
      }

    }
    console.log(tempArr, 'tempArr-before')
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
    if (tempArr.length > width) width = tempArr.length
    parent = temp
  }

  return width
};

console.log(widthOfBinaryTree(root))