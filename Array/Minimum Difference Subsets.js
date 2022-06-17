function minDiff(arr, ind, toMake, memo = {}) {
  if(memo[ind + '/' + toMake] !== undefined) return memo[ind + '/' + toMake];
  if(ind < 0 || toMake === 0) return toMake;
  let op1 = Number.MAX_SAFE_INTEGER, op2 = Number.MAX_SAFE_INTEGER;
  if(toMake >= arr[ind]) {
    op1 = minDiff(arr, ind - 1, toMake - arr[ind], memo);
  }
  op2 = minDiff(arr, ind - 1, toMake, memo);
  return memo[ind + '/' + toMake] = Math.min(op1, op2);
}

function minDiffIterative(arr, toMake) {
  const dp = [];
  for(let i = 0; i <= arr.length; i++) {
    dp[i] = [];
    for(let j = 0; j <= toMake; j++) {
      dp[i][j] = 0;
    }
  }

  for(let i = 1; i <= arr.length; i++) {
    for(let j = 1; j <= toMake; j++) {
      let op1 = dp[i - 1][j], op2 = Number.MAX_SAFE_INTEGER;
      if(arr[i - 1] <= j) {
        op2 = dp[i - 1][j - arr[i - 1]];
      }
      dp[i][j] = Math.min(op1, op2);
    }
  }

  return dp[arr.length][toMake];
}

const A = [ 5 ];

const totalSum = A.reduce((prevAccumulated, curr) => curr + prevAccumulated, 0);
const toMake = parseInt(totalSum / 2);
const minDiffToMake = minDiffIterative(A, toMake);
console.log('MINDIFF', minDiffToMake);
const canMake = toMake - minDiffToMake;
const otherSetSum = totalSum - canMake;
console.log(Math.abs(otherSetSum - canMake));
