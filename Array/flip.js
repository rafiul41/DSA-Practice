function func(arr) {
  if(arr.length === 0) return [];

  const zeroCnt = Array(arr.length).fill(0);
  const oneCnt = Array(arr.length).fill(0);
  zeroCnt[0] = arr[0] === '0' ? 1 : 0;
  oneCnt[0] = arr[0] === '1' ? 1 : 0;
  for(let i = 1; i < arr.length; i++) {
    zeroCnt[i] = zeroCnt[i - 1] + (arr[i] === '0');
    oneCnt[i] = oneCnt[i - 1] + (arr[i] === '1');
  }
  
  if(oneCnt[arr.length - 1] === 0) return [];


  let ans = [];

  let maxCnt = 0, currCnt;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      currCnt = (i - 1 >= 0 ? oneCnt[i - 1] : 0)
      + (zeroCnt[j] - (i - 1 >= 0 ? zeroCnt[i - 1] : 0))
      + (oneCnt[arr.length - 1] - (j - 1 >= 0 ? oneCnt[j - 1] : 0));

      if(currCnt > maxCnt) {
        ans = [i + 1, j + 1];
        maxCnt = currCnt;
      }
    }
  }

  return ans;
}

console.log(func('010'));
console.log(func('111'));
console.log(func('0101'));
console.log(func('010010'));