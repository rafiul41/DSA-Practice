let str, whiteCntCumulative, blackCntCumulative;

function getWhiteCnt(a, b) {
  return whiteCntCumulative[b] - (a - 1 >= 0 ? whiteCntCumulative[a - 1] : 0);
}

function getBlackCnt(a, b) {
  return blackCntCumulative[b] - (a - 1 >= 0 ? blackCntCumulative[a - 1] : 0);
}

function dp(start, k, memo = {}) {
  if(memo[start + '/' + k] !== undefined) return memo[start + '/' + k];
  if(k === 1) {
    return memo[start + '/' + k] = getWhiteCnt(start, str.length - 1) * getBlackCnt(start, str.length - 1);
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for(let i = start; i <= str.length - k; i++) {
    let toCheck = (getWhiteCnt(start, i) * getBlackCnt(start, i)) + dp(i + 1, k - 1, memo);
    ans = Math.min(ans, toCheck);
  }
  return memo[start + '/' + k] = ans;
}

function func(givenStr, stables) {
  if(stables > givenStr.length) return -1;
  whiteCntCumulative = Array(givenStr.length).fill(0);
  blackCntCumulative = Array(givenStr.length).fill(0);

  whiteCntCumulative[0] = givenStr[0] === 'W' ? 1 : 0;
  blackCntCumulative[0] = givenStr[0] === 'B' ? 1 : 0;

  for(let i = 1; i < givenStr.length; i++) {
    whiteCntCumulative[i] = whiteCntCumulative[i - 1] + (givenStr[i] === 'W' ? 1 : 0);
    blackCntCumulative[i] = blackCntCumulative[i - 1] + (givenStr[i] === 'B' ? 1 : 0);
  }

  str = givenStr;
  return dp(0, stables);
}

console.log(func('WWBBBBWBWBWBWWBWBWBWWBBBWBWBW', 6));
