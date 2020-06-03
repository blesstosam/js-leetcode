/**
 * 最小栈
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/24/design/59/
 */
var MinStack = function() {
  this.items = []
  this.min = null
  // this.secondMin = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.items.push(x)
  if (this.min == null) {
    this.min = x
  } else if (x < this.min) {
    this.min = x
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var n = this.items.pop()
  if (this.min === n) {
    var m = null
    // 这里的循环比较耗时
    for (let i = 0; i < this.items.length; i++) {
      if (m == null || m > this.items[i]) {
        m = this.items[i]
      }
    }
    this.min = m
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.items[this.items.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

module.exports = MinStack