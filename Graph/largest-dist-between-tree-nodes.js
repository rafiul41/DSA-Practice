let adj, maxHeightNode, maxCurrentHeight, visited;

function dfs(node, height) {
  visited[node] = true;
  if(height >= maxCurrentHeight) {
    maxCurrentHeight = height;
    maxHeightNode = node;
  }
  for(let i = 0; i < adj[node].length; i++) {
    if(!visited[adj[node][i]]) {
      dfs(adj[node][i], height + 1);
    }
  }
}

function getLargestDist(treeConfig) {
  adj = [];
  for(let i = 0; i < treeConfig.length; i++) {
    adj.push([]);
  }
  let root = -1;
  for(let i = 0; i < treeConfig.length; i++) {
    if(treeConfig[i] === -1) {
      root = i;
      continue;
    }
    adj[treeConfig[i]].push(i);
    adj[i].push(treeConfig[i]);
  }
  maxCurrentHeight = 0;
  visited = Array(treeConfig.length).fill(false);
  dfs(root, 0);

  maxCurrentHeight = 0;
  visited = Array(treeConfig.length).fill(false);
  dfs(maxHeightNode, 0);

  return maxCurrentHeight;
}

console.log(getLargestDist([-1, 0, 1, 1, 2, 0, 5, 0, 3, 0, 0, 2, 3, 1, 12, 14, 0, 5, 9, 6, 16, 0, 13, 4, 17, 2, 1, 22, 14, 20, 10, 17, 0, 32, 15, 34, 10, 19, 3, 22, 29, 2, 36, 16, 15, 37, 38, 27, 31, 12, 24, 29, 17, 29, 32, 45, 40, 15, 35, 13, 25, 57, 20, 4, 44, 41, 52, 9, 53, 57, 18, 5, 44, 29, 30, 9, 29, 30, 8, 57, 8, 59, 59, 64, 37, 6, 54, 32, 40, 26, 15, 87, 49, 90, 6, 81, 73, 10, 8, 16]));