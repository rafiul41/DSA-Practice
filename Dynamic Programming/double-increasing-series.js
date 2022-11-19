let mod = 1e9 + 7;

function func(numb, toTake, memo = {}) {
  if(memo[numb + '/' + toTake] !== undefined) return memo[numb + '/' + toTake];
  if(toTake < 0 || numb <= 0) return memo[numb + '/' + toTake] = 0;
  if(toTake === 1) return memo[numb + '/' + toTake] = numb;
  let op1 = func(Math.floor(numb / 2), toTake - 1, memo) % mod;
  let op2 = func(numb - 1, toTake, memo) % mod;
  return memo[numb + '/' + toTake] = (op1 + op2) % mod;
}

function getSeriesCnt(maxNumb, len) {
  return func(maxNumb, len);
}

function getSeriesCntIterative(maxNumb, len) {
  let dp = [];
  for(let i = 0; i <= maxNumb; i++) {
    dp.push(Array(len + 1).fill(0));
  }

  for(let i = 0; i <= maxNumb; i++) {
    dp[i][0] = 0;
  }

  for(let i = 0; i <= maxNumb; i++) {
    dp[i][1] = i;
  }

  for(let j = 1; j <= len; j++) {
    dp[0][j] = 0;
  }

  for(let i = 1; i <= maxNumb; i++) {
    for(let j = 2; j <= len; j++) {
      let op1 = dp[Math.floor(i / 2)][j - 1];
      let op2 = dp[i - 1][j];
      dp[i][j] = (op1 + op2) % mod;
    }
  }

  return dp[maxNumb][len];
}

console.log(getSeriesCntIterative(100000, 12));
// console.log(getSeriesCntIterative(4, 2));