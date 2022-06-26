// base case the top row and leftmost column is set to zero
// op1 take the coin --> ind, sum - coin[ind]
// op2 don't take the coin --> ind + 1, sum

function coinChange2(coins, sum) {
  const dp = [];
  dp.push(Array(sum + 1).fill(0));
  dp.push(Array(sum + 1).fill(0));

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= sum; j++) {
      dp[i % 2][j] =
        d[(i - 1) % 2][j] +
        (j - coins[i - 1] >= 0 ? dp[i][j - coins[i - 1]] : 0);
      dp[i % 2][j] %= 1000007;
    }
  }

  return dp[coins.length % 2][sum];
}

console.log(coinChange2([], 0));
console.log(coinChange2([1], 0));
console.log(coinChange2([], 1));
