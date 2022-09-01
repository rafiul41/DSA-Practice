let adjacencyList, visited;

function dfs(node) {
  visited[node] = true;
  for(let neighbor of adjacencyList[node]) {
    if(!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

function getConnectedComponentsCnt(neighborCnt, edges) {
  visited = Array(neighborCnt).fill(false);
  adjacencyList = [];
  for(let i = 0; i < neighborCnt; i++) {
    adjacencyList.push([]);
  }
  for(let edge of edges) {
    let a = edge[0] - 1;
    let b = edge[1] - 1;
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }

  let ans = 0;
  for(let i = 0; i < neighborCnt; i++) {
    if(!visited[i]) {
      dfs(i, c);
      ans++;
    }
  }
  return ans;
}