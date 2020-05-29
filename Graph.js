/**
 * 图 - 邻接表表示法
 */
function Graph() {
  // 存储所有顶点的名字
  var vertices = []

  // 存储邻接表
  var adjList = new Map()

  /**
   * 向图中添加一个新的顶点
   * @param {any} v 顶点
   */
  this.addVertex = function (v) {
    vertices.push(v)
    adjList.set(v, [])
  }

  /**
   * 添加顶点之间的边 需要两个顶点作为参数
   * @param {any} v 顶点
   * @param {any} w 顶点
   */
  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    // 如果只是有向图 则下面的语句不需要
    adjList.get(w).push(v)
  }

  this.toString = function () {
    var s = '';
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> '
      var neighbors = adjList.get(vertices[i])
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  };
}

module.exports = Graph