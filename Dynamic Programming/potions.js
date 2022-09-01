function func(grid) {
  let dp = [];
  for (let i = 0; i < grid.length; i++) {
    dp.push(Array(grid[i].length).fill(0));
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < grid.length; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < grid[0].length; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  if (dp[grid.length - 1][grid[0].length - 1] > 0) return 1;
  return dp[grid.length - 1][grid[0].length - 1] * -1 + 1;
}

console.log(func([
  [1, -3, 3],
  [0, -2, 0],
  [-3, -3, -3]
]))
