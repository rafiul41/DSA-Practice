function isDiffKPresent(arr, k) {
  let p1 = 0, p2 = 1;
  while(p2 < arr.length) {
    if(arr[p2] - arr[p1] === k) return 1;
    while(p1 < p2 && arr[p2] - arr[p1] > k) {
      p1++;
    }
    p2++;
  }
  return 0;
}

console.log(isDiffKPresent([0, 1, 9, 10, 13, 17, 17, 17, 23, 25, 29, 30, 37, 38, 39, 39, 40, 41, 42, 60, 64, 70, 70, 70, 72, 75, 85, 85, 90, 91, 91, 93, 95], 83));