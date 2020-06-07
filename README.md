## 为什么说线程是 cpu 调度的最小单位？

[我总结的一个回答](https://www.zhihu.com/question/25532384/answer/1248852895)

## 为什么 32 位有符号正数负数比正数多一位？

[看到一个比较好的回答](https://www.pythonf.cn/read/97817)

## V8 对 Object 的实现 => 当查找属性的时候通过三种方式实现（search cache，数组，哈希表）

[从 Chrome 源码看 JS Object 的实现](https://zhuanlan.zhihu.com/p/26169639)  
![image](https://github.com/blesstosam/js-leetcode/resource/js-object.png)

---

## 数据在内存中的存储结构，也就是物理结构，分为两种：顺序存储结构和链式存储结构

### 顺序存储结构：是把数据元素存放在地址连续的存储单元里，其数据间的逻辑关系和物理关系是一致的。数组就是顺序存储结构的典型代表

### 链式存储结构：是把数据元素存放在内存中的任意存储单元里，也就是可以把数据存放在内存的各个位置。这些数据在内存中的地址可以是连续的，也可以是不连续的。链表就是顺序存储结构的典型代表

# 树

## 树的类型

| 大类   | 细分                                | 特点                                                                                                                                 |
| ------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 二叉树 | 二叉搜索树（BST）Binary Search Tree | 查找性能较好                                                                                                                         |
| 二叉树 | 自平衡二叉搜索树（AVL）             | 任何一个节点左右两侧子树的高低最多为 1                                                                                               |
| 二叉树 | 红黑树 (RBT) Red Black Tree         | 一种特化的 AVL 树 可以进行高效的中序遍历                                                                                             |
| 二叉树 | 堆积树                              | -                                                                                                                                    |
| 二叉树 | 满二叉树                            | 一棵深度为 k 且有 个结点的二叉树称为满二叉树（每个节点都占满了，满二叉树一定是完全二叉树）                                                                     |
| 二叉树 | 完全二叉树                          | 若设二叉树的深度为 k，除第 k 层外，其它各层 (1 ～ k-1) 的结点数都达到最大个数，第 k 层所有的结点都连续集中在最左边，这就是完全二叉树 |

## 树的遍历方式

| 大类                                    | 细分     | 特点 |
| --------------------------------------- | -------- | ---- |
| 深度优先搜索（DFS）Depth-First Search   | 先序遍历 | -    |
| 深度优先搜索（DFS）                     | 中序遍历 | -    |
| 深度优先搜索（DFS）                     | 后序遍历 | -    |
| 广度优先搜索（BFS）Breadth-First Search | 层序遍历 | -    |

# 排序算法

## 归并排序 时间复杂度 O(nlogn)

```js
function mergeSort() {
  array = mergeSortRec(array);
}
var mergeSortRec = function (array) {
  var length = array.length;
  if (length === 1) {
    return array;
  }
  var mid = Math.floor(length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
};
var merge = function (left, right) {
  var result = [],
    il = 0,
    ir = 0;
  // 将小的数组放到前面  只会遍历小的数组
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  // 将大的数组放到后面 只会遍历大的数组
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
};
```

## 快速排序 时间复杂度 O(nlogn)

```js
var quickSort = function () {
  // 取第一个和最后一个元素作为左右指针
  quick(array, 0, array.length - 1);
};
var quick = function (array, left, right) {
  var index;
  if (array.length > 1) {
    index = partition(array, left, right);
  }
  if (left < index - 1) {
    quick(array, left, index - 1);
  }
  if (index < right) {
    quick(array, index, right);
  }
};
var partition = function (array, left, right) {
  // 取数组中间值作为主元
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swapQuickStort(array, i, j);
      i++;
      j--;
    }
  }
  return i;
};
var swapQuickStort = function (array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};
```

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
  return -1;
};
```

# LRU (Least Recently Used) 缓存淘汰算法

## 认为最近使用过的数据应该是是「有用的」，很久都没用过的数据应该是无用的，内存满了就优先删那些很久没用过的数据

# 递归

## 它解决问题的各个小部分，直到解决最初的大问题

- 一个问题的解可以分解为几个子问题的解

- 这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样

- 存在递归终止条件，即必须有一个明确的递归结束条件，称之为递归出口

# 动态规划 (DP - Dynamic Programming)

## 是一种将复杂问题分解成更小的子问题来解决的优化技术

- 将一个原问题分解成规模较小的子问题，递归的求解这些子问题，然后合并子问题的解得到原问题的解（与分治策略一样）
- 动态规划法试图只解决每个子问题一次（通过存储解），分治策略可能会多次求解
- **因此，分治策略一般用来解决子问题相互对立的问题，称为标准分治，而动态规划用来解决子问题重叠的问题**

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
