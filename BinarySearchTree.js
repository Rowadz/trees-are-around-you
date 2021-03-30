const { writeFileSync } = require('fs')
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(15)
tree.insert(-1)
tree.insert(-50)
tree.insert(100)

writeFileSync('./data.json', JSON.stringify(tree, null, 2))

const tree = {
  1: {
    id: 1,
    age: 23,
    name: 'rowad',
    parentId: null,
    childrenIds: [2, 3, 4],
  },
  2: {
    id: 2,
    age: 30,
    parentId: 1,
    name: 'sarah',
    childrenIds: [5],
  },
  3: {
    id: 3,
    age: 20,
    parentId: 1,
    name: 'koa',
    childrenIds: [],
  },
  4: {
    id: 4,
    age: 22,
    parentId: 1,
    name: 'python',
    childrenIds: [],
  },
  5: {
    id: 5,
    age: 6,
    parentId: 2,
    name: 'React',
    childrenIds: [],
  },
}

const tree = {
  1: { ids: [2, 3, 4] },
  2: { parentId: 1, ids: [5] },
  3: { parentId: 1 },
  4: { parentId: 1 },
  5: { parentId: 2 },
}
