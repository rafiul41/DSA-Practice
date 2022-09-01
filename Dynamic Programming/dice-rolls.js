let mod = 1000000007;

function getNumberOfWays(sum, memo) {
  if(memo[sum] !== undefined) return memo[sum];
  if(sum === 0) return memo[sum] = 1;
  let ans = 0;
  for(let i = 1; i <= 6; i++) {
    if(sum - i >= 0)
    ans += getNumberOfWays(sum - i, memo);
    ans %= mod;
  }
  return memo[sum] = ans;
}

function getNumberOfWaysIt(sum) {
  let dp = Array(sum + 1).fill(0);
  dp[0] = 1;
  for(let i = 1; i <= sum; i++) {
    for(let j = 1; j <= 6; j++) {
      if(i - j >= 0) {
        dp[i] = (dp[i] + dp[i - j]) % mod;
      }
    }
  }

  return dp[sum];
}

let memo = {};
// console.log(getNumberOfWays(10));
console.log(getNumberOfWaysIt(1, memo));
console.log(getNumberOfWaysIt(2, memo));
console.log(getNumberOfWaysIt(3, memo));
console.log(getNumberOfWaysIt(4, memo));
console.log(getNumberOfWaysIt(5, memo));
console.log(getNumberOfWaysIt(6, memo));
console.log(getNumberOfWaysIt(964213, memo));

//321102917