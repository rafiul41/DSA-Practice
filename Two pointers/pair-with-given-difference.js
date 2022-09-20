function doesPairExist(arr, diff) {
  if(diff < 0) diff = -diff;
  arr.sort((a, b) => a - b);
  let p1 = 0, p2 = 1;
  while(p2 < arr.length) {
    if(Math.abs(arr[p2] - arr[p1]) === diff) return 1;
    while(p1 < p2 && Math.abs(arr[p2] - arr[p1]) > diff) {
      p1++;
    }
    p2++;
  }
  return 0;
}

console.log(doesPairExist([-259, -825, 459, 825, 221, 870, 626, 934, 205, 783, 850, 398], -42));