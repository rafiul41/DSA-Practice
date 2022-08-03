function searchForRange(arr, numb) {
  let lo = 0,
    hi = arr.length - 1,
    mid,
    start = -1;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === numb) {
      ans = mid;
      hi = mid - 1;
    } else if (arr[mid] > numb) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  if (start === -1) return [-1, -1];

  (lo = 0), (hi = arr.length - 1);
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === numb) {
      ans = mid;
      lo = mid + 1;
    } else if (arr[mid] > numb) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return [start, end];
}

console.log(searchForRange([1, 2, 2, 3]));