const LinkedList = require("./LinkedList")

// 散列函数实现 http://goo.gl/VtdN2x
// 好的实现应该满足 1. 性能要好 2. 冲突较少

/**
 * 散列函数 将键的字符二进制码相加
 * 此法产生的冲突太频繁 不建议使用
 * @param {*} key 
 */
function loseloseHashCode(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  // 为了得到比较小的数值 使用hash值和一个任意数做除法的余数
  return hash % 37
}

/**
 * 散列函数
 * @param {*} key 
 */
function djb2HashCode(key) {
  var hash = 5381
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i)
  }
  return hash % 1013
}


/**
 * 散列表 HashTable 也叫 HashMap 是 Dictionary 类的一种散列表实现方式 =>
 * （Dictionary是用Object来存值，HashTable用数组来存值，数组是一个稀疏数组，比较浪费空间，=>
 * 这也是叫`散列`名称的原因。但是数组可以直接通过下标(地址)来访问数据，速度很快）
 * 散列算法的作用是尽可能快的在数据结构中找到一个值
 * 可能会有冲突 即 键值相同 后面的会覆盖前面的
 * -----------------
 * 使用 拉链法 即存值的地方存链表 相同的key的value继续往链表后面挂
 */
function HashTable() {
  var table = []

  function ValuePair(key, value) {
    this.key = key
    this.value = value

    this.toString = function () {
      return `[${this.key} - ${this.value}]`
    }
  }

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    console.log(position + ' - ' + key)
    // 这里要注意 position 是数字类型才能这么赋值 即数组的下标
    // table[position] = value
    // 在保存值的地方保存一个链表 多个值通过链表来连起来
    if (table[position] == undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }

  this.get = function (key) {
    var position = loseloseHashCode(key)
    // return table[position]

    if (table[position] !== undefined) {
      var current = table[position].getHead()
      while (current) {
        if (current.val.key === key) {
          return current.val.value
        }
        current = current.next
      }
    }
    return undefined
  }

  this.remove = function (key) {
    var position = loseloseHashCode(key)
    // 不能将table数组中将位置也移除 即数组的长度不能改变
    // return table[position] = undefined
    if (table[position] !== undefined) {
      var current = table[position].getHead()
      while (current) {
        if (current.val.key === key) {
          table[position].remove(current.val)
          if (table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
}

/**
 * 线性探测法 如果有相同的key 将position加1 直到找到空闲的位置插入进去
 */
function HashTable2() {
  var table = []

  function ValuePair(key, value) {
    this.key = key
    this.value = value

    this.toString = function () {
      return `[${this.key} - ${this.value}]`
    }
  }

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    console.log(position + ' - ' + key)
    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value)
    } else {
      var index = position + 1
      // 找到第一个没被赋予值的位置
      while (table[index] !== undefined) {
        index++
      }
      table[index] = new ValuePair(key, value)
    }
  }

  this.get = function (key) {
    var position = loseloseHashCode(key)

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value
      } else {
        var index = position + 1
        while (table[index] == undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          return table[index].value
        }
        return undefined
      }
    }
    return undefined
  }

  this.remove = function (key) {
    var position = loseloseHashCode(key)

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined
        return true
      } else {
        var index = position + 1
        while (table[index] == undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          table[index] = undefined
          return true
        }
        return false
      }
    }
    return false
  }
}


/**
 * 字典 Dictionary ES6 实现为 Map
 */
function Dictionary() {
  var items = {}

  this.has = function (key) {
    return key in items
  }
  this.set = function (key, val) {
    items[key] = val
  }
  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }

  this.get = function (key) {
    return items[key]
  }
  // 以数组的形式返回所有值
  this.values = function () {
    var values = {};
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  }
}

module.exports = {
  HashTable,
  Dictionary
}

// var h = new HashTable()
// h.put('name', 'sam')
// h.put('nmae', '18')
// console.log(h.get('name'), h.get('nmae'))
// h.remove('name')
// console.log(h.get('name'))
// ------------------------HashTable2
var h = new HashTable2()
h.put('name', 'sam')
h.put('nmae', '18')
h.put('nmea', '--')
console.log(h.get('name'), h.get('nmae'), h.get('nmea'))
h.remove('name')
console.log(h.get('name'))