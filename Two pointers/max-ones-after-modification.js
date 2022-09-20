function maxSubSegment(arr, given) {
  let p1 = 0,
    p2 = 0;
  let ans = 1;
  while (p2 < arr.length) {
    if (arr[p2] === 1) {
      ans = Math.max(ans, p2 - p1 + 1);
      p2++;
      continue;
    }
    if (given > 0) {
      given--;
      ans = Math.max(ans, p2 - p1 + 1);
      p2++;
    } else {
      while (p1 <= p2 && given === 0) {
        if (arr[p1] === 0) {
          given++;
        }
        p1++;
      }
    }
  }

  return ans;
}

console.log(maxSubSegment([1, 0, 0], 1));
