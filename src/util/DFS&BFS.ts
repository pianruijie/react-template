const tree = [
  {
    value: 'a',
    children: [
      {
        value: 'a1',
        children: [
          {
            value: 'a11',
            children: []
          }
        ]
      },
      {
        value: 'a2',
        children: [
          {
            value: 'a21',
            children: []
          }
        ]
      },
      {
        value: 'a3',
        children: [
          {
            value: 'a31',
            children: []
          }
        ]
      }
    ]
  },
  {
    value: 'b',
    children: [
      {
        value: 'b1',
        children: [
          {
            value: 'b11',
            children: []
          }
        ]
      },
      {
        value: 'b2',
        children: [
          {
            value: 'b21',
            children: []
          }
        ]
      },
      {
        value: 'b3',
        children: [
          {
            value: 'b31',
            children: []
          }
        ]
      }
    ]
  }
];
const DFS = tree => {
  tree.forEach(node => {
    console.log(node.value);
    if (node.children) {
      DFS(node.children);
    }
  });
};
const BFS = tree => {
  let loop = [].concat(tree);
  while (loop.length) {
    const cur = loop.shift();
    console.log(cur.value);
    if (cur.children) {
      loop = loop.concat(cur.children);
    }
  }
};
console.log('深度优先');
DFS(tree);
console.log('广度优先');
BFS(tree);
