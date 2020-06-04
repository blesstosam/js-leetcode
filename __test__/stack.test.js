const { StackByLinkedList } = require('../Stack');

test('test `StackByLinkedList` push pop', () => {
  var stack = new StackByLinkedList()
  stack.push(1)
  expect(stack.pop().val).toBe(1);
});

test('test `StackByLinkedList` clear', () => {
  var stack = new StackByLinkedList()
  stack.push(1)
  stack.clear()
  expect(stack.peek()).toBe(null);
});