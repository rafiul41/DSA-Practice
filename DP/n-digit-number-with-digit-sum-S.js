let mod = 1000000007;

function getNumbersCnt(ind, sum, memo = {}) {
  if(memo[ind + '/' + sum] !== undefined) return memo[ind + '/' + sum];
  if(ind <= 0) return memo[ind + '/' + sum] = sum === 0;
  let ans = 0;
  for(let i = 0; i <= 9; i++) {
    if(i === 0 && ind === 1) {
      continue;
    }
    if(sum - i >= 0) {
      ans += getNumbersCnt(ind - 1, sum - i, memo);
      ans %= mod;
    }
  }

  return memo[ind + '/' + sum] = ans;
}

console.log(getNumbersCnt(2, 4));