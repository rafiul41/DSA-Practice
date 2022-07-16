function getInversions(arr) {
  console.log('LEN:', arr.length);
  let ans = 0;
  for(let i = 1; i < arr.length; i++) {
    let greaterOrEqualCnt = 0;
    for(let j = i - 1; j >= 0; j--) {
      if(arr[j] > arr[i]) {
        greaterOrEqualCnt++;
      }
    }
    console.log(greaterOrEqualCnt);
    ans += greaterOrEqualCnt;
  }
  return ans;
}

console.log('ANS:', getInversions([84, 2, 37, 3, 67, 82, 19, 97, 91, 63, 27, 6, 13, 90, 63, 89, 100, 60, 47, 96, 54, 26, 64, 50, 71, 16, 6, 40, 84, 93, 67, 85, 16, 22, 60]));
