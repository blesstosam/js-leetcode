/**
 * 使用Array实现栈
 */
function StackByArray() {
  var items = []

  this.push = function (item) {
    items.push(item)
  }

  /**
   * 移除栈顶元素并返回该元素
   */
  this.pop = function () {
    return items.pop()
  }

  /**
   * 返回栈顶的元素 不会对栈做任何修改
   */
  this.peek = function() {
    return items[items.length - 1]
  }

  this.clear = function() {
    items = []
  }

  this.size = function() {
    return items.length
  }

  this.isEmpty = function () {
    return !items.length
  }
}

const LinkedList  = require('./LinkedList')

/**
 * 用链表实现栈
 */
function StackByLinkedList() {
  var list = new LinkedList()

  this.push = function(item) {
    list.append(item)
  }

  /**
   * 移除栈顶元素并返回该元素
   */
  this.pop = function() {
    return list.removeAt(list.size() - 1)
  }

  /**
   * 返回栈顶的元素 不会对栈做任何修改
   */
  this.peek = function() {
    return list.getNode(list.size() - 1)
  }

  this.clear = function() {
    list.clear()
  }

  this.size = function() {
    return list.size()
  }

  this.isEmpty = function () {
    return items.isEmpty()
  }

}

module.exports = {
  StackByArray,
  StackByLinkedList
}