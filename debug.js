function solve(targetState, coins) {
  let ans = 0;
  for(let i = 0; i < targetState.length; i++) {
    if(targetState[i] - 1 > i) {
      let requiredCoinCnt = targetState[i] - i - 1;
      if(coins[targetState[i] - 1] < requiredCoinCnt) {
        return -1;
      }
      ans += requiredCoinCnt;
    }
  }

  return ans;
}

console.log(solve([3, 2, 1], [3, 3, 3]))