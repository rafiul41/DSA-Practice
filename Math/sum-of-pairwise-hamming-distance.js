function getSumOfHammingDist(arr) {
  let bitLen = 5;
  const cum1Cnt = [];
  for(let i = 0; i < arr.length; i++) {
    cum1Cnt[i] = Array(bitLen).fill(0);
  }

  for(let i = 0; i < bitLen; i++) {
    cum1Cnt[0][i] = 1 & (arr[0] >> i);
  }

  let ans = 0;
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < bitLen; j++) {
      let currBit = (1 & (arr[i] >> j));
      ans += currBit === 0 ? cum1Cnt[i - 1][j] : i - cum1Cnt[i - 1][j];
      cum1Cnt[i][j] = currBit + cum1Cnt[i - 1][j];
    }
  }

  return ans * 2;
}

console.log(getSumOfHammingDist([2, 4, 6]));