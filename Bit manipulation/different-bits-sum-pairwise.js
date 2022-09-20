function getPairwiseDifferentBitsSum(arr) {
  let maxBits = 0;
  for(let numb of arr) {
    maxBits = Math.max(maxBits, Math.floor(Math.log2(numb)) + 1);
  }
  let setBitsCumSum = [], unsetBitsCumSum = [];
  for(let i = 0; i < arr.length; i++) {
    setBitsCumSum.push(Array(maxBits).fill(0));
    unsetBitsCumSum.push(Array(maxBits).fill(0));
  }

  for(let i = 0; i < maxBits; i++) {
    let numb = arr[0];
    if((numb & (1 << i)) > 0) {
      setBitsCumSum[0][i] = 1;
    } else {
      unsetBitsCumSum[0][i] = 1;
    }
  }

  for(let i = 1; i < arr.length; i++) {
    let numb = arr[i];
    for(let j = 0; j < maxBits; j++) {
      setBitsCumSum[i][j] = setBitsCumSum[i - 1][j];
      unsetBitsCumSum[i][j] = unsetBitsCumSum[i - 1][j];
      if((numb & (1 << j)) > 0) {
        setBitsCumSum[i][j]++;
      } else {
        unsetBitsCumSum[i][j]++;
      }
    }
  }

  let ans = 0, mod = 1e9 + 7;
  for(let i = 1; i < arr.length; i++) {
    let numb = arr[i];
    for(let j = 0; j < maxBits; j++) {
      if((numb & (1 << j))) {
        ans += unsetBitsCumSum[i - 1][j];
      } else {
        ans += setBitsCumSum[i - 1][j];
      }
      ans %= mod;
    }
  }
  return (ans * 2) % mod;
}

console.log(getPairwiseDifferentBitsSum([1, 3, 5]));