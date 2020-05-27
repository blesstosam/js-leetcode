const LinkedList = require('../LinkedList');


test('test append, size, toString', () => {
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

test('test insert to head', () => {
  var val = 1
  var list = new LinkedList()
  list.insert(0, val)
  expect(list.getHead().val).toBe(val);
});

test('test indexOf', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  expect(list.indexOf(1)).toBe(0);
  expect(list.indexOf(2)).toBe(1);
  expect(list.indexOf(3)).toBe(2);
});

test('test insert to position 2', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  list.insert(1, 2.5)
  expect(list.indexOf(2.5)).toBe(1);

  list.insert(2, 100)
  expect(list.indexOf(2.5)).toBe(2);
});

test('test getNode', () => {
  var list = new LinkedList()
  list.append(1)
  list.append(2)
  list.append(3)

  expect(list.getNode(0).val).toBe(1)
  expect(list.getNode(1).val).toBe(2)
  expect(list.getNode(2).val).toBe(3)
})

// todo test remove removeAt reverse