const LinkedList = require('../LinkedList');


test('test `LinkedList` append, size, toString', () => {
  var val = 1
  var list = new LinkedList()
  list.append(val)
  expect(list.toString()).toBe(`${val}`);
  expect(list.size()).toBe(1);

  var val2 = 2
  list.append(val2)
  expect(list.toString()).toBe(`${val},${val2}`);
  expect(list.size()).toBe(2);
});

test('test `LinkedList` insert to head', () => {
  var val = 1
  var list = new LinkedList()
  list.insert(0, val)
  expect(list.getHead().val).toBe(val);
});

test('test `LinkedList` insert to position 2', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  list.insert(1, 2.5)
  expect(list.indexOf(2.5)).toBe(1);

  list.insert(2, 100)
  expect(list.indexOf(2.5)).toBe(2);
});

test('test `LinkedList` indexOf', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  expect(list.indexOf(1)).toBe(0);
  expect(list.indexOf(2)).toBe(1);
  expect(list.indexOf(3)).toBe(2);
});

test('test `LinkedList` getNode', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  expect(list.getNode(0).val).toBe(1)
  expect(list.getNode(1).val).toBe(2)
  expect(list.getNode(2).val).toBe(3)
})

test('test `LinkedList` remove not head', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  list.remove(2)
  expect(list.indexOf(3)).toBe(1)
})

test('test `LinkedList` remove head', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  list.remove(1)
  expect(list.indexOf(2)).toBe(0)
})

test('test `LinkedList` removeAt at 0', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  list.removeAt(0)
  expect(list.indexOf(2)).toBe(0)
})

test('test `LinkedList` removeAt at 1', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  list.removeAt(1)
  expect(list.indexOf(3)).toBe(1)
})

// todo test reverse