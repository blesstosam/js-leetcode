import { BinaryTree } from './util';

// 构造二叉树
var t = new BinaryTree();
// todo 到第4层的leftpos开始有问题了
t.makeBinaryTree([2, 1, 3, 6, 7, 10, 9, 11, 12]);

// ------------------------- 用div和svg可视化二叉树 -------------------
const COLUMN_HEIGHT = 40,
  COLUMN_WIDTH = 40,
  NODE_WIDTH = 30; // 节点的宽高
const HALF_NODE_WIDTH = NODE_WIDTH / 2;

function renderNode(node) {
  var top = node.depth * COLUMN_HEIGHT;
  var ele = document.createElement('span');
  ele.innerHTML = node.val;
  ele.style.top = top + 'px';
  ele.style.left = node.leftPos + 'px';
  ele.classList.add('item');
  document.querySelector('.wrap').appendChild(ele);
  return ele;
}

// 更新leftpos
function updatePos(node) {
  if (node.el) {
    node.el.style.left = node.leftPos + 'px';
  }
  if (node.left && node.left.el) {
    node.left.el.style.left = node.left.leftPos + 'px';
  }
  if (node.right && node.right.el) {
    node.right.el.style.left = node.right.leftPos + 'px';
  }
}

let svg = null,
  minXPos = 0;
function renderLine(startNode, endNode) {
  if (startNode && endNode) {
    const svgNS = 'http://www.w3.org/2000/svg'; //命名空间
    svg = svg || document.createElementNS(svgNS, 'svg');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');

    const line = document.createElementNS(svgNS, 'line');
    const x1 = startNode.leftPos + HALF_NODE_WIDTH;
    const x2 = endNode.leftPos + HALF_NODE_WIDTH;
    const min = Math.min(x1, x2);
    minXPos > min && (minXPos = min);
    // console.log(minXPos, 'minXPos');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', startNode.depth * COLUMN_HEIGHT + HALF_NODE_WIDTH);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', endNode.depth * COLUMN_HEIGHT + HALF_NODE_WIDTH);
    line.setAttribute('stroke', '#999');

    svg.appendChild(line);

    if (svg) {
      document.querySelector('.wrap').appendChild(svg);
    }
  }

  return svg;
}

function traverse(node, cb, direction) {
  if (node) {
    if (!node.parent) {
      node.depth = 0;
      node.leftPos = 0;
    } else {
      node.depth = node.parent.depth + 1;
      // 左子树的最右侧叶子节点的 leftPos 为 -COLUMN_WIDTH
      if (direction === 'left') {
        node.leftPos = node.parent.leftPos - COLUMN_WIDTH;
        if (node.leftPos === 0) {
          // 只能是右子树
          // 如果有节点的leftpos为0 将整个父树向右移动一个单位
          let current = node.parent;
          while (current) {
            if (current.depth !== 0) {
              current.left && (current.left.leftPos += COLUMN_WIDTH);
              current.right && (current.right.leftPos += COLUMN_WIDTH);
              current.leftPos += COLUMN_WIDTH;
              updatePos(current);
            }
            current = current.parent;
          }
        }
      } else if (direction === 'right') {
        node.leftPos = node.parent.leftPos + COLUMN_WIDTH;
        if (node.leftPos === 0) {
          // 只能是左子树
          // 如果有节点的leftpos为0 将整个父树向左移动一个单位
          let current = node.parent;
          while (current) {
            if (current.depth !== 0) {
              current.left && (current.left.leftPos -= COLUMN_WIDTH);
              current.right && (current.right.leftPos -= COLUMN_WIDTH);
              current.leftPos -= COLUMN_WIDTH;
              updatePos(current);
            }
            current = current.parent;
          }
        }
      }
    }

    // 将parent挂到每个节点上
    if (node.left) {
      node.left.parent = node;
    }
    if (node.right) {
      node.right.parent = node;
    }

    cb(node);
    traverse(node.left, cb, 'left');
    traverse(node.right, cb, 'right');
  }
}

traverse(t.getRoot(), (_node) => {
  const ele = renderNode(_node);
  // 等leftpos更新之后再画线
  setTimeout(() => {
    renderLine(_node.parent, _node);
  });
  _node.el = ele;
});

//由于svg的line有负数位置 不能显示 所以使用transform来显示
setTimeout(() => {
  document.querySelectorAll('.item').forEach((i) => {
    i.style.transform = `translateX(${-minXPos}px)`;
  });
  document.querySelectorAll('line').forEach((i) => {
    i.style.transform = `translateX(${-minXPos}px)`;
  });
});
