function bfs(nodeInfo, edges, info) {
  let q = [];
  q.push(1);
  info[1].visited = true;
  info[1].goodNodeCnt = nodeInfo[1] === 1;
  while(q.length !== 0) {
    let top = q[0];
    q.shift();
    if(edges[top]) {
      for(let node of edges[top]) {
        if(!info[node].visited) {
          info[node].visited = true;
          info[node].goodNodeCnt = info[top].goodNodeCnt + (nodeInfo[node] === 1);
        }
      }
    }
  }
}

function getPaths(nodeInfo, matrix, maxGoodCnt) {
  let edges = {};
  for(let info of matrix) {
    edges[info[0]] = edges[info[0]] ? [...edges[info[0]], info[1]] : [info[1]];
    edges[info[1]] = edges[info[1]] ? [...edges[info[1]], info[0]] : [info[0]];
  }

  const info = Array(nodeInfo.length).fill({visited: false, goodNodeCnt: 0});
  bfs(nodeInfo, edges, info);

  let ans = 0;
  for(let i = 2; i <= nodeInfo.length; i++) {
    if(edges[i].length === 1 && info[i].goodNodeCnt <= maxGoodCnt) {
      ans++;
    }
  }

  return ans;
}

console.log(getPaths([0, 1, 0, 1, 1, 1], [  [1, 2],
  [1, 5],
  [1, 6],
  [2, 3],
  [2, 4]
], 1));