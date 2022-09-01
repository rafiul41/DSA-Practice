let adj, visited;

function dfs(start) {
  visited.add(start);
  for(let neighbor of adj[start]) {
    if(!visited.has(neighbor)) dfs(neighbor);
  }
}

function isMotherPresent(nodeCnt, edges) {
  adj = [];
  for(let i = 0; i < nodeCnt; i++) {
    adj.push([]);
  }

  let maxEdgeFromSingleNodeCnt = 0;
  let edgeSet = new Set;
  for(let edge of edges) {
    let a = edge[0] - 1;
    let b = edge[1] - 1;
    if(!edgeSet.has(a.toString() + '/' + b.toString())) adj[a].push(b);
    edgeSet.add(a.toString() + '/' + b.toString());

    if(adj[a].length > maxEdgeFromSingleNodeCnt) {
      maxEdgeFromSingleNodeCnt = adj[a].length;
    }
  }

  for(let i = 0; i < nodeCnt; i++) {
    if(adj[i].length === maxEdgeFromSingleNodeCnt) {
      visited = new Set();
      dfs(maxEdgeNode);
      if(visited.length === nodeCnt) {
        return 1;
      }
    }
  }

  return 0;
}

console.log(isMotherPresent(3))

