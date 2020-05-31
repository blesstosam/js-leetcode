var BinarySearchTree = require('../BinarySearchTree')

test('test `BinarySearchTree` inOrderTraverse', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)

  var str = ''
  tree.inOrderTraverse((val) => {
    str += (val + ',')
  })
  expect(str).toBe('2,5,8,11,13,');
});

test('test `BinarySearchTree` preOrderTraverse', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)

  var str = ''
  tree.preOrderTraverse((val) => {
    str += (val + ',')
  })
  expect(str).toBe('5,2,11,8,13,');
});

test('test `BinarySearchTree` postOrderTraverse', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  var str = ''
  tree.postOrderTraverse((val) => {
    str += (val + ',')
  })
  expect(str).toBe('1,3,2,8,13,11,5,');
});

test('test `BinarySearchTree` min & max', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  expect(tree.min()).toBe(1);
  expect(tree.max()).toBe(13);
});

test('test `BinarySearchTree` search', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  expect(tree.search(5)).toBe(true);
  expect(tree.search(8)).toBe(true);
  expect(tree.search(0)).toBe(false);
});

test('test `BinarySearchTree` remove', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  tree.remove(2)
  var str = ''
  tree.preOrderTraverse((val) => {
    str += (val + ',')
  })
  expect(str).toBe('5,3,1,11,8,13,');
});

test('test `BinarySearchTree` remove root node', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  tree.remove(5)
  var str = ''
  tree.preOrderTraverse((val) => {
    str += (val + ',')
  })
  expect(str).toBe('8,2,1,3,11,13,');
});

test('test `BinarySearchTree` depth', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  expect(tree.depth()).toBe(3);
  tree.insert(100)
  tree.insert(200)
  expect(tree.depth()).toBe(5);
});

test('test `BinarySearchTree` 判断一棵树是否是bst', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)

  // https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/48/
  var isValidBST = function (root) {
    // 空树也为true
    if (!root) return true

    var pre = null
    var flag = true
    inOrder(root, (val) => {
      if (pre != null && pre >= val) {
        flag = false
      }
      pre = val
    })
    return flag

    // 中序遍历后面的数值一定比前面大 
    function inOrder(node, cb) {
      // 增加一个条件如果flag为false 则不需要继续遍历了
      if (node && flag) {
        inOrder(node.left, cb)
        cb(node.val)
        inOrder(node.right, cb)
      }
    }
  };

  expect(isValidBST(tree.root())).toBe(true);
});

test('test `BinarySearchTree` `levelOrderTraverse`', () => {
  var tree = new BinarySearchTree()
  tree.insert(5)
  tree.insert(11)
  tree.insert(8)
  tree.insert(2)
  tree.insert(13)
  tree.insert(1)
  tree.insert(3)
  expect(tree.levelOrderTraverse()).toBe(1);
});
