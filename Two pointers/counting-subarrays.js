function getSubArrayCnt(arr, sum) {
  let p1 = 0, p2 = 0;
  let currSum = 0;
  let ans = 0;
  while(p2 < arr.length) {
    if(currSum + arr[p2] < sum) {
      ans++;
      currSum += arr[p2];
      p2++;
      continue;
    }
    while(p1 < p2 && currSum + arr[p2] >= sum) {
      currSum -= arr[p1];
      ans++;
      p1++;
    }
    if(p1 === p2) {
      p2++;
      p1 = p2;
    }
  }

  if(p1 !== p2) {
    
  }

  return ans;
}

console.log(getSubArrayCnt([1, 2, 3, 10, 2], 6));
console.log(getSubArrayCnt([1, 2, 3, 4], 100));