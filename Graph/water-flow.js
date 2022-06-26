let fr = [0, 0, 1, -1];
let fc = [1, -1, 0, 0];

function isValid(r, c, info) {
  return r >= 0 && r < info.length && c >= 0 && c < info[0].length && !info[r][c].visited;
}

function bfs(grid, sr, sc, info) {
  let q = [];
  info[sr][sc].visited = true;
  q.push({r: sr, c: sc});
  while(q.length !== 0) {
    let top = q[0];
    q.splice(0, 1);

    for(let i = 0; i < 4; i++) {
      let nr = fr[i] + top.r;
      let nc = fc[i] + top.c;
      if(isValid(nr, nc, info) && grid[nr][nc] <= grid[top.r][top.c]) {
        info[nr][nc].visited = true;
        info[nr][nc].red = info[nr][nc].red || info[top.r][top.c].red;
        info[nr][nc].blue = info[nr][nc].blue || info[top.r][top.c].blue;
        q.push({r: nr, c: nc});
      }
    }
  }
}

function flow(grid) {
  if(grid.length === 0) return 0;

  let info = [];
  for(let i = 0; i < grid.length; i++) {
    info[i] = [];
    for(let j = 0; j < grid[i].length; j++) {
      info[i][j] = {visited: false, red: false, blue: false}
      if(i === 0 || j === 0) {
        info[i][j].blue = true;
      } else if(i === grid.length - 1 || j === grid[i].length - 1) {
        info[i][j].red = true;
      }
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(!info[i][j].visited) {
        bfs(grid, i, j, info);
      }
    }
  }

  let ans = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      ans += (info[i][j].red && info[i][j].blue);
    }
  }

  return ans;
}

console.log(flow([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]));