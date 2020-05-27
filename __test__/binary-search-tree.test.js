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
    str += val
  })
  expect(str).toBe('2581113');
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
    str += val
  })
  expect(str).toBe('5211813');
});

// test('test `BinarySearchTree` postOrderTraverse', () => {
//   var tree = new BinarySearchTree()
//   tree.insert(5)
//   tree.insert(11)
//   tree.insert(8)
//   tree.insert(2)
//   tree.insert(13)

//   var str = ''
//   tree.postOrderTraverse((val) => {
//     console.log(val)
//     str += val
//   })
//   expect(str).toBe('18611');
// });