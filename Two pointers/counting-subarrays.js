function getSubArrayCnt(arr, sum) {
  let p1 = 0, p2 = 0;
  let ans = 0, currSum = arr[p1];
  while(p2 < arr.length) {
    if(currSum < sum) {
      ans += (p2 - p1 + 1);
      p2++;
      continue;
    }
    while(p1 < p2 && currSum >= sum) {
      currSum -= arr[p1];
      p1++;
    }
  }
  return ans;
}

// console.log(getSubArrayCnt([1, 2, 3, 10, 2], 6));
// console.log(getSubArrayCnt([1, 2, 3, 4], 100));
console.log(getSubArrayCnt([2, 5, 4, 3], 10));