function getKthManhattanDist(grid, z) {
  let ans = [];
  for (let i = 0; i < grid.length; i++) {
    ans.push(Array(grid[i].length).fill(0));
    for (let j = 0; j < grid[i].length; j++) {
      ans[i][j] = Array(z + 1).fill(0);
    }
  }

  for (let k = 0; k <= z; k++) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (k === 0) {
          ans[i][j][k] = grid[i][j];
          continue;
        }
        ans[i][j][k] = Math.max(
          i - 1 >= 0 ? ans[i - 1][j][k - 1] : 0,
          i + 1 < grid.length ? ans[i + 1][j][k - 1] : 0,
          j - 1 >= 0 ? ans[i][j - 1][k - 1] : 0,
          j + 1 < grid[0].length ? ans[i][j + 1][k - 1] : 0,
          grid[i][j]
        );
      }
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      ans[i][j] = ans[i][j][ans[i][j].length - 1];
    }
  }

  return ans;
}

console.log(
  getKthManhattanDist(
    [
      [1, 2, 4],
      [4, 5, 8]
    ],
    0
  )
);
