/**
 * 散列表 HashTable => HashMap
 * 是 Dictionary类的一种散列表实现方式
 * 散列算法的作用是尽可能快的在数据结构中找到一个值
 * 可能会有冲突 即 键值相同 后面的会覆盖前面的
 */
function HashTable() {
  var table = []

  // 散列函数 将键的字符二进制码相加
  function loseloseHashCode(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    // 为了得到比较小的数值 使用hash值和一个任意数做除法的余数
    return hash % 37
  }

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    console.log(position + ' - ' + key)
    table[position] = value
  }

  this.get = function(key) {
    return table[loseloseHashCode(key)]
  }

  this.remove = function() {
    // 不能将table数组中将位置也移除 即数组的长度不能改变
    return table[loseloseHashCode(key)] = undefined
  }

}

// todo 解决冲突的版本


/**
 * 字典 Dictionary => Map
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