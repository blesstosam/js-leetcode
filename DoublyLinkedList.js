/**
 * 双向链表
 * 与单向链表相比增加一个priv指针指向前一个元素
 * head的prev为null
 * 最后一个节点的next为null
 */
function DoublyLinkedList() {
  function Node(val) {
    this.val = val;
    this.prev = this.next = null
  }
  var length = 0
  var head = null

  // 最后一个节点
  var tail = null

  /**
   * 向末尾添加节点
   * @param {any} val
   * @returns void
   */
  this.append = function (val) {
    var current
    var node = new Node(val)
    if (head == null) {
      head = node
    } else {
      current = head

      // 找到最后一项
      while (current.next) {
        current = current.next
      }

      current.next = node

      // 指定 prev
      node.prev = current
    }
    length++
  }

  /**
   * todo
   * 向特定位置插入项
   * @param {number} position
   * @param {any} val
   * @returns {Node}
   */
  // this.insert = function (position, val) {
  //   var node = new Node(val)
  //   if (position < 0 || position > length) {
  //     return null
  //   }

  //   var index = 0, current = head, previous
  //   // 从头插入
  //   if (position === 0) {
  //     node.next = head
  //     head = node
  //   } else {
  //     while (index++ < position) {
  //       previous = current
  //       current = current.next
  //       index++
  //     }
  //     previous.next = node
  //     node.next = current
  //   }
  //   length++
  //   return node;
  // }

  /**
   * todo
   * 删除某项
   * @param {any} val
   * @return {Node} 
   */
  // this.remove = function (val) {
  //   var current = head, previous
  //   while (current) {
  //     // 找到该项删除
  //     if (current.val === val) {
  //       previous.next = current.next
  //       return current
  //     }
  //     previous = current
  //     current = current.next
  //   }
  //   return null
  // }

  /**
   * todo
   * 从特定位置删除项
   * @param {number} position
   * @return {Node}
   */
  // this.removeAt = function (position) {
  //   // 处理边界
  //   if (position < 0 || position >= length) {
  //     return null
  //   }

  //   var current = head, previous, index = 0
  //   if (position === 0) {
  //     head = current.next
  //   } else {
  //     // 遍历到position的位置
  //     while (index++ < position) {
  //       previous = current;
  //       current = current.next;
  //     }

  //     // 将current跳过 js引擎会gc掉
  //     previous.next = current.next;
  //   }
  //   return current
  // }

  /**
   * 返回索引
   * @param {any} val
   * @return {number}
   */
  this.indexOf = function (val) {
    var index = 0, current = head
    while (current) {
      if (current.val === val) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  /**
   * 返回索引项
   * @param {number} position
   * @returns {Node}
   */
  this.getNode = function(position) {
    if (position < 0 || position >= length) {
      return null
    }

    var current = head, index = 0
    if (position === 0) {
      return head
    } else {
      // 遍历到position的位置
      while (index++ < position) {
        current = current.next;
      }
    }
    return current
  }

  this.toString = function () {
    var current = head, str = ''
    while (current) {
      str += (current.val + ',')
      current = current.next
    }
    return str.substr(0, str.length - 1)
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }

  this.getTail = function () {
    return tail
  }

  this.isEmpty = function () {
    return length === 0
  }
}


module.exports = DoublyLinkedList;

