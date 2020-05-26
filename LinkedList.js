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

  // 向特定位置插入项
  this.insert = function (position, val) { }  

  // 删除某项
  this.remove = function (val) { } 

  // 从特定位置删除项
  this.removeAt = function (position) { }  

  // 返回索引
  this.indexOf = function (val) { }  

  // 反转链表
  this.reverse = function () {
    if (head == null) return null;
    var current = head
    var next = null
    while (current.next != null) {
      console.log('in reverse')
      next = current.next

      // 这一步已经将 current 往后移动了
      current.next = next.next
      next.next = head
      head = next
    }
    return head
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.size = function () {
    return length
  }

  this.toString = function () {
    var current = head, str = ''
    while (current) {
      console.log(current)
      str += (current.val + ',')
      current = current.next
    }
    return str.substr(0, str.length - 1)
  }
}

var a = new LinkedList()
a.append(1)
a.append(2)
console.log(a.toString())
a.reverse()
console.log(a.toString())
