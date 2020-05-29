# 前端的算法基础知识和刷 leetcode 总结

## 为什么说线程是 cpu 调度的最小单位？

[我总结的一个回答](https://www.zhihu.com/question/25532384/answer/1248852895)

## 为什么 32 位有符号正数负数比正数多一位？

[看到一个比较好的回答](https://www.pythonf.cn/read/97817)

# 树

## 树的类型

| 大类   | 细分                                | 特点                                   |
| ------ | ----------------------------------- | -------------------------------------- |
| 二叉树 | 二叉搜索树（BST）Binary Search Tree | 查找性能较好                           |
| 二叉树 | 自平衡二叉搜索树（AVL）             | 任何一个节点左右两侧子树的高低最多为 1 |
| 二叉树 | 红黑树                              | 可以进行高效的中序遍历                 |
| 二叉树 | 堆积树                              | -                                      |

## 树的遍历方式

| 大类                                    | 细分     | 特点 |
| --------------------------------------- | -------- | ---- |
| 深度优先搜索（DFS）Depth-First Search   | 先序遍历 | -    |
| 深度优先搜索（DFS）                     | 中序遍历 | -    |
| 深度优先搜索（DFS）                     | 后序遍历 | -    |
| 广度优先搜索（BFS）Breadth-First Search | 层序遍历 | -    |

# 搜索算法

## 顺序搜索（又名线性搜索，将每个数据结构的元素和我们要找的元素做比较）- 比如 LinkedList 里的 indexOf 方法

```js
function sequentialSearch() {
  for (var i = 0; i < array.length; i++) {
    if (item === array[i]) return i;
    return -1;
  }
}
```

## 二分搜索法 (要求数据结构已排序) - 比如 BST 里的 search 方法

```js
this.binarySearch = function (item) {
  this.quickSort();
  var low = 0,
    high = array.length - 1,
    mid,
    element;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = array[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1; //{12}
};
```

# 递归

## 它解决问题的各个小部分，直到解决最初的大问题

# 动态规划 (DP - Dynamic Programming)

## 是一种将复杂问题分解成更小的子问题来解决的优化技术

### 例子 最少硬币找零问题

```js
function MinCoinChange(coins) {
  var coins = coins;
  var cache = {};
  this.makeChange = function (amount) {
    var me = this;
    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount];
    }
    var min = [],
      newMin,
      newAmount;
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];
      newAmount = amount - coin;
      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount);
      }
      if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin);
        console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[amount] = min);
  };
}
```

# 贪心算法

## 遵循一种近似解决问题的技术，期盼通过每个阶段的局部最优选择(当前最好的 解)，从而达到全局的最优(全局最优解)

### 例子 最少硬币找零问题

```js
function MinCoinChange(coins) {
  var coins = coins;
  this.makeChange = function (amount) {
    var change = [],
      total = 0;
    for (var i = coins.length; i >= 0; i--) {
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change;
  };
}
```
