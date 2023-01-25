let parent, size;

function make(nodeCnt) {
  size = Array(nodeCnt).fill(1);
  parent = Array(nodeCnt).fill(0);
  for(let i = 0; i < nodeCnt; i++) {
    parent[i] = i;
  }
}

function findParent(node) {
  if(parent[node] === node) return node;
  return parent[node] = findParent(parent[node]);
}

function union(a, b) {
  a = findParent(a);
  b = findParent(b);
  if(a !== b) {
    if(size[a] < size[b]) {
      [a, b] = [b, a];
    }
    parent[b] = a;
    size[a] += size[b];
  }
}

function getMinCnt(config) {
  make(config.length);
  for(let i = 1; i < config.length; i++) {
    union(i, config[i] - 1);
  }

  let parentCnt = 0, visited = Array(config.length).fill(false);
  for(let i = 0; i < config.length; i++) {
    let parent = findParent(i);
    if(!visited[parent]) {
      visited[parent] = true;
      parentCnt++;
    }
  }

  return parentCnt - 1;
}

console.log(getMinCnt([1, 2, 1, 2]));