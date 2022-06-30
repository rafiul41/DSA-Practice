let dirR = [0, 0, 1, -1];
let dirC = [1, -1, 0, 0];

function isValid(r, c, info, color, grid, sr, sc) {
  return (
    r >= 0 &&
    r < grid.length &&
    c >= 0 &&
    c < grid[0].length &&
    !info[r][c][color] &&
    grid[r][c] >= grid[sr][sc]
  );
}

function bfs(sr, sc, info, color, grid) {
  let q = [],
    nr,
    nc;
  info[sr][sc][color] = true;
  q.push({ r: sr, c: sc });

  while (q.length > 0) {
    let top = q[0];
    q.shift();
    for (let i = 0; i < 4; i++) {
      nr = top.r + dirR[i];
      nc = top.c + dirC[i];
      if (isValid(nr, nc, info, color, grid, top.r, top.c)) {
        info[nr][nc][color] = true;
        q.push({ r: nr, c: nc });
      }
    }
  }
}

function getBothLakeCellCnt(grid) {
  const info = [];
  for (let i = 0; i < grid.length; i++) {
    info[i] = [];
    for (let j = 0; j < grid[0].length; j++) {
      info[i][j] = { blue: false, red: false };
    }
  }

  // Blue lake
  // top row --> column change
  for (let i = 0; i < grid[0].length; i++) {
    bfs(0, i, info, 'blue', grid);
  }

  // Left column --> row change
  for (let i = 1; i < grid.length; i++) {
    bfs(i, 0, info, 'blue', grid);
  }

  // Red lake
  // bottom row --> column change
  for (let i = 0; i < grid[0].length; i++) {
    bfs(grid.length - 1, i, info, 'red', grid);
  }

  // right column --> row change
  for (let i = 0; i < grid.length - 1; i++) {
    bfs(i, grid[0].length - 1, info, 'red', grid);
  }

  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      ans += info[i][j].red && info[i][j].blue;
    }
  }
  return ans;
}

console.log(
  getBothLakeCellCnt([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
  ])
);

console.log(getBothLakeCellCnt([[1, 2, 2, 3, 5]]));

console.log(getBothLakeCellCnt([[3]]));
