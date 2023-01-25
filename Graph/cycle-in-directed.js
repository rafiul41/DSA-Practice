let adj, isCyclePresent, visited, touched;

function dfs(src) {
  touched[src] = true;
  visited[src] = true;
  for(let i = 0; i < adj[src].length; i++) {
    let v = adj[src][i];
    if(visited[v]) {
      isCyclePresent = true;
      break;
    }
    dfs(v);
  }
  visited[src] = false;
}

function func(nodeCnt, A, B) {
  adj = [];
  for(let i = 0; i < nodeCnt; i++) {
    adj.push([]);
  }

  for(let i = 0; i < A.length; i++) {
    adj[A[i] - 1].push(B[i] - 1);
  }

  isCyclePresent = false;
  visited = Array(nodeCnt).fill(false);
  touched = Array(nodeCnt).fill(false);
  for(let i = 0; i < nodeCnt; i++) {
    if(!touched[i]) {
      dfs(i);
      if(isCyclePresent) return 0;
    }
  }

  return 1;
}