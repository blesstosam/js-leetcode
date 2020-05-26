/**
 * 单向链表
 */
function LinkedList() {
  function Node(val) {
    this.val = val;
    this.next = null
  }
  var length = 0
  var head = null

  // 向末尾添加节点
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
    }
    length++
  }

  /**
   * 向特定位置插入项
   * @param {number} position
   * @param {any} val
   * @returns {Node}
   */
  this.insert = function (position, val) {
    var node = new Node(val)
    if (position < -1 || position > length) {
      return null
    }

    var index = 0, current = head, previous
    // 从头插入
    if (position === 0) {
      node.next = head
      head = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
        index++
      }
      previous.next = node
      node.next = current
    }
    length++
    return node;
  }

  /**
   * 删除某项
   * @param {any} val
   * @return {Node} 
   */
  this.remove = function (val) {
    var current = head, previous
    while (current) {
      // 找到该项删除
      if (current.val === val) {
        previous.next = current.next
        return current
      }
      previous = current
      current = current.next
    }
    return null
  }

  /**
   * 从特定位置删除项
   * @param {number} position
   * @return {Node}
   */
  this.removeAt = function (position) {
    // 处理边界
    if (position < 0 || position >= length) {
      return null
    }

    var current = head, previous, index = 0
    if (position === 0) {
      head = current.next
    } else {
      // 遍历到position的位置
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      // 将current跳过 js引擎会gc掉
      previous.next = current.next;
    }
    return current
  }

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

  /**
   * 反转链表
   * @return {Node}
   */
  this.reverse = function () {
    if (head == null) return null;
    var current = head
    var next = null
    while (current.next != null) {
      next = current.next

      // 这一步已经将 current 往后移动了
      current.next = next.next
      next.next = head
      head = next
    }
    return head
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

  this.isEmpty = function () {
    return length === 0
  }
}


module.exports = LinkedList;
