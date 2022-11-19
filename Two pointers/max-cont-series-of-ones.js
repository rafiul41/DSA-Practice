function getMaxContinuousSeriesOfOnes(arr, maxFlips) {
  let p1 = 0, p2 = 0, maxOnes = 0, left, right;
  while(p2 < arr.length) {
    if(arr[p2] === 0) {
      maxFlips--;
    }
    p2++;

    while(p1 < p2 && maxFlips < 0) {
      if(arr[p1] === 0) maxFlips++;
      p1++;
    }

    let currOnes = p2 - p1;
    if(currOnes > maxOnes) {
      left = p1;
      right = p2 - 1;
      maxOnes = currOnes;
    }
  }

  let ans = [];
  for(let i = left; i <= right; i++) {
    ans.push(i);
  }
  return ans;
}

console.log(getMaxContinuousSeriesOfOnes([1, 1, 0, 1, 1, 0, 0, 1, 1, 1], 1));
console.log(getMaxContinuousSeriesOfOnes([1, 1, 0], 0));
console.log(getMaxContinuousSeriesOfOnes([1, 1, 0, 1, 1, 1], 0));