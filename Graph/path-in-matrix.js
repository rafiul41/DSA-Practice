const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

function isValid(r, c, matrix, visited) {
  return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length && matrix[r][c] !== 0 && !visited[r][c];
}

function dfs(sr, sc, matrix, visited) {
  visited[sr][sc] = true;
  for(let i = 0; i < 4; i++) {
    let xr = dr[i] + sr;
    let xc = dc[i] + sc;
    if(isValid(xr, xc, matrix, visited)) {
      dfs(xr, xc, matrix, visited);
    }
  }
}

function doesPathExist(matrix) {
  let visited = [];
  for(let i = 0; i < matrix.length; i++) {
    visited[i] = Array(matrix[0].length).fill(false);
  }

  let er = -1, ec = -1;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 1) {
        dfs(i, j, matrix, visited);
      }
      if(matrix[i][j] === 2) {
        er = i; ec = j;
      }
    }
  }

  if(er === -1) return 0;

  return visited[er][ec] ? 1 : 0;
}

console.log(doesPathExist([[1, 3], [3, 2]]));