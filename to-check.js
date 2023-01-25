let str, whiteCntCumulative, blackCntCumulative;

function dp(start, end, k) {
  if(start === end) {
    return 0;
  }
  if(k === 1) {
    return whiteCntCumulative[str.length - 1] * blackCntCumulative[str.length - 1];
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for(let i = start + 1; i <= end; i++) {
    let toCheck = func(start, i - 1, k - 1) + func(i, end, k - 1);
    ans = Math.min(ans, toCheck);
  }
  return ans;
}

function func(givenStr, stables) {
  whiteCntCumulative = Array(givenStr.length).fill(0);
  blackCntCumulative = Array(givenStr.length).fill(0);

  whiteCntCumulative[0] = givenStr[0] === 'W' ? 1 : 0;
  blackCntCumulative[0] = givenStr[0] === 'B' ? 1 : 0;

  for(let i = 1; i < givenStr.length; i++) {
    whiteCntCumulative[i] = whiteCntCumulative[i - 1] + (givenStr[i] === 'W' ? 1 : 0);
    blackCntCumulative[i] = blackCntCumulative[i - 1] + (givenStr[i] === 'B' ? 1 : 0);
  }

  str = givenStr;
  return dp(0, str.length - 1, stables);
}

console.log(func('WWWB', 2));