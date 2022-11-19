let ans, arr;
function mergeSort(start, end) {
  if(start === end) return;
  let mid = start + Math.floor((end - start) / 2);
  mergeSort(start, mid);
  mergeSort(mid + 1, end);
  let sorted = [], p1 = start, p2 = mid + 1;
  while(p1 <= mid && p2 <= end) {
    if(arr[p1] <= arr[p2]) {
      sorted.push(arr[p1]);
      p1++;
    } else {
      ans += mid - p1 + 1;
      sorted.push(arr[p2]);
      p2++;
    }
  }
  while(p1 <= mid) {
    sorted.push(arr[p1]);
    p1++;
  }
  while(p2 <= end) {
    sorted.push(arr[p2]);
    p2++;
  }
  for(let i = start, j = 0; i <= end; i++, j++) {
    arr[i] = sorted[j];
  }
}

function countInversions(A) {
  ans = 0;
  arr = A;
  mergeSort(0, arr.length - 1);
  return ans;
}

console.log(countInversions([2, 4, 1, 3, 5]));