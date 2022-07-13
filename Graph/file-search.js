function dfs(src, adj, visited) {
  visited[src] = true;
  for(let node of adj[src]) {
    if(!visited[node]) dfs(node, adj, visited);
  }
}

function createAdjacencyMat(nodeCnt, relationShips) {
  const adj = [];
  for (let i = 0; i < nodeCnt; i++) {
    adj.push([]);
  }

  for (let relationShip of relationShips) {
    adj[relationShip[0] - 1].push(relationShip[1] - 1);
    adj[relationShip[1] - 1].push(relationShip[0] - 1);
  }

  const visited = Array(nodeCnt).fill(false);
  let ans = 0;
  for (let i = 0; i < nodeCnt; i++) {
    if (!visited[i]) {
      dfs(i, adj, visited);
      ans++;
    }
  }

  return ans;
}

console.log(createAdjacencyMat(4,[[1, 2], [3, 4]]));
