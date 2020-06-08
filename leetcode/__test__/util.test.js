const { BinaryTree, LinkedList } = require('../util')

test('用数组构造层序遍历的二叉树 param => []', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([])

  expect(a.levelOrderTraverse().toString()).toBe('')
})

test('用数组构造层序遍历的二叉树 param => [1]', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([1])

  let arr = a.levelOrderTraverse()
  arr = arr.reduce((pre, next) => pre.concat(next))
  expect(arr.toString()).toBe('1')
})

test('用数组构造层序遍历的二叉树 param => [null]', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([null])

  let arr = a.levelOrderTraverse()
  expect(arr.toString()).toBe('')
})

test('用数组构造层序遍历的二叉树 param => [1, 4, 5, 8, 1, 10, 11, 4]', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([1, 4, 5, 8, 1, 10, 11, 4])

  let arr = a.levelOrderTraverse()
  arr = arr.reduce((pre, next) => pre.concat(next))
  expect(arr.toString()).toBe('1,4,5,8,1,10,11,4')
})

test('用数组构造层序遍历的二叉树 param => [1, null, 2]', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([1, null, 2])

  let arr = a.levelOrderTraverse()
  // console.log(arr)
  // console.log(a.getRoot())
  arr = arr.reduce((pre, next) => pre.concat(next))
  expect(arr.toString()).toBe('1,,2')
})

test('用数组构造层序遍历的二叉树 param => [1, null, 2, 3, null]', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([1, null, 2, 3, null])

  let arr = a.levelOrderTraverse()
  // console.log(arr)
  // console.log(a.getRoot())
  arr = arr.reduce((pre, next) => pre.concat(next))
  expect(arr.toString()).toBe('1,,2,3')
})

test('用数组构造层序遍历的二叉树 param => [1, null, 2, 3, null, null, null]', () => {
  const a = new BinaryTree()
  a.makeBinaryTree([1, null, 2, 3, null, null, null])

  let arr = a.levelOrderTraverse()
  // console.log(arr)
  // console.log(a.getRoot())
  arr = arr.reduce((pre, next) => pre.concat(next))
  expect(arr.toString()).toBe('1,,2,3')
})

// LinkedList
test('用数组构造单向链表 param => [1, 2, 3]', () => {
  const a = new LinkedList()
  a.makeLinkedList([1, 2, 3])

  expect(a.toString()).toBe('1,2,3')
})