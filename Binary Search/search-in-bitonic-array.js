function getMaxInd(arr) {
  let lo = 0, hi = arr.length - 1, mid, prev, next;
  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    next = (mid + 1) % arr.length;
    prev = (mid - 1 + arr.length) % arr.length;
    if(arr[mid] >= arr[prev] && arr[mid] >= arr[next]) {
      return mid;
    } else if(arr[mid] >= arr[lo] && arr[mid] >= arr[prev]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return 0;
}

function getIndForOrder(arr, lo, hi, key, isAsc) {
  let mid;
  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if(arr[mid] === key) {
      return mid;
    } else if(arr[mid] > key) {
      if(isAsc) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if(isAsc) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
}

function getInd(arr, key) {
  let maxElementInd = getMaxInd(arr);
  let ascRes = getIndForOrder(arr, 0, maxElementInd, key, true)
  if(ascRes !== -1) return ascRes;
  return getIndForOrder(arr, maxElementInd + 1, arr.length - 1, key, false);
}

console.log(getInd([3, 9, 10, 20, 17, 5, 1], 20));
console.log(getInd([5, 6, 7, 8, 9, 10, 3, 2, 1], 30));