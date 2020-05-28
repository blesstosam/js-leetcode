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